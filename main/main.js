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


const services = document.querySelectorAll('.ourServices__service');

function animateIfVisible() {
    services.forEach(service => {
        const rect = service.getBoundingClientRect();
        const isVisible = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        if (isVisible) {
            service.classList.add('visible');
        }
    });
}

function getAnimationName(serviceId) {
    switch (serviceId) {
        case 'serviceOne':
            return 'slide-right';
        case 'serviceTwo':
            return 'slide-bottom';
        case 'serviceThree':
            return 'slide-top';
        case 'serviceFour':
            return 'slide-left';
        default:
            return '';
    }
}

window.addEventListener('scroll', () => {
    animateIfVisible();
    services.forEach(service => {
        if (service.classList.contains('visible')) {
            const animationName = getAnimationName(service.id);
            if (animationName) {
                service.style.animation = `${animationName} 600ms ease-in-out`;
            }
        } else {
            service.style.animation = '';
        }
    });
});

window.addEventListener('load', animateIfVisible);