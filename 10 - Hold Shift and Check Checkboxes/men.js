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
         console.log(e);


        lastChecked = this;
     }

     checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))

});