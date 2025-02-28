// Función para descargar el CV
function downloadCV() {
    const cvPath = 'resources/CV/CV.pdf';
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
    setTimeout(() => popup.classList.add('show'), 10); 
}

// Cerrar el popup
function closeContactPopup() {
    const popup = document.getElementById('contact-popup');
    popup.classList.remove('show');
    setTimeout(() => popup.style.display = 'none', 300); 
}

// Cerrar popup al hacer clic fuera
window.addEventListener('click', (event) => {
    const popup = document.getElementById('contact-popup');
    if (event.target === popup) closeContactPopup();
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








// Traducciones
const translations = {
    es: {
        navbarTitle: "AdriDevSP",
        introText: "¡Hola Mundo!, me llamo",
        jobTitle: "Soy un <span class='highlight'>Desarrollador Fullstack!</span>",
        motto: "Desarrollador fullstack & móvil de día, analista de ciberseguridad de noche.",
        downloadBtn: "Descargar CV",
        contactBtn: "&lt; Contactos /&gt;",
        popupTitle: "Emails",
        projectsTitle: "Proyectos",
        noProjects: "Aún no hay proyectos destacables 😔",
        techSkillsTitle: "Tech Skills",
        techSkillsDescription: "A lo largo de mi formación como Desarrollador de Software Fullstack, he podido adquirir ciertas habilidades en desarrollo de Software, así como experiencia en las principales herramientas, las cuales me han permitido crear aplicaciones móviles y multiplataforma escalables, flexibles, sólidas y totalmente funcionales. A continuación, se pueden observar las habilidades tecnológicas que me han permitido llegar hasta donde estoy actualmente:",
        frontend: "Frontend",
        backend: "Backend",
        programmingLanguages: "Lenguajes de Programación",
        databases: "Bases de Datos",
        versionControl: "Control de Versiones",
        frameworks: "Frameworks",
        otherTechnologies: "Otras Tecnologías",
        experienceTitle: "Experiencia Laboral",
        noExperience: "Todavía no poseo experiencia, pero mientras tanto sigo desarrollando proyectos personales :D",
        
        navbarTitle: "AdriDevSP",
        introText: "¡Hola Mundo!, me llamo",
        jobTitle: "Soy un <span class='highlight'>Desarrollador Fullstack!</span>",
        motto: "Desarrollador fullstack & móvil de día, analista de ciberseguridad de noche.",
        downloadBtn: "Descargar CV",
        contactBtn: "&lt; Contactos /&gt;",
        popupTitle: "Emails",
        projectsTitle: "Proyectos",
        noProjects: "Aún no hay proyectos destacables 😔",

        /* HARDWARE SKILL SECTION */

        hardwareSkillsTitle: "Hardware Skills",
        hardwareSkillsDescription: "Además de mi experiencia en desarrollo de software y ciberseguridad, cuento con conocimientos en hardware, montaje de equipos y mucho más.",
        hardwareMaintenance: "Mantenimiento y Diagnóstico",
        hardwareRepair: "Reparación de hardware",
        virtualization: "Instalación y gestión de entornos virtuales en dispositivos físicos",
        serverMaintenance: "Mantenimiento y Diagnóstico de servidores",
        embeddedDevices: "Dispositivos Embebidos",

        hardwareSpans: { 
            maintenance: [
                "Montaje de PCs de sobremesa",
                "Instalación y puesta a punto de diversos sistemas operativos",
                "Detección de errores de hardware"
            ],
            repair: [
                "Reparación de nivel básico de portátiles (Entorno Windows o Linux)",
                "Reparación de nivel básico de dispositivos móviles (Android)",
                "Reparación de nivel básico de tablets",
                "Reparación de nivel intermedio de ordenadores de sobremesa",
                "Optimización básica del rendimiento del equipo"
            ],
            virtualization: [
                "Instalación de entornos virtuales (VMware y VirtualBox)",
                "Creación y administración de máquinas virtuales (VMs)",
                "Configuración de hardware virtual (CPU, RAM, almacenamiento)"
            ],
            serverMaintenance: [
                "Instalación de sistemas operativos para servidores (Windows Server, Ubuntu Server, etc.)",
                "Montaje e instalación básica de servidores físicos",
                "Optimización básica de hardware en servidores"
            ],
            embeddedDevices: "Arduino"
        },        

        /* END HARDWARE SKILL SECTION */






        
        /* ABOUT ME SECTION*/

        // Sección "Sobre Mí"
        aboutMeTitle: "Sobre Mí",
        aboutMeIntro1: "¡Hola! Soy <strong>Adrián Sabino</strong>, un apasionado <strong>Desarrollador Fullstack & Móvil</strong> con un enfoque en la creación de aplicaciones modernas, escalables y funcionales. Además, actualmente estoy formándome para desempeñar el cargo de <strong>Analista Junior en Ciberseguridad</strong>.",
        aboutMeIntro2: "Mi trayectoria combina la creatividad del desarrollo de software con la rigurosidad del análisis de ciberseguridad. Me encanta enfrentar nuevos retos, aprender constantemente y explorar nuevas tecnologías para mejorar mis habilidades.",

        // Ambiciones
        ambitionsTitle: "🎯 Mis Ambiciones Vitales",
        ambitionsList: [
            "🛡️ Convertirme en un <strong>experto en ciberseguridad</strong>.",
            "🔒 Trabajar en multinacionales referentes en el ámbito de la ciberseguridad (Telefónica, Google, Deloitte, Microsoft, IBM, Cisco, Oracle, etc.).",
            "🖱️ Ampliar al máximo mis conocimientos en Desarrollo de Software Multiplataforma y Fullstack.",
            "🏡 Vivir en países del norte de Europa (Dinamarca, Noruega, Alemania, Irlanda), en América del Norte (EEUU o Canadá) o en Asia (Japón o Corea del Sur)."
        ],

        // Aficiones
        hobbiesTitle: "🎨 Más Allá del Código",
        hobbiesIntro: "Cuando no estoy programando, formándome sobre ciberseguridad o aprendiendo sobre nuevas tecnologías, disfruto de:",
        hobbiesList: [
            "🎮 Jugar videojuegos (Mis géneros favoritos son: Estrategia, Shooters, Terror, Survival, Históricos y Souls).",
            "♟️ Jugar juegos de mesa (Como el Ajedrez, Risk, Seven Wonders Duels o Carcassonne).",
            "📖 Aprender sobre historia mundial, especialmente de España, y analizar situaciones geopolíticas.",
            "📺 Ver películas, series y anime.",
            "🎵 Escuchar música (Estopa, Fito y Fitipaldis, Mägo de Oz, El canto del loco, Dani Martín y Melendi)."
        ],

        // Curiosidades
        curiositiesTitle: "🤔 Curiosidades Sobre Mí",
        curiositiesList: [
            "👨‍💻 Escribí mi primer programa en Python cuando tenía 16 años.",
            "🏅 He ganado varios premios en torneos de ajedrez en el Campo de Gibraltar.",
            "🌐 Me apasiona la historia y la geopolítica, así como su influencia en la tecnología global.",
            "🧠 Me encanta todo lo relacionado con la estrategia, es una gran forma de desarrollar el cerebro.",
            "🥊 Me interesan los deportes de contacto (Boxeo, Kickboxing, Jiu-Jitsu), aunque no he podido practicarlos.",
            "⚽ Disfruto practicando deportes de equipo e individuales (Fútbol, Tenis, Padel, etc.).",
            "🎶 Me gusta cantar y me gustaría formar una banda de música en el futuro."
        ],

        // FAQ (Preguntas Frecuentes)
        faqTitle: "❔ Preguntas Frecuentes",
        faq: [
            {
                question: "¿Cuál es tu lenguaje de programación preferido?",
                answer: "Actualmente, me está gustando mucho usar Dart con el Framework Flutter para crear aplicaciones multiplataforma."
            },
            {
                question: "¿En cuál red social estás más activo?",
                answer: "Suelo usar muchas redes sociales, pero sobre todo estoy muy activo en Instagram."
            },
            {
                question: "¿Tienes algún permiso de conducir?",
                answer: "Sí, tengo el permiso B de conducir. Lo aprobé a la primera tanto en el examen teórico (0 fallos) como en el práctico (1 fallo leve)."
            },
            {
                question: "¿Qué nivel de inglés tienes?",
                answer: "Considero que tengo un nivel intermedio de inglés (B1), aunque no poseo una certificación oficial."
            },
            {
                question: "¿Android o iOS?",
                answer: "Siempre he tenido Android y lo considero superior a iOS por la libertad que ofrece al usuario. Programo tanto para Android como para iOS sin distinción."
            },
            {
                question: "¿Windows, Mac o Linux?",
                answer: "Prefiero Windows por su comodidad, pero también uso Linux (como Kali Linux) para propósitos profesionales. No utilizo Mac debido a mi preferencia por sistemas abiertos."
            },
            {
                question: "¿Cómo puedo contactarte?",
                answer: "Puedes contactarme a través de mis redes sociales o enviarme un correo. ¡Siempre estoy abierto a nuevas oportunidades y colaboraciones!"
            }
        ],

        /* END ABOUT ME SECTION*/








        /* SOFT SKILLS SECTION*/


        softSkillsTitle: "Soft Skills",
        softSkillsDescription: "He desarrollado diversas habilidades interpersonales, metódicas e intrapersonales que complementan mis conocimientos técnicos.",

        // Habilidades Interpersonales
        interpersonalSkills: "Habilidades Interpersonales",
        interpersonalList: [
            "Trabajo en equipo",
            "Escucha activa"
        ],

        // Habilidades Metódicas
        methodicalSkills: "Habilidades Metódicas",
        methodicalList: [
            "Organización",
            "Resolución de problemas",
            "Atención al detalle"
        ],

        // Competencias Intrapersonales
        intrapersonalSkills: "Competencias Intrapersonales",
        intrapersonalList: [
            "Adaptabilidad",
            "Autodisciplina",
            "Proactividad",
            "Aprendizaje continuo"
        ],

        /* END SOFT SKILLS SECTION*/







        


        /* EDUCATION SECTION*/

        educationTitle: "Mi Formación",

        // Estudios Reglados
        formalStudies: "📚 Estudios Reglados",

        // Bachillerato en Ciencias de la Salud
        highSchoolTitle: "Bachillerato en Ciencias de la Salud",
        highSchoolCenter: "<b>Centro:</b> IES El Getares (Algeciras)",
        highSchoolDate: "<b>Fecha:</b> Septiembre 2020 - Junio 2022",
        highSchoolDescription: "<b>Descripción:</b> En esta etapa adquirí una sólida formación en ciencias básicas como biología, química y matemáticas. También desarrollé habilidades analíticas y una gran capacidad de resolución de problemas. Finalmente, durante este periodo, descubrí el mundo del desarrollo y la programación, lo que me motivó a elegir este campo a nivel profesional.",
        skillsAcquiredText: "Habilidades Adquiridas:",
        highSchoolSkills: [
            "Adaptabilidad",
            "Resolución de problemas",
            "Inglés (B1)",
            "Francés (A2)"
        ],
        highSchoolIcons: [
            { src: "resources/Software_Icons/Python.png", alt: "Python", title: "Python" }
        ],

        // FP Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)
        damTitle: "FPGS en Desarrollo de Aplicaciones Multiplataforma (DAM)",
        damCenter: "<b>Centro:</b> IES Rafael Alberti (Cádiz)",
        damDate: "<b>Fecha:</b> Septiembre 2022 - Junio 2024",
        damDescription: "<b>Descripción:</b> Formación especializada en el diseño, desarrollo y mantenimiento de aplicaciones multiplataforma. Aprendí a programar en diversos lenguajes y frameworks, destacándome en el desarrollo móvil con Kotlin y Flutter.",
        damIcons: [
            { src: "resources/Software_Icons/Kotlin.png", alt: "Kotlin", title: "Kotlin" },
            { src: "resources/Software_Icons/JetpackCompose.png", alt: "JetpackCompose", title: "JetpackCompose" },
            { src: "resources/Software_Icons/Dart.png", alt: "Dart", title: "Dart" },
            { src: "resources/Software_Icons/Flutter.png", alt: "Flutter", title: "Flutter" },
            { src: "resources/Software_Icons/CShard.png", alt: "C#", title: "C#" },
            { src: "resources/Software_Icons/MySQL.png", alt: "MySQL", title: "MySQL" },
            { src: "resources/Software_Icons/MongoDB.png", alt: "MongoDB", title: "MongoDB" },
            { src: "resources/Software_Icons/Firebase.png", alt: "Firebase", title: "Firebase" }
        ],

        // Certificaciones
        certifications: "📜 Certificaciones",

        // Certificación de Cisco: Introduction to Cybersecurity
        cybersecTitle: "Introducción a la ciberseguridad",
        cybersecCenter: "<b>Centro:</b> Cisco Networking Academy",
        cybersecDate: "<b>Fecha:</b> Enero 2025",
        cybersecDescription: "<b>Descripción:</b> Certificación en fundamentos de ciberseguridad, explorando las amenazas más comunes, cómo proteger sistemas y comprender la importancia de la seguridad en la infraestructura digital.",
        cybersecSkills: [
            "Detección de Amenazas"
        ],

        // Reconocimientos
        awards: "🏆 Reconocimientos",
        noAwards: "Aún no poseo reconocimientos, ¡pero sigo trabajando para conseguirlos! 📱",

        // Contribuciones
        contributions: "🤝 Contribuciones",
        noContributions: "Aún no he realizado contribuciones, ¡pero planeo aportar a la comunidad en el futuro! 💻",

        // Participación en Eventos
        events: "📅 Participación en Eventos",
        noEvents: "Todavía no he participado en eventos, ¡pero estaré encantado de hacerlo pronto! 🎤",

        /* END EDUCATION SECTION*/

    },
    en: {
        navbarTitle: "AdriDevSP",
        introText: "Hello World!, my name is",
        jobTitle: "I'm a <span class='highlight'>Fullstack Developer!</span>",
        motto: "Fullstack & mobile developer by day, cybersecurity analyst by night.",
        downloadBtn: "Download CV",
        contactBtn: "&lt; Contacts /&gt;",
        popupTitle: "Emails",
        projectsTitle: "Projects",
        noProjects: "There are no outstanding projects yet 😔",
        techSkillsTitle: "Tech Skills",
        techSkillsDescription: "Throughout my training as a Fullstack Software Developer, I have acquired various software development skills and experience with key tools, enabling me to create scalable, flexible, solid, and fully functional cross-platform applications. Below, you can see the technical skills that have brought me to where I am today:",
        frontend: "Frontend",
        backend: "Backend",
        programmingLanguages: "Programming Languages",
        databases: "Databases",
        versionControl: "Version Control",
        frameworks: "Frameworks",
        otherTechnologies: "Other Technologies",
        experienceTitle: "Work Experience",
        noExperience: "I do not yet have professional experience, but in the meantime, I continue developing personal projects :D",








        /* HARDWARE SKILL SECTION */

        hardwareSkillsTitle: "Hardware Skills",
        hardwareSkillsDescription: "In addition to my experience in software development and cybersecurity, I also have knowledge in hardware, device assembly, and more.",
        hardwareMaintenance: "Maintenance and Diagnostics",
        hardwareRepair: "Hardware Repair",
        virtualization: "Installation and Management of Virtual Environments on Physical Devices",
        serverMaintenance: "Server Maintenance and Diagnostics",
        embeddedDevices: "Embedded Devices",

        hardwareSpans: {
            maintenance: [
                "Desktop PC assembly",
                "Installation and setup of various operating systems",
                "Hardware error detection"
            ],
            repair: [
                "Basic repair of laptops (Windows or Linux environment)",
                "Basic repair of mobile devices (Android)",
                "Basic repair of tablets",
                "Intermediate repair of desktop computers",
                "Basic performance optimization"
            ],
            virtualization: [
                "Installation of virtual environments (VMware and VirtualBox)",
                "Creation and management of virtual machines (VMs)",
                "Configuration of virtual hardware (CPU, RAM, storage)"
            ],
            serverMaintenance: [
                "Operating system installation for servers (Windows Server, Ubuntu Server, etc.)",
                "Basic assembly and installation of physical servers",
                "Basic hardware optimization for servers"
            ],
            embeddedDevices: "Arduino"
        },

        /* END HARDWARE SKILL SECTION */









        

        /* ABOUT ME SECTION*/

        aboutMeTitle: "About Me",
        aboutMeIntro1: "Hi! I am <strong>Adrián Sabino</strong>, a passionate <strong>Fullstack & Mobile Developer</strong> focused on creating modern, scalable, and functional applications. I am also training to become a <strong>Junior Cybersecurity Analyst</strong>.",
        aboutMeIntro2: "My journey combines the creativity of software development with the rigor of cybersecurity analysis. I love facing new challenges, constantly learning, and exploring new technologies.",

        // Ambitions
        ambitionsTitle: "🎯 My Life Ambitions",
        ambitionsList: [
            "🛡️ Become an <strong>expert in cybersecurity</strong>.",
            "🔒 Work at leading cybersecurity multinationals (Telefónica, Google, Deloitte, Microsoft, IBM, Cisco, Oracle, etc.).",
            "🖱️ Expand my knowledge in Fullstack and Cross-Platform Software Development.",
            "🏡 Live in countries such as Denmark, Norway, Germany, Ireland, the USA, Canada, Japan, or South Korea."
        ],

        // Hobbies
        hobbiesTitle: "🎨 Beyond the Code",
        hobbiesIntro: "When I'm not coding, learning cybersecurity, or exploring new technologies, I enjoy:",
        hobbiesList: [
            "🎮 Playing video games (Strategy, Shooters, Horror, Survival, Historical, and Souls genres).",
            "♟️ Playing board games (Chess, Risk, Seven Wonders Duels, Carcassonne).",
            "📖 Learning about world history and analyzing geopolitical situations.",
            "📺 Watching movies, series, and anime.",
            "🎵 Listening to music (Estopa, Fito y Fitipaldis, Mägo de Oz, Dani Martín, and Melendi)."
        ],

        // Curiosities
        curiositiesTitle: "🤔 Curiosities About Me",
        curiositiesList: [
            "👨‍💻 I wrote my first Python program when I was 16 years old.",
            "🏅 I've won several chess tournament awards in the Campo de Gibraltar.",
            "🌐 I'm passionate about history and geopolitics, and their influence on global technology.",
            "🧠 I love everything related to strategy; it's a great way to develop the brain.",
            "🥊 I'm interested in contact sports (Boxing, Kickboxing, Jiu-Jitsu), although I haven't been able to practice them.",
            "⚽ I enjoy practicing both team and individual sports (Soccer, Tennis, Padel, etc.).",
            "🎶 I like singing, and I would love to form a music band in the future."
        ],

        faqTitle: "❔ Frequently Asked Questions",
        faq: [
            {
                question: "What is your favorite programming language?",
                answer: "Currently, I really enjoy using Dart with the Flutter Framework to create cross-platform applications."
            },
            {
                question: "Which social network are you most active on?",
                answer: "I use many social networks, but I am most active on Instagram."
            },
            {
                question: "Do you have a driver's license?",
                answer: "Yes, I have a Category B driver's license. I passed both the theoretical exam (0 errors) and the practical exam (1 minor error) on my first attempt."
            },
            {
                question: "What is your level of English?",
                answer: "I consider myself to have an intermediate level of English (B1), although I do not hold an official certification."
            },
            {
                question: "Android or iOS?",
                answer: "I have always used Android and consider it superior to iOS due to the freedom it offers the user. I develop applications for both Android and iOS without distinction."
            },
            {
                question: "Windows, Mac, or Linux?",
                answer: "I prefer Windows for its ease of use, but I also use Linux (such as Kali Linux) for professional purposes. I do not use Mac due to my preference for open systems."
            },
            {
                question: "How can I contact you?",
                answer: "You can reach me through my social networks or by sending me an email. I am always open to new opportunities and collaborations!"
            }
        ],

        /* END ABOUT ME SECTION*/








        /* SOFT SKILLS SECTION*/

        softSkillsTitle: "Soft Skills",
        softSkillsDescription: "I have developed various interpersonal, methodical, and intrapersonal skills that complement my technical knowledge.",

        // Habilidades Interpersonales
        interpersonalSkills: "Interpersonal Skills",
        interpersonalList: [
            "Teamwork",
            "Active Listening"
        ],

        // Habilidades Metódicas
        methodicalSkills: "Methodical Skills",
        methodicalList: [
            "Organization",
            "Problem-Solving",
            "Attention to Detail"
        ],

        // Competencias Intrapersonales
        intrapersonalSkills: "Intrapersonal Skills",
        intrapersonalList: [
            "Adaptability",
            "Self-Discipline",
            "Proactivity",
            "Continuous Learning"
        ],

        /* END SOFT SKILLS SECTION*/








        /* EDUCATION SECTION*/

        educationTitle: "My Education",

        // Formal Studies
        formalStudies: "📚 Formal Studies",

        // High School in Health Sciences
        highSchoolTitle: "High School in Health Sciences",
        highSchoolCenter: "<b>Institution:</b> IES El Getares (Algeciras)",
        highSchoolDate: "<b>Date:</b> September 2020 - June 2022",
        highSchoolDescription: "<b>Description:</b> During this stage, I acquired a solid foundation in basic sciences such as biology, chemistry, and mathematics. I also developed analytical skills and a strong problem-solving ability. Lastly, during this period, I discovered the world of software development and programming, which inspired me to pursue this field professionally.",
        highSchoolSkills: [
            "Adaptability",
            "Problem-Solving",
            "English (B1)",
            "French (A2)"
        ],
        highSchoolIcons: [
            { src: "resources/Software_Icons/Python.png", alt: "Python", title: "Python" }
        ],

        // Higher Technician in Multiplatform Application Development (DAM)
        damTitle: "Higher Technician in Multiplatform Application Development (DAM)",
        damCenter: "<b>Institution:</b> IES Rafael Alberti (Cádiz)",
        damDate: "<b>Date:</b> September 2022 - June 2024",
        damDescription: "<b>Description:</b> Specialized training in the design, development, and maintenance of cross-platform applications. I learned to program in various languages and frameworks, excelling in mobile development with Kotlin and Flutter.",
        skillsAcquiredText: "Skills Acquired:",
        damIcons: [
            { src: "resources/Software_Icons/Kotlin.png", alt: "Kotlin", title: "Kotlin" },
            { src: "resources/Software_Icons/JetpackCompose.png", alt: "JetpackCompose", title: "JetpackCompose" },
            { src: "resources/Software_Icons/Dart.png", alt: "Dart", title: "Dart" },
            { src: "resources/Software_Icons/Flutter.png", alt: "Flutter", title: "Flutter" },
            { src: "resources/Software_Icons/CShard.png", alt: "C#", title: "C#" },
            { src: "resources/Software_Icons/MySQL.png", alt: "MySQL", title: "MySQL" },
            { src: "resources/Software_Icons/MongoDB.png", alt: "MongoDB", title: "MongoDB" },
            { src: "resources/Software_Icons/Firebase.png", alt: "Firebase", title: "Firebase" }
        ],

        // Certifications
        certifications: "📜 Certifications",

        // Cisco Certification: Introduction to Cybersecurity
        cybersecTitle: "Introduction to Cybersecurity",
        cybersecCenter: "<b>Institution:</b> Cisco Networking Academy",
        cybersecDate: "<b>Date:</b> January 2025",
        cybersecDescription: "<b>Description:</b> Certification in cybersecurity fundamentals, exploring common threats, how to protect systems, and understanding the importance of digital infrastructure security.",
        cybersecSkills: [
            "Threat Detection"
        ],

        // Awards
        awards: "🏆 Awards",
        noAwards: "I don't have any awards yet, but I keep working hard to earn them! 📱",

        // Contributions
        contributions: "🤝 Contributions",
        noContributions: "I haven't made any contributions yet, but I plan to support the community in the future! 💻",

        // Event Participation
        events: "📅 Event Participation",
        noEvents: "I haven't participated in any events yet, but I'm eager to join soon! 🎤",

        /* END EDUCATION SECTION*/

    },
};





// Función para cambiar de idioma
function changeLanguage(lang) {
    if (!translations[lang]) return; // Validar idioma válido








    // Actualizar contenido de la página
    document.getElementById("navbar-title").textContent = translations[lang].navbarTitle;
    document.getElementById("intro-text").textContent = translations[lang].introText;
    document.getElementById("job-title").innerHTML = translations[lang].jobTitle;
    document.getElementById("motto").textContent = translations[lang].motto;
    document.getElementById("download-btn").textContent = translations[lang].downloadBtn;
    document.getElementById("contact-btn").innerHTML = translations[lang].contactBtn;
    document.getElementById("popup-title").textContent = translations[lang].popupTitle;
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

    document.getElementById("highschool-title").textContent = translations[lang].highSchoolTitle;
    document.getElementById("highschool-center").innerHTML = translations[lang].highSchoolCenter;
    document.getElementById("highschool-date").innerHTML = translations[lang].highSchoolDate;
    document.getElementById("highschool-description").innerHTML = translations[lang].highSchoolDescription;
    document.getElementById("highschool-skills-title").innerHTML = `<b>${translations[lang].skillsAcquiredText}</b>`;

    const highSchoolSkillsSpans = document.querySelectorAll("#highschool-skills span");
    translations[lang].highSchoolSkills.forEach((text, index) => {
        highSchoolSkillsSpans[index].textContent = text;
    });

    // 📱 FP en DAM
    document.getElementById("dam-title").textContent = translations[lang].damTitle;
    document.getElementById("dam-center").innerHTML = translations[lang].damCenter;
    document.getElementById("dam-date").innerHTML = translations[lang].damDate;
    document.getElementById("dam-description").innerHTML = translations[lang].damDescription;
    document.getElementById("dam-skills-title").innerHTML = `<b>${translations[lang].skillsAcquiredText}</b>`;

    // 🛡️ Ciberseguridad
    document.getElementById("cybersec-title").textContent = translations[lang].cybersecTitle;
    document.getElementById("cybersec-center").innerHTML = translations[lang].cybersecCenter;
    document.getElementById("cybersec-date").innerHTML = translations[lang].cybersecDate;
    document.getElementById("cybersec-description").innerHTML = translations[lang].cybersecDescription;
    document.getElementById("cybersec-skills-title").innerHTML = `<b>${translations[lang].skillsAcquiredText}</b>`;

    // Reconocimientos, Contribuciones, Eventos
    document.getElementById("awards").textContent = translations[lang].awards;
    document.getElementById("no-awards").textContent = translations[lang].noAwards;
    document.getElementById("contributions").textContent = translations[lang].contributions;
    document.getElementById("no-contributions").textContent = translations[lang].noContributions;
    document.getElementById("events").textContent = translations[lang].events;
    document.getElementById("no-participation").textContent = translations[lang].noEvents;

    // Guardar idioma en localStorage
    localStorage.setItem("lang", lang);
}


// Detectar el idioma guardado o usar español por defecto
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "es";
    document.getElementById("language-switcher").value = savedLang;
    changeLanguage(savedLang);
});
