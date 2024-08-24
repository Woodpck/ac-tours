// Toggle the mobile menu
function onToggleMenu(icon) {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    document.getElementById('next').addEventListener('click', () => {
        changeSlide(1);
    });

    document.getElementById('prev').addEventListener('click', () => {
        changeSlide(-1);
    });

    function changeSlide(direction) {
        slides[currentSlide].classList.add('hidden');
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        slides[currentSlide].classList.remove('hidden');
    }

    // Initially hide all slides except the first one
    slides.forEach((slide, index) => {
        if (index !== 0) {
            slide.classList.add('hidden');
        }
    });

    // Handle window resize to hide the mobile menu on larger screens
    window.addEventListener('resize', () => {
        const screenWidth = window.innerWidth;
        const menu = document.getElementById('mobileMenu');

        // Tailwind's `md` breakpoint is typically 768px
        if (screenWidth >= 768) {
            menu.classList.add('hidden');
        }
    });
});
