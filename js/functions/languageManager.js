import translations from '../translations/index.js';



// Función para cambiar de idioma
function changeLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`No se encontró traducción para el idioma: ${lang}`);
        return;
    }
    






    

    // Actualizar contenido de la página
    document.getElementById("navbar-title").textContent = translations[lang].navbarTitle;
    document.getElementById("intro-text").textContent = translations[lang].introText;
    document.getElementById("job-title").innerHTML = translations[lang].jobTitle;
    document.getElementById("motto").textContent = translations[lang].motto;
    document.getElementById("download-btn").textContent = translations[lang].downloadBtn;
    document.getElementById("contact-btn").innerHTML = translations[lang].contactBtn;
    document.getElementById("contact-popup-title").textContent = translations[lang].popupTitle;
    document.getElementById("projects-title").textContent = translations[lang].projectsTitle;
    document.getElementById("no-projects").textContent = translations[lang].noProjects;













    // Tech Skills
    document.querySelector(".skills-title").textContent = translations[lang].techSkillsTitle;
    document.querySelector(".skills-description").textContent = translations[lang].techSkillsDescription;
    const techSkillTitles = document.querySelectorAll(".skill-category h3");
    [
        translations[lang].frontend,
        translations[lang].backend,
        translations[lang].programmingLanguages,
        translations[lang].databases,
        translations[lang].versionControl,
        translations[lang].frameworks,
        translations[lang].otherTechnologies
    ].forEach((text, index) => {
        techSkillTitles[index].textContent = text;
    });









    // Experiencia Laboral
    document.querySelector(".experience-title").textContent = translations[lang].experienceTitle;
    document.querySelector(".no-experience").textContent = translations[lang].noExperience;












    // Hardware Skills
    document.querySelector("#hardware-skills .skills-title").textContent = translations[lang].hardwareSkillsTitle;
    document.querySelector("#hardware-skills .skills-description").textContent = translations[lang].hardwareSkillsDescription;

    // Títulos de las categorías de Hardware
    const hardwareTitles = document.querySelectorAll("#hardware-skills .skill-category h3");
    [
        translations[lang].hardwareMaintenance,
        translations[lang].hardwareRepair,
        translations[lang].virtualization,
        translations[lang].serverMaintenance,
        translations[lang].embeddedDevices
    ].forEach((text, index) => {
        hardwareTitles[index].textContent = text;
    });

    // Traducción del contenido de los <span> en cada categoría de Hardware
    const hardwareSpans = document.querySelectorAll("#hardware-skills .skill-icons span");
    const translatedHardwareSpans = [
        ...translations[lang].hardwareSpans.maintenance,
        ...translations[lang].hardwareSpans.repair,
        ...translations[lang].hardwareSpans.virtualization,
        ...translations[lang].hardwareSpans.serverMaintenance,
        translations[lang].hardwareSpans.embeddedDevices
    ];

    // Actualizar el contenido de cada <span>
    hardwareSpans.forEach((span, index) => {
        // Si el <span> contiene una imagen (Arduino), mantenemos la imagen y traducimos el texto después de ella
        const img = span.querySelector("img");
        if (img) {
            span.innerHTML = `${img.outerHTML} ${translatedHardwareSpans[index]}`;
        } else {
            span.textContent = translatedHardwareSpans[index];
        }
    });













    // 🌟 Actualizar "Sobre Mí"
    document.getElementById("about-title").textContent = translations[lang].aboutMeTitle;
    document.getElementById("about-intro1").innerHTML = translations[lang].aboutMeIntro1;
    document.getElementById("about-intro2").innerHTML = translations[lang].aboutMeIntro2;

    // 🏆 Ambiciones Vitales
    document.getElementById("ambitions-title").textContent = translations[lang].ambitionsTitle;
    const ambitionsList = document.querySelectorAll("#ambitions-list li");
    translations[lang].ambitionsList.forEach((text, index) => {
        if (ambitionsList[index]) {
            ambitionsList[index].innerHTML = text;
        }
    });

    // 🎨 Aficiones e Intereses
    document.getElementById("hobbies-title").textContent = translations[lang].hobbiesTitle;
    document.getElementById("hobbies-intro").textContent = translations[lang].hobbiesIntro;
    const hobbiesList = document.querySelectorAll("#hobbies-list li");
    translations[lang].hobbiesList.forEach((text, index) => {
        if (hobbiesList[index]) {
            hobbiesList[index].innerHTML = text;
        }
    });

    // 🤔 Curiosidades Sobre Mí
    document.getElementById("curiosities-title").textContent = translations[lang].curiositiesTitle;
    const curiositiesList = document.querySelectorAll("#curiosities-list li");
    translations[lang].curiositiesList.forEach((text, index) => {
        if (curiositiesList[index]) {
            curiositiesList[index].innerHTML = text;
        }
    });

    // ❔ Preguntas Frecuentes (FAQ)
    document.getElementById("faq-title").textContent = translations[lang].faqTitle;
    const faqItems = document.querySelectorAll("#faq-list details");
    translations[lang].faq.forEach((item, index) => {
        if (faqItems[index]) {
            faqItems[index].querySelector("summary").innerHTML = item.question;
            faqItems[index].querySelector("p").textContent = item.answer;
        }
    });









    // Prefered Places
    document.getElementById("preferred-title").textContent = translations[lang].preferredtitle;
    document.getElementById("preferred-description").textContent = translations[lang].preferreddescription;
    document.getElementById("flag-popup-title").textContent = translations[lang].flagpopuptitle;
    document.getElementById("show-more-btn").textContent = translations[lang].showmoreBtn;
    document.getElementById("show-less-btn").textContent = translations[lang].showLessBtn;
    document.querySelectorAll(".tooltip").forEach(function (tooltip) {
        tooltip.textContent = translations[lang].tooltip;
    });
    













    // 💼 Soft Skills
    document.getElementById("soft-skills-title").textContent = translations[lang].softSkillsTitle;
    document.getElementById("soft-skills-description").textContent = translations[lang].softSkillsDescription;

    // Habilidades Interpersonales
    document.getElementById("interpersonal-skills").textContent = translations[lang].interpersonalSkills;
    const interpersonalList = document.querySelector("#interpersonal-list").getElementsByTagName("span");
    translations[lang].interpersonalList.forEach((text, index) => {
        interpersonalList[index].textContent = text;
    });

    // Habilidades Metódicas
    document.getElementById("methodical-skills").textContent = translations[lang].methodicalSkills;
    const methodicalList = document.querySelector("#methodical-list").getElementsByTagName("span");
    translations[lang].methodicalList.forEach((text, index) => {
        methodicalList[index].textContent = text;
    });

    // Competencias Intrapersonales
    document.getElementById("intrapersonal-skills").textContent = translations[lang].intrapersonalSkills;
    const intrapersonalList = document.querySelector("#intrapersonal-list").getElementsByTagName("span");
    translations[lang].intrapersonalList.forEach((text, index) => {
        intrapersonalList[index].textContent = text;
    });










    // 📚 Formación
    document.querySelector(".education-title").textContent = translations[lang].educationTitle;

    document.getElementById("formal-studies").textContent = translations[lang].formalStudies;

    // Estudios reglados

    // Bachillerato
    
    document.getElementById("highschool-title").textContent = translations[lang].highSchoolTitle;
    document.getElementById("highschool-center").innerHTML = translations[lang].highSchoolCenter;
    document.getElementById("highschool-date").innerHTML = translations[lang].highSchoolDate;
    document.getElementById("highschool-description").innerHTML = translations[lang].highSchoolDescription;
    document.getElementById("highschool-skills-title").innerHTML = `<b>${translations[lang].skillsAcquiredText}</b>`;

    const highSchoolSkillsSpans = document.querySelectorAll("#highschool-skills span");
    translations[lang].highSchoolSkills.forEach((text, index) => {
        highSchoolSkillsSpans[index].textContent = text;
    });

    // DAM

    document.getElementById("dam-title").textContent = translations[lang].damTitle;
    document.getElementById("dam-center").innerHTML = translations[lang].damCenter;
    document.getElementById("dam-date").innerHTML = translations[lang].damDate;
    document.getElementById("dam-description").innerHTML = translations[lang].damDescription;
    document.getElementById("dam-skills-title").innerHTML = `<b>${translations[lang].skillsAcquiredText}</b>`;

    // Certificaciones

    document.getElementById("certifications").textContent = translations[lang].certifications;

    // 🛡️ Introducción a la Ciberseguridad
    document.getElementById("cybersec-title").textContent = translations[lang].cybersecTitle;
    document.getElementById("cybersec-center").innerHTML = translations[lang].cybersecCenter;
    document.getElementById("cybersec-date").innerHTML = translations[lang].cybersecDate;
    document.getElementById("cybersec-description").innerHTML = translations[lang].cybersecDescription;
    document.getElementById("cybersec-skills-title").innerHTML = `<b>${translations[lang].skillsAcquiredText}</b>`;

    // ✅ Aquí se actualizan los spans de las habilidades de ciberseguridad
    const cybersecSkillsSpans = document.querySelectorAll("#cybersec-skills span");
    translations[lang].cybersecSkills.forEach((text, index) => {
        if (cybersecSkillsSpans[index]) {
            cybersecSkillsSpans[index].textContent = text;
        }
    });

    // Conceptos básicos de redes
    document.getElementById("networkingbasics-title").textContent = translations[lang].networkingbasicsTitle;
    document.getElementById("networkingbasics-center").innerHTML = translations[lang].networkingbasicsCenter;
    document.getElementById("networkingbasics-date").innerHTML = translations[lang].networkingbasicsDate;
    document.getElementById("networkingbasics-description").innerHTML = translations[lang].networkingbasicsDescription;
    document.getElementById("networkingbasics-skills-title").innerHTML = `<b>${translations[lang].skillsAcquiredText}</b>`;

    // ✅ Aquí se actualizan los spans de las habilidades de redes
    const networkingbasicsSkillsSpans = document.querySelectorAll("#networkingbasics-skills span");
    translations[lang].networkingbasicsSkills.forEach((text, index) => {
        if (networkingbasicsSkillsSpans[index]) {
            networkingbasicsSkillsSpans[index].textContent = text;
        }
    });

    // Reconocimientos, Contribuciones, Eventos
    document.getElementById("awards").textContent = translations[lang].awards;
    document.getElementById("no-awards").textContent = translations[lang].noAwards;
    document.getElementById("contributions").textContent = translations[lang].contributions;
    document.getElementById("no-contributions").textContent = translations[lang].noContributions;
    document.getElementById("events").textContent = translations[lang].events;
    document.getElementById("no-participation").textContent = translations[lang].noEvents;

    // Guardar idioma en localStorage
    localStorage.setItem("lang", lang);
};

export { changeLanguage };
