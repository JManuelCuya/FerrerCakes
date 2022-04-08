//Clase Cliente 
class Cliente {
    constructor(nombre, apellido, telefono, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
    }
}
/*
const cliente1 = new Cliente("1", "Raul", "Rojas", "985 123 458", "RRojas@gmail.com");
const cliente2 = new Cliente("2", "Jimena", "Yrbina", "987 548 125", "Jimena007@gmail.com");
const cliente3 = new Cliente("3", "Rebeca", "Almeyda", "987 425 478", "RebecaAL@gmail.com");
let cliente = [cliente1, cliente2, cliente3]
for (let clientesArreglo of cliente) {
    console.log(clientesArreglo)
}*/

let clientes = []
if (localStorage.getItem('Clientes')) {
    clientes = JSON.parse(localStorage.getItem('Clientes'))
} else {

    localStorage.setItem('Clientes', JSON.stringify(clientes))
}


let formClientes = document.getElementById('formCli') //Creando el formulario
let botonClientes = document.getElementById('botonClientes')
let divClientes = document.getElementById('divClientes')
let contador = 0;

formClientes.addEventListener('submit', (e) => {
    e.preventDefault()
    let nombre = document.getElementById('idNombre').value
    let apellido = document.getElementById('idApellido').value
    let telefono = document.getElementById('idTelefono').value
    let email = document.getElementById('idEmail').value

    const cliente = new Cliente(nombre, apellido, telefono, email)

    clientes.push(cliente)

    localStorage.setItem('Clientes', JSON.stringify(clientes)) //Modifico la clase Cliente
    contador++;
    formClientes.reset()
})

botonClientes.addEventListener('click', () => {
    let arrayStorage = JSON.parse(localStorage.getItem('Clientes'))
    divClientes.innerHTML = ""
    arrayStorage.forEach((ClienteEnArray, indice) => {
        divClientes.innerHTML += `
        
            <div id="cliente${indice}" style="width: 18rem;">
               
                    <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Cliente N°</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"> ${indice + 1}</td>
                            <td>${ClienteEnArray.nombre}</td>
                            <td>${ClienteEnArray.apellido}</td>
                            <td>${ClienteEnArray.telefono}</td>
                            <td>${ClienteEnArray.email}</td>
                        </tr>         
                    </tbody>
                    </table>
            </div> 
        `
    })
})