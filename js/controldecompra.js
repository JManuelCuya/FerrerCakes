var stop = false,
    age = 23;

age > 18 ? (
    alert("OK, puedes continuar."),
    location.assign("productos.html")
) : (
    stop = true,
    alert("Disculpa, eres menor de edad!")
);