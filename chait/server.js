// const socket = io();

// function joinRoom() {
//   //   const roomId = document.getElementById("room").value;
//   socket.emit("join-room", roomId);
// }

// function sendMessage() {
//   //   const message = document.getElementById("message").value;
//   //   const roomId = document.getElementById("room").value;
//   socket.emit("private-message", { roomId, message });
// }

// // Listen for incoming messages
// socket.on("private-message", (data) => {
//   console.log("sender", data.sender, "message", data.message);
//   //   const messages = document.getElementById("messages");
//   //   const newMessage = document.createElement("div");
//   //   newMessage.textContent = `${data.sender}: ${data.message}`;
//   //   messages.appendChild(newMessage);
// });

// Connect to the server

// Capture the form submit event to send a message
// document.getElementById("form").addEventListener("submit", (event) => {
//   event.preventDefault(); // Prevent form from submitting in the usual way
//   const messageInput = document.getElementById("messageInput");
//   const message = messageInput.value;

// });

// Listen for incoming messages from the server
