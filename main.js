
// -------------------------------------------------ESTRUCTURA FUNCIÓN CONSTRUCTORA, CARRITO Y ALMACENES---------------------------------------------->


// FUNCIÓN CONSTRUCTORA

function Producto(tipo, titulo, autor, color, precio, imagen) {
    this.tipo = tipo;
    this.titulo = titulo;
    this.autor = autor;
    this.color = color;
    this.precio = precio;
    this.imagen = imagen; // esto Cómo lo podría usar para hacer la tarjeta. 
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

const producto1 = new Producto("Marca Digital", "Softer", "pablo fernández", "Violeta-Azul", 9000, "imagenes/imagenVioleta.jpg");
const producto2 = new Producto("Ilustración 3D", "Tomato Soup", "pablo footit", "Naranja-Verde", 3200, "imagenes/imagenTomato2.jpg");
const producto3 = new Producto("Ilustración", "Ghost Pals", "aleisha samek", "Marrón-Blanco", 2700, "imagenes/imagenFantasma.jpg");
const producto4 = new Producto("Diseño", "Hocus Pocus", "zach hannibal", "Rosado-Gris", 3800, "imagenes/imagenSalem.jpg");
const producto5 = new Producto("Marca", "Sensitive Tiger", "sofia herrera", "Naranja-Celeste", 4800, "imagenes/imagenTigre.jpg");
const producto6 = new Producto("Bordado digital", "Duck Duck Pal", "emanuel pécora", "Verde-Amarillo", 2900, "imagenes/imagenPato.jpg");
const producto7 = new Producto("Collage", "Astrology", "camila fernández", "Rosado-Verde", 6500, "imagenes/imagenAstrologia.jpg");
const producto8 = new Producto("Clipping", "Best Clippings", "cami ferreira", "Rojo-Negro", 2500, "imagenes/imagenClipings.jpg");
const producto9 = new Producto("Marca", "Hype!", "manu contreras", "Flúor-Verde", 7100, "imagenes/imagenHype.jpg");
const producto10 = new Producto("Ilustración", "Space Travel", "josé hidalgo", "Violeta-Negro", 9400, "imagenes/imagenNave.jpg");
const producto11 = new Producto("Marca", "Doberman Power", "ezequiel quinteros", "Negro-Marrón", 6500, "imagenes/imagenDog.jpg");
const producto12 = new Producto("Ilustración", "Kill Bill Sessions", "gonzalo morresi", "Rojo-Amarillo", 8400, "imagenes/imagenKB.jpg");


const almacen2 = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12];

const almacenCompra = [producto1, producto2, producto3]


//CREO ELEMENTOS DESDE JS--------------------------------------------------------------------------------------------------->

const h2 = document.getElementsByTagName('h2');
const parrafoPresenta = document.createElement('p')
parrafoPresenta.innerHTML = "<h2> Acá vas a encontrar lo que buscas perro malvado.</h2>";
h2[1].appendChild(parrafoPresenta);


// USO SET INTERVAL---------------------------------------------------------------------------------------------------------->

let intervalo1 = setInterval(() => {
    const parrafo = document.createElement('p')
    parrafo.innerHTML = "<br> <h2>Recorré la experiencia, conocé artistas y revolucioná tu estilo.</h2>";
    h2[1].appendChild(parrafo);
}, 3000);

setTimeout(() => {
    clearInterval(intervalo1);
}, 3500);

//FIN ---------------------------------------------------------------------------------------------------------------------->


//Botones de compra productos: NOTIFICACIÓN Librería TOASTIFY ----------------------------------------------->
//AGREGAR AL CARRITO  GUARDANDO Y RECUPERANDO DESDE EL LOCAL STORAGE ------------------------------------------------------>

