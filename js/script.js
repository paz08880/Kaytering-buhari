const hamburger = document.getElementById("hamburger");
const backToTop = document.getElementById('myBtn');
const phone = document.getElementById('phone');

hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("showAnim");
    $('ul').toggleClass('showUl');
})




window.onscroll = function() {
   scrollFunction()
};

function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       backToTop.style.display = "flex";
       phone.style.display = "flex";

   } else {
       backToTop.style.display = "none";
       phone.style.display = "none";
   }
}

function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}

