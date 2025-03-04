const ordergen = async (filter) => {
  const url = urls + "/orders/getorders";
  const response = await apiCallGet(url);
  const orderid = document.getElementById("orders");

  if (response?.success && response?.data.length !== 0) {
    // Use Promise.all to wait for all asynchronous operations to complete
    Promise.all(
      response?.data.map(async (x) => {
        const { createdAt, total, orderItems, _id, status } = x;

        if (status == filter) {
          // Assuming findProduct is an async function

          const img = await Promise.all(
            orderItems.map(async (j) => {
              const product = await findProduct(j.productId);
              const dta = product.data.image[0];
              return dta;
            })
          );

          const product = await findProduct(orderItems[0].productId);

          const { productDescription, productName, productPrice } =
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
        } else if (filter == "all") {
          // Assuming findProduct is an async function

          const img = await Promise.all(
            orderItems.map(async (j) => {
              const product = await findProduct(j.productId);
              const dta = product.data.image[0];
              return dta;
            })
          );

          const product = await findProduct(orderItems[0].productId);

          const { image, productName, productPrice } = product.data;

          return `<div class="product_o">
          <img src="${img[0].img}" alt="${productName}" />
          <div class="product_dec">
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
        }
      })
    )
      .then((htmlArray) => {
        // Join all resolved HTML strings and set it to innerHTML
        orderid.innerHTML += htmlArray.join("");
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    orderid.innerHTML = `<h1>null</h1>`;
  }
};

// ! filter order opation

function filterOrder(x) {
  window.location.href =
    urlg + "/users/user_profile/index.html?fun=order&filter=" + x;
}

try {
  const filter = getQueryParam("filter");
  const all = document.getElementById("filter_all");
  const pending = document.getElementById("filter_pending");
  const deliverd = document.getElementById("filter_deliverd");
  const cancelled = document.getElementById("filter_cancelled");
  (function () {
    if (filter === "all") {
      all.classList.add("filter_active");
      all.style.borderColor = "rgba(153, 229, 235, 0.685)";
      ordergen("all");
    } else if (filter === "pending") {
      pending.classList.add("filter_active");
      pending.style.borderColor = "rgba(153, 229, 235, 0.685)";
      ordergen("pending");
    } else if (filter === "deliverd") {
      deliverd.classList.add("filter_active");
      deliverd.style.borderColor = "rgba(153, 229, 235, 0.685)";
      ordergen("deliverd");
    } else if (filter === "cancelled") {
      cancelled.classList.add("filter_active");
      cancelled.style.borderColor = "rgba(153, 229, 235, 0.685)";
      ordergen("cancelled");
    }
  })();
} catch (error) {
  console.log(error);
}

// cancel order
const cancelOrder = async (id) => {
  const url = urls + "/orders/cancel/" + id;
  const response = await apiCallGet(url);
  if (response?.success) {
    ordergen();
  } else {
    alert(response.errors);
  }
};
