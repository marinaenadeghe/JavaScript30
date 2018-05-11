let divs = document.querySelectorAll('div')

function logText(e) {
    // soll nicht nach oben bubblen:
    //e.stopPropagation()
    console.log(this.classList.value)
    
}

divs.forEach(div => div.addEventListener('click', logText))

// bubbled von oben nach unten (3 bis 1):
//divs.forEach(div => div.addEventListener('click', logText, {capture:true}))

//Event wird mit once nur 1mal ausgeführt: (z.B. bei Store Checkouts)
//divs.forEach(div => div.addEventListener('click', logText, {capture:false, once: true}))