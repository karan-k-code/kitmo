// ! this search area code

let shop = document.getElementById("shop");

let submitForm = () => {
  // Get form input values

  let select;
  let valA = document.getElementById("searchSelect").value;
  let valB = document.getElementById("transcript").value;

  let sentenceCase = valB.charAt(0).toUpperCase() + valB.slice(1).toLowerCase();
  console.log(sentenceCase);

  // ! shop item gennerateshop funcation
  let generateShopf = async () => {
    let filterData;
    valC = shopItamsData.filter((x) => x.catgory === select);
    valN = shopItamsData.filter((x) => x.name === select);

    console.log(select);

    console.log(valN);
    console.log(valC);
    if (valC.length !== 0) {
      filterData = valC;
    } else if (valN !== 0) {
      filterData = valN;
    }

    let sle = filterData.slice(0, 16);

    return (shop.innerHTML = await sle
      .map((x) => {
        let { id, name, price, desc, img } = x;
        let search = basket.find((x) => x.id === id) || [];
        return `
          <div class="box option_b dark_box nav_light" id="producat_id_${id}" >
              
              <div class="itam_img" onclick="goo(${id})">
              <img src="${img}">
              </div>
              <div class="itam_detelas">
                  <div class="itam_price">
                      $${price}
                  </div>
                  <div class="desc">
                      ${desc}
                  </div>
              </div>
              <div class="shop_box dark_box nav_light" >
                  <div class="add_cart " onclick="addcart(${id})">
                  <b>ADD CART</b></div>
                  <div id="${id}">
                  </div>
                  <div class="buy" onclick="goo(${id})" ><b>BUY</b></div>
              </div>
          </div>`;
      })
      .join(""));
  };

  if (valA !== "All") {
    select = valA;
    generateShopf();
    big_container.style.display = "none";
  } else if (valB !== "") {
    select = sentenceCase;
    generateShopf();
    big_container.style.display = "none";
  } else {
    generateShop();
    big_container.style.display = "none";
  }
};
