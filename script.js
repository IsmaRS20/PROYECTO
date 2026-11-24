// =====================================================
// PICANYA MUSIC - script.js
//
// Orden del archivo:
//   1. Datos (categorías y productos)
//   2. Elementos de la página
//   3. Funciones de ayuda
//   4. Barra de progreso
//   5. Modo día y noche
//   6. Carrito
//   7. Historial de compras
//   8. Página de inicio
//   9. Catálogo
//  10. Calendario de citas
//  11. Foro
//  12. Arranque (al final, cuando todo está definido)
// =====================================================


// =====================================================
// 1. DATOS
// =====================================================

// Los id de las categorías coinciden con las carpetas de img/
const categorias = [
  { id: 'guitarras', nombre: 'Guitarras' },
  { id: 'bajos', nombre: 'Bajos' },
  { id: 'percusion', nombre: 'Percusión' },
  { id: 'cabinas', nombre: 'Cabinas' },
  { id: 'pedales', nombre: 'Pedales' },
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
  { id: 46, nombre: 'Regular Slinky 10 - 74', cat: 'equipamiento', marca: 'Ernieball', precio: 11.95, nuevo: false, oferta: false, imagen: 'equipamiento/ernieball_regularslinky_8.webp' }
];

// Porcentaje de descuento por categoría (solo se aplica si el producto tiene oferta: true)
const descuentos = {
  guitarras: 15,
  bajos: 10,
  percusion: 20,
  cabinas: 10,
  pedales: 25,
  equipamiento: 30
};


// =====================================================
// 2. ELEMENTOS DE LA PÁGINA
// (los que no existen en una página valen null, por eso en el arranque se comprueba)
// =====================================================

// Se mete el panel del carrito en la página (así no hay que copiarlo en cada HTML)
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

// En todas las páginas
const progressFill = document.getElementById('progressFill');
const botonCarrito = document.querySelector('.cart');
const contadorCarrito = document.getElementById('cart-count');
const panel = document.getElementById('drawer');
const fondo = document.getElementById('overlay');
const itemsCarrito = document.getElementById('cart-items');
const totalCarrito = document.getElementById('cart-total');
const mensaje = document.getElementById('cart-msg');
const desplegable = document.getElementById('history-toggle');
const listaPrevias = document.getElementById('history-list');

// Solo en index.html
const gridNuevos = document.querySelector('.grid-new-items');

// Solo en catalogo.html
const contenedorCats = document.getElementById('cats');
const zonaProductos = document.getElementById('zona-productos');
const tituloResultados = document.getElementById('titulo-resultados');
const gridProductos = document.getElementById('grid-productos');
const formBusqueda = document.getElementById('search-form');
const campoBusqueda = document.getElementById('search-main');

// Solo en contacto.html
const calDias = document.getElementById('cal-dias');
const calTitulo = document.getElementById('cal-titulo');
const calPrev = document.getElementById('cal-prev');
const calNext = document.getElementById('cal-next');
const horasTitulo = document.getElementById('horas-titulo');
const zonaHoras = document.getElementById('horas');
const formCita = document.getElementById('form-cita');
const resumenCita = document.getElementById('cita-resumen');
const mensajeCita = document.getElementById('cita-msg');
const listaCitas = document.getElementById('lista-citas');

// Solo en foro.html
const mensajeForo = document.getElementById('foro-msg');
const vistaLista = document.getElementById('foro-vista-lista');
const vistaTema = document.getElementById('foro-vista-tema');
const listaTemas = document.getElementById('foro-lista');
const btnNuevoTema = document.getElementById('foro-nuevo-btn');
const formTema = document.getElementById('form-tema');
const campoTituloTema = document.getElementById('tema-titulo');
const campoCategoriaTema = document.getElementById('tema-categoria');
const campoAutorTema = document.getElementById('tema-autor');
const campoTextoTema = document.getElementById('tema-texto');
const btnCancelarTema = document.getElementById('tema-cancelar');
const btnVolverForo = document.getElementById('foro-volver');
const tituloTema = document.getElementById('foro-tema-titulo');
const etiquetaTema = document.getElementById('foro-tema-tag');
const listaMensajes = document.getElementById('foro-mensajes');
const btnBorrarTema = document.getElementById('foro-borrar');
const formRespuesta = document.getElementById('form-respuesta');
const campoAutorRespuesta = document.getElementById('respuesta-autor');
const campoTextoRespuesta = document.getElementById('respuesta-texto');


