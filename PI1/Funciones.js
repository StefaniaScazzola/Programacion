//Función expresada
let sumar = function (numeroA, numeroB){
    return numeroA + numeroB;
}
console.log(sumar(9, 7));

//Función declarada
let restar = function(numeroC, numeroD){
    return numeroC - numeroD;
}
console.log(restar(15, 5));

//Ejemplo de SCOPE

let mensaje = "Hola";

function saludar (){
    let mensaje = "Chau"
    return mensaje;
}
console.log(mensaje);
console.log(saludar());

//función cortita - Ejercicio 1
function ejemplo2 (){  
    return "Hola, soy una función";
}
ejemplo2();
console.log(ejemplo2());

function ejemplo (){  //función con variable
    let saludo = "Hola, soy una función";
    return saludo;
}
console.log(ejemplo());


let ejemplo3 = function saludo (){
    return "Hola, soy una función expresada";
}
console.log(ejemplo3());

//Ejercicio 3 PG
function saludar(nombre, apellido) {   
    return 'Hola, ' + nombre + ' ' + apellido + '!';
}
console.log(saludar ("Stefania","Scazzola"));

//Ejercicio 4 PG
function esPar(n){   
    return n%2 == 0;
}
esPar();
console.log(esPar(6));  


///Ejercicio 5 PG
function anterior(n){   
    return --n;
}
console.log(anterior(9));

function triple(n){
    return n*3;
}
console.log(triple(3));


function anteriorDelTriple (n){
    return n*3-1;

}
triple();
anterior();
anteriorDelTriple(2);
console.log(anteriorDelTriple(2));

