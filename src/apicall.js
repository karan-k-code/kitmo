const register = async (url, forml) => {
  loaderFn();

  let formData = new FormData(forml);
  let data = Object.fromEntries(formData);

  let result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    redirect: "follow",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      loaderStop();
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      loaderStop();
    });

  return result;
};

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
