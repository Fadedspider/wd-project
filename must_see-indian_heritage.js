const slides = document.querySelectorAll('.slide');
const sliderContainer = document.querySelector('.slider-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
const totalSlides = slides.length;

function updateSlidePosition() {
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();    
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

function showNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
}

function showPrevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentSlide = parseInt(e.target.dataset.slide);
        updateSlidePosition();
    });
});

setInterval(showNextSlide, 5000);