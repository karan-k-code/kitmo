import { shopItamsData } from "./main.js";
// console.log(shopItamsData);
// ! buy and cart
let buy = document.querySelectorAll(".buy");
let add_cart = document.querySelectorAll(".add_cart");
let decrement_btn = document.querySelectorAll(".decremet");

// ? add click tast
add_cart.forEach(function (id) {
  id.addEventListener("click", function () {
    increment(id);
  });
});

// ! increment click
buy.forEach(function (id) {
  id.addEventListener("click", function () {
    decrement(id);
  });
});

//? buy click tast
// buy.forEach(function (id) {
//   id.addEventListener("click", function () {
//     let id = event.target.parentNode.id;
//     if (id) {
//       shopItamsData.forEach((x) => {
//         if (x.id === id) {
//           // console.log(x.name);
//           // console.log(x.id);
//           // console.log(x.price);
//           // console.log(x.desc);
//           decrement(id);
//         }
//       });
//     }
//   });
// });

let basket = [{}];

// console.log(buy);

// click cantenr
// shop.onclick =()=>{
// let id = event.target.parentNode.id;
// if(id){
//     shopItamsData.forEach((x)=>{
//         if(x.id === id){
//             console.log(x.name);
//             console.log(x.id);
//             console.log(x.price);
//             console.log(x.desc);
//         }
//     })
// }
// }

// click buy
// buy.forEach(id){
//     let id = event.target.id;
//     if(id){
//         shopItamsData.forEach((x)=>{
//             if(x.id === id){
//                 console.log(x.name);
//             }
//         })
//     }
// }

// buy.onclick =(e)=>{
//     let id = event.target.parentNode.id;
//     if(id){
//         shopItamsData.forEach((x)=>{
//             if(x.id === id){
//                 console.log(x.name);
//                 console.log(x.id);
//                 console.log(x.price);
//                 console.log(x.desc);
//             }
//         })
//     }
//     console.log(e);
// }

// cart

// let cart_no = document.querySelector("#cart_no")

// add_cart.onclick = () =>{
//     let id = event.target.parentNode.id;
//     if(id){
//         shopItamsData.forEach((x)=>{
//             if(x.id === id){
//                 cart_no.innerHTML = parseInt(cart_no.innerHTML) + 1;
//                 console.log(x.name);
//                 console.log(x.id);
//                 console.log(x.price);
//                 console.log(x.desc);
//                 let cart_item = {
//                     id: x.id,
//                     name: x.name,
//                     price: x.price,
//                     desc: x.desc
//                 }
// cart.push(cart_item);
// console.log(cart);
// localStorage.setItem("cart", JSON.stringify(cart));
// console.log(localStorage.getItem("cart"));
// cart_no.innerHTML = cart.length;
// console.log(cart_no.innerHTML);
// add_to_cart(x.id,x.name,x.price,x.desc);
// {
//     let cart = JSON.parse(localStorage.getItem("cart"));
//     if(cart){
//     cart_no.innerHTML = cart.length;
//     }else{
//         cart_no.innerHTML = 0;
//     }
// }

//             }
//         })
//     }
// }

// !increment function
let increment = (id) => {
  let selecteItam = id;
  let search = basket.find((x) => x.id === selecteItam.id);
  if (search === undefined) {
    basket.push({
      id: selecteItam.id,
      itam: 1,
    });
  } else {
    search.itam += 1;
  }
  update(selecteItam.id);
};

// !decrement function
let decrement = (id) => {
  let selecteItam = id;
  let search = basket.find((x) => x.id === selecteItam.id);
  if (search.itam === 0) {
    basket.push({
      id: selecteItam.id,
      itam: 0,
    });
  } else {
    search.itam -= 1;
  }
  console.log(basket);
  console.log(search.itam);
};

// !update function
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  console.log(search.itam);
};
