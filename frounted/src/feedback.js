// In your main HTML file (inside <script> tags or an external .js file)
// document.getElementById('feedback-form').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent form submission

//     // Get form values
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const feedback = document.getElementById('message').value;

//     // You can now process this data (e.g., send it to a server or display a thank-you message)
//     console.log(`Received feedback from ${name} (${email}): ${feedback}`);
// });


const scriptURL ="https://script.google.com/macros/s/AKfycbwX-pf2Gt8hWIJMzxbjbDnRGAex9FCbSnO6W-BUAC9Bz-8x2vLSOZfGItFr84HilEkWFw/exec";
const form = document.forms["product"];

const loader =document.querySelector(".loader")


form.addEventListener("submit", (e) => {
  e.preventDefault();
  loader.style.display= 'block';
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you for giving feedback.")
    )
    .then(() => {
      window.location.href = "feedback.html";
    })
    .catch((error) => console.error("Error!", error.message));
});