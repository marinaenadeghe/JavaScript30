let video = document.querySelector('.flex')
let speed = document.querySelector('.speed')
let bar = document.querySelector('.speed-bar')

speed.addEventListener('mousemove', function (e) { //fkt nicht mit arrow-fkt
    let y = e.pageY - this.offsetTop
    let percent = y / this.offsetHeight // 0-1
    let min = 0.4
    let max = 4

    let height = Math.round(percent * 100) + '%' // vor % kein Leerschlag!
    let playbackrate = percent * (max - min) + min; // damit sich die Anzeige entsprechend anpasst
    bar.style.height = height
    //bar.innerHTML = Math.round (playbackrate)
    bar.textContent = playbackrate.toFixed(2) + 'x' // 2 Dezimalstellen
    video.playbackRate = playbackrate

})

