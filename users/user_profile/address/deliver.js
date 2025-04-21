const bsubmit = document.getElementById("bsubmit");
const addressForm = document.getElementById("addressForm");
let response;

let buyItam = JSON.parse(localStorage.getItem("databuy")) || [];

const fn = async () => {
  response = await apiCallGet(urls + "/users/user");
};

fn();
// ! address data
document
  .getElementById("addressForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    this.style.display = "none";

    const fullName = response.data.username;
    const phoneNumber = response.data.mobile;

    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const postalCode = document.getElementById("postalCode").value;
    const phoneNumberB = document.getElementById("phoneNumber").value;

    // Basic validation
    if (!address || !city || !postalCode) {
      alert("Please fill out all fields.");
      return;
    }

    // Display the entered information
    const output = document.getElementById("output");
    output.innerHTML = `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Postal Code:</strong> ${postalCode}</p>
        <p><strong>Phone Number:</strong>+91 ${phoneNumber} ${phoneNumberB}</p>
    `;

    const url = urls + "/users/address";
    let formData = new FormData(this);
    let data = Object.fromEntries(formData);

    const result = await apiCall(url, data);

    if (result.success) {
      genAddress();
    } else {
      alert(result.errors);
    }
  });

const boxad = document.getElementById("boxadd");
const boxadd = document.getElementById("addressFormA");
const genAddress = async () => {
  const user = await apiCallGet(urls + "/users/user");
  const address = user.data.address;

  if (address.length == 0) {
    addressForm.style.display = "flex";
    bsubmit.style.display = "none";
  } else {
    addressForm.style.display = "none";
    bsubmit.style.display = "block";
  }

  boxadd.innerHTML = address
    .map((x) => {
      const { _id, address, city, zip, phoneNumber } = x;
      return `
      <div>
      <input type="radio" name="addressId" value="${_id}">
      <p><strong>Name:</strong> ${user.data.fullName}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Postal Code:</strong> ${zip}</p>
      <p><strong>Phone Number:</strong>+91 ${user.data.mobile} ${phoneNumber}</p>
      </div>
  `;
    })
    .join(" ");
};

bsubmit.addEventListener("click", async (x) => {
  x.preventDefault();

  let formData = new FormData(boxadd);
  let data = Object.fromEntries(formData);
  const id = getQueryParam("id");
  if (!data.addressId) {
    return;
  }

  if (id !== null) {
    localStorage.setItem("databuy", JSON.stringify(buyItam));
  }

  window.location.href = `${urlg}/payment/index.html?address=${data.addressId}`;
});

genAddress();

const newaddress = document.getElementById("newaddress");
newaddress.addEventListener("click", async (x) => {
  addressForm.style.display = "flex";
});
