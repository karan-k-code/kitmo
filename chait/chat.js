const box = document.getElementById("box");
let chat = localStorage.getItem("allMessage");

const socket = io("https://chat-sjwo.onrender.com", {
  withCredentials: true,
});

let chatBox = () => {
  if (chat) {
    console.log(users);
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
  const url = `${urls}/api/v1/users/refresh-token`;

  const requestOptions = {
    method: "POST",
    credentials: "include",
  };

  const res = await fetch(url, requestOptions).catch((error) =>
    console.error(error)
  );

  console.log(res);
};
