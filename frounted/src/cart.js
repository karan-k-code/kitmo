let cart_y = document.getElementById("cart_y");
let not_cart = document.getElementById("not_cart");
let label1 = document.getElementById("chekout");
// ! basket
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateCartItem = () => {
  if (basket.length !== 0) {
    return (cart_y.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItamsData.find((y) => y.id === id) || [];
        return `
    <div class="cart_box" id="cantenr_cart_item">
              <div
                class="image_cart"
                style="background-image: url('${search.img}')"
              ></div>
              <div class="title_itam">
                <h2>${search.name}</h2>
                <div class="itam_dec">
                  ${search.desc}
                </div>
              </div>
              <div class="price_deleat">
              <div class="delete_itam" onclick="removeItem(${id})"><i class="fa-solid fa-xmark"></i></div>
              <div class="price_itam" ><b>
                $ ${search.price} </b>
                <div class="quantity_box">
                  <div class="decremet" onclick="decrement('${id}')">-</div>
                  <div class="quantity" id="${id}">${item}</div>
                  <div class="increment" onclick="increment('${id}')">+</div>
                </div>
                <div class="delete_itam"> <b>$ ${item * search.price} </b></div>
              </div>
              </div>
            </div>
      `;
      })
      .join(""));
  } else {
    not_cart.innerHTML = `
            <div class="add_cart1"><H1>Add cart</H1></div>
            <div class="cart_image">
              <img src="image/cartimage.jpeg" alt="">
            </div>
            <!-- !todaydeals -->
            <div class="todaydeals">
              <h2>Today's Deals</h2>
              <h2>shop now</h2>
            </div>
            <!-- ! THIS IS ITAM box -->
            <div class="cantenr" id="shop">`;
  }
};

generateCartItem();

// !increment
let increment = (id) => {
  let selecteItam = id;
  let search = basket.find((x) => x.id === id);
  if (search === undefined) {
    basket.push({
      id: selecteItam.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  update(id);
  generateCartItem();
  localStorage.setItem("data", JSON.stringify(basket));
};

// ! decrement
let decrement = (id) => {
  let selecteItam = id;
  let search = basket.find((x) => x.id === id);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(basket));
  generateCartItem();
  totalAmount();
  update(id);
};

// ! update
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  totalAmount();
  calculation();
};

// ! calculat
let calculation = () => {
  let total_item = document.getElementById("total_item");
  total_item.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

// ! shop item gennerateshop funcation
let generateShop = () => {
  return (shop.innerHTML = shopItamsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
        <div class="box option_b dark_box nav_light" id="producat_id_${id}">
            <div class="itam_name dark_box nav_light">
                <h3>${name}</h3>
            </div>
            <div class="itam_img" style="background-image:url('${img}')">
            </div>
            <div class="itam_detelas">
                <div class="itam_price">
                    $ ${price}
                </div>
                <div class="desc">
                    ${desc}
                </div>
            </div>
            <div class="shop_box dark_box nav_light" >
                <div class="add_cart option_b" onclick="increment(${id})">
                <b>ADD CART</b></div>
                <div id="${id}">
                </div>
                <div class="buy option_b" onclick="decrement(${id})" ><b>BUY</b></div>
            </div>
        </div>`;
    })
    .join(""));
};

// ! remove item

let removeItem = (id) => {
  let selecteItam = id;
  basket = basket.filter((x) => x.id !== selecteItam.id);
  generateCartItem();
  totalAmount();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

// ! total amount

let totalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItamsData.find((y) => y.id === id) || [];
        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);

    label1.innerHTML = `
          <div>
            <div class="total_item_text">total item :</div>
            <div class="total_item" id="total_item"></div>
            <div class="total_price_text">total amount :  <b>$ ${amount} </b></div>
          </div>
          <div class="chackoutbtn">
          <button onclick="checkout()">chackout</button>
          </div>
      `;
  } else {
    generateShop();
  }
};

let checkout = ()=>{
  if(basket.length !== 0){
    alert("place wait for update")
  }else{
    alert("please add item to chackout")
  }
}

totalAmount();
calculation();