// =====================================================
// 3. FUNCIONES DE AYUDA
// =====================================================

function buscarProducto(id) {
  return productos.find(function (p) {
    return p.id === id;
  });
}

// Formatea un número a 2 decimales con coma (estilo español): 1139.85 -> "1139,85"
function formatearPrecio(numero) {
  return Number(numero).toFixed(2).replace('.', ',');
}

// Quita mayúsculas y tildes para que "percusion" encuentre "Percusión"
function limpiar(texto) {
  return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

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
function estiloImagen(p) {
  if (p.imagen == undefined) {
    return '';
  }
  return 'style="background-image:url(\'./img/' + p.imagen + '\')"';
}

// Pone primero los productos nuevos o en oferta; el resto mantiene su orden original
function destacadosPrimero(lista) {
  return lista.slice().sort(function (a, b) {
    const destacadoA = (a.nuevo || a.oferta) ? 1 : 0;
    const destacadoB = (b.nuevo || b.oferta) ? 1 : 0;
    return destacadoB - destacadoA;
  });
}

// Crea la tarjeta de un producto (la usan el inicio y el catálogo)
function crearTarjeta(p) {
  const descuento = porcentajeDescuento(p);
  const caja = document.createElement('div');
  caja.className = 'product-card';

  // El borde cambia de color: amarillo si es nuevo y verde si está en oferta (si son ambas, gana el verde)
  if (p.nuevo) {
    caja.classList.add('es-nuevo');
  }
  if (descuento > 0) {
    caja.classList.add('en-oferta');
  }

  caja.innerHTML =
    '<div class="thumb" ' + estiloImagen(p) + '></div>' +
    (p.nuevo ? '<span class="badge-new"><i class="fa-solid fa-star"></i> Nuevo</span>' : '') +
    (descuento > 0 ? '<span class="badge-oferta"><i class="fa-solid fa-tag"></i> -' + descuento + '%</span>' : '') +
    '<h3>' + p.nombre + '</h3>' +
    '<small>' + p.marca + '</small>' +
    htmlPrecio(p) +
    '<button type="button" onclick="anadirAlCarrito(' + p.id + ')">Añadir</button>';
  return caja;
}

// Pinta una lista de productos dentro de un contenedor
function pintarProductos(lista, contenedor) {
  contenedor.innerHTML = '';

  if (lista.length == 0) {
    contenedor.innerHTML = '<p class="empty-msg">No hemos encontrado ningún producto.</p>';
    return;
  }

  lista.forEach(function (p) {
    contenedor.appendChild(crearTarjeta(p));
  });
}

// Descarga un texto como archivo (lo usan los recibos y las citas)
function descargarArchivo(texto, tipo, nombre) {
  const archivo = new Blob([texto], { type: tipo });
  const enlace = document.createElement('a');
  enlace.href = URL.createObjectURL(archivo);
  enlace.download = nombre;
  enlace.click();
  URL.revokeObjectURL(enlace.href);
}


// =====================================================
// 4. BARRA DE PROGRESO
// =====================================================

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? window.scrollY / max : 0;
  progressFill.style.width = (progress * 100) + '%';
}


// =====================================================
// 5. MODO DÍA Y NOCHE
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
  // Se crea el botón dentro del menú (así no hay que copiarlo en cada HTML)
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

  // Si el usuario ya eligió tema se usa ese; si no, el del sistema
  const guardado = localStorage.getItem('temaOscuro');
  const prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
  aplicarTema(guardado !== null ? guardado === 'true' : prefiereOscuro);
}


// =====================================================
// 6. CARRITO (está en todas las páginas)
// El carrito se guarda en el navegador (localStorage): [{ id, cantidad }]
// =====================================================

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

function buscarEnCarrito(idProducto) {
  return carrito.find(function (linea) {
    return linea.id === idProducto;
  });
}

function calcularTotal() {
  let total = 0;
  carrito.forEach(function (linea) {
    total += precioFinal(buscarProducto(linea.id)) * linea.cantidad;
  });
  // Redondeamos a 2 decimales para evitar errores de coma flotante
  return Math.round(total * 100) / 100;
}

// Muestra un mensaje, guarda y repinta: lo usan todas las funciones que cambian el carrito
function actualizarCarrito(texto) {
  mensaje.textContent = texto;
  guardarCarrito();
  dibujarCarrito();
}

