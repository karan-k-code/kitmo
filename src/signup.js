
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

let url ="http://127.0.0.1:4000/api/v1/users/register";

const scriptURL ="https://script.google.com/macros/s/AKfycbyRjxVVBxXu9oxnWhHzW8cQE0erOYMC1qpSGvF_uC6QAEd7b8JTLPcYhHusOd2xVXs_1g/exec";
const form = document.forms["product"];

const loader =document.querySelector(".loader")

form.addEventListener("submit",async (e) => {
  e.preventDefault();

  loader.style.display= 'block';
  let response =await fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("welcome to kitmo ")
    )
    .then(() => {
      // window.location.href = "/";
      loader.style.display= 'flex';
      
    })
    .catch((error) => console.error("Error!", error.message));
});

