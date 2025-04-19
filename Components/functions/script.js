// ! const
// cloud
const urlg = "https://karan-k-code.github.io/kitmo";
const urls = "https://kitmo.onrender.com/api/v1";

// local
// const urlg = "http://127.0.0.1:5503";
// const urls = "http://127.0.0.1:5000/api/v1";

// network
// const urlg = "http://192.168.220.23:5503";
// const urls = "http://192.168.220.23:5000/api/v1";

let userData = JSON.parse(localStorage.getItem("userdata"));
const Currency = "₹"; // $

// ! Api post Call
const apiCall = async (url, data) => {
  loaderFn();
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    redirect: "follow",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      loaderStop();
      return data;
    })
    .catch((error) => {
      loaderStop();
      // console.log(error.message);
    });

  return response;
};

// ! GET Api Call End
const apiCallGet = async (url) => {
  loaderFn();
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      loaderStop();
      return data;
    })
    .catch((error) => {
      loaderStop();
      // console.log(error);
    });

  return response;
};

// ! >>>> AAD cart >>>>
const addCart = async (id, qua) => {
  let data = {
    productId: id,
    quantity: qua,
  };
  await apiCall(urls + "/product/cart", data);
  calculatCart();
  notif(id);
};

// ! Get cart  >>>>>>>
const getCart = async () => {
  loaderFn();
  const response = await apiCallGet(urls + "/product/getcart");
  if (response?.success) {
    loaderStop();
  } else {
    loaderStop();
    alert(response?.errors);
  }
  return response;
};

// ! Get product >>>>
const getProduct = async () => {
  loaderFn();
  const response = await fetch(`${urls}/product/product`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error) => {
    console.log(error);
    loaderStop();
  });
  loaderStop();
  return response.json();
};

// ! calculat cart
const calculatCart = async () => {
  const response = await getCart();
  let cartIcon = document.getElementById("cart_no");

  if (response?.success) {
    cartIcon.innerText = response.data.length || "0";
  }
};

// ! find product <<<<<<>>>>>>>
const findProduct = async (id) => {
  loaderFn();
  const response = await fetch(`${urls}/product/product/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  loaderStop();
  return response.json();
};

// ! find cart item
const findCartItem = async (id) => {
  const response = await fetch(`${urls}/product/cart/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    credentials: "include",
  });
  return response.json();
};

// ! URL >>>>>>>>>>>>>>
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// ! smoth animation a tag
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ! refreshtoken
const refreshToken = async () => {
  const response = await apiCall(urls + "/users/refreshtoken", undefined);
  return response;
};

// ! checkOut function
const checkout = async () => {
  const product = getQueryParam("id");
  window.location.href = `${urlg}/users/user_profile/address/index.html?id=${product}`;
};

// ! share product
const shareProduct = () => {
  const url = window.location.href;
  navigator.clipboard.writeText(url);
};

// ! likes
const like = async (id) => {
  liketure();
  await apiCallGet(urls + "/likes/like/" + id);
};

const liked = async () => {
  const id = getQueryParam("id");
  const response = await apiCallGet(urls + "/likes/liked/" + id);
  if (response.data == null) {
    return;
  } else {
    liketure();
  }
};

const liketure = () => {
  const likeTure = document.getElementById("like-ture");
  const likefalus = document.getElementById("like-falus");
  if (likeTure.style.display == "flex") {
    likeTure.style.display = "none";
    likefalus.style.display = "flex";
  } else {
    likeTure.style.display = "flex";
    likefalus.style.display = "none";
  }
};

// ! histry
// let histor y = [];

const addHistry = async (id) => {
  const url = urls + "/histry/histry/" + id;
  apiCallGet(url);
};

// ! goo funcation
const goo = (id) => {
  addHistry(id);
  window.open(`${urlg}/buy/index.html?id=${id}`, "_blank");
};

// ! edit product
const editProduct = (id) => {
  window.open(`${urlg}/product/edite/index.html?id=${id}`, "_blank");
};

// ! edit product get
const editproductget = async (id) => {
  const response = await apiCallGet(urls + "/dashboad/product/edite/" + id);
  return response;
};

// ! geting product category
let getcatgory = async () => {
  let response = await fetch(`${urls}/product/getcatgory`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await response.json();
  categoryData = data.data;
  categoryGen();
};

// ! gen category
const categoryGen = async () => {
  const productCategory = document.getElementById("productCategory");

  let catgory = await categoryData.map((item) => {
    return `<option value="${item._id}">${item.name}</option>`;
  });
  productCategory.innerHTML += catgory.join("");
};

// ! geting product category
// let getcatgory = async () => {
//   let response = await fetch(`${urls}/product/getcatgory`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   let data = await response.json();
//   categoryData = data.data;
//   categoryGen();
//   return data.data;
// };

// ! sendproduct
const sendproduct = async (url, forml) => {
  loaderFn(); // Start the loader

  // Create FormData object
  let formData = new FormData(forml);
  // Fetch request
  let response = await fetch(url, {
    method: "POST",
    body: formData, // Pass the FormData directly
    redirect: "follow",
    credentials: "include",
  }).catch((error) => {
    loaderStop();
    console.log(error);
  });

  // Check if the response is okay
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse JSON response
  let result = await response.json();

  loaderStop(); // Stop the loader
  return result;
};

// ! kitmo log click
homePage = () => {
  window.location.href = urlg;
};

// ! welcome close button
const welcomeClose = () => {
  document.getElementById("welcome_box").style.display = "none";
  localStorage.setItem("welcome", true);
};

//! discountAmount funcation

function calculateDiscount(price, discount) {
  if (price <= 0 || discount < 0 || discount > 100) {
    return "Invalid input";
  }

  const discountAmount = (price * discount) / 100;
  const finalPrice = price - discountAmount;

  return {
    originalPrice: price,
    discountAmount: discountAmount.toFixed(2),
    finalPrice: finalPrice.toFixed(2),
  };
}