const btnSofter = document.getElementById("btnSofter");
btnSofter.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function () { } 
    }).showToast();
    const tituloS = document.querySelector(".tituloS");
    const tituloTarjeta = tituloS.innerHTML;
    const descripcionS = document.querySelector(".descripcionS");
    const descripcionTarjeta = descripcionS.innerHTML;
    const precioS = document.querySelector(".precioS");
    const precioTarjeta = precioS.innerHTML;
    const imagenTarjeta = "./imagenes/imagenVioleta.jpg";
    const autorS = document.querySelector(".autorS");
    const autorTarjeta = autorS.innerHTML;
    const productoSeleccionado = {
        titulo: tituloTarjeta,
        descripcion: descripcionTarjeta,
        precio: precioTarjeta,
        imagen: imagenTarjeta,
        autor: autorTarjeta,
    }
    guardarLocal('ProductoAgregado', JSON.stringify(productoSeleccionado));
    agregarCarrito()
    console.log(carrito);
})

const btnTomato = document.getElementById("btnTomato");
btnTomato.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function () { }
    }).showToast();
    const tituloTo = document.querySelector(".tituloTo");
    const tituloTarjeta = tituloTo.innerHTML;
    const descripcionTo = document.querySelector(".descripcionTo");
    const descripcionTarjeta = descripcionTo.innerHTML;
    const precioTo = document.querySelector(".precioTo");
    const precioTarjeta = precioTo.innerHTML;
    const imagenTarjeta = "./imagenes/imagenTomato2.jpg";
    const autorTo = document.querySelector(".autorTo");
    const autorTarjeta = autorTo.innerHTML;
    const productoSeleccionado = {
        titulo: tituloTarjeta,
        descripcion: descripcionTarjeta,
        precio: precioTarjeta,
        imagen: imagenTarjeta,
        autor: autorTarjeta,
    }
    guardarLocal('ProductoAgregado', JSON.stringify(productoSeleccionado));
    agregarCarrito()
    console.log(carrito);
})

const btnGhost = document.getElementById("btnGhost");
btnGhost.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function () { }
    }).showToast();
    const tituloGhost = document.querySelector(".tituloGhost");
    const tituloTarjeta = tituloGhost.innerHTML;
    const descripcionGhost = document.querySelector(".descripcionGhost");
    const descripcionTarjeta = descripcionGhost.innerHTML;
    const precioGhost = document.querySelector(".precioGhost");
    const precioTarjeta = precioGhost.innerHTML;
    const imagenTarjeta = "./imagenes/imagenFantasma.jpg";
    const autorGhost = document.querySelector(".autorGhost");
    const autorTarjeta = autorGhost.innerHTML;
    const productoSeleccionado = {
        titulo: tituloTarjeta,
        descripcion: descripcionTarjeta,
        precio: precioTarjeta,
        imagen: imagenTarjeta,
        autor: autorTarjeta,
    }
    guardarLocal('ProductoAgregado', JSON.stringify(productoSeleccionado));
    agregarCarrito()
    console.log(carrito);
})

const btnHocus = document.getElementById("btnHocus");
btnHocus.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function () { }
    }).showToast();
    const tituloHocus = document.querySelector(".tituloHocus");
    const tituloTarjeta = tituloHocus.innerHTML;
    const descripcionHocus = document.querySelector(".descripcionHocus");
    const descripcionTarjeta = descripcionHocus.innerHTML;
    const precioHocus = document.querySelector(".precioHocus");
    const precioTarjeta = precioHocus.innerHTML;
    const imagenTarjeta = "./imagenes/imagenSalem.jpg";
    const autorHocus = document.querySelector(".autorHocus");
    const autorTarjeta = autorHocus.innerHTML;
    const productoSeleccionado = {
        titulo: tituloTarjeta,
        descripcion: descripcionTarjeta,
        precio: precioTarjeta,
        imagen: imagenTarjeta,
        autor: autorTarjeta,
    }
    guardarLocal('ProductoAgregado', JSON.stringify(productoSeleccionado));
    agregarCarrito()
    console.log(carrito);
})

