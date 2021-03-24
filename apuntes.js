
// --MANERAS DE DECLARAR VARIABLES--
var nombre;
// si se crea 2 variables con el mismo nombre, se reescribe por la que este mas abajo.

let nombre;
// se puede inicializar sin darle valor, y asignarlo luego. No se puede redeclarar una variable

const nombre = `Pedro`; 
// Cuando se inicializa hay que darle un valor si o si. No se puede redeclarar una variable. Es usado mas que nada para seleccionar elementos del HTML. 
ej: const divMensaje = document.getElementById('mensaje');



// --ARREGLOS o ARRAYS--
// Se usa para agrupar datos relacionados o no muy relacionados. Se utilizan corchetes [] y cada elemento es separado por una coma. En la consola se puede visibilizar 2 columnas, los numeros del lado izquierdo se los denomina como indice y es una arreglo numerico comenzando desde 0, indicando las posiciones.
ej1: const numeros = [10, 20, 30, 40, 50];
ej2: const meses = new Array('enero', 'febrero', 'marzo');
// como agregar o quitar elementos a un arreglo (siguiendo con el ej anterior)
ej1: meses [3] = 'Abril'; //agrega en la posicion que indicamos entre corchetes segun indice.
ej2: meses.push('Abril'); //push agrega al FINAL del arreglo
ej3: meses.unshift('Mes 0'); // unshift agrega al PRINCIPIO del arreglo
ej4: meses.pop(); //pop elimina al FINAL del arreglo
ej5: meses.shift(); //shift elmina al PRINCIPIO del arreglo
ej6: meses.splice(0, 1); //para eliminar un rango, el primer numero indica la posicion donde se inicia a eliminar y el segundo numero indica la cantidad de elementos.
     console.log( meses[1] ) // esto imprimiria solo el valor que se encuentra en la posicion 1, segun lo indica el indice.

     meses.reverse(); //invierte el orden de elementos
     meses.sort(); //ordena alfabeticamente
 


// --OBJETOS--
// te permite definir una llave y un valor. A diferencia del arreglo aca se usan llaves/propiedades. Este no contiene indice, sino las llaves (en este caso seria nombre, apellido, etc.) y lo que se encuentra a su derecha serian los valores.
ej: const persona = {
    nombre: 'Kevin',
    apellido: 'Sangregorio',
    edad: 20,
    trabajo: true
    musica: ['Trance', 'Rock', 'Grunge'], //esto seria un arreglo, dentro de un objeto
    hogar: {
        ciudad: 'Buenos Aires',
        pais: 'Argentina' //esto seria un objeto, dentro de un objeto
    }
}
ej1: console.log(persona.edad); //para acceder al valor de dicho objeto.
ej2: console.log(persona.musica[1]); //para acceder al elemento del arreglo que se corresponde con el indice en posicion 1.
ej3: console.log(persona.hogar.ciudad); //para acceder al objeto dentro del objeto
ej4: console.log(persona['hogar']['ciudad']); //para acceder al objeto dentro del objeto. Esta no es tan usada



// --FUNCIONES--
// Todas las funciones tienen un NOMBRE y un parentesis. El NOMBRE es como se llama la funcion pero el parentesis es lo que EJECUTA. Para crear funciones se utiliza "function". Lo que este dentro de las llaves es lo que hara la funcion.
// -FUNCTION DECLARATION- en esta se puede mandar a llamar antes de declararla. es decir que la linea de cod 59 este antes que la 55 y funcione igual.
ej: function saludar() {
        console.log('Hola');
    } //esto es crear una funcion pero por si solo no haria nada, hay que mandarla a llamar.

    saludar(); // esto es mandarla a llamar y la ventaja es que se puede hacer muchas veces. Permiten reutilizar codigo.

// -FUNCTION EXPRESSION- a diferencia de la function declaration, el llamado tiene q ser posterior a la declaracion, sino no funciona
ej: const suma = function() {
        console.log(1 + 2);
    }

    suma(); 

// -PARAMETROS- las hace mas reutilizables. Basicamente es tomar codigo por fuera de la funcion y ponerlo dentro. Los parametros son tomados dentro del parentesis. Dichos parametros deben pasarse en el mismo orden.
ej1: saludar('Juan', 'Desarrollador web');
     saludar('Pedro', 'Medico');
     saludar('Carla', 'Veterinaria');
     saludar('Alejandra', 'Ingeniera');

     function saludar(nombre, trabajo) {
        console.log(`Hola ${nombre} tu trabajo es ${trabajo}`);
     }
    //La consola se iria a llamar 4 veces pero los valores irian cambiando, esa es la ventaja de las funciones.
 
