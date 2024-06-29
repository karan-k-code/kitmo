let basket = JSON.parse(localStorage.getItem("data")) || [];
let cantenr_price = document.getElementById("big_cart_cantenr");
let cart_y = document.getElementById("cart_y");
let not_cart = document.getElementById("not_cart");

let generateCartItem = () => {
  if (basket.length !== 0) {
    return (cart_y.innerHTML = basket.map((x) => {
      return `
    <div class="cart_box" id="cantenr_cart_item">
              <div
                class="image_cart"
                style="background-image: url('image/cup.jpeg')"
              ></div>
              <div class="title_itam">
                <h1>cup hkjdf</h1>
                <div class="itam_dec">
                  jahkjhfak fdfhkhkakshuhsiahhd dffhhafuukadhdhafu iusahfihausdh
                  jhdajhjfa <br />
                  jfdjkjdf fjkasjkljld ddkjdf jf <br />
                  jkdjkaskhjashjfhfjka karakjj jasjj ssdfjj
                </div>
              </div>
              <div class="price_itam">
                itam price 28
                <div class="quantity_box">
                  quantity
                  <div class="decremet">-</div>
                  <div class="quantity">0</div>
                  <div class="increment">+</div>
                </div>
                total quantity price 500
              </div>
            </div>
      `;
    }));
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

// ! calculat
let calculation = () => {
  let cartIcon = document.getElementById("total_item");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
