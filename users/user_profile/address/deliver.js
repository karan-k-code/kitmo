let response;

let buyItam = JSON.parse(localStorage.getItem("databuy")) || [];

const fn = async () => {
  response = await apiCallGet(urls + "/users/user");
  console.log(response);
};

fn();

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
    } else {
      // window.location.href ="payment.html";
    }

    // Display the entered information
    const output = document.getElementById("output");
    output.innerHTML = `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Postal Code:</strong> ${postalCode}</p>
        <p><strong>Phone Number:</strong>+91 ${phoneNumber}${
      phoneNumberB == "+91 " ? "" : ", " + phoneNumberB
    }</p>
    `;

    const url = urls + "/users/address";
    let formData = new FormData(this);
    let data = Object.fromEntries(formData);

    const result = await apiCall(url, data);
  });

const boxad = document.getElementById("boxadd");
const boxadd = document.getElementById("addressFormA");
const genAddress = async () => {
  const url = urls + "/users/user";
  const user = await apiCallGet(url);
  const address = user.data.address;

  const addressForm = document.getElementById("addressForm");
  addressForm.style.display = "none";
  if (address.lenght == 0) {
    addressForm.style.display = "flex";
  }

  boxadd.innerHTML = address
    .map((x) => {
      const { _id, address, city, zip, phoneNumber } = x;
      return `
      <div>
      <input type="radio" name="addressId" value="${_id}">
      <p><strong>Name:</strong> ${user.data.username}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Postal Code:</strong> ${zip}</p>
      <p><strong>Phone Number:</strong>+91 ${user.data.mobile}${
        phoneNumber == "+91 " ? "" : ", " + phoneNumber
      }</p>
      </div>
  `;
    })
    .join(" ");
};

const bsubmit = document.getElementById("bsubmit");

bsubmit.addEventListener("click", async (x) => {
  x.preventDefault();

  let formData = new FormData(boxadd);
  let data = Object.fromEntries(formData);
  const id = getQueryParam("id");

  if (id !== null) {
    buyItam = [];
    buyItam.push({
      productId: id,
      quantity: 1,
    });
    localStorage.setItem("databuy", JSON.stringify(buyItam));
  }

  window.location.href = `${urlg}/payment/index.html?address=${data.addressId}`;
});

genAddress();
