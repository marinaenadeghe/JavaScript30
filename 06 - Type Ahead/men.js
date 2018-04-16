/**
 * Schnipsel DOM geladen:
 document.addEventListener("DOMContentLoaded", event => {
    console.log("DOM fully loaded and parsed");
});
 */
document.addEventListener("DOMContentLoaded", event => {
    //aus diesem File kommen alle US Städte, ist ein json
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

    //damit die Städte gefiltert werden können, braucht man ein leeres array:
    const cities = [];

    //nun wird ein Browser API verwendet, via let prom = ... console.log (prom) Element untersuchen
    // man weiss nicht was da genau zurück kommt, unter proto json findbar: fetch(endpoint).then(blob => console.log(blob))
    fetch(endpoint)
        .then(blob => blob.json())
        .then(data => cities.push(...data)) // funktioniert nicht mit seperatem js, wenn im HTML drin jedoch schon -> wegen fetch???

});