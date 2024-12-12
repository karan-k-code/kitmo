const genhistry = async () => {
  const histrys = document.getElementById("histrys");
  const url = urls + "/histry/histry";
  const response = await apiCallGet(url);

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
          <div class="btns">
            <button onclick="deletehistry('${_id}')">remove</button>
          </div>
        </div>`;
      })
      .join("");
  }
};
// ! delete histry one product
const deletehistry = async (id) => {
  // ? id mins product id

  const url = urls + "/histry/delete/" + id;
  await apiCallGet(url);

  genhistry();
};

// ! delete all histry
const deleteAllhistry = async () => {
  const url = urls + "/histry/deleteall";

  await apiCallGet(url);
  genhistry();
};
