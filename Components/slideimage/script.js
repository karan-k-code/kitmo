let currentIndex = 0;
let startX = 0; // Starting X position
let currentX = 0; // Current touch position
let isDragging = false;

const slider = document.getElementById("slider");
const slides = slider.querySelector(".slides");
const totalSlides = slides.children.length;

// Show the current slide based on the index
function showSlide(index) {
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * 100; // Slide width is 100%
  slides.style.transform = `translateX(${offset}%)`;
  slides.style.transition = "transform 0.3s ease-in-out";
}

// Start the swipe gesture
slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
  slides.style.transition = "none"; // Disable smooth transition during drag
});

// Track the swipe gesture
slider.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  currentX = e.touches[0].clientX;
  const deltaX = currentX - startX;
  const offset = -currentIndex * slider.offsetWidth + deltaX;
  slides.style.transform = `translateX(${offset}px)`;
});

// End the swipe gesture
slider.addEventListener("touchend", (e) => {
  if (!isDragging) return;
  isDragging = false;
  const deltaX = currentX - startX;

  // Determine if swipe distance is significant to change slides
  if (deltaX > 50) {
    showSlide(currentIndex - 1); // Swipe right, go to the previous slide
  } else if (deltaX < -50) {
    showSlide(currentIndex + 1); // Swipe left, go to the next slide
  } else {
    showSlide(currentIndex); // Not enough movement, stay on current slide
  }
});

// Initialize the slider
showSlide(currentIndex);
