// Los id de las categorías coinciden con las carpetas de img/
const categorias = [
  { id: 'guitarras', nombre: 'Guitarras' },
  { id: 'bajos', nombre: 'Bajos' },
  { id: 'percusion', nombre: 'Percusión' },
  { id: 'cabinas', nombre: 'Cabinas' },
  { id: 'pedales', nombre: 'Pedales'},
  { id: 'equipamiento', nombre: 'Equipamiento' }
];

const productos = [

  // TOTAL ITEM COUNT: 54

  // GUITARRAS
  { id: 1, nombre: 'Les Paul', cat: 'guitarras', marca: 'Epiphone', precio: 379.95, nuevo: false, oferta: true, imagen: 'guitarras/epiphone/epiphone_lespaul.webp' },
  { id: 2, nombre: 'Les Paul Tribute', cat: 'guitarras', marca: 'Epiphone', precio: 499.95, nuevo: false, oferta: true, imagen: 'guitarras/epiphone/epiphone_lespaul_tribute.webp' },
  { id: 3, nombre: 'Les Paul Pro', cat: 'guitarras', marca: 'Epiphone', precio: 819.95, nuevo: false, oferta: false, imagen: 'guitarras/epiphone/epiphone_lespaul_pro.webp' },
  { id: 4, nombre: 'GRG121DX WNF', cat: 'guitarras', marca: 'Ibanez', precio: 219.95, nuevo: false, oferta: false, imagen: 'guitarras/ibanez/ibanez_grg121dx.webp' },
  { id: 5, nombre: 'GRG140 WH', cat: 'guitarras', marca: 'Ibanez', precio: 239.95, nuevo: false, oferta: false, imagen: 'guitarras/ibanez/ibanez_grg140.webp' },
  { id: 6, nombre: 'GIO GRG170 DX', cat: 'guitarras', marca: 'Ibanez', precio: 289.95, nuevo: false, oferta: false, imagen: 'guitarras/ibanez/ibanez_grg170dx.webp' },
  { id: 7, nombre: 'GIO GRG70 QA', cat: 'guitarras', marca: 'Ibanez', precio: 229.95, nuevo: false, oferta: false, imagen: 'guitarras/ibanez/ibanez_grx70qa.webp' },
  { id: 8, nombre: 'RG5121RET Prestige', cat: 'guitarras', marca: 'Ibanez', precio: 2779.95, nuevo: true, imagen: 'guitarras/ibanez/ibanez_prestige_rg5121ret.webp' },
  { id: 9, nombre: 'RG450DBX WH', cat: 'guitarras', marca: 'Ibanez', precio: 499.95, nuevo: false, imagen: 'guitarras/ibanez/ibanez_rg450dbx.webp' },
  { id: 10, nombre: 'RGMS8 BK Multiscale', cat: 'guitarras', marca: 'Ibanez', precio: 599.95, nuevo: false, oferta: false, imagen: 'guitarras/ibanez/ibanez_rgms8.webp' },
  { id: 11, nombre: 'SA260FM-BRG', cat: 'guitarras', marca: 'Ibanez', precio: 389.95, nuevo: false, oferta: false, imagen: 'guitarras/ibanez/ibanez_sa260fm.webp' },
  { id: 12, nombre: 'PX-SOLAR170C Parallaxe 7', cat: 'guitarras', marca: 'Solar', precio: 569.95, nuevo: true, oferta: false, imagen: 'guitarras/solar/solar_pxsolar170c.webp' },
  { id: 13, nombre: 'Stratocaster', cat: 'guitarras', marca: 'Squier', precio: 109.95, nuevo: false, oferta: false, imagen: 'guitarras/squier/squier_stratocaster.webp' },
  { id: 14, nombre: 'Telecaster', cat: 'guitarras', marca: 'Squier', precio: 559.95, nuevo: false, oferta: false, imagen: 'guitarras/squier/squier_telecaster.webp' },
  { id: 15, nombre: 'Telecaster Thinline', cat: 'guitarras', marca: 'Squier', precio: 2549.95, nuevo: false, oferta: false, imagen: 'guitarras/squier/squier_telecaster_thinline.webp' },

  // BAJOS
  { id: 16, nombre: 'GSR200 BK', cat: 'bajos', marca: 'Ibanez', precio: 249.95, nuevo: false, oferta: false, imagen: 'bajos/ibanez/ibanez_gsr200.webp' },
  { id: 17, nombre: 'SR300EDX BZM', cat: 'bajos', marca: 'Ibanez', precio: 369.95, nuevo: false, oferta: false, imagen: 'bajos/ibanez/ibanez_sr300edx.webp' },
  { id: 18, nombre: 'CBX IV', cat: 'bajos', marca: 'Jackson', precio: 699.95, nuevo: false, oferta: false, imagen: 'bajos/jackson/jackson_cbxiv.webp' },
  { id: 19, nombre: 'Spectra JS2', cat: 'bajos', marca: 'Jackson', precio: 229.95, nuevo: false, oferta: false, imagen: 'bajos/jackson/jackson_spectrajs2.webp' },
  { id: 54, nombre: 'V7 4 TSB Left-Handed', cat: 'bajos', marca: 'Sire Marcus Miller', precio: 809.95, nuevo: true, oferta: false, imagen: 'bajos/marcusmiller/marcusmiller_V7-4.webp' },

  // PERCUSIÓN
  { id: 20, nombre: 'DPD CM7', cat: 'percusion', marca: 'DW Drums', precio: 1499.95, nuevo: false, oferta: false, imagen: 'baterias/dpd_cm7.webp' },
  { id: 21, nombre: 'Nitro Max Kit', cat: 'percusion', marca: 'Alesis', precio: 379.95, nuevo: false, oferta: true, imagen: 'baterias/alesis_nitromax.webp' },
  { id: 22, nombre: 'Electronic Kit', cat: 'percusion', marca: 'Cahaya', precio: 299.95, nuevo: false, oferta: false, imagen: 'baterias/cahaya_electronic.webp' },
  { id: 23, nombre: 'RM-802 BK', cat: 'percusion', marca: 'RMX Percussion', precio: 429.95, nuevo: true, oferta: false, imagen: 'baterias/rmx_802bk.webp' },
  { id: 24, nombre: 'LJK48S', cat: 'percusion', marca: 'Tama', precio: 409.95, nuevo: false, oferta: false, imagen: 'baterias/tama_ljk48s.webp' },
  { id: 25, nombre: 'VEVOR Acoustic', cat: 'percusion', marca: 'Vevor', precio: 419.95, nuevo: false, oferta: false, imagen: 'baterias/vevor_acoustic.webp' },
  { id: 26, nombre: 'DD-530', cat: 'percusion', marca: 'XDrum', precio: 529.95, nuevo: false, oferta: false, imagen: 'baterias/xdrum_dd530.webp' },

  // CABINAS / AMPLIFICADORES
  { id: 27, nombre: 'FLY 3', cat: 'cabinas', marca: 'Blackstar', precio: 529.95, nuevo: false, oferta: false, imagen: 'cabinas/blackstar_fly3.webp' },
  { id: 28, nombre: 'Rumble 15', cat: 'cabinas', marca: 'Fender', precio: 109.95, nuevo: false, oferta: false, imagen: 'cabinas/fender_rumble15.webp' },
  { id: 29, nombre: 'Rumble 30', cat: 'cabinas', marca: 'Fender', precio: 159.95, nuevo: false, oferta: true, imagen: 'cabinas/fender_rumble30.webp' },
  { id: 30, nombre: 'Amp 15W', cat: 'cabinas', marca: 'Gear4music', precio: 59.95, nuevo: false, oferta: false, imagen: 'cabinas/gear4music.webp' },
  { id: 31, nombre: 'MG101GFX', cat: 'cabinas', marca: 'Marshall', precio: 274.95, nuevo: false, oferta: false, imagen: 'cabinas/marshall_mg101gfx.webp' },
  { id: 32, nombre: 'Crush Bas 50 Purple', cat: 'cabinas', marca: 'Orange', precio: 279.95, nuevo: true, oferta: false, imagen: 'cabinas/orange_crushbass.webp' },
  { id: 33, nombre: 'T30H Combo', cat: 'cabinas', marca: 'Orange', precio: 559.95, nuevo: false, oferta: false, imagen: 'cabinas/orange_t30h.webp' },

  // PEDALES
  { id: 47, nombre: 'Speedy Trigger Noise Gate', cat: 'pedales', marca: 'Artec', precio: 34.95, nuevo: false, oferta: false, imagen: 'pedales/artec_noisegate.webp' },
  { id: 48, nombre: 'DS-1 Distortion', cat: 'pedales', marca: 'Boss', precio: 79.95, nuevo: false, oferta: false, imagen: 'pedales/boss_ds1_dist.webp' },
  { id: 49, nombre: 'SD-1 Overdrive', cat: 'pedales', marca: 'Boss', precio: 79.95, nuevo: false, oferta: false, imagen: 'pedales/boss_sd1_overdrive.webp' },
  { id: 50, nombre: 'RAT 2 Distortion', cat: 'pedales', marca: 'Proco', precio: 89.95, nuevo: false, oferta: true, imagen: 'pedales/proco_rat2_dist.webp' },
  { id: 51, nombre: 'The Prophet Digital Delay', cat: 'pedales', marca: 'TC Electronic', precio: 39.95, nuevo: false, oferta: false, imagen: 'pedales/theprophet_delay.webp' },
  { id: 52, nombre: 'Slö Multi Texture Delay', cat: 'pedales', marca: 'Walrus Audio', precio: 109.95, nuevo: true, oferta: false, imagen: 'pedales/walrus_slo_reverb.webp' },
  { id: 53, nombre: 'Big Muff PI Fuzz', cat: 'pedales', marca: 'Electro-Harmonix', precio: 89.95, nuevo: false, oferta: false, imagen: 'pedales/electro_harmonix_bigmuff_fuzz.webp' },

  // EQUIPAMIENTO
  { id: 34, nombre: 'M-Track Solo', cat: 'equipamiento', marca: 'M-Audio', precio: 49.95, nuevo: false, oferta: true, imagen: 'equipamiento/mtrack_solo.webp' },
  { id: 35, nombre: 'M-Track Duo', cat: 'equipamiento', marca: 'M-Audio', precio: 69.95, nuevo: false, oferta: false, imagen: 'equipamiento/mtrack_duo.webp' },
  { id: 36, nombre: 'Scarlett 2i2', cat: 'equipamiento', marca: 'Focusrite', precio: 124.95, nuevo: true, oferta: false, imagen: 'equipamiento/focusrite_scarlett2i2.webp' },
  { id: 37, nombre: 'Jack 6.35mm', cat: 'equipamiento', marca: 'Anyplus', precio: 10.95, nuevo: false, oferta: false, imagen: 'equipamiento/anyplus_jack_6_35.webp' },
  { id: 38, nombre: 'Jack 6.35mm', cat: 'equipamiento', marca: 'OTraki', precio: 12.95, nuevo: false, oferta: false, imagen: 'equipamiento/otraki_jack_6_35.webp' },
  { id: 39, nombre: 'Blue Light Picks', cat: 'equipamiento', marca: 'Dunlop Gels', precio: 7.95, nuevo: false, oferta: false, imagen: 'equipamiento/dunlop_bluelight_pick.webp' },
  { id: 40, nombre: 'Red Heavy Picks', cat: 'equipamiento', marca: 'Dunlop Gels', precio: 7.95, nuevo: false, oferta: false, imagen: 'equipamiento/dunlop_heavyred_pick.webp' },
  { id: 41, nombre: 'Emerald Medium Picks', cat: 'equipamiento', marca: 'Fender', precio: 9.95, nuevo: false, oferta: false, imagen: 'equipamiento/fender_medium_pick.webp' },
  { id: 42, nombre: 'Black Medium Picks', cat: 'equipamiento', marca: 'Fender', precio: 9.95, nuevo: false, oferta: false, imagen: 'equipamiento/fender_blackmedium_pick.webp' },
  { id: 43, nombre: 'Regular Slinky 10 - 46', cat: 'equipamiento', marca: 'Ernieball', precio: 6.95, nuevo: false, oferta: false, imagen: 'equipamiento/ernieball_regular_slinky.webp' },
  { id: 44, nombre: 'Power Slinky 11 - 48', cat: 'equipamiento', marca: 'Ernieball', precio: 7.95, nuevo: false, oferta: false, imagen: 'equipamiento/ernieball_powerslinky.webp' },
  { id: 45, nombre: 'Heavy Bottom 10 - 62', cat: 'equipamiento', marca: 'Ernieball', precio: 9.95, nuevo: false, oferta: false, imagen: 'equipamiento/ernieball_heavybottom_7.webp' },
  { id: 46, nombre: 'Regular Slinky 10 - 74', cat: 'equipamiento', marca: 'Ernieball', precio: 11.95, nuevo: false, oferta: false, imagen: 'equipamiento/ernieball_regularslinky_8.webp' },
];


