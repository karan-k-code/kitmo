// ! contact us

document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Mock form submission
    const response = await fetch(urls + "/feedback/contactus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
      redirect: "follow",
      credentials: "include",
    });

    console.log(response);

    // Show response message
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent =
      "Thank you for your message! We will get back to you shortly.";

    // Clear form fields
    document.getElementById("contactForm").reset();
  });

const darkmm = () => {
  const body = document.querySelector("body");

  body.style.backgroundColor = "black";
  body.style.color = "white";
};
const lightmm = () => {
  const body = document.querySelector("body");
  body.style.backgroundColor = "white";
  body.style.color = "black";
};

const themFf = () => {
  let darkseting = localStorage.getItem("dark_seting");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  if (darkseting == "dark") {
    darkmm();
  } else if (darkseting == "system") {
    if (systemPrefersDark.matches == true) {
      darkmm();
    } else {
      lightmm();
    }
  } else {
    lightmm();
  }
};

themFf();

let map;
let geocoder;

function initMap() {
  geocoder = new google.maps.Geocoder();
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: 37.7749, lng: -122.4194 }, // Default center (San Francisco)
  });
}

function geocodeAddress() {
  const address = document.getElementById("address").value;

  geocoder.geocode({ address: address }, (results, status) => {
    if (status === "OK") {
      map.setCenter(results[0].geometry.location);
      new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
      });
      alert("Found: " + results[0].formatted_address);
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}
