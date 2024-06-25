// import shopItamsData from '.src/main.js';
// let headphone = document.getElementById("headphone");
// console.log(headphone);
// import{shopItamsData} from './shopdata.js';
// console.log(shopItamsData);

import{shopItamsData} from './main.js';
// console.log(shopItamsData);

let buy = document.querySelectorAll(".buy");
let add_cart = document.querySelectorAll(".add_cart");

add_cart.forEach(function(id){
    id.addEventListener("click", function(){
        console.log("add cart");
        console.log(id);
    });
})

// console.log(buy);
// click cantenr
// shop.onclick =()=>{
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
//         }
// }
// buy.onclick =()=>{
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
// }


// cart 

let cart_no = document.querySelector("#cart_no")

add_cart.onclick = () =>{
    let id = event.target.parentNode.id;
    if(id){
        shopItamsData.forEach((x)=>{
            if(x.id === id){
                cart_no.innerHTML = parseInt(cart_no.innerHTML) + 1;
                console.log(x.name);
                console.log(x.id);
                console.log(x.price);
                console.log(x.desc);
                let cart_item = {
                    id: x.id,
                    name: x.name,
                    price: x.price,
                    desc: x.desc
                }
                cart.push(cart_item);
                console.log(cart);
                localStorage.setItem("cart", JSON.stringify(cart));
                console.log(localStorage.getItem("cart"));
                cart_no.innerHTML = cart.length;
                console.log(cart_no.innerHTML);
                add_to_cart(x.id,x.name,x.price,x.desc);
                {
                    let cart = JSON.parse(localStorage.getItem("cart"));
                    if(cart){
                    cart_no.innerHTML = cart.length;
                    }else{
                        cart_no.innerHTML = 0;
                    }
                }
                console.log("helo"); 
            }
        })
    }
}

 