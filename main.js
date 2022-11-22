
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

//PRUEBA DE USO DE HERRAMIENTA PARA EVITAR QUE SE RECARGUE --------------------------->

const formulario = document.getElementById("formulario")
console.log(formulario);
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
})

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
//fin Boton de suscribirse--------->

//comienza Formulario--------->

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
    const notifica = document.createElement('div');
    notifica.innerHTML = "<h4>Tu información fue enviada con éxito!</h4>";
    contenedorBtnFormulario.appendChild(notifica);
}


function guardarLS(camposFormulario) {
    localStorage.setItem("datosFormulario", JSON.stringify(camposFormulario));
}

botonFormulario.addEventListener("click", () => {
    guardarDatosFormulario();
    notificaEnvioFormulario();
    //   guardarLS();
    console.log(camposFormulario);
});
console.log(camposFormulario);

// RECUPERAR STORAGE
function recuperarNombreLS(storage) {
    return JSON.parse(storage.getItem("datosFormulario"));
}

//onst recuperadoLS = recuperarNombreLS;
// console.log(recuperarNombreLS);
// value = localStorage.getItem(document.getElementById('ingles').value);

//FIN ---------------------------------------------------------------------------------------------------------------------->



//AGREGAR DINÁMICAMENTE ITEMS A UNA LISTA DESDE JS----------------SI FUNCIONA-------------------------------------------***-->

// const paises = ["Jamaica", "Japon", "Nueva zelanda"];

// h2[1];

// for (const pais of paises) {
//     const div = document.createElement('div');
//     div.innerText = pais;
//     h2[1].appendChild(div)
// }
//FIN ---------------------------------------------------------------------------------------------------------------------->


// AGREGAR DINÁMICAMENTE SECTORES DE HTML A UNA LISTA DESDE JS------------------------***------------------------>

// Consulta 1: a continuación si hago el for con producto1, la consola dice que no se puede iterar, no comprendo porqué.
// Consulta 2 : cómo se hace para colocar los divs en otro lugar, donde yo quiera posicionarlo en la página.  
// Consulta 3 : donde dice li.innerHTML, 

// for (const pais of paises) {
//     console.log(pais);
//     const li = document.createElement('div');
//     li.innerHTML = `
//     <div class="wf-flex-descripcionInicial3">
//     <div>
//         <h3 class= "busquedaTema2">${producto1.tipo}</h3>
//         <h3 class= "busquedaTema2">${producto1.autor}</h3>
//     </div>
//     </div>

//     `
//     h2[1].appendChild(li)
// }
//FIN ---------------------------------------------------------------------------------------------------------------------->


// USO DE INTERPOLACIÓN Y BACKTIS O ACCENT INVERTIDOS PARA IMPLEMENTAR UNA PLANTILLA---------SI FUNCIONA------------->

// let plantilla = `Categoría ${producto1.tipo} Título ${producto2.titulo} Autor ${producto3.autor} Color ${producto4.color} Precio ${producto5.precio}`;
// console.log(plantilla);


//FIN ---------------------------------------------------------------------------------------------------------------------->



//STORAGE & JASON-------SI FUNCIONA-------------------------------------------------------------------------------------------->

// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

//almacenar producto por producto

//for (const itemAutor of Producto) {
// guardarLocal(producto.autor, JSON.stringify(Producto));
// }

// o almacenar array completo

//guardarLocal("listaProductos", JSON.stringify(producto1));
//console.log(producto1);

// function guardarLS(arr) {
//     localStorage.setItem("datosFormulario", JSON.stringify(arr));
// }

// const guardarDatosFormulario = () => {

//     const nombre = document.getElementById("firstName");
//     guardarLocal(nombre, JSON.stringify(nombre))
//     const apellido = document.getElementById("lastName");
//     const mail = document.getElementById("email");
// }
// console.log(guardarDatosFormulario);


// llamar a cada uno de los inputs}

//FIN ---------------------------------------------------------------------------------------------------------------------->





//---------------------------------------------PAPELERA---------------------------------------------------------------->

// function buscarProductoAutor(almacen2, filtro) {
//     const encontrado = almacen2.find((producto) => {
//         return producto.autor.includes(filtro);
//     });
//     return encontrado;
//ProductoEncontradoArtista = EncontrarArtista(almacen2, "gonza");

// const BtnBuscar = document.getElementById("BotonBuscar");
// BtnBuscar.addEventListener('click', () => {
//     EncontrarArtista(almacen2,)
//     console.log("hiciste click");
// })
//console.log(BtnBuscar);
// function guardarDatosBusquedas() {
// const primerBusqueda = document.getElementById("barraBusqueda").value;
// cargarAcampoBusquedas(primerBusqueda);
// console.log(campoBusquedas);
// }

//const primerBusqueda = document.getElementById("barraBusqueda").value;
// guardarDatosBusquedas();

// function cargarAcampoBusquedas(valor) {
//     campoBusquedas.push(valor);
//const campoBusquedas = [];

//comprobación de que anda EncontrarArtista:
// EncontrarArtista(almacen2, "gonza");
// ProductoEncontradoArtista = EncontrarArtista(almacen2, "gonza");
// console.log(ProductoEncontradoArtista);
//---------------------------------------------BotonBuscar---------------------------------------------------------------->


function EncontrarArtista(arr, filtro) {
    const encontrado = arr.find((producto) => {
        return producto.autor.includes(filtro);
    })
    return encontrado;
}

const botonBuscar = document.getElementById("botonBuscar")
console.log(botonBuscar);

