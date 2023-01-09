// -------------------------------------------------ESTRUCTURA FUNCIÓN CONSTRUCTORA, CARRITO Y ALMACENES---------------------------------------------->

//NOTIFICACIONES
// const notificaciones = document.querySelector('#notificaciones');

// notificaciones.addEventListener('click', () => {
//     Notification
//         .requestPermission()
//         .then(resultado => {
//             console.log('el resultado es', resultado);
//         })
// });

// FUNCIÓN CONSTRUCTORA

function Producto(id, tipo, titulo, autor, color, precio, cantidad, imagen) {
    this.id = id;
    this.tipo = tipo;
    this.titulo = titulo;
    this.autor = autor;
    this.color = color;
    this.precio = precio;
    this.cantidad = cantidad;
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

const producto1 = new Producto(1, "Marca Digital", "Softer", "pablo fernández", "Violeta-Azul", 9000, 1, "./imagenes/imagenVioleta.jpg");
const producto2 = new Producto(2, "Ilustración 3D", "Tomato Soup", "pablo footit", "Naranja-Verde", 3200, 1, "./imagenes/imagenTomato2.jpg");
const producto3 = new Producto(3, "Ilustración", "Ghost Pals", "aleisha samek", "Marrón-Blanco", 2700, 1, "./imagenes/imagenFantasma.jpg");
const producto4 = new Producto(4, "Diseño", "Hocus Pocus", "zach hannibal", "Rosado-Gris", 3800, 1, "./imagenes/imagenSalem.jpg");
const producto5 = new Producto(5, "Marca", "Sensitive Tiger", "sofia herrera", "Naranja-Celeste", 4800, 1, "./imagenes/imagenTigre.jpg");
const producto6 = new Producto(6, "Bordado digital", "Duck Duck Pal", "emanuel pécora", "Verde-Amarillo", 2900, 1, "./imagenes/imagenPato.jpg");
const producto7 = new Producto(7, "Collage", "Astrology", "camila fernández", "Rosado-Verde", 6500, 1, "./imagenes/imagenAstrologia.jpg");
const producto8 = new Producto(8, "Clipping", "Best Clippings", "cami ferreira", "Rojo-Negro", 2500, 1, "./imagenes/imagenClipings.jpg");
const producto9 = new Producto(9, "Marca", "Hype!", "manu contreras", "Flúor-Verde", 7100, 1, "./imagenes/imagenHype.jpg");
const producto10 = new Producto(10, "Ilustración", "Space Travel", "josé hidalgo", "Violeta-Negro", 9400, 1, "./imagenes/imagenNave.jpg");
const producto11 = new Producto(11, "Marca", "Doberman Power", "ezequiel quinteros", "Negro-Marrón", 6500, 1, "./imagenes/imagenDog.jpg");
const producto12 = new Producto(12, "Ilustración", "Kill Bill Sessions", "gonzalo morresi", "Rojo-Amarillo", 8400, 1, "./imagenes/imagenKB.jpg");


const almacen2 = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12];

const almacenCompra = [producto1, producto2, producto3]

const productosEncontrados = []

const contenedorProductos = document.getElementById('contenedorProductos');

almacen2.forEach((producto) => {
    const divProducto = document.createElement('div');
    divProducto.classList.add('card', 'col-xl-3', 'col-md-6', 'col-sm-12');
    divProducto.innerHTML = `
                          <div>
                              <img src=${producto.imagen} class="card-img-top img-fluid py-3">
                              <div class="card-body">
                                  <h3 class="card-title"> ${producto.titulo} </h3>
                                  <p class="autorS">${producto.autor}</p>
                                  <p class="descripcionT">Some quick example text to build on the card title and make up the
                                  bulk
                                  of the card's content.</p>
                                  <p class="card-text"> ${producto.precio} </p>
                                  <button id="boton${producto.id}" class="btn btn-primary"> Agregar al Carrito </button>
                              </div>
                          </div>`;
    contenedorProductos.appendChild(divProducto);
    //Agregar un evento al boton de agregar al carrito:
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
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
        agregarAlCarrito(producto.id);
    });
});



const agregarAlCarrito = (id) => {
    const producto = almacen2.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push(producto);
    }
    actualizarCarrito();
};

//Muestro el carrito de compras modificando el DOM.

const contenedorCarrito2 = document.getElementById('contenedorCarrito2');
const verCarrito = document.getElementById('verCarrito2');

