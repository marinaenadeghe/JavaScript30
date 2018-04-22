/**
 * Schnipsel DOM geladen:
 document.addEventListener("DOMContentLoaded", event => {
    console.log("DOM fully loaded and parsed");
});
 */


 document.addEventListener("DOMContentLoaded", event => {

     let checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]');
     //console.log(checkboxes)
     let lastChecked;

     function handleCheck (e){
         let inBetween = false;
         if(e.shiftKey && this.checked){
             checkboxes.forEach(checkbox => {
                 console.log(checkbox) // zeigt alle an
                 if(checkbox === this || checkbox === lastChecked){
                     inBetween = !inBetween; // nicht false, da es auch rückwärts funktionieren soll
                     console.log('check if inBetween')
                 }
                 if (inBetween){
                     checkbox.checked = true;
                 }
             })

         }

        lastChecked = this;
        // wird richtig ausgegeben mit folgenden, jedoch nicht wenn getippt in Console: console.log(lastChecked)
     }

     checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))

});