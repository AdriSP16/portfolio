// Función para descargar el CV
function downloadCV() {
    const cvPath = 'resources/CV.pdf'; // Ruta del archivo CV
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Adrian Sabino CV Actual.pdf'; // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Función para enviar email
function sendEmail() {
    window.location.href = 'mailto:adrsabper@gmail.com';
}

// Función para copiar el email al portapapeles
function copyEmail() {
    navigator.clipboard.writeText('adrsabper@gmail.com')
        .then(() => alert('¡Email copiado al portapapeles!'))
        .catch(err => console.error('Error al copiar el email:', err));
}

// Event Listeners para los botones
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.btn-download').addEventListener('click', downloadCV);
    document.querySelector('.btn-send').addEventListener('click', sendEmail);
    document.querySelector('.btn-copy').addEventListener('click', copyEmail);
});
