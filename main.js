
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

//Botones de compra productos. Librería TOASTIFY para notificación------------------------------------------------>

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
})

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
})

//Fin de Botones de compra productos------------------------------------------------>


// LIBRERÍA LUXON-----NO ANDA EL CDN----------------------------------------------------------------->

// var DateTime = luxon.DateTime;//NO ANDA EL CDN
// console.log(DateTime);
// //Clase librerías 1:40' explica y da un ejemplo del uso de luxon y fechas. 
// let ahora = date.DateTime.now();
// console.log(ahora);

//Fin de LIBRERÍA LUXON------------------------------------------------------------------------------>



// LIBRERÍA CLEAVE.JS ---------------------------------------------------------------------------->
// var cleave = new Cleave('.telefonoNumber', {
//     phone: true,
//     phoneRegionCode: '{country}'
// });

var cleave = new Cleave('#fechaNumber', {
    date: true,
    datePattern: ['m', 'y']
});

var cleave = new Cleave("#cardNumber", {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand'
});

//Credit card number formatting type
var cleave = new Cleave('#cardNumber', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        // update UI ...
        console.log(type);
    }
});

//FIN LIBRERÍA CLEAVE.JS ---------------------------------------------------------------------------->


//INICIA FORMULARIO------------------------------------------------------------------------------->




const botonFormulario = document.getElementById("BotonFormulario");
const contenedorBtnFormulario = document.getElementById("contenedorBtnFormulario");



//--------------USO DEL SET TIME OUT--------------------------------------------->

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

function guardarLS(camposFormulario) {
    localStorage.setItem("datosFormulario", JSON.stringify(camposFormulario));
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
    // guardarDatosFormulario();
    notificaEnvioFormulario();
    e.preventDefault();
    //   guardarLS();
    // console.log(camposFormulario);
});
console.log(camposFormulario);

// FIN FORMULARIO------------------------------------------------------------------------------->



//-------------------------------CLASE ASINCRONÍA Y PROMESAS: SET INTERVAL Y PROMESAS------------------------------------------------------------------------------->

// EJEMPLO EN CLASE DE SET INTERVAL---->
// let intervalo = setInterval(() => {
//     console.log("hola");
// }, 2000);

// setTimeout(() => {
//     clearInterval(intervalo);
// }, 10000);

//Promesas

// EJEMPLO EN CLASE DE PROMESAS---->

// console.log(new Promise((resolve, reject) => {
//     //cuerpo de la promesa
// }));

// let hamburguesa = true;
// let sinPapas = false;

// const pedirHamburguesa = (respuesta) => {
//     return new Promise((resolve, reject) => {
//         if (respuesta) {
//             resolve("Veni a retirar");
//         } else {
//             reject("No hay papas");
//         }

//     })
// }

// pedirHamburguesa(sinPapas)
//     .then((response) => {
//         console.log(response);
//     }).catch((err) => {
//         console.log(err);
//     }).finally(() => {
//         console.log('Gracias vuelva prontos');
//     });

//------------------------------- FIN CLASE ASINCRONÍA Y PROMESAS: SET INTERVAL Y PROMESAS--------------------------------------------------------------------->


//-------------------------------CLASE APIS Y FETCH  ------------------------------------------------------------------------------------------------------------>

// console.log(fetch());

// fetch('https://jsonplaceholder.typicode.com/todos/')
//     .then((response) => response.json())
//     .then((data => {
//         console.log(data[10]);
//         console.log(data[10].title);
//         console.log(data[15].id);
//     }));

//acá dice que la fórmula de arriba sirve pero si quiero traer 100 elementos no tiene sentido ir uno por uno copiando y escribiendo lo que quiero traer ocn el data [10].title etc. entonces
//propone esto: meterlo dentro de un for each o de algún iterador 

//El siguiente ejemplo no funcionó, la consola dice "uncaught typeerror: data.forEach is not a function"