function anadirAlCarrito(idProducto) {
  const linea = buscarEnCarrito(idProducto);

  if (linea) {
    linea.cantidad++;
  } else {
    carrito.push({ id: idProducto, cantidad: 1 });
  }
  actualizarCarrito('Producto añadido.');

  // Animación del contador del botón del carrito
  const boton = document.querySelector('.cart-btn');
  boton.classList.remove('bump');
  void boton.offsetWidth;
  boton.classList.add('bump');
}

function aumentarCarrito(idProducto) {
  buscarEnCarrito(idProducto).cantidad++;
  actualizarCarrito('Producto añadido.');
}

function quitarDelCarrito(idProducto) {
  const linea = buscarEnCarrito(idProducto);

  if (linea.cantidad > 1) {
    linea.cantidad--;
  } else {
    carrito.splice(carrito.indexOf(linea), 1);
  }
  actualizarCarrito('Producto quitado.');
}

function vaciarCarrito() {
  if (carrito.length == 0) {
    mensaje.textContent = 'El carrito ya está vacío.';
    return;
  }
  carrito = [];
  actualizarCarrito('Carrito vaciado.');
}

function dibujarCarrito() {
  let html = '';
  let unidades = 0;

  carrito.forEach(function (linea) {
    const p = buscarProducto(linea.id);
    unidades += linea.cantidad;

    html += `
      <div class="cart-item">
        <div class="thumb" ${estiloImagen(p)}></div>
        <div>
          <strong>${p.nombre}</strong>
          <small>x${linea.cantidad}</small>
          <button type="button" class="plus" aria-label="Añadir otro ${p.nombre}" onclick="aumentarCarrito(${p.id})">+</button>
        </div>
        <b>${formatearPrecio(precioFinal(p) * linea.cantidad)} €</b>
        <button type="button" class="rm" aria-label="Quitar ${p.nombre}" onclick="quitarDelCarrito(${p.id})">&times;</button>
      </div>`;
  });

  if (html === '') {
    html = '<p>Tu carrito está vacío.</p>';
    totalCarrito.textContent = '';
  } else {
    totalCarrito.textContent = 'Total: ' + formatearPrecio(calcularTotal()) + ' €';
  }

  itemsCarrito.innerHTML = html;
  contadorCarrito.textContent = unidades;
}


// =====================================================
// 7. HISTORIAL DE COMPRAS (también en localStorage)
// =====================================================

let historial = JSON.parse(localStorage.getItem('historial')) || [];

function guardarHistorial() {
  localStorage.setItem('historial', JSON.stringify(historial));
}

function checkOut() {
  if (carrito.length == 0) {
    mensaje.textContent = 'Añade productos para realizar la compra.';
    return;
  }

  // Se guarda nombre y precio (no solo el id) para que el recibo sea siempre igual
  const lineas = [];
  carrito.forEach(function (linea) {
    const p = buscarProducto(linea.id);
    lineas.push({ nombre: p.nombre, precio: precioFinal(p), cantidad: linea.cantidad });
  });

  historial.push({
    fecha: new Date().toLocaleString(),
    productos: lineas,
    total: calcularTotal()
  });
  guardarHistorial();

  carrito = [];
  actualizarCarrito('Compra realizada con éxito.');
  mostrarHistorial();
}

function mostrarHistorial() {
  listaPrevias.innerHTML = '';

  historial.forEach(function (compra, indice) {
    const textoCabecera = compra.fecha + ' - total ' + formatearPrecio(compra.total) + ' €';

    // Productos de la compra (ocultos hasta pulsar la cabecera)
    const detalle = document.createElement('ul');
    detalle.hidden = true;
    compra.productos.forEach(function (producto) {
      const lineaProducto = document.createElement('li');
      lineaProducto.textContent = producto.nombre + ' x' + producto.cantidad + ' - ' + formatearPrecio(producto.precio * producto.cantidad) + ' €';
      detalle.appendChild(lineaProducto);
    });

    const cabecera = document.createElement('p');
    cabecera.textContent = '▶ ' + textoCabecera;
    cabecera.onclick = function () {
      detalle.hidden = !detalle.hidden;
      cabecera.textContent = (detalle.hidden ? '▶ ' : '▼ ') + textoCabecera;
    };

    const botonDescargar = document.createElement('button');
    botonDescargar.type = 'button';
    botonDescargar.textContent = '⬇';
    botonDescargar.title = 'Descargar recibo';
    botonDescargar.onclick = function () {
      descargarRecibo(compra, indice + 1);
    };

    const fila = document.createElement('div');
    fila.className = 'fila-recibo';
    fila.appendChild(cabecera);
    fila.appendChild(botonDescargar);

    const recibo = document.createElement('li');
    recibo.appendChild(fila);
    recibo.appendChild(detalle);
    listaPrevias.appendChild(recibo);
  });
}