ej2: const suma = function(a, b) {
        console.log(a + b)
} 
    suma(10, 20:) // el resultado en consola seria 30

ej3: const suma = function(a = 0, b = 5) { //con el igual al lado se le da un valor default, en este caso le paso un valor solo pero como b tiene default 5, el total seria 15.
    console.log(a + b)
}
     suma(10)



// -IIFE- son funciones que se invocan automaticamente, no hay que mandarlas a llamar
ej: (function(tecnologia) {
        console.log('Aqui estoy aprendiendo' + tecnologia);
    })('JavaScript'); //aca se pasan los parametros



// -METODOS DE PROPIEDAD- cuando una funcion esta dentro de un objeto

const musica = {
    reproducir: function(cancion){
        console.log('Reproducioen la cancion: ' + cancion );
    }
}

musica.reproducir('Hotel California');  
musica.reproducir('Nothing Else Matters');  



// -FUNCIONES QUE RETORNAN VALORES Y ARROW FUNCTION- se necesita retornar un valor cuando hay que hacer algo extra con esos datos
const suma = function(a = 0, b= 0) {
    return a + b;
}
let resultado = suma(10 + 20);
console.log(resultado);
//ARROW FUNCTION - es una manera de escribir distinto lo de arriba
const suma = (a = 0, b = 0) => a + b;

let resultado = suma(10 + 20);
console.log(resultado);



// -OBJETCT LITERAL-
const persona = {
    nombre: 'Juan'
}
console.log(persona);



// -OBJECT CONSTRUCTION- como se van creando objetos, cada objeto es una instancia y se requiere del this y new.
function Tarea(nombre, urgencia) {                      
    this.nombre = nombre;                           
    this.urgencia = urgencia;
}

const tarea1 = new Tarea('Aprender JavaScript', 'Urgente');
const tarea2 = new Tarea('Preaprar cafe', 'Urgente');
const tarea3 = new Tarea('Pasear al perro', 'Media');
const tarea4 = new Tarea('Conocer a mis suegros', '0');

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);



// -ITERADORES-

//un arreglo
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudias JavaScript'];

//un arreglo con objetos
const carrito = [
    {id: 1, producto: 'Libro'},
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Disco'}
];

//un objeto
let automovil = {
    modelo: 'Camaro',
    motor: 6.0
}

//FOR LOOP para iterar. Ejemplo para el primero (un arreglo)
for(let i=0; i < pendientes.length; i++) {
    console.log(pendientes[1]);
}
// otra alternativa mas facil es...
for(pendiente of pendientes) {
    console.log(pendiente);
}                                   // accede al arreglo mediante la palabra 'pendientes' y crea la variable 'pendiente' para imprimir cada uno de los elementos dentro.
//ejemplo para el segundo
for(producto of arreglo) {
    console.log(producto.producto);
}                
//ejemplo para el tercero
for(info of Object.values(automovil)) {  //aqui cambia la sintaxis
    console.log(info);
}        
//ej con FOR EACH. el for each toma todo el arreglo pero accede a cada uno de ellos de forma individual
pendientes.forEach(function(tarea) {
    console.log(tarea);
});
// o con arrow function
pendientes.forEach(tarea => {
    console.log(tarea);
});
// ej con MAP
pendientes.map(tarea => { //a diferencia del otro, el map crea una copia del arreglo o de lo que esta iterando. El forEach no retorna nada, el map si lo hace.
    console.log(tarea);
});



// -SCOPE- es la visibilidad de una variable. Existen 2: local y global.
var musica = 'Rock'; //variable global
if (musica) {
    var musica = 'Grunge'; //variable local
    console.log('Dentro del if' + musica);
}
console.log('Fuera del if' + musica);
//con la palabra VAR se reescribe el valor inclusive si es local

let musica = 'Rock'; //variable global
if (musica) {
    let musica = 'Grunge'; //variable local
    console.log('Dentro del if' + musica);
}
console.log('Fuera del if' + musica);
// en este caso la variable LET en un caso diria Rock y en el otro Grunge, a diferencia de VAR. LET en este caso funciona igual que CONST.



// -DESTRUCTURING- forma en la q se extraen valores de un objeto.
const cliente = {
    nombre: 'Alejandra',
    tipo: 'Premium'
}

console.log(cliente);

