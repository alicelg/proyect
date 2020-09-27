
const cow = document.getElementById('fixed-cow')

cow.addEventListener('click', cowSound)
cow.addEventListener('dblclick', cowSpeech)

const logo = document.getElementById('logo')

logo.addEventListener('click', toogleChristmas, false)

let isChristmas = false
const audio = new Audio('./audio/jingleBell.mp3');



function cowSound() {
    const audio = new Audio('./audio/cow.mp3');
    audio.play();
}


function cowSpeech() {
    speechSynthesis.speak(new SpeechSynthesisUtterance('Vamos a hacer una web con Wix'));
}

function toogleChristmas() {
    let root = document.documentElement;

    if (isChristmas == false) {
        root.style.setProperty('--secondary-bg-color', 'rgb(182, 1, 1)');
        root.style.setProperty('--primary-font-color', 'rgb(182, 1, 1)');
        root.style.setProperty('--tertiary-font-color', 'rgb(1, 87, 1)');
        root.style.setProperty('--cow-image', 'url(../imagenes/ChristmasCow.png) no-repeat');

        audio.play();
        isChristmas = true;

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

