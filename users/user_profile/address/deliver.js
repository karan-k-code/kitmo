let response;

const fn = async () => {
  response = await apiCallGet(urls + "/users/user");
  console.log(response);
};

fn();

document
  .getElementById("addressForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data

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
        <h3>Delivery Information</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Postal Code:</strong> ${postalCode}</p>
        <p><strong>Phone Number:</strong>+91 ${phoneNumber}${
      phoneNumberB == "+91 " ? "" : ", " + phoneNumberB
    }</p>
    `;
  });
