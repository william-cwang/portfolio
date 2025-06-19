const header = document.getElementById('header');
let vhThreshold = window.innerHeight;
window.addEventListener('resize', () => {
    vhThreshold = window.innerHeight;
});

window.addEventListener('scroll', () => {
    const curr = window.pageYOffset || document.documentElement.scrollTop;
    if (curr < vhThreshold) {
        header.classList.remove('visible');
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
        header.classList.add('visible');
    }
});