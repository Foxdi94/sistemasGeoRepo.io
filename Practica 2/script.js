
var navegador = document.getElementById("navegador");
var datos = document.getElementsByTagName("li");

function obtieneDatos() {

    datos[0].innerHTML = "El nombre del navegador es: " + navigator.appCodeName;
    datos[1].innerHTML = "La version del navegador es: " + navigator.appVersion;
    datos[2].innerHTML = "El estatus del internet es: " + navigator.onLine;
    datos[3].innerHTML = "La plataforma navegador es: " + navigator.appVersion;
}