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
      trackn();
      showSlide(currentIndex - 1); // Swipe right, go to the previous slide
      track();
    } else if (deltaX < -50) {
      trackn();
      showSlide(currentIndex + 1); // Swipe left, go to the next slide
      track();
    } else {
      showSlide(currentIndex); // Not enough movement, stay on current slide
    }
  });

  // Initialize the slider
  showSlide(currentIndex);

  for (let i = 1; i <= totalSlides; i++) {
    radioImg.innerHTML += `<input type="radio" check name="" id="" value="${i}">`;
  }

  const track = () => {
    const fs = radioImg.childNodes[currentIndex + 1];
    fs.checked = true;
  };

  const trackn = () => {
    const fs = radioImg.childNodes[currentIndex + 1];
    fs.checked = false;
  };

  track();

  radioImg.addEventListener("click", (e) => {
    trackn();
    showSlide(e.target.value - 1);
  });

  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 5000);
};

const heroimage = [
  { img: "./image/heroiamge.png" },
  { img: "./image/heroimage2.jpg" },
  { img: "./image/hero_image.jpg" },
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

// let currentSlide = 0;
// const slides = document.querySelector(".imgslide");
// const totalSlides = document.querySelectorAll(".image1").length;
// let slBox = document.getElementById("slbox");
// function changeSlide(direction) {
//   currentSlide += direction;

//   if (currentSlide < 0) {
//     currentSlide = totalSlides - 1;
//   } else if (currentSlide >= totalSlides) {
//     currentSlide = 0;
//   }

//   // console.log(currentSlide);
//   slides.style.transform = `translateX(${-currentSlide * 100}%)`;
//   current();
// }

// Auto-slide every 5 seconds

// for (let i = 1; i <= totalSlides; i++) {
//   slBox.innerHTML += `<span class="obox"></span>`;
// }

// let current =()=>{
//   if(slides){
//     let radioC = slBox.children[currentSlide];
//     let valeD = radioC.offsetParent.children[currentSlide];
//     valeD.classList.add("curent");
//     let count = currentSlide+1;
//     let valeF = radioC.offsetParent.children[currentSlide-1]
//     let valeE = radioC.offsetParent.children[count]

//     let valeG = radioC.offsetParent.children[totalSlides-1]

//     if (currentSlide) {
//       valeF.classList.remove("curent");
//     }

//       if (totalSlides<count) {
//         valeE.classList.remove("curent");
//       }else if(currentSlide===0){
//         valeG.classList.remove("curent")
//       }

//   }
// }

// current();