// Muestra u oculta la lista del historial
function historialCompra() {
  listaPrevias.hidden = !listaPrevias.hidden;
  desplegable.textContent = (listaPrevias.hidden ? '▶' : '▼') + ' Historial de compras';
}

function descargarRecibo(compra, numero) {
  let texto = 'RECIBO - Picanya Music\n';
  texto += 'Fecha: ' + compra.fecha + '\n\n';

  compra.productos.forEach(function (producto) {
    texto += producto.nombre + ' x' + producto.cantidad + ' - ' + formatearPrecio(producto.precio * producto.cantidad) + ' €\n';
  });

  texto += '\nTOTAL: ' + formatearPrecio(compra.total) + ' €\n';
  descargarArchivo(texto, 'text/plain', 'recibo-' + numero + '.txt');
}


// =====================================================
// 8. PÁGINA DE INICIO (solo index.html)
// =====================================================

function mostrarNuevos() {
  const nuevos = productos.filter(function (p) {
    return p.nuevo;
  });
  pintarProductos(nuevos, gridNuevos);
}


// =====================================================
// 9. CATÁLOGO (solo catalogo.html)
// =====================================================

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

function mostrarZonaProductos(titulo, lista) {
  tituloResultados.textContent = titulo;
  pintarProductos(lista, gridProductos);
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
// 10. CALENDARIO DE CITAS (solo contacto.html)
// Las citas se guardan en el navegador (localStorage), igual que el carrito
// =====================================================

const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const DIAS_SEMANA = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

// Horario: lunes a sábado de 10:00 a 20:00, citas de una hora (la última empieza a las 19:00)
const HORAS_CITA = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

let citas = JSON.parse(localStorage.getItem('citas')) || [];
let mesVisible = new Date();
mesVisible.setDate(1);
let diaElegido = null;   // fecha elegida en formato 'AAAA-MM-DD'
let horaElegida = null;  // por ejemplo '11:00'

function guardarCitas() {
  localStorage.setItem('citas', JSON.stringify(citas));
}

// --------- Ayudas con fechas ---------

function dosDigitos(n) {
  return n < 10 ? '0' + n : '' + n;
}

// Date -> '2026-11-19'
function claveFecha(fecha) {
  return fecha.getFullYear() + '-' + dosDigitos(fecha.getMonth() + 1) + '-' + dosDigitos(fecha.getDate());
}

// '2026-11-19' -> Date
function fechaDeClave(clave) {
  const partes = clave.split('-');
  return new Date(Number(partes[0]), Number(partes[1]) - 1, Number(partes[2]));
}

// '2026-11-19' -> 'jueves 19 de noviembre'
function textoFecha(clave) {
  const f = fechaDeClave(clave);
  return DIAS_SEMANA[f.getDay()] + ' ' + f.getDate() + ' de ' + MESES[f.getMonth()].toLowerCase();
}

function tieneCita(clave) {
  return citas.some(function (c) {
    return c.fecha === clave;
  });
}

// Una hora está ocupada si ya has reservado una cita a esa hora
function horaOcupada(clave, hora) {
  return citas.some(function (c) {
    return c.fecha === clave && c.hora === hora;
  });
}

// Si el día elegido es hoy, las horas que ya han empezado no se pueden reservar
function horaPasada(clave, hora) {
  const ahora = new Date();
  if (clave !== claveFecha(ahora)) {
    return false;
  }
  return Number(hora.split(':')[0]) <= ahora.getHours();
}

// --------- Calendario ---------

function dibujarCalendario() {
  const anio = mesVisible.getFullYear();
  const mes = mesVisible.getMonth();
  calTitulo.textContent = MESES[mes] + ' ' + anio;

  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  // Se puede reservar hasta el final del segundo mes siguiente
  const limite = new Date(hoy.getFullYear(), hoy.getMonth() + 3, 0);

  const diasMes = new Date(anio, mes + 1, 0).getDate();
  // La semana empieza en lunes: getDay() da 0 para domingo, así que lo movemos al final
  const huecos = (new Date(anio, mes, 1).getDay() + 6) % 7;

  let html = '';
  for (let i = 0; i < huecos; i++) {
    html += '<span class="cal-vacio"></span>';
  }

  for (let d = 1; d <= diasMes; d++) {
    const fecha = new Date(anio, mes, d);
    const clave = claveFecha(fecha);
    const bloqueado = fecha < hoy || fecha > limite || fecha.getDay() == 0;

    let clases = 'cal-dia';
    if (fecha.getTime() == hoy.getTime()) {
      clases += ' hoy';
    }
    if (clave == diaElegido) {
      clases += ' elegido';
    }
    if (tieneCita(clave)) {
      clases += ' con-cita';
    }

    html += '<button type="button" class="' + clases + '"' +
      (bloqueado ? ' disabled' : '') +
      ' aria-label="' + textoFecha(clave) + '"' +
      ' onclick="elegirDia(\'' + clave + '\')">' + d + '</button>';
  }

  calDias.innerHTML = html;

  // Meses de diferencia entre el mes que se ve y el mes actual
  const diferencia = (anio - hoy.getFullYear()) * 12 + mes - hoy.getMonth();
  calPrev.disabled = diferencia <= 0;
  calNext.disabled = diferencia >= 2;
}

function elegirDia(clave) {
  diaElegido = clave;
  horaElegida = null;
  formCita.hidden = true;
  mostrarMensajeCita('', false);
  dibujarCalendario();
  dibujarHoras();
}

// --------- Horas ---------

function dibujarHoras() {
  zonaHoras.innerHTML = '';

  if (diaElegido == null) {
    horasTitulo.textContent = 'Elige un día en el calendario';
    return;
  }

  horasTitulo.textContent = 'Horas para el ' + textoFecha(diaElegido);

  HORAS_CITA.forEach(function (hora) {
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'hora-btn';
    boton.textContent = hora;

    if (horaOcupada(diaElegido, hora) || horaPasada(diaElegido, hora)) {
      boton.disabled = true;
      boton.title = 'No disponible';
    }
    if (hora == horaElegida) {
      boton.classList.add('elegida');
    }

    boton.onclick = function () {
      elegirHora(hora);
    };
    zonaHoras.appendChild(boton);
  });
}

function elegirHora(hora) {
  horaElegida = hora;
  mostrarMensajeCita('', false);
  resumenCita.textContent = 'Tu cita: ' + textoFecha(diaElegido) + ' a las ' + hora;
  formCita.hidden = false;
  dibujarHoras();
}

// --------- Reservar, ver y cancelar citas ---------

function mostrarMensajeCita(texto, esError) {
  mensajeCita.textContent = texto;
  mensajeCita.classList.toggle('error', esError);
}

function confirmarCita(evento) {
  // Evita que la página se recargue al enviar el formulario
  evento.preventDefault();

  if (diaElegido == null || horaElegida == null) {
    mostrarMensajeCita('Elige un día y una hora.', true);
    return;
  }

  // Por si la hora se ha ocupado o ha pasado mientras rellenabas el formulario
  if (horaOcupada(diaElegido, horaElegida) || horaPasada(diaElegido, horaElegida)) {
    horaElegida = null;
    formCita.hidden = true;
    dibujarHoras();
    mostrarMensajeCita('Esa hora ya no está disponible. Elige otra.', true);
    return;
  }

  const cita = {
    id: Date.now(),
    fecha: diaElegido,
    hora: horaElegida,
    nombre: document.getElementById('cita-nombre').value.trim(),
    telefono: document.getElementById('cita-telefono').value.trim(),
    motivo: document.getElementById('cita-motivo').value
  };

  citas.push(cita);
  guardarCitas();

  const texto = 'Cita reservada para el ' + textoFecha(cita.fecha) + ' a las ' + cita.hora + '.';

  formCita.reset();
  formCita.hidden = true;
  diaElegido = null;
  horaElegida = null;

  dibujarCalendario();
  dibujarHoras();
  mostrarCitas();
  mostrarMensajeCita(texto, false);
}

function mostrarCitas() {
  listaCitas.innerHTML = '';

  // Solo las citas de hoy en adelante, ordenadas por fecha y hora
  const hoy = claveFecha(new Date());
  const proximas = citas.filter(function (c) {
    return c.fecha >= hoy;
  }).sort(function (a, b) {
    return (a.fecha + a.hora).localeCompare(b.fecha + b.hora);
  });

  if (proximas.length == 0) {
    listaCitas.innerHTML = '<li class="empty-msg">Todavía no tienes citas reservadas.</li>';
    return;
  }

  proximas.forEach(function (c) {
    const titulo = document.createElement('strong');
    titulo.textContent = textoFecha(c.fecha) + ' · ' + c.hora;

    const detalle = document.createElement('small');
    detalle.textContent = c.motivo + ' — ' + c.nombre;

    const info = document.createElement('div');
    info.appendChild(titulo);
    info.appendChild(detalle);

    const botonCalendario = document.createElement('button');
    botonCalendario.type = 'button';
    botonCalendario.innerHTML = '<i class="fa-solid fa-calendar-plus"></i> Añadir a mi calendario';
    botonCalendario.onclick = function () {
      descargarCita(c);
    };

    const botonCancelar = document.createElement('button');
    botonCancelar.type = 'button';
    botonCancelar.className = 'cancelar';
    botonCancelar.textContent = 'Cancelar';
    botonCancelar.onclick = function () {
      cancelarCita(c.id);
    };

    const acciones = document.createElement('div');
    acciones.className = 'acciones';
    acciones.appendChild(botonCalendario);
    acciones.appendChild(botonCancelar);

    const fila = document.createElement('li');
    fila.className = 'cita-item';
    fila.appendChild(info);
    fila.appendChild(acciones);
    listaCitas.appendChild(fila);
  });
}

function cancelarCita(idCita) {
  citas = citas.filter(function (c) {
    return c.id !== idCita;
  });
  guardarCitas();

  // La hora vuelve a quedar libre, así que repintamos todo
  dibujarCalendario();
  dibujarHoras();
  mostrarCitas();
  mostrarMensajeCita('Cita cancelada.', false);
}

// Descarga un archivo .ics que se puede abrir con Google Calendar, Outlook, el móvil...
function descargarCita(cita) {
  const dia = cita.fecha.replace(/-/g, '');
  const inicio = dia + 'T' + cita.hora.replace(':', '') + '00';
  const horaFin = dosDigitos(Number(cita.hora.split(':')[0]) + 1);
  const fin = dia + 'T' + horaFin + '0000';
  const ahora = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  const lineas = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Picanya Music//Citas//ES',
    'BEGIN:VEVENT',
    'UID:' + cita.id + '@picanyamusic.es',
    'DTSTAMP:' + ahora,
    'DTSTART:' + inicio,
    'DTEND:' + fin,
    'SUMMARY:Cita en Picanya Music',
    'DESCRIPTION:' + cita.motivo,
    'LOCATION:Picanya Music',
    'END:VEVENT',
    'END:VCALENDAR'
  ];

  descargarArchivo(lineas.join('\r\n'), 'text/calendar;charset=utf-8', 'cita-picanya-music.ics');
}


