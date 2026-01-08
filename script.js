const openBtn = document.querySelector('#openBtn');
const closeBtn = document.querySelector('#closeBtn');
const overlay = document.querySelector('.overlay');

openBtn.addEventListener('click', () => {
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'auto';
});

closeBtn.addEventListener('click', () => {
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
});
