const hamburger = document.getElementById("hamburger");
const backToTop = document.getElementById('myBtn');
const phoneIcon = document.getElementById('phone');

hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("showAnim");
    $('ul').toggleClass('showUl');
})


$('#js-tilt').tilt({
    glare: true,
    maxGlare: .1,
})



window.onscroll = function() {
   scrollFunction()
};

function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       backToTop.style.display = "flex";
       phoneIcon.style.display = "flex";

   } else {
       backToTop.style.display = "none";
       phoneIcon.style.display = "none";
   }
}

function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}

