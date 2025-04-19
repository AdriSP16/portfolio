// Abrir el CV Popup
export function openCVPopup() {
  const popup = document.getElementById('cv-popup');
  popup.style.display = 'flex';
  setTimeout(() => popup.classList.add('show'), 10); 
}




// Cerrar el CV Popup
export function closeCVPopup() {
  const popup = document.getElementById('cv-popup');
  popup.classList.remove('show');
  setTimeout(() => popup.style.display = 'none', 300); 
}




// Función para descargar el CV FullStack

export function downloadFullstackCV() {
  // Obtener el idioma actual de localStorage (o inglés por defecto)
  const currentLang = localStorage.getItem("lang") || "en";

  // Idiomas que descargan el CV en español
  const spanishLanguages = ["es", "ca", "eu"];

  // Determinar si el idioma actual es español, catalán o euskera
  const isSpanish = spanishLanguages.includes(currentLang);

  // Seleccionar la ruta y el nombre del archivo según el idioma
  const cvPath = isSpanish ? 'resources/CV/Fullstack/CV_fstack_es.pdf' : 'resources/CV/Fullstack/CV_fstack_en.pdf';
  const fileName = isSpanish ? 'Adrian CV FullstackDev Español.pdf' : 'Adrian CV FullstackDev English.pdf';

  // Crear un enlace para descargar el archivo
  const link = document.createElement('a');
  link.href = cvPath;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}




// Función para descargar el CV Ciberseguridad
  
export function downloadCyberCV() {
  // Obtener el idioma actual de localStorage (o inglés por defecto)
  const currentLang = localStorage.getItem("lang") || "en";

  // Idiomas que descargan el CV en español
  const spanishLanguages = ["es", "ca", "eu"];

  // Determinar si el idioma actual es español, catalán o euskera
  const isSpanish = spanishLanguages.includes(currentLang);

  // Seleccionar la ruta y el nombre del archivo según el idioma
  const cvPath = isSpanish ? 'resources/CV/Cybersecurity/CV_cyber_es.pdf' : 'resources/CV/Cybersecurity/CV_cyber_en.pdf';
  const fileName = isSpanish ? 'Adrian CV Cybersecurity Español.pdf' : 'Adrian CV Cybersecurity English.pdf';

  // Crear un enlace para descargar el archivo
  const link = document.createElement('a');
  link.href = cvPath;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}




// Cerrar contact popup al hacer clic fuera

window.addEventListener('click', (event) => {
    const popup = document.getElementById('cv-popup');
    if (event.target === popup) closeCVPopup();
});
  