/**
 * Schnipsel DOM geladen:
 document.addEventListener("DOMContentLoaded", event => {
    console.log("DOM fully loaded and parsed");
});
 */
document.addEventListener("DOMContentLoaded", event => {
    //vorgegeben, hat er irgendwo gefunden und hineinkopiert:
    function debounce(func, wait = 20, immediate = true) {
        let timeout;
        return function() {
            let context = this, args = arguments;
            let later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    let sliderImages = document.querySelectorAll('.slide-in');
    
    function checkSlide(e) {
        // console.count(e) wird sehr häufig geloggt -> Performance wird evtl. fragwürdig -> deswegen fkt debounce
        //console.log(window.scrollY)
        sliderImages.forEach(sliderImage => {
            // let slideInAt = window.scrollY + window.innerHeight; ergibt den untersten Teil der gerade anzeigt wird
            let slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2 ; // = Mitte des Bildes -> runter

            // wie weit von oben und oben entfernt plus Höhe des Bildes ergibt unten vom Bild -> rauf:
            let imageBottom = sliderImage.offsetTop + sliderImage.height;
            let isHalfShown = slideInAt > sliderImage.offsetTop;
            let isNotScrolledPast = window.scrollY < imageBottom;

            if(isHalfShown && isNotScrolledPast) {
                sliderImage.classList.add('active');
            }else{
                sliderImage.classList.remove('active');
            }

        })
    }

    window.addEventListener('scroll', debounce(checkSlide)); //siehe Kommentar in checkSlide

});