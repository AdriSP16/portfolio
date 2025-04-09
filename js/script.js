// © 2025 Adrián Sabino Pérez. Todos los derechos reservados. Prohibida la reproducción o imitación total o parcial del código sin autorización.

// Función para descargar el CV
function downloadCV() {
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


// Cerrar mapPopup al hacer clic fuera
window.addEventListener('click', (event) => {
    const popup = document.getElementById('mapPopup');
    if (event.target === popup) closeFlagPopup();
});




// Cerrar el mapPopup al tocar el icono de cerrar
function closeFlagPopup() {
    const popup = document.getElementById('mapPopup');
    popup.classList.remove('show');
    setTimeout(() => popup.style.display = 'none', 300); 
}




// Abrir el contact dialog
function openContactPopup() {
    const popup = document.getElementById('contact-popup');
    popup.style.display = 'flex';
    setTimeout(() => popup.classList.add('show'), 10); 
}




// Cerrar el contact dialog
function closeContactPopup() {
    const popup = document.getElementById('contact-popup');
    popup.classList.remove('show');
    setTimeout(() => popup.style.display = 'none', 300); 
}





// Cerrar contact popup al hacer clic fuera
window.addEventListener('click', (event) => {
    const popup = document.getElementById('contact-popup');
    if (event.target === popup) closeContactPopup();
});




// Enviar correo en el contact Dialog
function sendEmail(emailId) {
    const email = document.getElementById(emailId).value;
    window.location.href = `mailto:${email}`;
}




// Copiar al portapapeles en el contact Dialog
function copyEmail(emailId) {
    const email = document.getElementById(emailId);
    navigator.clipboard.writeText(email.value).then(() => {
        alert(`Correo copiado: ${email.value}`);
    });
}




// Boton ver mas y ver menos en el apartado de lugares preferidos
function toggleView() {
    const countriesGrid = document.querySelector('.countries-grid');
    const showMoreBtn = document.getElementById('show-more-btn');
    const showLessBtn = document.getElementById('show-less-btn');

    // Cambiar la visibilidad de los países y los botones
    countriesGrid.classList.toggle('show-more');

    if (countriesGrid.classList.contains('show-more')) {
        showMoreBtn.style.display = 'none'; // Ocultar "Ver más"
        showLessBtn.style.display = 'inline-block'; // Mostrar "Ver menos"
    } else {
        showMoreBtn.style.display = 'inline-block'; // Mostrar "Ver más"
        showLessBtn.style.display = 'none'; // Ocultar "Ver menos"
    }
}




// Detectar el interruptor y la etiqueta
const themeSwitch = document.getElementById("theme-switch");
const themeLabel = document.getElementById("theme-label");

// Función para cambiar el tema (claro/oscuro)
function toggleTheme() {
    const isDarkMode = document.body.getAttribute("data-theme") === "dark";

    if (isDarkMode) {
        document.body.removeAttribute("data-theme"); // Cambiar a modo claro
    } else {
        document.body.setAttribute("data-theme", "dark"); // Activar modo oscuro
    }

    // Guardar preferencia en localStorage
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
}

// Detectar el cambio en el switch
themeSwitch.addEventListener("change", toggleTheme);

// Mantener el tema seleccionado al recargar la página
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.setAttribute("data-theme", "dark");
        themeSwitch.checked = true; 
    }
});




// Muestra los de mapas para cada bandera en el apartado de "Lugares preferidos", usando la libreria Leaflet CSS y JS.

