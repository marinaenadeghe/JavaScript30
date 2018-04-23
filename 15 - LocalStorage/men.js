/**
 * Schnipsel DOM geladen:
 document.addEventListener("DOMContentLoaded", event => {
    console.log("DOM fully loaded and parsed");
});
 */


    const addItems = document.querySelector('.add-items');
    const itemsList = document.querySelector('.plates');
    const items = [];
    
    function addItem(e) {
        //console.log('Hello') mit preserve log kann das "Form absenden" sichtbar werden, form sendet daten irgendwo hin
        e.preventDefault() //verhindert das automatische Absenden

        let text = (this.querySelector('[name=item]')).value;
        let item = {
            text,
            done: false
        };

        items.push(item);
        this.reset() // wegen Formular ist es reset

        console.log(item, items) // bei Eingabe in Console: error mit console.log kein Problem....

    }

    addItems.addEventListener('submit', addItem)