// =====================================================
// 11. FORO (solo foro.html)
// Los temas se guardan en el navegador (localStorage), igual que el carrito.
// Cada tema: { id, titulo, categoria, autor, fecha, mensaje, respuestas: [{ autor, fecha, mensaje }], propio }
// =====================================================

// Temas de ejemplo para que el foro no empiece vacío (para empezar de cero, deja este array vacío)
const temasIniciales = [
  {
    id: 1,
    titulo: '¡Bienvenidos al foro de Picanya Music!',
    categoria: 'general',
    autor: 'Picanya Music',
    fecha: '15/11/26, 10:00',
    mensaje: 'Este es el espacio de nuestra comunidad: comparte dudas, consejos y tu experiencia con tus instrumentos. Respeta siempre al resto de músicos.',
    respuestas: [
      { autor: 'Marta', fecha: '16/11/26, 18:30', mensaje: '¡Genial idea! Ya tenía ganas de un sitio donde preguntar sin tener que ir a la tienda.' }
    ],
    propio: false
  },
  {
    id: 2,
    titulo: '¿Qué guitarra eléctrica me recomendáis para empezar?',
    categoria: 'guitarras',
    autor: 'Dani',
    fecha: '17/11/26, 12:15',
    mensaje: 'Quiero empezar con la eléctrica y no sé si irme a una Squier o a una Ibanez. Mi presupuesto es de unos 250 €.',
    respuestas: [
      { autor: 'Picanya Music', fecha: '17/11/26, 16:40', mensaje: 'Con ese presupuesto las Ibanez GRG de la tienda son una muy buena opción. Pásate y las pruebas en directo.' }
    ],
    propio: false
  },
  {
    id: 3,
    titulo: '¿Cada cuánto cambiáis las cuerdas?',
    categoria: 'equipamiento',
    autor: 'Laura',
    fecha: '18/11/26, 09:20',
    mensaje: 'Toco una hora al día y no sé cada cuánto debería cambiarlas. ¿Qué hacéis vosotros?',
    respuestas: [],
    propio: false
  },
  {
    id: 4,
    titulo: '¿Como elimino esta pregunta?',
    categoria: 'general',
    autor: 'Picanya Music',
    fecha: '24/11/26, 09:20',
    mensaje: 'Estaba mirando la web y he creado sin querer esta entrada, ¿Cómo la elimino?',
    respuestas: [
      {autor: 'Picanya Music', fecha: '24/11/26, 9:40', mensaje: 'Con el botón grande que pone Eliminar Tema. Pero para ello tienes que ser el creador del comentario'}
    ],
    propio: true
  }
];

