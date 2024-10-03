let recording = false;
let sequence = [];


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

document.addEventListener("keydown", (event) => {
    playSound(event);
    if (recording) addKey(event)
});
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

// surveiller simulation des touches
function simulateKey(key){
    let newEvent = new KeyboardEvent("keydown",{keyCode:key});
    document.dispatchEvent(newEvent);
}

// surveiller simulation click
let myButton = document.querySelector(".myButton");
myButton.addEventListener("click", () => beatBox());


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

async function beatBox (){
    for (let key of sequence){
        await playBeat(key, 200)
    }
}

// Créer bouton pour démarrer et arrêter enregistrement (quand on appuie sur les touches du clavier)

// 1 Créer 1 bouton listen record avec condition
let myButtonRecord = document.querySelector('.myButtonRecord');
myButtonRecord.addEventListener("click", () => {
    if (recording) recording = false;
    else recording = true;
})

function addKey (event){
    sequence.push(event.keyCode);
}
