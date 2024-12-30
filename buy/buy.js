let big_container = document.getElementById("big_container");
let quantity = 1;

// ! basket
let basket = JSON.parse(localStorage.getItem("data")) || [];

// ! checkout
let buyItam = JSON.parse(localStorage.getItem("databuy")) || [];

let imageArry;

// ! shop item gennerateshop funcation
let buyshop = async () => {
  const productId = getQueryParam("id");
  const product = await findProduct(productId);

  const { _id, productName, productPrice, productDescription, image } =
    product.data;

  imageArry = image;

  // <!-- <div class="slide" >
  //                  <img src="${image[0].img}" alt="">
  //                </div> -->

  // <div class="imgslide" id="imageG">

  // </div>

  try {
    let search = buyItam.find((x) => x.productId === _id);
    if (search) {
      quantity = search.quantity;
    }
  } catch (error) {
    console.log(error);
  }

  if (product.data) {
    return (big_container.innerHTML = `
          <div class="buy_item_image">
            <div class="image_container">
              <div class="slider" id="slider">
                <div class="slides" id="imageG">  
                </div>
              </div>
              
              <!-- prev and next button -->
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
              <!-- image show hover -->
              <div class="image_hover" id="image_hover">
                 
              </div>
            </div>
            <!-- !prioduct_container -->
            <div class="product_container">
                <div class="title_product">${productName}</div>
                <span class="line_zx"></span>
                <!-- price -->
                <div class="price_product">
                  <span class="offer">-56%</span>
                  <div class="price-c"><span>${Currency}</span>${productPrice}</div>
                </div>
                <!-- ! M R P -->
                <div class="mrp">
                   M.R.P : <span class="price_x">
                    <span>${Currency}2344</span>
                    <span class="line_xy"></span>
                   </span> 
                </div>
                <div class="all_taxes">
                Inclusive of all taxes
                </div>
                <span class="line_zx"></span>
                <!-- !offers  -->
                <div class="offers_p">% Offers</div>
                <div class="offers">
                  <div class="offer_item" id="offer_item">
                  offer one
                  </div>
                </div>
                <span class="line_zx"></span>
                <!-- cash onpay  -->
                <div class="offers offers_cash">
                  <div class="offer_item" id="offer_item">
                  offer one
                  </div>
                </div>

                <span class="line_zx"></span>

                <!-- decripation -->
                <div class="itam_dec">
                  <pre id="decm">
                    ${productDescription}
                  </pre>
                  <span id="moreb" onclick="morefan()">...Show More</span>
                </div>   
                   
                
            </div>
            <div class="delever_detels_container">
              <div class="price_d"><span class="sambole_d">${Currency}</span><span>${productPrice}</span></div>
              <div class="deliver_date_d"><a href="${urlg}/help">Free Deliver</a><span> sunday, 1 January.</span> <a href="${urlg}/help">Details</a></div>
              <!-- quntity secation-->
              <div class="quntity_sec">Quntity</div>
              <div class="button_d">
                <div class="quntity_secation_d">
                  <div class="increment" onclick="decrement('${_id}')">-</div>
                  <div class="quntity" id="${_id}">${quantity}</div>
                  <div class="increment" onclick="increment('${_id}')">+</div>
                </div>
              </div>
              
              <div class="button_d"><button class="checkout" onclick="checkout()">Checkout</button></div>
              <div class="button_d"><button class="addcart" onclick="addcart(${_id})">Add Cart</button></div>
            </div>
        </div>
        
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
  let search = buyItam.find((x) => x.productId === id);
  if (search === undefined) {
    buyItam.push({
      productId: id,
      quantity: 1,
    });
  } else {
    search.quantity += 1;
  }
  update(id);
  localStorage.setItem("databuy", JSON.stringify(buyItam));
};

// ! decrement
let decrement = (id) => {
  let search = buyItam.find((x) => x.productId === id);
  if (search === undefined) return;
  else if (search.quantity === 1) return;
  else {
    search.quantity -= 1;
  }

  // buyItam = buyItam.filter((x) => x.quantity !== 0);
  localStorage.setItem("databuy", JSON.stringify(buyItam));
  update(id);
};

// ! update
let update = (id) => {
  let search = buyItam.find((x) => x.productId === id);
  console.log(search);
  document.getElementById(id).innerHTML = search.quantity;
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

// ! gen image div
const genneratImageDiv = () => {
  const imageG = document.getElementById("imageG");
  return (imageG.innerHTML += imageArry
    .map((x) => {
      const imageUr = x.img.replace("http://", "https://");
      return `<img src="${imageUr}" alt="Slide 1" />`;
    })
    .join(""));
};

// ! gen image hover
const genHoverImage = () => {
  const imageG = document.getElementById("image_hover");
  let i = 0;
  return (imageG.innerHTML += imageArry
    .map((x) => {
      const imageUr = x.img.replace("http://", "https://");
      i = i++;
      return `<span><img class="hover_img" src="${imageUr}" value="${i}"></span>`;
    })
    .join(""));
};

(async function runf() {
  await buyshop();
  await genneratImageDiv();
  genHoverImage();
  imageslideF();
})();

liked();

// ! more funcation dec
const morefan = () => {
  const moreb = document.getElementById("moreb");
  const decm = document.getElementById("decm");

  if (decm.style.maxHeight === "100%") {
    decm.style.maxHeight = "125px";
    moreb.innerHTML = "Show More";
  } else {
    decm.style.maxHeight = "100%";
    moreb.innerHTML = "Show Less";
  }
};