let temas = JSON.parse(localStorage.getItem('foro')) || temasIniciales;
let temaAbierto = null;  // id del tema que se está viendo (null = se ve la lista)

function guardarForo() {
  localStorage.setItem('foro', JSON.stringify(temas));
}

function buscarTema(idTema) {
  return temas.find(function (t) {
    return t.id === idTema;
  });
}

function nombreCategoria(idCategoria) {
  const cat = categorias.find(function (c) {
    return c.id === idCategoria;
  });
  return cat ? cat.nombre : 'General';
}

// Fecha y hora de ahora, por ejemplo '20/11/26, 18:05'
function fechaForo() {
  return new Date().toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' });
}

function mostrarMensajeForo(texto, esError) {
  mensajeForo.textContent = texto;
  mensajeForo.classList.toggle('error', esError);
}

// Rellena el desplegable de categorías del formulario de nuevo tema
function rellenarCategoriasForo() {
  const opciones = [{ id: 'general', nombre: 'General' }].concat(categorias);

  opciones.forEach(function (cat) {
    const opcion = document.createElement('option');
    opcion.value = cat.id;
    opcion.textContent = cat.nombre;
    campoCategoriaTema.appendChild(opcion);
  });
}

// Se recuerda el último nombre usado para no tener que escribirlo cada vez
function prefijarNombreForo() {
  const nombre = localStorage.getItem('foroNombre') || '';
  campoAutorTema.value = nombre;
  campoAutorRespuesta.value = nombre;
}

