// © 2025 Adrián Sabino Pérez. Todos los derechos reservados. Prohibida la reproducción o imitación total o parcial del código sin autorización.

import { changeLanguage } from './functions/languageManager.js';
import { downloadFullstackCV, downloadCyberCV, openCVPopup, closeCVPopup } from './functions/downloadCVManager.js';
import { openContactPopup, closeContactPopup, sendEmail, copyEmail } from './functions/contactPopupManager.js';
import { toggleTheme } from './functions/darkTheme.js';
import { toggleView } from './functions/toggleView.js';  // Importa la función toggleView
import { initMapPopup } from './mapSection/mapPopup.js'; // Asegúrate de que la ruta sea correcta


// DOM para controlar la pagina web

document.addEventListener("DOMContentLoaded", () => {

    // languageManager.js (Cambia entre los idiomas guardados):

    const savedLang = localStorage.getItem("lang") || "en";
    document.getElementById("language-switcher").value = savedLang;
    changeLanguage(savedLang);

    // Escucha el cambio del select
    document.getElementById("language-switcher").addEventListener("change", (e) => {
        changeLanguage(e.target.value);
    });

    // Fin languageManager.js




    // downloadCV.js (Permite descargar mi CV):

    const downloadBtn = document.getElementById("download-btn");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", openCVPopup)
    }

    // Cerrar popup
    document.getElementById("close-cv-popup").addEventListener("click", closeCVPopup);

    document.getElementById("cv-fullstack-btn").addEventListener("click", downloadFullstackCV);
    document.getElementById("cv-cyber-btn").addEventListener("click", downloadCyberCV);

    document.getElementById("close-cv-popup").addEventListener("click", () => {
        document.getElementById("cv-popup").classList.add("hidden");
      });      



    // Fin downloadCV.js




    // contactPopupManager.js (Maneja los estados del popup de contactos):

    // Botón para abrir popup de contacto
    const contactBtn = document.getElementById("contact-btn");
    if (contactBtn) {
        contactBtn.addEventListener("click", openContactPopup);
    }

    // Cerrar popup
    document.getElementById("close-contact-popup").addEventListener("click", closeContactPopup);

    // Botones de enviar/copiar email
    document.getElementById("send-email-1").addEventListener("click", () => sendEmail("emailInput1"));
    document.getElementById("copy-email-1").addEventListener("click", () => copyEmail("emailInput1"));
    document.getElementById("send-email-2").addEventListener("click", () => sendEmail("emailInput2"));
    document.getElementById("copy-email-2").addEventListener("click", () => copyEmail("emailInput2"));

    // Fin contactPopupManager.js




    // darkTheme.js (Modo claro/oscuro):

    toggleTheme;

    // Fin darkTheme.js




    // toggleView.js (Boton de ver más y ver menos en la sección de la banderas)

    // Aquí ya puedes usar la función toggleView
    const showMoreBtn = document.getElementById("show-more-btn");
    const showLessBtn = document.getElementById("show-less-btn");

    // Asignar la función toggleView a los botones
    if (showMoreBtn) {
        showMoreBtn.addEventListener("click", toggleView);
    }
    
    if (showLessBtn) {
        showLessBtn.addEventListener("click", toggleView);
    }

    // Fin toggleView.js

});


initMapPopup();

// © 2025 Adrián Sabino Pérez. Todos los derechos reservados. Prohibida la reproducción o imitación total o parcial del código sin autorización.