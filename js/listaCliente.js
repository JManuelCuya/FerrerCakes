const Cliente1 = {
    nC: "Jose",
    aC: "Urbina",
    tC: "925654587",
    eC: "Jose@email",

}

const Cliente2 = {
    nC: "Marcos",
    aC: "Yaker",
    tC: "925654587",
    eC: "maryk@email"
}

const Cliente3 = {
    nC: "Fabrizio",
    aC: "Ra",
    tC: "925654587",
    eC: "fabr@email"
}

const Cliente4 = {
    nC: "Sergio",
    aC: "Ascensio",
    tC: "925654587",
    eC: "serge@email"
}

function dcObj({ nC: nombre, aC: apellido, tC: telefono, eC: email }) {

    console.log(`${nombre}, ${apellido}, ${telefono}, ${email}`)
}
let arrayPersonas = [Cliente1, Cliente2, Cliente3, Cliente4]
console.log(...arrayPersonas)