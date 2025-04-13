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
                  <div class="user_name">${user}</div>
                    <div class="rating">
                      <span>
                      ${genStar(rating)}
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

const genStar = (star) => {
  let stt = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= star) {
      stt += `<i class="fa-solid fa-star"></i>`;
    } else {
      stt += `<i class="fa-regular fa-star"></i>`;
    }
  }
  return stt;
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

const showReviewFun = (reviewId) => {
  show_review.style.display = "flex";
};

// close_review();

function adjustHeight(textarea) {
  textarea.style.height = "auto"; // Reset height
  textarea.style.height = textarea.scrollHeight + "px"; // Set height based on content
}

// review image show and close funcation
const closer_rev_btn_i = (review_id) => {
  const image_video_review = document.getElementById("image_video_review");
  if (image_video_review.style.display == "flex") {
    image_video_review.style.display = "none";
    document.body.classList.remove("disabled");
  } else {
    image_video_review.style.display = "flex";
    document.body.classList.add("disabled"); // Deactivate body
    show_image_review_G(review_id);
  }
};

// review image and video show gen
const show_image_review_G = (review_id) => {
  const image_video_review = document.getElementById("image_video_review");

  const reviewdd = image_ddd.find((x) => x._id == review_id);
  const { _id, img, video, user_img, user_name, date, review, star } = reviewdd;

  return (image_video_review.innerHTML = `
  <div class="imgOrvideo">
                <img src="../image/skirt.jpg" alt="" srcset="">
              </div>
              <div class="user_or_comment">
                <div class="user_i"><img src="../image/userimage.jpg" alt="" srcset=""></div>

                <div class="coo_bbb">
                  <div class="user_name">${user_name}</div>
                  <div class="star_and_date">
                    <span>${star_black_white(star)}</span>
                    <span>${date}</span>
                  </div>
                  
                    <i class="fa-solid fa-xmark" onclick="closer_rev_btn_i()"></i>
                 
                  <div class="comment_r">
                    <p>${review}</p>
                  </div>
                  <div class="like_comm_shear">
                    <span><i class="fa-regular fa-thumbs-up"></i></span>
                    <div>
                    <textarea name="coll" id="autoTextarea" oninput="adjustHeight(this)" placeholder="comment"></textarea>
                     <span>
                      
                     </span>
                    </div>
                    <span><i class="fa-solid fa-share-nodes"></i></span>
                  </div>
                </div>

               
              </div>
              <div class="like_comm_shear">
                <span><i class="fa-regular fa-thumbs-up"></i></span>
                <div>
                <textarea name="coll" id="autoTextarea" oninput="adjustHeight(this)" placeholder="comment"></textarea>
                 <span>
                  
                 </span>
                </div>
                <span><i class="fa-solid fa-share-nodes"></i></span>
              </div>
  `);
};

// gen all review image and video

const image_ddd = [
  {
    _id: "623447684fjhfjk",
    video: "",
    img: "",
    review: "djflkjsdflj",
    star: "1",
    date: "to day",
    user_name: "jon the don ",
    user_img: "../image/userimage.jpg",
  },
  {
    _id: "623447684fjjk",
    video: "",
    img: "",
    review: "thie dfslkjlsfdkj",
    star: "3",
    date: "to day",
    user_name: "dont know ",
    user_img: "../image/userimage.jpg",
  },
  {
    _id: "62344dkhgk68fjhfjk",
    video: "",
    img: "",
    review: "thienf sdflks sfjljl sdfdlkjj s",
    star: "2",
    date: "to day",
    user_name: "karan",
    user_img: "../image/userimage.jpg",
  },
  {
    _id: "62344gkdjhfjk",
    video: "",
    img: "",
    review: "thie nonn to day boy paly",
    star: "5",
    date: "to day",
    user_name: "kon ho ",
    user_img: "../image/userimage.jpg",
  },
];

const gen_review_img_video = () => {
  const gen_all_img_video = document.getElementById("gen_all_img_video");

  gen_all_img_video.innerHTML = image_ddd
    .map((x) => {
      const { _id, img, video, user_img, user_name, date, review, star } = x;

      return `<div class="revii" onclick="closer_rev_btn_i('${_id}')">
                  <img src="../image/s24.jpg" alt="" srcset="">
                  <span>${star_black_white(star)}</span>
                </div>`;
    })
    .join("");
};

// gen black and white star
const star_black_white = (star) => {
  let stt = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= star) {
      stt += `★`;
    } else {
      stt += `☆`;
    }
  }
  return stt;
};

gen_review_img_video();
