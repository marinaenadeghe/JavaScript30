/**
 * Schnipsel DOM geladen:
 document.addEventListener("DOMContentLoaded", event => {
    console.log("DOM fully loaded and parsed");
});
 */


document.addEventListener("DOMContentLoaded", event => {

    let pressed = [];
    let secretCode = 'marina';
    window.addEventListener('keyup', (e) => {
        console.log(e.key)
        pressed.push(e.key)
        pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
        // wieso erhalte ich eine Fehlermeldung  mit "VM137:1 Uncaught ReferenceError: pressed is not defined
        //     at <anonymous>:1:1" statt "osiMeavEnter" in console wenn ich pressed.join('') einfüge?
        // wenn im HTML kommt "" statt obige Fehlermeldung
        if(pressed.join('').includes(secretCode)) {
            console.log('Ding, ding!!');
            cornify.add()
        }

        console.log(pressed)
})

});