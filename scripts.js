// Animaciones al hacer scroll
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate-on-scroll, .comunidad-info, .torneo-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    elements.forEach((element) => {
        observer.observe(element);
    });

    // Funcionalidad para el menú desplegable
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

// Función para calcular el premio
function calcularPremio() {
    const participantes = parseInt(document.getElementById("participantes").value);

    if (participantes < 1 || participantes > 150) {
        alert("El número de participantes debe estar entre 1 y 150.");
        return;
    }

    // Cálculo del premio: participantes * 26.6666
    const premioBase = participantes * 26.6666;

    // Redondeo a múltiplos de 5
    const premioRedondeado = Math.ceil(premioBase / 5) * 5;

    // Mostrar el resultado
    document.getElementById("resultado-premio").innerText = `El premio sería de: $${premioRedondeado} MXN`;
}