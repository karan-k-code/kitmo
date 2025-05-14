const imageslide = () => {
  let currentIndex = 0;
  let startX = 0; // Starting X position
  let currentX = 0; // Current touch position
  let isDragging = false;

  const radioImg = document.getElementById("radio_img");
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
      // trackn();
      showSlide(currentIndex - 1); // Swipe right, go to the previous slide
      track();
    } else if (deltaX < -50) {
      // trackn();
      showSlide(currentIndex + 1); // Swipe left, go to the next slide
      track();
    } else {
      showSlide(currentIndex); // Not enough movement, stay on current slide
    }
  });

  for (let i = 1; i <= totalSlides; i++) {
    radioImg.innerHTML += `<input type="radio" check name="same" id="" value="${i}">`;
  }

  const track = () => {
    const fs = radioImg.childNodes[currentIndex];
    fs.checked = true;
  };

  // const trackn = () => {
  //   const fs = radioImg.childNodes[currentIndex];
  //   fs.checked = false;
  // };

  // Initialize the slider
  showSlide(currentIndex);

  track();

  radioImg.addEventListener("click", (e) => {
    // trackn();
    showSlide(e.target.value - 1);
    track();
  });

  setInterval(() => {
    // trackn();
    showSlide(currentIndex + 1);
    track();
  }, 5000);
};

const heroimage = [
  { img: "./image/pexels-mingche-lee-2072368-14097746.jpg" },
  { img: "./image/pexels-max-fischer-5868738.jpg" },
  { img: "./image/pexels-shkrabaanthony-5264897.jpg" },
  { img: "./image/pexels-laura-james-6097877.jpg" },
  { img: "./image/pexels-gustavo-fring-4173321.jpg" },
];

const genneratImageDiv = () => {
  const imageG = document.getElementById("imageG");
  return (imageG.innerHTML += heroimage
    .map((x) => {
      return `<img src="${x.img}" alt="Slide 1" />`;
    })
    .join(""));
};

(async function first() {
  await genneratImageDiv();
  imageslide();
})();
