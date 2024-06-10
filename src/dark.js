
const darkModeToggle = document.getElementById('dark-mode-toggle-checkbox');

darkModeToggle.addEventListener("change", function() {
    let buttons = document.querySelectorAll(".light");
    let nav_bar = document.querySelectorAll(".dark_box");
    let opt_dark = document.querySelectorAll(".option_b");
    // Iterate over each button and add the 'dark-mode' class
    buttons.forEach(function(btn) {
        if (darkModeToggle.checked) {
            btn.classList.add("dark-mode");
            btn.classList.remove("no_dark")
        } else {
            btn.classList.remove("dark-mode");
            btn.classList.add("no_dark")
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
    opt_dark.forEach(function(btn) {
        if (darkModeToggle.checked) {
            btn.classList.remove("option_h");
            btn.classList.add("dark_option_h");
         } else {
            btn.classList.remove("dark_option_h");
            btn.classList.add("option_h");
        }
    });

});
