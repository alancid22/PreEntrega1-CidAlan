let nombreUsuario = prompt("Define un nombre de usuario.");

alert("Bienvenido " + nombreUsuario + " al juego de preguntas y respuestas. Vamos a comenzar ! ");

const preguntas = [
    { pregunta: "¿Cuál es la capital de Argentina? Escriba el numero de la opcion correcta :\n 1) Santiago\n 2) Buenos Aires\n 3) Lima" , respuesta: "2" },
    { pregunta: "¿En que año Sudafrica organizo el mundial de Futbol? Escriba el numero de la opcion correcta :\n 1) 2002\n 2) 2014\n 3) 2010", respuesta: "3" },
    { pregunta: "¿Quien fue elegido presidente de Argentina en el año 2003? Escriba el numero de la opcion correcta :\n 1) Nestor Kirchner\n 2) Eduardo Duhalde\n 3) Carlos Menem", respuesta: "1" },
    { pregunta: "¿Qué artista pintó La noche estrellada? Escriba el numero de la opcion correcta :\n 1) Van Gogh\n 2) Picasso\n 3) Da Vinci", respuesta: "1" },
    { pregunta: "¿Cuántos elementos hay en la Tabla Periódica? Escriba el numero de la opcion correcta :\n 1) 118 elementos\n 2) 114 elementos\n 3) 116 elementos", respuesta: "1" }
];
  
// Función para realizar la prueba
function realizarPrueba() {
    let respuestasCorrectas = 0;
  
    // Iterar sobre las preguntas
    for (let i = 0; i < preguntas.length; i++) {
      const respuestaUsuario = prompt(preguntas[i].pregunta);
      
      // Comprobar si la respuesta es correcta
      if (respuestaUsuario.toLowerCase() === preguntas[i].respuesta.toLowerCase()) {
        respuestasCorrectas++;
      }
}
  
// Calcular porcentaje de respuestas correctas
const porcentajeCorrectas = (respuestasCorrectas / preguntas.length) * 100;
  
// Mostrar resultado
alert( `` + nombreUsuario + ` has respondido correctamente ${respuestasCorrectas} de ${preguntas.length} preguntas.\nPorcentaje de respuestas correctas: ${porcentajeCorrectas}%`);
}
  
// Llamar a la función para iniciar la prueba
realizarPrueba();