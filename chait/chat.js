const box = document.getElementById("box");
let chat = localStorage.getItem("allMessage");

// https://chat-sjwo.onrender.com

const socket = io("http://localhost:8000", {
  withCredentials: true,
});

let chatBox = () => {
  if (chat) {
    let search = users.find((y) => y._id === chat) || [];
    let username = document.getElementById("username");
    genreatMessage();
    return (username.innerHTML = `${search.username}`);
  }
};

const goo = (id) => {
  chat = id;
  localStorage.setItem("chat", chat);
  allMessage = JSON.parse(localStorage.getItem(`userId${chat}`)) || [];
  chatBox();
};

const refreshAccessTokan = async () => {
  const url = `${urls}/users/refresh-token`;

  const requestOptions = {
    method: "POST",
    credentials: "include",
  };

  const res = await fetch(url, requestOptions).catch((error) =>
    console.error(error)
  );

  console.log(res);
};
