/**
 * Schnipsel DOM geladen:
 document.addEventListener("DOMContentLoaded", event => {
    console.log("DOM fully loaded and parsed");
});
 */


document.addEventListener("DOMContentLoaded", event => {
    let secondHand = document.querySelector('.second-hand');
    let minuteHand = document.querySelector('.min-hand');
    let hourHand = document.querySelector('.hour-hand');


//Sekundenzeiger:
    function setDate() {
        //console.log('hi')
        const now = new Date()
        const seconds = now.getSeconds();
        //console.log(seconds)

        const minutes = now.getMinutes();
        const hours = now.getHours();

        //für Zeiger in 360 Schritte:
        const secondsDegrees = ((seconds / 60 * 360) + 90);
        const minutesDegrees = ((minutes / 60 * 360) + 90);
        const hoursDegrees = ((hours / 12 * 360) + 90);

        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;


    }
    setInterval(setDate, 1000)


});