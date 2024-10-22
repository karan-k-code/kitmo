const forml = document.getElementById("product");
const loader = document.querySelector(".loader");
const success = document.querySelector(".success_box");
const url = "http://127.0.0.1:4000/api/v1/users/login";

forml.addEventListener("submit", async (e) => {
  e.preventDefault();

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let formData = new FormData(forml);
  let data = Object.fromEntries(formData);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data),
    credentials: "include", // This will ensure cookies are included in the request and response
  };

  try {
    let response = await fetch(
      "http://127.0.0.1:4000/api/v1/users/login",
      requestOptions
    );
    let result = await response.json();

    console.log(result); // Logging the response from the server
  } catch (error) {
    console.error("Error:", error);
  }
});
