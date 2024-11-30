const likes = document.getElementById("likes");

const ganretLikes = async () => {
  const url = urls + "/likes/all_likes";
  const response = await apiCallGet(url);

  if (response.data.lenght !== 0) {
    likes.innerHTML = response.data
      .map((x) => {
        const { _id, productName, productPrice, productDescription, image } = x;
        return `<div class="product box_shadow box_no_dark_shadow">
          <img src="${image[0].img}" alt="" srcset="" onclick="goo('${_id}')" />
          <div class="dec">
        <p>${productDescription}</p>
          </div>
        </div>`;
      })
      .join("");
  }
};
