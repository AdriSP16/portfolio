// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todas las secciones de la página
  const sections = document.querySelectorAll("section");

  // Obtiene la flecha de scroll por su ID
  const scrollArrow = document.getElementById("scrollArrow");

  // Obtiene el interruptor de idioma por su ID
  const languageSwitch = document.getElementById("languageToggle");

  // Definición de los textos en español e inglés
  const translations = {
      es: {
          home: "¡Hola Mundo!, Soy Adrián",
          welcome: "¡Bienvenido a mi portafolio!",
          about: "Sobre mí",
          aboutText: "Soy un desarrollador con pasión por el desarrollo Android y la seguridad informática. Me encanta aprender nuevas tecnologías y afrontar desafíos en el mundo del software.",
          contact: "Contacto",
          contactText: "Siéntete libre de contactar por correo electrónico o redes sociales:"
      },
      en: {
          home: "Hello World!, I'm Adrian",
          welcome: "Welcome to my portfolio!",
          about: "About Me",
          aboutText: "I am a developer passionate about Android development and cybersecurity. I love learning new technologies and tackling challenges in the software world.",
          contact: "Contact",
          contactText: "Feel free to reach out via email or social media:"
      }
  };
  
  // Función para cambiar el idioma de la página
  function switchLanguage(lang) {
    // Cambia el contenido de los elementos de la página usando la traducción correspondiente
    document.querySelector("#home h1").innerHTML = `<span class="emoji">👋</span> ${translations[lang].home}`;
    document.querySelector("#home p").textContent = translations[lang].welcome;
    document.querySelector("#about h1").innerHTML = `<span class="emoji">📖</span> ${translations[lang].about}`;
    document.querySelector("#about p").textContent = translations[lang].aboutText;
    document.querySelector("#contact h1").innerHTML = `<span class="emoji">📩</span> ${translations[lang].contact}`;
    document.querySelector("#contact p").textContent = translations[lang].contactText;
  }

  // Agrega un evento para detectar cambios en el interruptor de idioma
  languageSwitch.addEventListener("change", function () {
    // Si el interruptor está activado, cambia a inglés; de lo contrario, a español
    const lang = this.checked ? "en" : "es";
    switchLanguage(lang);
  });

  // Evento para manejar el desplazamiento automático con la flecha
  scrollArrow.addEventListener("click", function (event) {
      event.preventDefault(); // Evita el comportamiento por defecto del enlace

      let currentSectionIndex = -1;
      let minDistance = Infinity;

      // Encuentra la sección más cercana a la posición actual de desplazamiento
      sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top);

          if (distance < minDistance) {
              minDistance = distance;
              currentSectionIndex = index;
          }
      });

      // Obtiene la sección actual
      const currentSection = sections[currentSectionIndex];
      const rect = currentSection.getBoundingClientRect();

      // Si la sección actual no está completamente visible, desplázate hasta su final
      if (rect.bottom > window.innerHeight) {
          currentSection.scrollIntoView({ behavior: "smooth", block: "end" });
      } else {
          // De lo contrario, avanza a la siguiente sección o vuelve al inicio si es la última
          let nextSectionIndex = currentSectionIndex + 1;
          if (nextSectionIndex >= sections.length) {
              nextSectionIndex = 0;
          }
          sections[nextSectionIndex].scrollIntoView({ behavior: "smooth" });
      }
  });
});
