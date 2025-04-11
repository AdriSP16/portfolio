// Función para descargar el CV
export function downloadCV() {
    // Obtener el idioma actual de localStorage (o inglés por defecto)
    const currentLang = localStorage.getItem("lang") || "en";

    // Idiomas que descargan el CV en español
    const spanishLanguages = ["es", "ca", "eu"];

    // Determinar si el idioma actual es español, catalán o euskera
    const isSpanish = spanishLanguages.includes(currentLang);

    // Seleccionar la ruta y el nombre del archivo según el idioma
    const cvPath = isSpanish ? 'resources/CV/CV_es.pdf' : 'resources/CV/CV_en.pdf';
    const fileName = isSpanish ? 'Adrian Sabino CV Español.pdf' : 'Adrian Sabino CV English.pdf';

    // Crear un enlace para descargar el archivo
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}