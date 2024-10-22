const forml = document.getElementById("product");
const singupBtn = document.getElementById("singupbtn");
const url = "http://127.0.0.1:4000/api/v1/users/login";

singupBtn.addEventListener("click", () => {
  window.location.href = "signup.html";
});

forml.addEventListener("submit", async (e) => {
  e.preventDefault();

  register(url, forml);
});
