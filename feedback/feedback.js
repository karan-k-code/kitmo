const scriptURL =
  "https://script.google.com/macros/s/AKfycbwX-pf2Gt8hWIJMzxbjbDnRGAex9FCbSnO6W-BUAC9Bz-8x2vLSOZfGItFr84HilEkWFw/exec";

const form = document.forms["product"];

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Disable the submit button to prevent multiple clicks
  // form.querySelector("button[type='submit']").disabled = true;

  let formData = new FormData(form);
  let data = Object.fromEntries(formData);

  const nameRegex = /^[A-Za-z\s]+$/;

  if (!nameRegex.test(data.name)) {
    alart_mess("name can only contain letters and spaces.");
    return;
  }

  const url = urls + "/feedback/developer";

  loaderFn();

  const result = await fetch(url, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => response.json())
    .then((data) => {
      loaderStop();
      successMsg("feedback send scussfull");
      return data;
    })
    .catch((error) => {
      loaderStop();
      alart_mess(result.errors);
    });

  setTimeout(reload, 3000);
});

let reload = () => {
  window.location.reload();
};