//crear la variable (forma anterior de hacerlo)
const nombreCliente = cliente.nombre;

console.log(nombreCliente);

// de la nueva manera. El 'nombre' q esta entre llaves debe ser igual al de arriba (linea 221)
let {nombre} = cliente;

console.log(nombre)



// -OBJECT LITERAL ENHACEMENT- sirve para unir datos en un objeto. Lo contrario del destructuring
const banda = 'Metallica',
      genero = 'Heavy Metal',
      canciones = ['Master of Puppets', 'Seek & Destroy', 'Enter Sandman'];

//forma anterior
const metallica = {
    banda: banda,
    genero: genero,
    canciones: canciones
}
console.log(metallica);

//forma nueva
const metallica = { banda, genero, canciones } // se puede hacer asi pq la llave y el valor se llaman igual



// -otros metodos en JavaScript-
const personas = [
    {nombre: 'Juan', edad: 20}
    {nombre: 'Pablo', edad: 50}
    {nombre: 'Alejandra', edad: 23}
    {nombre: 'Karen', edad: 28}
    {nombre: 'Miguel', edad: 33}
];

console.table(personas);

//obtener las personas mayores de 25 anios
const mayores = personas.filter(persona => persona.edad > 25);

console.log(mayores);

//extrar informacion de alejandra
const alejandra = personas.find(persona => persona.nombre === 'Alejandra');

console.log(alejandra);

//reduce
let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0); //el cero es el valor inicial que se le da

console.log(total)



//Fetch API
function descargarUsuarios(cantidad) {
    const api = `https://api.randomuser.me/?nat=US&results=${cantidad}`;

    fetch(api) //llamado a Fecth
        .then(respuesta => respuesta.json() );
        .then(datos => imprimirHTML(datos.results) );
}

descargarUsuarios(30);



//getElemntById para seleccionar un elemento especifico del html segun su id
ej:
//en el HTML...
<h1 id='titulo'>Titulo</h1>
//entre las etiquetas <script></script>....
let titulo = document.getElementById('titulo') //el documento es para acceder a todo el documento, podriamos ver el head, body, etc..(todo el documento) con el getElementById accedemos a esa etiqueta con ese id especifico
console.log(titulito) //para mostrar en consola lo seleccionado, en la consola se veria esto: <h1 id='titulo'>Titulo</h1>



//innerHTML propiedad nativa de Js que permite cambiar o manipular los contenidos de las etiquetas HTML (siguiendo con el ejemplo anterior...)
titulo.innerHTML = 'Titulo cambiado desde Javascript' //lo que viene despuies del = es lo que se veria en el HTML, se reescribe el contenido de la etiqueta



//addEventListener es una funcion, un "escuchador de eventos", que espera que alguien haga una accion indicada por nosotros
btn.addEventListener('click', pincharon) //la accion seria el click, lo que le precede (pincharon) es el llamado a la funcion para que realice algo
function pincharon() {
    alert('OUCH');
} //cuando el usuario toque el boton, saldria el alert diciendo OUCH
//para evitar el uso de una funcion, existen las funciones anonimas, se llaman asi pq no se les asigna un nombre
btn.addEventListener('click', function(){
    alert('OUCH');
});


// createElement('') 
ej:
let titulo = document.getElementById('saludo')
let entradaLoca = document.getElementById('entrada')
let btn = document.getElementById('btn')
let conenedor = document.getElementById('saludos')

btn.addEventListener('click', function(){
    let tipo = entradaLoca.value //el value sirve para guardar el valor de los input
    let saludito = `Hola ${tipo}, bienvenido!`
    var sal = document.createElement('h1') // se esta creando en la variable un h1 que todavia no esta en el HTML, se encuentra dentro de la variable
    var txt = document.createTextNode(saludito) //es un nodo de texto,
    sal.appendChild(txt) //appendChild le agrega un hijo dentro del elemento que creamos, en este caso dentro del h1
    contenedor.appendChild(sal)
});



// e.target para que suceda algo cuando interactuamos con una etiqueta puntual  (continuando con el ejemplo anterior...)
document.addEventListener('click', function(e){ //se pasa de parametro la letra e (de evento) para guardar la informacion del evento para poder acceder luego
    if (e.target.localName == 'h1') {
        alert('Soy un h1');
    }
});



//addClass se usa para agregar clasesa las etiquetas (continuando con el ejemplo anterior...)
document.addEventListener('click', function(e){
    if (e.target.localName == 'h1') {
        e.target.classList.add('verde') //classList es la lista de elementos que posee una etiqueta
    }
});



