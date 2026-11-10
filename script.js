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
    <button type="button" class="btn-red" onclick="vaciarCarrito()">Vaciar</button>
    <button type="button" class="btn-green" onclick="pagar()">Proc. pago</button>
  </aside>`);


const cartBtn = document.querySelector('.cart-btn');
const panel = document.getElementById('drawer');
const fondo = document.getElementById('overlay');
const mensaje = document.getElementById('cart-msg');
 
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
 
function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function abrirCarrito() {
  panel.inert = false;
  panel.classList.add('open');
  fondo.classList.add('open');
}
 
function cerrarCarrito() {
  panel.classList.remove('open');
  fondo.classList.remove('open');
  panel.inert = true;
}
