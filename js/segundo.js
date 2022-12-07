
// -------------------------------MÉTODO MAP, ESTRUCTURA INICIAL DE BIENVENIDA, MÉTODO FILTER, FUNCIÓN FIND Y MÉTODO REDUCE--------------------------------------->


//--MAP --------------->

const almacen = [producto1, producto2, producto3];

const almacenInflacion = almacen.map((producto) => {
    return {
        precio: producto.precio + 200
    }
});


// MÉTODO FILTER------------->

// const filtroxAutor = almacen2.filter((almacen2) => {
//     return almacen2.autor.includes(busqueda.toLowerCase())
// });

// FUNCIÓN FIND------------->

function EncontrarArtista(arr, filtro) {
    const encontrado = arr.find((producto) => {
        //return producto.autor == filtro;
        return producto.autor.includes(filtro);
    })
    return encontrado;
}


//MÉTODO REDUCE------------->

const almacen3 = [0, 1, 2, 3, 4, 5]

const valorInicial = 0;
const Sumaalmacen2 = almacen3.reduce(function (valorAnterior, valorActual, indice, vector) {
    return valorAnterior + valorActual;
}, 0);

console.log(Sumaalmacen2);

// const vaciarCarrito = document.getElementById("vaciar-carrito");
// vaciarCarrito.addEventListener('click', () => {
//     Swal.fire({
//         title: 'Está seguro?',
//         text: "Está a punto de vaciar el carrito",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Sí, vaciar',
//         cancelButtonText: 'No, cancelar'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             vaciarCarrito()
//             botonCerrar.click()
//             Toastify({
//                 text: 'Se vació el carrito',
//                 position: 'left',
//                 gravity: 'bottom',
//                 duration: 5000,
//                 style: {
//                     background: "linear-gradient(to right, #f17b5d, #f02f2f)",
//                 }
//             }).showToast()
//         }
//     })
// })