// let continuar = true;

let nombreUsuario = prompt("Define un nombre de usuario.");

alert("Bienvenido " + nombreUsuario + " al juego de preguntas y respuestas. Vamos a comenzar ! ");

    let opcion = parseInt(prompt("¿Cuál es la capital de Argentina? :\n 1. Santiago\n 2. Buenos Aires\n 3. Lima"));

    switch(opcion) {
        case 1: // if opcion === 1 
            alert("Respuesta incorrecta");
            break;
        case 2: // else if opcion === 2 
            alert("Respuesta correcta");
            break;
        case 3: // else if opcion === 3 
            alert("Respuesta incorrecta");
            break;
        default: // else
            alert("Respuesta incorrecta");
            break;
    }

    let opcion2 = parseInt(prompt("¿En que año Sudafrica organizo el mundial de Futbol? :\n 1. 2002\n 2. 2014\n 3. 2010"));

    switch(opcion2) {
        case 1: // if opcion === 1 
            alert("Respuesta incorrecta");
            break;
        case 2: // else if opcion === 2 
            alert("Respuesta incorrecta");
            break;
        case 3: // else if opcion === 3 
            alert("Respuesta correcta");
            break;
        default: // else
            alert("Respuesta incorrecta");
            break;
    }

    let opcion3 = parseInt(prompt("¿Quien fue elegido presidente de Argentina en el año 2003? :\n 1. Nestor Kirchner\n 2. Eduardo Duhalde\n 3. Carlos Menem"));

    switch(opcion3) {
        case 1: // if opcion === 1 
            alert("Respuesta correcta");
            break;
        case 2: // else if opcion === 2 
            alert("Respuesta incorrecta");
            break;
        case 3: // else if opcion === 3 
            alert("Respuesta incorrecta");
            break;
        default: // else
            alert("Respuesta incorrecta");
            break;
    }

    let opcion4 = parseInt(prompt("¿En qué continente se encuentra Ecuador? :\n 1. Asia\n 2. America\n 3. Africa"));

    switch(opcion4) {
        case 1: // if opcion === 1 
            alert("Respuesta incorrecta");
            break;
        case 2: // else if opcion === 2 
            alert("Respuesta correcta");
            break;
        case 3: // else if opcion === 3 
            alert("Respuesta incorrecta");
            break;
        default: // else
            alert("Respuesta incorrecta");
            break;
    }

    let opcion5 = parseInt(prompt("¿Qué artista pintó La noche estrellada? :\n 1. Van Gogh\n 2. Picasso\n 3. Da Vinci"));

    switch(opcion5) {
        case 1: // if opcion === 1 
            alert("Respuesta correcta");
            break;
        case 2: // else if opcion === 2 
            alert("Respuesta incorrecta");
            break;
        case 3: // else if opcion === 3 
            alert("Respuesta incorrecta");
            break;
        default: // else
            alert("Respuesta incorrecta");
            break;
    }

    let opcion6 = parseInt(prompt("¿Cuántos elementos hay en la Tabla Periódica? :\n 1. 118 elementos\n 2. 114 elementos\n 3. 116 elementos"));

    switch(opcion6) {
        case 1: // if opcion === 1 
            alert("Respuesta correcta");
            break;
        case 2: // else if opcion === 2 
            alert("Respuesta incorrecta");
            break;
        case 3: // else if opcion === 3 
            alert("Respuesta incorrecta");
            break;
        default: // else
            alert("Respuesta incorrecta");
            break;
    }

alert("Felicidades " + nombreUsuario + " has terminado el cuestionario de cultura general.");