// Bucle FOR, WHILE y DO WHILE
 for(var i=0; i<100; i++) {  // i arranca en 0, va hasta 100, y se incrementa 1 por vuelta

 }                          //a diferencia del while, acá se ejecuta el codigo una cantidad de vez predeterminada

 while (i<7) {             //mientras que i sea menor a 7, tirame numeros random. Si tira un 7 o mas, se rompe la condicion y sale del ciclo
     i = math.random(0,8)  //va a tirar numeros random del 1 al 8
 } 

 do {                      // a diferencia del while, acá si o si el código se va a ejecutar al menos UNA vez.

    i++
 } while (i<5);



// Switch case 
ej:
 var dia = 5

switch (dia) {
    case 1:                 // al lado del case va lo q indica la variable, si fuera al reves y dia = 'lunes', seria: case 'lunes':
    document.write('Lunes');
    break
    case 2: 
    document.write('Martes');
    break
    case 3: 
    document.write('Miercoles');
    break
    case 4: 
    document.write('Jueves');
    break
    case 5: 
    document.write('Viernes');
    break
    case 6: 
    document.write('Sabado');
    break
    case 7: 
    document.write('Domingo');
    break
    default: //si no es ninguno
    document.write('No es ningun dia de la semana');
} 



//filtrado de ARRAYS
var dias = new Array('Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo') //declaro el arreglo

var diasLaborales = dias.filter(function(item){
    return item != 'Sabado' && item != 'Domingo'
}); // para filtrar solo los dias laborales

for (var i = 0; 1 < diasLaborales.length; i++) {
    document.write(diasLaborales[i]+"<br>")
} //para imprimir cada uno de los dias filtrados




//find ARRAYS sirva para encontrar si un arreglo tiene o no un objeto dentro
var numeros = new Array(3,5,2,7,8,6,9)
var loTiene = numeros.find(function(item){ //el parametro item es el que se encarga de iterar en cada uno de los cajones del arreglo
    return item === 5 
})

var loTiene2 = numeros.findIndex(function(item){ //el findIndex busca segun la posicion, en este caso buscaria la posicion 5 que seria el numero 6.
    return item === 5  
})
    
document.write(`${loTiene} lo tiene y su posición es ${loTiene2}`);



//Array con un solo valor. Tranforma un arreglo con valores y los comprime en un solo valor
var valorUnico = numeros.join(); //en el parametro del join podemos pasarle como se van a separar los valores, predeterminandamente separa los numeros con coma
document.write(valorUnico)



// Funciones constructoras. Es una funcion que preconstruye los datos dentro de un objeto para reutilizarlo las veces que queramos (creo q es eso)
function Alumno (nombre, edad, email){ // cuando se crea una funcion constructora de un objeto esta bueno definirla con la primera letra mayuscula para identificarla (puede iniciar con minuscula igualmente)
    this.nombre = nombre // no necesita comas para separar pq estamos dentro de una funcion
    this.edad = edad
    this.email = email
    this.saludar = function() {
        document.write(`Hola soy ${nombre}`)
    }
}

let kevin = new Alumno('Kevin', 20, 'kesangregorio@gmail.com') // instancia de llamado de la funcion, cada llamado tiene un scope distinto, lo que me permite reutilizar la misma funcion pero cambiandole los valores a traves de los parametros
let martin = new Alumno('Martin', 34, 'marquito@gmail.com')
document.write(kevin.nombre)



//Classes. Son un conjunto de funciones. Hay 2 maneras de declararlas: class declaration, class expression

//Class expression
let Alumno = class TipoDeClase{

}

//Class declaration (este se usa mas)
class Alumno {
    constructor (nombre, edad, email){ // siempre tienen un constructor, es el que guarda los diferentes metodos . Se ejecutan si o si una vez
        this.nombre = nombre 
        this.edad = edad
        this.email = email
    }
    saludar(){ //esto es un método.(Los métodos no usan la palabra reservada fuction). Se acceden a ellos igual que a las otras variables. Ej: kevin.saludar()
        document.write('SALUDO' + this.nombre) 
    }
}

let kevin = new Alumno('Kevin', 20, 'kesangregorio@gmail.com') //la instanceamos



//Herencia de classes. Heredar todo lo que tenia una clase hacia otra clase. (Sigue con el ej anterior)
class Humano extends Alumno { //aca Humano hereda todo lo que tiene Alumno. Alumno seria la clase base declarada en la linea 468
    comprar(){
        document.write('Compro un curso')
    }
}



