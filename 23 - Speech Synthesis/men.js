const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices(){
    voices = this.getVoices()
    //console.log(voices)

    /*
    let voiceOptions = voices
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`) // wieso so?
        .join('');
    voicesDropdown.innerHTML = voiceOptions;
    kürzer:
*/
    voicesDropdown.innerHTML  = voices
    //nach Sprache filtern: .filter(voice => voice.lang.includes('de'))
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`) // wieso so?
        .join('');

}

function setVoice(){
    //console.log(this.value) -> nun den Namen finden
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}
//damit setVoice sofort in der passenden Sprache startet/spricht, Wert (startOver)übergeben (nicht unbedingt nötig):
function toggle(startOver = true){
    speechSynthesis.cancel()
    if(startOver){
        speechSynthesis.speak(msg)
    }
}

function setOption(){
    console.log(this.name, this.value)
    msg[this.name] = this.value
    toggle()
}

speechSynthesis.addEventListener('voiceschanged', populateVoices)
voicesDropdown.addEventListener('change', setVoice)
options.forEach(option => option.addEventListener('change', setOption)) //da verschiedene für jeden
speakButton.addEventListener('click', toggle)
stopButton.addEventListener('click', () => toggle(false))
