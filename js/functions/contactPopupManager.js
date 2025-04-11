// Abrir el contact popup
export function openContactPopup() {
    const popup = document.getElementById('contact-popup');
    popup.style.display = 'flex';
    setTimeout(() => popup.classList.add('show'), 10); 
}




// Cerrar el contact popup
export function closeContactPopup() {
    const popup = document.getElementById('contact-popup');
    popup.classList.remove('show');
    setTimeout(() => popup.style.display = 'none', 300); 
}




// Enviar correo en el contact Dialog
export function sendEmail(emailId) {
    const email = document.getElementById(emailId).value;
    window.location.href = `mailto:${email}`;
}




// Copiar al portapapeles en el contact Dialog
export function copyEmail(emailId) {
    const email = document.getElementById(emailId);
    navigator.clipboard.writeText(email.value).then(() => {
        alert(`Correo copiado: ${email.value}`);
    });
}




// Cerrar contact popup al hacer clic fuera
window.addEventListener('click', (event) => {
    const popup = document.getElementById('contact-popup');
    if (event.target === popup) closeContactPopup();
});