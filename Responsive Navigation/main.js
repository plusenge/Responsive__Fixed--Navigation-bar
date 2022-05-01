
const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav-links')
const navLinks= document.querySelectorAll('li')

burger.addEventListener('click', navSlide);

function navSlide() {
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {

        if (link.style.animation) {
            link.style.animation ="";
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .45}s`
        }
    })
    burger.classList.toggle('toggle')
}


    



