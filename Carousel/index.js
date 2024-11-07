const carousel = document.querySelector('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const slideNumberDisplay = document.getElementById('carousel-slide-number');
const totalSlides = carousel.children.length;
let currentIndex = 0;

// Function to update the slide position, indicators, and slide number display
function updateCarousel() {
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
    slideNumberDisplay.textContent = `Slide ${currentIndex + 1} of ${totalSlides}`;
}

// Function to move to the next or previous slide
function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    updateCarousel();
}

// Function to set the slide based on the indicator clicked
function setSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Initial setup
updateCarousel();
