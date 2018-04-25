// [...xxx] ist identisch mit Array.from, machen Array aus nodelist
let timeNodes = [...document.querySelectorAll('[data-time]')]
let seconds = timeNodes
    .map(node => node.dataset.time)  //array-Teile sind nun strings
    .map(timeCode => {
        let [mins, secs] = timeCode.split(':').map(parseFloat) // trennt und macht Zahlen
        return (mins * 60) + secs;
    })
    .reduce((total, vidSeconds) => total + vidSeconds);

console.log(seconds)

let secondsLeft = seconds;
let hours = Math.floor(secondsLeft / 3600)
secondsLeft = secondsLeft % 3600
let minutes = Math.floor(secondsLeft / 60)
secondsLeft = secondsLeft % 60

console.log(hours, minutes, secondsLeft)
