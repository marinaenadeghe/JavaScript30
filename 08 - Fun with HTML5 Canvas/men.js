/**
 * Schnipsel DOM geladen:
 document.addEventListener("DOMContentLoaded", event => {
    console.log("DOM fully loaded and parsed");
});
 */

document.addEventListener("DOMContentLoaded", event => {

    let canvas = document.querySelector('#draw')
    let ctx = canvas.getContext('2d')
    let hue = 0; // via mothereffing hsl -> farbe
    let direction = true;

    //grösse dem Fenster anpassen:
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    ctx.strokeStyle = '#BADA55'
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.lineWidth = 100;

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    function draw(e) {
        if(!isDrawing) return;
        console.log(e)
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        //ctx.lineWidth = hue -> wird extrem gross daher variable direction
        ctx.beginPath()
        ctx.moveTo(lastX, lastY)
        ctx.lineTo(e.offsetX, e.offsetY)
        ctx.stroke()

        //[lastX, lastY] = [e.offsetX, e.offsetY]; //2Variablen in einer Zeile definiert fkt aber nicht - wieso???
        lastX = e.offsetX
        lastY = e.offsetY
        hue++ //damit sich die Farbe verändert, damit es nicht unendlich hochzählt:
        if (hue >= 360) hue = 0;
        if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
            direction = !direction;
        }
        if(direction){
            ctx.lineWidth++;
        }else{
            ctx.lineWidth--;
        }
    }


    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    })

    canvas.addEventListener('mousemove', draw) // war die erste Fkt

    canvas.addEventListener('mouseup', () => isDrawing = false)
    canvas.addEventListener('mouseout', () => isDrawing = false) //weil man evtl. das Fenster verlässt, dann unklar ob mouseup
});

/**
 * browsercompabilitätscheck:
 * if (canvas.getContext){
        let ctx = canvas.getContext('2d');
        //weiterer Code
    } else {
        alert("Dein Browser unterstützt das <canvas> Element nicht")
    }
 -> ggf Fallback definieren
 *
 *
 *Rechtecke:
 *     if (canvas.getContext) {
        let ctx = canvas.getContext('2d');

        ctx.fillRect(25, 25, 100, 100); -> Füllung
        ctx.clearRect(45, 45, 60, 60); -> Mitte leer
        ctx.strokeRect(50, 50, 50, 50); -> rahmen weiter drinn
    }
 *
 * Für Pfade:
 * beginPath()
 Erstellt einen Pfad und beendet ggf. einen älteren.
 closePath()
 Beendet den Pfad und verbindet den Startpunkt mit dem Endpunkt.
 stroke()
 Zeichnet die Kontur des Pfades.
 fill()
 Zeichnet die Füllung des Pfades.

 *
 * Dreiecke:
 * if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
 *
 *smiley:
 * if (canvas.getContext) {
     var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);    // Mund
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Linkes Auge
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Rechtes Auge
    ctx.stroke();
  }
 *
 *
 * Kurven:
 * quadraticCurveTo(cp1x, cp1y, x, y)
 * Zeichnet eine quadratische Bézierkurve von der aktuellen Stiftposition zu x und y, mithilfe des Kontrollpunktes mit den Koordinaten (cp1x, cp1y).
 bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
 Zeichnet eine quadratische Bézierkurve von der aktuellen Stiftposition zu x und y, mithilfe der Kontrollpunkte mit den Koordinaten (cp1x, cp1y) und (cp2x, cp2y).

 *
 * Sprechblase:
 * if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // Quadratric curves example
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
  }
 *
 *
 * Herz ist auch möglich und vieles vieles mehr
 */

