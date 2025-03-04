const likeBtn = document.getElementById("likebtn");
const profileBtn = document.getElementById("profile");
const reviewBtn = document.getElementById("reviewBtn");
const orderBtn = document.getElementById("orderBtn");
const settingBtn = document.getElementById("SettingBtn");
const histryBtn = document.getElementById("histryBtn");

const profileDetailes = document.getElementById("profile_detailes");
const likef = document.getElementById("likes");
const histrys = document.getElementById("histrys");
const orders = document.getElementById("orders");
const setings = document.getElementById("setings");

let click = profileBtn;
let fun = getQueryParam("fun") || "profile";

const sidebar = document.getElementById("sidebar");

// ! like
const likeg = () => {
  click = likeBtn;
  fun = "like";
  currentclick();
  profileDetailes.style.display = "none";
  likef.style.display = "grid";
  histrys.style.display = "none";
  setings.style.display = "none";
  orders.style.display = "none";
  ganretLikes();
};

likeBtn.addEventListener("click", (x) => {
  window.location.href = urlg + "/users/user_profile/index.html?fun=like";
  // likeg();
});

// ! profile
const profileg = async () => {
  click = profileBtn;
  fun = "profile";
  currentclick();

  profileDetailes.style.display = "flex";
  likef.style.display = "none";
  histrys.style.display = "none";
  orders.style.display = "none";
  setings.style.display = "none";

  await generateProfile();
  changeImage();
};

profileBtn.addEventListener("click", (x) => {
  window.location.href = urlg + "/users/user_profile/index.html?fun=profile";

  // profileg();
});

// ! order
const orderg = () => {
  click = orderBtn;
  fun = "order";
  currentclick();

  profileDetailes.style.display = "none";
  likef.style.display = "none";
  histrys.style.display = "none";
  setings.style.display = "none";

  orders.style.display = "flex";
};

orderBtn.addEventListener("click", (x) => {
  window.location.href =
    urlg + "/users/user_profile/index.html?fun=order&filter=all";
});

// ! Review
const reviewg = () => {
  click = reviewBtn;
  fun = "review";
  currentclick();

  profileDetailes.style.display = "none";
  likef.style.display = "none";
  histrys.style.display = "none";
  orders.style.display = "none";
  setings.style.display = "none";
};

reviewBtn.addEventListener("click", (x) => {
  window.location.href = urlg + "/users/user_profile/index.html?fun=review";
});

// ! setting
const settingg = () => {
  click = settingBtn;
  fun = "setting";
  currentclick();

  profileDetailes.style.display = "none";
  likef.style.display = "none";
  histrys.style.display = "none";
  orders.style.display = "none";
  setings.style.display = "flex";
};

settingBtn.addEventListener("click", (x) => {
  window.location.href = urlg + "/users/user_profile/index.html?fun=setting";
  // settingg();
});

// ! histry
const historyg = () => {
  click = histryBtn;
  fun = "histry";
  currentclick();
  histrys.style.display = "grid";
  profileDetailes.style.display = "none";
  likef.style.display = "none";
  orders.style.display = "none";
  setings.style.display = "none";

  genhistry();
};

histryBtn.addEventListener("click", (x) => {
  window.location.href = urlg + "/users/user_profile/index.html?fun=histry";
  // historyg();
});

// ! current click color
const currentclick = () => {
  click.style.borderColor = "rgb( 78 , 78 , 78)";
};

if (fun == "profile") {
  profileg();
} else if (fun == "like") {
  likeg();
} else if (fun == "histry") {
  historyg();
} else if (fun == "review") {
  reviewg();
} else if (fun == "setting") {
  settingg();
} else if (fun == "order") {
  orderg();
}
