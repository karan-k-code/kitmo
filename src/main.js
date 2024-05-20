
let shop =document.getElementById('shop')
/* product data and image */

let shopItamsData = [{
    id:"headphones",
    name:"headphones",
    price: 22,
    desc:"this is boat headphones",
    img:"image/headphone.jpeg"
},{
    id:"goggles",
    name:"goggles",
    price: 9,
    desc:"stylish goggles new year",
    img:"image/goggles.jpeg"
},{
    id:"short",
    name:"short",
    price:25,
    desc:"stylish short for man",
    img:"image/short.jpeg"
},{
    id:"jeans",
    name:"jeans",
    price: 30,
    desc:"boy jeans so prime",
    img:"image/jeans.jpeg"
},{
    id:"cup",
    name:"cup",
    price: 9,
    desc:"this is stylish cup",
    img:"image/cup.jpeg"
},{
    id:"iPhone",
    name:"mobile",
    price: 999,
    desc:"iPhone 15 pro max",
    img:"image/iphone.jpg"
}]
/* show data to display */
let generateShop =()=>{
    return (shop.innerHTML= shopItamsData.map((x)=>{
        let { id, name, price, desc, img } =x;
        return  `
        <div class="box light_color" id="${id}">
            <div class="itam_name">
                <h3>${name}</h3>
            </div>
            <div class="itam_img" style="background-image:url('${img}')">
            </div>
            <div class="itam_detelas">
                <div class="itam_price">
                    $ ${price}
                </div>
                <div class="desc">
                    ${desc}
                </div>
            </div>
            <div class="shop_box" >
                <div class="add_cart light_color" >
                <b>ADD CART</b></div>
                <div class="buy light_color" ><b>BUY</b></div>
            </div>
        </div>`
    }).join(""));
};

generateShop();