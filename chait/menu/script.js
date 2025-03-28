document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const menuList = document.getElementById("menu-list");

  menuButton.addEventListener("click", function () {
    menuList.style.right = menuList.style.right === "-200px" ? "0px" : "-200px";
  });

  document.addEventListener("click", function (event) {
    if (
      !menuButton.contains(event.target) &&
      !menuList.contains(event.target)
    ) {
      menuList.style.right = "-200px";
    }
  });
});
