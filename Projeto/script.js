let slideIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
const intervalTime = 3000; // Intervalo em milissegundos (3 segundos)
const slideWidth = carouselItems[0].clientWidth;
let slideInterval;

function startSlide() {
    slideInterval = setInterval(() => {
        moveCarousel();
    }, intervalTime);
}

function moveCarousel() {
    slideIndex++;

    if (slideIndex >= totalItems) {
        slideIndex = 0;
    }

    const offset = -slideIndex * slideWidth;
    document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
}

startSlide(); 