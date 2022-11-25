
// -------------------------------------------------ESTRUCTURA FUNCIÓN CONSTRUCTORA, CARRITO Y ALMACENES---------------------------------------------->


// FUNCIÓN CONSTRUCTORA

function Producto(tipo, titulo, autor, color, precio) {
    this.tipo = tipo;
    this.titulo = titulo;
    this.autor = autor;
    this.color = color;
    this.precio = precio;
    this.sumarIva = function () {
        return (this.precio = this.precio * 1.21);
    }
    this.restarDescuento20 = function () {
        return (this.precio = this.precio - this.precio * 0.20)
    }
    this.restarDescuento10 = function () {
        return (this.precio = this.precio - this.precio * 0.10)
    }
    this.restarDescuento30 = function () {
        return (this.precio = this.precio - this.precio * 0.30)
    }
    this.avisoEdicion = () => {
        if (this.titulo == "Softer" || this.titulo == "Ghost Pals") {
            return "Este producto es de Edición limitada"
        } else {
            return "Disponible en nuestras tiendas"
        }
    }

}

const producto1 = new Producto("Marca Digital", "Softer", "pablo fernández", "Violeta-Azul", 9000);
const producto2 = new Producto("Ilustración 3D", "Tomato Soup", "andrew footit", "Naranja-Verde", 3200);
const producto3 = new Producto("Ilustración", "Ghost Pals", "aleisha samek", "Marrón-Blanco", 2700);
const producto4 = new Producto("Diseño", "Hocus Pocus", "zach hannibal", "Rosado-Gris", 3800);
const producto5 = new Producto("Marca", "Sensitive Tiger", "sofia herrera", "Naranja-Celeste", 4800);
const producto6 = new Producto("Bordado digital", "Duck Duck Pal", "emanuel pécora", "Verde-Amarillo", 2900);
const producto7 = new Producto("Collage", "Astrology", "camila fernández", "Rosado-Verde", 6500);
const producto8 = new Producto("Clipping", "Best Clippings", "cami ferreira", "Rojo-Negro", 2500);
const producto9 = new Producto("Marca", "Hype!", "manu contreras", "Flúor-Verde", 7100);
const producto10 = new Producto("Ilustración", "Space Travel", "josé hidalgo", "Violeta-Negro", 9400);
const producto11 = new Producto("Marca", "Doberman Power", "ezequiel quinteros", "Negro-Marrón", 6500);
const producto12 = new Producto("Ilustración", "Kill Bill Sessions", "gonzalo morresi", "Rojo-Amarillo", 8400);


const almacen2 = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12];


//CREO ELEMENTOS DESDE JS--------------------------------------------------------------------------------------------------->

const h2 = document.getElementsByTagName('h2');

const parrafoPresenta = document.createElement('p')
parrafoPresenta.innerHTML = "<h2> Acá vas a encontrar lo que buscas perro malvado.</h2>";
h2[1].appendChild(parrafoPresenta);


const parrafo = document.createElement('p')
parrafo.innerHTML = "<br> <h2>Recorré la experiencia, conocé artistas y revolucioná tu estilo.</h2>";
h2[1].appendChild(parrafo);


//FIN ---------------------------------------------------------------------------------------------------------------------->


//STORAGE & JASON ALMACENAMIENTO DE DATOS BOTÓN DE SUSCRIPCIÓN A NEWSLETTER Y FORMULARIO-------------------------------------->
const suscripcionMail = [];
const camposFormulario = [];
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

//Boton de suscribirse--------->


var mS = "mail de suscripción"
const botonSuscribirse = document.getElementById("botonSuscribirse");
const mailSuscripcion = document.getElementById("recipient-name").value;

function guardarSuscripcionMail(valor) {
    suscripcionMail.push(valor);
}

function guardarSuscripcionLSyArr() {
    const mailSuscripcion = document.getElementById("recipient-name").value;
    guardarLocal(mS, JSON.stringify(mailSuscripcion));
    guardarSuscripcionMail(mailSuscripcion);
}

botonSuscribirse.addEventListener("click", () => {
    guardarSuscripcionLSyArr();
    console.log(suscripcionMail);
});
//fin Boton de suscribirse---------------->

