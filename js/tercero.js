// -------------------------------------------------INTERACCIÓN CON USUARIO (MEDIANTE WHILE, SWITCH, IF ELSE)--------------------------------------->

/*

let PRODUCTO = prompt(
    NombreUsuario +
    " " +
    "Qué producto desea agregar al carrito?: \nProducto1 - Softer \nProducto2 - Tomato Soup \nProducto3 - Ghost Pals"
);
while (PRODUCTO != "ESC") {
    switch (PRODUCTO) {
        case "Producto1":
            let Precio1 = producto1.precio;
            alert(
                "Esa Ilustración tiene un costo de " + " " + Precio1 + " " + "Pesos."
            );
            carrito.push(producto1);
            console.log(carrito);
            console.log(producto1.avisoEdicion());
            almacen.shift();
            console.log(almacen);
            let Provincia1 = prompt("¿Desde qué provincia realiza la compra?");
            if (Provincia1 === "Mendoza" || Provincia1 === "Córdoba") {
                alert("Usted tiene un descuento del 20%!");
                let Edad1 = parseInt(prompt("qué edad tiene?"));
                if (Edad1 > 65) {
                    alert("Usted tiene además otro descuento por su edad del 10%!");
                    alert("Deberá abonar: " + Precio1 + " - el 30%");
                    monto = producto1.restarDescuento30();
                    alert(
                        "El precio a pagar es de: " +
                        monto +
                        " " +
                        "Pesos. " +
                        "Muchas gracias!"
                    );
                    PRODUCTO = "ESC";
                    break;
                } else {
                    alert("Usted no tiene otro descuento");
                    alert("Deberá abonar: " + Precio1 + " - el 20%");
                    monto = producto1.restarDescuento20();
                    alert(
                        "El precio a pagar es de: " +
                        monto +
                        " " +
                        "Pesos. " +
                        "Muchas gracias!"
                    );
                    PRODUCTO = "ESC";
                    break;
                }
            } else {
                alert("Esa provincia no tiene descuento");
                let Edad1 = parseInt(prompt("¿Qué edad tiene?"));
                if (Edad1 > 65) {
                    alert("Aún así usted tiene un descuento por su edad del 10%!");
                    alert("Deberá abonar: " + Precio1 + " - el 10%");
                    monto = producto1.restarDescuento10();
                    alert(
                        "El precio a pagar es de: " +
                        monto +
                        " " +
                        "Pesos. " +
                        "Muchas gracias!"
                    );
                    PRODUCTO = "ESC";
                    break;
                } else {
                    alert("Usted no tiene ningún descuento");
                    monto = producto1.precio;
                    alert("Deberá abonar:" + monto + " " + "Pesos. " + "Muchas gracias!");
                    PRODUCTO = "ESC";
                    break;
                }
            }
        case "Producto2":
            let Precio2 = producto2.precio;
            alert(
                "Esa Ilustración tiene un costo de " + " " + Precio2 + " " + "Pesos."
            );
            carrito.push(producto2);
            console.log(carrito);
            console.log(producto2.avisoEdicion());
            almacen.splice(1, 1);
            console.log(almacen);
            let Provincia2 = prompt("¿Desde qué provincia realiza la compra?");
            if (Provincia2 === "Mendoza" || Provincia2 === "Córdoba") {
                alert("Usted tiene un descuento del 20%!");
                let Edad2 = parseInt(prompt("qué edad tiene?"));
                if (Edad2 > 65) {
                    alert("Usted tiene además otro descuento por su edad del 10%!");
                    alert("Deberá abonar: " + Precio2 + " - el 30%");
                    monto = producto2.restarDescuento30();
                    alert(
                        "El precio a pagar es de: " +
                        monto +
                        " " +
                        "Pesos. " +
                        "Muchas gracias!"
                    );
                    PRODUCTO = "ESC";
                    break;
                } else {
                    alert("Usted no tiene otro descuento");
                    alert("Deberá abonar: " + Precio2 + " - el 20%");
                    monto = producto2.restarDescuento20();
                    alert(
                        "El precio a pagar es de: " +
                        monto +
                        " " +
                        "Pesos. " +
                        "Muchas gracias!"
                    );
                    PRODUCTO = "ESC";
                    break;
                }
            } else {
                alert("Esa provincia no tiene descuento");
                let Edad2 = parseInt(prompt("¿Qué edad tiene?"));
                if (Edad2 > 65) {
                    alert("Aún así usted tiene un descuento por su edad del 10%!");
                    alert("Deberá abonar: " + Precio2 + " - el 10%");
                    monto = producto2.restarDescuento10();
                    alert(
                        "El precio a pagar es de: " +
                        monto +
                        " " +
                        "Pesos. " +
                        "Muchas gracias!"
                    );
                    PRODUCTO = "ESC";
                    break;
                } else {
                    alert("Usted no tiene ningún descuento");
                    alert(
                        "Deberá abonar:" + Precio2 + " " + "Pesos. " + "Muchas gracias!"
                    );
                    PRODUCTO = "ESC";
                    break;
                }
            }
        case "Producto3":
            let Precio3 = producto3.precio;
            alert(
                "Esa Ilustración tiene un costo de " + " " + Precio3 + " " + "Pesos."
            );
            carrito.push(producto3);
            console.log(carrito);
            console.log(producto3.avisoEdicion());
            almacen.pop();
            console.log(almacen);
            let Provincia3 = prompt("¿Desde qué provincia realiza la compra?");
            if (Provincia3 === "Mendoza" || Provincia3 === "Córdoba") {
                alert("Usted tiene un descuento del 20%!");
                let Edad3 = parseInt(prompt("¿Qué edad tiene?"));
                if (Edad3 > 65) {
                    alert("Usted tiene además otro descuento por su edad del 10%!");
                    alert("Deberá abonar: " + Precio3 + " - el 30%");
                    monto = producto3.restarDescuento30();
                    alert(
                        "El precio a pagar es de: " +
                        monto +
                        " " +
                        "Pesos. " +
                        "Muchas gracias!"
                    );
                    PRODUCTO = "ESC";
                    break;
                } else {
                    alert("Usted no tiene otro descuento");
                    alert("Deberá abonar: " + Precio3 + " - el 20%");
                    monto = producto3.restarDescuento20();
                    alert(
                        "El precio a pagar es de: " +
                        monto +
                        " " +
                        "Pesos. " +
                        "Muchas gracias!"
                    );
                    PRODUCTO = "ESC";
                    break;
                }
            } else {
                alert("Esa provincia no tiene descuento");
                let Edad3 = parseInt(prompt("qué edad tiene?"));
                if (Edad3 > 65) {
                    alert("Aún así usted tiene un descuento por su edad del 10%!");
                    alert("Deberá abonar: " + Precio3 + " - el 10%");
                    monto = producto3.restarDescuento10();
                    alert(
                        "El precio a pagar es de: " +
                        monto +
                        " " +
                        "Pesos. " +
                        "Muchas gracias!"
                    );
                    PRODUCTO = "ESC";
                    break;
                } else {
                    alert("Usted no tiene ningún descuento");
                    alert(
                        "Deberá abonar:" +
                        " " +
                        Precio3 +
                        " " +
                        "Pesos. " +
                        "Muchas gracias!"
                    );
                    PRODUCTO = "ESC";
                    break;
                }
            }
        default:
            alert("Esa Ilustración no se encuentra disponible.");
            PRODUCTO = "ESC";
            break;
    }
}
let continuar = prompt("Desea continuar agregando productos?");
if (continuar == "si" || continuar == "Si") {
    alert("Excelente, recuerde que puede realizar búsquedas por artista");
    alert(
        "Tal vez le interesen las siguientes obras que mostramos en la consola del artista: " +
        busqueda
    );
    console.log(filtroxAutor);

    let continuar2 = prompt("¿Desea realizar una nueva búsqueda?");
    if (continuar2 == "si" || continuar == "Si") {
        filtro = prompt("Ingrese el nombre del artista: ");
        alert("En la consola encontrará los productos del artista ingresado");
        const ArtistaEncontrado = EncontrarArtista(almacen2, filtro);
        console.log(ArtistaEncontrado);
    } else {
        alert("Gracias por elegirnos");
    }
} else {
    alert("Gracias por elegirnos");
}
alert("¡Atención!Por una subida del dólar se reactualizarán los precios del almacén2.");
console.log(almacenInflacion);


*/