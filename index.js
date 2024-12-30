document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const currentSlideElem = document.querySelector('.current-slide');
    const totalSlidesElem = document.querySelector('.total-slides');

    let currentIndex = 0;

    // Обновить отображение текущего слайда
    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentIndex) {
                slide.classList.add('active');
            }
        });

        // Обновить текст с номером текущего изображения
        currentSlideElem.textContent = currentIndex + 1;
    }

    // Переход к следующему изображению
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Зацикливание
        updateSlider();
    }

    // Переход к предыдущему изображению
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Зацикливание
        updateSlider();
    }

    // Обработчики событий для кнопок
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Установим общее количество слайдов
    totalSlidesElem.textContent = slides.length;

    // Инициализируем слайдер
    updateSlider();
});

// Динамическое создание огоньков гирлянды
document.addEventListener('DOMContentLoaded', () => {
    const garland = document.querySelector('.garland');

    const numberOfLights = 100; // Количество огоньков на гирлянде
    const colors = ['red', 'green', 'yellow', 'blue']; // Цвета огоньков

    for (let i = 0; i < numberOfLights; i++) {
        const light = document.createElement('div');
        light.classList.add('light');

        // Случайный цвет
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        light.style.backgroundColor = randomColor;

        // Случайное позиционирование
        const topPosition = Math.random() * 100; // Позиция сверху (в процентах)
        const leftPosition = Math.random() * 100; // Позиция слева (в процентах)
        light.style.top = `${topPosition}%`;
        light.style.left = `${leftPosition}%`;

        garland.appendChild(light);
    }
});