document.addEventListener("DOMContentLoaded", async () => {
    const countryCards = document.querySelectorAll(".country-card");
    const popup = document.getElementById("mapPopup");
    const popupTitle = document.getElementById("flag-popup-title");
    const mapContainer = document.getElementById("mapContainer");

    // Función para obtener la URL de la bandera por código ISO
    function getFlagUrl(isoCode) {
        return `https://flagcdn.com/w320/${isoCode.toLowerCase()}.png`;
    }

    // Datos de ubicación (Latitud y Longitud de cada ciudad) con comentarios del porque lo he elegido
    const countryData = {
        "Germany": {
            isoCode: "DE",
            center: [51.1657, 10.4515],
            cities: [
                { name: "Berlín", coords: [52.52, 13.405] }, // Capital de Alemania, centro de innovación tecnológica y startups
                { name: "Múnich", coords: [48.1351, 11.582] }, // Ciudad líder en la industria tecnológica, con grandes empresas como Siemens y BMW
                { name: "Hamburgo", coords: [53.5511, 9.9937] }, // Ciudad con un fuerte enfoque en tecnología y el sector digital, especialmente en el comercio electrónico
                { name: "Frankfurt", coords: [50.1109, 8.6821] }, // Centro financiero y tecnológico, con un enfoque creciente en fintech y ciberseguridad
                { name: "Stuttgart", coords: [48.7758, 9.1829] }, // Ciudad industrial con una fuerte presencia de la industria automotriz y tecnologías innovadoras
                { name: "Colonia", coords: [50.9375, 6.9603] }, // Centro tecnológico con enfoque en medios digitales, ciberseguridad y tecnologías de la información
                { name: "Düsseldorf", coords: [51.2217, 6.7762] }, // Ciudad con un ecosistema emergente de startups tecnológicas y crecimiento en el sector de TI
                { name: "Leipzig", coords: [51.3397, 12.3731] }, // Ciudad en auge en el sector tecnológico, especialmente en inteligencia artificial y automatización
                { name: "Dortmund", coords: [51.5136, 7.4650] }, // Conocida por su enfoque en la tecnología industrial, especialmente en la automatización y la robótica
                { name: "Karlsruhe", coords: [49.0069, 8.4037] }, // Ciudad universitaria, con un fuerte enfoque en investigación tecnológica y desarrollo de software
                { name: "Nuremberg", coords: [49.4521, 11.0767] }, // Centro importante para la industria de software y tecnologías industriales
                { name: "Mannheim", coords: [49.4875, 8.4660] }, // Fuerte enfoque en la digitalización y en empresas tecnológicas
                { name: "Bremen", coords: [53.0793, 8.8017] }, // Ciudad que está avanzando rápidamente en el sector de la tecnología industrial y la automoción
                { name: "Aachen", coords: [50.7753, 6.0839] }, // Ciudad universitaria con énfasis en investigación tecnológica y desarrollo de ingeniería
                { name: "Hannover", coords: [52.3759, 9.7320] }, // Famosa por la feria de tecnología industrial y la innovación en el sector de la automatización
                { name: "Freiburg", coords: [47.9990, 7.8425] }, // Ciudad verde, con proyectos de innovación tecnológica enfocados en sostenibilidad
                { name: "Wiesbaden", coords: [50.0824, 8.2493] }, // Enfocada en tecnologías de la información y el sector bancario
                { name: "Essen", coords: [51.4566, 7.0134] } // Ciudad con un fuerte crecimiento en tecnología de la información, energía y automatización
            ]
        },
        "Denmark": {
            isoCode: "DK",
            center: [56.2639, 9.5018],
            cities: [
                { name: "Copenhague", coords: [55.6761, 12.5683] }, // Capital de Dinamarca, hub tecnológico con un fuerte enfoque en startups y tecnología verde
                { name: "Aarhus", coords: [56.1629, 10.2039] }, // Segunda ciudad más grande, conocida por su enfoque en la innovación digital y tecnología educativa
                { name: "Odense", coords: [55.4038, 10.4024] }, // Ciudad con fuerte presencia en robótica y tecnología de automatización, hogar de importantes startups
                { name: "Aalborg", coords: [57.0488, 9.9217] }, // Ciudad universitaria con un enfoque creciente en investigación tecnológica y energía renovable
                { name: "Esbjerg", coords: [55.4709, 8.4590] }, // Ciudad clave en energías renovables, especialmente en energía eólica, y desarrollo tecnológico
                { name: "Vejle", coords: [55.7095, 9.5325] }, // Conocida por su crecimiento en la tecnología de la información y la conectividad digital
                { name: "Herning", coords: [56.1309, 8.9710] }, // Ciudad emergente en la industria tecnológica, especialmente en soluciones digitales y comercio electrónico
                { name: "Kolding", coords: [55.5144, 9.4817] } // Foco en el diseño industrial y tecnología de la información, con un ecosistema en crecimiento para startups tecnológicas
            ]
        },
        "Gibraltar": {
            isoCode: "GI",
            center: [36.1408, -5.3536],
            cities: [
                { name: "Gibraltar", coords: [36.1408, -5.3536] }
            ]
        },
        "Netherlands": {
            isoCode: "NL",
            center: [52.3676, 4.9041],
            cities: [
                { name: "Ámsterdam", coords: [52.3676, 4.9041] }, // Capital de los Países Bajos, epicentro de la innovación tecnológica y startups
                { name: "Róterdam", coords: [51.9225, 4.4792] }, // Ciudad con un fuerte enfoque en la tecnología y la industria 4.0
                { name: "Utrecht", coords: [52.0907, 5.1214] }, // Ciudad con un crecimiento notable en tecnología y educación en TI
                { name: "Eindhoven", coords: [51.4416, 5.4697] }, // Centro de innovación tecnológica, hogar de Philips y otras grandes empresas
                { name: "La Haya", coords: [52.0705, 4.3007] }, // Ciudad con un enfoque creciente en la tecnología y la ciberseguridad
                { name: "Groninga", coords: [53.2194, 6.5665] }, // Ciudad con universidades enfocadas en la investigación tecnológica y ciencias de la computación
                { name: "Maastricht", coords: [50.8513, 5.6909] }, // Ciudad emergente en el sector de la innovación digital y la tecnología
                { name: "Leiden", coords: [52.1601, 4.4933] }, // Ciudad con universidades de renombre y una creciente industria de investigación en tecnologías
                { name: "Delft", coords: [52.0116, 4.3571] }, // Famosa por su universidad técnica y su énfasis en ingeniería y tecnología aplicada
                { name: "Arnhem", coords: [51.9809, 5.8987] } // Ciudad con iniciativas tecnológicas en sostenibilidad y proyectos de innovación ecológica
            ]
        },
        "Spain": {
            isoCode: "ES",
            center: [40.4637, -3.7492],
            cities: [
                { name: "Madrid", coords: [40.4168, -3.7038] },
                { name: "Barcelona", coords: [41.3884, 2.192] },
                { name: "Sevilla", coords: [37.3886, -5.9823] },
                { name: "Valencia", coords: [39.4699, -0.3763] },
                { name: "Bilbao", coords: [43.2630, -2.9340] },
                { name: "Vitoria", coords: [42.8500, -2.6700] },
                { name: "Málaga", coords: [36.7213, -4.4214] },
                { name: "Cádiz", coords: [36.5271, -6.2886] },
                { name: "Vigo", coords: [42.2403, -8.7207] },
                { name: "A Coruña", coords: [43.3623, -8.4115] },
                { name: "Zaragoza", coords: [41.6488, -0.8891] },
                { name: "Valladolid", coords: [41.6523, -4.7237] },
                { name: "Salamanca", coords: [40.9704, -5.6635] },
                { name: "Alicante", coords: [38.3452, -0.4810] },
                { name: "Oviedo", coords: [43.3611, -5.8494] },
                { name: "Gijón", coords: [43.5322, -5.6614] },
                { name: "Santiago de Compostela", coords: [42.8782, -8.5448] },
                { name: "Murcia", coords: [37.9835, -1.1280] },
                { name: "Mallorca", coords: [39.6956, 3.0176] },
                { name: "Tenerife", coords: [28.2916, -16.6291] },
                { name: "Las Palmas de Gran Canaria", coords: [28.1248, -15.4363] },
                { name: "San Sebastián", coords: [43.3183, -1.9812] },
                { name: "Pamplona", coords: [42.8125, -1.6458] },
                { name: "Santander", coords: [43.4623, -3.8090] },
                { name: "Granada", coords: [37.1773, -3.5986] },
                { name: "Toledo", coords: [39.8628, -4.0273] },
                { name: "Algeciras", coords: [36.1408, -5.4599] }
            ]
        },
        "Portugal": {
            isoCode: "PT",
            center: [39.3999, -8.2245],
            cities: [
                { name: "Lisboa", coords: [38.7169, -9.1395] }, // Capital de Portugal, hub principal de startups tecnológicas e innovación
                { name: "Oporto", coords: [41.1496, -8.6110] }, // Ciudad clave en el sector tecnológico y en el desarrollo de software y fintech
                { name: "Coimbra", coords: [40.2033, -8.4103] }, // Famosa por su universidad, importante en investigación científica y tecnológica
                { name: "Braga", coords: [41.5503, -8.4265] }, // Centro emergente en el sector tecnológico, especialmente en IoT y robótica
                { name: "Aveiro", coords: [40.6413, -8.6538] }, // Ciudad con un enfoque creciente en la tecnología y la innovación
                { name: "Funchal", coords: [32.6665, -16.9246] }, // Ciudad con enfoque en la digitalización y nuevas tecnologías
                { name: "Évora", coords: [38.5713, -7.9135] }, // Centro de investigación y tecnología, especialmente en áreas de sostenibilidad
                { name: "Cascais", coords: [38.6979, -9.4218] }, // Zona de alta concentración de empresas tecnológicas y de tecnología digital
                { name: "Sintra", coords: [38.7988, -9.3906] }, // Crecimiento de startups tecnológicas y consultoras en IT
                { name: "Leiria", coords: [39.7432, -8.8075] } // Ciudad con presencia creciente de empresas tecnológicas y sector IT
            ]
        },
        "Poland": {
            isoCode: "PL",
            center: [51.9194, 19.1451],
            cities: [
                { name: "Varsovia", coords: [52.2298, 21.0118] }, // Capital de Polonia, hub principal de tecnología, startups y finanzas
                { name: "Cracovia", coords: [50.0647, 19.9450] }, // Ciudad con fuerte presencia en el sector IT, tecnología y universidades de renombre
                { name: "Wrocław", coords: [51.1079, 17.0385] }, // Ciudad tecnológica clave en el sector de software, robótica e innovación
                { name: "Poznań", coords: [52.4084, 16.9342] }, // Centro creciente en la tecnología y la investigación en automatización y TI
                { name: "Gdansk", coords: [54.3520, 18.6466] }, // Ciudad portuaria con enfoque en tecnología e innovación, especialmente en ingeniería y TI
                { name: "Łódź", coords: [51.7592, 19.4560] }, // Importante en el sector de las tecnologías emergentes y la inteligencia artificial
                { name: "Katowice", coords: [50.2649, 19.0238] }, // Ciudad con una gran transformación hacia la industria de TI y tecnología avanzada
                { name: "Szczecin", coords: [53.4289, 14.5528] }, // Ciudad portuaria con un creciente ecosistema de startups y tecnología
                { name: "Bydgoszcz", coords: [53.1235, 18.0084] }, // Centro tecnológico emergente con un enfoque en ingeniería y servicios TI
                { name: "Rzeszów", coords: [50.0415, 22.0055] } // Ciudad con un ecosistema tecnológico en crecimiento, especialmente en ingeniería y tecnología espacial
            ]
        },
        "Czech Republic": {
            isoCode: "CZ",
            center: [49.8175, 15.4730],
            cities: [
                { name: "Praga", coords: [50.0755, 14.4378] }, // Capital de la República Checa, importante hub de startups y tecnología en Europa Central
                { name: "Brno", coords: [49.1951, 16.6068] }, // Ciudad con un fuerte enfoque en innovación tecnológica, especialmente en software y hardware
                { name: "Ostrava", coords: [49.8345, 18.2926] }, // Ciudad industrial con un creciente sector tecnológico, especialmente en automotriz y energía
                { name: "Plzeň", coords: [49.7475, 13.3775] }, // Famosa por su industria cervecera, pero también con un creciente sector de ingeniería y TI
                { name: "Liberec", coords: [50.7703, 15.0583] }, // Ciudad con un fuerte enfoque en el desarrollo de software y nuevas tecnologías
                { name: "Hradec Králové", coords: [50.2090, 15.8254] }, // Ciudad con una creciente presencia en el sector de TI y universidades de investigación
                { name: "Olomouc", coords: [49.5951, 17.2517] }, // Ciudad universitaria con énfasis en investigación y desarrollo tecnológico
                { name: "Zlín", coords: [49.2258, 17.6620] }, // Ciudad con un sector tecnológico emergente centrado en el diseño y la innovación
                { name: "Mladá Boleslav", coords: [50.4131, 14.9067] }, // Foco en la industria automotriz y tecnología avanzada con un creciente sector de TI
                { name: "Karlovy Vary", coords: [50.2315, 12.8761] } // Ciudad conocida por su turismo, pero con un enfoque creciente en tecnología y ciencias de la vida
            ]
        },
        "Austria": {
            isoCode: "AT",
            center: [47.5162, 14.5501],
            cities: [
                { name: "Viena", coords: [48.2082, 16.3738] }, // Capital de Austria, centro tecnológico con una fuerte presencia en TI y startups
                { name: "Graz", coords: [47.0707, 15.4395] }, // Ciudad con enfoque en investigación tecnológica y universidades de alto nivel
                { name: "Linz", coords: [48.3064, 14.2861] }, // Ciudad con un fuerte sector industrial y tecnológico, especialmente en software y automatización
                { name: "Salzburgo", coords: [47.8095, 13.0550] }, // Ciudad cultural con un creciente enfoque en tecnología y servicios digitales
                { name: "Innsbruck", coords: [47.2682, 11.3923] }, // Ciudad con un fuerte enfoque en la investigación tecnológica y la innovación
                { name: "St. Pölten", coords: [48.2057, 15.6255] }, // Centro emergente para startups tecnológicas y empresas de TI
                { name: "Klagenfurt", coords: [46.6240, 14.3055] }, // Ciudad pequeña pero con un sector creciente de tecnología e innovación
                { name: "Villach", coords: [46.6100, 13.8553] }, // Foco en la tecnología de semiconductores y fabricación avanzada
                { name: "Wiener Neustadt", coords: [47.8125, 16.2513] } // Ciudad en desarrollo tecnológico con énfasis en ingeniería y automatización
            ]
        },
        "Ireland": {
            isoCode: "IE",
            center: [53.1424, -7.6921],
            cities: [
                { name: "Dublín", coords: [53.3498, -6.2603] }, // Centro tecnológico de Irlanda, sede de grandes empresas de TI como Google, Facebook, y Amazon
                { name: "Cork", coords: [51.8979, -8.4756] }, // Hub tecnológico creciente con presencia de empresas de software y biotecnología
                { name: "Galway", coords: [53.2707, -9.0568] }, // Ciudad en crecimiento con énfasis en la tecnología médica y la investigación
                { name: "Limerick", coords: [52.6680, -8.6268] }, // Foco de tecnología y desarrollo en áreas como la ingeniería y el software
                { name: "Waterford", coords: [52.2588, -7.1101] }, // Ciudad con creciente sector tecnológico y startups de TI
                { name: "Kilkenny", coords: [52.6542, -7.2529] }, // Enfocada en innovación, especialmente en tecnologías creativas y diseño digital
                { name: "Sligo", coords: [54.2762, -8.4756] }, // Ciudad que impulsa las tecnologías digitales, especialmente en desarrollo de software y TI
                { name: "Drogheda", coords: [53.7219, -6.3430] } // Foco de innovación en tecnología, con un creciente ecosistema digital
            ]
        },
        "Switzerland": {
            isoCode: "CH",
            center: [46.8182, 8.2275],
            cities: [
                { name: "Zurich", coords: [47.3769, 8.5417] }, // Centro financiero y tecnológico de Suiza, hub de IA y fintech
                { name: "Ginebra", coords: [46.2044, 6.1432] }, // Ciudad internacional, foco en tecnología para organismos internacionales
                { name: "Basel", coords: [47.5596, 7.5886] }, // Fuerte en biotecnología, farmacéutica y tecnología médica
                { name: "Berna", coords: [46.9481, 7.4474] }, // Capital de Suiza, con innovación tecnológica en administración pública
                { name: "Lausana", coords: [46.5191, 6.6333] }, // Ciudad universitaria con fuerte enfoque en investigación tecnológica
                { name: "Lucerna", coords: [47.0502, 8.3093] }, // Creciente en tecnologías de la información y comunicaciones
                { name: "St. Gallen", coords: [47.4236, 9.3755] }, // Ciudad emergente en tecnologías financieras y software
                { name: "Zug", coords: [47.1767, 8.5155] }, // Conocida como "Crypto Valley" por su enfoque en blockchain y criptomonedas
                { name: "Winterthur", coords: [47.4990, 8.7242] }, // Enfocada en la automatización, la ingeniería y la tecnología industrial
                { name: "Thun", coords: [46.7591, 7.6277] } // Centro de innovación en tecnologías sostenibles y energías renovables
            ]
        },
        "United States": {
            isoCode: "US",
            center: [37.0902, -95.7129],
            cities: [
                { name: "San Francisco", coords: [37.7749, -122.4194] }, // Epicentro de la tecnología y startups en Silicon Valley
                { name: "Seattle", coords: [47.6062, -122.3321] }, // Centro de innovación tecnológica y gigante de la nube (Amazon, Microsoft)
                { name: "New York", coords: [40.7128, -74.0060] }, // Hub financiero y tecnológico, gran ecosistema de startups
                { name: "Austin", coords: [30.2672, -97.7431] }, // Rápido crecimiento en tecnología y sede de importantes empresas tecnológicas
                { name: "Boston", coords: [42.3601, -71.0589] }, // Ciudad con fuerte presencia de universidades e innovación en IA
                { name: "Los Angeles", coords: [34.0522, -118.2437] }, // Ciudad global con enfoque en entretenimiento y tecnología avanzada
                { name: "Chicago", coords: [41.8781, -87.6298] }, // Centro de innovación en la industria tecnológica y los datos
                { name: "Denver", coords: [39.7392, -104.9903] }, // Enfoque en tecnologías emergentes y startups tecnológicas
                { name: "Washington, D.C.", coords: [38.9072, -77.0369] }, // Capital tecnológica con énfasis en ciberseguridad y políticas tecnológicas
                { name: "San Diego", coords: [32.7157, -117.1611] }, // Innovación en biotecnología, telecomunicaciones y ciberseguridad
                { name: "Dallas", coords: [32.7767, -96.7970] }, // Rápido crecimiento en tecnología, datos y redes
                { name: "Miami", coords: [25.7617, -80.1918] }, // Enfoque emergente en innovación tecnológica y empresas tecnológicas
                { name: "Atlanta", coords: [33.7490, -84.3880] }, // Hub tecnológico creciente con enfoque en software, ciberseguridad y IA
                { name: "Phoenix", coords: [33.4484, -112.0740] }, // Rápido crecimiento en tecnología de datos y desarrollo de software
                { name: "Detroit", coords: [42.3314, -83.0458] }, // Reconstrucción tecnológica en el sector automotriz, con enfoque en tecnología avanzada
                { name: "Minneapolis", coords: [44.9778, -93.2650] }, // Enfoque en la tecnología médica y nuevas startups
                { name: "Portland", coords: [45.5152, -122.6784] }, // Hub tecnológico con enfoque en sostenibilidad y tecnología limpia
                { name: "Salt Lake City", coords: [40.7608, -111.8910] }, // Crecimiento tecnológico con enfoque en software y ciberseguridad
                { name: "Charlotte", coords: [35.2271, -80.8431] }, // Emergente en innovación tecnológica y fintech
                { name: "Raleigh", coords: [35.7796, -78.6382] }, // Ciudad tecnológica con un enfoque en software y biotecnología
                { name: "Orlando", coords: [28.5383, -81.3792] }, // Creciente en la industria de tecnología de entretenimiento y videojuegos
                { name: "Indianapolis", coords: [39.7684, -86.1580] }, // Crecimiento en el sector tecnológico y salud
                { name: "Tampa", coords: [27.9506, -82.4572] }, // Fuerte crecimiento en tecnología y startups
                { name: "Nashville", coords: [36.1627, -86.7816] }, // Crecimiento en la industria de la salud, tecnología y software
                { name: "Las Vegas", coords: [36.1699, -115.1398] }, // Innovación en tecnología de entretenimiento y telecomunicaciones
                { name: "Philadelphia", coords: [39.9526, -75.1652] } // Crecimiento tecnológico y educativo en IA y software
            ]
        },
        "Canada": {
            isoCode: "CA",
            center: [56.1304, -106.3468],
            cities: [
                { name: "Toronto", coords: [43.6517, -79.3832] }, // Centro tecnológico y financiero, hub de startups
                { name: "Vancouver", coords: [49.2827, -123.1207] }, // Ciudad innovadora en tecnología y ciberseguridad
                { name: "Montreal", coords: [45.5017, -73.5673] }, // Destino para inteligencia artificial y desarrollo de software
                { name: "Ottawa", coords: [45.4215, -75.6972] }, // Capital con fuerte presencia en tecnología gubernamental y ciberseguridad
                { name: "Calgary", coords: [51.0447, -114.0719] }, // Enfoque en tecnología en energía y datos
                { name: "Edmonton", coords: [53.5444, -113.4909] }, // Centro de innovación en inteligencia artificial y tecnologías verdes
                { name: "Quebec", coords: [46.8139, -71.2082] }, // Desarrollo tecnológico en el sector educativo y ciberseguridad
                { name: "Winnipeg", coords: [49.8951, -97.1384] }, // Enfoque en tecnologías emergentes y desarrollo de software
                { name: "Halifax", coords: [44.6488, -63.5752] }, // Hub tecnológico en la costa este, con enfoque en ciberseguridad
                { name: "Waterloo", coords: [43.4643, -80.5204] }, // Famosa por ser hogar de grandes empresas de tecnología y universidades
                { name: "Kitchener", coords: [43.4516, -80.4925] }, // Ciudad con fuerte presencia de startups tecnológicas y en IA
                { name: "Hamilton", coords: [43.2557, -79.8711] } // Enfoque en la innovación en ingeniería y tecnologías industriales
            ]
        },
        "New Zealand": {
            isoCode: "NZ",
            center: [-40.9006, 174.8860],
            cities: [
                { name: "Auckland", coords: [-36.8485, 174.7633] }, // Principal hub tecnológico y financiero
                { name: "Wellington", coords: [-41.2867, 174.7762] }, // Centro gubernamental con énfasis en ciberseguridad
                { name: "Christchurch", coords: [-43.5321, 172.6362] }, // Innovación en tecnología agrícola y software
                { name: "Hamilton", coords: [-37.7870, 175.2793] }, // Crecimiento en tecnología y educación STEM
                { name: "Dunedin", coords: [-45.8788, 170.5028] }, // Investigación en biotecnología y tecnología de la salud
                { name: "Tauranga", coords: [-37.6871, 176.1650] }, // Desarrollo en tecnología de la logística
                { name: "Napier-Hastings", coords: [-39.4913, 176.9121] }, // Innovación en sostenibilidad y tecnología agrícola
                { name: "Queenstown", coords: [-45.0312, 168.6626] }, // Turismo digital y desarrollo de software
                { name: "Whangarei", coords: [-35.7374, 174.3233] }, // Crecimiento en la tecnología de energías renovables
                { name: "Invercargill", coords: [-46.4140, 168.3490] } // Enfoque en tecnología de la industria pesada
            ]
        },
        "Australia": {
            isoCode: "AU",
            center: [-25.2744, 133.7751],
            cities: [
                { name: "Sídney", coords: [-33.8688, 151.2093] }, // Centro tecnológico y financiero de Australia
                { name: "Melbourne", coords: [-37.8136, 144.9631] }, // Fuerte en innovación y ciberseguridad
                { name: "Brisbane", coords: [-27.4698, 153.0251] }, // Crecimiento en startups tecnológicas
                { name: "Perth", coords: [-31.9505, 115.8605] }, // Tecnología aplicada a energía y minería
                { name: "Adelaida", coords: [-34.9285, 138.6007] }, // Innovación en automatización y software
                { name: "Canberra", coords: [-35.2809, 149.1300] }, // Capital con enfoque en ciberseguridad
                { name: "Hobart", coords: [-42.8821, 147.3272] }, // Tecnología en turismo e innovación social
                { name: "Gold Coast", coords: [-28.0167, 153.4000] }, // Educación digital y entretenimiento
                { name: "Newcastle", coords: [-32.9272, 151.7817] }, // Tecnología en transporte y energías renovables
                { name: "Geelong", coords: [-38.1499, 144.3617] }, // Manufactura avanzada y tecnología
                { name: "Cairns", coords: [-16.9203, 145.7710] }, // Turismo digital y sostenibilidad
                { name: "Wollongong", coords: [-34.4278, 150.8931] }, // Investigación tecnológica e industria
                { name: "Darwin", coords: [-12.4634, 130.8456] } // Crecimiento en tecnología y minería
            ]
        },
        "Japan": {
            isoCode: "JP",
            center: [36.2048, 138.2529],
            cities: [
                { name: "Tokio", coords: [35.6762, 139.6503] },
                { name: "Osaka", coords: [34.6937, 135.5023] },
                { name: "Kioto", coords: [35.0116, 135.7681] },
                { name: "Yokohama", coords: [35.4437, 139.6370] }, // Ciudad importante para la tecnología y la innovación
                { name: "Sapporo", coords: [43.0618, 141.3545] }, // Ciudad en crecimiento tecnológico
                { name: "Fukuoka", coords: [33.5902, 130.4017] }, // Conocida por su sector tecnológico
                { name: "Kobe", coords: [34.6901, 135.1955] }, // Otro hub tecnológico cerca de Osaka
                { name: "Nagoya", coords: [35.1815, 136.9066] }, // Ciudad tecnológica clave, especialmente en la automoción
                { name: "Hiroshima", coords: [34.3853, 132.4553] }, // Importante en áreas de innovación y educación
                { name: "Sendai", coords: [38.2682, 140.8694] }, // Conocida por su énfasis en investigación y tecnología
                { name: "Chiba", coords: [35.6074, 140.1063] }, // Ciudad cercana a Tokio con centros tecnológicos emergentes
                { name: "Kawasaki", coords: [35.5147, 139.7178] }, // Parte del área metropolitana de Tokio, relevante para la tecnología
            ]
        },
        "Italy": { 
            isoCode: "IT",
            center: [41.8719, 12.5674],
            cities: [
                { name: "Roma", coords: [41.9028, 12.4964] }, // Capital de Italia, centro cultural y tecnológico
                { name: "Milán", coords: [45.4642, 9.1900] }, // Ciudad líder en innovación, moda, y tecnología
                { name: "Nápoles", coords: [40.8522, 14.2681] }, // Importante en el sector tecnológico y educativo
                { name: "Turín", coords: [45.0703, 7.6869] }, // Ciudad industrial, importante en automoción y tecnología
                { name: "Venecia", coords: [45.4408, 12.3155] }, // Famosa por su turismo, pero también con un enfoque en la innovación
                { name: "Florencia", coords: [43.7696, 11.2558] }, // Ciudad cultural y educativa, con universidades tecnológicas
                { name: "Génova", coords: [44.4056, 8.9463] }, // Puerto importante con actividades tecnológicas en logística
                { name: "Bolonia", coords: [44.4937, 11.3426] }, // Ciudad con universidades e innovación tecnológica
                { name: "Pisa", coords: [43.7167, 10.4000] }, // Famosa por la Universidad de Pisa y su investigación tecnológica
                { name: "Catania", coords: [37.5079, 15.0830] }, // Creciente en tecnología y educación en el sur de Italia
                { name: "Palermo", coords: [38.1157, 13.3615] }, // Ciudad con un enfoque creciente en innovación tecnológica
                { name: "Bari", coords: [41.1253, 16.8690] }, // Centro emergente en el sector tecnológico del sur
                { name: "Reggio Calabria", coords: [38.1103, 15.6613] }, // Con un enfoque creciente en tecnología y educación
                { name: "Trieste", coords: [45.6495, 13.7768] }, // Ciudad con universidades tecnológicas de gran prestigio
                { name: "Cagliari", coords: [39.2238, 9.1217] } // Centro emergente de innovación tecnológica en Cerdeña
            ]
        },
        "Norway": {
            isoCode: "NO",
            center: [60.4720, 8.4689],
            cities: [
                { name: "Oslo", coords: [59.9139, 10.7522] }, // Capital de Noruega, centro de tecnología, startups y fintech
                { name: "Bergen", coords: [60.3929, 5.3242] }, // Ciudad clave en el sector de la tecnología marina y medioambiental
                { name: "Stavanger", coords: [58.9690, 5.7331] }, // Fuerte enfoque en tecnologías energéticas, especialmente en energía renovable
                { name: "Trondheim", coords: [63.4305, 10.3951] }, // Ciudad universitaria con un enfoque en investigación tecnológica y programación
                { name: "Drammen", coords: [59.7439, 10.2045] }, // En crecimiento en el ámbito tecnológico y digital, especialmente en la inteligencia artificial
                { name: "Tromsø", coords: [69.6496, 18.9560] }, // Ciudad enfocada en la investigación tecnológica en áreas polares y cambio climático
                { name: "Kristiansand", coords: [58.1439, 7.9956] }, // Foco emergente en tecnología ambiental y energías renovables
                { name: "Porsgrunn", coords: [59.1231, 9.0618] }, // Ciudad con enfoque en la industria tecnológica aplicada a la ingeniería y automatización
                { name: "Ålesund", coords: [62.4720, 6.1533] }, // Enfocada en la tecnología marina y sostenibilidad
                { name: "Sandnes", coords: [58.8530, 5.7340] } // Ciudad que está desarrollando un sector tecnológico creciente en automatización y TI
            ]
        },
        "France": {
            isoCode: "FR",
            center: [46.6034, 1.8883],
            cities: [
                { name: "París", coords: [48.8566, 2.3522] }, // Capital tecnológica de Francia, con un fuerte enfoque en startups, IA y tecnología financiera
                { name: "Lyon", coords: [45.7640, 4.8357] }, // Ciudad clave en biotecnología, software y desarrollo industrial
                { name: "Toulouse", coords: [43.6047, 1.4442] }, // Centro aeroespacial y de ingeniería, hogar de Airbus
                { name: "Niza", coords: [43.7102, 7.2620] }, // Ciudad emergente en tecnología digital, con un fuerte sector de software y servicios tecnológicos
                { name: "Marsella", coords: [43.2965, 5.3698] }, // Importante en el sector de la inteligencia artificial y la tecnología marina
                { name: "Burdeos", coords: [44.8378, -0.5792] }, // Ciudad destacada en investigación y desarrollo tecnológico, especialmente en áreas de innovación y software
                { name: "Lille", coords: [50.6292, 3.0573] }, // Enfocada en tecnología digital, con un creciente ecosistema de startups
                { name: "Nantes", coords: [47.2186, -1.5536] }, // Ciudad con un ecosistema tecnológico creciente en áreas de TI y sostenibilidad
                { name: "Grenoble", coords: [45.1885, 5.7245] }, // Famosa por su innovación en tecnología energética y de semiconductores
                { name: "Strasburgo", coords: [48.5734, 7.7521] }, // Con un fuerte enfoque en tecnologías medioambientales y de investigación
                { name: "Rennes", coords: [48.1173, -1.6778] }, // Importante en software y telecomunicaciones, con un ecosistema dinámico de startups
                { name: "Montpellier", coords: [43.6117, 3.8777] }, // En crecimiento en biotecnología, software y tecnología médica
                { name: "Aix-en-Provence", coords: [43.5297, 5.4474] }, // Famosa por su investigación en inteligencia artificial y tecnología de software
                { name: "Tours", coords: [47.3499, 0.6923] }, // Ciudad con enfoque emergente en tecnologías del software y servicios tecnológicos
                { name: "Le Havre", coords: [49.4944, 0.1079] }, // Enfocada en la logística y tecnología aplicada al transporte y comercio
                { name: "Avignon", coords: [43.9493, 4.8055] } // Ciudad creciente en el sector digital, especialmente en el desarrollo de software
            ]
        },
        "United Kingdom": {
            isoCode: "GB",
            center: [55.3781, -3.4360],
            cities: [
                { name: "Londres", coords: [51.5074, -0.1278] }, // Capital financiera y tecnológica, líder en fintech, IA y startups
                { name: "Manchester", coords: [53.4808, -2.2426] }, // Hub de innovación tecnológica, especialmente en IA y software
                { name: "Birmingham", coords: [52.4862, -1.8904] }, // Ciudad en crecimiento en tecnología y servicios digitales
                { name: "Edimburgo", coords: [55.9533, -3.1883] }, // Destino emergente en tecnología financiera (fintech) y ciencia de datos
                { name: "Bristol", coords: [51.4545, -2.5879] }, // Famosa por su ecosistema tecnológico en robótica, aeroespacial y software
                { name: "Cambridge", coords: [52.2053, 0.1218] }, // Ciudad de renombre en investigación tecnológica y universidades punteras
                { name: "Oxford", coords: [51.7547, -1.2544] }, // Ciudad académica con un fuerte enfoque en investigación tecnológica
                { name: "Leeds", coords: [53.8008, -1.5491] }, // Importante en tecnología digital, IA y fintech
                { name: "Glasgow", coords: [55.8642, -4.2518] }, // Ciudad con un enfoque en la tecnología médica, software y desarrollo de TI
                { name: "Sheffield", coords: [53.3811, -1.4701] }, // Centro en tecnologías de la ingeniería, manufactura avanzada y software
                { name: "Liverpool", coords: [53.4084, -2.9916] }, // Ciudad emergente en el sector tecnológico, con un enfoque en IA y software
                { name: "Newcastle upon Tyne", coords: [54.9784, -1.6174] }, // Con un ecosistema tecnológico creciente en el sector digital y TI
                { name: "Leicester", coords: [52.6369, -1.1398] }, // Fuerte en innovación digital, especialmente en tecnología de datos y software
                { name: "Cardiff", coords: [51.4816, -3.1791] }, // Ciudad en crecimiento en el sector de TI, software y tecnología verde
                { name: "Nottingham", coords: [52.9548, -1.1581] }, // Emergente en tecnología digital, con un enfoque en startups tecnológicas
                { name: "Reading", coords: [51.4543, -0.9784] }, // Destino para empresas tecnológicas y de telecomunicaciones
                { name: "Aberdeen", coords: [57.1497, -2.0943] }, // Importante en tecnología energética, especialmente en energía renovable y tecnología marítima.
                { name: "Dundee", coords: [56.4620, -2.9707] }, // Ciudad conocida por su innovación en tecnología de videojuegos, software y la creciente industria digital.
                { name: "Belfast", coords: [54.5973, -5.9301] } // Capital de Irlanda del Norte, conocida por su sector tecnológico emergente y su enfoque en la ingeniería y la innovación.
            ]
        },
        "Estonia": {
            isoCode: "EE",
            center: [58.5953, 25.0136],
            cities: [
                { name: "Tallin", coords: [59.4370, 24.7535] }, // Capital y centro tecnológico, conocido por su liderazgo en e-Government y startups
                { name: "Tartu", coords: [58.3784, 26.7273] }, // Ciudad universitaria con un fuerte enfoque en investigación tecnológica y startups
                { name: "Narva", coords: [59.3792, 28.1903] }, // Ciudad emergente en tecnología con énfasis en innovación digital y TI
                { name: "Pärnu", coords: [58.3833, 24.5000] }, // En desarrollo en el sector tecnológico, especialmente en startups y tecnología de la información
                { name: "Jõhvi", coords: [59.3799, 27.3911] } // Ciudad en crecimiento, con un enfoque en la transformación digital y la tecnología industrial
            ]
        },
        "Belgium": {
            isoCode: "BE",
            center: [50.8503, 4.3517],
            cities: [
                { name: "Bruselas", coords: [50.8503, 4.3517] }, // Capital de Bélgica y de la UE, centro neurálgico de la tecnología, startups y organizaciones internacionales
                { name: "Gante", coords: [51.0543, 3.7174] }, // Ciudad universitaria con un fuerte enfoque en la innovación tecnológica y la investigación en IA
                { name: "Amberes", coords: [51.2602, 4.4028] }, // Ciudad tecnológica emergente, con énfasis en el sector de la moda y las tecnologías digitales
                { name: "Lovaina", coords: [50.8794, 4.7005] }, // Ciudad universitaria con importantes desarrollos en ciencia y tecnología, especialmente en investigación
                { name: "Lieja", coords: [50.6326, 5.5797] }, // Ciudad industrial con un enfoque creciente en la tecnología e innovación, con énfasis en la automatización y TI
                { name: "Namur", coords: [50.4682, 4.8679] }, // Ciudad emergente con un enfoque creciente en el sector digital y la innovación tecnológica
                { name: "Leuven", coords: [50.8794, 4.7005] } // Ciudad universitaria con una fuerte comunidad tecnológica y centro de investigación en inteligencia artificial
            ]
        },
        "Uruguay": {
            isoCode: "UY",
            center: [-32.5228, -55.7658],
            cities: [
                { name: "Montevideo", coords: [-34.9011, -56.1645] }, // Capital de Uruguay, centro tecnológico y económico, con un fuerte enfoque en el desarrollo de TI y startups
                { name: "Punta del Este", coords: [-34.9670, -54.9501] }, // Ciudad conocida por su turismo y crecimiento en el sector de las tecnologías digitales y el emprendimiento
                { name: "Salto", coords: [-31.3833, -57.9667] }, // Ciudad en crecimiento con iniciativas tecnológicas centradas en la educación y el desarrollo digital
                { name: "Colonia del Sacramento", coords: [-34.4749, -57.6617] }, // Aunque más turística, está viendo un crecimiento en el sector digital, especialmente en comercio electrónico
                { name: "Paysandú", coords: [-32.3217, -58.0769] }, // Ciudad con creciente enfoque en tecnología y su integración en la educación y la industria
                { name: "Maldonado", coords: [-34.9000, -54.9500] } // Ciudad en el sur del país, conocida por su creciente infraestructura para el sector tecnológico y las startups
            ]
        },
        "Greece": {
            isoCode: "GR",
            center: [37.9838, 23.7275], // Coordenadas aproximadas del centro de Grecia
            cities: [
                { name: "Athens", coords: [37.9838, 23.7275] }, // Centro tecnológico y de startups, con empresas de software y ciberseguridad en crecimiento
                { name: "Thessaloniki", coords: [40.6401, 22.9444] }, // Ecosistema de startups en crecimiento, fuerte en tecnología e innovación
                { name: "Patras", coords: [38.2466, 21.7346] }, // Importante en investigación tecnológica y desarrollo de software
                { name: "Heraklion", coords: [35.3387, 25.1442] }, // Fuerte en TI, con instituciones de investigación en ciberseguridad
                { name: "Chania", coords: [35.5138, 24.0180] }, // Crecimiento en innovación tecnológica y startups de software
                { name: "Larissa", coords: [39.6390, 22.4200] }, // Ciudad en desarrollo con iniciativas tecnológicas emergentes
                { name: "Ioannina", coords: [39.6650, 20.8509] }, // Importante en educación tecnológica y sector de TI en crecimiento
                { name: "Volos", coords: [39.3620, 22.9426] }, // Desarrollo en TI y presencia de startups digitales
                { name: "Rhodes", coords: [36.4349, 28.2176] }, // Enfoque en innovación digital y soluciones tecnológicas
                { name: "Kavala", coords: [40.9371, 24.4120] } // Creciente en tecnología e innovación en el sector digital
            ]
        },

        "Argentina": {
            isoCode: "AR",
            center: [-38.4161, -63.6167],
            cities: [
                { name: "Buenos Aires", coords: [-34.6037, -58.3816] }, // Capital de Argentina, hub tecnológico principal del país, con una gran cantidad de startups y empresas tecnológicas
                { name: "Córdoba", coords: [-31.4201, -64.1888] }, // Ciudad importante en tecnología y educación, con universidades destacadas en el ámbito tecnológico
                { name: "Rosario", coords: [-32.9468, -60.6393] }, // Ciudad en crecimiento con un sector tecnológico emergente, con énfasis en software y servicios digitales
                { name: "Mendoza", coords: [-32.8895, -68.8440] }, // Con un sector tecnológico en expansión, especialmente en software y e-commerce
                { name: "La Plata", coords: [-34.9214, -57.9544] }, // Ciudad universitaria con un fuerte enfoque en investigación tecnológica e innovación
                { name: "Mar del Plata", coords: [-38.0055, -57.5420] }, // Ciudad con crecimiento en tecnología y comercio electrónico, en especial con el turismo
                { name: "Tucumán", coords: [-26.8043, -65.2176] }, // Ciudad emergente en tecnología, con un fuerte enfoque en el desarrollo digital y la educación
                { name: "Neuquén", coords: [-38.9516, -68.0591] }, // Ciudad con crecimiento en innovación tecnológica y digitalización de la industria petrolera y energética
                { name: "Bahía Blanca", coords: [-38.7199, -60.6091] }, // Ciudad con un creciente sector tecnológico relacionado con la educación y el software
                { name: "San Juan", coords: [-31.5375, -68.5364] }, // Ciudad con una creciente infraestructura para startups y empresas tecnológicas emergentes
                { name: "San Luis", coords: [-33.2957, -66.3350] } // Ciudad que está desarrollando proyectos de innovación y tecnología enfocados en el crecimiento digital
            ]
        },
        "Chile": {
            isoCode: "CL",
            center: [-35.6751, -71.5430],
            cities: [
                { name: "Santiago", coords: [-33.4489, -70.6693] }, // Capital de Chile y principal hub tecnológico, con una gran cantidad de startups y empresas de software
                { name: "Valparaíso", coords: [-33.0467, -71.6197] }, // Ciudad portuaria que también alberga empresas tecnológicas emergentes y proyectos de innovación
                { name: "Concepción", coords: [-36.8268, -73.0498] }, // Ciudad universitaria con un ecosistema de innovación, enfocada en la tecnología y el desarrollo de software
                { name: "La Serena", coords: [-29.9024, -71.2493] }, // Ciudad en crecimiento con un sector tecnológico en expansión, especialmente en desarrollo web y digitalización
                { name: "Antofagasta", coords: [-23.6500, -70.4000] }, // Ciudad importante en minería y tecnología, con proyectos en automatización y digitalización de la industria
                { name: "Temuco", coords: [-38.7357, -72.5955] }, // Ciudad con una creciente infraestructura tecnológica, especialmente en servicios IT y comercio electrónico
                { name: "Rancagua", coords: [-34.1700, -70.7400] }, // Ciudad con un sector emergente en tecnologías relacionadas con la industria y la educación
                { name: "Iquique", coords: [-20.2306, -70.1398] }, // Ciudad en crecimiento con un enfoque en tecnología aplicada a la minería y el comercio
                { name: "Puerto Montt", coords: [-41.4680, -72.9444] }, // Ciudad con un enfoque en innovación tecnológica, especialmente en el sector pesquero y marítimo
                { name: "Copiapó", coords: [-27.3664, -70.3330] } // Ciudad minera con creciente interés en tecnología para automatización e innovación en la industria
            ]
        },
        "El Salvador": {
            isoCode: "SV",
            center: [13.7942, -88.8965],
            cities: [
                { name: "San Salvador", coords: [13.6925, -89.2182] }, // Capital de El Salvador y centro tecnológico más importante, con un creciente ecosistema de startups y empresas tecnológicas
                { name: "Santa Ana", coords: [13.9866, -89.5537] }, // Ciudad en crecimiento con un enfoque emergente en el desarrollo de software y soluciones tecnológicas
                { name: "San Miguel", coords: [13.4833, -88.1833] }, // Ciudad con un sector tecnológico en expansión, especialmente en comercio electrónico y servicios digitales
                { name: "La Libertad", coords: [13.4904, -89.2959] }, // Ciudad costera en expansión con un creciente número de empresas tecnológicas y startups enfocadas en tecnología digital
                { name: "Sonsonate", coords: [13.7217, -89.2185] }, // Ciudad con un ecosistema emergente de emprendimiento tecnológico, con énfasis en la formación de capital humano en tecnología
                { name: "Ahuachapán", coords: [13.9478, -89.9081] }, // Ciudad que está apostando por la innovación tecnológica y servicios IT, especialmente en el sector agrícola
                { name: "Usulután", coords: [13.3261, -88.4416] }, // Ciudad con un pequeño pero creciente ecosistema de tecnología aplicado a la agricultura y la digitalización de procesos
                { name: "Santa Tecla", coords: [13.7383, -89.2909] }, // Ciudad aledaña a San Salvador que se está posicionando como un punto clave en innovación tecnológica y startups
            ]
        },
        "Croatia": {
            isoCode: "HR",
            center: [45.1, 15.2],
            cities: [
                { name: "Zagreb", coords: [45.8131, 15.978], }, // Capital de Croacia, centro tecnológico clave con una fuerte presencia de startups y empresas tecnológicas
                { name: "Split", coords: [43.5081, 16.4402], }, // Ciudad costera con un creciente sector de TI y emprendimiento digital
                { name: "Rijeka", coords: [45.327, 14.442], }, // Ciudad portuaria con un enfoque creciente en la digitalización y la industria tecnológica
                { name: "Osijek", coords: [45.5511, 18.6921], }, // Ciudad universitaria con un ecosistema emergente de tecnología e innovación
                { name: "Zadar", coords: [44.1194, 15.2314], }, // Ciudad con un creciente interés en la tecnología digital, especialmente en soluciones para el sector turístico
                { name: "Pula", coords: [44.8686, 13.8486], }, // Ciudad que está apostando por la innovación tecnológica, especialmente en turismo y comercio electrónico
                { name: "Dubrovnik", coords: [42.6401, 18.1103], }, // Aunque es más conocida por su turismo, la ciudad está empezando a recibir inversiones en startups tecnológicas
                { name: "Karlovac", coords: [45.4856, 15.5532], }, // Ciudad en crecimiento con un interés creciente en la tecnología aplicada a la agricultura y la sostenibilidad
                { name: "Varaždin", coords: [46.3036, 16.3376], }, // Ciudad con un sector tecnológico emergente, especialmente en educación y TI
                { name: "Šibenik", coords: [43.7371, 15.8882], } // Ciudad costera que está desarrollando un enfoque en la digitalización de procesos turísticos y la tecnología verde
            ]
        },
        "Puerto Rico": {
            isoCode: "PR",
            center: [18.2208, -66.5902],
            cities: [
                { name: "San Juan", coords: [18.4655, -66.1057], }, // Capital de Puerto Rico, centro principal de tecnología, innovación y startups
                { name: "Ponce", coords: [17.9784, -66.9733], }, // Ciudad con un enfoque en la tecnología en el sector educativo y cultural
                { name: "Bayamón", coords: [18.1996, -66.1510], }, // Ciudad con un creciente sector de tecnología e innovación en infraestructura y servicios digitales
                { name: "Arecibo", coords: [18.4689, -66.9967], }, // Centro de investigación científica y tecnológica, con un enfoque en la astronomía y la física
                { name: "Caguas", coords: [18.2275, -66.0451], }, // Ciudad con un crecimiento en el sector tecnológico, especialmente en servicios digitales y e-commerce
                { name: "Mayagüez", coords: [18.2039, -67.1383], }, // Ciudad universitaria con un enfoque en la educación tecnológica y la investigación científica
                { name: "Carolina", coords: [18.3802, -65.9788], }, // Ciudad con creciente enfoque en la innovación tecnológica en el sector comercial y de servicios
                { name: "Fajardo", coords: [18.3436, -65.6344], }, // Ciudad costera con potencial en la tecnología aplicada al turismo y la sostenibilidad
                { name: "Vega Baja", coords: [18.4392, -66.2261], }, // Ciudad con un enfoque emergente en la digitalización y la tecnología aplicada a la agricultura
                { name: "Humacao", coords: [18.1500, -65.8761], } // Ciudad en crecimiento con un enfoque en la tecnología y la sostenibilidad en el sector turístico
            ]
        },
        "Israel": {
            isoCode: "IL",
            center: [31.0461, 34.8516],
            cities: [
                { name: "Tel Aviv", coords: [32.0853, 34.7818], }, // Ciudad tecnológica líder, conocida como "el Silicon Valley de Oriente Medio"
                { name: "Jerusalén", coords: [31.7683, 35.2137], }, // Ciudad con un importante ecosistema tecnológico y de innovación, especialmente en ciberseguridad y software
                { name: "Haifa", coords: [32.7940, 34.9896], }, // Centro de innovación tecnológica en Israel, especialmente en tecnología médica y de seguridad cibernética
                { name: "Rishon LeZion", coords: [31.9711, 34.8025], }, // Ciudad con un importante sector tecnológico emergente, en especial en e-commerce y startups
                { name: "Netanya", coords: [32.3215, 34.8565], }, // Ciudad en crecimiento tecnológico, con enfoque en tecnología digital y empresas de software
                { name: "Beer Sheva", coords: [31.2518, 34.7913], }, // Centro emergente de innovación, especialmente en ciberseguridad y empresas de alta tecnología
                { name: "Herzliya", coords: [32.1665, 34.8410], }, // Ciudad conocida por su concentración de empresas tecnológicas, startups y centros de investigación
                { name: "Petah Tikva", coords: [32.0856, 34.8888], }, // Ciudad tecnológica clave, con varias empresas líderes en software y alta tecnología
                { name: "Eilat", coords: [29.5574, 34.9519], }, // Aunque es más conocida por el turismo, está emergiendo como un centro de innovación tecnológica y startups
                { name: "Kiryat Shmona", coords: [33.2080, 35.5662], } // Ciudad en el norte de Israel, con proyectos tecnológicos enfocados en ciberseguridad y alta tecnología
            ]
        },
        "South Korea": {
            isoCode: "KR",
            center: [36.5665, 127.9783],
            cities: [
                { name: "Seúl", coords: [37.5665, 126.9780], }, // La capital tecnológica de Corea del Sur, líder en innovación digital, inteligencia artificial y telecomunicaciones
                { name: "Busan", coords: [35.1796, 129.0756], }, // Ciudad portuaria clave con un sector tecnológico en crecimiento, especialmente en software y hardware
                { name: "Incheon", coords: [37.4563, 126.7052], }, // Importante en el sector tecnológico y de innovación, hogar del Aeropuerto Internacional de Incheon
                { name: "Daegu", coords: [35.8714, 128.6014], }, // Ciudad con un sector emergente en robótica, electrónica y tecnología de la información
                { name: "Daejeon", coords: [36.3504, 127.3845], }, // Centro de investigación y desarrollo, especialmente en tecnología espacial y telecomunicaciones
                { name: "Gwangju", coords: [35.1601, 126.8514], }, // Ciudad tecnológica con un enfoque en innovación en automóviles eléctricos y software
                { name: "Suwon", coords: [37.2636, 127.0286], }, // Ciudad en la que se encuentra el cuartel general de Samsung, un centro de tecnología móvil y electrónica
                { name: "Ulsan", coords: [35.5394, 129.3114], }, // Conocida por su industria automotriz y un fuerte enfoque en robótica e inteligencia artificial
                { name: "Gyeongju", coords: [35.8562, 129.2133], }, // Ciudad histórica en crecimiento en el sector de tecnología avanzada y ciberseguridad
                { name: "Cheonan", coords: [36.8021, 127.1575], }, // Ciudad emergente en el sector tecnológico, con un énfasis en la tecnología móvil y el software
                { name: "Jeju", coords: [33.4996, 126.5312], } // Conocida por el turismo, pero también es un centro emergente de innovación tecnológica en el sur
            ]
        },
        "Iceland": {
            isoCode: "IS",
            center: [64.9631, -19.0208],
            cities: [
                { name: "Reikiavik", coords: [64.1355, -21.8954], }, // La capital de Islandia, centro tecnológico y de innovación, con enfoque en energías renovables y tecnología digital
                { name: "Reykjanesbær", coords: [63.8462, -22.5587], }, // Ciudad conocida por su participación en la investigación en energía geotérmica y tecnologías sostenibles
                { name: "Keflavík", coords: [63.9963, -22.5549], }, // Ciudad con un creciente sector tecnológico y fuerte conexión con la industria aeronáutica y ciberseguridad
                { name: "Hafnarfjörður", coords: [64.0675, -21.9144], }, // Parte del área metropolitana de Reikiavik, centrada en la tecnología avanzada y los servicios digitales
            ]
        },
        "Mexico": {
            isoCode: "MX",
            center: [23.6345, -102.5528],
            cities: [
                { name: "Ciudad de México", coords: [19.4326, -99.1332], }, // La capital del país, centro económico y tecnológico, con un crecimiento importante en startups y TI
                { name: "Guadalajara", coords: [20.6597, -103.3496], }, // Considerada la "Silicon Valley" de México, un importante hub para la tecnología y el software
                { name: "Monterrey", coords: [25.6866, -100.3161], }, // Ciudad industrial y tecnológica, con énfasis en innovación y desarrollo de software
                { name: "Cancún", coords: [21.1743, -86.8466], }, // Creciente en el sector de turismo y tecnología, con empresas tecnológicas que innovan en el área de servicios
                { name: "Mérida", coords: [21.1619, -89.1658], }, // Ciudad emergente con enfoque en TI, especialmente en software y outsourcing tecnológico
                { name: "Puebla", coords: [19.0417, -98.2063], }, // Con un creciente enfoque en innovación tecnológica y desarrollo de soluciones de software
                { name: "León", coords: [21.1193, -101.6840], }, // Ciudad que está emergiendo como un centro tecnológico, con empresas tecnológicas en desarrollo de software
                { name: "Querétaro", coords: [20.5888, -100.3899], }, // Ciudad en crecimiento, conocida por su desarrollo de infraestructura tecnológica y software
                { name: "San Luis Potosí", coords: [22.1565, -100.9377], }, // En expansión tecnológica, especialmente en el sector industrial y de software
            ]
        },
        "Sweden": {
            isoCode: "SE",
            center: [60.1282, 18.6435],
            cities: [
                { name: "Estocolmo", coords: [59.3293, 18.0686], }, // Capital de Suecia, centro de innovación y tecnología, con muchas startups y empresas de TI
                { name: "Gotemburgo", coords: [57.7089, 11.9746], }, // Ciudad con un ecosistema tecnológico en crecimiento, especialmente en automotriz y tecnología industrial
                { name: "Malmö", coords: [55.6049, 13.0038], }, // Ciudad en expansión tecnológica, especialmente en TI, fintech y desarrollos de software
                { name: "Lund", coords: [55.7058, 13.1910], }, // Famosa por su universidad, es un centro de investigación y desarrollo tecnológico
                { name: "Uppsala", coords: [59.8586, 17.6389], }, // Ciudad universitaria con un enfoque en investigación, tecnología e innovación
                { name: "Västerås", coords: [59.6099, 16.5448], }, // En crecimiento en sectores de tecnología industrial y automatización
                { name: "Linköping", coords: [58.4108, 15.6214], }, // Famosa por su enfoque en tecnología aeroespacial y desarrollo de software
                { name: "Östersund", coords: [63.1792, 14.6359], }, // Ciudad en auge en tecnología y servicios digitales, con un enfoque en innovación
                { name: "Helsingborg", coords: [56.0465, 12.6948], }, // Ciudad con un creciente sector de tecnología, especialmente en soluciones digitales y software
                { name: "Norrköping", coords: [58.5900, 16.1900], }, // En crecimiento, con un enfoque en la digitalización y el desarrollo de tecnologías avanzadas
            ]
        },
        "Brazil": {
            isoCode: "BR",
            center: [-14.2350, -51.9253],
            cities: [
                { name: "São Paulo", coords: [-23.5505, -46.6333] }, // La ciudad más grande de Brasil, centro financiero y tecnológico, con un ecosistema fuerte en TI y startups
                { name: "Río de Janeiro", coords: [-22.9068, -43.1729] }, // Ciudad de gran influencia cultural y con un creciente sector tecnológico y de innovación
                { name: "Belo Horizonte", coords: [-19.9191, -43.9378] }, // Centro de innovación tecnológica, especialmente en software y TI
                { name: "Campinas", coords: [-23.1896, -46.8978] }, // Ciudad con un ecosistema de alta tecnología, destacando en telecomunicaciones y desarrollo de software
                { name: "Curitiba", coords: [-25.4296, -49.2719] }, // Conocida por su innovación urbana, también tiene un sector tecnológico en crecimiento, especialmente en TI
                { name: "Florianópolis", coords: [-27.5954, -48.5480] }, // Ciudad emergente en el sector de TI, especialmente en tecnología de la información y software
                { name: "Porto Alegre", coords: [-30.0346, -51.2177] }, // Fuerte presencia de empresas tecnológicas, especialmente en software y comercio electrónico
                { name: "Recife", coords: [-8.0476, -34.8770] }, // Creciente hub tecnológico en el noreste, con énfasis en el desarrollo de software y startups tecnológicas
                { name: "Salvador", coords: [-12.9714, -38.5014] }, // Ciudad con un sector tecnológico emergente y un enfoque en el desarrollo de aplicaciones y soluciones digitales
                { name: "Brasília", coords: [-15.7801, -47.9292] }, // La capital política de Brasil, también emergente en tecnología e innovación, especialmente en sectores públicos y soluciones digitales
                { name: "Manaus", coords: [-3.1190, -60.2449] }, // Importante en el sector industrial, especialmente en electrónica, con un creciente enfoque en tecnología y manufactura
                { name: "Natal", coords: [-5.7945, -35.2110] }, // Ciudad en crecimiento en el sector de TI, con énfasis en software y servicios tecnológicos
            ]
        },
        "Turkey": {
            isoCode: "TR",
            center: [38.9637, 35.2433],
            cities: [
                { name: "Estambul", coords: [41.0082, 28.9784] }, // La ciudad más grande y un importante centro de innovación tecnológica, especialmente en fintech y startups
                { name: "Ankara", coords: [39.9334, 32.8597] }, // La capital de Turquía, con un enfoque creciente en tecnología y soluciones digitales en el sector público
            ]
        },

        "Latvia": {
            isoCode: "LV",
            center: [56.8796, 24.6032],
            cities: [
                { name: "Riga", coords: [56.9496, 24.1052] }, // Capital y centro tecnológico de Letonia, con un ecosistema de startups y empresas de TI en crecimiento
                { name: "Daugavpils", coords: [55.8740, 26.5362] }, // Segunda ciudad más grande, con desarrollo en tecnología y educación en TI
                { name: "Liepāja", coords: [56.5047, 21.0108] }, // Ciudad con inversiones en innovación digital y empresas tecnológicas en expansión
                { name: "Jelgava", coords: [56.6511, 23.7214] }, // Importante centro educativo y con iniciativas de desarrollo en software y tecnología
                { name: "Ventspils", coords: [57.3948, 21.5606] } // Ciudad con enfoque en tecnologías de la información y proyectos de infraestructura digital
            ]
        },

        "Hungary": {
            isoCode: "HU",
            center: [47.1625, 19.5033],
            cities: [
                { name: "Budapest", coords: [47.4979, 19.0402] }, // Capital y centro tecnológico más importante del país, con un ecosistema de startups en crecimiento
                { name: "Debrecen", coords: [47.5316, 21.6273] }, // Importante hub tecnológico y educativo con iniciativas en TI y ciberseguridad
                { name: "Szeged", coords: [46.2530, 20.1482] }, // Ciudad universitaria con fuerte presencia en investigación tecnológica
                { name: "Miskolc", coords: [48.1035, 20.7784] }, // Centro de desarrollo de software y manufactura inteligente
                { name: "Pécs", coords: [46.0727, 18.2323] }, // Ciudad con iniciativas en innovación digital y tecnología verde
            ]
        },

        "Slovakia": {
            isoCode: "SK",
            center: [48.6690, 19.6990],
            cities: [
                { name: "Bratislava", coords: [48.1486, 17.1077] }, // Capital con fuerte presencia de startups y empresas de TI
                { name: "Košice", coords: [48.7164, 21.2611] }, // Segundo hub tecnológico más grande del país, con enfoque en ciberseguridad
                { name: "Prešov", coords: [48.9984, 21.2339] }, // Creciente en el sector de la innovación digital
                { name: "Žilina", coords: [49.2231, 18.7394] }, // Importante en el sector de la ingeniería de software y la automatización
                { name: "Nitra", coords: [48.3064, 18.0764] }, // Con iniciativas de desarrollo en tecnología agrícola y digitalización
            ]
        },

        "Slovenia": {
            isoCode: "SI",
            center: [46.1512, 14.9955],
            cities: [
                { name: "Ljubljana", coords: [46.0569, 14.5058] }, // Capital y principal hub tecnológico del país
                { name: "Maribor", coords: [46.5547, 15.6459] }, // Centro tecnológico en crecimiento con universidades enfocadas en TI
                { name: "Celje", coords: [46.2381, 15.2675] }, // Innovación en tecnología de la construcción y digitalización de infraestructuras
                { name: "Kranj", coords: [46.2389, 14.3556] }, // Creciente sector tecnológico con enfoque en software y electrónica
                { name: "Velenje", coords: [46.3592, 15.1106] }, // Enfocado en innovación industrial y desarrollo de software
            ]
        },

        "Finland": {
            isoCode: "FI",
            center: [61.9241, 25.7482],
            cities: [
                { name: "Helsinki", coords: [60.1695, 24.9354] }, // Capital y epicentro tecnológico con un próspero ecosistema de startups
                { name: "Espoo", coords: [60.2055, 24.6559] }, // Sede de Nokia y otros gigantes tecnológicos
                { name: "Tampere", coords: [61.4991, 23.7871] }, // Fuerte en desarrollo de software y tecnología industrial
                { name: "Vantaa", coords: [60.2934, 25.0378] }, // Crecimiento en logística y tecnologías de automatización
                { name: "Oulu", coords: [65.0121, 25.4651] }, // Importante hub tecnológico en telecomunicaciones y electrónica
            ]
        },

        "Russia": {
            isoCode: "RU",
            center: [55.7558, 37.6173],
            cities: [
                { name: "Moscú", coords: [55.7558, 37.6173] }, // Capital y centro tecnológico más grande de Rusia, con un fuerte ecosistema de startups y ciberseguridad
                { name: "San Petersburgo", coords: [59.9343, 30.3351] }, // Segunda ciudad más grande, con un enfoque en fintech y desarrollo de software
                { name: "Novosibirsk", coords: [55.0084, 82.9357] }, // Importante en inteligencia artificial y big data
                { name: "Vladivostok", coords: [43.1155, 131.8855] } // Conexión con Asia y desarrollo en comercio electrónico y tecnología marítima
            ]
        },

        "Dominican Republic": {
            isoCode: "DO",
            center: [18.7357, -70.1627],
            cities: [
                { name: "Santo Domingo", coords: [18.4861, -69.9312] }, // Capital con ecosistema de startups en crecimiento y sector TI en expansión
                { name: "Santiago de los Caballeros", coords: [19.4500, -70.7000] }, // Segunda ciudad más importante con desarrollo en tecnología educativa y empresarial
                { name: "La Vega", coords: [19.2208, -70.5294] }, // Crecimiento en tecnología aplicada a la agroindustria
                { name: "San Pedro de Macorís", coords: [18.4500, -69.3000] }, // Innovación en telecomunicaciones y comercio digital
                { name: "Higüey", coords: [18.6167, -68.7000] }, // Enfoque en soluciones digitales para el sector turístico
            ]
        },

        "Paraguay": {
            isoCode: "PY",
            center: [-23.4425, -58.4438],
            cities: [
                { name: "Asunción", coords: [-25.2637, -57.5759] }, // Capital con un ecosistema tecnológico en crecimiento
                { name: "Ciudad del Este", coords: [-25.5167, -54.6167] }, // Hub tecnológico en la triple frontera con Brasil y Argentina
                { name: "San Lorenzo", coords: [-25.3408, -57.5089] }, // Innovación en educación y desarrollo de software
                { name: "Luque", coords: [-25.2667, -57.5167] }, // Creciente en tecnología aplicada al comercio y manufactura
                { name: "Encarnación", coords: [-27.3306, -55.8667] }, // Foco en tecnología turística y digitalización de servicios
            ]
        },

        "Panama": {
            isoCode: "PA",
            center: [8.5379, -80.7821],
            cities: [
                { name: "Ciudad de Panamá", coords: [8.9833, -79.5167] }, // Capital y principal centro tecnológico con fuerte presencia en fintech y ciberseguridad
                { name: "David", coords: [8.4333, -82.4333] }, // Desarrollo en tecnología agrícola y soluciones empresariales digitales
                { name: "Colón", coords: [9.3333, -79.9000] }, // Crecimiento en logística y tecnología aplicada al comercio
                { name: "La Chorrera", coords: [8.8803, -79.7833] }, // Innovación en infraestructura digital y telecomunicaciones
                { name: "Santiago de Veraguas", coords: [8.1000, -80.9833] }, // Expansión de empresas tecnológicas locales
            ]
        },

        "United Arab Emirates": {
        isoCode: "AE",
        center: [23.4241, 53.8478],
        cities: [
                { name: "Dubái", coords: [25.276987, 55.296249] }, // Principal centro tecnológico y de innovación en la región, con numerosas startups y empresas internacionales.
                { name: "Abu Dabi", coords: [24.453884, 54.3773438] }, // Capital del país con creciente inversión en tecnología y proyectos de smart city.
            ]
        },

        "Monaco": {
            isoCode: "MC",
            center: [43.7384, 7.4246],
            cities: [
                { name: "Mónaco", coords: [43.7384, 7.4246] } // Ciudad-estado con enfoque en innovación financiera y tecnológica, especialmente en fintech.
            ]
        },

        "Luxembourg": {
            isoCode: "LU",
            center: [49.8153, 6.1296],
            cities: [
                { name: "Luxemburgo", coords: [49.6117, 6.1319] }, // Capital con fuerte sector financiero y creciente industria tecnológica.
                { name: "Esch-sur-Alzette", coords: [49.4958, 5.9806] }, // Importante centro universitario y de investigación tecnológica.
                { name: "Differdange", coords: [49.5242, 5.8919] }, // Desarrollo en sectores tecnológicos y de innovación.
                { name: "Dudelange", coords: [49.4806, 6.0875] }, // Creciente inversión en infraestructura tecnológica y startups.
                { name: "Ettelbruck", coords: [49.8475, 6.1042] }, // Centro regional con iniciativas en tecnología y educación.
                { name: "Diekirch", coords: [49.8678, 6.1561] }, // Desarrollo en sectores de TI y pequeñas empresas tecnológicas.
                { name: "Wiltz", coords: [49.9686, 5.9344] }, // Iniciativas en infraestructura digital y proyectos tecnológicos emergentes.
                { name: "Clervaux", coords: [50.0547, 6.0281] } // Iniciativas en infraestructura digital y proyectos tecnológicos emergentes.
            ]
        },

        "Malta": {
            isoCode: "MT",
            center: [35.9375, 14.3754],
            cities: [
                { name: "La Valeta", coords: [35.8997, 14.5146] }, // Capital con creciente sector tecnológico y de innovación.
                { name: "Birkirkara", coords: [35.8978, 14.4611] }, // Importante centro comercial con desarrollo en TI.
                { name: "Mosta", coords: [35.9142, 14.4225] }, // Desarrollo en sectores tecnológicos y de innovación.
                { name: "Qormi", coords: [35.8761, 14.4725] }, // Creciente inversión en infraestructura tecnológica y startups.
                { name: "Sliema", coords: [35.9122, 14.5042] }, // Conocida por su ambiente empresarial y tecnológico.
                { name: "San Ġwann", coords: [35.9125, 14.4756] }, // Desarrollo en sectores de TI y pequeñas empresas tecnológicas.
                { name: "Żabbar", coords: [35.8764, 14.535] }, // Iniciativas en infraestructura digital y proyectos tecnológicos emergentes.
                { name: "Mellieħa", coords: [35.9561, 14.3625] }, // Creciente interés en tecnología y zonas económicas especiales para innovación.
                { name: "Paola", coords: [35.8772, 14.5053] }, // Desarrollo en sectores de TI y pequeñas empresas tecnológicas.
                { name: "Fgura", coords: [35.8769, 14.5153] } // Iniciativas en infraestructura digital y proyectos tecnológicos emergentes.
            ]
        },
        
        "Cyprus": {
            isoCode: "CY",
            center: [35.1264, 33.4299],
            cities: [
                { name: "Nicosia", coords: [35.1856, 33.3823] }, // Capital y principal centro económico con creciente sector tecnológico.
                { name: "Limassol", coords: [34.7071, 33.0226] }, // Importante puerto y centro de negocios con desarrollo en TI.
                { name: "Lárnaca", coords: [34.9229, 33.6233] }, // Desarrollo en sectores tecnológicos y de innovación.
                { name: "Pafos", coords: [34.772, 32.4297] }, // Creciente inversión en infraestructura tecnológica
            ]
        },

        "Andorra": {
            isoCode: "AD",
            center: [42.5078, 1.5211],
            cities: [
                { name: "Andorra la Vella", coords: [42.5078, 1.5211] } // Capital y principal centro económico de Andorra, con creciente interés en tecnologías de la información y comunicación.
            ]
        },

        "Liechtenstein": {
            isoCode: "LI",
            center: [47.1660, 9.5554],
            cities: [
                { name: "Vaduz", coords: [47.1416, 9.5215] }, // Capital y centro financiero de Liechtenstein, con oportunidades en el sector tecnológico y financiero.
                { name: "Schaan", coords: [47.1640, 9.5086] } // Ciudad más grande del país, sede de varias empresas internacionales y con un sector tecnológico en desarrollo.
            ]
        },

        "Taiwan": {
            isoCode: "TW",
            center: [23.6978, 120.9605],
            cities: [
                { name: "Taipéi", coords: [25.0330, 121.5654] }, // Capital y principal centro tecnológico de Taiwán, conocida por su industria de semiconductores y empresas de TI.
                { name: "Hsinchu", coords: [24.8138, 120.9675] }, // Conocida como la "Silicon Valley" de Taiwán, alberga el Parque Científico Industrial de Hsinchu.
                { name: "Taichung", coords: [24.1477, 120.6736] }, // Importante centro industrial y tecnológico con creciente número de empresas de software y hardware.
                { name: "Kaohsiung", coords: [22.6273, 120.3014] }, // Gran ciudad portuaria con desarrollo en sectores tecnológicos y de innovación.
                { name: "Tainan", coords: [22.9999, 120.2270] }, // Ciudad histórica con parques tecnológicos y universidades enfocadas en investigación y desarrollo.
            ]
        },

        "Dominican Republic": {
            isoCode: "DO",
            center: [18.7357, -70.1627],
            cities: [
                { name: "Santo Domingo", coords: [18.4861, -69.9312] }, // Capital y principal centro económico y tecnológico del país, con creciente ecosistema de startups y empresas de TI.
                { name: "Santiago de los Caballeros", coords: [19.4500, -70.7000] }, // Segunda ciudad más grande, con desarrollo en sectores tecnológicos y educativos.
                { name: "La Romana", coords: [18.4273, -68.9728] }, // Importante centro turístico con oportunidades en tecnologías aplicadas al turismo.
                { name: "San Pedro de Macorís", coords: [18.4500, -69.3000] }, // Ciudad con industrias emergentes y desarrollo en educación tecnológica.
                { name: "Punta Cana", coords: [18.5600, -68.3725] }, // Destino turístico con creciente interés en soluciones tecnológicas para el sector hotelero y de servicios.
                { name: "Puerto Plata", coords: [19.7900, -70.6900] }, // Ciudad portuaria con desarrollo en turismo y tecnologías relacionadas.
            ]
        },

        "Bulgaria": {
            isoCode: "BG",
            center: [42.7339, 25.4858],
            cities: [
                { name: "Sofía", coords: [42.6977, 23.3219] }, // Capital y principal centro tecnológico de Bulgaria, con un ecosistema de startups y empresas de TI en crecimiento.
                { name: "Plovdiv", coords: [42.1354, 24.7453] }, // Segunda ciudad más grande, con desarrollo en software y tecnologías de la información.
                { name: "Varna", coords: [43.2141, 27.9147] }, // Importante ciudad portuaria con creciente sector tecnológico y de innovación.
                { name: "Burgas", coords: [42.5048, 27.4626] }, // Ciudad costera con desarrollo en tecnologías de la información y comunicación.
                { name: "Ruse", coords: [43.8356, 25.9657] }, // Importante centro industrial y tecnológico en el norte del país.
            ]
        },
        
        "Thailand": {
            isoCode: "TH",
            center: [15.8700, 100.9925],
            cities: [
                { name: "Bangkok", coords: [13.7563, 100.5018] }, // Capital y principal centro tecnológico de Tailandia, con un ecosistema vibrante de startups y fintech.
                { name: "Chiang Mai", coords: [18.7883, 98.9853] }, // Conocida por su escena de startups tecnológicas y comunidad de nómadas digitales.
                { name: "Pattaya", coords: [12.9236, 100.8825] }, // Ciudad con creciente desarrollo en tecnología aplicada al turismo y comercio electrónico.
                { name: "Phuket", coords: [7.8804, 98.3923] }, // Centro turístico con oportunidades en tecnología aplicada a la hospitalidad y el entretenimiento.
                { name: "Khon Kaen", coords: [16.4322, 102.8236] }, // En crecimiento como hub tecnológico del noreste, con apoyo del gobierno en TI y educación.
            ]
        },

        "Lithuania": {
            isoCode: "LT",
            center: [55.1694, 23.8813],
            cities: [
                { name: "Vilnius", coords: [54.6872, 25.2797] }, // Capital y centro tecnológico de Lituania, conocida por su ecosistema de startups y empresas fintech.
                { name: "Kaunas", coords: [54.8985, 23.9036] }, // Ciudad universitaria con un creciente sector TI y de innovación.
                { name: "Klaipėda", coords: [55.7033, 21.1443] }, // Puerto principal del país, con desarrollo en tecnología marítima y logística digital.
                { name: "Šiauliai", coords: [55.9333, 23.3167] }, // Centro regional con iniciativas en educación tecnológica e industrias creativas.
                { name: "Panevėžys", coords: [55.7333, 24.3500] }, // Enfocada en manufactura avanzada y automatización industrial.
            ]
        },
        "Georgia": {
            isoCode: "GE",
            center: [42.3154, 43.3569],
            cities: [
                { name: "Tbilisi", coords: [41.7151, 44.8271] }, // Capital y núcleo del ecosistema tecnológico de Georgia, con apoyo a startups y empresas TIC.
                { name: "Batumi", coords: [41.6413, 41.6356] }, // Ciudad costera en crecimiento, con proyectos en turismo inteligente y tecnología urbana.
                { name: "Kutaisi", coords: [42.2670, 42.7180] }, // Alberga zonas económicas y proyectos de desarrollo en tecnología y educación.
                { name: "Rustavi", coords: [41.5495, 45.0360] }, // Foco industrial con iniciativas en digitalización y tecnología de manufactura.
                { name: "Zugdidi", coords: [42.5088, 41.8709] }, // En crecimiento como nodo regional para innovación agrícola y tecnología rural.
            ]
        },
        "Singapore": {
            isoCode: "SG",
            center: [1.3521, 103.8198],
            cities: [
                { name: "Singapore", coords: [1.3521, 103.8198] }, // Ciudad-estado altamente desarrollada, líder en tecnología, innovación, fintech y smart cities.
            ]
        }

    };

    let map; // Variable del mapa
    let worldLayer; // Capa de países

    // Cargar el mapa mundial en formato GeoJSON
    async function loadWorldGeoJSON() {
        const response = await fetch("https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json");
        return await response.json();
    }

    const worldGeoJSON = await loadWorldGeoJSON();

    countryCards.forEach(card => {
        card.addEventListener("click", () => {
            const countryName = card.querySelector(".country-name").innerText;
            const countryInfo = countryData[countryName];

            if (!countryInfo) return;

            popup.style.display = "flex";

            // Establecer el título del popup con el botón de cierre
            //popupTitle.innerHTML = `Ciudades y regiones preferidas en ${countryName}`;

            // Cerrar popup al hacer clic fuera de él
            popup.addEventListener("click", (event) => {
                if (event.target === popup) {
                    closePopup();
                }
            });

            // Crear o reiniciar el mapa
            if (map) {
                map.remove();
            }
            mapContainer.innerHTML = "";
            map = L.map("mapContainer").setView(countryInfo.center, 5);

            // **Mapa base en blanco y negro**
            L.tileLayer("https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png", {}).addTo(map);

            // **Dibujar los países**
            worldLayer = L.geoJSON(worldGeoJSON, {
                style: feature => {
                    // Verifica si el documento está en modo oscuro
                    const isDarkMode = document.documentElement.getAttribute("data-theme") === "dark";

                    return {
                        fillColor: feature.properties.name === countryName ? "#ffffff" : "#cccccc", // País normal, resto tenue
                        fillOpacity: feature.properties.name === countryName ? 1 : 0.3, 

                        // Bordes más visibles en modo oscuro
                        color: feature.properties.name === countryName 
                            ? (isDarkMode ? "#ffffff" : "#000000")  // Blanco en modo oscuro, negro en modo claro
                            : (isDarkMode ? "#888888" : "#bbbbbb"), // Gris más visible en modo oscuro

                        weight: feature.properties.name === countryName ? (isDarkMode ? 2 : 1.5) : (isDarkMode ? 1 : 0.5) // Líneas más gruesas en modo oscuro
                    };
                }
            }).addTo(map);

            // **Agregar marcadores de ciudades con bandera**
            countryInfo.cities.forEach(city => {
                const marker = L.marker(city.coords).addTo(map);

                // Crear un contenedor para el nombre de la ciudad y la bandera
                const cityInfo = document.createElement("div");
                const flagImage = document.createElement("img");
                flagImage.src = getFlagUrl(countryInfo.isoCode);
                flagImage.alt = `${countryName} flag`;
                flagImage.style.width = "20px"; // Ajusta el tamaño de la bandera
                flagImage.style.marginRight = "8px";

                const cityName = document.createElement("span");
                cityName.innerText = city.name;

                cityInfo.appendChild(flagImage);
                cityInfo.appendChild(cityName);

                // Tooltip con nombre de la ciudad y la bandera
                marker.bindTooltip(cityInfo.outerHTML, {
                    permanent: false,
                    direction: "right"
                });
            });

            // Ajustar tamaño del mapa
            setTimeout(() => {
                map.invalidateSize();
            }, 500);
        });
    });
});






















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
        contactpopuptitle: "Emails",
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
            "🏡 Visitar y vivir en muchos paises a lo largo de mi vida para conocer diferentes culturas y conocer el mundo en el que vivo.",
            "🎯 Vivir el maximo de experiencias posibles para crecer como persona.",
            "👥 Crear una gran red de contactos y amistades de diferentes culturas, tanto nacionales como internacionales.",
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
            "📌 Soy español, concretamente de Cádiz (Andalucía).",
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


        /* PREFERED PLACES SECTION */

        preferredtitle: "Lugares Preferidos",
        preferreddescription: "Lista de países, ciudades o regiones en los que me interesaría mudarme, desplazarme, trabajar o estudiar. Están ordenados de mayor a menor preferencia, de izquierda a derecha y de arriba a abajo. Por motivos personales, no estoy dispuesto a mudarme ni a trabajar en ningún país que no aparezca en esta lista.",
        flagpopuptitle: "Ciudades preferidas",
        showmoreBtn: "Ver mas",
        showLessBtn: "Ver menos",
        tooltip: "Más información",

        /* END PREFERED PLACES SECTION */


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
            "🏡 Visit and live in many countries throughout my life to learn about different cultures and understand the world I live in.",
            "🎯 Live as many experiences as possible to grow as a person.",
            "👥 Create a large network of contacts and friendships from different cultures, both national and international.",
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
            "📌 I am Spanish, specifically from Cádiz (Andalusia).",
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


        /* PREFERED PLACES SECTION */

        preferredtitle: "Preferred Places",
        preferreddescription: "List of countries, cities, or regions where I would be interested in moving, relocating, working, or studying. They are ordered from highest to lowest preference, from left to right and top to bottom. For personal reasons, I am not willing to move or work in any country that does not appear on this list.",
        flagpopuptitle: "Preferred cities",
        showmoreBtn: "View more",
        showLessBtn: "View less",
        tooltip: "More information",

        /* END PREFERED PLACES SECTION */


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
            "🏡 Visiter et vivre dans de nombreux pays tout au long de ma vie pour découvrir différentes cultures et connaître le monde dans lequel je vis.",
            "🎯 Vivre un maximum d'expériences possibles pour grandir en tant que personne.",
            "👥 Créer un grand réseau de contacts et d'amitiés de différentes cultures, tant nationales qu'internationales.",
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
            "📌 Je suis espagnol, précisément de Cadix (Andalousie).",
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

        /* SECTION LIEUX PRÉFÉRÉS */

        preferredtitle: "Lieux Préférés",
        preferreddescription: "Liste des pays, villes ou régions dans lesquels je souhaiterais déménager, voyager, travailler ou étudier. Ils sont classés par ordre de préférence, de gauche à droite et de haut en bas. Pour des raisons personnelles, je ne suis pas disposé à déménager ou à travailler dans un pays qui ne figure pas sur cette liste.",
        flagpopuptitle: "Villes préférées",
        showmoreBtn: "Voir plus",
        showLessBtn: "Voir moins",
        tooltip: "Plus d'informations",


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
            "🏡 Viele Länder besuchen und in vielen Ländern leben, um verschiedene Kulturen kennenzulernen und die Welt zu verstehen, in der ich lebe.",
            "🎯 So viele Erfahrungen wie möglich machen, um als Mensch zu wachsen.",
            "👥 Ein großes Netzwerk aus Kontakten und Freundschaften aus verschiedenen Kulturen schaffen, sowohl national als auch international.",
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
            "📌 Ich bin Spanier, genauer gesagt aus Cádiz (Andalusien).",
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

        /* BEVORZUGTE ORTE SECTION */

        preferredtitle: "Bevorzugte Orte",
        preferreddescription: "Liste von Ländern, Städten oder Regionen, in die ich gerne umziehen, reisen, arbeiten oder studieren würde. Sie sind nach absteigender Präferenz von links nach rechts und von oben nach unten geordnet. Aus persönlichen Gründen bin ich nicht bereit, in ein Land zu ziehen oder dort zu arbeiten, das nicht auf dieser Liste erscheint.",
        flagpopuptitle: "Bevorzugte Städte",
        showmoreBtn: "Mehr anzeigen",
        showLessBtn: "Weniger anzeigen",
        tooltip: "Mehr Informationen",

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
            "🏡 Visitar i viure en molts països al llarg de la meva vida per conèixer diferents cultures i conèixer el món en què visc.",
            "🎯 Viure el màxim d'experiències possibles per créixer com a persona.",
            "👥 Crear una gran xarxa de contactes i amistats de diferents cultures, tant nacionals com internacionals.",

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
            "📌 Sóc espanyol, concretament de Cadis (Andalusia).",
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


        /* SECCIÓ LLOCS PREFERITS */
        preferredtitle: "Llocs Preferits",
        preferreddescription: "Llista de països, ciutats o regions on m'interessaria traslladar-me, desplaçar-me, treballar o estudiar. Estan ordenats de més a menys preferència, d'esquerra a dreta i de dalt a baix. Per motius personals, no estic disposat a traslladar-me ni a treballar a cap país que no aparegui en aquesta llista.",
        flagpopuptitle: "Ciutats preferides",
        showmoreBtn: "Veure més",
        showLessBtn: "Veure menys",
        tooltip: "Més informació",

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
            "🏡 Bisitatu eta bizitzen egon naiz bizitza osoan zehar, munduaren kulturen eta bizitzen ezagutzeko.",
            "🎯 Esperientzia gehienetan bizitzen laguntzeko pertsonalki hazteko.",
            "👥 Kultur anitzetan kontaktu eta adiskidetasun sare handia sortzea, baita nazional eta nazioartekoak ere.",
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
            "📌 Espainiarra naiz, zehazki Cadizetik (Andaluziatik).",
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

        /* LEKUAK PREFERITUAK ATALA */
        preferredtitle: "Leku Preferituak",
        preferreddescription: "Mugitu, bidaiatu, lan egin edo ikasi nahi nituzkeen herrialde, hiribildu edo eskualdeen zerrenda. Lehentasun handienetik txikienera, ezkerretik eskuinera eta goitik behera antolatuta daude. Arrazoi pertsonalengatik, ez nintzateke prest lekualdatzeko edo lan egiteko herrialde batean, ez badago zerrenda honetan.",
        flagpopuptitle: "Hiri Preferituak",
        showmoreBtn: "Ikusi gehiago",
        showLessBtn: "Ikusi gutxiago",
        tooltip: "Informazio gehiago",

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
            "🏡 Visitare e vivere in molti paesi nel corso della mia vita per conoscere diverse culture e conoscere il mondo in cui vivo.",
            "🎯 Vivere il massimo delle esperienze possibili per crescere come persona.",
            "👥 Creare una grande rete di contatti e amicizie di diverse culture, sia nazionali che internazionali.",
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
            "📌 Sono spagnolo, precisamente di Cadice (Andalusia).",
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

        /* SEZIONE LUOGHI PREFERITI */
        preferredtitle: "Luoghi Preferiti",
        preferreddescription: "Elenco di paesi, città o regioni in cui mi piacerebbe trasferirmi, viaggiare, lavorare o studiare. Sono ordinati dalla maggiore alla minore preferenza, da sinistra a destra e dall'alto verso il basso. Per motivi personali, non sono disposto a trasferirmi o lavorare in un paese che non appare in questa lista.",
        flagpopuptitle: "Città preferite",
        showmoreBtn: "Vedi di più",
        showLessBtn: "Vedi meno",
        tooltip: "Maggiori informazioni",

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
            "🏡 Visitar e viver em muitos países ao longo da minha vida para conhecer diferentes culturas e entender o mundo em que vivo.",
            "🎯 Viver o máximo de experiências possíveis para crescer como pessoa.",
            "👥 Criar uma grande rede de contatos e amizades de diferentes culturas, tanto nacionais quanto internacionais.",
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
            "📌 Sou espanhol, concretamente de Cádiz (Andaluzia).",
            "🏅 Ganhei vários prêmios em torneios de xadrez no Campo de Gibraltar.",
            "🌐 Tenho paixão por história e geopolítica e sua influência na tecnologia global.",
            "🧠 Amo tudo relacionado a estratégia; é uma excelente forma de desenvolver a mente.",
            "🥊 Tenho interesse em esportes de contato (Boxe, Kickboxing, Jiu-Jitsu), embora ainda não tenha praticado.",
            "⚽ Gosto de praticar esportes em equipe e individuais (Futebol, Tênis, Padel, etc.).",
            "🎶 Gosto de cantar e adoraria formar uma banda musical no futuro."
        ],
    
        /* FIM SEÇÃO SOBRE MIM */

        /* SEÇÃO DE LUGARES PREFERIDOS */
        preferredtitle: "Lugares Preferidos",
        preferreddescription: "Lista de países, cidades ou regiões em que eu estaria interessado em me mudar, viajar, trabalhar ou estudar. Eles estão organizados da maior para a menor preferência, da esquerda para a direita e de cima para baixo. Por motivos pessoais, não estou disposto a me mudar ou trabalhar em qualquer país que não apareça nesta lista.",
        flagpopuptitle: "Cidades preferidas",
        showmoreBtn: "Ver mais",
        showLessBtn: "Ver menos",
        tooltip: "Mais informações",

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
            "🏡 Besøke og bo i mange land gjennom livet mitt for å lære om forskjellige kulturer og forstå verden jeg lever i.",
            "🎯 Leve så mange erfaringer som mulig for å vokse som person.",
            "👥 Skape et stort nettverk av kontakter og vennskap fra forskjellige kulturer, både nasjonale og internasjonale.",
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
            "📌 Jeg er spansk, nærmere bestemt fra Cádiz (Andalusien).",
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

        /* FORETRUKNE STEDER SECTION */
        preferredtitle: "Foretrukne steder",
        preferreddescription: "Liste over land, byer eller regioner jeg ville vurdere å flytte til, reise til, jobbe i eller studere i. De er sortert fra høyeste til laveste preferanse, fra venstre til høyre og fra topp til bunn. Av personlige grunner er jeg ikke villig til å flytte til eller jobbe i et land som ikke er på denne listen.",
        flagpopuptitle: "Foretrukne byer",
        showmoreBtn: "Se mer",
        showLessBtn: "Se mindre",
        tooltip: "Mer informasjon",
    
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
            "🏡 Επισκέπτομαι και ζω σε πολλές χώρες κατά τη διάρκεια της ζωής μου για να γνωρίσω διαφορετικές κουλτούρες και να κατανοήσω τον κόσμο στον οποίο ζω.",
            "🎯 Ζω όσο το δυνατόν περισσότερες εμπειρίες για να εξελιχθώ ως άνθρωπος.",
            "👥 Δημιουργώ ένα μεγάλο δίκτυο επαφών και φιλιών από διαφορετικές κουλτούρες, τόσο εθνικές όσο και διεθνείς.",

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
            "📌 Είμαι Ισπανός, συγκεκριμένα από την Κάντιθ (Ανδαλουσία).",
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

        /* ΕΝΟΤΗΤΑ ΠΡΟΤΙΜΩΜΕΝΩΝ ΤΟΠΩΝ */
        preferredtitle: "Προτιμώμενοι Τόποι",
        preferreddescription: "Λίστα χωρών, πόλεων ή περιοχών στις οποίες θα ήθελα να μετακομίσω, να ταξιδέψω, να εργαστώ ή να σπουδάσω. Είναι ταξινομημένα από την υψηλότερη στην χαμηλότερη προτίμηση, από αριστερά προς τα δεξιά και από πάνω προς τα κάτω. Για προσωπικούς λόγους, δεν είμαι διατεθειμένος να μετακομίσω ή να εργαστώ σε χώρα που δεν εμφανίζεται σε αυτήν τη λίστα.",
        flagpopuptitle: "Προτιμώμενες Πόλεις",
        showmoreBtn: "Δείτε περισσότερα",
        showLessBtn: "Δείτε λιγότερα",
        tooltip: "Περισσότερες πληροφορίες",

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
            "🏡 人生を通して多くの国を訪れ、さまざまな文化を知り、自分が住んでいる世界を理解する。",
            "🎯 人間として成長するためにできるだけ多くの経験を生きる。",
            "👥 国内外のさまざまな文化からの多くの連絡先と友達のネットワークを作る。",
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
            "📌 私はスペイン人で、特にカディス（アンダルシア）出身です。",
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

        /* お気に入りの場所セクション */
        preferredtitle: "お気に入りの場所",
        preferreddescription: "引っ越し、旅行、仕事、または勉強したい国、都市、または地域のリストです。優先度の高い順に左から右、上から下に並べられています。個人的な理由で、このリストに載っていない国に引っ越したり働いたりすることはありません。",
        flagpopuptitle: "お気に入りの都市",
        showmoreBtn: "もっと見る",
        showLessBtn: "少なく見る",
        tooltip: "もっと詳しく",

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
            "🏡 Odwiedzać i żyć w wielu krajach przez całe moje życie, aby poznać różne kultury i zrozumieć świat, w którym żyję.",
            "🎯 Przeżywać jak najwięcej doświadczeń, aby rozwijać się jako osoba.",
            "👥 Tworzyć dużą sieć kontaktów i przyjaźni z różnych kultur, zarówno krajowych, jak i międzynarodowych.",
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
            "📌 Jestem Hiszpanem, konkretnie z Kadyksu (Andaluzja).",
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

        /* SEKCJA ULUBIONE MIEJSCA */
        preferredtitle: "Ulubione miejsca",
        preferreddescription: "Lista krajów, miast lub regionów, do których chciałbym się przeprowadzić, podróżować, pracować lub studiować. Są one uporządkowane od najwyższego do najniższego priorytetu, od lewej do prawej i od góry do dołu. Z powodów osobistych nie jestem gotów przeprowadzić się ani pracować w kraju, który nie znajduje się na tej liście.",
        flagpopuptitle: "Ulubione miasta",
        showmoreBtn: "Pokaż więcej",
        showLessBtn: "Pokaż mniej",
        tooltip: "Więcej informacji",

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
            "📌 אני ספרדי, במיוחד מקדיז (אנדלוסיה).",
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

        /* סקשן מקומות מועדפים */
        preferredtitle: "מקומות מועדפים",
        preferreddescription: "רשימה של מדינות, ערים או אזורים שבהם הייתי מעוניין לעבור אליהם, לטייל בהם, לעבוד בהם או ללמוד בהם. הם מסודרים לפי סדר העדפה מהגדול לקטן, משמאל לימין ומלמעלה למטה. מסיבות אישיות, אינני מוכן לעבור או לעבוד במדינה שאינה מופיעה ברשימה זו.",
        flagpopuptitle: "ערים מועדפות",
        showmoreBtn: "הצג יותר",
        showLessBtn: "הצג פחות",
        tooltip: "מידע נוסף",


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
            "🏡 Besøge og bo i mange lande i mit liv for at lære forskellige kulturer at kende og forstå den verden, jeg lever i.",
            "🎯 Leve så mange oplevelser som muligt for at vokse som person.",
            "👥 Skabe et stort netværk af kontakter og venskaber fra forskellige kulturer, både nationale og internationale.",
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
            "📌 Jeg er spansk, nærmere bestemt fra Cádiz (Andalusien).",
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

        /* FORETRUKNE STEDER SEKTION */
        preferredtitle: "Foretrukne steder",
        preferreddescription: "Liste over lande, byer eller regioner, hvor jeg kunne tænke mig at flytte, rejse, arbejde eller studere. De er ordnet fra højeste til laveste præference, fra venstre mod højre og oppefra og ned. Af personlige grunde er jeg ikke villig til at flytte eller arbejde i et land, der ikke er på denne liste.",
        flagpopuptitle: "Foretrukne byer",
        showmoreBtn: "Se mere",
        showLessBtn: "Se mindre",
        tooltip: "Mere information",

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
            "🏡 Navštívit a žít v mnoha zemích během svého života, abych poznal různé kultury a svět, ve kterém žiji.",
            "🎯 Žít co nejvíce zážitků, abych rostl jako osoba.",
            "👥 Vytvořit velkou síť kontaktů a přátel z různých kultur, jak národních, tak mezinárodních.",
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
            "📌 Jsem Španěl, konkrétně z Cádizu (Andalusie).",
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


        /* SEKCE PREFEROVANÁ MÍSTA */
        preferredtitle: "Preferovaná místa",
        preferreddescription: "Seznam zemí, měst nebo regionů, do kterých bych se rád přestěhoval, cestoval, pracoval nebo studoval. Jsou seřazeny od nejvyšší po nejnižší preferenci, zleva doprava a shora dolů. Z osobních důvodů nejsem ochoten se přestěhovat nebo pracovat v zemi, která není na tomto seznamu.",
        flagpopuptitle: "Preferovaná města",
        showmoreBtn: "Zobrazit více",
        showLessBtn: "Zobrazit méně",
        tooltip: "Více informací",

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
