let users = [];

const userBox = document.getElementById("userbox");

let usersfn = async () => {
  const url = `${urls}/api/v1/users/user`;

  const requestOptions = {
    method: "POST",
    credentials: "include",
  };

  const response = await fetch(url, requestOptions).catch((error) =>
    console.error(error)
  );

  let data = await response.json();
  users = await data.data;
  genretusers();
};

const genretusers = async () => {
  return (userBox.innerHTML = await users
    .map((x) => {
      let { _id, username } = x;
      return `<div class="user" onclick="goo('${_id}')" >
    <div class="imagorname" >
      <img src="../image/owner_image-removebg.png" alt="" srcset="" />
      <span class="name">
        <p>${username}</p>
        <span>hii </span>
      </span>
    </div>
    <span class="time">12:12 AM</span>
  </div>`;
    })
    .join(""));
};

usersfn();
