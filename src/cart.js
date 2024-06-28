let basket = JSON.parse(localStorage.getItem("data")) || [];
console.log(basket);
let cart_cantener = document.getElementById("cantenr_cart_item");

// ! calculat
let calculation = () => {
  // let total = basket.reduce((a, b) => a + b.item, 0);
  // let cart_no = document.getElementById("cart_no");
  // cart_no.innerHTML = total;
  let cartIcon = document.getElementById("total_item");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItem = () => {
  if (basket.length !== 0) {
    console.log("cart is not empty");
  } else {
    console.log("cart is empty");
  }
};

generateCartItem();
