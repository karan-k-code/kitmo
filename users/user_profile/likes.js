const likes = document.getElementById("likes");

const ganretLikes = async () => {
  const url = urls + "/likes/alllikes";
  const response = await apiCallGet(url);

  if (response.data.lenght !== 0) {
    likes.innerHTML = response.data
      .map((x) => {
        const { _id, productName, productPrice, productDescription, image } = x;

        const imageUrl = image[0].img;

        const imageUr = imageUrl.replace("http://", "https://");

        return `<div class="product box_shadow box_no_dark_shadow">
          <img src="${imageUr}" onclick="goo('${_id}')" />
          <div class="dec">
        <p>${productDescription}</p>
          </div>
        </div>`;
      })
      .join("");
  }
};
