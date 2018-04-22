/*
get our elements
 */
let player = document.querySelector('.player');
let video = player.querySelector('.viewer');
let progress = player.querySelector('.progress');
let progressbar = player.querySelector('.progress__filled');

let toggle = player.querySelector('.toggle');
let ranges = player.querySelectorAll('.player__slider');
let skipButtons = player.querySelectorAll('[data-skip]');


/**
 *functions
 */
function togglePlay() {
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon)
    toggle.textContent = icon;
}

function skip(){
    console.log(this.dataset.skip) //skip von Console
    video.currentTime += parseFloat(this.dataset.skip)//parseFloat: wird zu einer Zahl
}

function handleRangeUpdate () {
    video[this.name] = this.value;
    //console.log(this.value)
    //console.log(this.name)
}

function handleProgress () {
    let percent = (video.currentTime / video.duration) * 100 //currentTime und duration: properties of video, 100 von flex-basis
    progressbar.style.flexBasis = `${percent}%`;
}

function scrub (e) {
    let scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime;
    console.log(e)
}

/**
 * hooks
 */
video.addEventListener('click', togglePlay) //1
video.addEventListener('play', updateButton) //3
video.addEventListener('pause', updateButton) //4
video.addEventListener('timeupdate', handleProgress) //8 für den fortschrittbalken

toggle.addEventListener('click', togglePlay) //2
skipButtons.forEach(button => button.addEventListener('click', skip)) //5
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate)) //6 (change not click!)
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate)) //7

let mousedown = false; //flag setzen, damit es nicht ständig mit mouse hüpft, da video nicht hinterher kommt
progress.addEventListener('click', scrub) //9
/*progress.addEventListener('mousemove', () => {
    if (mousedown){
        scrub()
    }
}) //10 nach 12 wird scrub ersetzt */
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)) // ersetzt 10, wenn mousedown = true wird scrub ausgeführt
progress.addEventListener('mousedown', () => mousedown = true) //11
progress.addEventListener('mouseup', () => mouseup = true) //12

//Button fullscreen selber machen