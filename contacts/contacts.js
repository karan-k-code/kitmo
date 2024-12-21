fetch(
  "https://people.googleapis.com/v1/people/me/connections?personFields=names,emailAddresses",
  {
    headers: {
      Authorization: `Bearer YOUR_ACCESS_TOKEN`,
    },
  }
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.connections);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