// --------- Lista de temas ---------

function mostrarTemas() {
  listaTemas.innerHTML = '';

  if (temas.length == 0) {
    listaTemas.innerHTML = '<li class="empty-msg">Todavía no hay temas. ¡Crea el primero!</li>';
    return;
  }

  temas.forEach(function (t) {
    const titulo = document.createElement('button');
    titulo.type = 'button';
    titulo.className = 'foro-item-titulo';
    titulo.textContent = t.titulo;

    const datos = document.createElement('small');
    datos.textContent = t.autor + ' · ' + t.fecha + ' · ' + t.respuestas.length + (t.respuestas.length == 1 ? ' respuesta' : ' respuestas');

    const info = document.createElement('div');
    info.appendChild(titulo);
    info.appendChild(datos);

    const etiqueta = document.createElement('span');
    etiqueta.className = 'foro-tag';
    etiqueta.textContent = nombreCategoria(t.categoria);

    // Toda la tarjeta es clicable (el botón del título sirve para el teclado)
    const fila = document.createElement('li');
    fila.className = 'foro-item';
    fila.onclick = function () {
      abrirTema(t.id);
    };
    fila.appendChild(info);
    fila.appendChild(etiqueta);
    listaTemas.appendChild(fila);
  });
}

// --------- Un tema con sus respuestas ---------

// Crea un mensaje (el del tema o una respuesta). Se usa textContent para que nadie pueda meter HTML
function crearMensajeForo(autor, fecha, texto, esOriginal) {
  const nombre = document.createElement('strong');
  nombre.textContent = autor;

  const cuando = document.createElement('small');
  cuando.textContent = fecha;

  const cabecera = document.createElement('div');
  cabecera.className = 'foro-mensaje-cabecera';
  cabecera.appendChild(nombre);
  cabecera.appendChild(cuando);

  const cuerpo = document.createElement('p');
  cuerpo.textContent = texto;

  const caja = document.createElement('li');
  caja.className = 'foro-mensaje';
  if (esOriginal) {
    caja.classList.add('foro-mensaje-original');
  }
  caja.appendChild(cabecera);
  caja.appendChild(cuerpo);
  return caja;
}

