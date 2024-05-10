
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle-checkbox');
    darkModeToggle.addEventListener('change', function () {
        const light = document.getElementsByClassName("light");
        document.body.classList.toggle('dark-mode', darkModeToggle.checked);
         light.classList.toggle('dark-mode', darkModeToggle.checked);
    });
});
