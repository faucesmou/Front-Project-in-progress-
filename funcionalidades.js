//STORAGE & JASON ALMACENAMIENTO DE DATOS BOTÓN DE SUSCRIPCIÓN A NEWSLETTER Y FORMULARIO-------------------------------------->

const suscripcionMail = [];
const camposFormulario = [];
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

//Boton de "SUSCRIBITE A NUESTRO NEWSLETTER"----------------------------------------------->

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

//fin Boton de suscribirse------------------------------------------>


//Botón SWEETALERT-------------------------------------------------->
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

//fin Botón SWEETALERT---------------------------------------------->



//---------------------INICIA FORMULARIO-------------------------------------------------------------->

const botonFormulario = document.getElementById("BotonFormulario");
const contenedorBtnFormulario = document.getElementById("contenedorBtnFormulario");


// FUNCIONES NECESARIAS PARA EL FORMULARIO ---------------------------------->

function notificaEnvioFormulario() {
    var avisoMail = JSON.parse(localStorage.getItem('usuario'));
    console.log(avisoMail);
    const notifica = document.createElement('div');
    notifica.innerHTML = "<h4>Tu información fue enviada con éxito!</h4>";
    const notifica2 = document.createElement('p');
    notifica2.innerHTML = ` Recibirás novedades en el correo: ${avisoMail.mail}`;
    contenedorBtnFormulario.appendChild(notifica);
    contenedorBtnFormulario.appendChild(notifica2);
    setTimeout(() => {
        notifica.remove();
        notifica2.remove();
    }, 2500)
}

// EVENTO FORMULARIO----------------------------------------->

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

// FIN FORMULARIO------------------------------------------------------------------------------->

const wharehouse = [];
let carrito = [];

// FUNCIONES NECESARIAS PARA EL BUSCADOR DEL NAV BAR ------------------------------------>

function cargarAlArray(array, valor) {
    array.push(valor);
}

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

const contenedorResultado = document.getElementById('contenedorResultado');

function mostrarResultadoArtista(titulo, imagen, precio, autor) {
    const resultadoBusqueda = document.createElement('div');
    resultadoBusqueda.classList.add('card', 'col-xl-3', 'col-md-6', 'col-sm-12');
    resultadoBusqueda.innerHTML = `
                          <div>
                              <img src=${imagen} class="card-img-top img-fluid py-3">
                              <div class="card-body">
                                  <h3 class="card-title"> ${titulo} </h3>
                                  <p class="card-text"> ${precio} </p>
                                  <button id="boton${autor}" class="btn btn-primary">Eliminar</button>
                                  <button id="boton${titulo}" class="btn btn-primary">Agregar al Carrito </button>
                              </div>
                          </div>`;
    // const resultadoBusqueda = document.createElement("div");
    // resultadoBusqueda.innerHTML = 
    // `<div class = " card col-xl-3 col-md-6 col-sm-12">
    //         <img class="card-img-top" src=${imagen} class="card-img-top img-fluid py-3">
    //         <div class="card-body">
    //             <h3 class="card-title">${titulo}</h3>
    //             <p class="card-text">Some quick example text to build on the card title and make up the
    //                 bulk of the card's content.</p>
    //                 <p class="autorHocus">${autor}</p>
    //                 <p>Valor: ${precio}</p>
    //             <button id="btnComprar" class="btn btn-primary wf-btn-black">agregar al carrito
    //         </button>
    //         </div>
    // </div>`;
    contenedorResultado.appendChild(resultadoBusqueda);
        //Agregar un evento al boton de agregar al carrito:
        const boton = document.getElementById(`boton${titulo}`);
        boton.addEventListener('click', () => {
            Toastify({
                text: "Agregado al carrito perro",
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
            agregarAlCarrito(carrito, ProductoEncontradoArtista);
            console.log(carrito);
        });

}

// no alcancé a desarrollar esta funcionalidad

// function cargarAlCarro(ProductoEncontradoArtista, carrito) {
//     console.log(ProductoEncontradoArtista);
//     carrito.push(productoAgregado);
//     console.log(carrito);
// }



// EVENTO PARA EL BUSCADOR DEL NAV BAR ------------------------------------>

const botonBuscar = document.getElementById("botonBuscar")

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
                const traidoConFetch = wharehouse[0];
                ProductoEncontradoArtista = traidoConFetch.filter((producto) => {
                    return producto.autor.includes(usuarioBusqueda);
                })
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
})


//funciones para boton "COMPRAR" de tarjetas: guarda en carrito y la muestra----->

function agregarCarrito() {
    var productoAgregado = JSON.parse(localStorage.getItem('ProductoAgregado'));
    cargarAlCarrito(carrito, productoAgregado);
}

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

const tbody = document.querySelector(".tbody");



//Evento para botón "VER CARRITO" tarjetas en carrito y mostrarlas ----->

const botonCarrito = document.getElementById("botonCarrito");
botonCarrito.addEventListener('click', () => {
    carritoHTML()
});

//funciones para vaciar resultados de búsqueda y vaciar carrito ----->

function actualizarCarrito() {
    let aux = ''
    tbody.innerHTML = aux;
    //calcularTotalCompra();
}

function vaciarBusquedas() {
    let aux = ''
    contenedorResultado.innerHTML = aux;
}

// Eventos para vaciar resultados de búsqueda y vaciar carrito ----->

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


// INICIO LIBRERÍA CLEAVE.JS PARA LA TARJETA DE CRÉDITO--------------------------------------------------------->

var cleave = new Cleave('#fechaNumber', {
    date: true,
    datePattern: ['m', 'y']
});

var cleave = new Cleave("#cardNumber", {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand'
});

const formNumber = document.getElementsByClassName(".formNumber");

var cleave = new Cleave('#cardNumber', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        console.log(type);
    }
});

