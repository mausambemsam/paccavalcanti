function typeWriter(e) {
    const textoArray = e.innerHTML.split('');
    e.innerHTML = '';
    textoArray.forEach((l, i) => {
        setTimeout(function() {
            e.innerHTML += l
        }, 100 * i)
});
}

const titulo = document.querySelector('h1');
typeWriter(titulo);



const planoO = document.getElementById('planoO');
const planoL = document.getElementById('planoL');
const planoK = document.getElementById('planoK')

function functionBlurs() {
    planoL.classList.toggle('blurEffect')
    planoK.classList.toggle('blurEffect')
}

function functionBlursOut() {
    planoL.classList.remove('blurEffect')
    planoK.classList.toggle('blurEffect')
}

planoO.addEventListener('mouseenter', functionBlurs)
planoO.addEventListener('mouseleave', functionBlursOut)





function planoLF() {
    planoO.classList.toggle('blurEffect')
    planoK.classList.toggle('blurEffect')
}

function planoLFOut() {
    planoO.classList.remove('blurEffect')
    planoK.classList.toggle('blurEffect')
}

planoL.addEventListener('mouseenter', planoLF)
planoL.addEventListener('mouseleave', planoLFOut)





function planoKF() {
    planoO.classList.toggle('blurEffect')
    planoL.classList.toggle('blurEffect')
}

function planoKFOut() {
    planoO.classList.remove('blurEffect')
    planoL.classList.toggle('blurEffect')
}

planoK.addEventListener('mouseenter', planoKF)
planoK.addEventListener('mouseleave', planoKFOut)


// /////



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