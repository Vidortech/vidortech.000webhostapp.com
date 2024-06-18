const menuBtn = document.getElementById('menu-btn');
const menu = document.querySelector('.menu');
const menuVisibleClass = 'menu-visible'; 

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (menu.classList.contains(menuVisibleClass)) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    menu.classList.add(menuVisibleClass);
    document.addEventListener('click', closeMenuOnClickOutside);
}

function closeMenu() {
    menu.classList.remove(menuVisibleClass);
    document.removeEventListener('click', closeMenuOnClickOutside);
}

function closeMenuOnClickOutside(event) {
    if (!menu.contains(event.target) && event.target !== menuBtn) {
        closeMenu();
    }
}