function dibujarTema(tema) {
  tituloTema.textContent = tema.titulo;
  etiquetaTema.textContent = nombreCategoria(tema.categoria);

  listaMensajes.innerHTML = '';
  listaMensajes.appendChild(crearMensajeForo(tema.autor, tema.fecha, tema.mensaje, true));
  tema.respuestas.forEach(function (r) {
    listaMensajes.appendChild(crearMensajeForo(r.autor, r.fecha, r.mensaje, false));
  });

  // Solo se pueden eliminar los temas creados por ti
  btnBorrarTema.hidden = !tema.propio;
}

function abrirTema(idTema) {
  temaAbierto = idTema;
  dibujarTema(buscarTema(idTema));
  mostrarMensajeForo('', false);
  vistaLista.hidden = true;
  vistaTema.hidden = false;
  window.scrollTo(0, 0);
}

function volverAlForo() {
  temaAbierto = null;
  vistaTema.hidden = true;
  vistaLista.hidden = false;
  mostrarMensajeForo('', false);
  mostrarTemas();
}

// --------- Publicar, responder y eliminar ---------

function crearTema(evento) {
  // Evita que la página se recargue al enviar el formulario
  evento.preventDefault();

  const titulo = campoTituloTema.value.trim();
  const autor = campoAutorTema.value.trim();
  const texto = campoTextoTema.value.trim();

  // required deja pasar los campos con solo espacios, así que se comprueba aquí
  if (titulo == '' || autor == '' || texto == '') {
    mostrarMensajeForo('Rellena todos los campos.', true);
    return;
  }

  temas.unshift({
    id: Date.now(),
    titulo: titulo,
    categoria: campoCategoriaTema.value,
    autor: autor,
    fecha: fechaForo(),
    mensaje: texto,
    respuestas: [],
    propio: true
  });
  guardarForo();
  localStorage.setItem('foroNombre', autor);

  formTema.reset();
  prefijarNombreForo();
  formTema.hidden = true;
  mostrarTemas();
  mostrarMensajeForo('Tema publicado.', false);
}

function responderTema(evento) {
  evento.preventDefault();

  const autor = campoAutorRespuesta.value.trim();
  const texto = campoTextoRespuesta.value.trim();

  if (autor == '' || texto == '') {
    mostrarMensajeForo('Escribe tu nombre y un mensaje.', true);
    return;
  }

  const tema = buscarTema(temaAbierto);
  tema.respuestas.push({ autor: autor, fecha: fechaForo(), mensaje: texto });
  guardarForo();
  localStorage.setItem('foroNombre', autor);

  formRespuesta.reset();
  prefijarNombreForo();
  dibujarTema(tema);
  mostrarMensajeForo('Respuesta publicada.', false);
}

function eliminarTema() {
  if (!confirm('¿Seguro que quieres eliminar este tema?')) {
    return;
  }

  temas = temas.filter(function (t) {
    return t.id !== temaAbierto;
  });
  guardarForo();

  volverAlForo();
  mostrarMensajeForo('Tema eliminado.', false);
}


// =====================================================
// 12. ARRANQUE
// =====================================================

// En todas las páginas
inicializarTema();
botonCarrito.onclick = function (evento) {
  evento.preventDefault();
  abrirCarrito();
};
dibujarCarrito();
mostrarHistorial();

if (progressFill != null) {
  window.addEventListener('scroll', updateProgress);
  window.addEventListener('resize', updateProgress);
  updateProgress();
}

// Solo en index.html
if (gridNuevos != null) {
  mostrarNuevos();
}

// Solo en catalogo.html
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

// Solo en contacto.html
if (calDias != null) {
  calPrev.onclick = function () {
    mesVisible.setMonth(mesVisible.getMonth() - 1);
    dibujarCalendario();
  };
  calNext.onclick = function () {
    mesVisible.setMonth(mesVisible.getMonth() + 1);
    dibujarCalendario();
  };
  formCita.onsubmit = confirmarCita;

  dibujarCalendario();
  dibujarHoras();
  mostrarCitas();
}

// Solo en foro.html
if (listaTemas != null) {
  rellenarCategoriasForo();
  prefijarNombreForo();

  btnNuevoTema.onclick = function () {
    formTema.hidden = !formTema.hidden;
    if (!formTema.hidden) {
      campoTituloTema.focus();
    }
  };
  btnCancelarTema.onclick = function () {
    formTema.reset();
    prefijarNombreForo();
    formTema.hidden = true;
  };
  btnVolverForo.onclick = volverAlForo;
  btnBorrarTema.onclick = eliminarTema;
  formTema.onsubmit = crearTema;
  formRespuesta.onsubmit = responderTema;

  mostrarTemas();
}