
//Ternario - Semaforo cruzar o no.
    function cruce() {
        let semaforo = false;
        let señal="";
        semaforo == true ? señal="Puede cruzar :)" : señal="¡No cruce!";
        return señal;
    }
    cruce();
    console.log(cruce());


//Ternario - Mayor de edad.
    function mayorEdad(){
        let edad = 30;
        let adulto = "";
        edad >= 21 ? adulto= "Es adulto." : adulto = "Es menor de edad.";
        return adulto;
    }
    mayorEdad();
    console.log(mayorEdad());


// Control de flujo - 1
    function esPar(num){   
        return num%2 == 0;
    }
    esPar();
    console.log(esPar(5));


// Control de flujo - 2
    function puedePasar(){
        let abono = true;
        let levantarBarrera = "";
        if (abono == true) {
            levantarBarrera = "Puede levantar la barrera."
        } else {
            levantarBarrera = "¡No levantar la barrera!"
        }
        return levantarBarrera;
    }
    puedePasar();
    console.log(puedePasar());


// Control de flujo - 3
function esIgual(num){
    let numAleatorio = Math.floor(Math.random()*10);
    return num == numAleatorio;
}
esIgual();
console.log(esIgual(1));


//Control de flujo - 4
function esNavidad(fecha){
    let navidad = "25 de Diciembre";
    return fecha === navidad;
    
}
esNavidad();
console.log(esNavidad("25 de Diciembre"));


//Control de flujo - 5
let mes = 2;
function diasDelMes(){
    switch (mes) {
        case 11:
        case 4:
        case 6:
        case 9: 
        console.log("Este mes tiene 30 días.");
        break;
        case 2:
        console.log("Este mes tiene 28 días, y en año bisiesto tiene 29.");
        break;
        default:
        console.log("Este mes tiene 31 días.");
   }
}
diasDelMes();


//Control de flujo - 6
function avanceAlumno(){
    let nota = 7;
    let estadoAlumno = "";
    if (nota < 4){
        estadoAlumno = "Recursa"
    }else if (nota < 7 && nota > 4){
        estadoAlumno = "Recupera"
    }else {
        estadoAlumno = "Aprobado"
    }
    return estadoAlumno;

}
avanceAlumno();
console.log(avanceAlumno());


//Control de flujo - 7
function abrirParacaidas (){
    let puerta = "";
    let alturaMin = 2500;
    let alturaMax = 2000;
    let velocidadMAx = 900;
    if (alturaMin >= 2000 && alturaMin < 3000 && alturaMax < 3000 && velocidadMAx < 1000){
        puerta = "Se puede Abrir la puerta."
    }else {
        puerta = "No abra la puerta todavía!!"
    }
    return puerta;
}
abrirParacaidas();
console.log(abrirParacaidas());


//Control de flujo - 8
function precioSandwich(tomate, papas, huevo){
    let base = 150;
    let total;

    if (tomate == true && papas == true && huevo == true){
        total = base + 20 + 50 + 60;
    }else if (tomate == true && papas == true && huevo == false){
         total = base + 20 + 50;      
    }else if (tomate == true && papas == false && huevo == true){
        total = base + 20 + 60; 
    }else if (tomate == false && papas == true && huevo == true){
        total = base + 50 + 60
    }else if (tomate == false && papas == false && huevo == false){
        total = base;
    }else if (tomate == false && papas == false && huevo == true){
        total = base + 60;
    }else if (tomate == false && papas == true && huevo == false){
        total = base + 50;
    }else if (tomate == true && papas == false && huevo == false){
        total = base + 20;
}
    return "El total es de $" + total;
}
precioSandwich();
console.log(precioSandwich(true, true, true));

//Versión hecha por el profe
function precio(tom, pap, hue){
    const base = 150;
    const tomate = 20;
    const papa = 50;
    const huevo = 60;
    let precioFinal = base;
    if (tom === true) {
        precioFinal = precioFinal + tomate;
   } if (pap === true) {
    precioFinal = precioFinal + papa;
    }if (hue === true) {
    precioFinal = precioFinal + huevo;
}
    return precioFinal;
}
    console.log(precio(true, false, true));


// Consigna switch
function estacion(mes){
switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("VERANO");
    break;
    case 3:
    case 4:
    case 5:
        console.log("OTOÑO");
    break;
    case 6:
    case 7:
    case 8:
        console.log("INVIERNO");
    break;
    case 9:
    case 10:
    case 11:
        console.log("PRIMAVERA");
    break;
    default:
        console.log("Error de datos. Verifique.");
}
}
estacion(2);

//Versión ingresando String
function estacionNombre(mesNombre){
    switch (mesNombre) {
        case "Diciembre":
        case "Enero":
        case "Febrero":
            console.log("VERANO");
        break;
        case "Marzo":
        case "Abril":
        case "Mayo":
            console.log("OTOÑO");
        break;
        case "Junio":
        case "Julio":
        case "Agosto":
            console.log("INVIERNO");
        break;
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
            console.log("PRIMAVERA");
        break;
        default:
            console.log("Error de datos. Verifique.");
    }
    }
    estacionNombre("Octubre");