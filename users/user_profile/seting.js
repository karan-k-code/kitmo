// ! dark mode seting

let darkseting = localStorage.getItem("dark_seting");

if (darkseting) {
  const dark_list = document.getElementById("them_list");
  dark_list.value = darkseting;
}

const darkValue = () => {
  const dark_list = document.getElementById("them_list");
  localStorage.setItem("dark_seting", dark_list.value);
};
