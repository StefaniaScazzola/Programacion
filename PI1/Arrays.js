let notas = [5, 7, 8, 9, 3, 1, 3, 8, 8];

// notas.push(10); //Agrego primero
// notas.push(2); //Agrego segundo: en la lista aparece antes del 8, porque se agregan de forma Secuencial. respetan el orden
// notas.push(8); //Agrego primero

// let ultimaNota = notas.pop(); //Se debe salir el 8


// notas.shift(); //Quita el primero, osea el 5
// notas.shift(); //Quita el segundo, osea el 7

// notas.unshift(9); //Agrega un nueve primero
// notas.unshift(10) //Agrega el 10 luego que el 9 por lo que estará al comienzo por ser el ultimo unshift decladado.

//let dondeEstaElOcho = notas.indexOf(8); //Muestra la posición del primer ocho que encuentra de izquierda a derecha.
let dondeEstaElOcho = notas.lastIndexOf(2); //Muestra la posición del primer ocho que encuentra de Derecha a izquierda.
                                            //Si ponemos un valor que no existe en el array, siempre devuelve el valor -1.

let todasNotas = notas.join(" - ");
console.log(todasNotas);
//console.log(ultimaNota);

//Ejercicio 1 PG
let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];
  let fraseNueva = arrayFrase.join(" ");
  console.log(fraseNueva);

  //Ejercicio 2 PG - Sacar a Alexis
//   let estudiantes = [
//     {
//       nombre: "Alvaro",
//       promedio: 9,
//       curso: "Android"
//     },
//     {
//       nombre: "Daniel",
//       promedio: 6,
//       curso: "Full Stack"
//     },
//     {
//       nombre: "Alexis",
//       promedio: 3,
//       curso: "iOS"
//     }
//   ];
//   let alumnoEgresado = estudiantes.pop();
//   console.log(alumnoEgresado);

  //Ejercicio 3 PG - Agregar dos alumnos
  let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]
  estudiantes.push({
    nombre: 'Juan',
    promedio : 5,
    curso : 'iOS',
  },
  { nombre: 'Miguel',
    promedio : 2,
    curso : 'Adroid',
  });
  console.log(estudiantes);

  //Ejercicio 4 PG - Sacar un alumno
//   let estudiantes = [
//     {
//        nombre: 'Alvaro',
//        promedio : 9,
//        curso : 'Android',
//      },
//       {
//         nombre: 'Daniel',
//         promedio : 6,
//         curso : 'Full Stack',
//       },
//       {
//         nombre: 'Alexis',
//         promedio : 3,
//         curso : 'iOS',
//       },
//     ]
//     let alumnoDeBaja = estudiantes.shift({
//         nombre: 'Alvaro',
//         promedio : 9,
//         curso : 'Android',
//       })
//       console.log(alumnoDeBaja);


      //Ejercicio 5 PG - Agregar alumnos al inicio del array
      let estudiantes = [
        {
          nombre: 'Alvaro',
          promedio : 9,
          curso : 'Android',
        },
        {
          nombre: 'Daniel',
          promedio : 6,
          curso : 'Full Stack',
        },
        {
          nombre: 'Alexis',
          promedio : 3,
          curso : 'iOS',
        }
      ]
      estudiantes.unshift({
        nombre:"Mariana",
        promedio : 9,
        curso : "Full Stack",
      })
      
      estudiantes.unshift({
        nombre:"Francisco",
        promedio : 2,
        curso : "Android",
      })
            
      console.log(estudiantes);