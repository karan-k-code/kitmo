let currentSlide = 0;
function changeSlide(direction) {
  const slides = document.querySelector('.imgslide');
  const totalSlides = document.querySelectorAll('.slide').length;
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = 0;
  } else if (currentSlide >= totalSlides) {
    currentSlide = totalSlides-1;
  }

  console.log(currentSlide);
  slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

// Auto-slide every 5 seconds
// setInterval(() => {
//   changeSlide(1);
// }, 5000);
