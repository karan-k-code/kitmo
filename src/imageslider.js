let currentSlide = 0;




function changeSlide(direction) {
  const slides = document.querySelector('.imgslide');
  const totalSlides = document.querySelectorAll('.slide').length;
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  console.log(currentSlide);
  // buyshop()
  // Update the slide position
  slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

// Auto-slide every 5 seconds
// setInterval(() => {
//   changeSlide(1);
// }, 5000);
