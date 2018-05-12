let triggers = document.querySelectorAll('.cool > li')
let background = document.querySelector('.dropdownBackground')
let nav = document.querySelector('.top')

function handleEnter() {
    this.classList.add('trigger-enter')
    // dies fkt nur mit, wegen this =>, jedoch bei schnellen moves bleibt klasse bzw. Text sichtbar
    //setTimeout(() => this.classList.add('trigger-enter-active'), 150)
    /*daher lange Version:
    setTimeout(() => {

         if(this.classList.contains('trigger-enter')){
             this.classList.add('trigger-enter-active')
         }
     }, 150)
      */

    // kurz: wenn erstes stimmt mache zweites
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150)
    background.classList.add('open')

    //weisses Feld hinter passendes Dropdown bringen - daher this und nicht document!:
    let dropdown = this.querySelector('.dropdown')
    let dropdownCoords = dropdown.getBoundingClientRect();
    let navCoords = nav.getBoundingClientRect(); // weil man z.B. Bild oder Text oben einbaut, zusätzlich berücksichtigen
    //console.log(navCoords)
    let coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    }

    //weisse Box
    background.style.setProperty('width', `${coords.width}px`)
    background.style.setProperty('height', `${coords.height}px`)
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px`)
    // nach translate kein Leerschlag!!!

}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active')
    background.classList.remove('open')
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))