const goCart = () => {
  window.location = urlg + "/cart";
};

const notif = async (id) => {
  const search = await findProduct(id);
  console.log(search);
  pop.style.display = "flex";
  nothide.innerHTML = `
    <div class="header">
      <span class="title">New Add Cart</span>
      <span class="location">INDIA, Bihar</span>
    </div>
    <div class="detail">
      <i class="bi bi-cart notif-i"></i>
      <span class="text">You have a new added cart  ${search.data.productName}.</span>
      <span class="price">$ ${search.data.productPrice}</span>
    </div>
    <button class="btn-primary" onclick="goCart()">
      <i class="bi bi-cart3"></i> Go to Cart
    </button>
  `;
  setTimeout(popnone, 3000);
};

const notifApi = (id) => {
  return (nothide.innerHTML = `
    <div class="header">
      <span class="title">New Add Cart</span>
      <span class="location">INDIA, Bihar</span>
    </div>
    <div class="detail">
      <i class="bi bi-cart notif-i"></i>
      <span class="text">You have a new added cart  ${datashop.name}.</span>
      <span class="price">$ ${datashop.price}</span>
    </div>
    <button class="btn-primary" onclick="goCart()">
      <i class="bi bi-cart3"></i> Go to Cart
    </button>
  `);
};

// Request Notification Permission
if (Notification.permission === "default") {
  Notification.requestPermission();
}

// Function to show a notification and navigate
function showNotification() {
  if (Notification.permission === "granted") {
    const notification = new Notification("New Alert!", {
      body: "Click here to go to the page",
      icon: "k.png", // Optional icon
    });

    // Add click event to navigate
    notification.onclick = function () {
      window.open(urlg);
    };
  } else {
    alert("Please enable notifications to see alerts!");
  }
}

// Call the function
// showNotification();
