const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo(){
    navigator.mediaDevices.getUserMedia({ video: true, audio: false})
        .then(localMediastream => {
            console.log (localMediastream);
            //video muss in eine URL verwandelt werden - ist etwas speziell, aber nötig
            //URL.createObjectURL sollte mit HTMLMediaElement.srcObject ersetzbar sein, geht aber nicht
            video.src = window.URL.createObjectURL(localMediastream)
            video.play();

        })
        .catch(err => {
            console.error("oh noo - webcam isn't activated", err) // wieso console? Fehler?
        })
}

function paintToCanvas(){
    let width = video.videoWidth;
    let height = video.videoHeight;
    // diese Zahl via paintToCanvas() aufrufen -> canvas entsprechend anpassen console.log(width, height)
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => { // macht den Schnappschuss alle x sekunden und setzt es als video ins canvas
        ctx.drawImage(video, 0, 0, width, height)

        // für die Filter herausnehmen:
        let pixels = ctx.getImageData(0, 0, width, height)
        //console.log(pixels)

        //etwas damit anstellen
        //pixels = redEffect(pixels) // rot-Effekt
        pixels = rgbSplit(pixels) // verschobener rgb-Effekt
        ctx.globalAlpha = 0.5 // Geistereffekt, durchschimmern

        //greenscreen: rüberkopieren, bzw. unten zuerst machen

        //wieder einfügen
        ctx.putImageData(pixels, 0, 0)

        //debugger; damit dieser anhält sonst zuviele infos oder gar browsercrash, man sieht extrem viele red, blue, green und alpha


    }, 16)
}

function takePhoto(){
    //Ton:
    snap.currentTime = 0;
    snap.play();
    //Foto machen und rausnehmen:
    let data = canvas.toDataURL('image/jpeg');
    //console.log(data) - der Buchstabensalat ist das Bild

    let link = document.createElement('a')
    link.href = data
    link.setAttribute('download', 'handsome')
    //link.textContent = 'Download image';
    link.innerHTML = `<img src="${data}" alt="handsome"/>`
    strip.insertBefore(link, strip.firstChild)
}

//filters: aus canvas rausnehmen, etwas damit machen und wieder rein damit
function redEffect(pixels){
    for (i = 0; i < pixels.data.length; i += 4){//kein map, da dies ein spezieller array ist
        /*
        pixels[i + 0] // rot
        pixels[i + 1] // grün
        pixels[i + 2] // blau, alpha lassen wir in Ruhe
        wird zu folgendem, einfach etwas ausprobieren
        */

        pixels.data[i + 0] = pixels.data[i + 0] + 77; //rot
        pixels.data[i + 1] = pixels.data[i + 1] -30; //grün
        pixels.data[i + 2] = pixels.data[i + 2] * 0.4; //blau

    }
    return pixels;
}

function rgbSplit(pixels){
    for (i = 0; i < pixels.data.length; i += 4){//kein map, da dies ein spezieller array ist
        /*
        pixels[i + 0] // rot
        pixels[i + 1] // grün
        pixels[i + 2] // blau, alpha lassen wir in Ruhe
        wird zu folgendem, einfach etwas ausprobieren
        */

        pixels.data[i - 150] = pixels.data[i + 0]; //rot
        pixels.data[i + 100] = pixels.data[i + 1]; //grün
        pixels.data[i - 150] = pixels.data[i + 2]; //blau

    }
    return pixels;
}


getVideo();
video.addEventListener('canplay', paintToCanvas)
//takePhoto ist im HTML "einfach" mit onclick gemacht