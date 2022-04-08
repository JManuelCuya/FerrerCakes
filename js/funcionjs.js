if (document.querySelector('#container-slider')) {
    setInterval('fntExecuteSlide("next")', 5000);
}
//------------------------------ LIST SLIDER -------------------------
if (document.querySelector('.listslider')) {
    let link = document.querySelectorAll(".listslider li a");
    link.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let item = this.getAttribute('itlist');
            let arrItem = item.split("_");
            fntExecuteSlide(arrItem[1]);
            return false;
        });
    });
}

function fntExecuteSlide(side) {
    let parentTarget = document.getElementById('slider');
    let elements = parentTarget.getElementsByTagName('li');

    let curElement, nextElement;

    for (var i = 0; i < elements.length; i++) {

        if (elements[i].style.opacity == 1) {
            curElement = i;
            break;
        }
    }
    if (side == 'prev' || side == 'next') {

        if (side == "prev") {
            nextElement = (curElement == 0) ? elements.length - 1 : curElement - 1;
        } else {
            nextElement = (curElement == elements.length - 1) ? 0 : curElement + 1;
        }
    } else {
        nextElement = side;
        side = (curElement > nextElement) ? 'prev' : 'next';

    }
    //RESALTA LOS PUNTOS
    let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
    elementSel[curElement].classList.remove("item-select-slid");
    elementSel[nextElement].classList.add("item-select-slid");
    elements[curElement].style.opacity = 0;
    elements[curElement].style.zIndex = 0;
    elements[nextElement].style.opacity = 1;
    elements[nextElement].style.zIndex = 1;
}

//FIN DE CARROUSEL
//INICIO DE METDDOS Y CLASES
/*
function CalculoVenta(producto, cantidad) {
    var precio = 0;
    let IGV = 0.18;
    let precioNeto = 0
    if (producto == "torta") {
        precio = cantidad * 50.00
        IGV = precio * IGV;
        precioNeto = precio + IGV;
        console.log("El precio es de : $" + precioNeto)
    } else if (producto == "cupcake") {
        precio = cantidad * 8.00
        IGV = precio * IGV;
        precioNeto = precio + IGV;
        console.log("El precio es de : $" + precioNeto)
    } else if (producto == "postres") {
        precio = cantidad * 30.00
        IGV = precio * IGV;
        precioNeto = precio + IGV;
        console.log("El precio es de : $" + precioNeto)
    } else if (producto == "dulces") {
        precio = cantidad * 15.00
        IGV = precio * IGV;
        precioNeto = precio + IGV;
        console.log("El precio es de : $" + precioNeto)
    } else {
        console.log("Operacion no valida ..")
    }

}

alert("!BIENVENIDO!")
alert("!Ingrese el nombre del producto que necesite!")
let productoVenta = prompt("Ingrese el nombre del producto").toLowerCase()
let cantidad = parseInt((prompt("Ingresa la cantidad")))

CalculoVenta(productoVenta, cantidad)
    //CLASES
class Categoria {
    constructor(codigo, descripcion) {
        this.codigo = codigo;
        this.descripcion = descripcion;
    }

}
const categoria1 = new Categoria("ct001", "Peresibles");
let categoria = [categoria1]


//Agregando nuevo producto
producto.push("prod007", "ct002", "Queso Cream", 8.00, "Gloria");

//buscando un producto por nombre
let BusquedaNM = "Si";
while (BusquedaNM.toUpperCase() == "Si".toUpperCase()) {
    const busqueda = (prompt("Ingrese nombre del producto"));
    console.log(producto.find((nombre) => producto.nombre === busqueda));
    BusquedaNM = (prompt("Desea realizar otra busqueda?"));
}




for (let productosArreglo of producto) {
    console.log(productosArreglo)
}
class Cliente {
    constructor(codigo, nombre, apellido, telefono, email) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
    }
}

const cliente1 = new Cliente("cli001", "Raul", "Rojas", "985 123 458", "RRojas@gmail.com");
const cliente2 = new Cliente("cli002", "Jimena", "Yrbina", "987 548 125", "Jimena007@gmail.com");
const cliente3 = new Cliente("cli003", "Rebeca", "Almeyda", "987 425 478", "RebecaAL@gmail.com");
let cliente = [cliente1, cliente2, cliente3]
for (let clientesArreglo of cliente) {
    console.log(clientesArreglo)
}*/