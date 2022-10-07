


//carousel
const carousel = document.querySelector('.carousel');
const carouselButton = document.querySelector('.control-button');
const carouselControl = document.querySelector('.carousel-controls')
const carouselDots = Array.from(carouselControl.children)
const carouselItems = Array.from(carousel.children)
console.log(carousel)


carouselControl.addEventListener('click', e => {
  const targetButton = e.target.closest('.control-button')
  if(targetButton){
    let targetIndex = carouselDots.findIndex(cur => cur === targetButton);
    let currentButton = document.querySelector('.control-button-active');
    let currentItem = document.querySelector('.aactive');
    currentButton.classList.remove('control-button-active');
    carouselDots[targetIndex].classList.add('control-button-active');
    currentItem.classList.remove('aactive')
    carouselItems[targetIndex].classList.add('aactive')
    console.log(carouselItems[targetIndex])
  }
})

//nav 
const burger = document.querySelector('.burger')
const nav = document.querySelector('.navul')
burger.addEventListener('click' , () => {
  nav.classList.toggle('active');
  burger.classList.toggle('bActive')
})

//scroll
let limit = document.body.scrollHeight; 
const top1 = document.querySelector('.top')
let scroll1Y = window.scrollY;
function scrollEV() {
 limit = document.body.scrollHeight, 
   scroll1Y = window.scrollY;
   if(scroll1Y > 100){
    nav.classList.remove('active');
    burger.classList.remove('bActive');
    top1.style = "transform: translateY(0);"
    if(scroll1Y >= (limit - 800)){
      top1.style = "transform: translateY(-57%);  "
    }
   }else{
    top1.style = ""
   }
   reveal() 
}
window.onscroll = scrollEV
reveal() 
//rev

function reveal() {
  const reveals = document.querySelectorAll(".rev");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("revive");
    } else {
      reveals[i].classList.remove("revive");
    }
  }
}
//img popup
const gallery = document.querySelector(".gallery")
const popup = document.querySelector(".popup")
const cross = document.querySelector(".cross")
const galI = Array.from(gallery.children)

cross.addEventListener("click", () => {
  popup.classList.remove('pop');
})
gallery.addEventListener("click", e => {
  const Gtarget = e.target.closest('.gallery-item')
  if (Gtarget){
  const Itarger = galI.findIndex(galler => galler === Gtarget)
  popup.classList.add("pop")
  const popIMG = popup.querySelector(".img-upscale")
  popIMG.querySelector('img').src = galI[Itarger].querySelector("img").src
  }
})