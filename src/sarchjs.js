// ! this search area code

function submitForm() {
    // Get form input values

    let select ;
    let valA  = document.getElementById("searchSelect").value;
    let valB  = document.getElementById("transcript").value;

    
    // ! shop item gennerateshop funcation
let generateShopf = async () => {

    let filterData;
    valC = shopItamsData.filter((x) =>x.catgory === select );
    valN = shopItamsData.filter((x) =>x.name === select );

    if (valC.length !== 0) {
        filterData = valC;
    } else if(valN !== 0){
        filterData = valN;
    }

    let sle = filterData.slice(0, 16)

    return (shop.innerHTML = await sle
      .map((x) => {
        let { id, name, price, desc, img } = x;
        let search = basket.find((x) => x.id === id) || [];
        return `
          <div class="box option_b dark_box nav_light" id="producat_id_${id}" >
              
              <div class="itam_img" style="background-image:url('${img}')" onclick="goo(${id})">
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

    if(valA !== 'All'){
        select = valA;
        generateShopf()

    }else if(valB !==''){
        select = valB;
        generateShopf()
    }else{
        generateShop()
    }
}


submitForm()



