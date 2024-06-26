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
        <div class="box option_b dark_box nav_light" id="${id}">
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
                <div class="add_cart option_b" id="${id}">
                <b>ADD CART</b></div>
                <div class="buy option_b" id="${id}" ><b>BUY</b></div>
            </div>
        </div>`;
    })
    .join(""));
};

generateShop();

export { shopItamsData };