const usuarioBusqueda = document.querySelector('barraBusqueda').value;
console.log(usuarioBusqueda);

botonBuscar.addEventListener("submit", (e) => {
    EncontrarArtista(almacen2, usuarioBusqueda);
    console.log(usuarioBusqueda);
    ProductoEncontradoArtista = EncontrarArtista(almacen2, "gonza");
    console.log(ProductoEncontradoArtista);
    e.preventDefault();
})
//FIN ---------------------------------------------------------------------------------------------------------------------->

// CÓMO COLOCAR PARA QUE HAGA LA BÚSQUEDA POR AUTOR EN EL ARRAY ALMACEN2 Y LA DEVUELVA DE ALGUNA MANERA?
//     //console.log(e.target);
//     console.log("Busqueda realizada");
//     let CampoBuscado = e.target;
//     console.log(CampoBuscado.children[0].value); // no accede a la información cargada en el campo. 
// })

//FIN ---------------------------------------------------------------------------------------------------------------------->






// ALMACENES---------------------------------------------------------------------------------------------------------------->

//const almacen = [producto1, producto2, producto3];



//EVENTOS---------SI FUNCIONA  INTENTO ACTIVAR BÚSQUEDA: ----------------------------------------------------------------------------------------------->


// function EncontrarArtista(arr, filtro) {
//     const encontrado = arr.find((producto) => {
//         //return producto.autor == filtro;
//         return producto.autor.includes(filtro);
//     })
//     return encontrado;
// }

// const BtnBuscar = document.getElementById("BotonBuscar");
// BtnBuscar.addEventListener('click', () => {
//     EncontrarArtista(almacen2,)
//     console.log("hiciste click");
// })
//console.log(BtnBuscar);


// const Busqueda = document.getElementsByClassName("busquedaTema");
// console.log(Busqueda[2].innerText = 'ARGENTINA VIEJAA'); /* ESTE SI FUNCIONA! */


// const PrimerNombre = document.getElementById("firstName");
// PrimerNombre.addEventListener("input", () => {
// }




//CARRITO------------------------------------------------------------------------------------------------------------------->
const carrito = [];
//FIN ---------------------------------------------------------------------------------------------------------------------->

//PRUEBA DE BÚSQUEDA POR NOMBRE DE AUTOR DE PRODUCTO BOTON BUSCAR----FUNCIONA----------------------------------------------->

// function buscarProductoAutor(almacen2, filtro) {
//     const encontrado = almacen2.find((producto) => {
//         return producto.autor.includes(filtro);
//     });
//     return encontrado;
// }

// ProductoEncontradoAutor = buscarProductoAutor(almacen2, "gonza");
// console.log(ProductoEncontradoAutor);

//FIN ---------------------------------------------------------------------------------------------------------------------->


//PRUEBA DE BÚSQUEDA POR PRECIO DE PRODUCTO BOTON BUSCAR-----------FUNCIONA------------------------------------------------->

// function filtrarPorPrecio(arr, filtro) {
//     return almacen2.filter((producto) => {
//         return producto.precio <= filtro;
//     })
// }

// const filtroPorPrecioEncontrado = filtrarPorPrecio(almacen2, 2500);
// console.log(filtroPorPrecioEncontrado);

//FIN ---------------------------------------------------------------------------------------------------------------------->


//PRUEBA DE FUNCIÓN PARA CARGAR PRODUCTOS FILTRADOS AL CARRITO-----------FUNCIONA------------------------------------------->

// function cargarAlCarrito(carrito, valor) {
//     carrito.push(valor);
// }

// cargarAlCarrito(carrito, producto1);
// console.log(carrito);

// cargarAlCarrito(carrito, filtroPorPrecioEncontrado);
// console.log(carrito);

// cargarAlCarrito(carrito, ProductoEncontradoAutor);
// console.log(carrito);

//FIN ---------------------------------------------------------------------------------------------------------------------->


//PRUEBA DE FUNCIÓN PARA SABER EL PRECIO FINAL DEL CARRITO-------------------NO FUNCIONA------------------------------------>

// let PrecioFinal = carrito.reduce((acc, producto1) => {
//     return acc + producto1.precio;
// }, 0)

// console.log(PrecioFinal);

//FIN ---------------------------------------------------------------------------------------------------------------------->


//PRUEBA DE FUNCIÓN PARA APLICAR BUSCAR PRODUCTOS MEDIANTE INPUT DE BUSCAR NAVBAR ---NO FUNCIONA---------------------------->

// const BtnBuscarNavBar = document.getElementById("BotonBuscar");
// BtnBuscarNavBar.addEventListener('input', () => {
//     const encontradoFinal = buscarProductoAutor(almacen2, producto)
//     console.log(encontradoFinal);
// })

//FIN ---------------------------------------------------------------------------------------------------------------------->



//OBSERVACIONES---------------------------------------------------------------------------------------------------------------------->

//function cargarACamposFormulario(camposFormulario, valor) { 
//    camposFormulario.push(valor);
//} Esto no porque: "CamposFormulario no deberías pasarlo como parámetro porque ya es una variable global, podemos acceder igual" entonces se hace de la siguiente manera: 
// function cargarACamposFormulario(valor) {
//     camposFormulario.push(valor);
// }
// consejo: Para definir un lugar para visualizar algo a través del DOM, tendrías que definir un div en el html en algún lugar y colocarle un id, el cual lo tomarías con js para renderizar elementos



//FIN ---------------------------------------------------------------------------------------------------------------------->