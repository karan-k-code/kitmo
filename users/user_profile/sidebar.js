const likeBtn = document.getElementById("likebtn");
const profileBtn = document.getElementById("profile");
const saveBtn = document.getElementById("saveBtn");
const orderBtn = document.getElementById("orderBtn");
const settingBtn = document.getElementById("SettingBtn");
const histryBtn = document.getElementById("histryBtn");

const profileDetailes = document.getElementById("profile_detailes");
const likef = document.getElementById("likes");
const histrys = document.getElementById("histrys");
const orders = document.getElementById("orders");

let click = profileBtn;
let fun = getQueryParam("fun");

const sidebar = document.getElementById("sidebar");

// ! like
const likeg = () => {
  remoreclick();
  click = likeBtn;
  fun = "like";
  currentclick();
  profileDetailes.style.display = "none";
  likef.style.display = "grid";
  histrys.style.display = "none";
  orders.style.display = "none";
  ganretLikes();
};
likeBtn.addEventListener("click", (x) => {
  window.location.href = urlg + "/users/user_profile/index.html?fun=like";
  // likeg();
});

// ! profile
const profileg = async () => {
  remoreclick();
  click = profileBtn;
  fun = "profile";
  currentclick();

  profileDetailes.style.display = "flex";
  likef.style.display = "none";
  histrys.style.display = "none";
  orders.style.display = "none";
  await generateProfile();
  changeImage();
};
profileBtn.addEventListener("click", (x) => {
  window.location.href = urlg + "/users/user_profile/index.html?fun=profile";

  // profileg();
});

// ! order
const orderg = () => {
  remoreclick();
  click = orderBtn;
  fun = "order";
  currentclick();

  profileDetailes.style.display = "none";
  likef.style.display = "none";
  histrys.style.display = "none";
  orders.style.display = "flex";
  // ordergen("all");
};
orderBtn.addEventListener("click", (x) => {
  window.location.href =
    urlg + "/users/user_profile/index.html?fun=order&filter=all";

  // orderg();
});

// ! save
const saveg = () => {
  remoreclick();
  click = saveBtn;
  fun = "save";
  currentclick();

  profileDetailes.style.display = "none";
  likef.style.display = "none";
  histrys.style.display = "none";
  orders.style.display = "none";
};
saveBtn.addEventListener("click", (x) => {
  window.location.href = urlg + "/users/user_profile/index.html?fun=save";

  // saveg();
});

// ! setting
const settingg = () => {
  remoreclick();
  click = settingBtn;
  fun = "setting";
  currentclick();

  profileDetailes.style.display = "none";
  likef.style.display = "none";
  histrys.style.display = "none";
  orders.style.display = "none";
};
settingBtn.addEventListener("click", (x) => {
  window.location.href = urlg + "/users/user_profile/index.html?fun=setting";
  // settingg();
});

// ! histry
const historyg = () => {
  remoreclick();
  click = histryBtn;
  fun = "histry";
  currentclick();
  histrys.style.display = "grid";
  profileDetailes.style.display = "none";
  likef.style.display = "none";
  orders.style.display = "none";
  genhistry();
};
histryBtn.addEventListener("click", (x) => {
  window.location.href = urlg + "/users/user_profile/index.html?fun=histry";
  // historyg();
});

const currentclick = () => {
  click.style.borderColor = "rgb( 78 , 78 , 78)";
};

const remoreclick = () => {
  click.style.borderColor = "transparent";
  //   click.style.borderColor = "transparent";
};

currentclick();

if (fun == "profile") {
  profileg();
} else if (fun == "like") {
  likeg();
} else if (fun == "histry") {
  historyg();
} else if (fun == "save") {
  saveg();
} else if (fun == "setting") {
  settingg();
} else if (fun == "order") {
  orderg();
} else {
  profileg();
}
