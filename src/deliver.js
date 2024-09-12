document.getElementById('addressForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    const fullName = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const postalCode = document.getElementById('postalCode').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Basic validation
    if (!fullName || !address || !city || !postalCode || !phoneNumber) {
        alert("Please fill out all fields.");
        return;
    }else{
        window.location.href ="payment.html";
    }

    // Display the entered information
    const output = document.getElementById('output');
    output.innerHTML = `
        <h3>Delivery Information</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Postal Code:</strong> ${postalCode}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    `;
});
