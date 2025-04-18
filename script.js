// Función para el menú hamburguesa
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Función para las animaciones en las secciones al hacer scroll
const sections = document.querySelectorAll('section');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Animación de desvanecimiento
document.querySelectorAll('.fade-in').forEach(element => {
    element.classList.add('invisible'); // Para asegurarnos que se empieza invisible
    element.classList.add('fade-in');  // Se agregan clases de animación
});


// Agregar clase de animación al hacer scroll (fade-in en las secciones)
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(element => {
    element.classList.add('invisible');
});

const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('invisible');
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.5
});

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});
