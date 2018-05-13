let slider = document.querySelector('.items')
let isDown = false
let startX
let scollLeft


slider.addEventListener('mousedown', (e) => {
    isDown = true
    slider.classList.add('active')
    //console.log(e.pageX) // clientX zählt anders, dh. bei client nur sichtbares, bei page auch das was ausserhalb des sichtbaren Fensters ist
    startX = e.pageX - slider.offsetLeft // wegen Margin etc - wieso offsetLeft und nicht offsetX? -> bezieht sich auf Parent
    //console.log(startX)
    scollLeft = slider.scrollLeft
})
slider.addEventListener('mouseleave', () => {
    isDown = false
    slider.classList.remove('active')
})
slider.addEventListener('mouseup', () => {
    isDown = false
    slider.classList.remove('active')
})
slider.addEventListener('mousemove', (e) => {
    if(!isDown)return; //dann wird nicht mehr alles getrackt
    //console.log(isDown, startX)
    //damit Browser nicht Text oder sonst was schnappt:
    e.preventDefault()
    let x = e.pageX - slider.offsetLeft
    //console.log({x, startX})
    // ohne effekt: let move = x - startX
    let move = (x - startX) * 7
    //console.log(move)
    slider.scrollLeft = scollLeft - move //variable verwenden, sonst springt's
})
