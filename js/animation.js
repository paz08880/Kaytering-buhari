const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entery) => {
        //console.log(entery);
        if(entery.isIntersecting){
            entery.target.classList.add('showleftFade');
        }else{
            entery.target.classList.remove('showleftFade');
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


const rightFadeAnim = document.querySelectorAll('.rightFadeAnim');
fade.forEach((element) => {
    observer.observe(element);
})