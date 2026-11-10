const categorias = [
  { id: 'guitarras', nombre: 'Guitarras' },
  { id: 'bajos', nombre: 'Bajos' },
  { id: 'ukeleles', nombre: 'Ukeleles' },
  { id: 'percusion', nombre: 'Percusión' },
  { id: 'accesorios', nombre: 'Accesorios' },
  { id: 'mas', nombre: 'Más cosas' }
];

const productos = [
  { id: 1, nombre: 'Guitarra clásica 4/4', cat: 'guitarras', marca: 'Cordoba', precio: 189, nuevo: true },
  { id: 2, nombre: 'Guitarra acústica folk', cat: 'guitarras', marca: 'Yamaha', precio: 249, nuevo: false },
  { id: 3, nombre: 'Guitarra eléctrica HSS', cat: 'guitarras', marca: 'Fender', precio: 499, nuevo: true },
  { id: 4, nombre: 'Guitarra eléctrica semihueca', cat: 'guitarras', marca: 'Ibanez', precio: 649, nuevo: false },
  { id: 5, nombre: 'Bajo eléctrico 4 cuerdas', cat: 'bajos', marca: 'Fender', precio: 459, nuevo: true },
  { id: 6, nombre: 'Bajo acústico', cat: 'bajos', marca: 'Ibanez', precio: 379, nuevo: false },
  { id: 7, nombre: 'Ukelele soprano', cat: 'ukeleles', marca: 'Kala', precio: 69, nuevo: false },
  { id: 8, nombre: 'Ukelele tenor', cat: 'ukeleles', marca: 'Kala', precio: 109, nuevo: true },
  { id: 9, nombre: 'Batería compacta 5 piezas', cat: 'percusion', marca: 'Pearl', precio: 449, nuevo: false },
  { id: 10, nombre: 'Cajón flamenco', cat: 'percusion', marca: 'Pearl', precio: 119, nuevo: true },
  { id: 11, nombre: 'Cuerdas acústicas', cat: 'accesorios', marca: 'Ernie Ball', precio: 9, nuevo: false },
  { id: 12, nombre: 'Afinador de pinza', cat: 'accesorios', marca: 'Boss', precio: 19, nuevo: false },
  { id: 13, nombre: 'Pedal de distorsión', cat: 'mas', marca: 'Boss', precio: 89, nuevo: false },
  { id: 14, nombre: 'Amplificador 20 W', cat: 'mas', marca: 'Yamaha', precio: 159, nuevo: false }
];


// SCROLL INFINITO

const progressFill = document.getElementById('progressFill');

function updateProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? window.scrollY / max : 0;
    progressFill.style.width = (progress * 100) + '%';
}

window.addEventListener('scroll', updateProgress);
window.addEventListener('resize', updateProgress);
updateProgress();

 
// =====================================================
// 6. CARRITO (está en todas las páginas)
// =====================================================
 
// Metemos el panel del carrito en la página (así no hay que copiarlo en cada HTML)
document.body.insertAdjacentHTML('beforeend', `
  <div class="overlay" id="overlay" onclick="cerrarCarrito()"></div>
  <aside class="cart-drawer" id="drawer" aria-label="Carrito" inert>
    <div class="drawer-top">
      <h2>Carrito</h2>
      <button type="button" aria-label="Cerrar carrito" onclick="cerrarCarrito()">&times;</button>
    </div>
    <div class="cart-items" id="cart-items"></div>
    <p class="cart-total" id="cart-total"></p>
    <p class="cart-msg" id="cart-msg"></p>
    </aside>`);
 
const panel = document.getElementById('drawer');
const fondo = document.getElementById('overlay');
const mensaje = document.getElementById('cart-msg');
 
// El carrito es una lista: [ { id: 3, cantidad: 2 }, { id: 7, cantidad: 1 } ]
// Se guarda en localStorage para que no se pierda al cambiar de página
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
 
function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}
 
function abrirCarrito() {
  panel.inert = false; // "inert" evita entrar con el tabulador cuando está cerrado
  panel.classList.add('open');
  fondo.classList.add('open');
}
 
function cerrarCarrito() {
  panel.classList.remove('open');
  fondo.classList.remove('open');
  panel.inert = true;
}
 
function calcularTotal() {
  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    const p = buscarProducto(carrito[i].id);
    total += p.precio * carrito[i].cantidad;
  }
  return total;
}
 
// Vuelve a dibujar el contenido del carrito y el número de arriba
function dibujarCarrito() {
  let html = '';
  let unidades = 0;
 
  for (let i = 0; i < carrito.length; i++) {
    const p = buscarProducto(carrito[i].id);
    const cantidad = carrito[i].cantidad;
    unidades += cantidad;
 
    html += `
      <div class="cart-item">
        <div class="thumb" ${estiloImagen(p.id)}></div>
        <div>
          <strong>${p.nombre}</strong>
          <small>x${cantidad}</small>
        </div>
        <b>${p.precio * cantidad} €</b>
        <button type="button" class="rm" aria-label="Quitar ${p.nombre}" onclick="quitarDelCarrito(${p.id})">&times;</button>
      </div>`;
  }
 
  if (html === '') {
    html = '<p>Tu carrito está vacío.</p>';
    document.getElementById('cart-total').textContent = '';
  } else {
    document.getElementById('cart-total').textContent = 'Total: ' + calcularTotal() + ' €';
  }

  document.getElementById('cart-items').innerHTML = html;
  document.getElementById('cart-count').textContent = unidades;
}
 
 
document.querySelector('.cart').onclick = function (evento) {
  evento.preventDefault();
  abrirCarrito();
};
 
dibujarCarrito();
