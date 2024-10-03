const slider = document.querySelector('.imgslide');

let isDragging;
let start;
let end;
let valueD;


slider.addEventListener('touchstart', startPosition);
slider.addEventListener('touchmove', drag);
slider.addEventListener('touchend', endPosition);


function startPosition(e) {
    isDragging = true
    start = getPositionX(e);
}


function drag(e) {
    end = getPositionX(e);
    valueD = end - start;
}

function endPosition() {
    isDragging = false;

   if(valueD >= 100){
    changeSlide(-1)
    valueD=' ';
   }else if(valueD <= -100){

    changeSlide(1)
    valueD = '';
   }
}


function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}