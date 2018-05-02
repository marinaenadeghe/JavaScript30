let triggers = document.querySelectorAll('a')

let highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.append(highlight)

function highlightLink() {
    //console.log(this)
    let linkCoords = this.getBoundingClientRect()
    console.log(linkCoords)

    let coord = {
        width: linkCoords.width,
        height: linkCoords.height,
        x: linkCoords.x + window.scrollX, // ob x oder left nicht so wichtig, aber nötig, damit es auch bei scrollen geht
        y: linkCoords.y + window.scrollY,
    }


    highlight.style.width = `${coord.width}px`
    highlight.style.height = `${coord.height}px`
    highlight.style.transform = `translate(${coord.x}px, ${coord.y}px)`
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))


// wann macht man etwas mit CSS und wann mit JS? Stimmt Prinzip immer mit CSS wenn es geht?