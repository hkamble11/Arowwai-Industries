// Slide Animatioon

let btn = document.getElementsByClassName("btn");
let slide = document.getElementById("slide");

btn[0].onclick = function () {
  slide.style.transform = "translateX(0px)";
  for (let i = 0; i < 4; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[1].onclick = function () {
  slide.style.transform = "translateX(-800px)";
  for (let i = 0; i < 4; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[2].onclick = function () {
  slide.style.transform = "translateX(-1600px)";
  for (let i = 0; i < 4; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[3].onclick = function () {
  slide.style.transform = "translateX(-2400px)";
  for (let i = 0; i < 4; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
//------------------------------

// Revel Animation
const revealElements = document.querySelectorAll("[data-reveal]");
const scrollReveal = function () {
  for (let i = 0; i < revealElements.length; i++) {
    const isElementsOnScreen =
      revealElements[i].getBoundingClientRect().top < window.innerHeight;
    if (isElementsOnScreen) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
};
window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);

// /
const hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
});
