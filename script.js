document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector('.nav-mobile-button');
    const menuItems = document.querySelector('.nav-container'); // added dot before 'nav-container'

    toggleBtn.addEventListener('click', function() {
        menuItems.classList.toggle('show');
    });
});
