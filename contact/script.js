// ! contact us

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Mock form submission
    console.log("Form submitted:", { name, email, message });

    // Show response message
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent =
      "Thank you for your message! We will get back to you shortly.";

    // Clear form fields
    document.getElementById("contactForm").reset();
  });
