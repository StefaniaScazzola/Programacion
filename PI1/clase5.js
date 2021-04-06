
//Ejercicio 1

let valores = [1,2,3,4];

let invertido = function (array) {
    array1 = []
    array1.push(array.pop());
    array1.push(array.pop());
    array1.push(array.pop());
    array1.push(array.pop());
    return array1;
}

console.log(invertido(valores));


//Ejercicio 2

let enteros = [3,4,7,9];
let pares = function (array) {
   sonPares = [];
    if (enteros[0]%2 === 0) {
        sonPares.push(array[0]);
     }
     if (enteros[1]%2 === 0) {
        sonPares.push(array[1]);
     }
     if (enteros[2]%2 === 0) {
        sonPares.push(array[2]);
     }
     if (enteros[3]%2 === 0) {
        sonPares.push(array[3]);
     }
     return sonPares;
}
console.log(pares(enteros));


//Ejercicio 3

let numeros = [1,2,3,4]
let resultado;
let tipoDatos = function (datoString, array3) {
if (typeof datoString === "string" && typeof array3 === "number"){
   resultado = true
}
else {resultado = false;
}
return resultado;
    
}
console.log(tipoDatos("hola", "hola"));


//Ejercicio 4
let numEnteros = [3,6,9,3];
let resultadoSuma;
let sumaEnteros = function (array4){
   sumaAcum = [resultadoSuma];
   if ("number" === typeof array4[0] && "number" === typeof array4[1] && "number" === typeof array4[2] && "number" === typeof array4[3]) {
      sumaAcum = [array4[0] + array4[1] + array4[2] +array4[3]]
   } else {
      console.log ("Error: array corrupto")
   }
   return sumaAcum;
}
console.log(sumaEnteros(numEnteros));


//Ejercicio 5  // No me termina de salir.. no comprendo bien como poner también la condición de que se desordene si es par :(
  
let elementos = [2,4,5,8];
let esPar;
let combinar = function (array5){
   devuelve=[];
   if (elementos[0]%2 === 0) {
      devuelve.push(array5[0] && devuelve.push(array5.pop()))
   } 
   if (elementos[1]%2 === 0) {
      devuelve.push(array5[1] && devuelve.push(array5.pop()))
   } 
   if (elementos[2]%2 === 0) {
      devuelve.push(array5[2] && devuelve.push(array5.pop()))
   } 
   if (elementos[3]%2 === 0) {
      devuelve.push(array5[3] && devuelve.push(array5.pop()))
   } 

   return devuelve;
}
console.log(combinar(elementos));
