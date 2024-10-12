const forml = document.getElementById("product");
const loader =document.querySelector(".loader")
const success =document.querySelector(".success_box")
const url ="http://192.168.48.23:4000/api/v1/users/login"
// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const username = document.getElementById('mobile').value;
//     const password = document.getElementById('password').value;


//     // if (username === 'admin' && password === 'password') {
//     //     alert('Login successful!');
//     // } else {
//     //     alert('Invalid username or password.');
//     // }
// });

// async function getData() {
//     const url = 'Http://localhost:3000/user';
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
//       const json = await response.json();
//       console.log(json);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }

  // const scriptURL ="https://script.google.com/macros/s/AKfycbxOII7Vu18SDW8ZdU7vsd3jwXlSsuzp2xymRZQh3wNefxSJZ_qKg6_KqJQHRMp8Z1DZ/exec";
// const form = document.forms["product"];




// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   loader.style.display= 'block';
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) =>{
//       loader.style.display= 'none';
//     success.style.display= 'flex';
//     }
//     )
//     .then(() => {
//       reload();
//       // setTimeout(reload,3000)
//       // window.location.href = "index.html";
//     })
//     .catch((error) => console.error("Error!", error.message));
// });

// let reload=() =>{ 
//   window.location.href = "/";
// }





forml.addEventListener('submit',async(e)=>{
  e.preventDefault()
  // ! Apicall
  let userdata = await register(url,forml,loader);
  console.log(userdata.data.user)
  userData = userdata.data.user
  localStorage.setItem("userdata", JSON.stringify(userData));
})
