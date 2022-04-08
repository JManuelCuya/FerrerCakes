let divProductos = document.getElementById('divProducto')

async function cargarProductos() {
    let promesa = await fetch('../js/productos.json')
    let productosJSON = await promesa.json()
    return productosJSON
}

cargarProductos().then(data => {
    data.forEach((producto, indice) => {
        divProducto.innerHTML += `
        <div id="producto${indice}">
        <img src="../images/${producto.img}" alt="..."> 
          <p>${producto.nombre}</p>
          <p>${producto.presentacion}</p>
          <p>S/.${producto.precio}</p>
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
})