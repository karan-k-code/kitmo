// ! this search area code

// secarch function destop and laptop and big device
let submitForm = async () => {
  // Get form input values

  let select;
  let valA = document.getElementById("searchSelect").value;
  let valB = document.getElementById("transcript").value;

  // /api/products/search?q=shirt&category=men&minPrice=10&maxPrice=100

  const searchdd = await apiCallGet(`${urls}/product/search?q=${valB}`);

  let search_hh = document.getElementById("search_hh");
  document.getElementById("main_dd").style.display = "none";

  return (search_hh.innerHTML = await searchdd
    .map((x) => {
      let {
        _id,
        productQuntity,
        productName,
        productPrice,
        productDescription,
        image,
        productCatgory,
      } = x;
      return `
          <div class="box option_b dark_box nav_light" id="producat_id_${_id}" >

              <div class="itam_img" onclick="goo('${_id}')">
              <img src="${image[0].img}">
              </div>
              <div class="itam_detelas">
                  <div class="itam_price">
                      $${productPrice}
                  </div>
                  <div class="desc">
                      ${productDescription}
                  </div>
              </div>
              <div class="shop_box dark_box nav_light" >
                  <div class="add_cart " onclick="addcart('${_id}')">
                  <b>ADD CART</b></div>
                  <div id="'${_id}'">
                  </div>
                  <div class="buy" onclick="goo('${_id}')" ><b>BUY</b></div>
              </div>
          </div>`;
    })
    .join(""));
};

// search secation moblie screen and small device
let submitForm_s = async () => {
  // Get form input values

  let select;
  let valA = document.getElementById("searchSelect").value;
  let valB = document.getElementById("transcript_s").value;

  // /api/products/search?q=shirt&category=men&minPrice=10&maxPrice=100

  const searchdd = await apiCallGet(`${urls}/product/search?q=${valB}`);

  // // ! shop item gennerateshop funcation
  // let generateShopf = async () => {
  //   let filterData;
  //   valC = shopItamsData.filter((x) => x.catgory === select);
  //   valN = shopItamsData.filter((x) => x.name === select);

  //   console.log(select);

  //   console.log(valN);
  //   console.log(valC);
  //   if (valC.length !== 0) {
  //     filterData = valC;
  //   } else if (valN !== 0) {
  //     filterData = valN;
  //   }

  //   let sle = filterData.slice(0, 16);

  //   // search?q=shirt

  let search_hh = document.getElementById("search_hh");
  document.getElementById("main_dd").style.display = "none";

  return (search_hh.innerHTML = await searchdd
    .map((x) => {
      let {
        _id,
        productQuntity,
        productName,
        productPrice,
        productDescription,
        image,
        productCatgory,
      } = x;
      return `
          <div class="box option_b dark_box nav_light" id="producat_id_${_id}" >

              <div class="itam_img" onclick="goo(${_id})">
              <img src="${image[0].img}">
              </div>
              <div class="itam_detelas">
                  <div class="itam_price">
                      $${productPrice}
                  </div>
                  <div class="desc">
                      ${productDescription}
                  </div>
              </div>
              <div class="shop_box dark_box nav_light" >
                  <div class="add_cart " onclick="addcart(${_id})">
                  <b>ADD CART</b></div>
                  <div id="${_id}">
                  </div>
                  <div class="buy" onclick="goo(${_id})" ><b>BUY</b></div>
              </div>
          </div>`;
    })
    .join(""));
};