verCarrito.addEventListener('click', actualizarCarrito);

function actualizarCarrito() {
    let aux = '';
    carrito.forEach((producto) => {
        aux += `
        <div class="card col-xl-3 col-md-6 col-sm-12">
        <img src=${producto.imagen} class="card-img-top img-fluid py-3">
        <div class="card-body">
            <h3 class="card-title"> ${producto.titulo} </h3>
            <p class="autorS">${producto.autor}</p>
            <p class="descripcionT">Some quick example text to build on the card title and make up the
            bulk
            of the card's content.</p>
            <p class="card-text"> ${producto.precio} </p>
            <button onClick = "eliminarDelCarrito(${producto.id})" class="btn btn-primary"> Eliminar del Carrito </button>
        </div>
    </div>
              `;

    });
    contenedorCarrito2.innerHTML = aux;
    calcularTotalCompra();
}

//Agrego una función que elimina el producto del carrito:

const eliminarDelCarrito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    carrito.splice(carrito.indexOf(producto), 1);
    actualizarCarrito();
};
//Agrego una función que elimina el producto de búsquedas: (TERMINAR ESTE PROCESO!! LO SACA DE BÚSQUEDAS PERO NO SE VISUALIZA!  )
const eliminarDelBusquedas = (id) => {
    const producto = productosEncontrados.find((producto) => producto.id === id);
    productosEncontrados.splice(carrito.indexOf(producto), 1);
};
///Función para vaciar todo el carrito por completo:

const vaciarCarrito2 = document.getElementById('vaciarCarrito2');
vaciarCarrito2.addEventListener('click', () => {
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
            carrito.splice(0, carrito.length);
            actualizarCarrito()
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
    actualizarCarrito();
});

//Creo una función que me calcule el total del carrito:

const totalCompra = document.getElementById('totalCompra');

const calcularTotalCompra = () => {
    let total = 0;
    carrito.forEach((producto) => {
        total += producto.precio * producto.cantidad;
    });
    totalCompra.innerHTML = total;
};

//función para mostrar el resultado a pagar del carrito:
const mostrarTotalCompra = () => {
    let total = 0;
    carrito.forEach((producto) => {
        total += producto.precio * producto.cantidad;
    });
    mostrarTotal = total;
};

function eliminarTotalCompra() {
    contenedorTarjeta.removeChild(contenedorTarjeta.lastElementChild);
}


const contenedorTarjeta = document.getElementById("contenedorTarjeta");


function notificaTotalCompra() {
    const notificaTotal = document.createElement('p');
    notificaTotal.innerHTML = ` El monto final es de ${mostrarTotal}`;
    contenedorTarjeta.appendChild(notificaTotal);

}


//Botón continuar -------------------------------------------->

const continuar = document.getElementById('continuar');

continuar.addEventListener('click', () => {
    location.href = "#pagarBtn";

    setTimeout(() => {
        Swal.fire({
            title: 'Desea completar la compra?',
            text: "A continuación se le solicitarán sus datos",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Continuar con el pago',
            cancelButtonText: 'Quiero seguir viendo productos'
        }).then((result) => {
            if (result.isConfirmed) {
                //botonCerrar.click()
                Toastify({
                    text: 'Excelente!',
                    position: 'left',
                    gravity: 'bottom',
                    duration: 5000,
                    style: {
                        background: "linear-gradient(to right, #5da2f1, #221fe4)",
                    }
                }).showToast()
                setTimeout(() => {
                    mostrarTotalCompra();
                    notificaTotalCompra();
                }, 1500)
            }
        })
    }, 1200)


});

//Botón pagar  -------------------------------------------->

const pagarBtn = document.getElementById('pagarBtn');




pagarBtn.addEventListener('click', () => {
    Swal.fire({
        title: 'Listo!',
        text: "La operación fue realizada con éxito",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
    }).then((result) => {
        if (result.isConfirmed) {
            console.log(carrito);
            vaciarBusquedas();
            carrito.splice(0, carrito.length);
            console.log(carrito);
            //botonCerrar.click()
            Toastify({
                text: 'Gracias por elegirnos!',
                position: 'left',
                gravity: 'bottom',
                duration: 5000,
                style: {
                    background: "linear-gradient(to right, #5da2f1, #221fe4)",
                }
            }).showToast()
            eliminarTotalCompra()
        }
    })
})


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
