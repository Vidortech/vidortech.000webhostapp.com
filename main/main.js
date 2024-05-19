const menuBtn = document.getElementById('menu-btn');
const menu = document.querySelector('.menu');
const menuVisibleClass = 'menu-visible'; // Classe que controla a visibilidade do menu

menuBtn.addEventListener('click', toggleMenu);

// Função para abrir/fechar o menu
function toggleMenu() {
    if (menu.classList.contains(menuVisibleClass)) {
        closeMenu();
    } else {
        openMenu();
    }
}

// Função para abrir o menu
function openMenu() {
    menu.classList.add(menuVisibleClass);
    // Adiciona ouvinte de eventos para fechar o menu ao clicar fora dele
    document.addEventListener('click', closeMenuOnClickOutside);
}

// Função para fechar o menu
function closeMenu() {
    menu.classList.remove(menuVisibleClass);
    // Remove o ouvinte de eventos para fechar o menu ao clicar fora dele
    document.removeEventListener('click', closeMenuOnClickOutside);
}

// Função para fechar o menu ao clicar fora dele
function closeMenuOnClickOutside(event) {
    if (!menu.contains(event.target) && event.target !== menuBtn) {
        closeMenu();
    }
}

