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