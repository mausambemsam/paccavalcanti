const mainDivs = document.querySelectorAll('.main-item');

window.addEventListener('scroll', showDivs);

showDivs();

function showDivs() {
    const triggerBottom = window.innerHeight / 5 * 3.2;

    mainDivs.forEach(b => {
        const divTop = b.getBoundingClientRect().top;

        if(divTop < triggerBottom) {
            b.classList.add('showDivs')
        } else {
            b.classList.remove('showDivs');
        }
    });
}

const linkTarget = document.getElementById('linkTar');
const svgTarget = document.getElementById('template-icon');

function inpleClass() {
    svgTarget.classList.add('move');
}
linkTarget.addEventListener('mouseenter', inpleClass);


function inpleClassOut() {
    svgTarget.classList.remove('move');
}

linkTarget.addEventListener('mouseleave', inpleClassOut);