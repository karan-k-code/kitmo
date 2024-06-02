
const darkModeToggle = document.getElementById('dark-mode-toggle-checkbox');
console.log(darkModeToggle);

darkModeToggle.addEventListener("change", function() {
    let buttons = document.querySelectorAll(".light");
    // Iterate over each button and add the 'dark-mode' class
    buttons.forEach(function(btn) {
        if (darkModeToggle.checked) {
            
            btn.classList.add("dark-mode");
        } else {
            btn.classList.remove("dark-mode");
        }
    });
    
    
});
