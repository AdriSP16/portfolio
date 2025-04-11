import {countryData} from './mapData.js';

export function initMapPopup (){
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
                popupTitle.innerHTML = `Ciudades y regiones preferidas en ${countryName}`;
    
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
    // Cerrar mapPopup al hacer clic fuera
    window.addEventListener('click', (event) => {
        const popup = document.getElementById('mapPopup');
        if (event.target === popup) closeFlagPopup();
    });

    const closeButton = document.querySelector(".flags-close-btn");
    if (closeButton) {
        closeButton.addEventListener("click", closeFlagPopup);
    }

    // Cerrar el mapPopup al tocar el icono de cerrar
    function closeFlagPopup() {
        const popup = document.getElementById('mapPopup');
        popup.classList.remove('show');
        setTimeout(() => popup.style.display = 'none', 300); 
    }
}

