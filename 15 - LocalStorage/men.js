/**
 * Schnipsel DOM geladen:
 document.addEventListener("DOMContentLoaded", event => {
    console.log("DOM fully loaded and parsed");
});
 */


    const addItems = document.querySelector('.add-items');
    const itemsList = document.querySelector('.plates');
    const items = JSON.parse(localStorage.getItem('items')) || []; // hole von localStorage oder ist ein leeres array
    
    function addItem(e) {
        //console.log('Hello') mit preserve log kann das "Form absenden" sichtbar werden, form sendet daten irgendwo hin
        e.preventDefault() //verhindert das automatische Absenden

        let text = (this.querySelector('[name=item]')).value;
        let item = {
            text,
            done: false
        };

        items.push(item);
        populateList(items, itemsList)

        //oder getItem oder removeItem sind die anderen Möglichkeiten, toString
        //'items' = Beschriftung, das zweite z.B. array oder Object -> stringify
        localStorage.setItem('items', JSON.stringify(items))

        this.reset() // wegen Formular ist es reset

        console.log(item, items) // bei Eingabe in Console: error mit console.log kein Problem -> men.js anders eingebunden
    }

    //damit man auch anders verwenden kann, nicht mit den Variablen von oben (Abhängigkeit):
    //plates = [] ist leer, damit js nicht zus.bricht, z.B. statt platesList hätte man itemList verwenden können
    //diese Variante lädt immer die ganze Liste, Performance -> angular oder react
    function populateList(plates = [], platesList){
        platesList.innerHTML = plates.map((plate, i) => {
            // id und for sind das gleiche, wegen checkbox nicht checked - fkt
            return `
                <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
                <label for="item${i}">${plate.text}</label>
                </li>
            `
        }).join(''); // nimmt den array von map und macht einen grossen String draus
    }

    //Damit Icon-Wechsel gespeichert wird in localStorage, wird eventdelegation genannt - höhren auf etwas höheres (ul):
    function toggleDone (e){
        if(!e.target.matches('input')) return; //wenn nicht input dann von vorne
        //console.log(e.target) was genau
        let el = e.target // el = Abkürz. für Element
        let index = el.dataset.index
        items[index].done = !items[index].done //von item mit index was auch immer, setze done auf das Gegenteil

        // console.log(el.dataset.index) deswegen vorher data-index festgelegt
        // von oben und unten hereinkopieren:
        localStorage.setItem('items', JSON.stringify(items))
        populateList(items, itemsList)
    }

    addItems.addEventListener('submit', addItem)
    itemsList.addEventListener('click', toggleDone)
    populateList(items, itemsList) // damit die Liste von localStorage geladen werden kann


