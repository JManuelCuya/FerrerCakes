class Producto {
    constructor(codigo, nombre, presentacion, precio, imagen) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.presentacion = presentacion;
        this.precio = precio;
        this.imagen = imagen;
    }
}
const producto1 = new Producto(1, "Torta de cafe", "12 porciones, keke, Cafe", 72.00, "../images/productos/torta-cafe.jpg");
const producto2 = new Producto(2, "Torta de chocolate", "12 porciones", 85.00, "../images/productos/torta-chocolate.jpg");
const producto3 = new Producto(3, "Torta Feliz", "12 porciones", 83.00, "../images/productos/torta-feliz-feliz.jpg");
const producto4 = new Producto(4, "Torta de Maracuya", "12 porciones", 85.00, "../images/productos/torta-maracuya-choco.jpg");
const producto5 = new Producto(5, "Torta ChocoCripi", "12 porciones", 85.00, "../images/productos/torta-marmol.jpg");
const producto6 = new Producto(6, "Torta Helado", "12 porciones", 90.00, "../images/productos/torta-pedazo-choco.jpg");
const producto7 = new Producto(7, "Torta de Fresa", "12 porciones", 90.00, "../images/productos/torta-rose.jpg");
const producto8 = new Producto(8, "Torta tres leches", "12 porciones", 85.00, "../images/productos/torta-tres-leches.jpg");
const producto9 = new Producto(9, "Torta Fresa y Crema", "12 porciones", 85.00, "../images/productos/torta-bicolor.jpg");
const producto10 = new Producto(10, "Torta Mil Rosas", "12 porciones", 72.00, "../images/productos/torta-dama.jpg");

let producto = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10]
let divProducto = document.getElementById('divProducto')

producto.forEach(productoEnArray => {
        divProducto.innerHTML += `
        <div id="producto${productoEnArray.codigo}">
            <img  src=${productoEnArray.imagen} alt = "${productoEnArray.nombre}" >  
            <p>${productoEnArray.presentacion}</p>
            <p>${productoEnArray.nombre}</p>
            <p>S/.${productoEnArray.precio}</p>
            <button class="btn btn-success" id="botonComprar">
                <a href="#">
                    <i class="fa-solid fa-cart-plus">
                    </i>
                </a>
            </button>  
            <button class="btn btn-success">Ver</button>      
        </div>   
 `
    })
    /*botonClientes.addEventListener('click', () => {
    let arrayStorage = JSON.parse(localStorage.getItem('Clientes'))
    divClientes.innerHTML = ""
    arrayStorage.forEach((ClienteEnArray, indice) => {
        divClientes.innerHTML += `
            <div class="card" id="cliente${indice}" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Cliente N°: ${indice + 1}</h5>
                    <p class="card-text">Nombre: ${ClienteEnArray.nombre}</p>
                    <p class="card-text">Apellido: ${ClienteEnArray.apellido}</p>
                    <p class="card-text">Telefono : ${ClienteEnArray.telefono}</p>
                    <p class="card-text">Email : ${ClienteEnArray.email}</p>
                  
                </div>
            </div> 
        `
    })
})*/