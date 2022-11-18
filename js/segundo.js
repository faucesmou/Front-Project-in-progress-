
// -------------------------------MÉTODO MAP, ESTRUCTURA INICIAL DE BIENVENIDA, MÉTODO FILTER, FUNCIÓN FIND Y MÉTODO REDUCE--------------------------------------->


//-- MAP ---------->
/*
const almacenInflacion = almacen.map((producto) => {
    return {
        precio: producto.precio + 200
    }
});

*/
/*

// ESTRUCTURA INICIAL DE BIENVENIDA---------->

let NombreUsuario = prompt("Bienvenido a WeFind! Por favor ingresa tu nombre de usuario");
while (NombreUsuario == " " || NombreUsuario == "") {
    alert("no entendimos tu mensaje");
    NombreUsuario = prompt("Por favor ingresa tu nombre de usuario");
}

let busqueda = prompt("Ingrese su artista favorito");

// MÉTODO FILTER------------->

const filtroxAutor = almacen2.filter((almacen2) => {
    return almacen2.autor.includes(busqueda.toLowerCase())
});

// FUNCIÓN FIND------------->

function EncontrarArtista(arr, filtro) {
    const encontrado = arr.find((producto) => {
        //return producto.autor == filtro;
        return producto.autor.includes(filtro);
    })
    return encontrado;
}


// MÉTODO REDUCE ------------->

const almacen3 = [0, 1, 2, 3, 4, 5]

const valorInicial = 0;
const Sumaalmacen2 = almacen3.reduce(function (valorAnterior, valorActual, indice, vector) {
    return valorAnterior + valorActual;
}, 0);

console.log(Sumaalmacen2);

*/