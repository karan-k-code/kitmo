const scriptURL =
  "https://script.google.com/macros/s/AKfycbwX-pf2Gt8hWIJMzxbjbDnRGAex9FCbSnO6W-BUAC9Bz-8x2vLSOZfGItFr84HilEkWFw/exec";
const form = document.forms["product"];

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Disable the submit button to prevent multiple clicks
  form.querySelector("button[type='submit']").disabled = true;

  let formData = new FormData(form);

  const url = urls + "/feedback/developer";
  // const response = await apiCall(url, formData);

  const result = await fetch(url, { method: "POST", body: new FormData(form) });

  console.log(formData);
  console.log(result);

  // fetch(scriptURL, { method: "POST", body: new FormData(form) })
  //   .then((response) => {})
  //   .then(() => {
  //     // setTimeout(reload, 3000);
  //     // window.location.href = "feedback.html";
  //   })
  //   .catch((error) => console.error("Error!", error.message));
});

let reload = () => {
  window.location.reload();
};
