const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;
let autoSlideInterval;

// Función para mostrar la imagen actual
function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    updateIndicators(index);
}

// Función para actualizar los indicadores
function updateIndicators(index) {
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

// Función para avanzar al siguiente slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slideItems.length;
    showSlide(currentIndex);
}

// Función para retroceder al slide anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + slideItems.length) % slideItems.length;
    showSlide(currentIndex);
}

// Iniciar el slider automático
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); // Cambia de imagen cada 5 segundos
}

// Detener el slider automático
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Event listeners para los botones de navegación
prevButton.addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});

nextButton.addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

// Event listeners para los indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        stopAutoSlide();
        currentIndex = index;
        showSlide(currentIndex);
        startAutoSlide();
    });
});

// Iniciar el slider automático al cargar la página
startAutoSlide();