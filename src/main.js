let shop = document.getElementById("shop");
// ! shop item gennerateshop funcation
// let generateShop = async () => {
//   return (shop.innerHTML = sle
//     .map((x) => {
//       let { id, name, price, desc, img, image } = x;
//       let search = basket.find((x) => x.id === id) || [];

//       console.log(image[0]);

//       return `
//         <div class="box option_b " id="producat_id_${id}" >
//             <!--<div class="itam_name dark_box nav_light">
//                 <h3>${name}</h3>
//             </div>-->
//             <div class="itam_img" onclick="goo(${id})">
//             <img src="${img}">
//             </div>
//             <div class="itam_detelas">
//                 <div class="itam_price">
//                   $${price}
//                 </div>
//                 <div class="desc">
//                   ${desc}
//                 </div>
//             </div>
//             <div class="shop_box " >
//                 <div class="add_cart " onclick="addcart(${id})">
//                 <b>ADD CART</b></div>
//                 <div id="${id}">
//                 </div>
//                 <div class="buy" onclick="goo(${id})" ><b>BUY</b></div>
//             </div>
//         </div>`;
//     })
//     .join(""));
// };
let generateShop = async () => {
  const product = await getProduct();

  return (shop.innerHTML = product.data
    .map((x) => {
      let { _id, productName, productPrice, productDescription, image } = x;

      const imageUrl = image[0].img;
      const imageUr = imageUrl.replace("http://", "https://");

      return `
        <div class="box option_b " id="producat_id_${_id}" >
            <!--<div class="itam_name dark_box nav_light">
                <h3>${productName}</h3>
            </div>-->
            <div class="itam_img" onclick="goo('${_id}')">
            <img src="${image[0].img}">
            </div>
            <div class="itam_detelas">
                <div class="itam_price">
                  ${Currency}${productPrice}
                  <div>-34%</div>
                </div>
                <div class="desc">
                  ${productDescription}
                </div>
            </div>
            <div class="shop_box " >
                <div class="add_cart " onclick="addCart('${_id}','1')">
                <b>ADD CART</b></div>
                <div id="${_id}">
                </div>
                <div class="buy" onclick="goo('${_id}')" ><b>BUY</b></div>
            </div>
        </div>`;
    })
    .join(""));
};
generateShop();

// ! add cart
let pop = document.getElementById("pop");
let nothide = document.getElementById("nothide");

const popnone = () => {
  nothide.classList.add("hide");
  setTimeout(() => {
    nothide.classList.remove("hide");
    pop.style.display = "none";
  }, 550); // 550ms corresponds to the animation duration
};

// ! calculat cart
// if (userData) {
//   calculatCart();
// }

// ! image slide code

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image1");
  let currentIndex = 0;

  function showNextImage() {
    // Hide all images
    images.forEach((img, index) => {
      if (index === currentIndex) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
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

// refreshToken();
calculatCart();

// ! keep_shoping

const keepShoping = async () => {
  const keep_shoping = document.getElementById("keep_shoping");
  const url = urls + "/histry/histry";
  const response = await apiCallGet(url);

  keep_shoping.innerHTML = response.data
    .map((x) => {
      return `<div class="best_product_content" onclick="goo('${x._id}')"">
          <img src="${x.image[0].img}" />
        </div>`;
    })
    .join("");
};

keepShoping();
