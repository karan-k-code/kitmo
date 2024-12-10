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

const sidebar = document.getElementById("sidebar");

likeBtn.addEventListener("click", (x) => {
  remoreclick();
  click = likeBtn;
  currentclick();
  profileDetailes.style.display = "none";
  likef.style.display = "grid";
  histrys.style.display = "none";
  orders.style.display = "none";

  ganretLikes();
});
profileBtn.addEventListener("click", (x) => {
  remoreclick();
  click = profileBtn;
  currentclick();

  profileDetailes.style.display = "flex";
  likef.style.display = "none";
  histrys.style.display = "none";
  orders.style.display = "none";
  generateProfile();
});
orderBtn.addEventListener("click", (x) => {
  remoreclick();
  click = orderBtn;
  currentclick();
  profileDetailes.style.display = "none";
  likef.style.display = "none";
  histrys.style.display = "none";
  orders.style.display = "flex";
});
saveBtn.addEventListener("click", (x) => {
  remoreclick();
  click = saveBtn;
  currentclick();

  profileDetailes.style.display = "flex";
  likef.style.display = "none";
  histrys.style.display = "none";
  orders.style.display = "none";
});
settingBtn.addEventListener("click", (x) => {
  remoreclick();
  click = settingBtn;
  currentclick();

  profileDetailes.style.display = "flex";
  likef.style.display = "none";
  histrys.style.display = "none";
  orders.style.display = "none";
});
histryBtn.addEventListener("click", (x) => {
  remoreclick();
  click = histryBtn;
  currentclick();
  histrys.style.display = "grid";
  profileDetailes.style.display = "none";
  likef.style.display = "none";
  orders.style.display = "none";
  genhistry();
});

const currentclick = () => {
  click.style.borderColor = "rgb( 78 , 78 , 78)";
};

const remoreclick = () => {
  click.style.borderColor = "transparent";
  //   click.style.borderColor = "transparent";
};

currentclick();
