let cart_y = document.getElementById("cart_y");
let not_cart = document.getElementById("not_cart");
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
                <h1>${search.name}</h1>
                <div class="itam_dec">
                  ${search.desc}
                </div>
              </div>
              <div class="price_itam">
                $ ${search.price}
                <div class="quantity_box">
                  <div class="decremet" onclick="decrement('${id}')">-</div>
                  <div class="quantity" id="${id}">${item}</div>
                  <div class="increment" onclick="increment('${id}')">+</div>
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
  update(id);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(basket));
  generateCartItem();
};

// ! update
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

// ! calculat
let calculation = () => {
  let total_item = document.getElementById("total_item");
  total_item.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
