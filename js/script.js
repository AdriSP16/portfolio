// © 2025 Adrián Sabino Pérez. Todos los derechos reservados. Prohibida la reproducción o imitación total o parcial del código sin autorización.
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

    /* IDIOMA ESPAÑOL */

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
        navbarTitle: "AdriDevSP",
        introText: "¡Hola Mundo!, me llamo",
        jobTitle: "Soy un <span class='highlight'>Desarrollador Fullstack!</span>",
        motto: "Desarrollador fullstack & móvil de día, analista de ciberseguridad de noche.",
        downloadBtn: "Descargar CV",
        contactBtn: "&lt; Contactos /&gt;",
        popupTitle: "Emails",
        projectsTitle: "Proyectos",
        noProjects: "Aún no hay proyectos destacables 😔",

        /* APARTADO DE HABILIDADES TECNOLÓGICAS */

        techSkillsTitle: "Habilidades tecnológicas",
        techSkillsDescription: "A lo largo de mi formación como Desarrollador de Software Fullstack, he podido adquirir ciertas habilidades en desarrollo de Software, así como experiencia en las principales herramientas, las cuales me han permitido crear aplicaciones móviles y multiplataforma escalables, flexibles, sólidas y totalmente funcionales. A continuación, se pueden observar las habilidades tecnológicas que me han permitido llegar hasta donde estoy actualmente:",
        frontend: "Frontend",
        backend: "Backend",
        programmingLanguages: "Lenguajes de Programación",
        databases: "Bases de Datos",
        versionControl: "Control de Versiones",
        frameworks: "Frameworks",
        otherTechnologies: "Otras Tecnologías",

        /* FIN APARTADO DE TECH SKILLS */


        /* APARTADO DE EXPERIENCIA */

        experienceTitle: "Experiencia Laboral",
        noExperience: "Todavía no poseo experiencia, pero mientras tanto sigo desarrollando proyectos personales :D",

        /* FIN APARTADO DE EXPERIENCIA */



        /* HARDWARE SKILL SECTION */

        hardwareSkillsTitle: "Habilidades de Hardware",
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


        softSkillsTitle: "Habilidades Blandas",
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

    /* FIN IDIOMA ESPAÑOL */
























    /* IDIOMA INGLÉS */

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

    /* FIN IDIOMA INGLÉS */
















    /* IDIOMA FRANCÉS */

    fr: {
        navbarTitle: "AdriDevSP",
        introText: "Bonjour le Monde!, je m'appelle",
        jobTitle: "Je suis un <span class='highlight'>Développeur Fullstack!</span>",
        motto: "Développeur Fullstack & mobile le jour, analyste en cybersécurité la nuit.",
        downloadBtn: "Télécharger CV",
        contactBtn: "&lt; Contacts /&gt;",
        popupTitle: "Emails",
        projectsTitle: "Projets",
        noProjects: "Il n'y a pas encore de projets remarquables 😔",
        techSkillsTitle: "Compétences Techniques",
        techSkillsDescription: "Tout au long de ma formation en tant que Développeur de Logiciels Fullstack, j'ai acquis diverses compétences en développement logiciel et une expérience avec des outils clés, me permettant de créer des applications multiplateformes évolutives, flexibles, solides et entièrement fonctionnelles. Vous trouverez ci-dessous les compétences techniques qui m'ont permis d'en arriver là où je suis aujourd'hui :",
        frontend: "Frontend",
        backend: "Backend",
        programmingLanguages: "Langages de Programmation",
        databases: "Bases de Données",
        versionControl: "Contrôle de Version",
        frameworks: "Frameworks",
        otherTechnologies: "Autres Technologies",
        experienceTitle: "Expérience Professionnelle",
        noExperience: "Je n'ai pas encore d'expérience professionnelle, mais en attendant, je continue à développer des projets personnels :D",
    
    
        /* SECTION COMPÉTENCES MATÉRIELLES */
    
        hardwareSkillsTitle: "Compétences Matérielles",
        hardwareSkillsDescription: "En plus de mon expérience en développement logiciel et en cybersécurité, je possède également des connaissances en matériel, en assemblage d'appareils et bien plus encore.",
        hardwareMaintenance: "Maintenance et Diagnostic",
        hardwareRepair: "Réparation Matérielle",
        virtualization: "Installation et Gestion d'Environnements Virtuels sur des Appareils Physiques",
        serverMaintenance: "Maintenance et Diagnostic des Serveurs",
        embeddedDevices: "Appareils Embarqués",
    
        hardwareSpans: {
            maintenance: [
                "Assemblage de PC de bureau",
                "Installation et configuration de divers systèmes d'exploitation",
                "Détection d'erreurs matérielles"
            ],
            repair: [
                "Réparation basique d'ordinateurs portables (environnement Windows ou Linux)",
                "Réparation basique de dispositifs mobiles (Android)",
                "Réparation basique de tablettes",
                "Réparation intermédiaire d'ordinateurs de bureau",
                "Optimisation basique des performances"
            ],
            virtualization: [
                "Installation d'environnements virtuels (VMware et VirtualBox)",
                "Création et gestion de machines virtuelles (VMs)",
                "Configuration du matériel virtuel (CPU, RAM, stockage)"
            ],
            serverMaintenance: [
                "Installation de systèmes d'exploitation pour serveurs (Windows Server, Ubuntu Server, etc.)",
                "Assemblage et installation basique de serveurs physiques",
                "Optimisation basique du matériel des serveurs"
            ],
            embeddedDevices: "Arduino"
        },
    
        /* SECTION À PROPOS DE MOI */
    
        aboutMeTitle: "À Propos de Moi",
        aboutMeIntro1: "Salut ! Je suis <strong>Adrián Sabino</strong>, un <strong>Développeur Fullstack & Mobile</strong> passionné, spécialisé dans la création d'applications modernes, évolutives et fonctionnelles. Je me forme également pour devenir <strong>Analyste Junior en Cybersécurité</strong>.",
        aboutMeIntro2: "Mon parcours combine la créativité du développement logiciel avec la rigueur de l'analyse en cybersécurité. J'adore relever de nouveaux défis, apprendre continuellement et explorer de nouvelles technologies.",
    
        // Ambitions
        ambitionsTitle: "🎯 Mes Ambitions de Vie",
        ambitionsList: [
            "🛡️ Devenir un <strong>expert en cybersécurité</strong>.",
            "🔒 Travailler dans des multinationales leaders en cybersécurité (Telefónica, Google, Deloitte, Microsoft, IBM, Cisco, Oracle, etc.).",
            "🖱️ Élargir mes connaissances en Développement de Logiciels Fullstack et Multiplateformes.",
            "🏡 Vivre dans des pays comme le Danemark, la Norvège, l'Allemagne, l'Irlande, les États-Unis, le Canada, le Japon ou la Corée du Sud."
        ],
    
        // Hobbies
        hobbiesTitle: "🎨 Au-delà du Code",
        hobbiesIntro: "Quand je ne code pas, n'étudie pas la cybersécurité ou n'explore pas de nouvelles technologies, j'aime :",
        hobbiesList: [
            "🎮 Jouer à des jeux vidéo (Stratégie, FPS, Horreur, Survie, Historique et Souls-like).",
            "♟️ Jouer à des jeux de société (Échecs, Risk, Seven Wonders Duels, Carcassonne).",
            "📖 Apprendre l'histoire du monde et analyser les situations géopolitiques.",
            "📺 Regarder des films, des séries et des animes.",
            "🎵 Écouter de la musique (Estopa, Fito y Fitipaldis, Mägo de Oz, Dani Martín et Melendi)."
        ],
    
        // Curiosities
        curiositiesTitle: "🤔 Curiosités sur Moi",
        curiositiesList: [
            "👨‍💻 J'ai écrit mon premier programme en Python à l'âge de 16 ans.",
            "🏅 J'ai remporté plusieurs prix dans des tournois d'échecs dans la région du Campo de Gibraltar.",
            "🌐 Je suis passionné par l'histoire et la géopolitique, et par leur influence sur la technologie mondiale.",
            "🧠 J'adore tout ce qui est lié à la stratégie ; c'est un excellent moyen de développer l'esprit.",
            "🥊 Je suis intéressé par les sports de combat (Boxe, Kickboxing, Jiu-Jitsu), mais je n'ai pas encore eu l'occasion de les pratiquer.",
            "⚽ J'aime pratiquer des sports d'équipe et individuels (Football, Tennis, Padel, etc.).",
            "🎶 J'aime chanter et j'aimerais former un groupe de musique à l'avenir."
        ],
    
        faqTitle: "❔ Questions Fréquemment Posées",
        faq: [
            {
                question: "Quel est votre langage de programmation préféré ?",
                answer: "Actuellement, j'aime beaucoup utiliser Dart avec le Framework Flutter pour créer des applications multiplateformes."
            },
            {
                question: "Sur quel réseau social êtes-vous le plus actif ?",
                answer: "J'utilise de nombreux réseaux sociaux, mais je suis surtout actif sur Instagram."
            },
            {
                question: "Avez-vous un permis de conduire ?",
                answer: "Oui, j'ai un permis de conduire de catégorie B. J'ai réussi l'examen théorique (0 erreur) et l'examen pratique (1 faute mineure) du premier coup."
            },
            {
                question: "Quel est votre niveau d'anglais ?",
                answer: "Je considère avoir un niveau intermédiaire en anglais (B1), bien que je ne possède pas de certification officielle."
            },
            {
                question: "Android ou iOS ?",
                answer: "J'ai toujours utilisé Android et je le considère supérieur à iOS en raison de la liberté qu'il offre à l'utilisateur. Je développe des applications pour Android et iOS sans distinction."
            },
            {
                question: "Windows, Mac ou Linux ?",
                answer: "Je préfère Windows pour sa facilité d'utilisation, mais j'utilise aussi Linux (comme Kali Linux) pour des raisons professionnelles. Je n'utilise pas Mac en raison de ma préférence pour les systèmes ouverts."
            },
            {
                question: "Comment puis-je vous contacter ?",
                answer: "Vous pouvez me contacter via mes réseaux sociaux ou en m'envoyant un e-mail. Je suis toujours ouvert à de nouvelles opportunités et collaborations !"
            }
        ],

        /* SECTION COMPÉTENCES DOUCES (Soft Skills) */

        softSkillsTitle: "Compétences Douces",
        softSkillsDescription: "J'ai développé diverses compétences interpersonnelles, méthodiques et intrapersonnelles qui complètent mes connaissances techniques.",

        // Compétences Interpersonnelles
        interpersonalSkills: "Compétences Interpersonnelles",
        interpersonalList: [
            "Travail d'équipe",
            "Écoute active"
        ],

        // Compétences Méthodiques
        methodicalSkills: "Compétences Méthodiques",
        methodicalList: [
            "Organisation",
            "Résolution de problèmes",
            "Attention aux détails"
        ],

        // Compétences Intrapersonnelles
        intrapersonalSkills: "Compétences Intrapersonnelles",
        intrapersonalList: [
            "Adaptabilité",
            "Autodiscipline",
            "Proactivité",
            "Apprentissage continu"
        ],

        /* FIN DE LA SECTION COMPÉTENCES DOUCES */


        /* SECTION ÉDUCATION */

        educationTitle: "Mon Éducation",

        // Études Formelles
        formalStudies: "📚 Études Formelles",

        // Lycée en Sciences de la Santé
        highSchoolTitle: "Baccalauréat en Sciences de la Santé",
        highSchoolCenter: "<b>Établissement :</b> IES El Getares (Algeciras)",
        highSchoolDate: "<b>Date :</b> Septembre 2020 - Juin 2022",
        highSchoolDescription: "<b>Description :</b> Durant cette période, j'ai acquis une solide base en sciences fondamentales telles que la biologie, la chimie et les mathématiques. J'ai également développé des compétences analytiques et une grande capacité à résoudre des problèmes. Enfin, c'est au cours de cette période que j'ai découvert le monde du développement logiciel et de la programmation, ce qui m'a motivé à poursuivre ce domaine professionnellement.",
        highSchoolSkills: [
            "Adaptabilité",
            "Résolution de problèmes",
            "Anglais (B1)",
            "Français (A2)"
        ],
        highSchoolIcons: [
            { src: "resources/Software_Icons/Python.png", alt: "Python", title: "Python" }
        ],

        // Technicien Supérieur en Développement d'Applications Multiplateformes (DAM)
        damTitle: "Technicien Supérieur en Développement d'Applications Multiplateformes (DAM)",
        damCenter: "<b>Établissement :</b> IES Rafael Alberti (Cádiz)",
        damDate: "<b>Date :</b> Septembre 2022 - Juin 2024",
        damDescription: "<b>Description :</b> Formation spécialisée dans la conception, le développement et la maintenance d'applications multiplateformes. J'ai appris à programmer dans divers langages et frameworks, en me spécialisant dans le développement mobile avec Kotlin et Flutter.",
        skillsAcquiredText: "Compétences Acquises :",
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

        // Certification Cisco : Introduction à la Cybersécurité
        cybersecTitle: "Introduction à la Cybersécurité",
        cybersecCenter: "<b>Établissement :</b> Cisco Networking Academy",
        cybersecDate: "<b>Date :</b> Janvier 2025",
        cybersecDescription: "<b>Description :</b> Certification en fondamentaux de la cybersécurité, explorant les menaces courantes, la protection des systèmes et la compréhension de l'importance de la sécurité dans les infrastructures numériques.",
        cybersecSkills: [
            "Détection de Menaces"
        ],

        // Prix et Récompenses
        awards: "🏆 Récompenses",
        noAwards: "Je n'ai pas encore reçu de récompenses, mais je travaille dur pour en obtenir ! 📱",

        // Contributions
        contributions: "🤝 Contributions",
        noContributions: "Je n'ai pas encore apporté de contributions, mais j'envisage de soutenir la communauté à l'avenir ! 💻",

        // Participation à des Événements
        events: "📅 Participation à des Événements",
        noEvents: "Je n'ai pas encore participé à des événements, mais j'ai hâte d'y prendre part bientôt ! 🎤",

        /* FIN DE LA SECTION ÉDUCATION */
    },

    /* FIN IDIOMA FRANCÉS */




















    /* IDIOMA ALEMÁN */

    de: {
        navbarTitle: "AdriDevSP",
        introText: "Hallo Welt!, mein Name ist",
        jobTitle: "Ich bin ein <span class='highlight'>Fullstack-Entwickler!</span>",
        motto: "Fullstack- & Mobile-Entwickler am Tag, Cybersecurity-Analyst bei Nacht.",
        downloadBtn: "Lebenslauf herunterladen",
        contactBtn: "&lt; Kontakte /&gt;",
        popupTitle: "E-Mails",
        projectsTitle: "Projekte",
        noProjects: "Es gibt noch keine herausragenden Projekte 😔",
        techSkillsTitle: "Technische Fähigkeiten",
        techSkillsDescription: "Während meiner Ausbildung zum Fullstack-Softwareentwickler habe ich verschiedene Fähigkeiten in der Softwareentwicklung erworben und Erfahrung mit wichtigen Tools gesammelt, die es mir ermöglichen, skalierbare, flexible, stabile und voll funktionsfähige plattformübergreifende Anwendungen zu erstellen. Nachfolgend sehen Sie die technischen Fähigkeiten, die mich dorthin gebracht haben, wo ich heute bin:",
        frontend: "Frontend",
        backend: "Backend",
        programmingLanguages: "Programmiersprachen",
        databases: "Datenbanken",
        versionControl: "Versionskontrolle",
        frameworks: "Frameworks",
        otherTechnologies: "Andere Technologien",
        experienceTitle: "Berufserfahrung",
        noExperience: "Ich habe noch keine Berufserfahrung, aber in der Zwischenzeit entwickle ich weiterhin persönliche Projekte :D",
    
        /* HARDWARE-FÄHIGKEITEN-BEREICH */
    
        hardwareSkillsTitle: "Hardware-Fähigkeiten",
        hardwareSkillsDescription: "Zusätzlich zu meiner Erfahrung in der Softwareentwicklung und Cybersicherheit verfüge ich auch über Kenntnisse in Hardware, Gerätezusammenbau und mehr.",
        hardwareMaintenance: "Wartung und Diagnose",
        hardwareRepair: "Hardware-Reparatur",
        virtualization: "Installation und Verwaltung virtueller Umgebungen auf physischen Geräten",
        serverMaintenance: "Wartung und Diagnose von Servern",
        embeddedDevices: "Eingebettete Geräte",
    
        hardwareSpans: {
            maintenance: [
                "Zusammenbau von Desktop-PCs",
                "Installation und Einrichtung verschiedener Betriebssysteme",
                "Erkennung von Hardwarefehlern"
            ],
            repair: [
                "Grundlegende Reparatur von Laptops (Windows- oder Linux-Umgebung)",
                "Grundlegende Reparatur von Mobilgeräten (Android)",
                "Grundlegende Reparatur von Tablets",
                "Mittlere Reparatur von Desktop-Computern",
                "Grundlegende Leistungsoptimierung"
            ],
            virtualization: [
                "Installation virtueller Umgebungen (VMware und VirtualBox)",
                "Erstellung und Verwaltung virtueller Maschinen (VMs)",
                "Konfiguration von virtueller Hardware (CPU, RAM, Speicher)"
            ],
            serverMaintenance: [
                "Installation von Betriebssystemen für Server (Windows Server, Ubuntu Server usw.)",
                "Grundlegende Montage und Installation physischer Server",
                "Grundlegende Hardwareoptimierung für Server"
            ],
            embeddedDevices: "Arduino"
        },
    
        /* ÜBER MICH BEREICH */
    
        aboutMeTitle: "Über mich",
        aboutMeIntro1: "Hallo! Ich bin <strong>Adrián Sabino</strong>, ein leidenschaftlicher <strong>Fullstack- & Mobile-Entwickler</strong>, der sich auf die Erstellung moderner, skalierbarer und funktionaler Anwendungen spezialisiert hat. Ich bilde mich auch zum <strong>Junior-Cybersecurity-Analysten</strong> aus.",
        aboutMeIntro2: "Mein Werdegang verbindet die Kreativität der Softwareentwicklung mit der Genauigkeit der Cybersicherheitsanalyse. Ich liebe es, neue Herausforderungen zu meistern, ständig zu lernen und neue Technologien zu erkunden.",
    
        // Ambitionen
        ambitionsTitle: "🎯 Meine Lebensziele",
        ambitionsList: [
            "🛡️ Ein <strong>Experte für Cybersicherheit</strong> werden.",
            "🔒 In führenden multinationalen Unternehmen im Bereich Cybersicherheit arbeiten (Telefónica, Google, Deloitte, Microsoft, IBM, Cisco, Oracle usw.).",
            "🖱️ Mein Wissen in Fullstack- und plattformübergreifender Softwareentwicklung erweitern.",
            "🏡 In Ländern wie Dänemark, Norwegen, Deutschland, Irland, den USA, Kanada, Japan oder Südkorea leben."
        ],
    
        // Hobbys
        hobbiesTitle: "🎨 Jenseits des Codes",
        hobbiesIntro: "Wenn ich nicht gerade programmiere, mich in Cybersicherheit weiterbilde oder neue Technologien erkunde, genieße ich:",
        hobbiesList: [
            "🎮 Videospiele spielen (Strategie, Shooter, Horror, Survival, Historisch und Souls-like).",
            "♟️ Brettspiele spielen (Schach, Risiko, Seven Wonders Duels, Carcassonne).",
            "📖 Über Weltgeschichte lernen und geopolitische Situationen analysieren.",
            "📺 Filme, Serien und Animes ansehen.",
            "🎵 Musik hören (Estopa, Fito y Fitipaldis, Mägo de Oz, Dani Martín und Melendi)."
        ],
    
        // Kuriositäten
        curiositiesTitle: "🤔 Kuriositäten über mich",
        curiositiesList: [
            "👨‍💻 Ich habe mein erstes Python-Programm mit 16 Jahren geschrieben.",
            "🏅 Ich habe mehrere Preise bei Schachturnieren in der Region Campo de Gibraltar gewonnen.",
            "🌐 Ich bin fasziniert von Geschichte und Geopolitik und deren Einfluss auf die globale Technologie.",
            "🧠 Ich liebe alles, was mit Strategie zu tun hat; es ist eine großartige Möglichkeit, den Geist zu fördern.",
            "🥊 Ich interessiere mich für Kampfsportarten (Boxen, Kickboxen, Jiu-Jitsu), obwohl ich sie noch nicht praktizieren konnte.",
            "⚽ Ich genieße sowohl Team- als auch Einzelsportarten (Fußball, Tennis, Padel usw.).",
            "🎶 Ich liebe es zu singen und möchte in Zukunft eine Band gründen."
        ],
    
        faqTitle: "❔ Häufig gestellte Fragen",
        faq: [
            {
                question: "Was ist Ihre bevorzugte Programmiersprache?",
                answer: "Derzeit arbeite ich sehr gerne mit Dart und dem Flutter Framework zur Erstellung plattformübergreifender Anwendungen."
            },
            {
                question: "Auf welchem sozialen Netzwerk sind Sie am aktivsten?",
                answer: "Ich nutze viele soziale Netzwerke, bin aber vor allem auf Instagram aktiv."
            },
            {
                question: "Haben Sie einen Führerschein?",
                answer: "Ja, ich besitze einen Führerschein der Klasse B. Ich habe sowohl die theoretische (0 Fehler) als auch die praktische Prüfung (1 kleiner Fehler) beim ersten Versuch bestanden."
            },
            {
                question: "Wie gut ist Ihr Englisch?",
                answer: "Ich habe ein mittleres Englischniveau (B1), obwohl ich kein offizielles Zertifikat besitze."
            },
            {
                question: "Android oder iOS?",
                answer: "Ich habe immer Android benutzt und halte es aufgrund der Benutzerfreiheit für besser als iOS. Ich entwickle Anwendungen sowohl für Android als auch für iOS."
            },
            {
                question: "Windows, Mac oder Linux?",
                answer: "Ich bevorzuge Windows wegen seiner Benutzerfreundlichkeit, verwende aber auch Linux (z. B. Kali Linux) für berufliche Zwecke. Ich nutze Mac nicht aufgrund meiner Präferenz für offene Systeme."
            },
            {
                question: "Wie kann ich Sie kontaktieren?",
                answer: "Sie können mich über meine sozialen Netzwerke oder per E-Mail kontaktieren. Ich bin immer offen für neue Möglichkeiten und Kooperationen!"
            }
        ],

        /* BEREICH SOFT SKILLS */

        softSkillsTitle: "Soziale Kompetenzen",
        softSkillsDescription: "Ich habe verschiedene zwischenmenschliche, methodische und intrapersonelle Fähigkeiten entwickelt, die mein technisches Wissen ergänzen.",

        // Zwischenmenschliche Fähigkeiten
        interpersonalSkills: "Zwischenmenschliche Fähigkeiten",
        interpersonalList: [
            "Teamarbeit",
            "Aktives Zuhören"
        ],

        // Methodische Fähigkeiten
        methodicalSkills: "Methodische Fähigkeiten",
        methodicalList: [
            "Organisation",
            "Problemlösung",
            "Aufmerksamkeit für Details"
        ],

        // Intrapersonelle Fähigkeiten
        intrapersonalSkills: "Intrapersonelle Fähigkeiten",
        intrapersonalList: [
            "Anpassungsfähigkeit",
            "Selbstdisziplin",
            "Proaktivität",
            "Lebenslanges Lernen"
        ],

        /* ENDE BEREICH SOFT SKILLS */


        /* BEREICH AUSBILDUNG */

        educationTitle: "Meine Ausbildung",

        // Formale Studien
        formalStudies: "📚 Formale Studien",

        // Abitur in Gesundheitswissenschaften
        highSchoolTitle: "Abitur in Gesundheitswissenschaften",
        highSchoolCenter: "<b>Bildungseinrichtung:</b> IES El Getares (Algeciras)",
        highSchoolDate: "<b>Datum:</b> September 2020 - Juni 2022",
        highSchoolDescription: "<b>Beschreibung:</b> Während dieser Zeit habe ich eine solide Grundlage in grundlegenden Wissenschaften wie Biologie, Chemie und Mathematik erworben. Ich habe auch analytische Fähigkeiten und eine ausgeprägte Problemlösungskompetenz entwickelt. Schließlich habe ich während dieser Phase die Welt der Softwareentwicklung und Programmierung entdeckt, was mich dazu inspirierte, diesen Bereich professionell zu verfolgen.",
        highSchoolSkills: [
            "Anpassungsfähigkeit",
            "Problemlösung",
            "Englisch (B1)",
            "Französisch (A2)"
        ],
        highSchoolIcons: [
            { src: "resources/Software_Icons/Python.png", alt: "Python", title: "Python" }
        ],

        // Staatlich geprüfter Techniker für plattformübergreifende Anwendungsentwicklung (DAM)
        damTitle: "Staatlich geprüfter Techniker für plattformübergreifende Anwendungsentwicklung (DAM)",
        damCenter: "<b>Bildungseinrichtung:</b> IES Rafael Alberti (Cádiz)",
        damDate: "<b>Datum:</b> September 2022 - Juni 2024",
        damDescription: "<b>Beschreibung:</b> Spezialisierte Ausbildung in der Konzeption, Entwicklung und Wartung plattformübergreifender Anwendungen. Ich habe gelernt, in verschiedenen Programmiersprachen und Frameworks zu arbeiten, wobei ich mich auf die mobile Entwicklung mit Kotlin und Flutter spezialisiert habe.",
        skillsAcquiredText: "Erworbene Fähigkeiten:",
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

        // Zertifizierungen
        certifications: "📜 Zertifizierungen",

        // Cisco-Zertifizierung: Einführung in die Cybersicherheit
        cybersecTitle: "Einführung in die Cybersicherheit",
        cybersecCenter: "<b>Bildungseinrichtung:</b> Cisco Networking Academy",
        cybersecDate: "<b>Datum:</b> Januar 2025",
        cybersecDescription: "<b>Beschreibung:</b> Zertifizierung in den Grundlagen der Cybersicherheit mit Schwerpunkt auf häufigen Bedrohungen, Systemschutz und dem Verständnis der Bedeutung von Sicherheit in digitalen Infrastrukturen.",
        cybersecSkills: [
            "Bedrohungserkennung"
        ],

        // Auszeichnungen
        awards: "🏆 Auszeichnungen",
        noAwards: "Ich habe noch keine Auszeichnungen erhalten, aber ich arbeite hart daran, welche zu bekommen! 📱",

        // Beiträge
        contributions: "🤝 Beiträge",
        noContributions: "Ich habe noch keine Beiträge geleistet, aber ich plane, in Zukunft zur Community beizutragen! 💻",

        // Teilnahme an Veranstaltungen
        events: "📅 Teilnahme an Veranstaltungen",
        noEvents: "Ich habe noch an keinen Veranstaltungen teilgenommen, freue mich aber darauf, bald daran teilzunehmen! 🎤",

        /* ENDE BEREICH AUSBILDUNG */

    },    

    /* FIN DEL IDIOMA ALEMÁN */





















    /* DIALECTO CATALÁN */

    ca: {
        navbarTitle: "AdriDevSP",
        introText: "Hola món!, em dic",
        jobTitle: "Soc un <span class='highlight'>Desenvolupador Fullstack!</span>",
        motto: "Desenvolupador fullstack & mòbil de dia, analista de ciberseguretat de nit.",
        downloadBtn: "Descarregar CV",
        contactBtn: "&lt; Contactes /&gt;",
        popupTitle: "Correus",
        projectsTitle: "Projectes",
        noProjects: "Encara no hi ha projectes destacables 😔",

        /* APARTAT D'HABILITATS TECNOLÒGIQUES */

        techSkillsTitle: "Habilitats tecnològiques",
        techSkillsDescription: "Al llarg de la meva formació com a Desenvolupador de Programari Fullstack, he adquirit diverses habilitats en el desenvolupament de programari, així com experiència amb les principals eines que m'han permès crear aplicacions mòbils i multiplataforma escalables, flexibles, sòlides i totalment funcionals. A continuació, es poden veure les habilitats tecnològiques que m'han permès arribar on soc actualment:",
        frontend: "Frontend",
        backend: "Backend",
        programmingLanguages: "Llenguatges de Programació",
        databases: "Bases de Dades",
        versionControl: "Control de Versions",
        frameworks: "Frameworks",
        otherTechnologies: "Altres Tecnologies",

        /* FI APARTAT D'HABILITATS TECNOLÒGIQUES */


        /* APARTAT D'EXPERIÈNCIA */

        experienceTitle: "Experiència Laboral",
        noExperience: "Encara no tinc experiència, però mentrestant continuo desenvolupant projectes personals :D",

        /* FI APARTAT D'EXPERIÈNCIA */


        /* APARTAT D'HABILITATS DE MAQUINARI */

        hardwareSkillsTitle: "Habilitats de Maquinari",
        hardwareSkillsDescription: "A més de la meva experiència en desenvolupament de programari i ciberseguretat, tinc coneixements en maquinari, muntatge d'equips i molt més.",
        hardwareMaintenance: "Manteniment i Diagnòstic",
        hardwareRepair: "Reparació de maquinari",
        virtualization: "Instal·lació i gestió d'entorns virtuals en dispositius físics",
        serverMaintenance: "Manteniment i Diagnòstic de servidors",
        embeddedDevices: "Dispositius Integrats",

        hardwareSpans: { 
            maintenance: [
                "Muntatge de PCs de sobretaula",
                "Instal·lació i posada en marxa de diversos sistemes operatius",
                "Detecció d'errors de maquinari"
            ],
            repair: [
                "Reparació bàsica de portàtils (Entorn Windows o Linux)",
                "Reparació bàsica de dispositius mòbils (Android)",
                "Reparació bàsica de tauletes",
                "Reparació intermèdia d'ordinadors de sobretaula",
                "Optimització bàsica del rendiment de l'equip"
            ],
            virtualization: [
                "Instal·lació d'entorns virtuals (VMware i VirtualBox)",
                "Creació i administració de màquines virtuals (VMs)",
                "Configuració de maquinari virtual (CPU, RAM, emmagatzematge)"
            ],
            serverMaintenance: [
                "Instal·lació de sistemes operatius per a servidors (Windows Server, Ubuntu Server, etc.)",
                "Muntatge i instal·lació bàsica de servidors físics",
                "Optimització bàsica de maquinari en servidors"
            ],
            embeddedDevices: "Arduino"
        },

        /* FI APARTAT D'HABILITATS DE MAQUINARI */


        /* SECCIÓ SOBRE MI */

        aboutMeTitle: "Sobre Mi",
        aboutMeIntro1: "Hola! Soc <strong>Adrián Sabino</strong>, un apassionat <strong>Desenvolupador Fullstack & Mòbil</strong> amb un enfocament en la creació d'aplicacions modernes, escalables i funcionals. Actualment, m'estic formant per convertir-me en <strong>Analista Junior en Ciberseguretat</strong>.",
        aboutMeIntro2: "La meva trajectòria combina la creativitat del desenvolupament de programari amb la rigorositat de l'anàlisi de ciberseguretat. M'encanta afrontar nous reptes, aprendre constantment i explorar noves tecnologies per millorar les meves habilitats.",

        // Ambicions
        ambitionsTitle: "🎯 Les Meves Ambicions",
        ambitionsList: [
            "🛡️ Convertir-me en un <strong>expert en ciberseguretat</strong>.",
            "🔒 Treballar en multinacionals líders en l'àmbit de la ciberseguretat (Telefónica, Google, Deloitte, Microsoft, IBM, Cisco, Oracle, etc.).",
            "🖱️ Ampliar al màxim els meus coneixements en Desenvolupament de Programari Multiplataforma i Fullstack.",
            "🏡 Viure en països del nord d'Europa (Dinamarca, Noruega, Alemanya, Irlanda), a Amèrica del Nord (EUA o Canadà) o a Àsia (Japó o Corea del Sud)."
        ],

        // Aficions
        hobbiesTitle: "🎨 Més Enllà del Codi",
        hobbiesIntro: "Quan no estic programant, formant-me en ciberseguretat o aprenent noves tecnologies, gaudeixo de:",
        hobbiesList: [
            "🎮 Jugar a videojocs (Els meus gèneres favorits són: Estratègia, Shooters, Terror, Survival, Històrics i Souls).",
            "♟️ Jugar a jocs de taula (Com els Escacs, Risk, Seven Wonders Duels o Carcassonne).",
            "📖 Aprendre sobre història mundial, especialment d'Espanya, i analitzar situacions geopolítiques.",
            "📺 Veure pel·lícules, sèries i anime.",
            "🎵 Escoltar música (Estopa, Fito y Fitipaldis, Mägo de Oz, El Canto del Loco, Dani Martín i Melendi)."
        ],

        curiositiesTitle: "🤔 Curiositats Sobre Mi",
        curiositiesList: [
            "👨‍💻 Vaig escriure el meu primer programa en Python quan tenia 16 anys.",
            "🏅 He guanyat diversos premis en tornejos d'escacs al Camp de Gibraltar.",
            "🌐 Em fascina la història i la geopolítica, i la seva influència en la tecnologia global.",
            "🧠 M'encanta tot el relacionat amb l'estratègia; és una gran manera de desenvolupar la ment.",
            "🥊 M'interessen els esports de contacte (Boxa, Kickboxing, Jiu-Jitsu), tot i que no he tingut l'oportunitat de practicar-los.",
            "⚽ Gaudeixo practicant tant esports d'equip com individuals (Futbol, Tennis, Pàdel, etc.).",
            "🎶 M'agrada cantar, i m'encantaria formar una banda de música en el futur."
        ],

        faqTitle: "❔ Preguntes Freqüents",
        faq: [
            {
                question: "Quin és el teu llenguatge de programació preferit?",
                answer: "Actualment, m'agrada molt utilitzar Dart amb el framework Flutter per crear aplicacions multiplataforma."
            },
            {
                question: "A quina xarxa social estàs més actiu?",
                answer: "Utilitzo moltes xarxes socials, però estic més actiu a Instagram."
            },
            {
                question: "Tens carnet de conduir?",
                answer: "Sí, tinc el permís de conduir de categoria B. Vaig aprovar tant l'examen teòric (0 errors) com el pràctic (1 error lleu) a la primera."
            },
            {
                question: "Quin és el teu nivell d'anglès?",
                answer: "Considero que tinc un nivell intermedi d'anglès (B1), tot i que no tinc una certificació oficial."
            },
            {
                question: "Android o iOS?",
                answer: "Sempre he utilitzat Android i el considero superior a iOS per la llibertat que ofereix a l'usuari. Desenvolupo aplicacions tant per a Android com per a iOS sense distinció."
            },
            {
                question: "Windows, Mac o Linux?",
                answer: "Prefereixo Windows per la seva comoditat, però també utilitzo Linux (com Kali Linux) per a finalitats professionals. No faig servir Mac per la meva preferència per sistemes oberts."
            },
            {
                question: "Com puc contactar amb tu?",
                answer: "Pots contactar amb mi a través de les meves xarxes socials o enviant-me un correu electrònic. Sempre estic obert a noves oportunitats i col·laboracions!"
            }
        ],

        /* FI SECCIÓ SOBRE MI */

        /* SECCIÓ DE SOFT SKILLS */

        softSkillsTitle: "Habilitats Toves",
        softSkillsDescription: "He desenvolupat diverses habilitats interpersonals, metòdiques i intrapersonals que complementen els meus coneixements tècnics.",
        interpersonalSkills: "Habilitats Interpersonals",
        interpersonalList: [
            "Treball en equip",
            "Escolta activa"
        ],
        methodicalSkills: "Habilitats Metòdiques",
        methodicalList: [
            "Organització",
            "Resolució de problemes",
            "Atenció al detall"
        ],
        intrapersonalSkills: "Competències Intrapersonals",
        intrapersonalList: [
            "Adaptabilitat",
            "Autodisciplina",
            "Proactivitat",
            "Aprenentatge continu"
        ],

        /* FI SECCIÓ DE SOFT SKILLS */

        /* SECCIÓ D'EDUCACIÓ */

        educationTitle: "La Meva Formació",

        // Estudis Reglats
        formalStudies: "📚 Estudis Reglats",

        // Batxillerat en Ciències de la Salut
        highSchoolTitle: "Batxillerat en Ciències de la Salut",
        highSchoolCenter: "<b>Centre:</b> IES El Getares (Algesires)",
        highSchoolDate: "<b>Data:</b> Setembre 2020 - Juny 2022",
        highSchoolDescription: "<b>Descripció:</b> En aquesta etapa vaig adquirir una sòlida formació en ciències bàsiques com biologia, química i matemàtiques. També vaig desenvolupar habilitats analítiques i una gran capacitat de resolució de problemes. Finalment, durant aquest període, vaig descobrir el món del desenvolupament i la programació, fet que em va motivar a triar aquest camp a nivell professional.",
        skillsAcquiredText: "Habilitats Adquirides:",
        highSchoolSkills: [
            "Adaptabilitat",
            "Resolució de problemes",
            "Anglès (B1)",
            "Francès (A2)"
        ],
        highSchoolIcons: [
            { src: "resources/Software_Icons/Python.png", alt: "Python", title: "Python" }
        ],

        // Cicle Formatiu de Grau Superior en Desenvolupament d'Aplicacions Multiplataforma (DAM)
        damTitle: "CFGS en Desenvolupament d'Aplicacions Multiplataforma (DAM)",
        damCenter: "<b>Centre:</b> IES Rafael Alberti (Cadis)",
        damDate: "<b>Data:</b> Setembre 2022 - Juny 2024",
        damDescription: "<b>Descripció:</b> Formació especialitzada en el disseny, desenvolupament i manteniment d'aplicacions multiplataforma. Vaig aprendre a programar en diversos llenguatges i frameworks, destacant-me en el desenvolupament mòbil amb Kotlin i Flutter.",
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

        // Certificacions
        certifications: "📜 Certificacions",

        // Certificació de Cisco: Introducció a la Ciberseguretat
        cybersecTitle: "Introducció a la Ciberseguretat",
        cybersecCenter: "<b>Centre:</b> Cisco Networking Academy",
        cybersecDate: "<b>Data:</b> Gener 2025",
        cybersecDescription: "<b>Descripció:</b> Certificació en fonaments de ciberseguretat, explorant les amenaces més comunes, com protegir sistemes i comprendre la importància de la seguretat en la infraestructura digital.",
        cybersecSkills: [
            "Detecció d'Amenaces"
        ],

        // Reconeixements
        awards: "🏆 Reconeixements",
        noAwards: "Encara no tinc reconeixements, però continuo treballant per aconseguir-los! 📱",

        // Contribucions
        contributions: "🤝 Contribucions",
        noContributions: "Encara no he realitzat contribucions, però tinc previst aportar a la comunitat en el futur! 💻",

        // Participació en Esdeveniments
        events: "📅 Participació en Esdeveniments",
        noEvents: "Encara no he participat en esdeveniments, però estaré encantat de fer-ho ben aviat! 🎤",

        /* FI SECCIÓ D'EDUCACIÓ */
    },

    /* FIN DIALECTO CATALÀ */

















    /* IDIOMA EUSKERA */

    eu: {
        navbarTitle: "AdriDevSP",
        introText: "Kaixo Mundua!, nire izena da",
        jobTitle: "Ni <span class='highlight'>Fullstack Garatzailea</span> naiz!",
        motto: "Fullstack eta mugikorretarako garatzailea egunez, zibersegurtasun analista gauez.",
        downloadBtn: "Deskargatu CV",
        contactBtn: "&lt; Harremanak /&gt;",
        popupTitle: "Emailak",
        projectsTitle: "Proiektuak",
        noProjects: "Oraindik ez dago nabarmendutako proiekturik 😔",
    
        /* TEKNOLOGIA GAITASUNAK ATALA */
    
        techSkillsTitle: "Teknologia Gaitasunak",
        techSkillsDescription: "Fullstack software garatzaile moduan izan dudan prestakuntzan zehar, hainbat software-garapenerako gaitasunak eskuratu ditut. Halaber, tresna nagusietan esperientzia lortu dut, eta horrek aplikazio eskalagarri, malgu eta funtzionalak sortzeko aukera eman dit. Hona hemen gaur egun nagoen tokira iristeko eskuratu ditudan teknologia-gaitasunak:",
        frontend: "Frontend",
        backend: "Backend",
        programmingLanguages: "Programazio Lengoaia",
        databases: "Datu-baseak",
        versionControl: "Bertsioen Kontrola",
        frameworks: "Framework-ak",
        otherTechnologies: "Beste Teknologia batzuk",
    
        /* TEKNOLOGIA GAITASUNAK ATALAREN AMAIERA */
    
    
        /* LAN-ESPERIENTZIA ATALA */
    
        experienceTitle: "Lan-esperientzia",
        noExperience: "Oraindik ez daukat lan-esperientziarik, baina bitartean proiektu pertsonalak garatzen jarraitzen dut :D",
    
        /* LAN-ESPERIENTZIA ATALAREN AMAIERA */
    
    
        /* HARDWARE GAITASUNEN ATALA */
    
        hardwareSkillsTitle: "Hardware Gaitasunak",
        hardwareSkillsDescription: "Software-garapenean eta zibersegurtasunean izandako esperientziaz gain, hardwareari buruzko ezagutzak ditut, ekipoak muntatzen eta beste hainbat arlotan.",
        hardwareMaintenance: "Mantentzea eta Diagnostikoa",
        hardwareRepair: "Hardware konponketa",
        virtualization: "Ingurune birtualak instalatzea eta kudeatzea gailu fisikoetan",
        serverMaintenance: "Zerbitzarien Mantentzea eta Diagnostikoa",
        embeddedDevices: "Txertatutako Gailuak",
    
        hardwareSpans: {
            maintenance: [
                "Mahaigaineko PCak muntatzea",
                "Sistema eragile desberdinak instalatzea eta konfigurazioa",
                "Hardware-akatsen detekzioa"
            ],
            repair: [
                "Oinarrizko mailako ordenagailu eramangarrien konponketa (Windows edo Linux ingurunea)",
                "Oinarrizko mailako mugikorren konponketa (Android)",
                "Oinarrizko mailako tabletaren konponketa",
                "Maila ertaina mahaigaineko ordenagailuen konponketan",
                "Ekipoen errendimenduaren optimizazio oinarrizkoa"
            ],
            virtualization: [
                "Ingurune birtualen instalazioa (VMware eta VirtualBox)",
                "Makina birtualen (VM) sorrera eta administrazioa",
                "Hardware birtualaren konfigurazioa (CPU, RAM, biltegiratzea)"
            ],
            serverMaintenance: [
                "Zerbitzarientzako sistema eragileen instalazioa (Windows Server, Ubuntu Server, etab.)",
                "Zerbitzari fisikoen muntaketa eta instalazio oinarrizkoa",
                "Zerbitzarietan hardwarearen oinarrizko optimizazioa"
            ],
            embeddedDevices: "Arduino"
        },
    
        /* HARDWARE GAITASUNEN ATALAREN AMAIERA */
    
    
        /* NI BURUZKO ATALA */
    
        aboutMeTitle: "Ni Buruz",
        aboutMeIntro1: "Kaixo! <strong>Adrián Sabino</strong> naiz, <strong>Fullstack eta Mugikorreko Garatzaile</strong> sutsua, aplikazio moderno, eskalagarri eta funtzionalak sortzeko ikuspegiarekin. Gainera, gaur egun <strong>Zibersegurtasuneko Analista Junior</strong> gisa trebatzeko prozesuan nago.",
        aboutMeIntro2: "Nire ibilbideak software-garapenaren sormena eta zibersegurtasunaren analisiaren zorrotza uztartzen ditu. Erronka berriei aurre egitea, etengabe ikastea eta teknologia berriak arakatzea gustatzen zait nire gaitasunak hobetzeko.",
    
        ambitionsTitle: "🎯 Nire Bizitza Anbizioak",
        ambitionsList: [
            "🛡️ <strong>Zibersegurtasunean aditua</strong> bihurtzea.",
            "🔒 Zibersegurtasunean lider diren multinazionaletan lan egitea (Telefónica, Google, Deloitte, Microsoft, IBM, Cisco, Oracle, etab.).",
            "🖱️ Plataforma anitzeko eta fullstack software-garapenean nire ezagutzak gehienez zabaltzea.",
            "🏡 Ipar Europako (Danimarka, Norvegia, Alemania, Irlanda), Ipar Amerikako (AEB edo Kanada) edo Asiako (Japonia edo Hego Korea) herrialdeetan bizitzea."
        ],
    
        hobbiesTitle: "🎨 Kodeaz Harago",
        hobbiesIntro: "Kodeatzen edo zibersegurtasunari buruz ikasten ari ez naizenean, honako hauek gustatzen zaizkit:",
        hobbiesList: [
            "🎮 Bideojokoak jokatzea (Nire genero gogokoenak: Estrategia, Shooters, Beldurra, Biziraupena, Historikoak eta Souls).",
            "♟️ Mahai-jokoetan jolastea (Xakea, Risk, Seven Wonders Duels edo Carcassonne bezalakoak).",
            "📖 Munduaren historiari buruz ikastea, bereziki Espainiari buruz, eta egoera geopolitikoak aztertzea.",
            "📺 Pelikulak, telesailak eta animeak ikustea.",
            "🎵 Musika entzutea (Estopa, Fito eta Fitipaldis, Mägo de Oz, El Canto del Loco, Dani Martín eta Melendi)."
        ],
    
        curiositiesTitle: "🤔 Niri Buruzko Bitxikeriak",
        curiositiesList: [
            "👨‍💻 Nire lehen Python programa 16 urte nituenean idatzi nuen.",
            "🏅 Xake txapelketetan hainbat sari irabazi ditut Gibraltar inguruan.",
            "🌐 Historia eta geopolitika liluratzen naute, baita teknologiaren eraginean ere.",
            "🧠 Estrategiarekin lotutako guztia gustatzen zait; garuna garatzeko modu bikaina da.",
            "🥊 Kontaktuzko kiroletan interesa dut (Boxea, Kickboxing, Jiu-Jitsu), nahiz eta oraindik praktikatzerik izan ez dudan.",
            "⚽ Talde eta banakako kirolak praktikatzea gustatzen zait (Futbola, Tenisa, Padel-a, etab.).",
            "🎶 Abestea gustatzen zait eta etorkizunean musika-talde bat osatzea nahiko nuke."
        ],
    
        /* NI BURUZKO ATALAREN AMAIERA */

        /* GALDERA OHIKOEN ATALA (FAQ) */

        faqTitle: "❔ Ohiko Galderak",
        faq: [
            {
                question: "Zein da zure programazio-lengoaia gogokoena?",
                answer: "Gaur egun, asko gustatzen zait Dart erabiltzea Flutter framework-arekin plataforma anitzeko aplikazioak sortzeko."
            },
            {
                question: "Zeintzuk dira gehien erabiltzen dituzun sare sozialak?",
                answer: "Sare sozial asko erabiltzen ditut, baina gehien Instagramen nago aktibo."
            },
            {
                question: "Ba al duzu gidabaimenik?",
                answer: "Bai, B motako gidabaimena daukat. Azterketa teorikoa (0 errore) eta praktikoa (1 akats arin) lehenengoan gainditu nituen."
            },
            {
                question: "Zein da zure ingeles-maila?",
                answer: "Nire ustez, ingeles-maila ertaina dut (B1), nahiz eta ez dudan ziurtagiri ofizialik."
            },
            {
                question: "Android ala iOS?",
                answer: "Betidanik Android erabili dut eta iOS baino hobea dela uste dut erabiltzaileari ematen dion askatasunagatik. Android eta iOS aplikazioak bereizketarik gabe garatzen ditut."
            },
            {
                question: "Windows, Mac ala Linux?",
                answer: "Windows nahiago dut erosotasunagatik, baina Linux ere erabiltzen dut (adibidez, Kali Linux) helburu profesionaletarako. Ez dut Mac erabiltzen sistema irekiak nahiago ditudalako."
            },
            {
                question: "Nola jarri naiteke zurekin harremanetan?",
                answer: "Nire sare sozialen bidez edo email bat bidaliz harremanetan jarri zaitezke. Beti nago prest aukera eta lankidetza berrietarako!"
            }
        ],

        /* GAITASUN BIGUNEN ATALA (SOFT SKILLS) */

        softSkillsTitle: "Gaitasun Bigunak",
        softSkillsDescription: "Ezagutza teknikoak osatzeko, hainbat gaitasun pertsonal, metodiko eta intrapertsonal garatu ditut.",

        // Gaitasun Pertsonalak
        interpersonalSkills: "Gaitasun Pertsonalak",
        interpersonalList: [
            "Talde-lana",
            "Entzute aktiboa"
        ],

        // Gaitasun Metodikoak
        methodicalSkills: "Gaitasun Metodikoak",
        methodicalList: [
            "Antolakuntza",
            "Arazoak konpontzea",
            "Xehetasunekiko arreta"
        ],

        // Gaitasun Intrapertsonalak
        intrapersonalSkills: "Gaitasun Intrapertsonalak",
        intrapersonalList: [
            "Egokigarritasuna",
            "Auto-diziplina",
            "Proaktibitatea",
            "Etengabeko ikaskuntza"
        ],

        /* GAITASUN BIGUNEN ATALAREN AMAIERA */


        /* HEZKUNTZA ATALA */

        educationTitle: "Nire Prestakuntza",

        // Ikasketa Erregularrak
        formalStudies: "📚 Ikasketa Erregularrak",

        // Osasun Zientzietako Batxilergoa
        highSchoolTitle: "Osasun Zientzietako Batxilergoa",
        highSchoolCenter: "<b>Ikastetxea:</b> IES El Getares (Algeciras)",
        highSchoolDate: "<b>Data:</b> 2020ko Iraila - 2022ko Ekaina",
        highSchoolDescription: "<b>Deskribapena:</b> Etapa honetan oinarri zientifiko sendoak eskuratu nituen, hala nola biologia, kimika eta matematika. Gainera, analisi-gaitasunak eta arazoak konpontzeko ahalmen handia garatu nituen. Garai honetan garapenaren eta programazioaren mundua ezagutu nuen, eta horrek profesional moduan bide hori aukeratzera bultzatu ninduen.",
        skillsAcquiredText: "Eskaintzen Ditudan Gaitasunak:",
        highSchoolSkills: [
            "Egokigarritasuna",
            "Arazoak konpontzea",
            "Ingelesa (B1)",
            "Frantsesa (A2)"
        ],
        highSchoolIcons: [
            { src: "resources/Software_Icons/Python.png", alt: "Python", title: "Python" }
        ],

        // Plataforma Anitzeko Aplikazioen Garapenerako Goi Mailako Zikloa (DAM)
        damTitle: "Plataforma Anitzeko Aplikazioen Garapenerako CFGS (DAM)",
        damCenter: "<b>Ikastetxea:</b> IES Rafael Alberti (Cadiz)",
        damDate: "<b>Data:</b> 2022ko Iraila - 2024ko Ekaina",
        damDescription: "<b>Deskribapena:</b> Plataforma anitzeko aplikazioen diseinu, garapen eta mantentze-lanetan espezializatutako prestakuntza. Hizkuntza eta framework ezberdinetan programatzen ikasi nuen, batez ere Kotlin eta Flutter-ekin garapen mugikorrean nabarmentzen naiz.",
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

        // Ziurtagiriak
        certifications: "📜 Ziurtagiriak",

        // Cisco-ren Zibersegurtasunaren Sarrera Ziurtagiria
        cybersecTitle: "Zibersegurtasunaren Sarrera",
        cybersecCenter: "<b>Ikastetxea:</b> Cisco Networking Academy",
        cybersecDate: "<b>Data:</b> 2025eko Urtarrila",
        cybersecDescription: "<b>Deskribapena:</b> Zibersegurtasunaren oinarrizko kontzeptuetan ziurtagiria, mehatxu arruntenak aztertuz, sistemak babesten ikasiz eta azpiegitura digitalaren segurtasunaren garrantzia ulertuz.",
        cybersecSkills: [
            "Mehatxuen detekzioa"
        ],

        // Aintzatespenak
        awards: "🏆 Aintzatespenak",
        noAwards: "Oraindik ez dut aintzatespenik jaso, baina horretarako lanean jarraitzen dut! 📱",

        // Ekarpenak
        contributions: "🤝 Ekarpenak",
        noContributions: "Oraindik ez dut ekarpenik egin, baina etorkizunean komunitateari laguntzeko asmoa dut! 💻",

        // Ekitaldietan Parte-hartzea
        events: "📅 Ekitaldietan Parte-hartzea",
        noEvents: "Oraindik ez dut ekitaldietan parte hartu, baina laster egingo dut! 🎤",

        /* HEZKUNTZA ATALAREN AMAIERA */
    },

    /* FIN IDIOMA EUSKERA */



















    /* IDIOMA ITALIANO */

    it: {
        navbarTitle: "AdriDevSP",
        introText: "Ciao Mondo!, mi chiamo",
        jobTitle: "Sono uno <span class='highlight'>Sviluppatore Fullstack!</span>",
        motto: "Sviluppatore fullstack e mobile di giorno, analista di sicurezza informatica di notte.",
        downloadBtn: "Scarica CV",
        contactBtn: "&lt; Contatti /&gt;",
        popupTitle: "Email",
        projectsTitle: "Progetti",
        noProjects: "Non ci sono ancora progetti degni di nota 😔",

        /* SEZIONE COMPETENZE TECNOLOGICHE */

        techSkillsTitle: "Competenze Tecnologiche",
        techSkillsDescription: "Durante la mia formazione come Sviluppatore Software Fullstack, ho acquisito diverse competenze nello sviluppo software e ho maturato esperienza con i principali strumenti, che mi hanno permesso di creare applicazioni mobili e multipiattaforma scalabili, flessibili, robuste e completamente funzionali. Di seguito puoi vedere le competenze tecnologiche che mi hanno portato dove sono oggi:",
        frontend: "Frontend",
        backend: "Backend",
        programmingLanguages: "Linguaggi di Programmazione",
        databases: "Database",
        versionControl: "Controllo di Versione",
        frameworks: "Framework",
        otherTechnologies: "Altre Tecnologie",

        /* FINE SEZIONE COMPETENZE TECNOLOGICHE */


        /* SEZIONE ESPERIENZA LAVORATIVA */

        experienceTitle: "Esperienza Lavorativa",
        noExperience: "Non ho ancora esperienza lavorativa, ma nel frattempo continuo a sviluppare progetti personali :D",

        /* FINE SEZIONE ESPERIENZA LAVORATIVA */


        /* SEZIONE COMPETENZE HARDWARE */

        hardwareSkillsTitle: "Competenze Hardware",
        hardwareSkillsDescription: "Oltre alla mia esperienza nello sviluppo software e nella sicurezza informatica, ho conoscenze in ambito hardware, assemblaggio di dispositivi e molto altro.",
        hardwareMaintenance: "Manutenzione e Diagnosi",
        hardwareRepair: "Riparazione Hardware",
        virtualization: "Installazione e gestione di ambienti virtuali su dispositivi fisici",
        serverMaintenance: "Manutenzione e Diagnosi di Server",
        embeddedDevices: "Dispositivi Integrati",

        hardwareSpans: {
            maintenance: [
                "Assemblaggio di PC desktop",
                "Installazione e configurazione di vari sistemi operativi",
                "Rilevamento di errori hardware"
            ],
            repair: [
                "Riparazione di base di laptop (Ambiente Windows o Linux)",
                "Riparazione di base di dispositivi mobili (Android)",
                "Riparazione di base di tablet",
                "Riparazione di livello intermedio di computer desktop",
                "Ottimizzazione di base delle prestazioni del dispositivo"
            ],
            virtualization: [
                "Installazione di ambienti virtuali (VMware e VirtualBox)",
                "Creazione e gestione di macchine virtuali (VM)",
                "Configurazione dell'hardware virtuale (CPU, RAM, storage)"
            ],
            serverMaintenance: [
                "Installazione di sistemi operativi per server (Windows Server, Ubuntu Server, ecc.)",
                "Assemblaggio e installazione di base di server fisici",
                "Ottimizzazione di base dell'hardware nei server"
            ],
            embeddedDevices: "Arduino"
        },

        /* FINE SEZIONE COMPETENZE HARDWARE */


        /* SEZIONE SU DI ME */

        aboutMeTitle: "Su di Me",
        aboutMeIntro1: "Ciao! Sono <strong>Adrián Sabino</strong>, un appassionato <strong>Sviluppatore Fullstack & Mobile</strong> con un focus sulla creazione di applicazioni moderne, scalabili e funzionali. Inoltre, attualmente mi sto formando per diventare un <strong>Analista Junior di Sicurezza Informatica</strong>.",
        aboutMeIntro2: "La mia carriera unisce la creatività dello sviluppo software con il rigore dell'analisi della sicurezza informatica. Amo affrontare nuove sfide, imparare costantemente ed esplorare nuove tecnologie per migliorare le mie competenze.",

        ambitionsTitle: "🎯 Le Mie Ambizioni",
        ambitionsList: [
            "🛡️ Diventare un <strong>esperto di sicurezza informatica</strong>.",
            "🔒 Lavorare in multinazionali leader nel campo della sicurezza informatica (Telefónica, Google, Deloitte, Microsoft, IBM, Cisco, Oracle, ecc.).",
            "🖱️ Ampliare al massimo le mie conoscenze nello sviluppo software multipiattaforma e fullstack.",
            "🏡 Vivere nei paesi del nord Europa (Danimarca, Norvegia, Germania, Irlanda), in Nord America (USA o Canada) o in Asia (Giappone o Corea del Sud)."
        ],

        hobbiesTitle: "🎨 Oltre il Codice",
        hobbiesIntro: "Quando non sto programmando o studiando sicurezza informatica, mi piace:",
        hobbiesList: [
            "🎮 Giocare ai videogiochi (I miei generi preferiti sono: Strategia, Shooter, Horror, Survival, Storici e Souls).",
            "♟️ Giocare ai giochi da tavolo (Come Scacchi, Risk, Seven Wonders Duels o Carcassonne).",
            "📖 Imparare sulla storia mondiale, specialmente quella spagnola, e analizzare situazioni geopolitiche.",
            "📺 Guardare film, serie TV e anime.",
            "🎵 Ascoltare musica (Estopa, Fito y Fitipaldis, Mägo de Oz, El Canto del Loco, Dani Martín e Melendi)."
        ],

        curiositiesTitle: "🤔 Curiosità su di Me",
        curiositiesList: [
            "👨‍💻 Ho scritto il mio primo programma in Python a 16 anni.",
            "🏅 Ho vinto diversi premi in tornei di scacchi nel Campo de Gibraltar.",
            "🌐 Sono appassionato di storia e geopolitica e della loro influenza sulla tecnologia globale.",
            "🧠 Amo tutto ciò che riguarda la strategia, è un ottimo modo per sviluppare la mente.",
            "🥊 Mi interessano gli sport da contatto (Boxe, Kickboxing, Jiu-Jitsu), anche se non ho ancora avuto l'opportunità di praticarli.",
            "⚽ Mi piace praticare sport di squadra e individuali (Calcio, Tennis, Padel, ecc.).",
            "🎶 Mi piace cantare e mi piacerebbe formare una band musicale in futuro."
        ],

        /* FINE SEZIONE SU DI ME */

        /* SEZIONE FAQ (DOMANDE FREQUENTI) */

        faqTitle: "❔ Domande Frequenti",
        faq: [
            {
                question: "Qual è il tuo linguaggio di programmazione preferito?",
                answer: "Attualmente mi piace molto usare Dart con il framework Flutter per creare applicazioni multipiattaforma."
            },
            {
                question: "Qual è il social network su cui sei più attivo?",
                answer: "Utilizzo molti social network, ma sono più attivo su Instagram."
            },
            {
                question: "Hai la patente di guida?",
                answer: "Sì, ho la patente di guida di categoria B. Ho superato l'esame teorico (0 errori) e l'esame pratico (1 errore lieve) al primo tentativo."
            },
            {
                question: "Qual è il tuo livello di inglese?",
                answer: "Ritengo di avere un livello intermedio di inglese (B1), anche se non possiedo una certificazione ufficiale."
            },
            {
                question: "Android o iOS?",
                answer: "Ho sempre usato Android e lo considero superiore a iOS per la libertà che offre all'utente. Sviluppo applicazioni sia per Android che per iOS senza preferenze particolari."
            },
            {
                question: "Windows, Mac o Linux?",
                answer: "Preferisco Windows per la sua comodità, ma utilizzo anche Linux (come Kali Linux) per scopi professionali. Non utilizzo Mac perché preferisco i sistemi aperti."
            },
            {
                question: "Come posso contattarti?",
                answer: "Puoi contattarmi tramite i miei social network o inviandomi un'email. Sono sempre aperto a nuove opportunità e collaborazioni!"
            }
        ],

        /* SEZIONE COMPETENZE TRASVERSALI (SOFT SKILLS) */

        softSkillsTitle: "Competenze Trasversali",
        softSkillsDescription: "Ho sviluppato diverse competenze interpersonali, metodiche e intrapersonali che completano le mie conoscenze tecniche.",

        // Competenze Interpersonali
        interpersonalSkills: "Competenze Interpersonali",
        interpersonalList: [
            "Lavoro di squadra",
            "Ascolto attivo"
        ],

        // Competenze Metodiche
        methodicalSkills: "Competenze Metodiche",
        methodicalList: [
            "Organizzazione",
            "Risoluzione dei problemi",
            "Attenzione ai dettagli"
        ],

        // Competenze Intrapersonali
        intrapersonalSkills: "Competenze Intrapersonali",
        intrapersonalList: [
            "Adattabilità",
            "Autodisciplina",
            "Proattività",
            "Apprendimento continuo"
        ],

        /* FINE SEZIONE COMPETENZE TRASVERSALI */


        /* SEZIONE FORMAZIONE (EDUCATION) */

        educationTitle: "La Mia Formazione",

        // Studi Regolari
        formalStudies: "📚 Studi Regolari",

        // Diploma di Maturità in Scienze della Salute
        highSchoolTitle: "Diploma di Maturità in Scienze della Salute",
        highSchoolCenter: "<b>Istituto:</b> IES El Getares (Algeciras)",
        highSchoolDate: "<b>Data:</b> Settembre 2020 - Giugno 2022",
        highSchoolDescription: "<b>Descrizione:</b> In questa fase ho acquisito una solida formazione nelle scienze di base come biologia, chimica e matematica. Inoltre, ho sviluppato capacità analitiche e una grande abilità nella risoluzione dei problemi. Durante questo periodo, ho scoperto il mondo dello sviluppo e della programmazione, che mi ha motivato a intraprendere questo percorso a livello professionale.",
        skillsAcquiredText: "Competenze Acquisite:",
        highSchoolSkills: [
            "Adattabilità",
            "Risoluzione dei problemi",
            "Inglese (B1)",
            "Francese (A2)"
        ],
        highSchoolIcons: [
            { src: "resources/Software_Icons/Python.png", alt: "Python", title: "Python" }
        ],

        // Diploma di Tecnico Superiore in Sviluppo di Applicazioni Multipiattaforma (DAM)
        damTitle: "Diploma di Tecnico Superiore in Sviluppo di Applicazioni Multipiattaforma (DAM)",
        damCenter: "<b>Istituto:</b> IES Rafael Alberti (Cadice)",
        damDate: "<b>Data:</b> Settembre 2022 - Giugno 2024",
        damDescription: "<b>Descrizione:</b> Formazione specializzata nella progettazione, sviluppo e manutenzione di applicazioni multipiattaforma. Ho imparato a programmare in diversi linguaggi e framework, distinguendomi nello sviluppo mobile con Kotlin e Flutter.",
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

        // Certificazioni
        certifications: "📜 Certificazioni",

        // Certificazione Cisco: Introduzione alla Sicurezza Informatica
        cybersecTitle: "Introduzione alla Sicurezza Informatica",
        cybersecCenter: "<b>Istituto:</b> Cisco Networking Academy",
        cybersecDate: "<b>Data:</b> Gennaio 2025",
        cybersecDescription: "<b>Descrizione:</b> Certificazione sui fondamenti della sicurezza informatica, esplorando le minacce più comuni, come proteggere i sistemi e comprendere l'importanza della sicurezza nell'infrastruttura digitale.",
        cybersecSkills: [
            "Rilevamento delle Minacce"
        ],

        // Riconoscimenti
        awards: "🏆 Riconoscimenti",
        noAwards: "Non ho ancora ricevuto riconoscimenti, ma sto lavorando per ottenerli! 📱",

        // Contributi
        contributions: "🤝 Contributi",
        noContributions: "Non ho ancora realizzato contributi, ma ho intenzione di dare il mio apporto alla comunità in futuro! 💻",

        // Partecipazione ad Eventi
        events: "📅 Partecipazione ad Eventi",
        noEvents: "Non ho ancora partecipato ad eventi, ma sono entusiasta di farlo presto! 🎤",

        /* FINE SEZIONE FORMAZIONE */
    },

    /* FIN IDIOMA ITALIANO */

















    /* IDIOMA PORTUGUÉS */

    pt: {
        navbarTitle: "AdriDevSP",
        introText: "Olá Mundo!, meu nome é",
        jobTitle: "Sou um <span class='highlight'>Desenvolvedor Fullstack!</span>",
        motto: "Desenvolvedor fullstack & mobile durante o dia, analista de segurança cibernética à noite.",
        downloadBtn: "Baixar CV",
        contactBtn: "&lt; Contatos /&gt;",
        popupTitle: "E-mails",
        projectsTitle: "Projetos",
        noProjects: "Ainda não há projetos relevantes 😔",
    
        /* SEÇÃO DE HABILIDADES TECNOLÓGICAS */
    
        techSkillsTitle: "Habilidades Tecnológicas",
        techSkillsDescription: "Durante minha formação como Desenvolvedor de Software Fullstack, adquiri diversas habilidades em desenvolvimento de software, além de experiência com as principais ferramentas que me permitiram criar aplicações móveis e multiplataforma escaláveis, flexíveis, robustas e totalmente funcionais. A seguir, você pode ver as habilidades tecnológicas que me permitiram chegar onde estou atualmente:",
        frontend: "Frontend",
        backend: "Backend",
        programmingLanguages: "Linguagens de Programação",
        databases: "Bancos de Dados",
        versionControl: "Controle de Versão",
        frameworks: "Frameworks",
        otherTechnologies: "Outras Tecnologias",
    
        /* FIM SEÇÃO DE HABILIDADES TECNOLÓGICAS */
    
    
        /* SEÇÃO DE EXPERIÊNCIA */
    
        experienceTitle: "Experiência Profissional",
        noExperience: "Ainda não tenho experiência profissional, mas enquanto isso continuo desenvolvendo projetos pessoais :D",
    
        /* FIM SEÇÃO DE EXPERIÊNCIA */
    
    
        /* SEÇÃO DE HABILIDADES EM HARDWARE */
    
        hardwareSkillsTitle: "Habilidades em Hardware",
        hardwareSkillsDescription: "Além da minha experiência em desenvolvimento de software e segurança cibernética, possuo conhecimentos em hardware, montagem de equipamentos e muito mais.",
        hardwareMaintenance: "Manutenção e Diagnóstico",
        hardwareRepair: "Reparo de Hardware",
        virtualization: "Instalação e gerenciamento de ambientes virtuais em dispositivos físicos",
        serverMaintenance: "Manutenção e Diagnóstico de Servidores",
        embeddedDevices: "Dispositivos Embarcados",
    
        hardwareSpans: {
            maintenance: [
                "Montagem de PCs de mesa",
                "Instalação e configuração de diversos sistemas operacionais",
                "Detecção de erros de hardware"
            ],
            repair: [
                "Reparo básico de notebooks (Ambiente Windows ou Linux)",
                "Reparo básico de dispositivos móveis (Android)",
                "Reparo básico de tablets",
                "Reparo intermediário de computadores de mesa",
                "Otimização básica do desempenho do sistema"
            ],
            virtualization: [
                "Instalação de ambientes virtuais (VMware e VirtualBox)",
                "Criação e administração de máquinas virtuais (VMs)",
                "Configuração de hardware virtual (CPU, RAM, armazenamento)"
            ],
            serverMaintenance: [
                "Instalação de sistemas operacionais para servidores (Windows Server, Ubuntu Server, etc.)",
                "Montagem e instalação básica de servidores físicos",
                "Otimização básica de hardware em servidores"
            ],
            embeddedDevices: "Arduino"
        },
    
        /* FIM SEÇÃO DE HABILIDADES EM HARDWARE */
    
    
        /* SEÇÃO SOBRE MIM */
    
        aboutMeTitle: "Sobre Mim",
        aboutMeIntro1: "Olá! Sou <strong>Adrián Sabino</strong>, um apaixonado <strong>Desenvolvedor Fullstack & Mobile</strong> com foco na criação de aplicações modernas, escaláveis e funcionais. Além disso, atualmente estou me preparando para atuar como <strong>Analista Júnior de Segurança Cibernética</strong>.",
        aboutMeIntro2: "Minha trajetória combina a criatividade do desenvolvimento de software com o rigor da análise de segurança cibernética. Adoro enfrentar novos desafios, aprender constantemente e explorar novas tecnologias para aprimorar minhas habilidades.",
    
        // Ambições
        ambitionsTitle: "🎯 Minhas Ambições",
        ambitionsList: [
            "🛡️ Tornar-me um <strong>especialista em segurança cibernética</strong>.",
            "🔒 Trabalhar em multinacionais de destaque no setor de segurança cibernética (Telefónica, Google, Deloitte, Microsoft, IBM, Cisco, Oracle, etc.).",
            "🖱️ Ampliar ao máximo meus conhecimentos em Desenvolvimento de Software Fullstack e Multiplataforma.",
            "🏡 Viver em países do norte da Europa (Dinamarca, Noruega, Alemanha, Irlanda), na América do Norte (EUA ou Canadá) ou na Ásia (Japão ou Coreia do Sul)."
        ],
    
        // Hobbies
        hobbiesTitle: "🎨 Além do Código",
        hobbiesIntro: "Quando não estou programando ou estudando segurança cibernética, gosto de:",
        hobbiesList: [
            "🎮 Jogar videogames (Meus gêneros favoritos são: Estratégia, Shooters, Terror, Sobrevivência, Históricos e Souls).",
            "♟️ Jogar jogos de tabuleiro (Como Xadrez, Risk, Seven Wonders Duels ou Carcassonne).",
            "📖 Aprender sobre história mundial, especialmente a história da Espanha, e analisar situações geopolíticas.",
            "📺 Assistir a filmes, séries e animes.",
            "🎵 Ouvir música (Estopa, Fito y Fitipaldis, Mägo de Oz, El Canto del Loco, Dani Martín e Melendi)."
        ],
    
        // Curiosidades
        curiositiesTitle: "🤔 Curiosidades Sobre Mim",
        curiositiesList: [
            "👨‍💻 Escrevi meu primeiro programa em Python quando tinha 16 anos.",
            "🏅 Ganhei vários prêmios em torneios de xadrez no Campo de Gibraltar.",
            "🌐 Tenho paixão por história e geopolítica e sua influência na tecnologia global.",
            "🧠 Amo tudo relacionado a estratégia; é uma excelente forma de desenvolver a mente.",
            "🥊 Tenho interesse em esportes de contato (Boxe, Kickboxing, Jiu-Jitsu), embora ainda não tenha praticado.",
            "⚽ Gosto de praticar esportes em equipe e individuais (Futebol, Tênis, Padel, etc.).",
            "🎶 Gosto de cantar e adoraria formar uma banda musical no futuro."
        ],
    
        /* FIM SEÇÃO SOBRE MIM */

        /* SEÇÃO FAQ (PERGUNTAS FREQUENTES) */

        faqTitle: "❔ Perguntas Frequentes",
        faq: [
            {
                question: "Qual é a sua linguagem de programação favorita?",
                answer: "Atualmente, gosto muito de usar Dart com o framework Flutter para criar aplicações multiplataforma."
            },
            {
                question: "Em qual rede social você é mais ativo?",
                answer: "Uso várias redes sociais, mas sou mais ativo no Instagram."
            },
            {
                question: "Você tem carteira de motorista?",
                answer: "Sim, tenho a carteira de motorista categoria B. Passei no exame teórico (0 erros) e no exame prático (1 erro leve) na primeira tentativa."
            },
            {
                question: "Qual é o seu nível de inglês?",
                answer: "Considero que tenho um nível intermediário de inglês (B1), embora não possua uma certificação oficial."
            },
            {
                question: "Android ou iOS?",
                answer: "Sempre usei Android e considero-o superior ao iOS por oferecer mais liberdade ao usuário. Desenvolvo aplicações tanto para Android quanto para iOS sem distinção."
            },
            {
                question: "Windows, Mac ou Linux?",
                answer: "Prefiro Windows pela praticidade, mas também utilizo Linux (como o Kali Linux) para fins profissionais. Não uso Mac por preferir sistemas abertos."
            },
            {
                question: "Como posso entrar em contato com você?",
                answer: "Você pode me contatar através das minhas redes sociais ou enviando um e-mail. Estou sempre aberto a novas oportunidades e colaborações!"
            }
        ],

        /* SEÇÃO DE HABILIDADES INTERPESSOAIS (SOFT SKILLS) */

        softSkillsTitle: "Habilidades Interpessoais",
        softSkillsDescription: "Desenvolvi diversas habilidades interpessoais, metodológicas e intrapessoais que complementam meus conhecimentos técnicos.",

        // Habilidades Interpessoais
        interpersonalSkills: "Habilidades Interpessoais",
        interpersonalList: [
            "Trabalho em equipe",
            "Escuta ativa"
        ],

        // Habilidades Metodológicas
        methodicalSkills: "Habilidades Metodológicas",
        methodicalList: [
            "Organização",
            "Resolução de problemas",
            "Atenção aos detalhes"
        ],

        // Habilidades Intrapessoais
        intrapersonalSkills: "Habilidades Intrapessoais",
        intrapersonalList: [
            "Adaptabilidade",
            "Autodisciplina",
            "Proatividade",
            "Aprendizado contínuo"
        ],

        /* FIM SEÇÃO DE HABILIDADES INTERPESSOAIS */


        /* SEÇÃO DE FORMAÇÃO (EDUCAÇÃO) */

        educationTitle: "Minha Formação",

        // Estudos Regulares
        formalStudies: "📚 Estudos Regulares",

        // Ensino Médio em Ciências da Saúde
        highSchoolTitle: "Ensino Médio em Ciências da Saúde",
        highSchoolCenter: "<b>Escola:</b> IES El Getares (Algeciras)",
        highSchoolDate: "<b>Data:</b> Setembro de 2020 - Junho de 2022",
        highSchoolDescription: "<b>Descrição:</b> Durante esse período, adquiri uma formação sólida em ciências básicas como biologia, química e matemática. Também desenvolvi habilidades analíticas e uma grande capacidade de resolução de problemas. Foi durante essa etapa que descobri o mundo do desenvolvimento e da programação, o que me motivou a seguir essa carreira profissionalmente.",
        skillsAcquiredText: "Habilidades Adquiridas:",
        highSchoolSkills: [
            "Adaptabilidade",
            "Resolução de problemas",
            "Inglês (B1)",
            "Francês (A2)"
        ],
        highSchoolIcons: [
            { src: "resources/Software_Icons/Python.png", alt: "Python", title: "Python" }
        ],

        // Curso Técnico em Desenvolvimento de Aplicações Multiplataforma (DAM)
        damTitle: "Curso Técnico em Desenvolvimento de Aplicações Multiplataforma (DAM)",
        damCenter: "<b>Escola:</b> IES Rafael Alberti (Cádiz)",
        damDate: "<b>Data:</b> Setembro de 2022 - Junho de 2024",
        damDescription: "<b>Descrição:</b> Formação especializada no design, desenvolvimento e manutenção de aplicações multiplataforma. Aprendi a programar em diversas linguagens e frameworks, destacando-me no desenvolvimento móvel com Kotlin e Flutter.",
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

        // Certificações
        certifications: "📜 Certificações",

        // Certificação Cisco: Introdução à Segurança Cibernética
        cybersecTitle: "Introdução à Segurança Cibernética",
        cybersecCenter: "<b>Instituição:</b> Cisco Networking Academy",
        cybersecDate: "<b>Data:</b> Janeiro de 2025",
        cybersecDescription: "<b>Descrição:</b> Certificação nos fundamentos da segurança cibernética, abordando as ameaças mais comuns, como proteger sistemas e a importância da segurança na infraestrutura digital.",
        cybersecSkills: [
            "Detecção de Ameaças"
        ],

        // Reconhecimentos
        awards: "🏆 Reconhecimentos",
        noAwards: "Ainda não recebi reconhecimentos, mas estou trabalhando para conquistá-los! 📱",

        // Contribuições
        contributions: "🤝 Contribuições",
        noContributions: "Ainda não realizei contribuições, mas planejo colaborar com a comunidade no futuro! 💻",

        // Participação em Eventos
        events: "📅 Participação em Eventos",
        noEvents: "Ainda não participei de eventos, mas estou ansioso para fazê-lo em breve! 🎤",

        /* FIM SEÇÃO DE FORMAÇÃO */
    },

    /* FIN IDIOMA PORTUGUÉS */
















    /* IDIOMA NORUEGO */

    no: {
        navbarTitle: "AdriDevSP",
        introText: "Hei Verden!, jeg heter",
        jobTitle: "Jeg er en <span class='highlight'>Fullstack-utvikler!</span>",
        motto: "Fullstack- og mobilutvikler på dagtid, cybersikkerhetsanalytiker på kveldstid.",
        downloadBtn: "Last ned CV",
        contactBtn: "&lt; Kontakt /&gt;",
        popupTitle: "E-poster",
        projectsTitle: "Prosjekter",
        noProjects: "Ingen bemerkelsesverdige prosjekter ennå 😔",

        /* TEKNOLOGISKE FERDIGHETER-SEKSJON */

        techSkillsTitle: "Teknologiske Ferdigheter",
        techSkillsDescription: "Gjennom min utdanning som Fullstack-utvikler har jeg opparbeidet meg ulike ferdigheter innen programvareutvikling, samt erfaring med de viktigste verktøyene som har gjort det mulig å lage skalerbare, fleksible, robuste og fullt funksjonelle mobil- og tverrplattformapplikasjoner. Nedenfor kan du se de teknologiske ferdighetene som har hjulpet meg å komme dit jeg er i dag:",
        frontend: "Frontend",
        backend: "Backend",
        programmingLanguages: "Programmeringsspråk",
        databases: "Databaser",
        versionControl: "Versjonskontroll",
        frameworks: "Rammeverk",
        otherTechnologies: "Andre Teknologier",

        /* SLUTT PÅ TEKNOLOGISKE FERDIGHETER-SEKSJON */


        /* ARBEIDSERFARING-SEKSJON */

        experienceTitle: "Arbeidserfaring",
        noExperience: "Jeg har ingen arbeidserfaring ennå, men i mellomtiden utvikler jeg personlige prosjekter :D",

        /* SLUTT PÅ ARBEIDSERFARING-SEKSJON */


        /* MASKINVAREFERDIGHETER-SEKSJON */

        hardwareSkillsTitle: "Maskinvareferdigheter",
        hardwareSkillsDescription: "I tillegg til min erfaring med programvareutvikling og cybersikkerhet, har jeg kunnskap om maskinvare, montering av systemer og mye mer.",
        hardwareMaintenance: "Vedlikehold og Diagnostikk",
        hardwareRepair: "Maskinvare-reparasjon",
        virtualization: "Installasjon og administrasjon av virtuelle miljøer på fysiske enheter",
        serverMaintenance: "Vedlikehold og Diagnostikk av Servere",
        embeddedDevices: "Innebygde Enheter",

        hardwareSpans: {
            maintenance: [
                "Montering av stasjonære PC-er",
                "Installasjon og konfigurasjon av ulike operativsystemer",
                "Feilsøking av maskinvare"
            ],
            repair: [
                "Grunnleggende reparasjon av bærbare datamaskiner (Windows eller Linux-miljøer)",
                "Grunnleggende reparasjon av mobile enheter (Android)",
                "Grunnleggende reparasjon av nettbrett",
                "Middels reparasjon av stasjonære datamaskiner",
                "Grunnleggende ytelsesoptimalisering av systemet"
            ],
            virtualization: [
                "Installasjon av virtuelle miljøer (VMware og VirtualBox)",
                "Opprettelse og administrasjon av virtuelle maskiner (VMs)",
                "Konfigurasjon av virtuell maskinvare (CPU, RAM, lagring)"
            ],
            serverMaintenance: [
                "Installasjon av operativsystemer for servere (Windows Server, Ubuntu Server, etc.)",
                "Grunnleggende montering og installasjon av fysiske servere",
                "Grunnleggende maskinvareoptimalisering på servere"
            ],
            embeddedDevices: "Arduino"
        },

        /* SLUTT PÅ MASKINVAREFERDIGHETER-SEKSJON */


        /* OM MEG-SEKSJON */

        aboutMeTitle: "Om Meg",
        aboutMeIntro1: "Hei! Jeg heter <strong>Adrián Sabino</strong>, en lidenskapelig <strong>Fullstack- og Mobilutvikler</strong> med fokus på å lage moderne, skalerbare og funksjonelle applikasjoner. I tillegg utdanner jeg meg for tiden til å bli en <strong>Junior Cybersikkerhetsanalytiker</strong>.",
        aboutMeIntro2: "Min bakgrunn kombinerer kreativiteten innen programvareutvikling med nøyaktigheten til cybersikkerhetsanalyse. Jeg elsker å møte nye utfordringer, lære kontinuerlig og utforske ny teknologi for å forbedre mine ferdigheter.",

        // Ambisjoner
        ambitionsTitle: "🎯 Mine Ambisjoner",
        ambitionsList: [
            "🛡️ Bli en <strong>ekspert innen cybersikkerhet</strong>.",
            "🔒 Jobbe i ledende multinasjonale selskaper innen cybersikkerhet (Telefónica, Google, Deloitte, Microsoft, IBM, Cisco, Oracle, etc.).",
            "🖱️ Utvide min kunnskap innen tverrplattform- og fullstack-utvikling til det maksimale.",
            "🏡 Bo i landene i Nord-Europa (Danmark, Norge, Tyskland, Irland), Nord-Amerika (USA eller Canada) eller Asia (Japan eller Sør-Korea)."
        ],

        // Hobbyer
        hobbiesTitle: "🎨 Utenfor Koding",
        hobbiesIntro: "Når jeg ikke koder eller lærer om cybersikkerhet, liker jeg å:",
        hobbiesList: [
            "🎮 Spille videospill (Mine favorittsjangre er: Strategi, Skytespill, Skrekk, Overlevelse, Historisk og Souls-lignende spill).",
            "♟️ Spille brettspill (Som Sjakk, Risk, Seven Wonders Duels eller Carcassonne).",
            "📖 Lære om verdenshistorie, spesielt spansk historie, og analysere geopolitiske situasjoner.",
            "📺 Se filmer, TV-serier og anime.",
            "🎵 Lytte til musikk (Estopa, Fito y Fitipaldis, Mägo de Oz, El Canto del Loco, Dani Martín og Melendi)."
        ],

        // Kuriositeter
        curiositiesTitle: "🤔 Kuriositeter om Meg",
        curiositiesList: [
            "👨‍💻 Jeg skrev mitt første Python-program da jeg var 16 år gammel.",
            "🏅 Jeg har vunnet flere priser i sjakkturneringer i Campo de Gibraltar.",
            "🌐 Jeg er fascinert av historie og geopolitikk, og hvordan det påvirker global teknologi.",
            "🧠 Jeg elsker alt som har med strategi å gjøre; det er en utmerket måte å trene hjernen på.",
            "🥊 Jeg er interessert i kampsport (Boksing, Kickboksing, Jiu-Jitsu), selv om jeg ikke har hatt muligheten til å praktisere dem.",
            "⚽ Jeg liker å drive med både lagidrett og individuelle idretter (Fotball, Tennis, Padel, osv.).",
            "🎶 Jeg liker å synge, og jeg vil gjerne starte et band i fremtiden."
        ],

        /* SLUTT PÅ OM MEG-SEKSJON */
        /* FAQ-SEKSJON (OFTE STILTE SPØRSMÅL) */

        faqTitle: "❔ Ofte Stilte Spørsmål",
        faq: [
            {
                question: "Hva er ditt favorittprogrammeringsspråk?",
                answer: "For øyeblikket liker jeg veldig godt å bruke Dart sammen med Flutter-rammeverket for å lage tverrplattformapplikasjoner."
            },
            {
                question: "Hvilket sosialt nettverk er du mest aktiv på?",
                answer: "Jeg bruker flere sosiale nettverk, men jeg er mest aktiv på Instagram."
            },
            {
                question: "Har du førerkort?",
                answer: "Ja, jeg har førerkort klasse B. Jeg besto både teoriprøven (0 feil) og den praktiske prøven (1 liten feil) på første forsøk."
            },
            {
                question: "Hva er ditt engelsknivå?",
                answer: "Jeg anser meg selv for å ha et middels engelsknivå (B1), selv om jeg ikke har en offisiell sertifisering."
            },
            {
                question: "Android eller iOS?",
                answer: "Jeg har alltid brukt Android og mener det er bedre enn iOS på grunn av friheten det gir brukeren. Jeg utvikler applikasjoner både for Android og iOS uten forskjell."
            },
            {
                question: "Windows, Mac eller Linux?",
                answer: "Jeg foretrekker Windows for dets brukervennlighet, men jeg bruker også Linux (som Kali Linux) til profesjonelle formål. Jeg bruker ikke Mac fordi jeg foretrekker åpne systemer."
            },
            {
                question: "Hvordan kan jeg kontakte deg?",
                answer: "Du kan kontakte meg via mine sosiale medier eller sende meg en e-post. Jeg er alltid åpen for nye muligheter og samarbeid!"
            }
        ],
    
        /* MYKE FERDIGHETER-SEKSJON (SOFT SKILLS) */
    
        softSkillsTitle: "Myke Ferdigheter",
        softSkillsDescription: "Jeg har utviklet ulike mellommenneskelige, metodiske og intrapersonlige ferdigheter som kompletterer mine tekniske kunnskaper.",
    
        // Mellommenneskelige Ferdigheter
        interpersonalSkills: "Mellommenneskelige Ferdigheter",
        interpersonalList: [
            "Teamarbeid",
            "Aktiv lytting"
        ],
    
        // Metodiske Ferdigheter
        methodicalSkills: "Metodiske Ferdigheter",
        methodicalList: [
            "Organisering",
            "Problemløsning",
            "Oppmerksomhet på detaljer"
        ],
    
        // Intrapersonlige Ferdigheter
        intrapersonalSkills: "Intrapersonlige Ferdigheter",
        intrapersonalList: [
            "Tilpasningsevne",
            "Selvdisiplin",
            "Proaktivitet",
            "Kontinuerlig læring"
        ],
    
        /* SLUTT PÅ MYKE FERDIGHETER-SEKSJON */
    
    
        /* UTDANNING-SEKSJON */
    
        educationTitle: "Min Utdanning",
    
        // Formell Utdanning
        formalStudies: "📚 Formell Utdanning",
    
        // Videregående Skole i Helsefag
        highSchoolTitle: "Videregående Skole i Helsefag",
        highSchoolCenter: "<b>Skole:</b> IES El Getares (Algeciras)",
        highSchoolDate: "<b>Dato:</b> September 2020 - Juni 2022",
        highSchoolDescription: "<b>Beskrivelse:</b> I løpet av denne perioden oppnådde jeg en solid forståelse av grunnleggende vitenskapelige fag som biologi, kjemi og matematikk. Jeg utviklet også analytiske ferdigheter og en sterk evne til å løse problemer. Det var i denne perioden jeg oppdaget verdenen av utvikling og programmering, noe som motiverte meg til å velge denne veien profesjonelt.",
        skillsAcquiredText: "Tilegnede Ferdigheter:",
        highSchoolSkills: [
            "Tilpasningsevne",
            "Problemløsning",
            "Engelsk (B1)",
            "Fransk (A2)"
        ],
        highSchoolIcons: [
            { src: "resources/Software_Icons/Python.png", alt: "Python", title: "Python" }
        ],
    
        // Yrkesfaglig Utdanning i Tverrplattform-Applikasjonsutvikling (DAM)
        damTitle: "Yrkesfaglig Utdanning i Tverrplattform-Applikasjonsutvikling (DAM)",
        damCenter: "<b>Skole:</b> IES Rafael Alberti (Cádiz)",
        damDate: "<b>Dato:</b> September 2022 - Juni 2024",
        damDescription: "<b>Beskrivelse:</b> En spesialisert utdanning innen design, utvikling og vedlikehold av tverrplattform-applikasjoner. Jeg lærte å programmere i ulike språk og rammeverk, med spesiell ekspertise innen mobilutvikling med Kotlin og Flutter.",
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
    
        // Sertifiseringer
        certifications: "📜 Sertifiseringer",
    
        // Cisco Sertifisering: Introduksjon til Cybersikkerhet
        cybersecTitle: "Introduksjon til Cybersikkerhet",
        cybersecCenter: "<b>Institusjon:</b> Cisco Networking Academy",
        cybersecDate: "<b>Dato:</b> Januar 2025",
        cybersecDescription: "<b>Beskrivelse:</b> En sertifisering som dekker grunnleggende prinsipper for cybersikkerhet, inkludert de vanligste truslene, hvordan beskytte systemer, og forstå betydningen av sikkerhet i digital infrastruktur.",
        cybersecSkills: [
            "Trusseloppdagelse"
        ],
    
        // Utmerkelser
        awards: "🏆 Utmerkelser",
        noAwards: "Jeg har ikke mottatt noen utmerkelser ennå, men jeg jobber hardt for å oppnå dem! 📱",
    
        // Bidrag
        contributions: "🤝 Bidrag",
        noContributions: "Jeg har ennå ikke bidratt til fellesskapet, men jeg planlegger å gjøre det i fremtiden! 💻",
    
        // Deltakelse i Arrangementer
        events: "📅 Deltakelse i Arrangementer",
        noEvents: "Jeg har ikke deltatt i noen arrangementer ennå, men jeg ser frem til å gjøre det snart! 🎤",
    
        /* SLUTT PÅ UTDANNING-SEKSJON */
    },

    /* FIN DEL IDIOMA NORUEGO */














    /* IDIOMA GRIEGO */

    el: {
        navbarTitle: "AdriDevSP",
        introText: "Γεια σου Κόσμε!, με λένε",
        jobTitle: "Είμαι ένας <span class='highlight'>Fullstack Προγραμματιστής!</span>",
        motto: "Fullstack & mobile προγραμματιστής την ημέρα, αναλυτής κυβερνοασφάλειας τη νύχτα.",
        downloadBtn: "Λήψη Βιογραφικού",
        contactBtn: "&lt; Επικοινωνία /&gt;",
        popupTitle: "Email",
        projectsTitle: "Έργα",
        noProjects: "Δεν υπάρχουν ακόμα αξιόλογα έργα 😔",

        /* ΕΝΟΤΗΤΑ ΤΕΧΝΟΛΟΓΙΚΩΝ ΔΕΞΙΟΤΗΤΩΝ */

        techSkillsTitle: "Τεχνολογικές Δεξιότητες",
        techSkillsDescription: "Κατά τη διάρκεια της εκπαίδευσής μου ως Fullstack προγραμματιστής λογισμικού, έχω αποκτήσει διάφορες δεξιότητες στον προγραμματισμό και έχω αποκτήσει εμπειρία με τα κύρια εργαλεία, τα οποία μου επέτρεψαν να δημιουργήσω κλιμακούμενες, ευέλικτες, ισχυρές και πλήρως λειτουργικές εφαρμογές για κινητά και πολλαπλές πλατφόρμες. Παρακάτω μπορείτε να δείτε τις τεχνολογικές δεξιότητες που με βοήθησαν να φτάσω εκεί που είμαι σήμερα:",
        frontend: "Frontend",
        backend: "Backend",
        programmingLanguages: "Γλώσσες Προγραμματισμού",
        databases: "Βάσεις Δεδομένων",
        versionControl: "Έλεγχος Έκδοσης",
        frameworks: "Frameworks",
        otherTechnologies: "Άλλες Τεχνολογίες",

        /* ΤΕΛΟΣ ΕΝΟΤΗΤΑΣ ΤΕΧΝΟΛΟΓΙΚΩΝ ΔΕΞΙΟΤΗΤΩΝ */


        /* ΕΝΟΤΗΤΑ ΕΠΑΓΓΕΛΜΑΤΙΚΗΣ ΕΜΠΕΙΡΙΑΣ */

        experienceTitle: "Επαγγελματική Εμπειρία",
        noExperience: "Δεν έχω ακόμη επαγγελματική εμπειρία, αλλά συνεχίζω να αναπτύσσω προσωπικά έργα :D",

        /* ΤΕΛΟΣ ΕΝΟΤΗΤΑΣ ΕΠΑΓΓΕΛΜΑΤΙΚΗΣ ΕΜΠΕΙΡΙΑΣ */


        /* ΕΝΟΤΗΤΑ ΔΕΞΙΟΤΗΤΩΝ ΥΛΙΚΟΥ (HARDWARE) */

        hardwareSkillsTitle: "Δεξιότητες Υλικού",
        hardwareSkillsDescription: "Εκτός από την εμπειρία μου στον προγραμματισμό και την κυβερνοασφάλεια, έχω γνώσεις στο υλικό, στη συναρμολόγηση συσκευών και πολλά άλλα.",
        hardwareMaintenance: "Συντήρηση και Διάγνωση",
        hardwareRepair: "Επισκευή Υλικού",
        virtualization: "Εγκατάσταση και διαχείριση εικονικών περιβαλλόντων σε φυσικές συσκευές",
        serverMaintenance: "Συντήρηση και Διάγνωση Διακομιστών",
        embeddedDevices: "Ενσωματωμένες Συσκευές",

        hardwareSpans: {
            maintenance: [
                "Συναρμολόγηση επιτραπέζιων υπολογιστών",
                "Εγκατάσταση και διαμόρφωση διαφόρων λειτουργικών συστημάτων",
                "Διάγνωση σφαλμάτων υλικού"
            ],
            repair: [
                "Βασική επισκευή φορητών υπολογιστών (Windows ή Linux περιβάλλοντα)",
                "Βασική επισκευή κινητών συσκευών (Android)",
                "Βασική επισκευή tablet",
                "Ενδιάμεση επισκευή επιτραπέζιων υπολογιστών",
                "Βασική βελτιστοποίηση απόδοσης συστήματος"
            ],
            virtualization: [
                "Εγκατάσταση εικονικών περιβαλλόντων (VMware και VirtualBox)",
                "Δημιουργία και διαχείριση εικονικών μηχανών (VMs)",
                "Διαμόρφωση εικονικού υλικού (CPU, RAM, αποθήκευση)"
            ],
            serverMaintenance: [
                "Εγκατάσταση λειτουργικών συστημάτων για διακομιστές (Windows Server, Ubuntu Server, κ.λπ.)",
                "Βασική συναρμολόγηση και εγκατάσταση φυσικών διακομιστών",
                "Βασική βελτιστοποίηση υλικού σε διακομιστές"
            ],
            embeddedDevices: "Arduino"
        },

        /* ΤΕΛΟΣ ΕΝΟΤΗΤΑΣ ΔΕΞΙΟΤΗΤΩΝ ΥΛΙΚΟΥ (HARDWARE) */


        /* ΕΝΟΤΗΤΑ ΣΧΕΤΙΚΑ ΜΕ ΕΜΕΝΑ */

        aboutMeTitle: "Σχετικά με Εμένα",
        aboutMeIntro1: "Γεια σας! Είμαι ο <strong>Adrián Sabino</strong>, ένας παθιασμένος <strong>Fullstack & Mobile Προγραμματιστής</strong> με έμφαση στη δημιουργία σύγχρονων, επεκτάσιμων και λειτουργικών εφαρμογών. Επιπλέον, αυτή τη στιγμή εκπαιδεύομαι για να γίνω <strong>Junior Αναλυτής Κυβερνοασφάλειας</strong>.",
        aboutMeIntro2: "Η πορεία μου συνδυάζει τη δημιουργικότητα στην ανάπτυξη λογισμικού με τη μεθοδικότητα της ανάλυσης κυβερνοασφάλειας. Μου αρέσει να αντιμετωπίζω νέες προκλήσεις, να μαθαίνω διαρκώς και να εξερευνώ νέες τεχνολογίες για να βελτιώνω τις δεξιότητές μου.",

        // Φιλοδοξίες
        ambitionsTitle: "🎯 Οι Φιλοδοξίες Μου",
        ambitionsList: [
            "🛡️ Να γίνω <strong>ειδικός στην κυβερνοασφάλεια</strong>.",
            "🔒 Να εργαστώ σε κορυφαίες πολυεθνικές εταιρείες στον τομέα της κυβερνοασφάλειας (Telefónica, Google, Deloitte, Microsoft, IBM, Cisco, Oracle, κ.λπ.).",
            "🖱️ Να διευρύνω τις γνώσεις μου στην ανάπτυξη λογισμικού Fullstack και πολλαπλών πλατφορμών.",
            "🏡 Να ζήσω σε χώρες της Βόρειας Ευρώπης (Δανία, Νορβηγία, Γερμανία, Ιρλανδία), της Βόρειας Αμερικής (ΗΠΑ ή Καναδάς) ή της Ασίας (Ιαπωνία ή Νότια Κορέα)."
        ],

        // Χόμπι
        hobbiesTitle: "🎨 Πέρα από τον Κώδικα",
        hobbiesIntro: "Όταν δεν προγραμματίζω ή δεν μελετώ κυβερνοασφάλεια, μου αρέσει να:",
        hobbiesList: [
            "🎮 Παίζω βιντεοπαιχνίδια (Αγαπημένα είδη: Στρατηγική, Shooter, Τρόμου, Επιβίωσης, Ιστορικά και Souls).",
            "♟️ Παίζω επιτραπέζια παιχνίδια (Όπως Σκάκι, Risk, Seven Wonders Duels ή Carcassonne).",
            "📖 Να μαθαίνω για την παγκόσμια ιστορία, ειδικά για την Ισπανία, και να αναλύω γεωπολιτικές καταστάσεις.",
            "📺 Να παρακολουθώ ταινίες, σειρές και anime.",
            "🎵 Να ακούω μουσική (Estopa, Fito y Fitipaldis, Mägo de Oz, El Canto del Loco, Dani Martín και Melendi)."
        ],

        /* ΤΕΛΟΣ ΕΝΟΤΗΤΑΣ ΣΧΕΤΙΚΑ ΜΕ ΕΜΕΝΑ */

        /* ΕΝΟΤΗΤΑ ΠΕΡΙΕΡΓΕΙΩΝ (CURIOSITIES) */

        curiositiesTitle: "🤔 Περίεργα Γεγονότα για Εμένα",
        curiositiesList: [
            "👨‍💻 Έγραψα το πρώτο μου πρόγραμμα σε Python όταν ήμουν 16 ετών.",
            "🏅 Έχω κερδίσει πολλά βραβεία σε τουρνουά σκακιού στην περιοχή του Κάμπο ντε Γιβραλτάρ.",
            "🌐 Με συναρπάζει η ιστορία και η γεωπολιτική, καθώς και η επίδρασή τους στην παγκόσμια τεχνολογία.",
            "🧠 Λατρεύω οτιδήποτε σχετίζεται με τη στρατηγική· είναι ένας εξαιρετικός τρόπος να ακονίσω το μυαλό μου.",
            "🥊 Ενδιαφέρομαι για πολεμικές τέχνες (Πυγμαχία, Kickboxing, Jiu-Jitsu), αν και δεν έχω καταφέρει ακόμα να τις εξασκήσω.",
            "⚽ Μου αρέσει να παίζω τόσο ομαδικά όσο και ατομικά αθλήματα (Ποδόσφαιρο, Τένις, Padel κ.λπ.).",
            "🎶 Μου αρέσει να τραγουδάω και θα ήθελα να σχηματίσω ένα μουσικό συγκρότημα στο μέλλον."
        ],

        /* ΤΕΛΟΣ ΕΝΟΤΗΤΑΣ ΠΕΡΙΕΡΓΕΙΩΝ */


        /* ΕΝΟΤΗΤΑ ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ (FAQ) */

        faqTitle: "❔ Συχνές Ερωτήσεις",
        faq: [
            {
                question: "Ποια είναι η αγαπημένη σου γλώσσα προγραμματισμού;",
                answer: "Αυτή τη στιγμή, μου αρέσει πολύ να χρησιμοποιώ τη Dart με το framework Flutter για τη δημιουργία εφαρμογών πολλαπλών πλατφορμών."
            },
            {
                question: "Σε ποιο κοινωνικό δίκτυο είσαι πιο ενεργός;",
                answer: "Χρησιμοποιώ πολλά κοινωνικά δίκτυα, αλλά είμαι πιο ενεργός στο Instagram."
            },
            {
                question: "Έχεις δίπλωμα οδήγησης;",
                answer: "Ναι, έχω δίπλωμα οδήγησης κατηγορίας Β. Πέρασα τόσο τη θεωρητική (0 λάθη) όσο και την πρακτική εξέταση (1 μικρό λάθος) με την πρώτη προσπάθεια."
            },
            {
                question: "Ποιο είναι το επίπεδο αγγλικών σου;",
                answer: "Θεωρώ ότι έχω μεσαίο επίπεδο αγγλικών (Β1), αν και δεν έχω επίσημη πιστοποίηση."
            },
            {
                question: "Android ή iOS;",
                answer: "Πάντα χρησιμοποιούσα Android και το θεωρώ ανώτερο από το iOS λόγω της ελευθερίας που προσφέρει στον χρήστη. Αναπτύσσω εφαρμογές τόσο για Android όσο και για iOS χωρίς προτίμηση."
            },
            {
                question: "Windows, Mac ή Linux;",
                answer: "Προτιμώ τα Windows για την ευκολία χρήσης τους, αλλά χρησιμοποιώ και Linux (όπως το Kali Linux) για επαγγελματικούς σκοπούς. Δεν χρησιμοποιώ Mac επειδή προτιμώ τα ανοιχτά συστήματα."
            },
            {
                question: "Πώς μπορώ να επικοινωνήσω μαζί σου;",
                answer: "Μπορείς να επικοινωνήσεις μαζί μου μέσω των κοινωνικών δικτύων μου ή στέλνοντάς μου ένα email. Είμαι πάντα ανοιχτός σε νέες ευκαιρίες και συνεργασίες!"
            }
        ],

        /* ΕΝΟΤΗΤΑ ΗΠΙΕΣ ΔΕΞΙΟΤΗΤΕΣ (SOFT SKILLS) */

        softSkillsTitle: "Ήπιες Δεξιότητες",
        softSkillsDescription: "Έχω αναπτύξει διάφορες διαπροσωπικές, μεθοδολογικές και ενδοπροσωπικές δεξιότητες που συμπληρώνουν τις τεχνικές μου γνώσεις.",

        // Διαπροσωπικές Δεξιότητες
        interpersonalSkills: "Διαπροσωπικές Δεξιότητες",
        interpersonalList: [
            "Ομαδική εργασία",
            "Ενεργητική ακρόαση"
        ],

        // Μεθοδολογικές Δεξιότητες
        methodicalSkills: "Μεθοδολογικές Δεξιότητες",
        methodicalList: [
            "Οργάνωση",
            "Επίλυση προβλημάτων",
            "Προσοχή στη λεπτομέρεια"
        ],

        // Ενδοπροσωπικές Δεξιότητες
        intrapersonalSkills: "Ενδοπροσωπικές Δεξιότητες",
        intrapersonalList: [
            "Προσαρμοστικότητα",
            "Αυτοπειθαρχία",
            "Πρωτοβουλία",
            "Διαρκής μάθηση"
        ],

        /* ΤΕΛΟΣ ΕΝΟΤΗΤΑΣ ΗΠΙΩΝ ΔΕΞΙΟΤΗΤΩΝ (SOFT SKILLS) */


        /* ΕΝΟΤΗΤΑ ΕΚΠΑΙΔΕΥΣΗΣ (EDUCATION) */

        educationTitle: "Η Εκπαίδευσή Μου",

        // Τυπικές Σπουδές
        formalStudies: "📚 Τυπικές Σπουδές",

        // Λύκειο Επιστημών Υγείας
        highSchoolTitle: "Λύκειο στις Επιστήμες Υγείας",
        highSchoolCenter: "<b>Σχολείο:</b> IES El Getares (Αλχεθίρας)",
        highSchoolDate: "<b>Ημερομηνία:</b> Σεπτέμβριος 2020 - Ιούνιος 2022",
        highSchoolDescription: "<b>Περιγραφή:</b> Σε αυτήν την περίοδο απέκτησα μια ισχυρή βάση στις βασικές επιστήμες, όπως η βιολογία, η χημεία και τα μαθηματικά. Επιπλέον, ανέπτυξα αναλυτικές δεξιότητες και μεγάλη ικανότητα επίλυσης προβλημάτων. Κατά τη διάρκεια αυτής της περιόδου ανακάλυψα τον κόσμο της ανάπτυξης λογισμικού και της προγραμματισμού, γεγονός που με ενέπνευσε να επιλέξω αυτόν τον τομέα επαγγελματικά.",
        skillsAcquiredText: "Δεξιότητες που Αποκτήθηκαν:",
        highSchoolSkills: [
            "Προσαρμοστικότητα",
            "Επίλυση προβλημάτων",
            "Αγγλικά (B1)",
            "Γαλλικά (A2)"
        ],
        highSchoolIcons: [
            { src: "resources/Software_Icons/Python.png", alt: "Python", title: "Python" }
        ],

        // Ανώτερος Τεχνικός στην Ανάπτυξη Εφαρμογών Πολλαπλών Πλατφορμών (DAM)
        damTitle: "Ανώτερος Τεχνικός στην Ανάπτυξη Εφαρμογών Πολλαπλών Πλατφορμών (DAM)",
        damCenter: "<b>Σχολείο:</b> IES Rafael Alberti (Κάντιθ)",
        damDate: "<b>Ημερομηνία:</b> Σεπτέμβριος 2022 - Ιούνιος 2024",
        damDescription: "<b>Περιγραφή:</b> Εξειδικευμένη εκπαίδευση στον σχεδιασμό, την ανάπτυξη και τη συντήρηση εφαρμογών πολλαπλών πλατφορμών. Έμαθα να προγραμματίζω σε διάφορες γλώσσες και frameworks, ξεχωρίζοντας στην ανάπτυξη κινητών εφαρμογών με Kotlin και Flutter.",
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

        // Πιστοποιήσεις
        certifications: "📜 Πιστοποιήσεις",

        // Πιστοποίηση Cisco: Εισαγωγή στην Κυβερνοασφάλεια
        cybersecTitle: "Εισαγωγή στην Κυβερνοασφάλεια",
        cybersecCenter: "<b>Ιδρυμα:</b> Cisco Networking Academy",
        cybersecDate: "<b>Ημερομηνία:</b> Ιανουάριος 2025",
        cybersecDescription: "<b>Περιγραφή:</b> Πιστοποίηση στα θεμέλια της κυβερνοασφάλειας, εξερευνώντας τις πιο κοινές απειλές, τον τρόπο προστασίας των συστημάτων και τη σημασία της ασφάλειας στις ψηφιακές υποδομές.",
        cybersecSkills: [
            "Εντοπισμός Απειλών"
        ],

        /* ΤΕΛΟΣ ΕΝΟΤΗΤΑΣ ΕΚΠΑΙΔΕΥΣΗΣ */

        /* ΤΜΗΜΑ ΒΡΑΒΕΙΩΝ, ΣΥΝΕΙΣΦΟΡΩΝ ΚΑΙ ΣΥΜΜΕΤΟΧΗΣ ΣΕ ΕΚΔΗΛΩΣΕΙΣ */

        // Βραβεία
        awards: "🏆 Βραβεία",
        noAwards: "Δεν έχω λάβει ακόμη βραβεία, αλλά συνεχίζω να εργάζομαι για να τα αποκτήσω! 📱",

        // Συνεισφορές
        contributions: "🤝 Συνεισφορές",
        noContributions: "Δεν έχω πραγματοποιήσει ακόμη συνεισφορές, αλλά σκοπεύω να συμβάλω στην κοινότητα στο μέλλον! 💻",

        // Συμμετοχή σε Εκδηλώσεις
        events: "📅 Συμμετοχή σε Εκδηλώσεις",
        noEvents: "Δεν έχω ακόμη συμμετάσχει σε εκδηλώσεις, αλλά θα χαρώ να το κάνω σύντομα! 🎤",

        /* ΤΕΛΟΣ ΤΜΗΜΑΤΟΣ */

    },

    /* FIN DEL IDIOMA GRIEGO */



















    /* IDIOMA JAPONES */

    ja: {
        navbarTitle: "AdriDevSP",
        introText: "こんにちは、世界！私は",
        jobTitle: "私は<span class='highlight'>フルスタック開発者</span>です！",
        motto: "昼はフルスタック＆モバイル開発者、夜はサイバーセキュリティアナリスト。",
        downloadBtn: "履歴書をダウンロード",
        contactBtn: "&lt; 連絡先 /&gt;",
        popupTitle: "メール",
        projectsTitle: "プロジェクト",
        noProjects: "まだ目立ったプロジェクトはありません 😔",

        /* テクノロジースキルセクション */

        techSkillsTitle: "テクノロジースキル",
        techSkillsDescription: "フルスタックソフトウェア開発者としてのトレーニングを通じて、ソフトウェア開発に関するさまざまなスキルを習得しました。また、主要なツールを使用した経験も積み、拡張性、柔軟性、堅牢性を備えたモバイルおよびクロスプラットフォームのアプリケーションを作成できるようになりました。以下は、私が現在のスキルレベルに到達するために習得したテクノロジースキルです。",
        frontend: "フロントエンド",
        backend: "バックエンド",
        programmingLanguages: "プログラミング言語",
        databases: "データベース",
        versionControl: "バージョン管理",
        frameworks: "フレームワーク",
        otherTechnologies: "その他の技術",

        /* テクノロジースキルセクション終了 */


        /* 職務経験セクション */

        experienceTitle: "職務経験",
        noExperience: "まだ職務経験はありませんが、個人的なプロジェクトを開発し続けています :D",

        /* 職務経験セクション終了 */


        /* ハードウェアスキルセクション */

        hardwareSkillsTitle: "ハードウェアスキル",
        hardwareSkillsDescription: "ソフトウェア開発とサイバーセキュリティの経験に加えて、ハードウェア、システムの組み立て、その他さまざまな分野に関する知識も持っています。",
        hardwareMaintenance: "メンテナンスと診断",
        hardwareRepair: "ハードウェア修理",
        virtualization: "物理デバイス上の仮想環境のインストールと管理",
        serverMaintenance: "サーバーのメンテナンスと診断",
        embeddedDevices: "組み込みデバイス",

        hardwareSpans: {
            maintenance: [
                "デスクトップPCの組み立て",
                "さまざまなオペレーティングシステムのインストールとセットアップ",
                "ハードウェアエラーの検出"
            ],
            repair: [
                "基本的なノートパソコンの修理（WindowsまたはLinux環境）",
                "基本的なモバイルデバイス（Android）の修理",
                "基本的なタブレットの修理",
                "中級レベルのデスクトップコンピューターの修理",
                "基本的なパフォーマンスの最適化"
            ],
            virtualization: [
                "仮想環境のインストール（VMwareとVirtualBox）",
                "仮想マシン（VM）の作成と管理",
                "仮想ハードウェア（CPU、RAM、ストレージ）の構成"
            ],
            serverMaintenance: [
                "サーバー用オペレーティングシステムのインストール（Windows Server、Ubuntu Serverなど）",
                "物理サーバーの基本的な組み立てとインストール",
                "サーバー上の基本的なハードウェア最適化"
            ],
            embeddedDevices: "Arduino"
        },

        /* ハードウェアスキルセクション終了 */


        /* 自己紹介セクション */

        aboutMeTitle: "自己紹介",
        aboutMeIntro1: "こんにちは！私は<strong>Adrián Sabino</strong>です。現代的で拡張性があり、機能的なアプリケーションの作成に重点を置いた<strong>フルスタック＆モバイル開発者</strong>です。さらに、現在は<strong>ジュニアサイバーセキュリティアナリスト</strong>としての訓練も受けています。",
        aboutMeIntro2: "私のキャリアは、ソフトウェア開発の創造性とサイバーセキュリティ分析の厳密さを組み合わせています。新しい課題に取り組むこと、常に学び続けること、そして新しい技術を探求してスキルを向上させることが大好きです。",

        // 目標
        ambitionsTitle: "🎯 私の目標",
        ambitionsList: [
            "🛡️ <strong>サイバーセキュリティの専門家</strong>になること。",
            "🔒 サイバーセキュリティ分野でリーダー的存在の多国籍企業で働くこと（Telefónica、Google、Deloitte、Microsoft、IBM、Cisco、Oracleなど）。",
            "🖱️ クロスプラットフォームとフルスタックソフトウェア開発に関する知識を最大限に拡張すること。",
            "🏡 ヨーロッパ北部（デンマーク、ノルウェー、ドイツ、アイルランド）、北アメリカ（アメリカまたはカナダ）、またはアジア（日本または韓国）で生活すること。"
        ],

        // 趣味
        hobbiesTitle: "🎨 コード以外の活動",
        hobbiesIntro: "プログラミングやサイバーセキュリティを学んでいないときには、次のことを楽しんでいます。",
        hobbiesList: [
            "🎮 ビデオゲームをプレイすること（好きなジャンル：ストラテジー、シューティング、ホラー、サバイバル、歴史、ソウル系ゲーム）。",
            "♟️ ボードゲームをプレイすること（チェス、リスク、Seven Wonders Duels、カルカソンヌなど）。",
            "📖 世界史、特にスペインの歴史を学ぶこと、そして地政学的な状況を分析すること。",
            "📺 映画、テレビシリーズ、アニメを観ること。",
            "🎵 音楽を聴くこと（Estopa、Fito y Fitipaldis、Mägo de Oz、El Canto del Loco、Dani Martín、Melendi）。"
        ],

        /* 自己紹介セクション終了 */

        /* 雑学セクション (CURIOSITIES) */

        curiositiesTitle: "🤔 私についての豆知識",
        curiositiesList: [
            "👨‍💻 16歳のときに初めてPythonでプログラムを書きました。",
            "🏅 ジブラルタル地方のチェス大会で複数の賞を受賞しました。",
            "🌐 歴史と地政学、そしてそれがグローバルテクノロジーに与える影響に興味があります。",
            "🧠 戦略に関することが大好きで、論理的思考を鍛える素晴らしい方法だと考えています。",
            "🥊 ボクシング、キックボクシング、柔術などの格闘技に興味がありますが、まだ実践したことはありません。",
            "⚽ サッカー、テニス、パデルなどのチームスポーツや個人競技を楽しんでいます。",
            "🎶 歌うことが好きで、将来的にはバンドを結成したいと考えています。"
        ],

        /* 雑学セクション終了 */
    
        /* FAQセクション (よくある質問) */

        faqTitle: "❔ よくある質問",
        faq: [
            {
                question: "お気に入りのプログラミング言語は何ですか？",
                answer: "現在、DartとFlutterフレームワークを使ってクロスプラットフォームアプリケーションを作成するのが特に気に入っています。"
            },
            {
                question: "一番活動しているソーシャルネットワークは何ですか？",
                answer: "いくつかのソーシャルネットワークを使っていますが、特にInstagramで最もアクティブです。"
            },
            {
                question: "運転免許証は持っていますか？",
                answer: "はい、Bカテゴリの運転免許を持っています。学科試験（0ミス）と実技試験（軽微なミス1回）を一発で合格しました。"
            },
            {
                question: "英語のレベルはどれくらいですか？",
                answer: "自分では中級レベルの英語（B1）だと思っていますが、公式な資格は持っていません。"
            },
            {
                question: "AndroidとiOS、どちらが好きですか？",
                answer: "いつもAndroidを使っていて、ユーザーに自由度を与える点でiOSよりも優れていると考えています。アプリ開発はAndroidとiOSの両方で行っています。"
            },
            {
                question: "Windows、Mac、Linuxのどれを使っていますか？",
                answer: "使いやすさの観点からWindowsを好んでいますが、専門的な目的ではLinux（例えばKali Linux）も使用しています。オープンなシステムを好むため、Macは使用していません。"
            },
            {
                question: "どうすれば連絡できますか？",
                answer: "私のソーシャルネットワークを通じて、またはメールを送って連絡できます。新しい機会やコラボレーションには常にオープンです！"
            }
        ],

        /* ソフトスキルセクション (対人スキル) */

        softSkillsTitle: "ソフトスキル",
        softSkillsDescription: "技術的な知識を補完するために、さまざまな対人スキル、方法論的スキル、自己管理スキルを習得しました。",

        // 対人スキル
        interpersonalSkills: "対人スキル",
        interpersonalList: [
            "チームワーク",
            "アクティブリスニング"
        ],

        // 方法論的スキル
        methodicalSkills: "方法論的スキル",
        methodicalList: [
            "組織力",
            "問題解決能力",
            "細部への注意"
        ],

        // 自己管理スキル
        intrapersonalSkills: "自己管理スキル",
        intrapersonalList: [
            "適応力",
            "自己規律",
            "主体性",
            "継続的な学習"
        ],

        /* ソフトスキルセクション終了 */


        /* 学歴セクション (教育) */

        educationTitle: "学歴",

        // 正規の教育
        formalStudies: "📚 正規の教育",

        // 健康科学系高校
        highSchoolTitle: "健康科学系高校",
        highSchoolCenter: "<b>学校:</b> IES El Getares (アルヘシラス)",
        highSchoolDate: "<b>期間:</b> 2020年9月～2022年6月",
        highSchoolDescription: "<b>説明:</b> この期間中に生物学、化学、数学などの基礎科学に関する強固な知識を習得しました。また、分析スキルと問題解決能力も養いました。この時期にプログラミングとソフトウェア開発に出会い、それが私をこの分野でのキャリアへと導きました。",
        skillsAcquiredText: "習得したスキル:",
        highSchoolSkills: [
            "適応力",
            "問題解決能力",
            "英語（B1レベル）",
            "フランス語（A2レベル）"
        ],
        highSchoolIcons: [
            { src: "resources/Software_Icons/Python.png", alt: "Python", title: "Python" }
        ],

        // マルチプラットフォームアプリケーション開発専門学校 (DAM)
        damTitle: "マルチプラットフォームアプリケーション開発専門学校 (DAM)",
        damCenter: "<b>学校:</b> IES Rafael Alberti (カディス)",
        damDate: "<b>期間:</b> 2022年9月～2024年6月",
        damDescription: "<b>説明:</b> マルチプラットフォームアプリケーションの設計、開発、保守に特化した教育。さまざまなプログラミング言語とフレームワークを学び、KotlinとFlutterを用いたモバイルアプリケーション開発に特に精通しています。",
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

        // 認定資格
        certifications: "📜 認定資格",

        // Cisco認定: サイバーセキュリティ入門
        cybersecTitle: "サイバーセキュリティ入門",
        cybersecCenter: "<b>機関:</b> Cisco Networking Academy",
        cybersecDate: "<b>期間:</b> 2025年1月",
        cybersecDescription: "<b>説明:</b> サイバーセキュリティの基礎を学ぶ認定資格。最も一般的な脅威、システム保護の方法、デジタルインフラにおけるセキュリティの重要性を探求します。",
        cybersecSkills: [
            "脅威の検出"
        ],

        // 受賞歴
        awards: "🏆 受賞歴",
        noAwards: "まだ受賞歴はありませんが、これから獲得するために努力しています！ 📱",

        // コミュニティ貢献
        contributions: "🤝 コミュニティ貢献",
        noContributions: "まだコミュニティへの貢献はありませんが、将来的には積極的に関与したいと考えています！ 💻",

        // イベント参加
        events: "📅 イベント参加",
        noEvents: "まだイベントに参加したことはありませんが、近いうちに参加したいと思っています！ 🎤",

        /* 学歴セクション終了 */
    },

    /* FIN DEL IDIOMA JAPONÉS */


















    /* IDIOMA POLACO */

    pl: {
        navbarTitle: "AdriDevSP",
        introText: "Cześć Świecie!, nazywam się",
        jobTitle: "Jestem <span class='highlight'>Fullstack Developerem!</span>",
        motto: "Fullstack i mobilny deweloper za dnia, analityk cyberbezpieczeństwa w nocy.",
        downloadBtn: "Pobierz CV",
        contactBtn: "&lt; Kontakt /&gt;",
        popupTitle: "E-maile",
        projectsTitle: "Projekty",
        noProjects: "Nie ma jeszcze żadnych znaczących projektów 😔",

        /* SEKCJA UMIEJĘTNOŚCI TECHNOLOGICZNYCH */

        techSkillsTitle: "Umiejętności Technologiczne",
        techSkillsDescription: "W trakcie mojej nauki jako Fullstack Developer zdobyłem różnorodne umiejętności z zakresu tworzenia oprogramowania oraz doświadczenie z głównymi narzędziami, które umożliwiły mi tworzenie skalowalnych, elastycznych i w pełni funkcjonalnych aplikacji mobilnych i wieloplatformowych. Poniżej znajdziesz technologie, które pozwoliły mi osiągnąć obecny poziom kompetencji:",
        frontend: "Frontend",
        backend: "Backend",
        programmingLanguages: "Języki Programowania",
        databases: "Bazy Danych",
        versionControl: "Kontrola Wersji",
        frameworks: "Frameworki",
        otherTechnologies: "Inne Technologie",

        /* KONIEC SEKCJI UMIEJĘTNOŚCI TECHNOLOGICZNYCH */


        /* SEKCJA DOŚWIADCZENIA ZAWODOWEGO */

        experienceTitle: "Doświadczenie Zawodowe",
        noExperience: "Nie mam jeszcze doświadczenia zawodowego, ale w międzyczasie rozwijam własne projekty :D",

        /* KONIEC SEKCJI DOŚWIADCZENIA ZAWODOWEGO */


        /* SEKCJA UMIEJĘTNOŚCI SPRZĘTOWYCH */

        hardwareSkillsTitle: "Umiejętności Sprzętowe",
        hardwareSkillsDescription: "Oprócz doświadczenia w zakresie tworzenia oprogramowania i cyberbezpieczeństwa posiadam również wiedzę z zakresu sprzętu, montażu systemów i wielu innych obszarów.",
        hardwareMaintenance: "Konserwacja i Diagnostyka",
        hardwareRepair: "Naprawa Sprzętu",
        virtualization: "Instalacja i zarządzanie środowiskami wirtualnymi na urządzeniach fizycznych",
        serverMaintenance: "Konserwacja i Diagnostyka Serwerów",
        embeddedDevices: "Urządzenia Wbudowane",

        hardwareSpans: {
            maintenance: [
                "Montaż komputerów stacjonarnych",
                "Instalacja i konfiguracja różnych systemów operacyjnych",
                "Wykrywanie błędów sprzętowych"
            ],
            repair: [
                "Podstawowa naprawa laptopów (środowisko Windows lub Linux)",
                "Podstawowa naprawa urządzeń mobilnych (Android)",
                "Podstawowa naprawa tabletów",
                "Średniozaawansowana naprawa komputerów stacjonarnych",
                "Podstawowa optymalizacja wydajności systemu"
            ],
            virtualization: [
                "Instalacja środowisk wirtualnych (VMware i VirtualBox)",
                "Tworzenie i zarządzanie maszynami wirtualnymi (VMs)",
                "Konfiguracja sprzętu wirtualnego (CPU, RAM, pamięć masowa)"
            ],
            serverMaintenance: [
                "Instalacja systemów operacyjnych dla serwerów (Windows Server, Ubuntu Server itp.)",
                "Podstawowy montaż i instalacja fizycznych serwerów",
                "Podstawowa optymalizacja sprzętu na serwerach"
            ],
            embeddedDevices: "Arduino"
        },

        /* KONIEC SEKCJI UMIEJĘTNOŚCI SPRZĘTOWYCH */


        /* SEKCJA O MNIE */

        aboutMeTitle: "O Mnie",
        aboutMeIntro1: "Cześć! Nazywam się <strong>Adrián Sabino</strong> i jestem <strong>Fullstack & Mobile Developerem</strong> z pasją do tworzenia nowoczesnych, skalowalnych i funkcjonalnych aplikacji. Ponadto obecnie szkolę się na stanowisko <strong>Młodszego Analityka Cyberbezpieczeństwa</strong>.",
        aboutMeIntro2: "Moja ścieżka kariery łączy kreatywność w zakresie tworzenia oprogramowania z precyzją analizy cyberbezpieczeństwa. Uwielbiam podejmować nowe wyzwania, nieustannie się uczyć i odkrywać nowe technologie, aby rozwijać swoje umiejętności.",

        // Ambicje
        ambitionsTitle: "🎯 Moje Ambicje",
        ambitionsList: [
            "🛡️ Zostać <strong>ekspertem ds. cyberbezpieczeństwa</strong>.",
            "🔒 Pracować w wiodących międzynarodowych firmach zajmujących się cyberbezpieczeństwem (Telefónica, Google, Deloitte, Microsoft, IBM, Cisco, Oracle itp.).",
            "🖱️ Maksymalnie poszerzyć moją wiedzę z zakresu Fullstack i wieloplatformowego tworzenia oprogramowania.",
            "🏡 Zamieszkać w krajach Europy Północnej (Dania, Norwegia, Niemcy, Irlandia), Ameryki Północnej (USA lub Kanada) lub Azji (Japonia lub Korea Południowa)."
        ],

        // Zainteresowania
        hobbiesTitle: "🎨 Poza Kodem",
        hobbiesIntro: "Kiedy nie programuję ani nie zgłębiam wiedzy z zakresu cyberbezpieczeństwa, lubię:",
        hobbiesList: [
            "🎮 Grać w gry wideo (Moje ulubione gatunki to: strategia, FPS, horror, survival, historyczne i soulslike).",
            "♟️ Grać w gry planszowe (np. Szachy, Risk, Seven Wonders Duels, Carcassonne).",
            "📖 Uczyć się o historii świata, zwłaszcza Hiszpanii, i analizować sytuacje geopolityczne.",
            "📺 Oglądać filmy, seriale i anime.",
            "🎵 Słuchać muzyki (Estopa, Fito y Fitipaldis, Mägo de Oz, El Canto del Loco, Dani Martín i Melendi)."
        ],

        /* KONIEC SEKCJI O MNIE */

        /* SEKCJA CIEKAWOSTEK (CURIOSITIES) */

        curiositiesTitle: "🤔 Ciekawostki o Mnie",
        curiositiesList: [
            "👨‍💻 Napisałem swój pierwszy program w Pythonie, gdy miałem 16 lat.",
            "🏅 Wygrałem kilka nagród w turniejach szachowych w regionie Campo de Gibraltar.",
            "🌐 Pasjonuję się historią i geopolityką oraz ich wpływem na globalną technologię.",
            "🧠 Uwielbiam wszystko, co związane ze strategią – to doskonały sposób na rozwijanie umiejętności analitycznego myślenia.",
            "🥊 Interesuję się sportami walki (boks, kickboxing, jiu-jitsu), choć jeszcze nie miałem okazji ich uprawiać.",
            "⚽ Lubię uprawiać zarówno sporty zespołowe, jak i indywidualne (piłka nożna, tenis, padel itp.).",
            "🎶 Lubię śpiewać i w przyszłości chciałbym założyć zespół muzyczny."
        ],

        /* KONIEC SEKCJI CIEKAWOSTEK */

        /* SEKCJA FAQ (CZĘSTO ZADAWANE PYTANIA) */

        faqTitle: "❔ Często Zadawane Pytania",
        faq: [
            {
                question: "Jaki jest Twój ulubiony język programowania?",
                answer: "Obecnie bardzo lubię używać Dart wraz z frameworkiem Flutter do tworzenia aplikacji wieloplatformowych."
            },
            {
                question: "W którym serwisie społecznościowym jesteś najbardziej aktywny?",
                answer: "Używam wielu mediów społecznościowych, ale najczęściej jestem aktywny na Instagramie."
            },
            {
                question: "Czy masz prawo jazdy?",
                answer: "Tak, mam prawo jazdy kategorii B. Egzamin teoretyczny (0 błędów) i praktyczny (1 drobny błąd) zdałem za pierwszym razem."
            },
            {
                question: "Jaki jest Twój poziom znajomości języka angielskiego?",
                answer: "Uważam, że mam średniozaawansowany poziom angielskiego (B1), chociaż nie posiadam oficjalnego certyfikatu."
            },
            {
                question: "Android czy iOS?",
                answer: "Zawsze używałem Androida i uważam go za lepszy od iOS ze względu na większą swobodę użytkownika. Tworzę aplikacje zarówno na Androida, jak i na iOS bez preferencji."
            },
            {
                question: "Windows, Mac czy Linux?",
                answer: "Preferuję Windows ze względu na wygodę, ale używam również Linuxa (np. Kali Linux) do celów zawodowych. Nie korzystam z Maca, ponieważ wolę otwarte systemy."
            },
            {
                question: "Jak mogę się z Tobą skontaktować?",
                answer: "Możesz skontaktować się ze mną poprzez moje media społecznościowe lub wysłać mi e-mail. Zawsze jestem otwarty na nowe możliwości i współpracę!"
            }
        ],

        /* SEKCJA UMIEJĘTNOŚCI MIĘKKICH (SOFT SKILLS) */

        softSkillsTitle: "Umiejętności Miękkie",
        softSkillsDescription: "Rozwinąłem różnorodne umiejętności interpersonalne, metodologiczne i intrapersonalne, które uzupełniają moją wiedzę techniczną.",

        // Umiejętności Interpersonalne
        interpersonalSkills: "Umiejętności Interpersonalne",
        interpersonalList: [
            "Praca zespołowa",
            "Aktywne słuchanie"
        ],

        // Umiejętności Metodyczne
        methodicalSkills: "Umiejętności Metodyczne",
        methodicalList: [
            "Organizacja",
            "Rozwiązywanie problemów",
            "Dbałość o szczegóły"
        ],

        // Umiejętności Intrapersonalne
        intrapersonalSkills: "Umiejętności Intrapersonalne",
        intrapersonalList: [
            "Elastyczność",
            "Samodyscyplina",
            "Proaktywność",
            "Ciągłe uczenie się"
        ],

        /* KONIEC SEKCJI UMIEJĘTNOŚCI MIĘKKICH */


        /* SEKCJA WYKSZTAŁCENIA (EDUKACJA) */

        educationTitle: "Moje Wykształcenie",

        // Formalne Wykształcenie
        formalStudies: "📚 Formalne Wykształcenie",

        // Liceum o Profilu Nauk Przyrodniczych
        highSchoolTitle: "Liceum o Profilu Nauk Przyrodniczych",
        highSchoolCenter: "<b>Szkoła:</b> IES El Getares (Algeciras)",
        highSchoolDate: "<b>Data:</b> Wrzesień 2020 - Czerwiec 2022",
        highSchoolDescription: "<b>Opis:</b> W tym okresie zdobyłem solidną wiedzę z zakresu nauk przyrodniczych, takich jak biologia, chemia i matematyka. Rozwinąłem również umiejętności analityczne i zdolność do rozwiązywania problemów. Właśnie w tym czasie odkryłem świat programowania i rozwoju oprogramowania, co zainspirowało mnie do podjęcia kariery w tej dziedzinie.",
        skillsAcquiredText: "Zdobyte Umiejętności:",
        highSchoolSkills: [
            "Elastyczność",
            "Rozwiązywanie problemów",
            "Angielski (B1)",
            "Francuski (A2)"
        ],
        highSchoolIcons: [
            { src: "resources/Software_Icons/Python.png", alt: "Python", title: "Python" }
        ],

        // Technikum Programowania Aplikacji Wieloplatformowych (DAM)
        damTitle: "Technikum Programowania Aplikacji Wieloplatformowych (DAM)",
        damCenter: "<b>Szkoła:</b> IES Rafael Alberti (Kadyks)",
        damDate: "<b>Data:</b> Wrzesień 2022 - Czerwiec 2024",
        damDescription: "<b>Opis:</b> Specjalistyczne szkolenie w zakresie projektowania, programowania i utrzymania aplikacji wieloplatformowych. Nauczyłem się programować w różnych językach i frameworkach, wyróżniając się w tworzeniu aplikacji mobilnych z użyciem Kotlin i Flutter.",
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

        // Certyfikaty
        certifications: "📜 Certyfikaty",

        // Certyfikat Cisco: Wprowadzenie do Cyberbezpieczeństwa
        cybersecTitle: "Wprowadzenie do Cyberbezpieczeństwa",
        cybersecCenter: "<b>Instytucja:</b> Cisco Networking Academy",
        cybersecDate: "<b>Data:</b> Styczeń 2025",
        cybersecDescription: "<b>Opis:</b> Certyfikat z zakresu podstaw cyberbezpieczeństwa, obejmujący najczęstsze zagrożenia, sposoby ochrony systemów oraz znaczenie bezpieczeństwa w infrastrukturze cyfrowej.",
        cybersecSkills: [
            "Wykrywanie Zagrożeń"
        ],

        // Nagrody i Wyróżnienia
        awards: "🏆 Nagrody i Wyróżnienia",
        noAwards: "Jeszcze nie zdobyłem żadnych nagród, ale stale pracuję, aby to zmienić! 📱",

        // Wkład w Społeczność
        contributions: "🤝 Wkład w Społeczność",
        noContributions: "Nie dokonałem jeszcze żadnych wkładów, ale planuję to w przyszłości! 💻",

        // Udział w Wydarzeniach
        events: "📅 Udział w Wydarzeniach",
        noEvents: "Jeszcze nie brałem udziału w wydarzeniach, ale nie mogę się doczekać, aby wziąć udział w przyszłości! 🎤",

        /* KONIEC SEKCJI WYKSZTAŁCENIA */
    },

    /* FIN DEL IDIOMA POLACO */
















    /* IDIOMA HEBREO */

    he: {
        navbarTitle: "AdriDevSP",
        introText: "!שלום עולם, קוראים לי",
        jobTitle: "אני <span class='highlight'>מפתח פולסטאק!</span>",
        motto: "מפתח פולסטאק ומובייל ביום, אנליסט סייבר בלילה.",
        downloadBtn: "הורד קורות חיים",
        contactBtn: "&lt; יצירת קשר /&gt;",
        popupTitle: "אימיילים",
        projectsTitle: "פרויקטים",
        noProjects: "עדיין אין פרויקטים בולטים 😔",

        /* קטע כישורים טכנולוגיים */

        techSkillsTitle: "כישורים טכנולוגיים",
        techSkillsDescription: "במהלך הכשרתי כמפתח תוכנה פולסטאק, רכשתי מיומנויות בפיתוח תוכנה וניסיון עם הכלים המרכזיים, מה שאפשר לי ליצור אפליקציות מובייל ורב-פלטפורמה שהן גמישות, חזקות ומתפקדות במלואן. להלן הכישורים הטכנולוגיים שאפשרו לי להגיע לרמה הנוכחית:",
        frontend: "חזית (Frontend)",
        backend: "שרת (Backend)",
        programmingLanguages: "שפות תכנות",
        databases: "מסדי נתונים",
        versionControl: "ניהול גרסאות",
        frameworks: "פריימוורקים",
        otherTechnologies: "טכנולוגיות נוספות",

        /* סוף קטע כישורים טכנולוגיים */


        /* קטע ניסיון */

        experienceTitle: "ניסיון תעסוקתי",
        noExperience: "עדיין אין לי ניסיון תעסוקתי, אבל בינתיים אני ממשיך לפתח פרויקטים אישיים :D",

        /* סוף קטע ניסיון */


        /* קטע כישורי חומרה */

        hardwareSkillsTitle: "כישורי חומרה",
        hardwareSkillsDescription: "בנוסף לניסיון שלי בפיתוח תוכנה ואבטחת סייבר, יש לי ידע בחומרה, הרכבת מערכות ועוד.",
        hardwareMaintenance: "תחזוקה ואבחון",
        hardwareRepair: "תיקון חומרה",
        virtualization: "התקנה וניהול סביבות וירטואליות במכשירים פיזיים",
        serverMaintenance: "תחזוקה ואבחון של שרתים",
        embeddedDevices: "מכשירים משובצים",

        hardwareSpans: {
            maintenance: [
                "הרכבת מחשבים שולחניים",
                "התקנה והגדרה של מערכות הפעלה שונות",
                "איתור תקלות חומרה"
            ],
            repair: [
                "תיקון בסיסי של מחשבים ניידים (Windows או Linux)",
                "תיקון בסיסי של מכשירים ניידים (Android)",
                "תיקון בסיסי של טאבלטים",
                "תיקון בינוני של מחשבים שולחניים",
                "אופטימיזציה בסיסית של ביצועי מערכת"
            ],
            virtualization: [
                "התקנת סביבות וירטואליות (VMware ו-VirtualBox)",
                "יצירה וניהול של מכונות וירטואליות (VMs)",
                "הגדרת חומרה וירטואלית (מעבד, זיכרון, אחסון)"
            ],
            serverMaintenance: [
                "התקנת מערכות הפעלה לשרתים (Windows Server, Ubuntu Server וכו')",
                "הרכבה והתקנה בסיסית של שרתים פיזיים",
                "אופטימיזציה בסיסית של חומרה בשרתים"
            ],
            embeddedDevices: "Arduino"
        },

        /* סוף קטע כישורי חומרה */


        /* קטע עליי */

        aboutMeTitle: "עליי",
        aboutMeIntro1: "!שלום! אני <strong>אדריאן סבינו</strong>, מפתח <strong>פולסטאק ומובייל</strong> עם מיקוד ביצירת אפליקציות מודרניות, גמישות ומתפקדות. בנוסף, אני כרגע מתמחה בתפקיד <strong>אנליסט סייבר ג'וניור</strong>.",
        aboutMeIntro2: "המסלול שלי משלב יצירתיות בפיתוח תוכנה עם הדיוק הנדרש בניתוח אבטחת סייבר. אני אוהב להתמודד עם אתגרים חדשים, ללמוד כל הזמן ולחקור טכנולוגיות חדשות כדי לשפר את הכישורים שלי.",

        // שאיפות
        ambitionsTitle: "🎯 השאיפות שלי",
        ambitionsList: [
            "🛡️ להפוך למומחה <strong>באבטחת סייבר</strong>.",
            "🔒 לעבוד בחברות בינלאומיות מובילות בתחום אבטחת הסייבר (Telefónica, Google, Deloitte, Microsoft, IBM, Cisco, Oracle וכו').",
            "🖱️ להרחיב את הידע שלי בפיתוח תוכנה רב-פלטפורמית ופולסטאק.",
            "🏡 לגור במדינות בצפון אירופה (דנמרק, נורווגיה, גרמניה, אירלנד), בצפון אמריקה (ארה\"ב או קנדה) או באסיה (יפן או דרום קוריאה)."
        ],

        // תחביבים
        hobbiesTitle: "🎨 מעבר לקוד",
        hobbiesIntro: "כשאני לא מתכנת או לומד על אבטחת סייבר, אני נהנה מ:",
        hobbiesList: [
            "🎮 לשחק במשחקי וידאו (הז'אנרים האהובים עליי: אסטרטגיה, יריות, אימה, הישרדות, היסטוריה וסגנון Souls).",
            "♟️ לשחק במשחקי לוח (כמו שחמט, Risk, Seven Wonders Duels ו-Carcassonne).",
            "📖 ללמוד על היסטוריה עולמית, במיוחד ספרד, ולנתח מצבים גיאופוליטיים.",
            "📺 לצפות בסרטים, סדרות ואנימה.",
            "🎵 להאזין למוזיקה (Estopa, Fito y Fitipaldis, Mägo de Oz, El Canto del Loco, Dani Martín, Melendi)."
        ],

        /* סוף קטע עליי */

        /* קטע סקרנות (Curiosities) */

        curiositiesTitle: "🤔 עובדות מעניינות עליי",
        curiositiesList: [
            "👨‍💻 כתבתי את התוכנית הראשונה שלי ב-Python כשהייתי בן 16.",
            "🏅 זכיתי במספר פרסים בטורנירי שחמט באזור קמפו דה גיברלטר.",
            "🌐 אני מתעניין מאוד בהיסטוריה ובגיאופוליטיקה והשפעתן על הטכנולוגיה הגלובלית.",
            "🧠 אני אוהב כל מה שקשור לאסטרטגיה – זו דרך מצוינת לפתח חשיבה לוגית.",
            "🥊 אני מתעניין באומנויות לחימה (אגרוף, קיקבוקסינג, ג'יו-ג'יטסו), למרות שלא יצא לי לתרגל אותן עדיין.",
            "⚽ אני נהנה לעסוק בספורט קבוצתי ובספורט יחידני (כדורגל, טניס, פדל ועוד).",
            "🎶 אני אוהב לשיר וביום מן הימים הייתי רוצה להקים להקת מוזיקה."
        ],

        /* סוף קטע סקרנות */


        /* קטע שאלות נפוצות (FAQ) */

        faqTitle: "❔ שאלות נפוצות",
        faq: [
            {
                question: "מהי שפת התכנות המועדפת עליך?",
                answer: "כרגע אני מאוד נהנה להשתמש ב-Dart יחד עם Flutter לפיתוח אפליקציות מרובות פלטפורמות."
            },
            {
                question: "באיזו רשת חברתית אתה הכי פעיל?",
                answer: "אני משתמש בהרבה רשתות חברתיות, אבל אני הכי פעיל באינסטגרם."
            },
            {
                question: "האם יש לך רישיון נהיגה?",
                answer: "כן, יש לי רישיון נהיגה מסוג B. עברתי את המבחן התיאורטי (0 טעויות) ואת המבחן המעשי (טעות קלה אחת) בניסיון הראשון."
            },
            {
                question: "מהי רמת האנגלית שלך?",
                answer: "אני מעריך שיש לי רמה בינונית באנגלית (B1), למרות שאין לי תעודה רשמית לכך."
            },
            {
                question: "Android או iOS?",
                answer: "תמיד השתמשתי ב-Android ואני רואה בו מערכת טובה יותר מ-iOS בזכות החופש שהוא מעניק למשתמש. אני מפתח אפליקציות לשתי הפלטפורמות ללא הבחנה."
            },
            {
                question: "Windows, Mac או Linux?",
                answer: "אני מעדיף את Windows בזכות הנוחות שלו, אבל אני גם משתמש ב-Linux (למשל Kali Linux) לצרכים מקצועיים. אני לא משתמש ב-Mac בגלל ההעדפה שלי למערכות פתוחות."
            },
            {
                question: "איך אפשר ליצור איתך קשר?",
                answer: "אתה יכול ליצור איתי קשר דרך הרשתות החברתיות שלי או לשלוח לי מייל. אני תמיד פתוח להזדמנויות ושיתופי פעולה חדשים!"
            }
        ],

        /* סוף קטע שאלות נפוצות */


        /* קטע מיומנויות רכות (Soft Skills) */

        softSkillsTitle: "מיומנויות רכות",
        softSkillsDescription: "פיתחתי מגוון מיומנויות בין-אישיות, שיטתיות ותוך-אישיות המשלימות את הידע הטכני שלי.",

        // מיומנויות בין-אישיות
        interpersonalSkills: "מיומנויות בין-אישיות",
        interpersonalList: [
            "עבודת צוות",
            "הקשבה פעילה"
        ],

        // מיומנויות שיטתיות
        methodicalSkills: "מיומנויות שיטתיות",
        methodicalList: [
            "ארגון",
            "פתרון בעיות",
            "תשומת לב לפרטים"
        ],

        // מיומנויות תוך-אישיות
        intrapersonalSkills: "מיומנויות תוך-אישיות",
        intrapersonalList: [
            "יכולת הסתגלות",
            "משמעת עצמית",
            "יוזמה",
            "למידה מתמשכת"
        ],

        /* סוף קטע מיומנויות רכות */


        /* קטע חינוך (Education) */

        educationTitle: "ההשכלה שלי",

        // לימודים פורמליים
        formalStudies: "📚 לימודים פורמליים",

        // תיכון למדעי הבריאות
        highSchoolTitle: "תיכון למדעי הבריאות",
        highSchoolCenter: "<b>מוסד לימודים:</b> IES El Getares (אלחסיראס)",
        highSchoolDate: "<b>תאריך:</b> ספטמבר 2020 - יוני 2022",
        highSchoolDescription: "<b>תיאור:</b> במהלך תקופה זו רכשתי ידע מוצק במדעים בסיסיים כגון ביולוגיה, כימיה ומתמטיקה. בנוסף, פיתחתי יכולות אנליטיות ויכולת גבוהה לפתרון בעיות. בתקופה זו גיליתי את עולם הפיתוח והתכנות, מה שהניע אותי לבחור בתחום זה באופן מקצועי.",
        skillsAcquiredText: "מיומנויות שנרכשו:",
        highSchoolSkills: [
            "יכולת הסתגלות",
            "פתרון בעיות",
            "אנגלית (B1)",
            "צרפתית (A2)"
        ],
        highSchoolIcons: [
            { src: "resources/Software_Icons/Python.png", alt: "Python", title: "Python" }
        ],

        // תואר בטכנולוגיות מידע (DAM)
        damTitle: "תואר בפיתוח יישומים מרובי פלטפורמות (DAM)",
        damCenter: "<b>מוסד לימודים:</b> IES Rafael Alberti (קדיס)",
        damDate: "<b>תאריך:</b> ספטמבר 2022 - יוני 2024",
        damDescription: "<b>תיאור:</b> הכשרה מתמחה בעיצוב, פיתוח ותחזוקה של יישומים מרובי פלטפורמות. למדתי לתכנת בשפות ובמסגרות שונות, והצטיינתי בפיתוח מובייל באמצעות Kotlin ו-Flutter.",
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

        // תעודות
        certifications: "📜 תעודות",

        // תעודת סיסקו: מבוא לאבטחת סייבר
        cybersecTitle: "מבוא לאבטחת סייבר",
        cybersecCenter: "<b>מוסד לימודים:</b> Cisco Networking Academy",
        cybersecDate: "<b>תאריך:</b> ינואר 2025",
        cybersecDescription: "<b>תיאור:</b> הסמכה ביסודות אבטחת סייבר, בחינת האיומים הנפוצים ביותר, דרכים להגן על מערכות והבנת חשיבות האבטחה בתשתית הדיגיטלית.",
        cybersecSkills: [
            "זיהוי איומים"
        ],

        /* סוף קטע חינוך */

        /* קטע פרסים, תרומות והשתתפות באירועים */

        // פרסים (Awards)
        awards: "🏆 פרסים",
        noAwards: "עדיין לא זכיתי בפרסים, אבל אני ממשיך לעבוד קשה כדי להשיג אותם! 📱",

        // תרומות (Contributions)
        contributions: "🤝 תרומות",
        noContributions: "עדיין לא תרמתי לפרויקטים ציבוריים, אבל אני מתכנן לתרום לקהילה בעתיד! 💻",

        // השתתפות באירועים (Events)
        events: "📅 השתתפות באירועים",
        noEvents: "עדיין לא השתתפתי באירועים, אבל אני מצפה להשתתף בקרוב! 🎤",

        /* סוף קטע פרסים, תרומות והשתתפות באירועים */

    },

    /* FIN IDIOMA HEBREO */














    /* IDIOMA DANES */

    da: {
        navbarTitle: "AdriDevSP",
        introText: "Hej Verden!, mit navn er",
        jobTitle: "Jeg er en <span class='highlight'>Fullstack-udvikler!</span>",
        motto: "Fullstack- og mobiludvikler om dagen, cybersikkerhedsanalytiker om natten.",
        downloadBtn: "Download CV",
        contactBtn: "&lt; Kontakt /&gt;",
        popupTitle: "Emails",
        projectsTitle: "Projekter",
        noProjects: "Der er endnu ingen bemærkelsesværdige projekter 😔",

        /* TEKNOLOGISKE FÆRDIGHEDER */

        techSkillsTitle: "Teknologiske færdigheder",
        techSkillsDescription: "I løbet af min uddannelse som Fullstack-softwareudvikler har jeg erhvervet færdigheder i softwareudvikling samt erfaring med centrale værktøjer, der har gjort det muligt for mig at skabe skalerbare, fleksible og fuldt funktionelle mobil- og multiplatform-applikationer. Nedenfor kan du se de teknologiske færdigheder, der har hjulpet mig med at nå mit nuværende niveau:",
        frontend: "Frontend",
        backend: "Backend",
        programmingLanguages: "Programmeringssprog",
        databases: "Databaser",
        versionControl: "Versionskontrol",
        frameworks: "Frameworks",
        otherTechnologies: "Andre teknologier",

        /* SLUT PÅ TEKNOLOGISKE FÆRDIGHEDER */


        /* ARBEJDSERFARING */

        experienceTitle: "Erhvervserfaring",
        noExperience: "Jeg har endnu ingen erhvervserfaring, men i mellemtiden fortsætter jeg med at udvikle personlige projekter :D",

        /* SLUT PÅ ARBEJDSERFARING */


        /* HARDWAREFÆRDIGHEDER */

        hardwareSkillsTitle: "Hardwarefærdigheder",
        hardwareSkillsDescription: "Ud over min erfaring med softwareudvikling og cybersikkerhed har jeg også viden om hardware, samling af systemer og meget mere.",
        hardwareMaintenance: "Vedligeholdelse og diagnose",
        hardwareRepair: "Reparation af hardware",
        virtualization: "Installation og administration af virtuelle miljøer på fysiske enheder",
        serverMaintenance: "Vedligeholdelse og diagnose af servere",
        embeddedDevices: "Indlejrede enheder",

        hardwareSpans: {
            maintenance: [
                "Samling af stationære computere",
                "Installation og opsætning af forskellige operativsystemer",
                "Fejlfinding af hardwareproblemer"
            ],
            repair: [
                "Grundlæggende reparation af bærbare computere (Windows eller Linux-miljø)",
                "Grundlæggende reparation af mobile enheder (Android)",
                "Grundlæggende reparation af tablets",
                "Mellemniveau reparation af stationære computere",
                "Grundlæggende optimering af systemets ydeevne"
            ],
            virtualization: [
                "Installation af virtuelle miljøer (VMware og VirtualBox)",
                "Oprettelse og administration af virtuelle maskiner (VM'er)",
                "Konfiguration af virtuel hardware (CPU, RAM, lagerplads)"
            ],
            serverMaintenance: [
                "Installation af server-operativsystemer (Windows Server, Ubuntu Server osv.)",
                "Grundlæggende montering og installation af fysiske servere",
                "Grundlæggende optimering af hardware på servere"
            ],
            embeddedDevices: "Arduino"
        },

        /* SLUT PÅ HARDWAREFÆRDIGHEDER */


        /* OM MIG-SEKTION */

        aboutMeTitle: "Om Mig",
        aboutMeIntro1: "Hej! Jeg er <strong>Adrián Sabino</strong>, en passioneret <strong>Fullstack- og Mobiludvikler</strong> med fokus på at skabe moderne, skalerbare og funktionelle applikationer. Desuden uddanner jeg mig i øjeblikket til at blive <strong>Junior Cybersikkerhedsanalytiker</strong>.",
        aboutMeIntro2: "Min rejse kombinerer kreativitet i softwareudvikling med præcisionen fra cybersikkerhedsanalyse. Jeg elsker at tage nye udfordringer op, lære konstant og udforske nye teknologier for at forbedre mine færdigheder.",

        // Ambitioner
        ambitionsTitle: "🎯 Mine Livsambitioner",
        ambitionsList: [
            "🛡️ At blive en <strong>ekspert i cybersikkerhed</strong>.",
            "🔒 At arbejde hos førende multinationale virksomheder inden for cybersikkerhed (Telefónica, Google, Deloitte, Microsoft, IBM, Cisco, Oracle osv.).",
            "🖱️ At udvide min viden om multiplatform- og fullstack-softwareudvikling mest muligt.",
            "🏡 At bo i Nordeuropa (Danmark, Norge, Tyskland, Irland), Nordamerika (USA eller Canada) eller Asien (Japan eller Sydkorea)."
        ],

        // Hobbyer
        hobbiesTitle: "🎨 Udover Kode",
        hobbiesIntro: "Når jeg ikke programmerer, lærer om cybersikkerhed eller udforsker nye teknologier, nyder jeg at:",
        hobbiesList: [
            "🎮 Spille videospil (Mine yndlingsgenrer er: Strategi, Skydespil, Horror, Overlevelse, Historiske spil og Souls-spil).",
            "♟️ Spille brætspil (som skak, Risk, Seven Wonders Duels eller Carcassonne).",
            "📖 Lære om verdenshistorie, især Spaniens, og analysere geopolitiske situationer.",
            "📺 Se film, serier og anime.",
            "🎵 Lytte til musik (Estopa, Fito y Fitipaldis, Mägo de Oz, El Canto del Loco, Dani Martín og Melendi)."
        ],

        /* SLUT PÅ OM MIG-SEKTION */


        /* CURIOSITETSSEKTION */

        curiositiesTitle: "🤔 Sjove Fakta om Mig",
        curiositiesList: [
            "👨‍💻 Jeg skrev mit første Python-program, da jeg var 16 år gammel.",
            "🏅 Jeg har vundet flere priser i skakturneringer i Campo de Gibraltar-området.",
            "🌐 Jeg er fascineret af historie og geopolitik samt deres indflydelse på global teknologi.",
            "🧠 Jeg elsker alt, der handler om strategi – det er en fantastisk måde at træne hjernen på.",
            "🥊 Jeg er interesseret i kampsport (boksning, kickboksning, jiu-jitsu), selvom jeg endnu ikke har haft mulighed for at træne dem.",
            "⚽ Jeg nyder at dyrke både holdsport og individuelle sportsgrene (fodbold, tennis, padel osv.).",
            "🎶 Jeg elsker at synge, og en dag vil jeg gerne danne et band."
        ],

        /* SLUT PÅ CURIOSITETSSEKTION */


        /* FAQ-SEKTION */

        faqTitle: "❔ Ofte Stillede Spørgsmål",
        faq: [
            {
                question: "Hvad er dit foretrukne programmeringssprog?",
                answer: "Lige nu nyder jeg virkelig at bruge Dart med Flutter Framework til at skabe multiplatform-applikationer."
            },
            {
                question: "Hvilket socialt netværk er du mest aktiv på?",
                answer: "Jeg bruger mange sociale netværk, men jeg er mest aktiv på Instagram."
            },
            {
                question: "Har du kørekort?",
                answer: "Ja, jeg har et kategori B kørekort. Jeg bestod både den teoretiske prøve (0 fejl) og den praktiske prøve (1 mindre fejl) ved første forsøg."
            },
            {
                question: "Hvilket niveau har du i engelsk?",
                answer: "Jeg vurderer, at jeg har et mellemniveau i engelsk (B1), selvom jeg ikke har en officiel certificering."
            },
            {
                question: "Android eller iOS?",
                answer: "Jeg har altid brugt Android og betragter det som bedre end iOS på grund af den frihed, det giver brugeren. Jeg udvikler til både Android og iOS uden forskel."
            },
            {
                question: "Windows, Mac eller Linux?",
                answer: "Jeg foretrækker Windows for dets bekvemmelighed, men jeg bruger også Linux (som Kali Linux) til professionelle formål. Jeg bruger ikke Mac på grund af min præference for åbne systemer."
            }
        ],

        /* BLØDE FÆRDIGHEDER-SEKTION */

        softSkillsTitle: "Bløde Færdigheder",
        softSkillsDescription: "Jeg har udviklet forskellige interpersonelle, metodiske og intrapersonelle færdigheder, der komplementerer mine tekniske kompetencer.",

        // Interpersonelle Færdigheder (Interpersonal Skills)
        interpersonalSkills: "Interpersonelle Færdigheder",
        interpersonalList: [
            "Samarbejde",
            "Aktiv lytning"
        ],

        // Metodiske Færdigheder (Methodical Skills)
        methodicalSkills: "Metodiske Færdigheder",
        methodicalList: [
            "Organisering",
            "Problemløsning",
            "Opmærksomhed på detaljer"
        ],

        // Intrapersonelle Kompetencer (Intrapersonal Skills)
        intrapersonalSkills: "Intrapersonelle Kompetencer",
        intrapersonalList: [
            "Tilpasningsevne",
            "Selvdisciplin",
            "Initiativ",
            "Kontinuerlig læring"
        ],

        /* SLUT PÅ BLØDE FÆRDIGHEDER-SEKTION */


        /* SLUT PÅ FAQ-SEKTION */

        educationTitle: "Min Uddannelse",

        // Formelle Studier (Formal Studies)
        formalStudies: "📚 Formelle Studier",
    
        // Gymnasiet (High School)
        highSchoolTitle: "Gymnasiet i Sundhedsvidenskab",
        highSchoolCenter: "<b>Skole:</b> IES El Getares (Algeciras)",
        highSchoolDate: "<b>Dato:</b> September 2020 - Juni 2022",
        highSchoolDescription: "<b>Beskrivelse:</b> I denne periode opnåede jeg en solid baggrund i grundlæggende videnskaber som biologi, kemi og matematik. Jeg udviklede også analytiske færdigheder og evnen til at løse problemer. Det var i denne periode, at jeg opdagede softwareudviklingens verden, hvilket inspirerede mig til at vælge dette felt professionelt.",
        skillsAcquiredText: "Tilegnede Færdigheder:",
        highSchoolSkills: [
            "Tilpasningsevne",
            "Problemløsning",
            "Engelsk (B1)",
            "Fransk (A2)"
        ],
        highSchoolIcons: [
            { src: "resources/Software_Icons/Python.png", alt: "Python", title: "Python" }
        ],
    
        // FPGS i Multiplatform Applikationsudvikling (DAM)
        damTitle: "FPGS i Multiplatform Applikationsudvikling (DAM)",
        damCenter: "<b>Skole:</b> IES Rafael Alberti (Cádiz)",
        damDate: "<b>Dato:</b> September 2022 - Juni 2024",
        damDescription: "<b>Beskrivelse:</b> Specialiseret uddannelse i design, udvikling og vedligeholdelse af multiplatform-applikationer. Jeg har lært at programmere i forskellige sprog og frameworks med særlig ekspertise inden for mobiludvikling med Kotlin og Flutter.",
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
    
        // Certificeringer (Certifications)
        certifications: "📜 Certificeringer",
    
        // Cisco-certificering: Introduktion til Cybersikkerhed
        cybersecTitle: "Introduktion til Cybersikkerhed",
        cybersecCenter: "<b>Center:</b> Cisco Networking Academy",
        cybersecDate: "<b>Dato:</b> Januar 2025",
        cybersecDescription: "<b>Beskrivelse:</b> Certificering i cybersikkerhedsgrundlag, der udforsker de mest almindelige trusler, hvordan man beskytter systemer, og vigtigheden af sikkerhed i digital infrastruktur.",
        cybersecSkills: [
            "Trusselsdetektion"
        ],
    
        /* SLUT PÅ UDDANNELSESSEKTION */

        /* PRISER, BIDRAG OG BEGIVENHEDER-SEKTION */

        // Priser (Awards)
        awards: "🏆 Priser",
        noAwards: "Jeg har endnu ikke modtaget nogen priser, men jeg arbejder hårdt på at opnå dem! 📱",

        // Bidrag (Contributions)
        contributions: "🤝 Bidrag",
        noContributions: "Jeg har endnu ikke bidraget til fællesskabet, men jeg planlægger at gøre det i fremtiden! 💻",

        // Deltagelse i Begivenheder (Events)
        events: "📅 Deltagelse i Begivenheder",
        noEvents: "Jeg har endnu ikke deltaget i nogen begivenheder, men jeg ser frem til at gøre det snart! 🎤",

        /* SLUT PÅ PRISER, BIDRAG OG BEGIVENHEDER-SEKTION */

    },

    /* FIN IDIOMA DANÉS */











    /* IDIOMA CHECO */

    cs: {
        navbarTitle: "AdriDevSP",
        introText: "Ahoj světe!, jmenuji se",
        jobTitle: "Jsem <span class='highlight'>Fullstack vývojář!</span>",
        motto: "Fullstack a mobilní vývojář ve dne, analytik kybernetické bezpečnosti v noci.",
        downloadBtn: "Stáhnout CV",
        contactBtn: "&lt; Kontakty /&gt;",
        popupTitle: "E-maily",
        projectsTitle: "Projekty",
        noProjects: "Zatím žádné významné projekty 😔",

        /* TECHNOLOGICKÉ DOVEDNOSTI */

        techSkillsTitle: "Technologické dovednosti",
        techSkillsDescription: "Během mého vzdělávání jako Fullstack vývojáře jsem získal dovednosti v oblasti vývoje softwaru a zkušenosti s klíčovými nástroji, které mi umožnily vytvářet škálovatelné, flexibilní a plně funkční mobilní a multiplatformní aplikace. Níže jsou uvedeny technologické dovednosti, které mi pomohly dosáhnout mé současné úrovně:",
        frontend: "Frontend",
        backend: "Backend",
        programmingLanguages: "Programovací jazyky",
        databases: "Databáze",
        versionControl: "Správa verzí",
        frameworks: "Frameworky",
        otherTechnologies: "Další technologie",

        /* KONEC TECHNOLOGICKÝCH DOVEDNOSTÍ */


        /* PRACOVNÍ ZKUŠENOSTI */

        experienceTitle: "Pracovní zkušenosti",
        noExperience: "Zatím nemám žádné pracovní zkušenosti, ale mezitím se věnuji osobním projektům :D",

        /* KONEC PRACOVNÍCH ZKUŠENOSTÍ */


        /* HARDWARE DOVEDNOSTI */

        hardwareSkillsTitle: "Hardwarové dovednosti",
        hardwareSkillsDescription: "Kromě mých zkušeností s vývojem softwaru a kybernetickou bezpečností mám také znalosti v oblasti hardwaru, montáže počítačů a mnoho dalšího.",
        hardwareMaintenance: "Údržba a diagnostika",
        hardwareRepair: "Oprava hardwaru",
        virtualization: "Instalace a správa virtuálních prostředí na fyzických zařízeních",
        serverMaintenance: "Údržba a diagnostika serverů",
        embeddedDevices: "Vestavěná zařízení",

        hardwareSpans: {
            maintenance: [
                "Sestavování stolních počítačů",
                "Instalace a konfigurace různých operačních systémů",
                "Detekce hardwarových chyb"
            ],
            repair: [
                "Základní opravy notebooků (prostředí Windows nebo Linux)",
                "Základní opravy mobilních zařízení (Android)",
                "Základní opravy tabletů",
                "Středně pokročilé opravy stolních počítačů",
                "Základní optimalizace výkonu systému"
            ],
            virtualization: [
                "Instalace virtuálních prostředí (VMware a VirtualBox)",
                "Vytváření a správa virtuálních strojů (VMs)",
                "Konfigurace virtuálního hardwaru (CPU, RAM, úložiště)"
            ],
            serverMaintenance: [
                "Instalace serverových operačních systémů (Windows Server, Ubuntu Server apod.)",
                "Základní montáž a instalace fyzických serverů",
                "Základní optimalizace hardwaru na serverech"
            ],
            embeddedDevices: "Arduino"
        },

        /* KONEC HARDWAROVÝCH DOVEDNOSTÍ */


        /* SEKCE O MNĚ */

        aboutMeTitle: "O Mně",
        aboutMeIntro1: "Ahoj! Jsem <strong>Adrián Sabino</strong>, nadšený <strong>Fullstack a mobilní vývojář</strong> se zaměřením na vytváření moderních, škálovatelných a funkčních aplikací. Kromě toho se v současné době vzdělávám na pozici <strong>Junior analytika kybernetické bezpečnosti</strong>.",
        aboutMeIntro2: "Moje cesta spojuje kreativitu vývoje softwaru s precizností analýzy kybernetické bezpečnosti. Baví mě čelit novým výzvám, neustále se učit a objevovat nové technologie pro zlepšení svých dovedností.",

        // Ambice
        ambitionsTitle: "🎯 Mé Životní Ambice",
        ambitionsList: [
            "🛡️ Stát se <strong>odborníkem na kybernetickou bezpečnost</strong>.",
            "🔒 Pracovat ve špičkových nadnárodních společnostech v oblasti kybernetické bezpečnosti (Telefónica, Google, Deloitte, Microsoft, IBM, Cisco, Oracle atd.).",
            "🖱️ Rozšířit své znalosti v oblasti multiplatformního a Fullstack vývoje softwaru na maximum.",
            "🏡 Žít v severní Evropě (Dánsko, Norsko, Německo, Irsko), Severní Americe (USA nebo Kanada) nebo Asii (Japonsko nebo Jižní Korea)."
        ],

        // Koníčky
        hobbiesTitle: "🎨 Mimo Kódování",
        hobbiesIntro: "Když neprogramuji, neučím se o kybernetické bezpečnosti nebo nezkoumám nové technologie, rád:",
        hobbiesList: [
            "🎮 Hraji videohry (Moje oblíbené žánry: strategie, střílečky, horor, přežití, historické hry a Souls hry).",
            "♟️ Hraji deskové hry (Jako šachy, Risk, Seven Wonders Duels nebo Carcassonne).",
            "📖 Studuji světovou historii, zejména španělskou, a analyzuji geopolitické situace.",
            "📺 Sleduji filmy, seriály a anime.",
            "🎵 Poslouchám hudbu (Estopa, Fito y Fitipaldis, Mägo de Oz, El Canto del Loco, Dani Martín a Melendi)."
        ],

        /* KONEC SEKCE O MNĚ */


        /* CURIOSITY SECTIONS */

        curiositiesTitle: "🤔 Zajímavosti o Mně",
        curiositiesList: [
            "👨‍💻 Svůj první program v Pythonu jsem napsal, když mi bylo 16 let.",
            "🏅 Vyhrál jsem několik cen na šachových turnajích v oblasti Campo de Gibraltar.",
            "🌐 Fascinuje mě historie a geopolitika a jejich vliv na globální technologie.",
            "🧠 Miluji strategii – je to skvělý způsob, jak rozvíjet mozek.",
            "🥊 Zajímám se o bojové sporty (box, kickbox, jiu-jitsu), i když jsem je zatím nezkoušel.",
            "⚽ Rád hraji týmové i individuální sporty (fotbal, tenis, padel atd.).",
            "🎶 Miluji zpěv a jednoho dne bych chtěl založit hudební skupinu."
        ],

        /* KONEC CURIOSITY SECTIONS */

        /* SEKCE FAQ */

        faqTitle: "❔ Často kladené otázky",
        faq: [
            {
                question: "Jaký je váš oblíbený programovací jazyk?",
                answer: "Momentálně mě baví používat Dart s frameworkem Flutter k vytváření multiplatformních aplikací."
            },
            {
                question: "Na které sociální síti jste nejaktivnější?",
                answer: "Používám mnoho sociálních sítí, ale nejaktivnější jsem na Instagramu."
            },
            {
                question: "Máte řidičský průkaz?",
                answer: "Ano, mám řidičský průkaz skupiny B. Uspěšně jsem složil jak teoretickou (0 chyb), tak praktickou zkoušku (1 drobná chyba) na první pokus."
            },
            {
                question: "Jaká je vaše úroveň angličtiny?",
                answer: "Považuji se za člověka s pokročilou střední úrovní angličtiny (B1), i když nemám oficiální certifikaci."
            },
            {
                question: "Android nebo iOS?",
                answer: "Vždy jsem používal Android a považuji ho za lepší než iOS kvůli svobodě, kterou poskytuje uživatelům. Vyvíjím aplikace pro Android i iOS bez rozdílu."
            },
            {
                question: "Windows, Mac nebo Linux?",
                answer: "Dávám přednost Windows kvůli jeho uživatelské přívětivosti, ale také používám Linux (například Kali Linux) pro profesionální účely. Mac nepoužívám kvůli své preferenci otevřených systémů."
            },
            {
                question: "Jak vás mohu kontaktovat?",
                answer: "Můžete mě kontaktovat prostřednictvím mých sociálních sítí nebo mi poslat e-mail. Vždy jsem otevřený novým příležitostem a spolupracím!"
            }
        ],

        /* KONEC SEKCE FAQ */

        /* SEKCE MĚKKÝCH DOVEDNOSTÍ */

        softSkillsTitle: "Měkké Dovednosti",
        softSkillsDescription: "Rozvinul jsem různé interpersonální, metodické a intrapersonální dovednosti, které doplňují mé technické znalosti.",

        // Interpersonální Dovednosti (Interpersonal Skills)
        interpersonalSkills: "Interpersonální Dovednosti",
        interpersonalList: [
            "Týmová práce",
            "Aktivní naslouchání"
        ],

        // Metodické Dovednosti (Methodical Skills)
        methodicalSkills: "Metodické Dovednosti",
        methodicalList: [
            "Organizace",
            "Řešení problémů",
            "Pozornost k detailům"
        ],

        // Intrapersonální Dovednosti (Intrapersonal Skills)
        intrapersonalSkills: "Intrapersonální Dovednosti",
        intrapersonalList: [
            "Přizpůsobivost",
            "Sebe-disciplína",
            "Proaktivita",
            "Nepřetržité učení"
        ],

        /* KONEC SEKCE MĚKKÝCH DOVEDNOSTÍ */


        /* SEKCE VZDĚLÁNÍ */

        educationTitle: "Moje Vzdělání",

        // Formální Studia (Formal Studies)
        formalStudies: "📚 Formální Studia",

        // Střední Škola (High School)
        highSchoolTitle: "Střední Škola se Zaměřením na Zdravotnictví",
        highSchoolCenter: "<b>Škola:</b> IES El Getares (Algeciras)",
        highSchoolDate: "<b>Datum:</b> Září 2020 – Červen 2022",
        highSchoolDescription: "<b>Popis:</b> V tomto období jsem získal pevný základ v přírodních vědách, jako je biologie, chemie a matematika. Také jsem si rozvinul analytické schopnosti a dovednosti při řešení problémů. Během tohoto období jsem objevil svět vývoje softwaru, což mě inspirovalo k tomu, abych si jej zvolil jako svou profesní dráhu.",
        skillsAcquiredText: "Získané Dovednosti:",
        highSchoolSkills: [
            "Přizpůsobivost",
            "Řešení problémů",
            "Angličtina (B1)",
            "Francouzština (A2)"
        ],
        highSchoolIcons: [
            { src: "resources/Software_Icons/Python.png", alt: "Python", title: "Python" }
        ],

        // FPGS v Multiplatformním Vývoji Aplikací (DAM)
        damTitle: "FPGS v Multiplatformním Vývoji Aplikací (DAM)",
        damCenter: "<b>Škola:</b> IES Rafael Alberti (Cádiz)",
        damDate: "<b>Datum:</b> Září 2022 – Červen 2024",
        damDescription: "<b>Popis:</b> Specializované vzdělání zaměřené na návrh, vývoj a údržbu multiplatformních aplikací. Naučil jsem se programovat v různých jazycích a frameworcích, s důrazem na mobilní vývoj pomocí Kotlin a Flutter.",
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

        // Certifikace (Certifications)
        certifications: "📜 Certifikace",

        // Cisco Certifikace: Úvod do Kybernetické Bezpečnosti
        cybersecTitle: "Úvod do Kybernetické Bezpečnosti",
        cybersecCenter: "<b>Centrum:</b> Cisco Networking Academy",
        cybersecDate: "<b>Datum:</b> Leden 2025",
        cybersecDescription: "<b>Popis:</b> Certifikace v základech kybernetické bezpečnosti, která se zabývá nejčastějšími hrozbami, ochranou systémů a důležitostí bezpečnosti v digitální infrastruktuře.",
        cybersecSkills: [
            "Detekce hrozeb"
        ],

        /* KONEC SEKCE VZDĚLÁNÍ */

        /* SEKCE OCENĚNÍ, PŘÍSPĚVKY A UDÁLOSTI */

        // Ocenění (Awards)
        awards: "🏆 Ocenění",
        noAwards: "Zatím jsem neobdržel žádné ocenění, ale pilně pracuji na tom, abych jich dosáhl! 📱",

        // Příspěvky (Contributions)
        contributions: "🤝 Příspěvky",
        noContributions: "Zatím jsem nepřispěl do žádné komunity, ale v budoucnu to plánuji! 💻",

        // Účast na Událostech (Events)
        events: "📅 Účast na Událostech",
        noEvents: "Zatím jsem se nezúčastnil žádných událostí, ale těším se, že se brzy zapojím! 🎤",

        /* KONEC SEKCE OCENĚNÍ, PŘÍSPĚVKY A UDÁLOSTI */

    },

    /* FIN IDIOMA CHECO */













    /* IDIOMA SUECO */

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


// Detectar el idioma guardado o usar inglés por defecto
document.addEventListener("DOMContentLoaded", () => {
    // const savedLang = localStorage.getItem("lang") || "es"; Para que se quede el idioma guardado
    document.getElementById("language-switcher").value = "en";
    changeLanguage("en");
});
// © 2025 Adrián Sabino Pérez. Todos los derechos reservados. Prohibida la reproducción o imitación total o parcial del código sin autorización.
