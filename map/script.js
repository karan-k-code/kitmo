let map;
let geocoder;

function initMap(lat = 28.6139, lng = 77.209) {
  const latlng = { lat: lat, lng: lng }; // Example: New Delhi coordinates

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: latlng,
  });

  geocoder = new google.maps.Geocoder();

  new google.maps.Marker({
    position: latlng,
    map: map,
  });
}

function getAddressFromLatLng(lat = 28.6139, lng = 77.209) {
  const latlng = { lat: lat, lng: lng }; // Replace with your desired coordinates

  geocoder.geocode({ location: latlng }, (results, status) => {
    if (status === "OK") {
      if (results[0]) {
        alert("Address: " + results[0].formatted_address);
        console.log(results[0]);
        curentLocation.innerText = `hii`;
      } else {
        alert("No results found");
      }
    } else {
      alert("Geocoder failed due to: " + status);
    }
  });
}

const getLocation = document.getElementById("location_p");

//!  get location user

//  api call
async function getp(let, lot) {
  initMap(let, lot);
  getAddressFromLatLng(let, lot);
  const promise = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=0ef92f8f99604c3095f23816242808&q=${let},${lot}&aqi=yes`
  );
  return await promise.json();
}

const curentLocation = document.getElementById("curent-location");

//  position
async function get(position) {
  const result = await getp(
    position.coords.latitude,
    position.coords.longitude
  );

  //   curentLocation.innerText = `${result.location.country}`;
}

//  error
function fails(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alart_mess("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alart_mess("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alart_mess("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alart_mess("An unknown error occurred.");
      break;
  }
}

getLocation.addEventListener("click", async () => {
  navigator.geolocation.getCurrentPosition(get, fails);
});

initMap();
