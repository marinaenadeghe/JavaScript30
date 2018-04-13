/**
 * Schnipsel DOM geladen:
 document.addEventListener("DOMContentLoaded", event => {
    console.log("DOM fully loaded and parsed");
});
 */

 document.addEventListener("DOMContentLoaded", event => {
    const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
        const suffix = this.dataset.sizing || '';
        // name im html und variablen im css sind identisch gewählt: console.log(this.name);
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // suffix muss dabei sein
     }

     inputs.forEach(input => input.addEventListener('change', handleUpdate))
     inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))


});