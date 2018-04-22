/**
 * Schnipsel DOM geladen:
 document.addEventListener("DOMContentLoaded", event => {
    console.log("DOM fully loaded and parsed");
});
 */


 document.addEventListener("DOMContentLoaded", event => {

     let checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]')
     console.log(checkboxes)

     function handleCheck (e){
         console.log(e)
     }

     checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))

});