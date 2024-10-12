let currentSlide = 0;
const slides = document.querySelector('.imgslide');
const totalSlides = document.querySelectorAll('.image1').length;
let slBox =document.getElementById("slbox")
function changeSlide(direction) {
  
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides-1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  // console.log(currentSlide);
  slides.style.transform = `translateX(${-currentSlide * 100}%)`;
  current();
}

// Auto-slide every 5 seconds
setInterval(() => {
  changeSlide(1);
}, 5000);


for(let i =1; i<=totalSlides ; i++){
  slBox.innerHTML+=`<span class="obox"></span>`
}


let current =()=>{
  if(slides){
    let radioC = slBox.children[currentSlide];
    let valeD = radioC.offsetParent.children[currentSlide];
    valeD.classList.add("curent");
    let count = currentSlide+1;
    let valeF = radioC.offsetParent.children[currentSlide-1]
    let valeE = radioC.offsetParent.children[count]
    
    let valeG = radioC.offsetParent.children[totalSlides-1]
  
    if (currentSlide) {
      valeF.classList.remove("curent");
    }
    
      if (totalSlides<count) {
        valeE.classList.remove("curent");
      }else if(currentSlide===0){
        valeG.classList.remove("curent")
      }
      
  }
}

current();
