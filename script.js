let container = document.querySelector(".container");

window.addEventListener("keydown",pressMe);

function pressMe(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    // key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
 

}