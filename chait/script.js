const sendmsg = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendButton");
const sendSms = document.getElementById("sendsms");
const fileInput = document.getElementById("file");

const socket = io("http://127.0.0.1:3000");

// const socket = io();
let message;

sendmsg.addEventListener("focus", () => {
  timeNow();
  startTime = timeString; // Record the start time
  console.log("Typing started at: ", startTime);
});

let sendmessge = () => {
  let display = "none";
  if (fileurl !== "") {
    display = "flex";
  } else if (sendmsg.value === "") {
    if (sendmsg.value === "") {
      console.log("hello");
      return;
    }
  }

  message = sendmsg.value;

  timeNow();
  sendSms.innerHTML += `
    <div class="smsgo" id="lastmsg">
        <div class="pdiv">
            <p>
              ${sendmsg.value}
            </p>
            <img src="${fileurl}" style="display:${display}">
            <span class="time"
              ><span id="nowtime">${timeString}</span>
              <span>
                <i class="fa-solid fa-check"></i>
                <i class="fa-solid fa-check second"></i> </span
            ></span>
        </div>
    </div>
    `;

  socket.emit("chat message", sendmsg.value); // Emit message to the server
  socket.emit("chat time", timeString); // Emit time to the server
  sendmsg.value = "";
  fileurl = "";
};

//! fileHandler.js
let fileurl = "";

document
  .getElementById("file")
  .addEventListener("change", async function (event) {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = async function (e) {
        //   console.log(e.target.result);
        fileurl = await e.target.result;
        // console.log(fileurl);
        sendmessge();
      };

      reader.readAsDataURL(file); // Read the file as a data URL
    } else {
      alert("Please select a valid image file.");
    }
  });

//! Listen for "Enter" key press
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    // Check if the key pressed is "Enter"
    sendmessge();
  }
});
sendBtn.addEventListener("click", sendmessge);

let comeMessage;

let comeTime;

socket.on("chat message", (msg) => {
  comeMessage = msg;
  socket.on("chat time", (time) => {
    console.log(time);
    comeTime = time;
  });
  comeMsg();
});

let comeMsg = () => {
  sendSms.innerHTML += `
  <div class="smscome">
  <div class="pdiv">
    <p>${comeMessage}</p>
    <img src="" alt="" srcset="" style="display:none" />
    <span class="time"
      ><span id="nowtime">${comeTime}</span>
      <span>
        <i class="fa-solid fa-check"></i>
        <i class="fa-solid fa-check second"></i> </span
    ></span>
  </div>
</div>
`;
};
