/**
 * schnipsel DOM geladen:
 document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });
 */


/**
 * DOM zuerst laden
 */
document.addEventListener("DOMContentLoaded", function(event) {

    /**
     * - add class to div with key named playing (for css border shadow and color of each letter-box)
     * - audio and keyCode connection
     * - due sound-time: replay straight when not finished
     * - div connection
     * - change transition back to normal
     */

window.addEventListener('keydown', e => {
    // zum check welcher keyCode eingegeben wurde: console.log(e.keyCode);

    // Audio's holen inkl. Key-code Attribut und ES6 für alle keyCodes:
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //ohne " geht's nicht, für Buchstaben
    //nun noch die Divs holen:
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(key) -> = check

    // console.log(audio) -> wenn null ist keiner hinterlegt, also entsprechend berücksichtigen:
    if(!audio) return;

    // da ein einzelner Ton länger dauert als eine weitere Eingabe -> Ton nochmals starten:
    audio.currentTime = 0;

    // Ton abspielen
    audio.play();

    // Design anpassen:
    key.classList.add('playing')

    // besser als setTimeout (wegen CSS Änderungen) ist ein clickevent


})
    const keys = document.querySelectorAll('.key')

    function removeTransition(e) {
        //console.log(e) -> bei einem Buchstaben wird einiges angezeigt -> jenes nehmen, das am längsten dauert bzw. transform
        if(e.propertyName !== 'transform') return; //nun werden die anderen übersprungen

        //Rahmen wieder verschwinden lassen:
        this.classList.remove('playing');
        //Hinweis zu this: mit console.log(this) kann man herausfinden was genau this ist
    }

    //statt einzelne Events abhören, besser alle:
    keys.forEach(key => key.addEventListener('transitionend', removeTransition)) // removeTransition muss definiert werden

    // am Ende am besten aufräumen: EventListener ans Ende und die Funktion aufrufen
    
});