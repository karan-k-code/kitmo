const ordergen = async () => {
  const url = urls + "/orders/getorders";
  const response = await apiCallGet(url);

  const orderid = document.getElementById("orders");

  if (response.success && response.data.length !== 0) {
    // Use Promise.all to wait for all asynchronous operations to complete
    Promise.all(
      response.data.map(async (x) => {
        const { createdAt, total, orderItems, _id, status } = x;

        // Assuming findProduct is an async function

        const img = await Promise.all(
          orderItems.map(async (j) => {
            const product = await findProduct(j.productId);
            const dta = product.data.image[0];
            return dta;
          })
        );

        const product = await findProduct(orderItems[0].productId);

        const { image, productDescription, productName, productPrice } =
          product.data;

        return `<div class="product_o">
          <img src="${img[0].img}" alt="${productName}" />
          <div class="product_dec">
            <div class="product_d">Product Details</div>
            <p>${productDescription}</p>
            <div class="">Quantity</div>
            <span>${orderItems.length}</span>
            <div class="">Total</div>
            <span>${Currency} ${total}</span>
          </div>
          <div class="status">
            <div class="p_status">Status</div>
            <div class="processing" id="processing" style="display: flex">
              ${status}
            </div>
            <div class="processing" id="deliver" style="display: none">
              Deliver
            </div>
            <div class="processing" id="cancel" style="display: none">
              Cancel
            </div>
            <div class="btnd">
              <button onclick="">Track</button>
            </div>
          </div>
          <div class="delevardate">
            <div class="devDate">Deliver Date</div>
            <span>${new Date(createdAt).toLocaleDateString()}</span>
            <div class="btnd">
              <button onclick="cancelOrder('${_id}')">Cancel</button>
            </div>
          </div>
        </div>`;
      })
    )
      .then((htmlArray) => {
        // Join all resolved HTML strings and set it to innerHTML
        orderid.innerHTML = htmlArray.join("");
      })
      .catch((error) => {
        alert(response.errors);
      });
  } else {
    orderid.innerHTML = `<h1>null</h1>`;
  }
};

const cancelOrder = async (id) => {
  const url = urls + "/orders/cancel/" + id;
  const response = await apiCallGet(url);
  if (response.success) {
    ordergen();
  } else {
    alert(response.errors);
  }
};
