let shop = document.getElementById("shop");
/* product data and image */
let buyItam = JSON.parse(localStorage.getItem("databuy")) || [];

// ! basket
let basket = JSON.parse(localStorage.getItem("data")) || [];


// ! shop item gennerateshop funcation
let generateShop = async () => {

  let sle = shopItamsData.slice(0, 16)

  return (shop.innerHTML = await sle
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
        <div class="box option_b dark_box nav_light" id="producat_id_${id}" >
            <!--<div class="itam_name dark_box nav_light">
                <h3>${name}</h3>
            </div>-->
            <div class="itam_img" onclick="goo(${id})">
            <img src="${img}">
            </div>
            <div class="itam_detelas">
                <div class="itam_price">
                  $${price}
                </div>
                <div class="desc">
                  ${desc}
                </div>
            </div>
            <div class="shop_box dark_box nav_light" >
                <div class="add_cart " onclick="addcart(${id})">
                <b>ADD CART</b></div>
                <div id="${id}">
                </div>
                <div class="buy" onclick="goo(${id})" ><b>BUY</b></div>
            </div>
        </div>`;
    })
    .join(""));
};

generateShop();

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
    pop.style.display= 'flex';
    notif(selecteItam.id);
    setTimeout(popnone,3000)
  }
  else {
    pop.style.display= 'flex';
    notif(selecteItam.id);
    setTimeout(popnone,3000)

  }
  update(selecteItam.id);
  calculation();
  
  localStorage.setItem("data", JSON.stringify(basket));
};

const popnone =()=>{
  nothide.classList.add('hide');
  setTimeout(()=>{
    nothide.classList.remove('hide');
    pop.style.display = 'none';
  }, 550); // 550ms corresponds to the animation duration
}

// !increment
let increment = (id) => {
  let selecteItam = id;
  let search = basket.find((x) => x.id === selecteItam.id);
  if (search === undefined) {
    basket.push({
      id: selecteItam.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  update(selecteItam.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

// ! decrement
let decrement = (id) => {
  let selecteItam = id;
  let search = basket.find((x) => x.id === selecteItam.id);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selecteItam.id);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(basket));
};

// ! update
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // document.getElementById(id).innerHTML = search.item;
  calculation();
};

// ! calculat
let calculation = () => {
  let cartIcon = document.getElementById("cart_no");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
// ! goo funcation
let goo =(id)=>{
  let selecteItam = id;
  
  if (buyItam.length === 0) {
    buyItam.push({
      id: selecteItam.id,
      item: 1
    });
  }else{
    buyItam = [];
    buyItam.push({
      id: selecteItam.id,
      item: 1
    });
  }
  localStorage.setItem("databuy", JSON.stringify(buyItam));
  window.location="buy.html"
}

// ! profile

let ownerImg = document.querySelectorAll(".profile_img");
ownerImg.forEach((img) => {
  img.addEventListener("click", () => {
    window.location.href = "profile.html";
    });
  })

  // ! image slide code 

  document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image1');
    let currentIndex = 0;
  
    function showNextImage() {
      // Hide all images
      images.forEach((img, index) => {
        if (index === currentIndex) {
          img.classList.add('active');
        } else {
          img.classList.remove('active');
        }
      });
  
      // Move to the next image
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    // Initially show the first image
    showNextImage();
  
    // Change image every 4 seconds
    setInterval(showNextImage, 4000);
  });


  // ignor this code
// script.js

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


