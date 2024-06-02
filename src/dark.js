
const darkModeToggle = document.getElementById('dark-mode-toggle-checkbox');
console.log(darkModeToggle);

darkModeToggle.addEventListener("change", function() {
    let buttons = document.querySelectorAll(".light");
    let nav_bar = document.querySelectorAll(".dark_box");
    // Iterate over each button and add the 'dark-mode' class
    buttons.forEach(function(btn) {
        if (darkModeToggle.checked) {
            
            btn.classList.add("dark-mode");
        } else {
            btn.classList.remove("dark-mode");
        }
    });
    nav_bar.forEach(function(btn) {
        if (darkModeToggle.checked) {
            btn.classList.remove("nav_light");
            btn.classList.add("nav_dark");
        } else {
            btn.classList.remove("nav_dark");
            btn.classList.add("nav_light");
        }
    });
    
    
});
