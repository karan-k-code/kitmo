const getLocation = document.getElementById("location_p");

getLocation.addEventListener('click',async ()=>{
    navigator.geolocation.getCurrentPosition(get,fails);
})


// ! get location user

// ! api call
async function getp(let ,lot) {
    const promise= await fetch(
         `http://api.weatherapi.com/v1/current.json?key=dd38262ae49246139d9172000242008&q=${let},${lot}&aqi=yes`
     );
     return await promise.json(); 
 }

const curentLocation = document.getElementById("curent-location");
// ! position 
async function get (position){    
    const result= await getp(position.coords.latitude,position.coords.longitude);
    curentLocation.innerText =`${result.location.country}`;
}

// ! error
function fails(){
    
}
