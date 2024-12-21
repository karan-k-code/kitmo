const ordergen = async () => {
  const url = urls + "/orders/getorders";
  const response = await apiCallGet(url);

  const orderid = document.getElementById("orders");

  // if (!response.success) {
  //   orderid.innerHTML = response.data
  //     .map(async (x) => {
  //       const { createdAt, total, orderItems } = x;

  //       const product = await findProduct(orderItems[0].product);

  //       const { image, productDescription, productName, productPrice, _id } =
  //         product;

  //       return `<div class="product_o">
  //         <img src="" alt="" srcset="" />
  //         <div class="product_dec">
  //           <div class="product_d">Product Detailes</div>
  //           <p>jhjkh</p>
  //           <div class="">Qualilty</div>
  //           <span>${orderItems.length}</span>
  //           <div class="">Total</div>
  //           <span>$ ${total}</span>
  //         </div>
  //         <div class="status">
  //           <div class="p_status">Status</div>
  //           <div class="processing" id="processing" style="display: flex">
  //             Processing
  //           </div>
  //           <div class="processing" id="deliver" style="display: none">
  //             Deliver
  //           </div>
  //           <div class="processing" id="cancel" style="display: none">
  //             Cancel
  //           </div>
  //           <div class="btnd" onclick="">
  //             <button>Track</button>
  //           </div>
  //         </div>
  //         <div class="delevardate">
  //           <div class="devDate">Deliver Date</div>
  //           <span>${createdAt}</span>
  //           <div class="btnd" onclick="">
  //             <button>Cancel</button>
  //           </div>
  //         </div>
  //       </div>`;
  //     })
  //     .join("");
  // }

  if (response.success) {
    // Use Promise.all to wait for all asynchronous operations to complete
    Promise.all(
      response.data.map(async (x) => {
        const { createdAt, total, orderItems } = x;

        // Assuming findProduct is an async function

        const img = await Promise.all(
          orderItems.map(async (j) => {
            const product = await findProduct(j.product);
            const dta = product.data.image[0];
            return dta;
          })
        );

        const product = await findProduct(orderItems[0].product);

        const { image, productDescription, productName, productPrice, _id } =
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
              Processing
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
              <button onclick="">Cancel</button>
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
  }

  if (response.data.length == 0) {
    orderid.innerHTML = `<h1>null</h1>`;
  }
};
