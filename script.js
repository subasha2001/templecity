
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 2500);
}

function moveSlide(n) {
  slideIndex += n;
  if (slideIndex > slides.length) {slideIndex = 1}    
  if (slideIndex < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex - 1].style.display = "block";  
}
function openNavBar(){
  if(document.getElementById("nav-bar").classList.contains('alive-nav')){
    document.getElementById("nav-bar").classList.remove('alive-nav');
  }else{
    document.getElementById("nav-bar").classList.add('alive-nav');
  }
}

showSlides();
AOS.init();

gsap.from('.logo', { duration: 1, x: '-100%'})
