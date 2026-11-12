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


// =====================================================
// BARRA DE PROGRESO
// =====================================================

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
// FUNCIONES DE AYUDA
// =====================================================

function buscarProducto(id) {
  return productos.find(function (p) {
    return p.id === id;
  });
}

// Imagen del producto: cambia la ruta por la que uses en tu carpeta img
function estiloImagen(id) {
  return 'style="background-image:url(\'./img/producto_' + id + '.png\')"';
}


// =====================================================
// PRODUCTOS NUEVOS (solo se pintan si existe el contenedor, o sea, en index)
// =====================================================

function mostrarNuevos() {
  const contenedor = document.querySelector('.grid-new-items');
  if (contenedor == null) {
    return;
  }

  productos.forEach(function (p) {
    if (p.nuevo) {
      const caja = document.createElement('div');
      caja.className = 'product-card';
      caja.innerHTML =
        '<div class="thumb" ' + estiloImagen(p.id) + '></div>' +
        '<h3>' + p.nombre + '</h3>' +
        '<small>' + p.marca + '</small>' +
        '<p class="precio">' + p.precio + ' €</p>' +
        '<button type="button" onclick="anadirAlCarrito(' + p.id + ')">Añadir</button>';
      contenedor.appendChild(caja);
    }
  });
}


// =====================================================
// CARRITO (está en todas las páginas)
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
    <button type="button" class="btn-green" onclick="checkOut()">Finalizar compra</button>
    <button type="button" class="btn-red" onclick="vaciarCarrito()">Vaciar carrito</button>
    <button type="button" class="history-toggle" id="history-toggle" onclick="historialCompra()">▶ Historial de compras</button>
    <ul class="history-list" id="history-list" hidden></ul>
  </aside>`);

const panel = document.getElementById('drawer');
const fondo = document.getElementById('overlay');
const mensaje = document.getElementById('cart-msg');
const desplegable = document.getElementById('history-toggle');
const listaPrevias = document.getElementById('history-list');

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let historial = [];
let desplegado = false;
let comprando = false;

// Servidor donde se guardan las compras
const id = 'PabloPicanyaMusic';
const url_guardar = `https://datos.cursoweb.tech/guardar.php?dest=${id}`;
const url_leer = `https://datos.cursoweb.tech/leer.php?dest=${id}`;
const usuario = 'labora';
const password = 'Cl4v3$';
const credenciales = btoa(`${usuario}:${password}`);

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

function calcularTotal() {
  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    const p = buscarProducto(carrito[i].id);
    total += p.precio * carrito[i].cantidad;
  }
  return total;
}

function anadirAlCarrito(idProducto) {
  const existente = carrito.find(function (item) {
    return item.id === idProducto;
  });

  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({ id: idProducto, cantidad: 1 });
  }

  mensaje.textContent = 'Producto añadido.';
  guardarCarrito();
  dibujarCarrito();

  // Animación del contador del botón del carrito
  const boton = document.querySelector('.cart-btn');
  boton.classList.remove('bump');
  void boton.offsetWidth;
  boton.classList.add('bump');
}

function aumentarCarrito(idProducto) {
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].id === idProducto) {
      carrito[i].cantidad++;
    }
  }
  mensaje.textContent = 'Producto añadido.';
  guardarCarrito();
  dibujarCarrito();
}

function quitarDelCarrito(idProducto) {
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].id === idProducto) {
      if (carrito[i].cantidad > 1) {
        carrito[i].cantidad--;
      } else {
        carrito.splice(i, 1);
      }
      break;
    }
  }
  mensaje.textContent = 'Producto quitado.';
  guardarCarrito();
  dibujarCarrito();
}

function vaciarCarrito() {
  if (carrito.length != 0) {
    carrito = [];
    guardarCarrito();
    mensaje.textContent = 'Carrito vaciado.';
    dibujarCarrito();
  } else {
    mensaje.textContent = 'El carrito ya está vacío.';
  }
}

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
          <button type="button" class="plus" aria-label="Añadir otro ${p.nombre}" onclick="aumentarCarrito(${p.id})">+</button>
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


// =====================================================
// CHECKOUT Y SERVIDOR
// =====================================================

