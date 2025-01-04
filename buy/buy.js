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
                <div class="rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <span id="rating">(0)</span>
                </div>
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
                  <div class="offer_item_C" id="offer_item">
                    <i class="fa-solid fa-truck"></i>
                    <div>Free Deliver</div>
                  </div>
                  <div class="offer_item_C" id="offer_item">
                    <i class="fa-regular fa-circle-check"></i>
                    <div>Best Quality.</div>
                  </div>
                  <div class="offer_item_C" id="offer_item">
                    <i class="fa-solid fa-lock"></i>
                    <div>Secure Transactions</div>
                  </div>
                  <div class="offer_item_C" id="offer_item">
                    <i class="fa-solid fa-chart-line"></i>
                    <div>Top Brand</div>
                  </div>
                  <div class="offer_item_C" id="offer_item">
                    <i class="fa-solid fa-arrows-rotate"></i>
                    <div>7Day Replacement</div>
                  </div>
                </div>

                <span class="line_zx"></span>

                <!-- color and models size -->
                <div class="color_product">Color : <span>black</span></div>
                <div class="offers" id="color">
                  <div class="offer_item thin_box" >
                  Black
                  </div>
                  <div class="offer_item thin_box" >
                  Aqua
                  </div>
                  <div class="offer_item thin_box" >
                  Grey
                  </div>
                </div>
                <div class="color_product">Size : <span>23cm</span></div>
                
                <div class="color_product">Model</div>
                <div class="offers" id="model">
                  <div class="offer_item" >
                  offer one
                  </div>
                </div>
              <div class="delever_detels_container moble_deliver">
                <div class="price_d"><span class="sambole_d">${Currency}</span><span>${productPrice}</span></div>
                <div class="deliver_date_d"><a href="${urlg}/help">Free Deliver</a><span class="day_d"> sunday, 1 January.</span><span> Order within <span class="hour">14 hrs 44 mins. </span></span><a href="${urlg}/help">Details</a></div>
                <div class="diliver_address_d"><i class="fa-solid fa-location-dot"></i> Dilever to sitmarhi 843302 update location</div>
                <div class="stock">In stock</div>
                <!-- quntity secation-->
                <div class="quntity_sec">Quntity</div>
                <div class="button_d">
                  <div class="quntity_secation_d">
                    <div class="increment" onclick="decrement('${_id}')">-</div>
                    <div class="quntity" id="${_id}">${quantity}</div>
                    <div class="increment" onclick="increment('${_id}')">+</div>
                  </div>
                </div>

                <div class="button_d"><button class="checkout" onclick="checkout_buy('${_id}')">Checkout</button></div>
                <div class="button_d"><button class="addcart" onclick="addcart('${_id}')">Add Cart</button></div>
              </div>
                <!-- product details -->
                <div class="product_details_p">Product Details</div>
                <div class="product_details" id="sfsf">
                  <ul>
                    <li>Brand name: <span>mouse</span></li>
                    <li>Brand name: <span>mouse</span></li>
                    <li>Brand name: <span>mouse</span></li>
                    <li>Brand name: <span>mouse</span></li>
                    <li>Brand name: <span>mouse</span></li>
                    <li>Brand name: <span>mouse</span></li>
                    <li>Brand name: <span>mouse</span></li>
                    <li>Brand name: <span>mouse</span></li>
                    <li>Brand name: <span>mouse</span></li>
                  </ul>
                  <span class="show_more" id="sfhj" onclick="morefan('sfhj', 'sfsf')">...Show More</span>
                </div>

                <span class="line_zx"></span>
                
                <!-- decripation -->
                <div class="about_p">About this item</div>
                <div class="itam_dec">
                  <pre id="decm">
                    ${productDescription}
                  </pre>
                 <!-- <span class="show_more" id="moreb" onclick="morefan('moreb','decm')">...Show More</span> -->
                </div>   
                
                
                
            </div>
            <div class="delever_detels_container laptop_deliver">
              <div class="price_d"><span class="sambole_d">${Currency}</span><span>${productPrice}</span></div>
              <div class="deliver_date_d"><a href="${urlg}/help">Free Deliver</a><span class="day_d"> sunday, 1 January.</span><span> Order within <span class="hour">14 hrs 44 mins. </span></span><a href="${urlg}/help">Details</a></div>
              <div class="diliver_address_d"><i class="fa-solid fa-location-dot"></i> Dilever to sitmarhi 843302 update location</div>
              <div class="stock">In stock</div>
              <!-- quntity secation-->
              <div class="quntity_sec">Quntity</div>
              <div class="button_d">
                <div class="quntity_secation_d">
                  <div class="increment" onclick="decrement('${_id}')">-</div>
                  <div class="quntity" id="${_id}">${quantity}</div>
                  <div class="increment" onclick="increment('${_id}')">+</div>
                </div>
              </div>
              
              <div class="button_d"><button class="checkout" onclick="checkout_buy('${_id}')">Checkout</button></div>
              <div class="button_d"><button class="addcart" onclick="addcart('${_id}')">Add Cart</button></div>
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
  const quantity = document.getElementById(id).innerText;
  addCart(id, quantity);
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

// update();

// ! gen image div
const genneratImageDiv = () => {
  try {
    const imageG = document.getElementById("imageG");
    return (imageG.innerHTML += imageArry
      .map((x) => {
        const imageUr = x.img.replace("http://", "https://");
        return `<img src="${imageUr}" alt="Slide 1" />`;
      })
      .join(""));
  } catch (error) {
    console.log(error);
  }
};

// ! gen image hover
const genHoverImage = () => {
  try {
    const imageG = document.getElementById("image_hover");
    let i = 0;
    return (imageG.innerHTML += imageArry
      .map((x) => {
        const imageUr = x.img.replace("http://", "https://");
        i = i++;
        return `<span><img class="hover_img" src="${imageUr}" value="${i}"></span>`;
      })
      .join(""));
  } catch (error) {
    console.log(error);
  }
};

(async function runf() {
  await buyshop();
  await genneratImageDiv();
  genHoverImage();
  imageslideF();
})();

liked();

// ! more funcation dec
const morefan = (x, y) => {
  const moreb = document.getElementById(x);
  const decm = document.getElementById(y);

  if (decm.style.maxHeight === "100%") {
    decm.style.maxHeight = "125px";
    moreb.innerHTML = "...Show More";
  } else {
    decm.style.maxHeight = "100%";
    moreb.innerHTML = "Show Less";
  }
};

// ! checkout buy

const checkout_buy = (id) => {
  const quantity = document.getElementById(id).innerText;

  buyItam = [
    {
      productId: id,
      quantity: quantity,
    },
  ];
  localStorage.setItem("databuy", JSON.stringify(buyItam));
  checkout();
};
