// Alerta de bienvenida al cargar la página
    alert("¡Bienvenido a MiSitio Web!");

// Cambiar tema de colores
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark');
});