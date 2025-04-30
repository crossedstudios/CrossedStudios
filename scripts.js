document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const background = document.querySelector('.home');
    background.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
});

let i = 0;
const text = "Welcome to Crossed Studios!";
const speed = 100;
const typingEffect = document.querySelector('.main-heading');

function typeText() {
    if (i < text.length) {
        typingEffect.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, speed);
    }
}

document.addEventListener("DOMContentLoaded", typeText);

const images = document.querySelectorAll('.work-gallery img');

images.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s ease-in-out';
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});

const fadeInElements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    fadeInElements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});
