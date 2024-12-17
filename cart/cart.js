const cart_y = document.getElementById("cart_y");
const not_cart = document.getElementById("not_cart");
let label1 = document.getElementById("chekout");

let checkout_box = document.querySelector("#big_cart_cantenr");

// let buyc = JSON.parse(localStorage.getItem("databuy")) || [];

let generateCartItem = async () => {
  const url = urls + "/users/user";
  const userdata = await apiCallGet(url);

  if (!userdata.success) {
    const response = await refreshToken();
    if (!response.success) {
      window.location.href = `${urlg}/users/login`;
    }
  }

  const product = await getProduct();
  const response = await getCart();

  if (response.data.length !== 0) {
    return (cart_y.innerHTML = response.data
      .map((x) => {
        let { productId, quantity } = x;
        let search = product.data.find((y) => y._id === productId) || [];

        return `
    <div class="product">
    <img src="${search.image[0].img}" alt="" onclick="goo('${productId}')">
    <div class="product-box">
      <div class="name">
        <div class="ditalis">Ditails</div>
        <div class="dec">
          <strong>${search.productName}</strong>
          <p> ${search.productDescription}</p>
        </div>
      </div>
      <div class="quantity-box">
        <div class="quantity">Quantity</div>
        <div class="qty">Qty</div>
        <div class="qua">
          <div class="add" onclick="increment('${productId}')">+</div>
          <div class="no" id="${productId}">${quantity}</div>
          <div class="dicrement" onclick="decrement('${productId}','${quantity}')">-</div>
        </div>
      </div>
      <div class="price-box">
        <div class="price-text">Price per Item</div>
        <div class="price">$${search.productPrice}</div>
      </div>
      <div class="totprice">
        <div class="amount-text-">Amount</div>
        <div class="ammunt">$${quantity * search.productPrice} </div>
        <div class="delete"><button onclick="removeItem('${productId}')">Delete</button></div>
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
              <img src="../image/cartimg1.png" alt="">
            </div>
            <div class="home">
               <button onclick="home()">Go to Home</button>
            </div>
           `;
  }
};

generateCartItem();

// ! home button
let home = () => {
  window.location = urlg;
};

// !increment
let increment = async (id) => {
  let selecteItam = id;
  let data = {
    productId: selecteItam,
    quantity: 1,
  };
  const response = await apiCall(urls + "/product/incrementcart", data);

  update(id);
  generateCartItem();
};

// ! decrement
let decrement = async (id, qut) => {
  if (qut == 1) {
    return;
  }
  let selecteItam = id;
  let data = {
    productId: selecteItam,
    quantity: 1,
  };
  const response = await apiCall(urls + "/product/decrementcart", data);

  update(id);
  generateCartItem();
};

// ! update
let update = async (id) => {
  const product = await getProduct();
  let search = product.data.find((x) => x._id === id);
  document.getElementById(id).innerHTML = search.quantity;
  totalAmount();
};

// ! remove item
let removeItem = async (id) => {
  let selecteItam = id;
  let data = {
    productId: selecteItam,
  };
  const response = await apiCall(urls + "/product/deletcartitem", data);

  update(id);
  generateCartItem();
};

// ! total amount
let totalAmount = async () => {
  const product = await getProduct();
  const response = await getCart();

  if (response.data.length !== 0) {
    let amount = response.data
      .map((x) => {
        let { productId, quantity } = x;
        let search = product.data.find((y) => y._id === productId) || [];
        return quantity * search.productPrice;
      })
      .reduce((x, y) => x + y, 0);

    label1.innerHTML = `
          <div class="total-box">
            <div class="total_item_text">Total Item :<spam> ${response.data.length}</spam></div>
            <div class="total_price_text">Total Amount :  <b>$${amount} </b></div>
          </div>
          <div class="chackoutbtn">
          <button onclick="checkoutall()">Chackout</button>
          </div>
      `;
  } else {
    // generateShop();
    checkout_box.style.display = "none";
  }
};

let checkoutall = async () => {
  const response = await getCart();

  buyItam = response.data;

  await localStorage.setItem("databuy", JSON.stringify(buyItam));

  window.location.href = "../users/user_profile/address";
};

totalAmount();
