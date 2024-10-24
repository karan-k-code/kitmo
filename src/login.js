const forml = document.getElementById("product");
const singupBtn = document.getElementById("singupbtn");
const url = "https://kitmo.onrender.com/api/v1/users/login";

singupBtn.addEventListener("click", () => {
  window.location.href = "signup.html";
});

forml.addEventListener("submit", async (e) => {
  e.preventDefault();

  const re = register(url, forml);
  console.log(re);
});
