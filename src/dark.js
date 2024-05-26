
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle-checkbox');
    darkModeToggle.addEventListener('change', function () {
        const lightb = document.getElementsByClassName("light");
        document.body.classList.toggle('dark-mode', darkModeToggle.checked);
        
    });
});

// let darkbtn = document.querySelector("#darkbtn");

// console.dir(darkbtn);

// let hello =()=>{
//     console.log("hello");
// }

//  darkbtn.addEventListener('onclick' ,console.log("hello"));

let lightbtn = document.querySelector(".menu-container");

console.dir(lightbtn);

lightbtn.classList.add('hii');