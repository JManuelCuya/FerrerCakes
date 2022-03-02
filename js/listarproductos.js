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
const producto1 = new Producto("1", "ct001", "Masa Elastica", "J y Y Insumos - Frasco de 1 Kg", 20.00, "Mitos SAC", "../images/productos/masaElastica.jpg");
const producto2 = new Producto("2", "ct002", "Leche entera en caja", "Gloria - Caja 1 LT", 5.00, "Gloria", "../images/productos/leche.jpg");
const producto3 = new Producto("3", "ct003", "Manga Pastelera", "J y Y Insumos - UND", 3.00, "InsumosJC", "../images/productos/manga.jpg");
const producto4 = new Producto("4", "ct004", "Pazas", "J y Y Insumos - Paquete 500mg", 1.00, "San Pedro IRL", "../images/productos/pazas.jpg");
const producto5 = new Producto("5", "ct004", "Pecanas", "J y Y Insumos - Paquete 500mg", 1.00, "San Pedro IRL", "../images/productos/pecanas.jpg");
const producto6 = new Producto("6", "ct002", "Chantilly", "J y Y Insumos - Paquete 250mg", 8.00, "Gloria", "../images/productos/chantilly.jpg");

let producto = [producto1, producto2, producto3, producto4, producto5, producto6]



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