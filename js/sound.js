
// VARIABLE
let sound;

function initSound(path){
    sound = new Audio('./sound/click.mp3');
    console.log(sound);
}

/* function initSound2(path){
    sound = new Audio('./sound/title.mp3');
    console.log(sound);
}
 */
function Play() {
    console.log("hemos entrado");
    sound.play();
    
}

function Pause(){
    sound.pause();
}

initSound();

/* initSound2(); */
