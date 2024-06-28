let shop = document.getElementById("shop");
/* product data and image */

let shopItamsData = [
  {
    id: "headphones",
    name: "headphones",
    price: 22,
    desc: "this is boat headphones",
    img: "image/headphone.jpeg",
  },
  {
    id: "goggles",
    name: "goggles",
    price: 9,
    desc: "stylish goggles new year",
    img: "image/goggles.jpeg",
  },
  {
    id: "short",
    name: "short",
    price: 25,
    desc: "stylish short for man",
    img: "image/short.jpeg",
  },
  {
    id: "jeans",
    name: "jeans",
    price: 30,
    desc: "boy jeans so prime",
    img: "image/jeans.jpeg",
  },
  {
    id: "cup",
    name: "cup",
    price: 9,
    desc: "this is stylish cup",
    img: "image/cup.jpeg",
  },
  {
    id: "iPhone",
    name: "mobile",
    price: 999,
    desc: "iPhone 15 pro max",
    img: "image/iphone.jpg",
  },
];
/* show data to display */
let generateShop = () => {
  return (shop.innerHTML = shopItamsData
    .map((x) => {
      let { id, name, price, desc, img } = x;

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
                <div id="${id}">0</div>
                <div class="buy option_b" onclick="decrement(${id})" ><b>BUY</b></div>
            </div>
        </div>`;
    })
    .join(""));
};

generateShop();
// ! basket
let basket = JSON.parse(localStorage.getItem("data")) || [];
// !increment
let increment = (id) => {
  let selecteItam = id;
  let search = basket.find((x) => x.id === selecteItam.id);
  if (search === undefined) {
    basket.push({
      id: selecteItam.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  localStorage.setItem("data", JSON.stringify(basket));
  update(selecteItam.id);
};

// ! decrement
let decrement = (id) => {
  let selecteItam = id;
  let search = basket.find((x) => x.id === selecteItam.id);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  localStorage.setItem("data", JSON.stringify(basket));
  update(selecteItam.id);
};

// ! update
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

// ! calculat
let calculation = () => {
  // let total = basket.reduce((a, b) => a + b.item, 0);
  // let cart_no = document.getElementById("cart_no");
  // cart_no.innerHTML = total;
  let cartIcon = document.getElementById("cart_no");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
