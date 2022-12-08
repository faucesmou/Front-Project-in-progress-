
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

//Botón SWEETALERT------------------------>
const botonSweet = document.getElementById("botonSweet");
console.log(botonSweet);

botonSweet.addEventListener('click', () => {
    Swal.fire({
        title: 'Gato volador!',
        width: 600,
        padding: '6em',
        color: 'rgb(25, 6, 61)',
        background: '#fff url(imagenes/salchichaPalta.jpg)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("imagenes/nyanCat2.gif")
          center left
          no-repeat
        `
    })
})

//fin Botón SWEETALERT------------------->

//Botones de compra productos: NOTIFICACIÓN Librería TOASTIFY ----------------------------------------------->
//AGREGAR AL CARRITO  GUARDANDO Y RECUPERANDO DESDE EL LOCAL STORAGE ------------------------------------------------------>

const btnSofter = document.getElementById("btnSofter");
btnSofter.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function () { } // ACÁ PUEDO EJECUTAR CUALQUIER FUNCIÓN Callback after click
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
    //carritoHTML();
})

const btnTomato = document.getElementById("btnTomato");
btnTomato.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function () { } // Callback after click
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
    //carritoHTML();
})

const btnGhost = document.getElementById("btnGhost");
btnGhost.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function () { } // Callback after click
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
    //carritoHTML();
})

const btnHocus = document.getElementById("btnHocus");
btnHocus.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function () { } // Callback after click
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
    //carritoHTML();
})

const btnTigre = document.getElementById("btnTigre");
btnTigre.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function () { } // Callback after click
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
    //carritoHTML();
})

const btnDuck = document.getElementById("btnDuck");
btnDuck.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function () { } // Callback after click
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
    //carritoHTML();
})

const btnAstrology = document.getElementById("btnAstrology");
btnAstrology.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function () { } // Callback after click
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
    //carritoHTML();
})

const btnClippings = document.getElementById("btnClippings");
btnClippings.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function () { } // Callback after click
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
    // carritoHTML();
})

const btnHype = document.getElementById("btnHype");
btnHype.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function () { } // Callback after click
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
    //carritoHTML();
})

const btnSpace = document.getElementById("btnSpace");
btnSpace.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function () { } // Callback after click
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
    //carritoHTML();
})

const btnDog = document.getElementById("btnDog");
btnDog.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
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
    //carritoHTML();
})

//VER TEMA DE CARGA Y RECUPERACIÓN DE IMÁGENES (INTENTOS EN LA SIGUIENTE TARJETA)-------------------->

const btnKill = document.getElementById("btnKill");
btnKill.addEventListener('click', () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
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

    //Variables para el guardado y recuperado del local Storage

    guardarLocal('ProductoAgregado', JSON.stringify(productoSeleccionado));
    agregarCarrito()
    console.log(carrito);
})



function agregarCarrito() {
    var productoAgregado = JSON.parse(localStorage.getItem('ProductoAgregado'));
    cargarAlCarrito(carrito, productoAgregado);
    console.log(productoAgregado);
}

const tbody = document.querySelector(".tbody");

// FUNCIÓN QUE HASTA AHORA ANDA CON FOR EACH Y EL ERROR DE ITERAR---------------(LA DEJO MOMENTÁNEAMENTE)

function carritoHTML() {
    carrito.forEach(productoAgregado => {
        const row = document.createElement('tr');
        row.innerHTML = `<div class="col-sm-12 col-md-4 col-xl-6" class="tarjetaGenerica">
        <div class="card mt-3 mb-2">
            <img class="card-img-top" src=${productoAgregado.imagen} class="img-fluid">
            <div class="card-body">
                <h3 class="card-title">${productoAgregado.titulo}</h3>
                <p class="card-text">${productoAgregado.descripcion}</p>
                <p class="autorHocus">${productoAgregado.autor}</p>
                    <p>${productoAgregado.precio}</p>
                <a id="btnDuck" class="btn btn-primary wf-btn-black">comprar</a>
            </div>
        </div>
    </div>`
        tbody.appendChild(row);
    });
}

const botonCarrito = document.getElementById("botonCarrito");
botonCarrito.addEventListener('click', () => {
    carritoHTML()
});

function actualizarCarrito() {
    let aux = ''
    tbody.innerHTML = aux;
    //calcularTotalCompra();
}

function vaciarBusquedas() {
    let aux = ''
    contenedorResultado.innerHTML = aux;
    //calcularTotalCompra();
}
// FIN AGREGAR AL CARRITO  GUARDANDO Y RECUPERANDO DESDE EL LOCAL STORAGE ------------------------------------------------------>


// BOTÓN VACIAR BÚSQUEDA------------------------------->

const vaciarResultado1 = document.getElementById("vaciar-resultado");
vaciarResultado1.addEventListener('click', () => {
    Swal.fire({
        title: 'Está seguro?',
        text: "Está a punto de vaciar los resultados",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, quiero volver a buscar',
        cancelButtonText: 'No, cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            console.log(carrito);
            vaciarBusquedas()
            carrito.splice(0, carrito.length);
            //botonCerrar.click()
            Toastify({
                text: 'Se vaciaron los productos encontrados',
                position: 'left',
                gravity: 'bottom',
                duration: 5000,
                style: {
                    background: "linear-gradient(to right, #f17b5d, #f02f2f)",
                }
            }).showToast()
        }
    })
})



// BOTÓN VACIAR CARRITO------------------------------->

function vaciarCarrito() {
    carrito.length = 0
}

const vaciarCarrito1 = document.getElementById("vaciar-carrito");
vaciarCarrito1.addEventListener('click', () => {
    Swal.fire({
        title: 'Está seguro?',
        text: "Está a punto de vaciar el carrito",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, vaciar',
        cancelButtonText: 'No, cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            //vaciarCarrito()
            console.log(carrito);
            actualizarCarrito()
            carrito.splice(0, carrito.length);
            //botonCerrar.click()
            Toastify({
                text: 'Se vació el carrito',
                position: 'left',
                gravity: 'bottom',
                duration: 5000,
                style: {
                    background: "linear-gradient(to right, #f17b5d, #f02f2f)",
                }
            }).showToast()
        }
    })
})











// INICIO LIBRERÍA CLEAVE.JS ---------------------------------------------------------------------------->

var cleave = new Cleave('#fechaNumber', {
    date: true,
    datePattern: ['m', 'y']
});

var cleave = new Cleave("#cardNumber", {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand'
});

//Credit card number formatting type

const formNumber = document.getElementsByClassName(".formNumber");

var cleave = new Cleave('#cardNumber', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        // update UI ...
        console.log(type);
    }
});

// INVESTIGAR CÓMO MOSTRAR EL TYPE POR PANTALLA---->

// function mostrarTarjeta() {
//     var cleave = new Cleave('#cardNumber', {
//         creditCard: true,
//         onCreditCardTypeChanged: function (type) {
//             console.log(type);
//         }
//     });
//     const div = document.createElement('div');
//     div.innerHTML = `
// <h4>${type}</h4>`;
//     formNumber.appendChild(div);
// }

//FIN LIBRERÍA CLEAVE.JS ---------------------------------------------------------------------------->



//---------------------INICIA FORMULARIO------------------------------------------------------------------------------->

const botonFormulario = document.getElementById("BotonFormulario");
const contenedorBtnFormulario = document.getElementById("contenedorBtnFormulario");


//--------------uso del set time out-------------------->

function notificaEnvioFormulario() {
    //    var avisoMail = localStorage.getItem('mail del formulario');
    var avisoMail = JSON.parse(localStorage.getItem('usuario'));
    console.log(avisoMail);
    const notifica = document.createElement('div');
    notifica.innerHTML = "<h4>Tu información fue enviada con éxito!</h4>";
    const notifica2 = document.createElement('p');
    //    notifica2.innerHTML = ` Recibirás novedades en el correo: ${avisoMail}`;
    notifica2.innerHTML = ` Recibirás novedades en el correo: ${avisoMail.mail}`;
    contenedorBtnFormulario.appendChild(notifica);
    contenedorBtnFormulario.appendChild(notifica2);
    setTimeout(() => {
        notifica.remove();
        notifica2.remove();
    }, 2500)
}


botonFormulario.addEventListener("click", (e) => {
    const nombre = document.getElementById("firstName").value;
    const apellido = document.getElementById("lastName").value;
    const mail = document.getElementById("email").value;
    const domicilio = document.getElementById("address").value;
    const pais = document.getElementById("country").value;
    const provincia = document.getElementById("state").value;
    const zipCode = document.getElementById("zip").value;

    const persona = {
        nombre: nombre,
        apellido: apellido,
        mail: mail,
        domicilio: domicilio,
        pais: pais,
        provincia: provincia,
        zipCode: zipCode,
    }
    guardarLocal('usuario', JSON.stringify(persona));
    notificaEnvioFormulario();
    e.preventDefault();
});
console.log(camposFormulario);

// FIN FORMULARIO------------------------------------------------------------------------------->


//-----------------------------APIS Y FETCH ---------------------------------------------------------------------------------------->

const productosCompra = [
    { id: 1, tipo: "Marca Digital", titulo: "Softer", autor: "pablo fernández", precio: 9000, imagen: "./imagenes/imagenVioleta.jpg" },
    { id: 2, tipo: "Ilustración 3D", titulo: "Tomato Soup", autor: "andrew footit", precio: 3200, imagen: "./imagenes/imagenTomato2.jpg" },
    { id: 3, tipo: "Ilustración", titulo: "Ghost Pals", autor: "aleisha samek", precio: 2700, imagen: "./imagenes/imagenFantasma.jpg" },
    { id: 4, tipo: "Diseño", titulo: "Hocus Pocus", autor: "zach hannibal", precio: 3800, imagen: "./imagenes/imagenSalem.jpg" },
    { id: 5, tipo: "Marca", titulo: "Sensitive Tiger", autor: "sofia herrera", precio: 3200, imagen: "./imagenes/imagenTigre.jpg" },
    { id: 6, tipo: "Bordado digital", titulo: "Duck Duck Pal", autor: "emanuel pécora", precio: 3200, imagen: "./imagenes/imagenPato.jpg" },
    { id: 7, tipo: "Collage", titulo: "Astrology", autor: "camila fernández", precio: 6500, imagen: "./imagenes/imagenAstrologia" },
    { id: 8, tipo: "Clipping", titulo: "Best Clippings", autor: "cami ferreira", precio: 2500, imagen: "./imagenes/imagenClipings.jpg" },
    { id: 9, tipo: "Marca", titulo: "Hype!", autor: "manu contreras", precio: 7100, imagen: "./imagenes/imagenHype.jpg" },
    { id: 10, tipo: "Ilustración", titulo: "Space Travel", autor: "josé hidalgo", precio: 9400, imagen: "./imagenes/imagenNave.jpg" },
    { id: 11, tipo: "Marca", titulo: "Doberman Power", autor: "ezequiel quinteros", precio: 6500, imagen: "./imagenes/imagenDog.jpg" },
    { id: 12, tipo: "Ilustración", titulo: "Kill Bill Sessions", autor: "gonzalo morresi", precio: 8400, imagen: "./imagenes/imagenKB.jpg" },
    
]

// const producto7 = new Producto("Collage", "Astrology", "camila fernández", "Rosado-Verde", 6500, "imagenes/imagenAstrologia.jpg");
// const producto8 = new Producto("Clipping", "Best Clippings", "cami ferreira", "Rojo-Negro", 2500, "imagenes/imagenClipings.jpg");
// const producto9 = new Producto("Marca", "Hype!", "manu contreras", "Flúor-Verde", 7100, "imagenes/imagenHype.jpg");
// const producto10 = new Producto("Ilustración", "Space Travel", "josé hidalgo", "Violeta-Negro", 9400, "imagenes/imagenNave.jpg");
// const producto11 = new Producto("Marca", "Doberman Power", "ezequiel quinteros", "Negro-Marrón", 6500, "imagenes/imagenDog.jpg");
// const producto12 = new Producto("Ilustración", "Kill Bill Sessions", "gonzalo morresi", "Rojo-Amarillo", 8400, "imagenes/imagenKB.jpg")





console.log(productosCompra);

const wharehouse = [];
let arrayPrecio = [];
// const contenedorCarrito = document.getElementById("contenedorCarrito")

// function cargarAlArray(array, valor) {
//     array.push(valor);
//     console.log(array);
// }

function cargarAlArray(array, valor) {
    array.push(valor);
    console.log(array[0]);
    array = array[0]
    console.log(array);
    //array[0].forEach(el => console.log(el))
}

// function cargarAlArrayLosProductos(productos) {
//     productos.forEach(productos => wharehouse.push(productos))
// }

function agregarWarehouse() {
    cargarAlCarrito(wharehouse, stock);
    console.log(productoAgregado);
}


// fetch('./notas2.json')
//     .then(res => res.json())
//     .then(data => {
//         cargarAlArray(wharehouse, data)
//         console.log(wharehouse);
//         const funcionaMaldito = wharehouse[0];
//         console.log(funcionaMaldito);
//         // cargarAlArray(wharehouse, stock);
//         //console.log(wharehouse);
//         // console.log(wharehouse[0]);

//     })
//     .catch(error => console.log(error))
// console.log("Este es whar por fuera de fetch");
// console.log(wharehouse);
// const funcionaMaldito = wharehouse[0];
// console.log(funcionaMaldito);
// console.log(wharehouse[0]);

//----------------------------- FIN APIS Y FETCH ---------------------------------------------------------------------------------------->




//CARRITO------------------------------------------------------------------------------------------------------------------->

let carrito = [];


//---------------------------------------------BotonBuscar por Artista o Precio---------------------------------------------------------------->

function filtrarPorPrecio(arr, filtro) {
    return arr.filter((producto) => {
        return producto.precio <= filtro;
    })
}

function EncontrarArtista(arr, filtro) {
    const encontrado = arr.filter((producto) => {
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

// if usuarioBusqueda = string > todo lo que hace productoArtista if not > todo lo que hace ProductoEncontradoPrecio.

// PRUEBA:

botonBuscar.addEventListener("submit", (e) => {
    e.preventDefault();
    const usuarioBusqueda = document
        .querySelector("#barraBusqueda")
        .value.toLowerCase();
    if (isNaN(parseInt(usuarioBusqueda))) {
        fetch('./notas2.json')
            .then(res => res.json())
            .then(data => {
                cargarAlArray(wharehouse, data)
                console.log(wharehouse);
                const traidoConFetch = wharehouse[0];
                console.log(traidoConFetch);
                ProductoEncontradoArtista = traidoConFetch.filter((producto) => {
                    return producto.autor.includes(usuarioBusqueda);
                })
                console.log(ProductoEncontradoArtista);
                ProductoEncontradoArtista.forEach((producto) => {
                    mostrarResultadoArtista(producto.titulo, producto.imagen, producto.precio, producto.autor);
                })

            });
    } else {
        ProductoEncontradoArtista = filtrarPorPrecio(almacen2, usuarioBusqueda);
        console.log(ProductoEncontradoArtista);
        ProductoEncontradoArtista.forEach((producto) => {
            mostrarResultadoArtista(producto.titulo, producto.imagen, producto.precio, producto.autor);
        })
    }
    // console.log(ProductoEncontradoArtista);
    // ProductoEncontradoArtista.forEach((producto) => {
    //     mostrarResultadoArtista(producto.titulo, producto.imagen);
    // })
})



function mostrarResultadoArtista(titulo, imagen, precio, autor) {
    const resultadoBusqueda = document.createElement("div");
    resultadoBusqueda.innerHTML = `<div class="col-sm-12 col-md-4 col-xl-6" class="tarjetaGenerica">
        <div class="card mt-3 mb-2">
            <img class="card-img-top" src=${imagen} class="img-fluid">
            <div class="card-body">
                <h3 class="card-title">${titulo}</h3>
                <p class="card-text">Some quick example text to build on the card title and make up the
                    bulk
                    of the card's content.</p>
                    <p class="autorHocus">${autor}</p>
                    <p>Valor: ${precio}</p>
                <a id="btnDuck" class="btn btn-primary wf-btn-black">comprar</a>
            </div>
        </div>
    </div>`;

    contenedorResultado.appendChild(resultadoBusqueda);
}




// function notificaBusqueda() {
//     //    var avisoMail = localStorage.getItem('mail del formulario');
//     const usuarioBusqueda = document.querySelector("#barraBusqueda").value;
//     ProductoEncontradoArtista = EncontrarArtista(almacen2, usuarioBusqueda);
//     ProductoEncontradoPrecio = filtrarPorPrecio(almacen2, usuarioBusqueda);
//     var ProductoEncontradoArtista = JSON.parse(localStorage.getItem('usuario'));
//     // console.log(avisoMail);
//     const notificaBusqueda = document.createElement('div');
//     notificaBusqueda.innerHTML = "<h4>Tu búsqueda fue realizada con éxito!</h4>";
//     const notificaBusqueda2 = document.createElement('p');
//     //    notifica2.innerHTML = ` Recibirás novedades en el correo: ${avisoMail}`;
//     notificaBusqueda2.innerHTML = ` El resultado de tu búsqueda es: ${ProductoEncontradoArtista}`;
//     // contenedorBtnFormulario.appendChild(notifica);
//     // contenedorBtnFormulario.appendChild(notifica2);
//     contenedorResultado.appendChild(notificaBusqueda);
//     contenedorResultado.appendChild(notificaBusqueda2);
// }

//---------------------------------------------FIN de BotonBuscar por Artista o Precio---------------------------------------------------------------->

// ALMACENES---------------------------------------------------------------------------------------------------------------->

// const almacen = [producto1, producto2, producto3];
