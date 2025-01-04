// menu button
const fLine = document.querySelector("#first_line");
const mLine = document.querySelector("#midel_line");
const eLine = document.querySelector("#end_line");

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const menuList = document.getElementById("menu-list");

  menuButton.addEventListener("click", function () {
    menuList.style.left = menuList.style.left === "-200px" ? "0px" : "-200px";

    if (menuList.style.left === "0px") {
      fLine.classList.add("first_line");
      mLine.classList.add("midel_line");
      eLine.classList.add("end_line");
    } else {
      fLine.classList.remove("first_line");
      mLine.classList.remove("midel_line");
      eLine.classList.remove("end_line");
    }
  });

  document.addEventListener("click", function (event) {
    if (
      !menuButton.contains(event.target) &&
      !menuList.contains(event.target)
    ) {
      menuList.style.left = "-200px";
      fLine.classList.remove("first_line");
      mLine.classList.remove("midel_line");
      eLine.classList.remove("end_line");
    }
  });
});
