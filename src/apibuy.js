// ! checkout
let buyItam = JSON.parse(localStorage.getItem("databuy")) || [];

let dt = buyItam.map((x)=> x.id);
let id = `${dt}`;

const serapi = `http://localhost:4000/api/user/${id}`

let datashop;

let buyApi =()=>{
  fetch(serapi)
}

fetch(serapi)
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    return datashop = data; // Handle the data received from the API
  })
  .catch(error => {
    console.error('Error:', error); // Handle any errors
  });

  let big_container =document.getElementById("big_container");
// ! basket
let basket = JSON.parse(localStorage.getItem("data")) || [];



// ! home page

homePage=()=>{
  window.location.href="index.html";
}

// ! shop item gennerateshop funcation


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
    notifApi(selecteItam.id);
    pop.style.display= 'flex';
    setTimeout(popnone,3000)
  } else {
    notifApi(selecteItam.id);
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
const billItem =JSON.parse(localStorage.getItem("billdata")) || [];
// ! checkout funcation
let checkout = ()=>{
    window.location.href ="deliver.html";
}


// update();
// calculation();
// buyshop();
