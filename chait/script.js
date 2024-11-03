const sendmsg = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendButton");
const sendSms = document.getElementById("sendsms");
const fileInput = document.getElementById("file");
const typing = document.getElementById("typing");

let userId;

let comeuserId;
let allMessage = [];

// ! typing message
sendmsg.addEventListener("focus", () => {
  timeNow();
  socket.emit("typing", timeString);
});

// ! send message

let sendmessge = () => {
  const display = fileurl !== "" ? "flex" : "none";
  const display1 = sendmsg.value !== "" ? "flex" : "none";

  if (sendmsg.value === "") {
    return;
  }

  console.log(result);

  timeNow();
  sendSms.innerHTML += `
    <div class="smsgo" id="lastmsg">
        <div class="pdiv">
            <p style="display:${display1}">
              ${sendmsg.value}
            </p>
            <img src="${fileurl}" style="display:${display}">
            <span class="time"
              ><span id="nowtime">${timeString}</span>
              <span class="">
                <i class="fa-solid fa-check"></i>
                <i class="fa-solid fa-check second"></i> </span
            ></span>
        </div>
    </div>
    `;

  allMessage.push({
    message: sendmsg.value,
    file: fileurl,
    time: timeString,
    sendSuccess: result.connected,
    messagetype: "send",
  });

  localStorage.setItem(`userId${chat}`, JSON.stringify(allMessage));

  try {
    socket.emit("chat", {
      message: sendmsg.value,
      file: fileurl,
      time: timeString,
      sendSuccess: result.connected,
      messagetype: "come",
      usertosend: chat,
    });
    console.log("is work profect");
  } catch (error) {
    console.log("error", error);
  }

  sendmsg.value = "";
  fileurl = "";
};

//! fileHandler.js
let fileurl = "";

fileInput.addEventListener("change", async function (event) {
  const file = event.target.files[0]; // Get the selected file

  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.onload = async function (e) {
      //   console.log(e.target.result);
      fileurl = await e.target.result;
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
    sendmessge();
  }
});
sendBtn.addEventListener("click", sendmessge);

//! comming massage the server

let comeMessage;

socket.on("typing", async (typing) => {
  this.typing.innerHTML = `typing start ${typing}`;
});
socket.on("your user id", async (id) => {
  userId = id;
  console.log(id);
});

let result = socket.on("chat message", async (msg) => {
  allMessage.push(msg);
  comeMessage = msg;

  const { userId } = msg;

  comeuserId = userId;

  localStorage.setItem(`userId${comeuserId}`, JSON.stringify(allMessage));
  console.log(msg);
  comeMsg();
});

// show message
let comeMsg = () => {
  const { message, time, file } = comeMessage;

  let show = file ? "flex" : "none";
  let show2 = message ? "flex" : "none";

  sendSms.innerHTML += `
  <div class="smscome">
  <div class="pdiv">
    <p style="display:${show2}">${message}</p>
    <img src="${file}" alt="" srcset="" style="display:${show}" />
    <span class="time"
      ><span id="nowtime">${time}</span>
    </span>
  </div>
</div>
`;
};

const genreatMessage = async () => {
  return (sendSms.innerHTML = allMessage
    .map((x) => {
      let { message, file, time, messagetype } = x;
      if (messagetype === "come") {
        return `
      <div class="smscome">
      <div class="pdiv">
        <p style="display:flex">${message}</p>
        <img src="${file}" alt="" srcset="" style="display:flex" />
        <span class="time"
          ><span id="nowtime">${time}</span></span>
      </div>
    </div>
    `;
      } else {
        return `
        <div class="smsgo" id="lastmsg">
            <div class="pdiv">
                <p>
                  ${message}
                </p>
                <img src="${file}" style="display:flex">
                <span class="time"
                  ><span id="nowtime">${time}</span>
                  <span class="">
                    <i class="fa-solid fa-check"></i>
                    <i class="fa-solid fa-check second"></i> </span
                ></span>
            </div>
        </div>
        `;
      }
    })
    .join(""));
};

let clearAllMessage = document.getElementById("clearAllMessage");

clearAllMessage.addEventListener("click", () => {
  localStorage.setItem(`userId${comeuserId}`, JSON.stringify([]));
  window.location.reload();
});
