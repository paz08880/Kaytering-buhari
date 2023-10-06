const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("showAnim");
    $('ul').toggleClass('showUl');
})