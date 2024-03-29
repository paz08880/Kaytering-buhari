const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entery) => {
        if(entery.isIntersecting){
            entery.target.classList.add('show-animation');
        }else{
            entery.target.classList.remove('show-animation');
        }
    })
})

const leftFadeAnim = document.querySelectorAll('.leftFade');
leftFadeAnim.forEach((element) => {
    observer.observe(element);
})

const fade = document.querySelectorAll('.fade');
fade.forEach((element) => {
    observer.observe(element);
})


const righFade = document.querySelectorAll('.righFade');
righFade.forEach((element) => {
    observer.observe(element);
})

var header = document.querySelector('header');

if (header) {
    var sticky = header.offsetTop;

    function stickyNavbar() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    window.addEventListener('scroll', stickyNavbar);
}