/**
 * Schnipsel DOM geladen:
 document.addEventListener("DOMContentLoaded", event => {
    console.log("DOM fully loaded and parsed");
});
 */
document.addEventListener("DOMContentLoaded", event => {
    let panels = document.querySelectorAll('.panel')
    
    function toggleOpen() {
        this.classList.toggle('open');
    }
    function toggleActive(e) {
        //console.log(e.propertyName)
        if(e.propertyName.includes('flex')) {
            this.classList.toggle ('open-active')
        }
    }
    panels.forEach(panel => panel.addEventListener('click', toggleOpen))
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))

});