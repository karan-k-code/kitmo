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

const sendproduct = async (url, forml) => {
  loaderFn(); // Start the loader

  try {
    // Create FormData object
    let formData = new FormData(forml);

    console.log(formData);

    // Fetch request
    let response = await fetch(url, {
      method: "POST",
      body: formData, // Pass the FormData directly
      redirect: "follow",
      credentials: "include",
    });

    // Check if the response is okay
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse JSON response
    let result = await response.json();

    loaderStop(); // Stop the loader
    return result;
  } catch (error) {
    console.error("Error:", error);
    loaderStop(); // Ensure loader stops even if there's an error
    return null; // Optionally return null or handle it appropriately
  }
};
