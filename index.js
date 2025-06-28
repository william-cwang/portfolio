/* Header */
const header = document.getElementById('header');
const headerLength = 70; // current pixel number
let headerElements = document.querySelectorAll('.headerBoxElements p');
let vhThreshold = window.innerHeight;
window.addEventListener('resize', () => {
    vhThreshold = window.innerHeight;
});

window.addEventListener('scroll', () => {
    const curr = window.pageYOffset || document.documentElement.scrollTop;
    if (curr < vhThreshold * 0.9) {
        header.style.transition = '0.3s ease';
        header.classList.remove('visible');
        header.classList.add('hidden');
    } else {
        header.style.transition = '0.3s ease';
        header.classList.remove('hidden');
        header.classList.add('visible');
    }

    const projects = document.getElementById("projects").offsetTop;
    const experience = document.getElementById("experience").offsetTop;
    const education = document.getElementById("education").offsetTop;
    const culture = document.getElementById("culture").offsetTop;
    if (projects > curr & projects >= 0) {
        headerElements.forEach(p => {
            p.style.transform = 'translateY(0)';
        })
    } else if (projects < curr & curr < experience) {
        headerElements.forEach(p => { p.style.transform = 'translateY(-100%)'; })
    } else if (experience < curr & curr < education) {
        headerElements.forEach(p => { p.style.transform = 'translateY(-200%)'; })
    } else if (education < curr & curr < culture) {
        headerElements.forEach(p => { p.style.transform = 'translateY(-300%)'; })
    } else {
        headerElements.forEach(p => { p.style.transform = 'translateY(-400%)'; })
    }


});


/* Slides */
if (window.innerWidth < 1024) {
    let slideIndex = 0;
    let slides = document.getElementsByClassName("slide");
    let slidesLength = slides.length;

    function plusSlides(n) {
        let i = slideIndex;
        slideIndex += n;
        if (slideIndex >= slidesLength) {
            slideIndex = 0;
        } else if (slideIndex == -1) {
            slideIndex = slidesLength - 1;
        }
        showSlides(slideIndex, i);
        i = slideIndex;
    }
    function showSlides(toShow, toHide=1) {
        slides[toShow].style.display = "flex";
        slides[toHide].style.display = "none";
    }
    showSlides(0)
}