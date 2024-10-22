document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("user_button");
  const menuList = document.getElementById("user_list");

// !user data

const userData = JSON.parse(localStorage.getItem("userdata")) || [];

let user = ()=>{
  if(userData.length !== 0){
    let {username} = userData
    menuList.innerHTML=` <div class="profile">
            <img src="image/kitmo_logo.png" alt="" />
            <div class="profile_info">
             <h3>Hii, ${username}</h3>
            </div>
            <div class="manage_account">
            Manage Account
            </div>
            <div class="manage_account">
            My order
            </div>
            <div class="longout" onclick="longoutBtn()">
            Longout
            </div>
            </div>`;
  }else{
  menuList.innerHTML=` <div class="button">
  <a href="login_kitmo.html" class="login">Login</a>
  <a href="signup.html" class="sign_up">Sign Up</a>
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
let longoutBtn = async () => {
  const url ="http://127.0.0.1:4000/api/v1/users/logout";

const requestOptions = {
  method: "POST",
  credentials: 'include'
};

 await fetch(url, requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  
  localStorage.removeItem("userdata");
  // window.location.href = "index.html";
};

// ! cookies 

// // Function to set a cookie
// function setCookie(name, value, days) {
//   var expires = "";
//   if (days) {
//       var date = new Date();
//       date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//       expires = "; expires=" + date.toUTCString();
//   }
//   document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }

// // Function to get a cookie by name
// function getCookie(name) {
//   var nameEQ = name + "=";
//   var ca = document.cookie.split(';');
//   for (var i = 0; i < ca.length; i++) {
//       var c = ca[i];
//       while (c.charAt(0) === ' ') c = c.substring(1, c.length);
//       if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
//   }
//   return null;
// }

// // Function to check if the cookie consent has been accepted
// function checkCookieConsent() {
//   return getCookie('cookieConsent') === 'accepted';
// }

// // Function to show the cookie banner if consent is not given
// function showCookieBanner() {
//   if (!checkCookieConsent()) {
//       document.getElementById('cookie-banner').style.display = 'block';
//   }
// }

// // Add event listener for the accept cookies button
// document.getElementById('accept-cookies').addEventListener('click', function () {
//   setCookie('cookieConsent', 'accepted', 365); // Set for 1 year
//   document.getElementById('cookie-banner').style.display = 'none';
// });

// // Display cookie banner on page load if consent is not already given
// window.onload = function () {
//   showCookieBanner();
// };


