// Función para descargar el CV
function downloadCV() {
    const cvPath = 'resources/CV.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Adrian Sabino CV Actual.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Abrir el popup
function openContactPopup() {
    const popup = document.getElementById('contact-popup');
    popup.style.display = 'flex';
    setTimeout(() => popup.classList.add('show'), 10); // Añadimos una pequeña demora para la animación
}

// Cerrar el popup
function closeContactPopup() {
    const popup = document.getElementById('contact-popup');
    popup.classList.remove('show');
    setTimeout(() => popup.style.display = 'none', 300); // Esperar a que termine la animación
}

// Cerrar popup al hacer clic fuera
window.addEventListener('click', (event) => {
    const popup = document.getElementById('contact-popup');
    if (event.target === popup) {
        closeContactPopup();
    }
});

// Enviar correo
function sendEmail(emailId) {
    const email = document.getElementById(emailId).value;
    window.location.href = `mailto:${email}`;
}

// Copiar al portapapeles
function copyEmail(emailId) {
    const email = document.getElementById(emailId);
    navigator.clipboard.writeText(email.value).then(() => {
        alert(`Correo copiado: ${email.value}`);
    });
}
