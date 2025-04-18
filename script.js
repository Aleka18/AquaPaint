// Menú de navegación hamburguesa
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Animación de burbujas
const bubbles = document.querySelectorAll(".bubble-text");
bubbles.forEach(bubble => {
    bubble.addEventListener("mouseenter", () => {
        bubble.classList.add("bubble-hover");
    });
    bubble.addEventListener("mouseleave", () => {
        bubble.classList.remove("bubble-hover");
    });
});

// Función para hacer el scroll hacia el contenido
const scrollToContent = document.querySelector(".scroll-to-content");
if (scrollToContent) {
    scrollToContent.addEventListener("click", () => {
        document.querySelector(".content-section").scrollIntoView({ behavior: "smooth" });
    });
}
