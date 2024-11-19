const forml = document.getElementById("product");
const singupBtn = document.getElementById("singupbtn");

singupBtn.addEventListener("click", () => {
  window.location.href = "signup.html";
});

function myFunction() {
  console.log("5 seconds passed!");
}

forml.addEventListener("submit", async (e) => {
  e.preventDefault();
  const url = `${urls}/api/v1/users/login`;

  const userdata = await register(url, forml);
  successMsg();

  localStorage.setItem("userdata", JSON.stringify(userdata.data.user));
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
});
