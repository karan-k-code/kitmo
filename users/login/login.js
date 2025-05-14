const forml = document.getElementById("product");
const singupBtn = document.getElementById("singupbtn");

singupBtn.addEventListener("click", () => {
  window.location.href = "../signup/";
});

forml.addEventListener("submit", async (e) => {
  e.preventDefault();
  const url = `${urls}/users/login`;

  let formData = new FormData(forml);
  let data = Object.fromEntries(formData);

  const response = await apiCall(url, data);

  if (response.success) {
    successMsg("WEL COME");
    setTimeout(() => {
      window.location.href = "../../index.html";
    }, 2000);
  } else {
    alart_mess(response.errors);
  }
});