//comienza Formulario--------------------->

var nF = "nombre del formulario"
var aF = "apellido del formulario"
var mF = "mail del formulario"
var dF = "domicilio del formulario"
var pF = "pais del formulario"
var provF = "provincia del formulario"
var zF = "zipCode del formulario"

function cargarACamposFormulario(valor) {
    camposFormulario.push(valor);
}

function guardarDatosFormulario() {
    const nombre = document.getElementById("firstName").value;
    cargarACamposFormulario(nombre);
    guardarLocal(nF, JSON.stringify(nombre));
    const apellido = document.getElementById("lastName").value;
    cargarACamposFormulario(apellido);
    guardarLocal(aF, JSON.stringify(apellido));
    const mail = document.getElementById("email").value;
    cargarACamposFormulario(mail);
    guardarLocal(mF, JSON.stringify(mail));
    const domicilio = document.getElementById("address").value;
    cargarACamposFormulario(domicilio);
    guardarLocal(dF, JSON.stringify(domicilio));
    const pais = document.getElementById("country").value;
    cargarACamposFormulario(pais);
    guardarLocal(pF, JSON.stringify(pais));
    const provincia = document.getElementById("state").value;
    cargarACamposFormulario(provincia);
    guardarLocal(provF, JSON.stringify(provincia));
    const zipCode = document.getElementById("zip").value;
    cargarACamposFormulario(zipCode);
    guardarLocal(zF, JSON.stringify(zipCode));
}

const botonFormulario = document.getElementById("BotonFormulario");
const contenedorBtnFormulario = document.getElementById("contenedorBtnFormulario");


function notificaEnvioFormulario() {
    var avisoMail = localStorage.getItem('mail del formulario');
    console.log(avisoMail);
    const notifica = document.createElement('div');
    notifica.innerHTML = "<h4>Tu información fue enviada con éxito!</h4>";
    const notifica2 = document.createElement('p');
    notifica2.innerHTML = ` Recibirás novedades en el correo: ${avisoMail}`;
    contenedorBtnFormulario.appendChild(notifica);
    contenedorBtnFormulario.appendChild(notifica2);
    ;
}

function guardarLS(camposFormulario) {
    localStorage.setItem("datosFormulario", JSON.stringify(camposFormulario));
}


botonFormulario.addEventListener("click", (e) => {
    guardarDatosFormulario();
    notificaEnvioFormulario();
    e.preventDefault();
    //   guardarLS();
    console.log(camposFormulario);
});
console.log(camposFormulario);

//FIN de Formulario--------->

//CARRITO------------------------------------------------------------------------------------------------------------------->
const carrito = [];
//FIN ---------------------------------------------------------------------------------------------------------------------->

//---------------------------------------------BotonBuscar por Artista o Precio---------------------------------------------------------------->
function filtrarPorPrecio(arr, filtro) {
    return arr.filter((producto) => {
        return producto.precio <= filtro;
    })
}

function EncontrarArtista(arr, filtro) {
    const encontrado = arr.find((producto) => {
        return producto.autor.includes(filtro);
    })
    return encontrado;
}
function cargarAlCarrito(carrito, valor) {
    carrito.push(valor);
    console.log(carrito);
}

const botonBuscar = document.getElementById("botonBuscar")
console.log(botonBuscar);


botonBuscar.addEventListener("submit", (e) => {
    const usuarioBusqueda = document.querySelector("#barraBusqueda").value;
    ProductoEncontradoArtista = EncontrarArtista(almacen2, usuarioBusqueda);
    console.log(ProductoEncontradoArtista);
    ProductoEncontradoPrecio = filtrarPorPrecio(almacen2, usuarioBusqueda);
    console.log(ProductoEncontradoPrecio);
    cargarAlCarrito(carrito, ProductoEncontradoArtista);
    cargarAlCarrito(carrito, ProductoEncontradoPrecio);
    e.preventDefault();
})


//FIN ---------------------------------------------------------------------------------------------------------------------->

// ALMACENES---------------------------------------------------------------------------------------------------------------->

const almacen = [producto1, producto2, producto3];





