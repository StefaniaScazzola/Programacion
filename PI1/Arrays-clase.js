let films = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];
console.log("La segunda peli a mostrar es " + films[1]);

//punto 2 ejercicio
// let mayusfilms = films.join().toUpperCase(" ")
// console.log(mayusfilms);

//Pasar a mayusculas los elementos de un array. 
const arrayMayus = function (array){
    let newArray = [];
    newArray[0] = array[0].toUpperCase();
    newArray[1] = array[1].toUpperCase();
    newArray[2] = array[2].toUpperCase();
    newArray[3] = array[3].toUpperCase();
    newArray[4] = array[4].toUpperCase();
    return newArray;
}

let allFilms = []; 
console.log(films);
allFilms = arrayMayus(films, 0);
allFilms = arrayMayus(films, 1);
allFilms = arrayMayus(films, 2);
allFilms = arrayMayus(films, 3);
allFilms = arrayMayus(films, 4);
console.log(allFilms);


//punto 3 ejercicio
let cartoons = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

let ultimofilms = films.pop(); //Corresponde al punto de eliminar el ultimo antes de agregarlo a Films.
console.log("El registro que se eliminó es: " + ultimofilms);

function pushFilm (arrayFilms, valorCartoon){  //Esta función sirve para agregar los cartoons a las peliculas.
    arrayFilms[arrayFilms.length] = valorCartoon;
}

pushFilm(films, cartoons[0]);
pushFilm(films, cartoons[1]);
pushFilm(films, cartoons[2]);
pushFilm(films, cartoons[3]);
pushFilm(films, cartoons[4]);

console.log(films);

//Resolución hecha por nosotroas - también está bien.
// films.push(cartoons[0]);
// films.push(cartoons[1]);
// films.push(cartoons[2]);
// films.push(cartoons[3]);
// console.log(films);

// films.push(cartoons);
// console.log(films);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9]; 

const sonIguales = (arr1, arr2) => {
    let sonIguales = 0;
    for 
} 