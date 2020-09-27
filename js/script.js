
const cow = document.getElementById('fixed-cow')

cow.addEventListener('click', cowSound)

cow.addEventListener('dblclick', cowSpeech)




function cowSound() {
    var audio = new Audio('../proyect/audio/cow.mp3');
    audio.play();
}


function cowSpeech() {
    speechSynthesis.speak(new SpeechSynthesisUtterance('Vamos a hacer una web con Wix'));
}

