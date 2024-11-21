// ! const
const urls = "https://kitmo.onrender.com/api/v1";
// const urls = "http://127.0.0.1:4000/api/v1";
let userData;

// ! Api Call
const apiCall = async (url, data) => {
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

  return response;
};

const apiCallGet = async (url) => {
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
  let response = await fetch(`${urls}/product/product`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
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
  const response = await fetch(`${urls}/product/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
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
