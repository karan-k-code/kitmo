const imageslideF = () => {
  let currentIndex = 0;
  let startX = 0; // Starting X position
  let currentX = 0; // Current touch position
  let isDragging = false;

  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
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

  if (currentIndex == 0) {
    prevBtn.style.display = "none";
  }

  prevBtn.addEventListener("click", () => {
    // trackn();
    showSlide(currentIndex - 1);
    track();
  });
  nextBtn.addEventListener("click", () => {
    // trackn();
    showSlide(currentIndex + 1);
    track();
  });

  // Initialize the slider
  showSlide(currentIndex);

  for (let i = 1; i <= totalSlides; i++) {
    radioImg.innerHTML += `<input type="radio" check name="same" id="" value="${i}">`;
  }

  const track = () => {
    const fs = radioImg.childNodes[currentIndex + 1];
    fs.checked = true;
    Disable_btn();
  };

  const Disable_btn = () => {
    if (currentIndex == 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "flex";
    }
    if (currentIndex !== totalSlides - 1) {
      nextBtn.style.display = "flex";
    } else {
      nextBtn.style.display = "none";
    }
  };

  // const trackn = () => {
  //   const fs = radioImg.childNodes[currentIndex + 1];
  //   fs.checked = false;
  // };

  track();

  radioImg.addEventListener("click", (e) => {
    // trackn();
    showSlide(e.target.value - 1);
    Disable_btn();
  });

  // ! image hover change
  const imageHover = document.querySelectorAll(".hover_img");
  let image_url_c = slides.childNodes[currentIndex + 1].getAttribute("src");
  imageHover.forEach((e) => {
    // Store the mouseout handler in a variable
    const handleMouseout = () => {
      e.style.transform = "scale(1)";
      slides.childNodes[currentIndex + 1].setAttribute("src", image_url_c);
    };

    e.addEventListener("mouseover", () => {
      e.style.transform = "scale(1.1)";
      const imageUrl = e.getAttribute("src");
      slides.childNodes[currentIndex + 1].setAttribute("src", imageUrl);

      // image_url_c =
      // Restore the mouseout handler after a delay
      e.addEventListener("mouseout", handleMouseout);
    });

    e.addEventListener("mouseout", handleMouseout);

    e.addEventListener("click", () => {
      handleMouseout();
      // Temporarily remove the mouseout handler to prevent it from firing
      e.removeEventListener("mouseout", handleMouseout);
      // Perform the click action
      showSlide(e.getAttribute("value") - 1);

      track();
      image_url_c = e.getAttribute("src");
    });
  });
};
