
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


// CLASE DOM ------------------------------------------------------------------------------------------------------------------->

//DOM REVISAR DE NUEVO -----------------------------------------NO FUNCIONA------------------------->
/*
const presenta = document.getElementsByClassName("presentacion");

presenta.innerText = "Somos una empresa de locos a los que les gusta la moda, el Fly, el Diseño y el Perreo Intenso. Animación, Ilustración, Diseño web y cantidad de cosas más.. Acá vas a encontrar lo que buscas perro malvado."

*/
//MODIFICACIÓN DEL HTML DESDE DOM----------------------------------FUNCIONA MASOMENO-------------------------------------->
const h2 = document.getElementsByTagName('h2');
console.log(h2[0]);

h2[0].className = "textoInicial"
//textoInicial está en SASS



//CREO ELEMENTOS DESDE JS------------------------------------------SI FUNCIONA--------------------------------------------->
const parrafo = document.createElement('p')
parrafo.innerHTML = "<h4>Recorré la experiencia, conocé artistas y revolucioná tu estilo</h4>";
//agrego al DOM:
document.body.append(parrafo);
h2[1].appendChild(parrafo);
//FIN ---------------------------------------------------------------------------------------------------------------------->


//AGREGAR DINÁMICAMENTE ITEMS A UNA LISTA DESDE JS----------------SI FUNCIONA------>

const paises = ["Jamaica", "Japon", "Nueva zelanda"];

h2[1];

for (const pais of paises) {
    const div = document.createElement('div');
    div.innerText = pais;
    h2[1].appendChild(div)
}
//FIN ---------------------------------------------------------------------------------------------------------------------->


// AGREGAR DINÁMICAMENTE SECTORES DE HTML A UNA LISTA DESDE JS------------------------------------------------>

// Consulta: a continuación si hago el for con producto1, la consola dice que no se puede iterar, no comprendo porqué.
// Consulta 2 : cómo se hace para colocar los divs en otro lugar, donde yo quiera posicionarlo en la página.  
// Consulta 3 : donde dice li.innerHTML, 

for (const pais of paises) {
    console.log(pais);
    const li = document.createElement('div');
    li.innerHTML = `
    <div class="wf-flex-descripcionInicial3">
    <div>
        <h3 class= "busquedaTema2">${producto1.tipo}</h3>
        <h3 class= "busquedaTema2">${producto1.autor}</h3>
    </div>
    </div>

    `
    h2[1].appendChild(li)
}
//FIN ---------------------------------------------------------------------------------------------------------------------->


// USO DE INTERPOLACIÓN Y BACKTIS O ACCENT INVERTIDOS PARA IMPLEMENTAR UNA PLANTILLA---------SI FUNCIONA------------->
let plantilla = `Categoría ${producto1.tipo} Título ${producto2.titulo} Autor ${producto3.autor} Color ${producto4.color} Precio ${producto5.precio}`;
console.log(plantilla);


//FIN ---------------------------------------------------------------------------------------------------------------------->



//STORAGE & JASON-------SI FUNCIONA---------------------------------------------------------------------------------------------------->

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

//almacenar producto por producto
/*
for (const itemAutor of Producto) {
    guardarLocal(producto.autor, JSON.stringify(Producto));
}
*/
// o almacenar array completo

guardarLocal("listaProductos", JSON.stringify(producto1));
console.log(producto1);

//FIN ---------------------------------------------------------------------------------------------------------------------->




//EVENTOS---------NO FUNCIONA ----------------------------------------------------------------------------------------------->

//const BtnBuscar = document.querySelectorAll("btn btn-outline-success");

const BtnBuscar1 = document.getElementsByClassName("btn btn-outline-success");
BtnBuscar1.addEventListener('click', () => {
    console.log("hiciste click");
})
console.log(BtnBuscar1);


const Busqueda = document.getElementsByClassName("busquedaTema");
console.log(Busqueda[2].innerText = 'ARGENTINA VIEJAA'); /* ESTE SI FUNCIONA! */

/*BtnBuscar.addEventListener('click', () => {
    console.log('hiciste click');  NO FUNCIONA EN LA CONSOLA TIRA "NO ES UNA FUNCIÓN" 
})
*/


const PrimerNombre = document.getElementById("firstName");
PrimerNombre.addEventListener("click", guardarLocal("firstName", JSON.stringify(firstName)));

const BotonBuscar2 = document.getElementsByClassName("w-25 btn btn-primary btn-lg");
console.log(BotonBuscar2);
BotonBuscar2.addEventListener("click", guardarLocal("que valor tengo que colocar acá para que guarde todos los campos?", JSON.stringify(firstName)));



//acá la idea es agregar addEventListener para capturar los datos recopilados en el formulario y guardarlos en el local storage. 

//FIN ---------------------------------------------------------------------------------------------------------------------->






//CARRITO---------------------->
const carrito = [];
console.log(carrito);

// ALMACENES--------------------->

const almacen = [producto1, producto2, producto3];

const almacen2 = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12];


/*
al tener  ésto :btn btn-outline-success
el código no sabe que clase tomar.
No se puede pasar como parámetro muchas clases para tomar un elemento a través del DOM. Solo una clase.

Lo que te mencionaba sobre los id es que al ser un identificador único, puede generar menos errores que tomarlo por clases.

Para definir un lugar para visualizar algo a través del DOM, tendrías que definir un div en el html en algún lugar y colocarle un id, el cual lo tomarías con js para renderizar elementos.



*/
