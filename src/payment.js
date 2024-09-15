const bill = document.getElementById("bill");

// ! checkout
let buyItam = JSON.parse(localStorage.getItem("databuy")) || [];
// ! shop item gennerateshop funcation
let billProduct = () => {
    if (buyItam.length !== 0) {
      return (bill.innerHTML = buyItam
        .map((x) => {
          let { id, item } = x;
          let search = shopItamsData.find((y) => y.id === id) || [];
          return `
          <div class="product">
    <img src="${search.img}" alt="">
    <div class="product-box">
      <div class="name">
        <div class="ditalis">Ditails</div>
        <div class="dec">
          ${search.name} ${search.desc}
        </div>
      </div>
      <div class="quantity-box">
        <div class="quantity">Quantity</div>
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
      </div>
    </div>
    </div>
        `;
        })
        .join(""));
    }
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
    billProduct();
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
    billProduct();
    update(id);
  };
  
  // ! update
  let update = (id) => {
    let search = buyItam.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    totalAmount();
  };
// ! total amount
const summary = document.getElementById("summary");
const pay = document.getElementById("pay");
let totalAmount = () => {
    if (buyItam.length !== 0) {
      let amount = buyItam
        .map((x) => {
          let { id, item } = x;
          let search = shopItamsData.find((y) => y.id === id) || [];
          return item * search.price;
        })
        .reduce((x, y) => x + y, 0);
        pay.innerText =`${amount+(amount * (0.18))}`
      summary.innerHTML = `
            <p>Total Items: <span id="totalItems">${buyItam.length}</span></p>
      <p>Total Amount (without GST): $<span id="totalAmount">${amount}</span></p>
      <p>GST (18%): $<span id="gstAmount">${amount * (0.18)}</span></p>
      <p>Total Amount (with GST): $<span id="totalWithGst">${amount+(amount * (0.18))}</span></p>
        `;
    } else {
    checkout_box.style.display = "none";  
    }
    
  };
  totalAmount();
  billProduct();