//Modelo prueba
let fruta = "naranja";
switch (fruta){
    case "manzana":
        console.log("Que rica manzana");
        break;
        case"naranja":
        console.log("Naranja, me encanta!");
        break;
        default:
            console.log("Qué fruta es?");
            break;
}

// let dia1 = "viernes";	//Switch Ok sin función
//    let saludo1;
// 	switch (dia1){
//         case "viernes":
//             saludo1 = "buen finde";
//             console.log("buen finde");
//             break;
//         case "lunes":
//             saludo1 = "buena semana";
//             console.log("buena semana");
//             break;
//         default:
//             saludo1 = "buen día";
//            console.log("buen dia");
// }


 //Ejercicio 2 - Bien para PG
let dia = "lunes";          
function finDeSemana() {	
	switch (dia){
        case "viernes":
            console.log("buen finde");
            break;
        case "lunes":
            console.log("buena semana");
            break;
        default:
           console.log("buen dia");
}
//return (saludo);
}
finDeSemana();

//Ejercicio 2 Switch  -  //Funciona OK
let dia1 = "martes";
function tengoClases() {
	switch (dia1) {
        case "lunes":
        case "miércoles":
        case "viernes":
            console.log("tenés clases");
        break;
        default:
            console.log("no tenés clases");
	}
//return(clase);
}
tengoClases();


// let dia2 = "viernes";     //Ejemplo corto
// function tengoClases(dia2) {
//     switch (dia) {
//         case 'lunes':
//         case 'miércoles':
//         case 'viernes':
//             console.log('tenés clases');
//             break;
//         default:
//             console.log('no tenés clases');
//     }
// }
// tengoClases();