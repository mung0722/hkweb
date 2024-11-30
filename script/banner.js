let currentIndex = 0;

const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const sliderWrapper = document.querySelector(".slider-wrapper");

function slide() {
    currentIndex++;
    
    if (currentIndex === totalSlides) {
        currentIndex = 0;
    }
    
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(slide, 3000);