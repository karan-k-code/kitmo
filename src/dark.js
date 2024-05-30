const btn = document.querySelectorAll(".light");


console.log(btn);


document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle-checkbox');
    darkModeToggle.addEventListener('change', function () {
        // const lightb = document.getElementsByClassName("light");
        document.body.classList.toggle('dark-mode', darkModeToggle.checked);
        // btn.classList.replace("no_dark", "dark-mode");
        btn.classList.toggle('dark-mode', darkModeToggle.checked);

        
    });
});

// let darkbtn = document.querySelector("#darkbtn");

// console.dir(darkbtn);

// let hello =()=>{
//     console.log("hello");
// }

//  darkbtn.addEventListener('onclick' ,console.log("hello"));

// let btn = document.querySelector(".light")

// let lightbtn = document.querySelector("#darkbtn");

// lightbtn.onclick = (e)=>{
//     console.log(e);
//     btn.classList.add('dark-mode');
//     btn.classList.remove('light');
// }