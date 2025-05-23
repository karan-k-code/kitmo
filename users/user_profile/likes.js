const likes = document.getElementById("likes");

const ganretLikes = async () => {
  const url = urls + "/likes/alllikes";
  const response = await apiCallGet(url);

  if (response?.data.lenght !== 0) {
    likes.innerHTML = response.data
      .map((x) => {
        const { _id, image } = x;

        const imageUrl = image[0].img;

        const imageUr = imageUrl.replace("http://", "https://");

        return `<div class="product box_shadow box_no_dark_shadow">
          <img src="${imageUr}" onclick="goo('${_id}')" />
           <div class="btns">
           <i class="fa-solid fa-heart" id="like-ture" onclick="unlike('${_id}')"></i>
          </div>
        </div>`;
      })
      .join("");
  } else {
    likes.innerHTML = `<p>No Likes</p>`;
  }
};

// ! delete histry one product
const unlike = async (id) => {
  // ? id mins product id

  const url = urls + "/likes/like/" + id;
  await apiCallGet(url);

  ganretLikes();
};
