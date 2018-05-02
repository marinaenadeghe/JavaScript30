let triggers = document.querySelectorAll('a')

let highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.append(highlight)

function highlightLink() {
    //console.log(this)
    let linkCoords = this.getBoundingClientRect()
    console.log(linkCoords)
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))
