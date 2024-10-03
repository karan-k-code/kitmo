let cart_y = document.getElementById("cart_y");
let not_cart = document.getElementById("not_cart");
let label1 = document.getElementById("chekout");

let checkout_box = document.querySelector("#big_cart_cantenr");

let buyc = JSON.parse(localStorage.getItem("databuy")) || [];

// ! basket
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateCartItem = () => {
  if (basket.length !== 0) {
    return (cart_y.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItamsData.find((y) => y.id === id) || [];
        return `
          <div class="product">
    <img src="${search.img}" alt="" onclick="goo(${id})">
    <div class="product-box">
      <div class="name">
        <div class="ditalis">Ditails</div>
        <div class="dec">
          <strong>${search.name}</strong>
          <p> ${search.desc}</p>
        </div>
      </div>
      <div class="quantity-box">
        <div class="quantity">Quantity</div>
        <div class="qty">Qty</div>
        <div class="qua">
          <div class="add" onclick="increment('${id}')">+</div>
          <div class="no" id="${id}">${item}</div>
          <div class="dicrement" onclick="decrement('${id}')">-</div>
        </div>
      </div>
      <div class="price-box">
        <div class="price-text">Price per Item</div>
        <div class="price">$${search.price}</div>
      </div>
      <div class="totprice">
        <div class="amount-text-">Amount</div>
        <div class="ammunt">$${item * search.price} </div>
        <div class="delete"><button onclick="removeItem(${id})">Delete</button></div>
      </div>
    </div>
    </div>
      `;
      })
      .join(""));
  } else {
    not_cart.innerHTML = `
            <div class="add_cart1"><H1>Cart Is Empty</H1></div>
            <div class="cart_image">
              <img src="image/cartimg1.png" alt="">
            </div>
            <div class="home">
               <button onclick="home()">Go to Home</button>
            </div>
           `;
  }
};

generateCartItem();

// ! home button

let home = ()=>{
  window.location="index.html";
}


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
  else if (search.item === 1) return;
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
  if(basket.length !== 0){
    let total_item = document.getElementById("total_item");
  total_item.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  }
  
};

// ! remove item

let removeItem = (id) => {
  let selecteItam = id;
  basket = basket.filter((x) => x.id !== selecteItam.id);
  generateCartItem();
  totalAmount();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
  reload();
};

// ! goo funcation
let goo =(id)=>{
  let selecteItam = id;
  
  if (buyc.length === 0) {
    buyc.push({
      id: selecteItam.id,
      item: 1
    });
  }else{
    buyc = [];
    buyc.push({
      id: selecteItam.id,
      item: 1
    });
  }
  localStorage.setItem("databuy", JSON.stringify(buyc));
  window.location="buy.html"
}

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
          <div class="total-box">
            <div class="total_item_text">Total Item :<spam id="total_item"></spam></div>
            <div class="total_price_text">Total Amount :  <b>$${amount} </b></div>
          </div>
          <div class="chackoutbtn">
          <button onclick="checkout()">Chackout</button>
          </div>
      `;
  } else {
    // generateShop();
  checkout_box.style.display = "none";  
  }
};

let buyItam = JSON.parse(localStorage.getItem("databuy")) || []; 

let checkout = ()=>{
  if(buyItam.length !== 0){
    localStorage.setItem("databuy", JSON.stringify(basket));
    window.location.href ="deliver.html";
  }else{
    buyItam =[]
    localStorage.setItem("databuy", JSON.stringify(basket));
    window.location.href ="deliver.html";
  }
}

// reload funcation

let reload=() =>{
if(basket.length === 0){
  window.location.reload();
}
}

totalAmount();
calculation();
