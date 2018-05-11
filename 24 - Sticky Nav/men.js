let nav = document.getElementById('main')
let topOfNav = nav.offsetTop


function fixNav() {
    //console.log(topOfNav, window.scrollY)
    if(window.scrollY >= topOfNav){
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('nav-fixed')
    }else{
        document.body.style.paddingTop = 0;
        document.body.classList.remove('nav-fixed')
    }
}

window.addEventListener('scroll', fixNav)