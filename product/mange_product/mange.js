const productshow = document.getElementById("productshow");
const profilea = document.getElementById("profilea");

const getuser = async () => {
  const url = urls + "/users/user";
  const response = await apiCallGet(url);

  const { username, image } = response.data;

  profilea.innerHTML = `
        <img src="${image ? "" : "../../image/userimage.jpg"}" alt="" />
        <h2>${username}</h2>
  `;
};

getuser();

let generateCartItem = async () => {
  const usr = urls + "/dashboad/allproduct";
  const product = await apiCallGet(usr);

  const response = product.data;

  if (response.length !== 0) {
    return (productshow.innerHTML = response
      .map((x) => {
        let {
          _id,
          productDescription,
          image,
          productName,
          productPrice,
          productQuntity,
        } = x;
        return `
    <div class="product">
          <img src="${image[0].img}" alt="" />
          <div class="product-box">
            <div class="name">
              <div class="ditalis">Ditails</div>
              <div class="dec">
                <strong>${productName}</strong>
                <p>
                ${productDescription}
                </p>
              </div>
              <div class="editproduct">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>
            </div>
            <div class="quantity-box">
              <div class="quantity">Stock</div>
              <div class="qty">Qty</div>
              <div class="qua">
                <div class="no" id="">${productQuntity}</div>
              </div>
            </div>
            <div class="quantity-box">
              <div class="quantity">Views</div>
              <div class="qty">Views</div>
              <div class="qua">
                <div class="no" id="">0</div>
              </div>
            </div>
            <div class="price-box">
              <div class="price-text">Price per Item</div>
              <div class="price">$${productPrice}</div>
            </div>
            <div class="price-box">
              <div class="p-triceext">likes</div>
              <div class="price">$3489</div>
            </div>
            <div class="price-box">
              <div class="p-triceext">order</div>
              <div class="price">489</div>
            </div>
          </div>
        </div>
      `;
      })
      .join(""));
  } else {
    console.log("product");
  }
};

generateCartItem();
