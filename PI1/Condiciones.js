//Prueba GIT
congole.log(2);

//Primer ejercicio
let dato = false;
let mensaje1 = "";

if (dato == true){
    mensaje1 = "Es true";
    
} else {
    mensaje1 = "Es false"
}
console.log(mensaje1);

//Ejercicio 2
let lenguaje = "javascript";
let mensaje2 = "";

if (lenguaje === "javascript"){
    mensaje2 = "Estoy aprendiendo";
}
else {
    mensaje2 = "Lo aprenderé más adelante";
}
console.log(mensaje2);

//Ejercicio 3
function puedePasar(nombre) {
    let nombre1 = "";
    let acceso = ""; 
    if (nombre === "Cosme Fulanito"){
        acceso = false;
    } else {
        acceso = true;
    }
    return acceso;
}
puedePasar();
console.log(puedePasar("Cosme Fulanito"));

//GENERAR NUMEROS ALEATORIOS ENTEROS ENTRE 1 Y 10
let numAleatorio = Math.floor(Math.random()*10);
console.log(numAleatorio);