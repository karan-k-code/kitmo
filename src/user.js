try {
  document.addEventListener("DOMContentLoaded", async function () {
    const menuButton = document.getElementById("user_button");
    const menuList = document.getElementById("user_list");

    // !user data
    const url = urls + "/users/user";
    const userdata = await apiCallGet(url);

    if (!userdata?.success) {
      const response = await refreshToken();
      console.log(response);
      if (!response?.success) {
        // window.location.href = `${urlg}/users/login`;
      }
    }

    userData = userdata?.data;

    console.log("userdata", userdata);

    let user = () => {
      if (userData) {
        let { username } = userData;
        menuList.innerHTML = ` <div class="profile">
              <img src="${urlg}/image/userimage.jpg" alt="" />
              <div class="profile_info">
               <h3>Hii, ${username}</h3>
              </div>
              <div class="manage_account" onclick="manageProfile()">
              Manage Account
              </div>
              <div class="manage_account">
              My order
              </div>
              <div class="longout" onclick="myProduct()">
              My product
              </div>
              </div>
              <div class="longout" onclick="longoutBtn()">
              Longout
              </div>
              </div>`;
      } else {
        menuList.innerHTML = ` <div class="button">
    <a href="${urlg}/users/login/" class="login">Login</a>
    <a href="${urlg}/users/signup/" class="sign_up">Sign Up</a>
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
} catch (error) {
  console.log(error);
}

// ! longout
let longoutBtn = async () => {
  const url = `${urls}/users/logout`;

  const response = await apiCall(url, undefined);

  if (response.success) {
    window.location.href = urlg + "/users/login/";
  } else {
    alert(response.errors);
  }
};

// ! manageProfile
const manageProfile = () => {
  window.location.href = urlg + "/users/user_profile/index.html?fun=profile";
};
const myProduct = () => {
  window.location.href = urlg + "/product/mange_product/";
};
