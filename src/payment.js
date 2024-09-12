// document.getElementById('payment-form').addEventListener('submit', function (e) {
//     e.preventDefault(); // Prevent form submission

//     // Basic validation
//     const name = document.getElementById('name').value.trim();
//     const cardNumber = document.getElementById('card-number').value.trim();
//     const expiry = document.getElementById('expiry').value.trim();
//     const cvv = document.getElementById('cvv').value.trim();

//     if (!name || !cardNumber || !expiry || !cvv) {
//         alert('Please fill out all fields.');
//         return;
//     }

//     // Example validation for card number (simple check)
//     if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber)) {
//         alert('Please enter a valid card number.');
//         return;
//     }

//     // Example validation for expiry date (MM/YY format)
//     if (!/^\d{2}\/\d{2}$/.test(expiry)) {
//         alert('Please enter a valid expiry date (MM/YY).');
//         return;
//     }

//     // Example validation for CVV
//     if (!/^\d{3}$/.test(cvv)) {
//         alert('Please enter a valid CVV.');
//         return;
//     }

//     // Process the payment (this is just a placeholder)
//     alert('Payment processed successfully!');
// });


