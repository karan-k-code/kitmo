document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('user_button');
    const menuList = document.getElementById('user_list');

    menuButton.addEventListener('click', function () {
        menuList.style.display = (menuList.style.display === 'none') ? 'block' : 'none';
    });

    document.addEventListener('click', function (event) {
        if (!menuButton.contains(event.target) && !menuList.contains(event.target)) {
            menuList.style.display = 'none';
        }
    });
});