let big_container =document.getElementById("big_container");
// ! basket
let basket = JSON.parse(localStorage.getItem("data")) || [];

// ! checkout
let buyItam = JSON.parse(localStorage.getItem("databuy")) || [];

// ! home page

homePage=()=>{
  window.location.href="index.html";
}


// ! shop item gennerateshop funcation
let buyshop = () => {
  if (buyItam.length !== 0) {
    return (big_container.innerHTML = buyItam
      .map((x) => {
        let { id, item } = x;
        let search = shopItamsData.find((y) => y.id === id) || [];
        return `
        <div class="buy_item_image">
            <div class="image_container">
                <img src="${search.img}" alt="">
              <!--  <div class="radio_img">
                    <input type="radio" id="huey" name="drone" value="huey" checked ></input>
                    <input type="radio" id="dewey" name="drone" value="dewey" ></input>
                    <input type="radio" id="louie" name="drone" value="louie" ></input>
                    <input type="radio" id="loue" name="drone" value="loue" ></input>
                </div>
                -->
            </div>
            <!-- !prioduct_container -->
            <div class="product_container">
                <div class="title_itam">
                
                    <h3>${search.name}</h3>
                    <div class="itam_dec">
                    ${search.desc}
                    </div>
                </div>
                <div class="price_quantity">
                    <div class="price"> $ ${search.price}</div>
                    <div class="quantity_box">
                        <div class="decremet" onclick="decrement('${id}')">-</div>
                        <div class="quantity" id="${id}">${item}</div>
                        <div class="increment" onclick="increment('${id}')">+</div>
                    </div>
                </div>
                <div class="checkout_addcart">
                    <div class="checkout" onclick="checkout()">checkout</div>
                    <div class="addcart" onclick="addcart(${id})">add cart</div>
                </div>
            </div>
        </div>
        <div class="delever_detels_container"> deliver tomorry</div>
      `;
      })
      .join(""));
  }
};

// ! add cart
let pop =document.getElementById("pop")
let nothide =document.getElementById("nothide")

let addcart = (id) => {
  let selecteItam = id;
  let search = basket.find((x) => x.id === selecteItam.id);
  if (search === undefined) {
    basket.push({
      id: selecteItam.id,
      item: 1,
    });
    notif(selecteItam.id);
    pop.style.display= 'flex';
    setTimeout(popnone,3000)
  } else {
    notif(selecteItam.id);
    pop.style.display= 'flex';
    setTimeout(popnone,3000)
  }
  update(selecteItam.id);
  
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

// ! notification funcation
const popnone =()=>{
  nothide.classList.add('hide');
  setTimeout(()=>{
    pop.style.display = 'none';
    nothide.classList.remove('hide');
  }, 500); // 500ms corresponds to the animation duration
}

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
let calculation = () => {
  let cartIcon = document.getElementById("cart_no");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

// ! checkout funcation
let checkout = ()=>{
  window.location.href ="deliver.html";
}

// update();
calculation();
buyshop();