//Métodos Accesores. (de encapsulación). Getters y Setters. 
//Getters: método accesor que trae información de una propiedad de nuestra clase. (GET)
//Setters: setea un nuevo valor a una propiedad de nuestra clase. (SET)
class Humano {
    constructor (nombre, edad, email){ 
        this._nombre = nombre //a nuestros valores hay q agregarles un guión bajo antes.
        this._edad = edad
        this._email = email
    }
    saludar(){ 
        document.write('SALUDO' + this._nombre) 
    }
    get nombre() { //utilizamos la palabra reservada GET y le ponemos le nombre de nuestra propiedad pero sin el guion bajo.
        return this.nombre;
    }
    set nombre(nombre){ //aca pasamos el parametro para poder modificarlo
        this._nombre = nombre
    }
}

let kevin = new Humano('Kevin', 20, 'kesangregorio@gmail.com') 
kevin.nombre = 'Rigoberto Lachup' //aca modifico el nombre del SET



//Métodos Estáticos. No necesitan de una instancia de esa clase para ser llamados. 
//Para poder acceder a un método que esté en una clase sin tener que instanciarla hay q hacer lo siguiente:
class Humano {
    constructor (nombre, edad, email){ 
        this._nombre = nombre 
        this._edad = edad
        this._email = email
    }
    saludar(){ 
        document.write('SALUDO' + this._nombre) 
    }
    get nombre() { 
        return this.nombre;
    }
    set nombre(nombre){ 
        this._nombre = nombre
    }
    static saludarEstatico(){ //aca agregamos la palabra static
        document.write('SALUDO desde la clase directo') 
    }
}

Humano.saludarEstatico() //y aca mandamos a llamarla sin ninguna instancia



//JavaScript asincrónico. No es multiproceso, es concurrente.
//sincronico: se ejecuta una linea debajo de otra.

//Callbacks. Son una funcion anónima que se pasa como argumento a una operación asincrónica.
const request = require('request')

console.log('Soy el primero')                                //este se ejectura primero
request('https://wikipedia.com', function() {
    console.log('Soy el segundo y ya se todo de wikipedia') // este se ejecuta ultimo pq primero tiene q hacer el llamado a wikipedia
})
console.log('Soy el ultimo')                                // este se ejecuta segundo



//Promesas. Se usan para no hacer un callback dentro de otro.
const promesa = require('request-promise')

promesa('http://wikipedia.com').then(function(html) {  // el then es un método que se ejecuta una vez que la promesa haya finalizado
    console.log('Ya se todo de wikipedia')
}).catch(function(err){                                 //el catch se fija si hay errores una vez que la promesa se cumplió y los imprime
console.log(err)                                        //el err detalla el error, si se reemplaza con console.log('Ocurrió algo'), nos diría solo eso
})   

//las promesas tienen diferentes estados: fullfilled (promesa completada), rejected(promesa completada pero con un error), pending(la promesa esta pendiente), setled(promesa finalizada)



//Promesas custom
const request = require('request');           

function llamada(url) {
    return new Promise(function(resolve,reject){
        request (url, function(err, reponse){
            if(err){
                reject(err)
            }else{
                resolve(response)
            }
        })
    })
}

llamada ('http://wikipedia.com').then(function(response){
    console.log('Listo ya se todo de wikipedia')
}).catch(function(err){
    console.logg(err)
})



//Multiples promesas
let promesaA = new Promise((resolve, reject)=> setTimeout(resolve, 500, 'Hola soy la promesa A'))
let promesaB = new Promise((resolve, reject)=> setTimeout(resolve, 800, 'Hola soy la promesa B'))
//promesaA.then(function(){
//    promesaB.then(function(){
//        console.log('Terminó todo')
//    })   
//})
Promise.all([promesaA,promesaB]).then(function(e){  //Promise.all espera a que todas las promesas terminan y luego imprime. La e(de evento) imprime el valor del resultado de las promesas
    console.log('Terminó todo, e')                  //Si alguna promesa falla, el Promise.all no funciona, no corre.
})



//Encadenar promesas. Cuando necesitamos que una promesa se resuelva antes de llamar a la otra.
function PromesaA() {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, 200, 'Pepe')
    })
}

function PromesaB(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, 400, `Mi nombre es ${nombre}`)
    })
}

PromesaA().then(PromesaB).then(console.log)