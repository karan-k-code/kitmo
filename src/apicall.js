const refresh_Token = () => {
  let url = `${urls}/api/v1/users/refresh-token`;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};
