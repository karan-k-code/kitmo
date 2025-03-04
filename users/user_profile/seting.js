// ! dark mode seting
let darksetingss = localStorage.getItem("dark_seting");

if (darksetingss) {
  const dark_list = document.getElementById("them_list");
  dark_list.value = darksetingss;
}

const darkValue = () => {
  const dark_list = document.getElementById("them_list");
  localStorage.setItem("dark_seting", dark_list.value);
  themFf();
};

const darkmm = () => {
  const body = document.querySelector("body");
  const dark_list = document.getElementById("them_list");
  const sidebar = document.getElementById("sidebar");

  dark_list.style.backgroundColor = "black";
  sidebar.style.backgroundColor = "black";
  body.style.backgroundColor = "black";
  body.style.color = "white";
};
const lightmm = () => {
  const body = document.querySelector("body");
  const dark_list = document.getElementById("them_list");
  dark_list.style.backgroundColor = "white";
  sidebar.style.backgroundColor = "white";
  body.style.backgroundColor = "white";
  body.style.color = "black";
};

// ! dark mode seting
// dark, light, system default

const themFf = () => {
  let darkseting = localStorage.getItem("dark_seting");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  if (darkseting == "dark") {
    darkmm();
  } else if (darkseting == "system") {
    if (systemPrefersDark.matches == true) {
      darkmm();
    } else {
      lightmm();
    }
  } else {
    lightmm();
  }
};

themFf();