async function checkOut() {
  if (comprando) {
    return;
  }

  if (carrito.length == 0) {
    mensaje.textContent = 'Añade productos para realizar la compra.';
    return;
  }

  comprando = true;
  mensaje.textContent = 'Guardando compra...';

  // Guardamos nombre y precio (no solo el id) para que el recibo sea siempre igual
  const lineas = [];
  for (let i = 0; i < carrito.length; i++) {
    const p = buscarProducto(carrito[i].id);
    lineas.push({
      nombre: p.nombre,
      precio: p.precio,
      cantidad: carrito[i].cantidad
    });
  }

  const compra = {
    fecha: new Date().toLocaleString(),
    productos: lineas,
    total: calcularTotal()
  };

  const guardada = await guardarCompra(compra);
  comprando = false;

  if (guardada) {
    carrito = [];
    guardarCarrito();
    dibujarCarrito();
    mensaje.textContent = 'Compra realizada con éxito.';
  } else {
    mensaje.textContent = 'No se pudo realizar la compra.';
  }
}

async function guardarCompra(compra) {
  try {
    const res = await fetch(url_guardar, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${credenciales}`
      },
      body: JSON.stringify(compra)
    });

    if (!res.ok) {
      throw new Error('Error en la conexión');
    }

    await leerHistorial();
    return true;
  } catch (error) {
    console.error('Error al guardar la compra:', error);
    return false;
  }
}

async function leerHistorial() {
  try {
    const res = await fetch(url_leer);

    if (!res.ok) {
      throw new Error('No se ha podido conectar');
    }

    historial = await res.json();
    mostrarHistorial();
  } catch (error) {
    console.error('Error al leer el historial:', error);
  }
}

function mostrarHistorial() {
  listaPrevias.innerHTML = '';

  for (let i = 0; i < historial.length; i++) {
    const compra = historial[i];
    const textoCabecera = compra.fecha + ' - total ' + compra.total + ' €';

    const recibo = document.createElement('li');

    const cabecera = document.createElement('p');
    cabecera.textContent = '▶ ' + textoCabecera;

    const detalle = document.createElement('ul');
    detalle.hidden = true;

    for (let j = 0; j < compra.productos.length; j++) {
      const producto = compra.productos[j];
      const lineaProducto = document.createElement('li');
      lineaProducto.textContent = producto.nombre + ' x' + producto.cantidad + ' - ' + (producto.precio * producto.cantidad) + ' €';
      detalle.appendChild(lineaProducto);
    }

    cabecera.onclick = function () {
      if (detalle.hidden == true) {
        detalle.hidden = false;
        cabecera.textContent = '▼ ' + textoCabecera;
      } else {
        detalle.hidden = true;
        cabecera.textContent = '▶ ' + textoCabecera;
      }
    };

    const botonDescargar = document.createElement('button');
    botonDescargar.type = 'button';
    botonDescargar.textContent = '⬇';
    botonDescargar.title = 'Descargar recibo';
    botonDescargar.onclick = function () {
      descargarRecibo(compra, i + 1);
    };

    const fila = document.createElement('div');
    fila.className = 'fila-recibo';
    fila.appendChild(cabecera);
    fila.appendChild(botonDescargar);

    recibo.appendChild(fila);
    recibo.appendChild(detalle);
    listaPrevias.appendChild(recibo);
  }
}

function historialCompra() {
  if (desplegado == false) {
    desplegado = true;
    desplegable.textContent = '▼ Historial de compras';
    listaPrevias.hidden = false;
  } else {
    desplegado = false;
    desplegable.textContent = '▶ Historial de compras';
    listaPrevias.hidden = true;
  }
}

function descargarRecibo(compra, numero) {
  let texto = 'RECIBO - Picanya Music\n';
  texto = texto + 'Fecha: ' + compra.fecha + '\n\n';

  for (let i = 0; i < compra.productos.length; i++) {
    const producto = compra.productos[i];
    texto = texto + producto.nombre + ' x' + producto.cantidad + ' - ' + (producto.precio * producto.cantidad) + ' €\n';
  }

  texto = texto + '\nTOTAL: ' + compra.total + ' €\n';

  const archivo = new Blob([texto], { type: 'text/plain' });
  const enlace = document.createElement('a');
  enlace.href = URL.createObjectURL(archivo);
  enlace.download = 'recibo-' + numero + '.txt';
  enlace.click();
  URL.revokeObjectURL(enlace.href);
}


// =====================================================
// ARRANQUE
// =====================================================

document.querySelector('.cart').onclick = function (evento) {
  evento.preventDefault();
  abrirCarrito();
};

mostrarNuevos();
dibujarCarrito();
leerHistorial();