const genhistry = async () => {
  const histrys = document.getElementById("histrys");
  const url = urls + "/histry/histry";
  const response = await apiCallGet(url);

  if (response?.data) {
    //check if there is a data object
    const validData = response?.data.filter(
      (x) => x && x._id && x.image && x.image.length > 0 && x.image[0].img
    );
    // Filter to remove null, undefined, and objects that are missing _id or image or image.length is 0 or image[0].img is missing
    if (validData?.length > 0) {
      return (histrys.innerHTML = validData
        .map((x) => {
          const { _id, image } = x;
          const imageUrl = image[0].img;
          const imageUr = imageUrl.replace("http://", "https://");

          return `<div class="product box_shadow box_no_dark_shadow">
            <img src="${imageUr}" onclick="goo('${_id}')" />
            <div class="btns">
              <button onclick="deletehistry('${_id}')">remove</button>
            </div>
          </div>`;
        })
        .join(""));
    } else {
      return (histrys.innerHTML = "No history to display.");
    }
  } else {
    return (histrys.innerHTML = "No history to display.");
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
