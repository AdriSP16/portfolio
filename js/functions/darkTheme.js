// Detectar el interruptor y las etiquetas
const themeSwitch = document.getElementById("theme-switch");
const themeLabelLight = document.getElementById("theme-label-light"); // 🌞
const themeLabelDark = document.getElementById("theme-label-dark");   // 🌙

export function toggleTheme() {
    const isDarkMode = document.body.getAttribute("data-theme") === "dark";

    // Cambiar entre modo claro y oscuro
    if (isDarkMode) {
        document.body.removeAttribute("data-theme"); // Cambiar a modo claro
        themeLabelLight.style.display = "inline";  // Mostrar el icono de 🌞
        themeLabelDark.style.display = "none";    // Ocultar el icono de 🌙
    } else {
        document.body.setAttribute("data-theme", "dark"); // Activar modo oscuro
        themeLabelLight.style.display = "none";   // Ocultar el icono de 🌞
        themeLabelDark.style.display = "inline";  // Mostrar el icono de 🌙
    }

    // Guardar preferencia en localStorage
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
}

// Detectar el cambio en el switch
themeSwitch.addEventListener("change", toggleTheme);

// Mantener el tema seleccionado al recargar la página
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.setAttribute("data-theme", "dark");
        themeSwitch.checked = true;
        themeLabelLight.style.display = "none";  // Ocultar el icono de 🌞
        themeLabelDark.style.display = "inline"; // Mostrar el icono de 🌙
    }
});
