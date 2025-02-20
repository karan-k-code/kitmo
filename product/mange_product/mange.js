const productshow = document.getElementById("productshow");
const profilea = document.getElementById("profilea");

const getuser = async () => {
  const url = urls + "/users/user";
  const response = await apiCallGet(url);

  const { username, image } = response.data;

  profilea.innerHTML = `
        <img src="${image}" alt="" />
        <p>${username}</p>
  `;
};

getuser();

let generateCartItem = async () => {
  const usr = urls + "/dashboad/allproduct";
  const product = await apiCallGet(usr);

  const response = product.data;

  try {
    const productHTML = await Promise.all(
      response.map(async (x) => {
        const {
          _id,
          productDescription,
          image,
          productName,
          productPrice,
          productQuntity,
        } = x;

        // Fetch views asynchronously
        const Views = await apiCallGet(urls + "/dashboad/product/views/" + _id);
        const likes = await apiCallGet(urls + "/dashboad/product/likes/" + _id);
        const orders = await apiCallGet(
          urls + "/dashboad/product/orders/" + _id
        );

        return `
            <div class="product">
              <img src="${
                image[0]?.img || ""
              }" alt="" onclick="viewsP('${_id}')" />
              <div class="product-box">
                <div class="name">
                  <div class="ditalis">Details</div>
                  <div class="dec">
                    <strong>${productName}</strong>
                    <p>${productDescription}</p>
                  </div>
                  <div class="editproduct" onclick="editProduct('${_id}')">
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
                    <div class="no" id="">${Views?.data || 0}</div>
                  </div>
                </div>
                <div class="price-box">
                  <div class="price-text">Price per Item</div>
                  <div class="price">$${productPrice}</div>
                </div>
                <div class="price-box">
                  <div class="p-triceext">likes</div>
                  <div class="price">${likes.data}</div>
                </div>
                <div class="price-box">
                  <div class="p-triceext">order</div>
                  <div class="price">${orders.data}</div>
                  <div class="editproduct" onclick="deleteproduct('${_id}')">
                    <i class="fa-solid fa-trash"></i>
                  </div>
                </div>
              </div>
            </div>
          `;
      })
    );

    // Set the generated HTML to productshow
    productshow.innerHTML = productHTML.join("");
  } catch (error) {
    alert(response.errors || "An error occurred while rendering products.");
  }
};

generateCartItem();

const deleteproduct = async (id) => {
  const response = await apiCallGet(urls + "/dashboad/delete/" + id);
  generateCartItem();
};

const viewsP = (id) => {
  window.open(`${urlg}/buy/index.html?id=${id}`, "_blank");
};
