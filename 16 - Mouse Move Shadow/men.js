let hero = document.querySelector('.hero');
let text = document.querySelector('h1');
let walk = 100; //wieviele Pixel soll sich der Schatten bewegen

function shadow (e) {
    let width = hero.offsetWidth;
    let height = hero.offsetHeight;
    // neu das gleiche wie oben und nur eine Zeile: let { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;
    // zeigt die px jedoch auch bei 0 bei den Kinderelementen -> also korrektur nötig console.log(x,y)
    // console.log(this, e.target)
    if (this !== e.target){
        x = x + e.target.offsetLeft; // hier let vor x bzw y nicht nötig, da oben definiert
        y = y + e.target.offsetTop;
    }
    //console.log(x,y)

    let xWalk = Math.round(x / width * walk) - (walk / 2); // sorgt dafür, dass von den 100px jeweils zur hälfte gemoved werden kann
    let yWalk = Math.round(y / height * walk) - (walk / 2); // mit Math.round sind die Nummern kleiner

    //console.log (xWalk, yWalk)
    // 1. = violett-pink, 2. = hellblau 3. = blue, 4. = red
    text.style.textShadow =`
        ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
        ${xWalk * -2}px ${yWalk}px 0 rgba(0,255,255,0.7),
        ${xWalk * -1}px ${yWalk * -2}px 0 rgba(0,0,255,0.7), 
        ${xWalk}px ${yWalk * -1 }px 0 rgba(255,0,0,0.7)
        `;
}

hero.addEventListener('mousemove', shadow)