// script.js
document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");
  const selectedRating = document.getElementById("selected-rating");
  const reviewText = document.getElementById("review-text");
  const submitButton = document.getElementById("submit-review");
  const reviewsList = document.getElementById("reviews");

  let currentRating = 0;

  // Star rating logic
  stars.forEach((star) => {
    star.addEventListener("click", function () {
      const value = parseInt(star.getAttribute("data-value"));
      currentRating = value;
      selectedRating.textContent = value;

      stars.forEach((s) => {
        s.classList.remove("active");
        if (parseInt(s.getAttribute("data-value")) <= value) {
          s.classList.add("active");
        }
      });
    });
  });

  // Submit review logic
  submitButton.addEventListener("click", function () {
    const review = reviewText.value.trim();
    if (review === "") {
      alert("Please write a review before submitting.");
      return;
    }

    if (currentRating === 0) {
      alert("Please select a rating before submitting.");
      return;
    }

    // Add the review to the list
    const reviewItem = document.createElement("li");
    reviewItem.innerHTML = `
        <strong>${currentRating} stars:</strong> ${review}
      `;
    reviewsList.appendChild(reviewItem);

    console.log(reviewText.value, currentRating); // Log the review and rating

    // Clear the form
    reviewText.value = "";
    stars.forEach((star) => star.classList.remove("active"));
    selectedRating.textContent = "0";
    currentRating = 0;
  });
});
