const loader = document.querySelector(".loader");
const loaderBox = document.querySelector(".loderbox");
const success = document.querySelector(".success_box");
const alart_h = document.querySelector(".alart_b");

const successMsg = (message = "Successfull") => {
  success.style.display = "flex";
  loaderBox.style.zIndex = 1;
  success.innerHTML = `${message}`;
};

const alart_mess = (message) => {
  alart_h.style.display = "flex";
  loaderBox.style.zIndex = 1;
  alart_h.innerHTML = `${message}`;
  setTimeout(() => {
    alart_h.style.display = "none";
    loaderBox.style.zIndex = -1;
  }, 2000);
};

// successMsg("hello");
// alart_mess("hello");

const loaderFn = () => {
  loader.style.display = "flex";
  loaderBox.style.zIndex = 1;
};

const loaderStop = () => {
  loader.style.display = "none";
  loaderBox.style.zIndex = -1;
};
