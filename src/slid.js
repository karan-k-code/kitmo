const slider = document.querySelector('.imgslide');

let isDown = false;
let startX;
let scrollLeft;
let currentTranslate;
let cu;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    // prey.innerText= ++scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
});

slider.addEventListener('touchstart', startPosition);
slider.addEventListener('touchmove', drag);
slider.addEventListener('touchend', endPosition);

let pre = document.getElementById("pre");
let prey = document.getElementById("prey");
let prex = document.getElementById("prex");

function startPosition(e) {
    pre.innerText=e;
    isDragging = true;
    startPos = getPositionX(e);
    startX = e.pageX - slider.offsetLeft;


}

function drag(e) {
    const currentPosition = getPositionX(e);
    const walk = currentPosition - startPos;
    currentTranslate = walk;
    // console.log(walk)
  
}

function endPosition() {
    isDragging = false;
    prevTranslate = currentTranslate;
    
    console.log("startpos", startPos)
    console.log("dic",currentTranslate)
   if(currentTranslate > startPos){
    changeSlide(-1)
   }else if(currentTranslate < startPos){
    
    changeSlide(1)
   }
}


function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`;
}



