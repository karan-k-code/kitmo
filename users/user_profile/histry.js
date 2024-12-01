const genhistry = async () => {
  let history = [];
  const histrys = document.getElementById("histrys");
  const url = urls + "/histry/histry";
  const response = await apiCallGet(url);

  console.log(response);

  if (response.data.lenght !== 0) {
    histrys.innerHTML = response.data
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
