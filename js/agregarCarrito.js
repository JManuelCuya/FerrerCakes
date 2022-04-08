const misDatos = [{
        "codigo": 1,
        "nombre": "Torta Star",
        "presentacion": "15 porciones",
        "precio": 75,
        "img": "../images/productos/torta-cafe.jpg"
    },
    {
        "codigo": 2,
        "nombre": "Torta Star",
        "presentacion": "15 porciones",
        "precio": 75,
        "img": "../images/productos/torta-dama.jpg"
    }
];



let productos = []
if (localStorage.getItem('Productos')) {
    clientes = JSON.parse(localStorage.getItem('Productos'))
} else {

    localStorage.setItem('Productos', JSON.stringify(productos))
}


let formProd = document.getElementById('formProd') //Creando el formulario
let botonComprar = document.getElementById('botonComprar')


formProd.addEventListener('click', (e) => {
    e.preventDefault()
    let codigo = document.getElementById('codigo').value
    let nombre = document.getElementById('nombre').value
    const producto = new misDatos(codigo)
    productos.push(producto)
    localStorage.setItem('Productos', JSON.stringify(productos)) //Modifico la clase Cliente
    formProd.reset()
})

botonComprar.addEventListener('click', () => {
    let arrayStorage = JSON.parse(localStorage.getItem('Productos'))
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
})