let big_container = document.getElementById("big_container");

// ! basket
let basket = JSON.parse(localStorage.getItem("data")) || [];

// ! checkout
let buyItam = JSON.parse(localStorage.getItem("databuy")) || [];

// ! home page

homePage = () => {
  window.location.href = "index.html";
};

let imageArry;

// ! shop item gennerateshop funcation
let buyshop = async () => {
  const productId = getQueryParam("id");
  const product = await findProduct(productId);

  const item = 1;

  const { _id, productName, productPrice, productDescription, image } =
    product.data;

  imageArry = image;

  // <!-- <div class="slide" >
  //                  <img src="${image[0].img}" alt="">
  //                </div> -->

  // <div class="imgslide" id="imageG">

  // </div>

  if (product.data) {
    return (big_container.innerHTML = `
        <div class="buy_item_image">
            <div class="image_container">
            <div class="slider" id="slider">
              <div class="slides" id="imageG">
                
              </div>
            </div>

              <button class="prev" id="prev" >&#10094;</button>
              <button class="next" id="next" >&#10095;</button>
                <div class="radio_img" id="radio_img">
                
                </div>
                <!-- share -->
                <div class="share" id="share">
                  <i class="fa-solid fa-heart" id="like-ture" onclick="like('${_id}')"></i>
                  <i class="fa-regular fa-heart" id="like-falus" onclick="like('${_id}')"></i>
                  <i class="fa-solid fa-share" onclick="shareProduct('${_id}')"></i>
                </div>
            </div>
            <!-- !prioduct_container -->
            <div class="product_container">
                <div class="title_itam">
                
                    <h3>${productName}</h3>
                    <div class="itam_dec">
                    ${productDescription}
                    </div>
                </div>
                <div class="price_quantity">
                    <div class="price-c"> $${productPrice}</div>
                    <div class="quantity_box">
                      <div class="decremet" onclick="decrement('${_id}')">-</div>
                      <div class="quantity" id="${_id}">${item}</div>
                      <div class="increment" onclick="increment('${_id}')">+</div>
                    </div>
                </div>
                <div class="checkout_addcart">
                  <button class="checkout" onclick="checkout()">Checkout</button>
                  <button class="addcart" onclick="addcart(${_id})">Add cart</button>
                </div>
            </div>
        </div>
        <div class="delever_detels_container"> deliver tomorry</div>
      `);
  }
};

let kaf = document.getElementById("dewey");

// ! add cart
let pop = document.getElementById("pop");
let nothide = document.getElementById("nothide");

let addcart = (id) => {
  let selecteItam = id;
  let search = basket.find((x) => x.id === selecteItam.id);
  if (search === undefined) {
    basket.push({
      id: selecteItam.id,
      item: 1,
    });
    notif(selecteItam.id);
    pop.style.display = "flex";
    setTimeout(popnone, 3000);
  } else {
    notif(selecteItam.id);
    pop.style.display = "flex";
    setTimeout(popnone, 3000);
  }
  update(selecteItam.id);

  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

// ! notification funcation
const popnone = () => {
  nothide.classList.add("hide");
  setTimeout(() => {
    pop.style.display = "none";
    nothide.classList.remove("hide");
  }, 500); // 500ms corresponds to the animation duration
};

// !increment
let increment = (id) => {
  let selecteItam = id;
  let search = buyItam.find((x) => x.id === id);
  if (search === undefined) {
    buyItam.push({
      id: selecteItam.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  update(id);
  buyshop();
  localStorage.setItem("databuy", JSON.stringify(buyItam));
};

// ! decrement
let decrement = (id) => {
  let search = buyItam.find((x) => x.id === id);
  if (search === undefined) return;
  else if (search.item === 1) return;
  else {
    search.item -= 1;
  }

  buyItam = buyItam.filter((x) => x.item !== 0);
  localStorage.setItem("databuy", JSON.stringify(buyItam));
  buyshop();
  // totalAmount();
  update(id);
};

// ! update
let update = (id) => {
  let search = buyItam.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
};

// ! calculat

if (userData) {
  calculatCart();
}

// let calculation = () => {
//   let cartIcon = document.getElementById("cart_no");
//   cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
// };

const billItem = JSON.parse(localStorage.getItem("billdata")) || [];
// ! checkout funcation

// update();

const genneratImageDiv = () => {
  const imageG = document.getElementById("imageG");
  return (imageG.innerHTML += imageArry
    .map((x) => {
      return `<img src="${x.img}" alt="Slide 1" />`;
    })
    .join(""));
};

(async function runf() {
  await buyshop();
  await genneratImageDiv();
  imageslideF();
})();

liked();
