const ordergen = async () => {
  const url = urls + "/orders/getorders";
  const response = await apiCallGet(url);

  const orderid = document.getElementById("orders");

  console.log(response);

  if (response.success) {
    orderid.innerHTML = response.data
      .map((x) => {
        const { createdAt, total, orderItems } = x;
        return `<div class="product_o">
          <img src="../../image/boat1.webp" alt="" srcset="" />
          <div class="product_dec">
            <div class="product_d">Product Detailes</div>
            <p>this is a goad product and best qualilty</p>
            <div class="product_d">Qualilty</div>
            <span>${orderItems.length}</span>
            <div class="product_d">Total</div>
            <span>$ ${total}</span>
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
            <div class="btnd" onclick="">
              <button>Track</button>
            </div>
          </div>
          <div class="delevardate">
            <div class="devDate">Deliver Date</div>
            <span>${createdAt}</span>
            <div class="btnd" onclick="">
              <button>Cancel</button>
            </div>
          </div>
        </div>`;
      })
      .join("");
  }
};

ordergen();
