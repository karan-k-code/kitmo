let currentSlide = 0;
const slides = document.querySelector('.imgslide');
const totalSlides = document.querySelectorAll('.slide').length;
const radioImg = document.getElementById("radio_img")


for(let i =1; i<=totalSlides; i++){
  radioImg.innerHTML += `<span class="obox"></span>`
}

function changeSlide(direction) {
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = 0;
  } else if (currentSlide >= totalSlides) {
    currentSlide = totalSlides-1;
  }

  slides.style.transform = `translateX(${-currentSlide * 100}%)`;
  current()
  
}


// Auto-slide every 5 seconds
// setInterval(() => {
//   changeSlide(1);
// }, 5000);


let current =()=>{
  if(slides){
    let radioC = radioImg.children[currentSlide];
    let valeD = radioC.offsetParent.children[currentSlide];
    valeD.classList.add("curent");
    let count = currentSlide+1;
    let valeF = radioC.offsetParent.children[currentSlide-1]
    let valeE = radioC.offsetParent.children[count]
  
    if (currentSlide) {
      valeF.classList.remove("curent");
    }
    if(count){
      if (totalSlides>count) {
        valeE.classList.remove("curent");
      }
    }
  }
}

current();
