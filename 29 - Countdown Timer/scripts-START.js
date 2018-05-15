//nicht nur mit setIntervall berechnen -> stoppt bei weggehen, scrollen ua
let countdown

let timerDisplay = document.querySelector('.display__time-left')
let timerEnd = document.querySelector('.display__end-time')
let prefixedTimes = document.querySelectorAll('[data-time]')

function timer(seconds) {
    // damit es bei den vorgegebenen Zeiten / häufiges klicken nicht springt:
    clearInterval(countdown)

    let now = Date.now()
    let then = now + seconds * 1000; //now ist in Millisekunden daher mal 1000
    //console.log({now, then})
    displayTimeLeft(seconds) // beginnt mit 1. Sekunde
    displayEndTime(then)

    //zum anzeigen:
    countdown = setInterval(() =>{
        let secondsLeft = Math.round((then - Date.now()) / 1000) // nicht mit now da in then verwendet
        // wird irgendwann negativ -> muss gestoppt werden
        if(secondsLeft < 0){
            //man sieht nichts, läuft aber im Hintergrund weiter: return;  daher so:
            clearInterval(countdown)
            return;
        }
        displayTimeLeft(secondsLeft)

    }, 1000)
}

function displayTimeLeft(seconds) {
    let minutes = Math.floor(seconds / 60)
    let remindingSeconds = seconds % 60
    let hours = Math.floor(minutes / 60)
    let remindingMinutes = minutes % 60
    let days = Math.floor(hours / 24)
    let remindingHours = hours % 24


    let display = `${days < 1 ? '0' : ''}${days} : ${remindingHours < 24 ? '0':''}${remindingHours} :
        ${remindingMinutes < 10 ? '0' : ''}${remindingMinutes} : 
        ${remindingSeconds < 10 ? '0': ''}${remindingSeconds}`
    /*
    let display = `${days} : ${remindingHours} : ${remindingMinutes < 10 ? '0' : ''}${remindingMinutes} : ${remindingSeconds < 10 ? '0': ''}
        ${remindingSeconds}`*/
    timerDisplay.textContent = display
    document.title = display
    //console.log({days, remindingHours, remindingMinutes, remindingSeconds})
}

function displayEndTime(timestamp) {
    let end = new Date(timestamp)
    let day = end.getDay()
    let hour = end.getHours()
    let minutes = end.getMinutes()
    timerEnd.textContent = `Wieder da um ${hour} : ${minutes < 10 ? '0' : ''}${minutes}`
    // geht nicht: ${day < 1 ? '0' : ''}${day} :
}

function startTimer(){
    //console.log(this.dataset.time)
    let seconds = parseInt(this.dataset.time) // in eine echte Zahl verwandeln
    timer(seconds)
}

prefixedTimes.forEach(prefixedTime => prefixedTime.addEventListener('click', startTimer))

//da Formular mit name und so -> muss nicht selektioniert werden, sondern geht auch so:
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60); // fkt muss sekunden übergeben werden
    this.reset(); // Feld leeren
});