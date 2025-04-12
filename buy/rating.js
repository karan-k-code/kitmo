const show_review = document.getElementById("show_review");

const ratingdata = [
  {
    _id: "sfhkhnvfweuh13",
    rating: 5,
    review: "This is a great product. I love it.",
    time: "today",
    user: "John3994",
  },
  {
    _id: "sfhkhfwlkxeuh13",
    rating: 3,
    review: "This is a great product. I love it.",
    time: "today",
    user: "John3994",
  },
  {
    _id: "sfhkhfxvxvweuh13",
    rating: 2,
    review: "This is a great product. I love it.",
    time: "today",
    user: "John3994",
  },
  {
    _id: "sfhkhfbbbweuh13",
    rating: 5,
    review: "This is a great product. I love it.",
    time: "today",
    user: "John3994",
  },
  {
    _id: "sfhkhfweffuh13",
    rating: 1,
    review: "This is a great product. I love it.",
    time: "today",
    user: "John3994",
  },
  {
    _id: "sfhkhfsfsfvweuh13",
    rating: 3,
    review: "This is a great product. I love it.",
    time: "today",
    user: "John3994",
  },
  {
    _id: "sfhkhfweusfh13",
    rating: 1,
    review:
      "This is a great product. I love it thisf sfisf thisf shfishf sfhshfhih fshfihsfih sifhishf fshfishfih shfishfihhf sfishfhfihfhfshkh fhsffhkjhfs  karan goo .",
    time: "today",
    user: "John3994",
  },
  {
    _id: "sfhkhfweuh13fs",
    rating: 4,
    review: "This is a great product. I love it.",
    time: "today",
    user: "John3994",
  },
  {
    _id: "sfhkhfweuh1323",
    rating: 2,
    review: "This is a great product. I love it.",
    time: "today",
    user: "John3994",
  },
  {
    _id: "sfhkhfweh13",
    rating: 3,
    review: "This is a great product. I love it.",
    time: "today",
    user: "John3994",
  },
  {
    _id: "sfhkhfweuh13e2",
    rating: 1,
    review: "This is a great product. I love it.",
    time: "today",
    user: "John3994",
  },
];

const genRatingAndReview = () => {
  const review_box = document.getElementById("review_box");
  return (review_box.innerHTML = ratingdata
    .map((x) => {
      let { _id, rating, review, time, user } = x;

      //   const imageUrl = image[0].img;
      //   const imageUr = imageUrl.replace("http://", "https://");

      return `
          <div class="review" onclick="showandclosereview()">
                  <img src="../image/userimage.jpg" alt="">
                  <div class="review_w">
                    <div class="rating">
                      <span><i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                      </span>
                      <span class="time">
                        ${time}
                      </span>

                    </div>
                    <div class="review_text">
                    ${review}
                    </div>
                  </div>
                </div>
            `;
    })
    .join(""));
};

genRatingAndReview();

const close_review = () => {
  show_review.style.display = "none";
};

const showandclosereview = () => {
  if (show_review.style.display == "flex") {
    show_review.style.display = "none";
    document.body.classList.remove("disabled");
  } else {
    show_review.style.display = "flex";
    document.body.classList.add("disabled");
  }
};

const showReviewFun = () => {
  show_review.style.display = "flex";
};

// close_review();

function adjustHeight(textarea) {
  textarea.style.height = "auto"; // Reset height
  textarea.style.height = textarea.scrollHeight + "px"; // Set height based on content
}

const closer_rev_btn_i = () => {
  const image_video_review = document.getElementById("image_video_review");
  if (image_video_review.style.display == "flex") {
    image_video_review.style.display = "none";
    document.body.classList.remove("disabled");
  } else {
    image_video_review.style.display = "flex";
    document.body.classList.add("disabled"); // Deactivate body
  }
};