// fetch('https://jsonplaceholder.typicode.com/todos/')
//     .then((response) => response.json())
//     .then((data => {
//         console.log(data);
//         data.forEeach(post => {
//             console.log(post);
//         });
//     }));
//El siguiente ejemplo no funcionó, la consola dice "uncaught typeerror: data.forEach is not a function"
// fetch('https://pokeapi.co/api/v2/pokemon/ditto') 
//     .then((response) => response.json())
//     .then((data => {
//         console.log(data);
//         data.forEeach(post => {
//             const li = document.createElement('li');
//             li.innerHTML = `
//             <h2>${post.title}</h2>
//             <p>${post.body}</p>`;
//             wf - sect2.appendChild(li)
//             console.log(post);
//         });
//     }));
//A continuación lo copié de github y pegué y SI anda---------------------------------------->:

// const presentacion = document.querySelector(".presentacion");

// fetch('https://jsonplaceholder.typicode.com/posts/')
//     .then((response) => response.json())
//     .then((data => {
//         console.log(data);
//         data.forEach(post => {
//             const li = document.createElement('li');
//             li.innerHTML = `
//   <h2>${post.title}</h2>
//   <p>${post.body}</p>`;
//             presentacion.appendChild(li);
//         });
//     }));

//Acceso bloqueado consultar----------------------------------------------->:

// fetch('./notas.jsonc')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         //renderServicios(data)
//     })


//    Acceso bloqueado consultar------------------------------------------->:

const servicios = [
    { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "imagenes/salchichaPalta.jpg" },
    { id: 2, nombre: "tatuaje espalda", precio: 2000, img: "imagenes/salchichaPalta.jpg" },
]

fetch('./notas2.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        renderServicios(data)
    })



//ASYNC AWAIT
// async function fetchAPI() {
//     const response = await fetch('./data/datos.json');
//     const datos = await response.json();

//     console.log(datos);
//     renderServicios(datos);
// }

// fetchAPI()

//-------------------------------FIN CLASE APIS Y FETCH--------------------------------------------------------------------------------------------------------->




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
    const usuarioBusqueda = document.querySelector("#barraBusqueda").value.toLowerCase();
    ProductoEncontradoArtista = EncontrarArtista(almacen2, usuarioBusqueda);
    console.log(ProductoEncontradoArtista);
    ProductoEncontradoPrecio = filtrarPorPrecio(almacen2, usuarioBusqueda);
    console.log(ProductoEncontradoPrecio);
    cargarAlCarrito(carrito, ProductoEncontradoArtista);
    cargarAlCarrito(carrito, ProductoEncontradoPrecio);
    notificaBusqueda();
    e.preventDefault();
})

function notificaBusqueda() {
    //    var avisoMail = localStorage.getItem('mail del formulario');
    const usuarioBusqueda = document.querySelector("#barraBusqueda").value;
    ProductoEncontradoArtista = EncontrarArtista(almacen2, usuarioBusqueda);
    ProductoEncontradoPrecio = filtrarPorPrecio(almacen2, usuarioBusqueda);
    var ProductoEncontradoArtista = JSON.parse(localStorage.getItem('usuario'));
    // console.log(avisoMail);
    const notificaBusqueda = document.createElement('div');
    notificaBusqueda.innerHTML = "<h4>Tu búsqueda fue realizada con éxito!</h4>";
    const notificaBusqueda2 = document.createElement('p');
    //    notifica2.innerHTML = ` Recibirás novedades en el correo: ${avisoMail}`;
    notificaBusqueda2.innerHTML = ` El resultado de tu búsqueda es: ${ProductoEncontradoArtista}`;
    // contenedorBtnFormulario.appendChild(notifica);
    // contenedorBtnFormulario.appendChild(notifica2);
    RefProductos.appendChild(notificaBusqueda);
    RefProductos.appendChild(notificaBusqueda2);
}
//FIN ---------------------------------------------------------------------------------------------------------------------->

// ALMACENES---------------------------------------------------------------------------------------------------------------->

const almacen = [producto1, producto2, producto3];





