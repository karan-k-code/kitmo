document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("user_button");
  const menuList = document.getElementById("user_list");

// !user data
const userData = JSON.parse(localStorage.getItem("userdata")) || [];



let user = ()=>{
  if(userData.length !== 0){
    let hii =userData.map((x) => {
      let { username, password } = x;

    menuList.innerHTML=` <div class="profile">
            <img src="image/kitmo_logo.png" alt="" />
            <div class="profile_info">
             <h3>Hii, ${username}</h3>
            </div>
            <div class="manage_account">
            Manage Account
            </div>
            <div class="longout" onclick="longoutBtn()">
            Longout
            </div>
            </div>  `;
          })
  }else{
  menuList.innerHTML=` <div class="button">
  <a href="login" class="login">Login</a>
  <a href="signup" class="sign_up">Sign Up</a>
</div> `;
  }
}

  menuButton.addEventListener("click", function () {
    menuList.style.display = menuList.style.display === "none"? "block" : "none";
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

let longoutBtn = () => {
  localStorage.removeItem("userdata");
  window.location.href = "index.html";
};

