class Producto {
    constructor(codigo, categoria, nombre, presentacion, precio, proveedor, imagen) {
        this.codigo = codigo;
        this.categoria = categoria;
        this.nombre = nombre;
        this.presentacion = presentacion;
        this.precio = precio;
        this.proveedor = proveedor;
        this.imagen = imagen;
    }
}
const producto1 = new Producto("1", "ct001", "Torta de cafe", "12 porciones, keke, Cafe", 72.00, "Mitos SAC", "../images/productos/torta-cafe.jpg");
const producto2 = new Producto("2", "ct002", "Torta de chocolate", "12 porciones", 85.00, "Gloria", "../images/productos/torta-chocolate.jpg");
const producto3 = new Producto("3", "ct003", "Torta Feliz Cumpp Pastelera", "12 porciones", 83.00, "InsumosJC", "../images/productos/torta-feliz-feliz.jpg");
const producto4 = new Producto("4", "ct004", "Torta de Maracuya", "12 porciones", 85.00, "San Pedro IRL", "../images/productos/torta-maracuya-choco.jpg");
const producto5 = new Producto("5", "ct004", "Torta ChocoCripi", "12 porciones", 85.00, "San Pedro IRL", "../images/productos/torta-marmol.jpg");
const producto6 = new Producto("6", "ct002", "Torta Helado", "12 porciones", 90.00, "Gloria", "../images/productos/torta-pedazo-choco.jpg");
const producto7 = new Producto("7", "ct002", "Torta de Fresa", "12 porciones", 90.00, "Gloria", "../images/productos/torta-rose.jpg");
const producto8 = new Producto("8", "ct002", "Torta tres leches", "12 porciones", 85.00, "Gloria", "../images/productos/torta-tres-leches.jpg");
const producto9 = new Producto("9", "ct002", "Torta Fresa y Crema", "12 porciones", 85.00, "Gloria", "../images/productos/torta-bicolor.jpg");
const producto10 = new Producto("10", "ct002", "Torta Mil Rosas", "12 porciones", 72.00, "Gloria", "../images/productos/torta-dama.jpg");

let producto = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10]



let divProducto = document.getElementById('divProducto')

producto.forEach(productoEnArray => {
    divProducto.innerHTML += `
        <div id="producto${productoEnArray.codigo}">
            <img  src=${productoEnArray.imagen} alt = "${productoEnArray.nombre}" >  
            <p>${productoEnArray.presentacion}</p>
            <p>${productoEnArray.nombre}</p>
            <p>S/. ${productoEnArray.precio}</p>        
        </div>   
    `
})