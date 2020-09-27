
/* Seleccionamos el elemento vaca del DOM */
const cow = document.getElementById('fixed-cow')
/* Añadimos un evento click y doubleclick que ejecutan sus respectivas funciones de sonido */
cow.addEventListener('click', cowSound)
cow.addEventListener('dblclick', cowSpeech)

/* Seleccionamos el elemento logo del DOM */
const logo = document.getElementById('logo')
/* Añadimos un evento click que ejecuta la funcion navideña (se añade el false al ser un elemento <a>) */
logo.addEventListener('click', toogleChristmas, false)

/* Inicializamos las variables que se van a usar en la diferentes funciones */
let isChristmas = false
const audio = new Audio('./audio/jingleBell.mp3');

/* Funcion sonido de vaca */
function cowSound() {
    const audio = new Audio('./audio/cow.mp3');
    audio.play();
}

/* Funcion hablado para la vaca */
/* TODO: aprender como cambiar la voz que habla */
function cowSpeech() {
    speechSynthesis.speak(new SpeechSynthesisUtterance('Vamos a hacer una web con Wix'));
}

/* Funcion navideña que activa o desactiva el modo navidad */
function toogleChristmas() {
    /* Seleccionamosla raiz del documento entero */
    let root = document.documentElement;

    /* Si no es navidad seteamos los valores navideños y actualizamos el valor a "true" (si es Navidad) */
    if (isChristmas == false) {
        root.style.setProperty('--secondary-bg-color', 'rgb(182, 1, 1)');
        root.style.setProperty('--primary-font-color', 'rgb(182, 1, 1)');
        root.style.setProperty('--tertiary-font-color', 'rgb(1, 87, 1)');
        root.style.setProperty('--cow-image', 'url(../imagenes/ChristmasCow.png) no-repeat');

        audio.play();
        isChristmas = true;

        /* Si  es navidad seteamos los valores no navideños y actualizamos el valor a "false" (no es Navidad) */
    } else if (isChristmas == true) {
        root.style.setProperty('--secondary-bg-color', 'black');
        root.style.setProperty('--primary-font-color', 'black');
        root.style.setProperty('--tertiary-font-color', 'rgb(92, 91, 91)');
        root.style.setProperty('--cow-image', 'url(../imagenes/Vaca2.png) no-repeat');

        audio.pause();
        audio.currentTime = 0.0;
        isChristmas = false
    }
}

