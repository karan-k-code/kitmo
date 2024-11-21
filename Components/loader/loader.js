const loader = document.querySelector(".loader");
const loaderBox = document.querySelector(".loderbox");
const success = document.querySelector(".success_box");

const successMsg = () => {
  success.style.display = "flex";
  loaderBox.style.zIndex = 1;
};

const loaderFn = () => {
  loader.style.display = "flex";
  loaderBox.style.zIndex = 1;
};

const loaderStop = () => {
  loader.style.display = "none";
  loaderBox.style.zIndex = -1;
};
