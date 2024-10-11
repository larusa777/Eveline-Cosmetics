let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Якщо індекс більше за кількість слайдів, повертаємося до першого
    if (index >= totalSlides) {
        currentSlide = 0;
    }

    // Якщо індекс менший за 0, перемикаємось на останній слайд
    if (index < 0) {
        currentSlide = totalSlides - 1;
    }

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}
