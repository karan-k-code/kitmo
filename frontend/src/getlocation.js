const getLocation = document.getElementById("location_p");

// ! get location user

// ! api call
async function getp(let ,lot) {
    const promise= await fetch(
         `https://api.weatherapi.com/v1/current.json?key=0ef92f8f99604c3095f23816242808&q=${let},${lot}&aqi=yes`
     )
     return await promise.json(); 
 }

const curentLocation = document.getElementById("curent-location");
// ! position 
async function get (position){ 
    const result= await getp(position.coords.latitude,position.coords.longitude);
    curentLocation.innerText =`${result.location.country}`;
}

// ! error
function fails(error){
    console.log("sorry babu")
    switch(error.code) {
              case error.PERMISSION_DENIED:
                console.log("User denied the request for Geolocation.");
                break;
              case error.POSITION_UNAVAILABLE:
                console.log("Location information is unavailable.");
                break;
              case error.TIMEOUT:
                console.log("The request to get user location timed out.");
                break;
              case error.UNKNOWN_ERROR:
                console.log("An unknown error occurred.");
                break;
            }
}

getLocation.addEventListener('click',async ()=>{
    navigator.geolocation.getCurrentPosition(get,fails);
})



// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition, showError);
//   } else {
//     console.log("Geolocation is not supported by this browser.");
//   }
  
//   function showPosition(position) {
//     var latitude = position.coords.latitude;
//     var longitude = position.coords.longitude;
//     console.log("Latitude: " + latitude + "\nLongitude: " + longitude);
//   }
  
//   function showError(error) {
//     switch(error.code) {
//       case error.PERMISSION_DENIED:
//         console.log("User denied the request for Geolocation.");
//         break;
//       case error.POSITION_UNAVAILABLE:
//         console.log("Location information is unavailable.");
//         break;
//       case error.TIMEOUT:
//         console.log("The request to get user location timed out.");
//         break;
//       case error.UNKNOWN_ERROR:
//         console.log("An unknown error occurred.");
//         break;
//     }
//   }
  