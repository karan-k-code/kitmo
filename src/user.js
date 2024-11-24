document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("user_button");
  const menuList = document.getElementById("user_list");

  // !user data

  userData = JSON.parse(localStorage.getItem("userdata"));

  let user = () => {
    if (userData) {
      let { username } = userData;
      menuList.innerHTML = ` <div class="profile">
            <img src="../image/kitmo_logo.png" alt="" />
            <div class="profile_info">
             <h3>Hii, ${username}</h3>
            </div>
            <div class="manage_account" onclick="manageProfile()">
            Manage Account
            </div>
            <div class="manage_account">
            My order
            </div>
            <div class="longout" onclick="longoutBtn()">
            Longout
            </div>
            </div>`;
    } else {
      menuList.innerHTML = ` <div class="button">
  <a href="./users/login/" class="login">Login</a>
  <a href="./users/signup/" class="sign_up">Sign Up</a>
  </div> `;
    }
  };

  menuButton.addEventListener("click", function () {
    menuList.style.display =
      menuList.style.display === "none" ? "block" : "none";
    user();
  });

  // ! other click function
  document.addEventListener("click", function (event) {
    if (
      !menuButton.contains(event.target) &&
      !menuList.contains(event.target)
    ) {
      menuList.style.display = "none";
    }
  });
});

// ! longout
let longoutBtn = async () => {
  const url = `${urls}/api/v1/users/logout`;

  const requestOptions = {
    method: "POST",
    credentials: "include",
  };

  await fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

  localStorage.removeItem("userdata");
  window.location.href = "index.html";
};

// ! manageProfile
const manageProfile = () => {
  window.location.href = "./users/user_profile/";
};