const btnTigre = document.getElementById("btnTigre");
btnTigre.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function () { }
    }).showToast();
    const tituloT = document.querySelector(".tituloT");
    const tituloTarjeta = tituloT.innerHTML;
    const descripcionT = document.querySelector(".descripcionT");
    const descripcionTarjeta = descripcionT.innerHTML;
    const precioT = document.querySelector(".precioT");
    const precioTarjeta = precioT.innerHTML;
    const imagenTarjeta = "./imagenes/imagenTigre.jpg";
    const autorT = document.querySelector(".autorT");
    const autorTarjeta = autorT.innerHTML;
    const productoSeleccionado = {
        titulo: tituloTarjeta,
        descripcion: descripcionTarjeta,
        precio: precioTarjeta,
        imagen: imagenTarjeta,
        autor: autorTarjeta,
    }
    guardarLocal('ProductoAgregado', JSON.stringify(productoSeleccionado));
    agregarCarrito()
    console.log(carrito);
})

const btnDuck = document.getElementById("btnDuck");
btnDuck.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function () { }
    }).showToast();
    const tituloD = document.querySelector(".tituloD");
    const tituloTarjeta = tituloD.innerHTML;
    const descripcionD = document.querySelector(".descripcionD");
    const descripcionTarjeta = descripcionD.innerHTML;
    const precioD = document.querySelector(".precioD");
    const precioTarjeta = precioD.innerHTML;
    const imagenTarjeta = "./imagenes/imagenPato.jpg";
    const autorD = document.querySelector(".autorD");
    const autorTarjeta = autorD.innerHTML;
    const productoSeleccionado = {
        titulo: tituloTarjeta,
        descripcion: descripcionTarjeta,
        precio: precioTarjeta,
        imagen: imagenTarjeta,
        autor: autorTarjeta,
    }
    guardarLocal('ProductoAgregado', JSON.stringify(productoSeleccionado));
    agregarCarrito()
    console.log(carrito);
})

const btnAstrology = document.getElementById("btnAstrology");
btnAstrology.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function () { }
    }).showToast();
    const tituloA = document.querySelector(".tituloA");
    const tituloTarjeta = tituloA.innerHTML;
    const descripcionA = document.querySelector(".descripcionA");
    const descripcionTarjeta = descripcionA.innerHTML;
    const precioA = document.querySelector(".precioA");
    const precioTarjeta = precioA.innerHTML;
    const imagenTarjeta = "./imagenes/imagenAstrologia.jpg";
    const autorA = document.querySelector(".autorA");
    const autorTarjeta = autorA.innerHTML;
    const productoSeleccionado = {
        titulo: tituloTarjeta,
        descripcion: descripcionTarjeta,
        precio: precioTarjeta,
        imagen: imagenTarjeta,
        autor: autorTarjeta,
    }
    guardarLocal('ProductoAgregado', JSON.stringify(productoSeleccionado));
    agregarCarrito()
    console.log(carrito);
})

const btnClippings = document.getElementById("btnClippings");
btnClippings.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function () { }
    }).showToast();
    const tituloBC = document.querySelector(".tituloBC");
    const tituloTarjeta = tituloBC.innerHTML;
    const descripcionBC = document.querySelector(".descripcionBC");
    const descripcionTarjeta = descripcionBC.innerHTML;
    const precioBC = document.querySelector(".precioBC");
    const precioTarjeta = precioBC.innerHTML;
    const imagenTarjeta = "./imagenes/imagenClipings.jpg";
    const autorBC = document.querySelector(".autorBC");
    const autorTarjeta = autorBC.innerHTML;
    const productoSeleccionado = {
        titulo: tituloTarjeta,
        descripcion: descripcionTarjeta,
        precio: precioTarjeta,
        imagen: imagenTarjeta,
        autor: autorTarjeta,
    }
    guardarLocal('ProductoAgregado', JSON.stringify(productoSeleccionado));
    agregarCarrito()
    console.log(carrito);
})