// =====================================================
// BARRA DE PROGRESO
// =====================================================

const progressFill = document.getElementById('progressFill');

function updateProgress() {
  // Si una página no tiene la barra, no hacemos nada (así no se rompe el resto del script)
  if (progressFill == null) {
    return;
  }
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

// Formatea un número a 2 decimales (con coma, estilo español): 1139.85 -> "1139,85"
function formatearPrecio(numero) {
  return Number(numero).toFixed(2).replace('.', ',');
}

// Pone primero los productos nuevos o en oferta; el resto mantiene su orden original
function destacadosPrimero(lista) {
  return lista.slice().sort(function (a, b) {
    const destacadoA = (a.nuevo || a.oferta) ? 1 : 0;
    const destacadoB = (b.nuevo || b.oferta) ? 1 : 0;
    return destacadoB - destacadoA;
  });
}

// Porcentaje de descuento por categoría (solo se aplica si el producto tiene oferta: true)
const descuentos = {
  guitarras: 15,
  bajos: 10,
  percusion: 20,
  cabinas: 10,
  pedales: 25,
  equipamiento: 30
};

// Porcentaje de descuento que le toca a un producto (0 si no está en oferta)
function porcentajeDescuento(p) {
  if (!p.oferta) {
    return 0;
  }
  return descuentos[p.cat] || 0;
}

// Precio real que se paga: con descuento si está en oferta, redondeado a 2 decimales
function precioFinal(p) {
  const porcentaje = porcentajeDescuento(p);
  if (porcentaje == 0) {
    return p.precio;
  }
  return Math.round(p.precio * (100 - porcentaje)) / 100;
}

// HTML del precio: si hay oferta, precio original tachado + precio con descuento
function htmlPrecio(p) {
  if (porcentajeDescuento(p) == 0) {
    return '<p class="precio">' + formatearPrecio(p.precio) + ' €</p>';
  }
  return '<p class="precio">' +
    '<span class="precio-original">' + formatearPrecio(p.precio) + ' €</span> ' +
    '<span class="precio-oferta">' + formatearPrecio(precioFinal(p)) + ' €</span>' +
    '</p>';
}

// Imagen del producto: usa la ruta de la propiedad imagen (dentro de img/)
function estiloImagen(id) {
  const p = buscarProducto(id);
  if (p == undefined || p.imagen == undefined) {
    return '';
  }
  return 'style="background-image:url(\'./img/' + p.imagen + '\')"';
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
        htmlPrecio(p) +
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
    total += precioFinal(p) * carrito[i].cantidad;
  }
  // Redondeamos a 2 decimales para evitar errores de coma flotante
  return Math.round(total * 100) / 100;
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
        <b>${formatearPrecio(precioFinal(p) * cantidad)} €</b>
        <button type="button" class="rm" aria-label="Quitar ${p.nombre}" onclick="quitarDelCarrito(${p.id})">&times;</button>
      </div>`;
  }

  if (html === '') {
    html = '<p>Tu carrito está vacío.</p>';
    document.getElementById('cart-total').textContent = '';
  } else {
    document.getElementById('cart-total').textContent = 'Total: ' + formatearPrecio(calcularTotal()) + ' €';
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
      precio: precioFinal(p),
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
    const textoCabecera = compra.fecha + ' - total ' + formatearPrecio(compra.total) + ' €';

    const recibo = document.createElement('li');

    const cabecera = document.createElement('p');
    cabecera.textContent = '▶ ' + textoCabecera;

    const detalle = document.createElement('ul');
    detalle.hidden = true;

    for (let j = 0; j < compra.productos.length; j++) {
      const producto = compra.productos[j];
      const lineaProducto = document.createElement('li');
      lineaProducto.textContent = producto.nombre + ' x' + producto.cantidad + ' - ' + formatearPrecio(producto.precio * producto.cantidad) + ' €';
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
    texto = texto + producto.nombre + ' x' + producto.cantidad + ' - ' + formatearPrecio(producto.precio * producto.cantidad) + ' €\n';
  }

  texto = texto + '\nTOTAL: ' + formatearPrecio(compra.total) + ' €\n';

  const archivo = new Blob([texto], { type: 'text/plain' });
  const enlace = document.createElement('a');
  enlace.href = URL.createObjectURL(archivo);
  enlace.download = 'recibo-' + numero + '.txt';
  enlace.click();
  URL.revokeObjectURL(enlace.href);
}


// =====================================================
// CATÁLOGO (solo funciona en catalogo.html; en las demás páginas no hace nada)
// =====================================================

const contenedorCats = document.getElementById('cats');
const zonaProductos = document.getElementById('zona-productos');
const tituloResultados = document.getElementById('titulo-resultados');
const gridProductos = document.getElementById('grid-productos');
const formBusqueda = document.getElementById('search-form');
const campoBusqueda = document.getElementById('search-main');

// Quita mayúsculas y tildes para que "percusion" encuentre "Percusión"
function limpiar(texto) {
  return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function mostrarCategorias() {
  contenedorCats.innerHTML = '';

  categorias.forEach(function (cat) {
    const cuantos = productos.filter(function (p) {
      return p.cat === cat.id;
    }).length;

    const tarjeta = document.createElement('button');
    tarjeta.type = 'button';
    tarjeta.className = 'cat-card';
    tarjeta.innerHTML = '<strong>' + cat.nombre + '</strong><span>' + cuantos + ' productos</span>';
    tarjeta.onclick = function () {
      abrirCategoria(cat.id);
    };
    contenedorCats.appendChild(tarjeta);
  });
}

function pintarProductos(lista) {
  gridProductos.innerHTML = '';

  if (lista.length == 0) {
    gridProductos.innerHTML = '<p class="empty-msg">No hemos encontrado ningún producto.</p>';
    return;
  }

  lista.forEach(function (p) {
    const caja = document.createElement('div');
    caja.className = 'product-card';

    // Borde amarillo si es nuevo y rojo si está en oferta (si son ambas, gana el rojo)
    if (p.nuevo) {
      caja.classList.add('es-nuevo');
    }
    if (porcentajeDescuento(p) > 0) {
      caja.classList.add('en-oferta');
    }

    caja.innerHTML =
      '<div class="thumb" ' + estiloImagen(p.id) + '></div>' +
      (p.nuevo ? '<span class="badge-new"><i class="fa-solid fa-star"></i> Nuevo</span>' : '') +
      (porcentajeDescuento(p) > 0 ? '<span class="badge-oferta"><i class="fa-solid fa-tag"></i> -' + porcentajeDescuento(p) + '%</span>' : '') +
      '<h3>' + p.nombre + '</h3>' +
      '<small>' + p.marca + '</small>' +
      htmlPrecio(p) +
      '<button type="button" onclick="anadirAlCarrito(' + p.id + ')">Añadir</button>';
    gridProductos.appendChild(caja);
  });
}

function mostrarZonaProductos(titulo, lista) {
  tituloResultados.textContent = titulo;
  pintarProductos(lista);
  contenedorCats.hidden = true;
  zonaProductos.hidden = false;
}

function abrirCategoria(idCategoria) {
  const cat = categorias.find(function (c) {
    return c.id === idCategoria;
  });
  if (cat == undefined) {
    return;
  }

  // Los productos nuevos o en oferta salen los primeros
  const lista = destacadosPrimero(productos.filter(function (p) {
    return p.cat === idCategoria;
  }));

  mostrarZonaProductos(cat.nombre + ' (' + lista.length + ')', lista);
}

function volverACategorias() {
  zonaProductos.hidden = true;
  contenedorCats.hidden = false;
  campoBusqueda.value = '';
}

function buscar(evento) {
  evento.preventDefault();

  const texto = limpiar(campoBusqueda.value.trim());
  if (texto == '') {
    volverACategorias();
    return;
  }

  // Busca en nombre, marca y nombre de la categoría
  const lista = productos.filter(function (p) {
    const cat = categorias.find(function (c) {
      return c.id === p.cat;
    });
    return limpiar(p.nombre).includes(texto) ||
      limpiar(p.marca).includes(texto) ||
      limpiar(cat.nombre).includes(texto);
  });

  mostrarZonaProductos('Resultados para "' + campoBusqueda.value.trim() + '" (' + lista.length + ')', destacadosPrimero(lista));
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

// Catálogo: solo si la página tiene el buscador y las categorías
if (contenedorCats != null) {
  // La búsqueda se actualiza en cada letra que se escribe o se borra.
  // El submit (pulsar Enter) sigue controlado para que la página no se recargue.
  campoBusqueda.addEventListener('input', buscar);
  formBusqueda.onsubmit = buscar;
  mostrarCategorias();

  // Permite enlazar desde otras páginas: catalogo.html#guitarras
  if (location.hash != '') {
    abrirCategoria(location.hash.slice(1));
  }
}

// =====================================================
// MODO DÍA Y NOCHE
// =====================================================

function aplicarTema(oscuro) {
  document.body.classList.toggle('dark-mode', oscuro);
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.innerHTML = oscuro
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
    btn.setAttribute('aria-label', oscuro ? 'Activar modo día' : 'Activar modo noche');
    btn.title = oscuro ? 'Modo día' : 'Modo noche';
  }
}

function inicializarTema() {
  const navList = document.querySelector('.nav-list');
  if (navList) {
    const li = document.createElement('li');
    li.className = 'theme-btn';
    li.innerHTML = '<button type="button" id="theme-toggle" class="theme-toggle" aria-label="Cambiar tema"></button>';
    navList.appendChild(li);

    document.getElementById('theme-toggle').onclick = function () {
      const esOscuro = !document.body.classList.contains('dark-mode');
      localStorage.setItem('temaOscuro', esOscuro);
      aplicarTema(esOscuro);
    };
  }

  const guardado = localStorage.getItem('temaOscuro');
  const prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const activarOscuro = guardado !== null ? guardado === 'true' : prefiereOscuro;

  aplicarTema(activarOscuro);
}

inicializarTema();