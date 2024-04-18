
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle-checkbox');
    darkModeToggle.addEventListener('change', function () {
        const light = document.getElementsByClassName("light");
        document.body.classList.toggle('dark-mode', darkModeToggle.checked);
         light.classList.toggle('dark-mode', darkModeToggle.checked);
    });
});

function toggleColor() {
  var div1 = document.getElementsByClassName("light");
  

  div1.classList.toggle("red");
  
}