/* Segun la edad introducida te dira si esta en edad de trabajar por consola y formatea en verde si esta en edad rojo si no lo esta */

console.log("INICIO")

let edad = prompt("Introduce la edad: ")

if (edad <= 12) {
    console.log("%cNiño", "color: red; font-weight: bold;");
} else if (edad >= 12 && edad <= 18) {
    console.log("%cAdolescente", "color: red; font-weight: bold;");
} else if (edad >= 18 && edad <= 64) {
    console.log("%cTrabajador", "color: green; font-weight: bold;");
} else if (edad > 64) {
    console.log("%cJubilado", "color: red; font-weight: bold;");
} else {
    console.log("Edad no válida.");
}
