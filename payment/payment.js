const bill = document.getElementById("bill");
let shopItamsData;

// ! checkout
let buyItam = JSON.parse(localStorage.getItem("databuy")) || [];

// ! shop item gennerateshop funcation
let billProduct = async () => {
  const url = urls + "/product/payprduct/gen";
  const response = await apiCall(url, buyItam);
  shopItamsData = response.data;

  if (response.data.length !== 0) {
    return (bill.innerHTML = response.data
      .map((x) => {
        let { _id, productDescription, image, productPrice, productName } = x;
        const search = buyItam.find((y) => y.productId == _id);
        return `
          <div class="product">
    <img src="${image[0].img}" alt="">
    <div class="product-box">
      <div class="name">
        <div class="ditalis">Ditails</div>
        <div class="dec">
          <strong>${productName}</strong>
          <div>${productDescription}</div>
        </div>
      </div>
      <div class="quantity-box">
        <div class="quantity">Quantity</div>
        <div class="qty">Qty</div>
        <div class="qua">
          <div class="add" onclick="increment('${_id}')">+</div>
          <div class="no" id="${_id}">${search.item}</div>
          <div class="dicrement" onclick="decrement('${_id}')">-</div>
        </div>
      </div>
      <div class="price-box">
        <div class="price-text">Price per Item</div>
        <div class="price">$${productPrice}</div>
      </div>
      <div class="totprice">
        <div class="amount-text-">Amount</div>
        <div class="ammunt">$${search.item * productPrice} </div>
      </div>
    </div>
    </div>
        `;
      })
      .join(""));
  }
};

// !increment
let increment = async (id) => {
  let selecteItam = id;
  let search = buyItam.find((x) => x.productId === id);

  search.item += 1;
  update(id);
  // billProduct();
  localStorage.setItem("databuy", JSON.stringify(buyItam));
};

// ! decrement
let decrement = (id) => {
  let search = buyItam.find((x) => x.productId === id);
  if (search === undefined) return;
  else if (search.item === 1) return;
  else {
    search.item -= 1;
  }
  localStorage.setItem("databuy", JSON.stringify(buyItam));
  update(id);
};

// ! update
let update = (id) => {
  let search = buyItam.find((x) => x.productId === id);
  document.getElementById(id).innerHTML = search.item;
  totalAmount();
  billProduct();
};
// ! total amount
const summary = document.getElementById("summary");
const pay = document.getElementById("pay");
let totalAmount = async () => {
  if (buyItam.length !== 0) {
    const url = urls + "/product/payprduct/gen";
    const response = await apiCall(url, buyItam);

    let amount = response.data
      .map((x) => {
        let { _id, productPrice } = x;
        let search = buyItam.find((y) => y.productId === _id) || [];
        return search.item * productPrice;
      })
      .reduce((x, y) => x + y, 0);
    pay.innerText = `$ ${amount + amount * 0.18}`;
    summary.innerHTML = `
            <p>Total Items: <span id="totalItems">${buyItam.length}</span></p>
      <p>Total Amount (without GST): $<span id="totalAmount">${amount}</span></p>
      <p>GST (18%): $<span id="gstAmount">${amount * 0.18}</span></p>
      <p>Total Amount (with GST): $<span id="totalWithGst">${
        amount + amount * 0.18
      }</span></p>
        `;
  } else {
    // checkout_box.style.display = "none";
  }
};
totalAmount();
billProduct();

// JavaScript to handle showing and hiding the success message
document.getElementById("cashon").addEventListener("click", async function () {
  const addressId = getQueryParam("address");
  const orderdata = [];

  buyItam.map((x) => {
    const { productId, item } = x;
    orderdata.push({
      product: productId,
      quantity: item,
      paymentmode: "Cash",
    });
  });

  const url = urls + "/orders/order/" + addressId;
  const response = await apiCall(url, orderdata);

  if (response.success) {
    const successMessage = document.getElementById("successMessage");
    // Show the success message
    successMessage.classList.remove("hidden");
    // Automatically hide after 4 seconds
    setTimeout(function () {
      successMessage.classList.add("hidden");
    }, 4000);
  }
});

document.getElementById("closeBtn").addEventListener("click", function () {
  // Manually hide the success message when the close button is clicked
  document.getElementById("successMessage").classList.add("hidden");
});

const onlinepay = document.getElementById("onlinepay");
onlinepay.addEventListener("click", async (x) => {
  const addressId = getQueryParam("address");
  const orderdata = [];
  buyItam.map((x) => {
    const { productId, item } = x;
    orderdata.push({
      product: productId,
      quantity: item,
      paymentmode: "Online",
    });
  });

  //  ! add payment funcation

  if (true) {
    const url = urls + "/orders/order/" + addressId;
    const response = await apiCall(url, orderdata);

    if (response.success) {
      const successMessage = document.getElementById("successMessage");
      // Show the success message
      successMessage.classList.remove("hidden");
      // Automatically hide after 4 seconds
      setTimeout(function () {
        successMessage.classList.add("hidden");
      }, 4000);
    }
  }
});
