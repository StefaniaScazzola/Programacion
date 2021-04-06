for (let i = 0; i>10; i++){  //si pongo asi que i es mayor a 10, no muestra nada porque por ahora, i no es mayor a 10.
    console.log("El valor de i es igual a " + i);
}

//Ejercicio Pg 1 - Como un loro

function loro(texto){
for (let i=0; i<5; i++){
    console.log(texto);
}
}
console.log(loro("Pepa"));

//Ejercicio PG 2 - No pares de contar impares

function noParesDeContarImparesHasta(numero){
    let contar = 0;
    for (let i=0; i<numero; i++){
        if (i%2 != 0){         
        contar++;
    }
    }
    return contar;
}
noParesDeContarImparesHasta();
console.log(noParesDeContarImparesHasta(6));