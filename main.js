
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
const moco = new Producto("moco", "peludo", "gonzalo morresi", 8400);

// CLASE DOM ------------------------------------------------------------------------------------------------------------------->

//DOM REVISAR DE NUEVO -----------------------------------------NO FUNCIONA------------------------->
/*
const presenta = document.getElementsByClassName("presentacion");

presenta.innerText = "Somos una empresa de locos a los que les gusta la moda, el Fly, el Diseño y el Perreo Intenso. Animación, Ilustración, Diseño web y cantidad de cosas más.. Acá vas a encontrar lo que buscas perro malvado."

*/
//MODIFICACIÓN DEL HTML DESDE DOM----------------------------------FUNCIONA MASOMENOS-------------------------------------->
// const h2 = document.getElementsByTagName('h2');
// console.log(h2[0]);

// h2[0].className = "textoInicial"
//textoInicial está en SASS



//CREO ELEMENTOS DESDE JS------------------------------------------SI FUNCIONA----------------------------------***----------->
const parrafo = document.createElement('p')
parrafo.innerHTML = "<h4>Recorré la experiencia, conocé artistas y revolucioná tu estilo</h4>";
//agrego al DOM:
document.body.append(parrafo); //cómo colocarlo donde yo quiero (buscar)
//h2[1].appendChild(parrafo);
//FIN ---------------------------------------------------------------------------------------------------------------------->


//AGREGAR DINÁMICAMENTE ITEMS A UNA LISTA DESDE JS----------------SI FUNCIONA-------------------------------------------***-->

// const paises = ["Jamaica", "Japon", "Nueva zelanda"];

// h2[1];

// for (const pais of paises) {
//     const div = document.createElement('div');
//     div.innerText = pais;
//     h2[1].appendChild(div)}
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

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

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


//STORAGE & JASON PRUEBO ALMACENAR DATOS FORMULARIO------------------------------------------------------------------------->

const CamposFormulario = [];
console.log(CamposFormulario);

function cargarACamposFormulario(CamposFormulario, valor) {
    CamposFormulario.push(valor);
}

function guardarDatosFormulario() {
    const nombre = document.getElementById("firstName");
    cargarACamposFormulario(CamposFormulario, nombre);
    const apellido = document.getElementById("lastName");
    cargarACamposFormulario(CamposFormulario, apellido);
    const mail = document.getElementById("email");
    cargarACamposFormulario(CamposFormulario, mail);
    console.log(nombre);
}


function guardarLS(CamposFormulario) {
    localStorage.setItem("datosFormulario", JSON.stringify(CamposFormulario));
}

BotonFormulario.addEventListener("click", () => {
    guardarDatosFormulario;
    guardarLS;
    console.log(CamposFormulario);
});
//console.log(CamposFormulario);

//FIN ---------------------------------------------------------------------------------------------------------------------->


// ALMACENES---------------------------------------------------------------------------------------------------------------->

//const almacen = [producto1, producto2, producto3];

const almacen2 = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12];

//EVENTOS---------SI FUNCIONA  INTENTO ACTIVAR BÚSQUEDA: ----------------------------------------------------------------------------------------------->


function EncontrarArtista(arr, filtro) {
    const encontrado = arr.find((producto) => {
        //return producto.autor == filtro;
        return producto.autor.includes(filtro);
    })
    return encontrado;
}

const BtnBuscar = document.getElementById("BotonBuscar");
BtnBuscar.addEventListener('click', () => {
    EncontrarArtista(almacen2,)
    console.log("hiciste click");
})
console.log(BtnBuscar);


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


//PRUEBA DE USO DE HERRAMIENTA PARA EVITAR QUE SE RECARGUE LA PÁGINA AL APRETAR ENVIAR---FUNCIONA PERO NO TOMA LOS HIJOS DEL FORMULARIO------------------------->

//const formulario = document.querySelector("needs-validation") //Esta forma de llamar no la toma.

// const formulario = document.getElementById("formulario")
// console.log(formulario); //la primera vez lo pinta y se ven textos en azul y la segunda vez que recargo se ve distinto. 
// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();
//     //console.log(e.target);
//     console.log("formulario enviado");
//     let formularioCampos = e.target;
    //console.log(formularioCampos);
    //console.log(formularioCampos.children[1].value); //no accede a la información ya que contenedor formulario contiene solo 2 hijos: row g-3 y my-5 text center.})

// const BotonBuscar = document.getElementById("BotonBuscar")
// console.log(BotonBuscar);
// BotonBuscar.addEventListener("submit", (e) => {
//     e.preventDefault();
//     //console.log(e.target);
//     console.log("Busqueda realizada");
//     let CampoBuscado = e.target;
//     console.log(CampoBuscado.children[0].value); // no accede a la información cargada en el campo. 
// })

//FIN ---------------------------------------------------------------------------------------------------------------------->



//acá la idea es agregar addEventListener para capturar los datos recopilados en el formulario y guardarlos en el local storage. 

//FIN ---------------------------------------------------------------------------------------------------------------------->
// consejo: Para definir un lugar para visualizar algo a través del DOM, tendrías que definir un div en el html en algún lugar y colocarle un id, el cual lo tomarías con js para renderizar elementos