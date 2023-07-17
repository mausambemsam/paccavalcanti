// para todas as páginas

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(e) {
    if(e.type === 'touchstart') e.preventDefault()
    const nav = document.getElementById('nav-container-id');
    nav.classList.toggle('activeMenu');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


const planoLink = document.getElementById('planos-link');
planoLink.addEventListener('click', toggleMenu)