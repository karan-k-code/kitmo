const forml = document.getElementById("product");
const loginBtn = document.getElementById("loginbtn");
const url = `${urls}/users/register`;

loginBtn.addEventListener("click", () => {
  window.location.href = "../login/";
});

const register = async (url, forml) => {
  loaderFn();

  let formData = new FormData(forml);
  let data = Object.fromEntries(formData);

  let result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    redirect: "follow",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      loaderStop();
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      loaderStop();
    });

  return result;
};

forml.addEventListener("submit", async (e) => {
  e.preventDefault();

  let formData = new FormData(forml);
  let data = Object.fromEntries(formData);

  const nameRegex = /^[A-Za-z\s]+$/;

  if (!nameRegex.test(data.username)) {
    alart_mess("Username can only contain letters and spaces.");
    return;
  }

  if (data.mobile.length !== 10) {
    alart_mess("worng mobile number");
    return;
  }
  if (data.password.length < 7) {
    alart_mess("min 8 charter password reqied");
    return;
  }

  // ! Apicall
  let userdata = await register(url, forml);

  if (userdata.success == true) {
    successMsg("welcome to kitmo");
    setTimeout(() => {
      window.location.href = "../../index.html";
    }, 2000);
  } else {
    alart_mess(userdata.errors);
  }
});

const contnubtnDisbal = () => {
  const continueH = document.getElementById("continue");
  const term_and_condition_h = document.getElementById("term_and_condition");

  if (term_and_condition_h.checked) {
    continueH.style.backgroundColor = "#5ab8e4";
    continueH.style.cursor = "pointer";
    continueH.disabled = false;
  } else {
    continueH.style.backgroundColor = "rgba(142, 142, 145, 0.897)";
    continueH.style.cursor = "default";
    continueH.disabled = true;
  }
};

contnubtnDisbal();
