// ! const
// cloud
// const urlg = "https://india-software-karan.github.io/kitmo";
// const urls = "https://kitmo.onrender.com/api/v1";

// local
const urlg = "http://127.0.0.1:5502";
const urls = "http://127.0.0.1:4000/api/v1";

let userData = JSON.parse(localStorage.getItem("userdata"));

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
      return data;
    });

  loaderStop();
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
      return data;
    });

  loaderStop();

  return response;
};

// ! >>>> AAD cart >>>>
const addCart = async (id, qua) => {
  let selecteItam = id;
  console.log(selecteItam);
  let data = {
    productId: selecteItam,
    quantity: qua,
  };
  const response = await apiCall(urls + "/product/cart", data);
  calculatCart();
};

// ! Get cart  >>>>>>>
const getCart = async () => {
  const response = await apiCallGet(urls + "/product/getcart");
  return response;
};

// ! Get product >>>>
const getProduct = async () => {
  loaderFn();
  let response = await fetch(`${urls}/product/product`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  loaderStop();
  return response.json();
};

// ! calculat cart
const calculatCart = async () => {
  const response = await getCart();
  let cartIcon = document.getElementById("cart_no");
  cartIcon.innerText = response.data.length;
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
  console.log(response);
};

// ! checkOut function
const checkout = async () => {
  const url = urls + "/users/user";
  const user = await apiCallGet(url);

  if (!user.data.address) {
    console.log("you have no address");
    window.location.href = urlg + "/users/user_profile/address";
  }
};

// ! share product

const shareProduct = () => {
  const url = window.location.href;
  navigator.clipboard.writeText(url);
  // navigator.mediaDevices.getDisplayMedia();
};

// ! likes

const like = async (id) => {
  liketure();
  const response = await apiCallGet(urls + "/likes/like/" + id);
  console.log(response);
};

const liked = async () => {
  const id = getQueryParam("id");
  const response = await apiCallGet(urls + "/likes/liked/" + id);
  console.log(response);
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
let history = [];

const addHistry = async (id) => {
  const url = urls + "/histry/histry/" + id;
  const response = await apiCallGet(url);
  console.log(response);
};