const btnHype = document.getElementById("btnHype");
btnHype.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function () { }
    }).showToast();
    const tituloHP = document.querySelector(".tituloHP");
    const tituloTarjeta = tituloHP.innerHTML;
    const descripcionHP = document.querySelector(".descripcionHP");
    const descripcionTarjeta = descripcionHP.innerHTML;
    const precioHP = document.querySelector(".precioHP");
    const precioTarjeta = precioHP.innerHTML;
    const imagenTarjeta = "./imagenes/imagenHype.jpg";
    const autorHP = document.querySelector(".autorHP");
    const autorTarjeta = autorHP.innerHTML;
    const productoSeleccionado = {
        titulo: tituloTarjeta,
        descripcion: descripcionTarjeta,
        precio: precioTarjeta,
        imagen: imagenTarjeta,
        autor: autorTarjeta,
    }
    guardarLocal('ProductoAgregado', JSON.stringify(productoSeleccionado));
    agregarCarrito()
    console.log(carrito);
})

const btnSpace = document.getElementById("btnSpace");
btnSpace.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function () { }
    }).showToast();
    const tituloST = document.querySelector(".tituloST");
    const tituloTarjeta = tituloST.innerHTML;
    const descripcionST = document.querySelector(".descripcionST");
    const descripcionTarjeta = descripcionST.innerHTML;
    const precioST = document.querySelector(".precioST");
    const precioTarjeta = precioST.innerHTML;
    const imagenTarjeta = "./imagenes/imagenNave.jpg";
    const autorST = document.querySelector(".autorST");
    const autorTarjeta = autorST.innerHTML;
    const productoSeleccionado = {
        titulo: tituloTarjeta,
        descripcion: descripcionTarjeta,
        precio: precioTarjeta,
        imagen: imagenTarjeta,
        autor: autorTarjeta,
    }
    guardarLocal('ProductoAgregado', JSON.stringify(productoSeleccionado));
    agregarCarrito()
    console.log(carrito);
})

const btnDog = document.getElementById("btnDog");
btnDog.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
    const tituloDP = document.querySelector(".tituloDP");
    const tituloTarjeta = tituloDP.innerHTML;
    const descripcionDP = document.querySelector(".descripcionDP");
    const descripcionTarjeta = descripcionDP.innerHTML;
    const precioDog = document.querySelector(".precioDog");
    const precioTarjeta = precioDog.innerHTML;
    const imagenTarjeta = "./imagenes/imagenDog.jpg";
    const autorDog = document.querySelector(".autorDog");
    const autorTarjeta = autorDog.innerHTML;
    const productoSeleccionado = {
        titulo: tituloTarjeta,
        descripcion: descripcionTarjeta,
        precio: precioTarjeta,
        imagen: imagenTarjeta,
        autor: autorTarjeta,
    }
    guardarLocal('ProductoAgregado', JSON.stringify(productoSeleccionado));
    agregarCarrito()
    console.log(carrito);
})

const btnKill = document.getElementById("btnKill");
btnKill.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
    const tituloKB = document.querySelector(".tituloKB");
    const tituloTarjeta = tituloKB.innerHTML;
    const descripcionKB = document.querySelector(".descripcionKB");
    const descripcionTarjeta = descripcionKB.innerHTML;
    const precioKB = document.querySelector(".precioKB");
    const precioTarjeta = precioKB.innerHTML;
    const imagenTarjeta = "./imagenes/imagenKB.jpg";
    const autorKB = document.querySelector(".autorKB");
    const autorTarjeta = autorKB.innerHTML;

    const productoSeleccionado = {
        titulo: tituloTarjeta,
        descripcion: descripcionTarjeta,
        precio: precioTarjeta,
        imagen: imagenTarjeta,
        autor: autorTarjeta,
    }
    guardarLocal('ProductoAgregado', JSON.stringify(productoSeleccionado));
    agregarCarrito()
    console.log(carrito);
})

