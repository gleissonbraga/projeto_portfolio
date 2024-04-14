document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementByClassName('nav-mobile-button');
    const menuItems = document.getElementsByClassName('nav-container');

    toggleBtn.addEventListener('click', function() {
        menuItems.classList.toggle('show');
    });
});