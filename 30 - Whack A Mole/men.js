const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let lastHole;
let timeUp = false;
let score = 0;

function randTime(min,max) {
    return Math.round(Math.random() * (max - min) + min)
}

function severalDomElements(holes){
    // zeigt alle 6 an, da node-list: console.log(holes.length)
    let idx = Math.floor(Math.random() * holes.length)
    let hole = holes[idx]

    // damit sich nicht ständig gleiches Feld wiederholt:
    if(hole === lastHole){
        console.log('same as before')
        //funktion nochmals aufrufen
        return severalDomElements(holes)
    }

    lastHole = hole
    return hole;
}

function peep() {
    let time = randTime(200, 1000)
    let hole = severalDomElements(holes)
    //console.log(time, hole)
    hole.classList.add('up')

    setTimeout(() => {
        hole.classList.remove('up')
        //wieder fkt aufrufen
        if(!timeUp) peep();
    }, time)
}

function startGame() {
    scoreBoard.textContent ='0'
    timeUp = false
    score = 0

    peep()
    setTimeout(() => timeUp = true, 10000) //nach 10 sec ist Zeit um
}

function bonk(e) {
    //console.log(e)
    if(!e.isTrusted) return; // Klick muss vom user kommen, sonst ignorieren
    score ++;
    this.classList.remove('up') // nur 1mal klickbar
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk))