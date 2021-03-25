//Ejercicio del parque de diversiones - Condicionales

//let altura = 140;
const alturaMin = 120;
const alturaMax = 200;
//let acompañado = true;

function puedeSubir(altura, acompañado) { 
    if (altura > alturaMax || altura < alturaMin){
        return false;
    } else if (altura >= 140) {
        return true;
    } else if (acompañado) {
        return true;
    } else {
        return false;
    }

    
    }


//puedeSubir();
console.log(puedeSubir(127,true));
