function playSound (evenement){
    let keyCode=evenement.keyCode;
    let selector=`audio[data-key="${keyCode}"]`;
    let sound=document.querySelector(selector);
    if (!sound) return; 
    sound.play();
    playAnimation(evenement);
    console.log(sound);
}
// sélection avec data attribut la balise audio

document.addEventListener("keydown", playSound);
// qu'est-ce qu'on écoute et qu'est-ce qu'on fait fonction anonyme

// Animer css pad enfoncé avec key
// appliquer class playing sur cette div

function playAnimation (evenement){
    let keyCode=evenement.keyCode;
    let selector=`div.key[data-key="${keyCode}"]`;
    let pad=document.querySelector(selector);
    console.log(pad);
    pad.classList.add("playing");
    console.log(evenement);
}

// créer fonction listen pad appuyé avec transision terminé 
function removeTransition (evenement){ 
    evenement.target.classList.remove("playing");
    
}

// surveiller tous les pads query selector all

let pads=document.querySelectorAll(".key");
for (let pad of pads)
{
    pad.addEventListener ("transitionend", removeTransition)
}

function simulateKey(key){
    let newEvent = new KeyboardEvent("keydown",{keyCode:key});
    document.dispatchEvent(newEvent);
}

let myButton = document.querySelector(".myButton");
myButton.addEventListener("click", () => simulateKey(65));


function playBeat (key, delay){
    return new Promise((resolve, reject) => {
        simulateKey(key) 
        setTimeout(() => {
            resolve()
          }, delay);
    })
}
// renvoyer une nouvelle promesse avec variable de temps = setTimeout avec keyCode et jouer son correspondant



// Function beatBox = function simulateKey() simule la pression d'une touche de clavier une 
//                    function playBeat() renvoie une nouvelle promesse

function beatBox (){
    playBeat(65, 200)
        .then(()=>playBeat(90, 200))
        .then(()=>playBeat(69, 200))
}
