
// ! user data
const userData =[];


document.getElementById('product').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  userData.push({
    username: username,
    phone: phone,
    email: email,
    password: password,
  });

  localStorage.setItem("userdata", JSON.stringify(userData));
 
});

console.log(userData);





const scriptURL ="https://script.google.com/macros/s/AKfycbwqg8CGGotICaXgLSWkuNSDJXa-pTocA8G4VggLaG8iXMu-byEvCKAKeLoOjOKbHphOmQ/exec";
const form = document.forms["product"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("welcome to kitmo ")
    )
    .then(() => {
      window.location.href = "index.html";
    })
    .catch((error) => console.error("Error!", error.message));
});