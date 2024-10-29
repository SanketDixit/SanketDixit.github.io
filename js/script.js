document.addEventListener("DOMContentLoaded", function() {
    // Update current year in the footer
    const yearElement = document.getElementById('current-year');
    yearElement.textContent = new Date().getFullYear().toString();

    // IntersectionObserver for fading in sections on scroll
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Fade in when section is in view
            } else {
                entry.target.classList.remove('active'); // Fade out when section is out of view
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Carousel functionality for the experience section
    const experienceSlides = document.querySelectorAll(".carousel-slide");
    let currentSlide = 0;

    function showSlide(index) {
        experienceSlides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
        updateButtons();
    }

    function updateButtons() {
        const prevButton = document.getElementById("previous-slide");
        const nextButton = document.getElementById("next-slide");

        // Disable buttons on first and last slides
        prevButton.disabled = currentSlide === 0;
        nextButton.disabled = currentSlide === experienceSlides.length - 1;

        // Apply disabled styling class
        prevButton.classList.toggle('arrow-disabled', prevButton.disabled);
        nextButton.classList.toggle('arrow-disabled', nextButton.disabled);
    }

    function nextSlide() {
        if (currentSlide < experienceSlides.length - 1) {
            currentSlide++;
            showSlide(currentSlide);
        }
    }

    function previousSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
        }
    }

    // Initial display of the first slide
    showSlide(currentSlide);

    // Add event listeners for carousel buttons
    document.getElementById("next-slide").addEventListener("click", nextSlide);
    document.getElementById("previous-slide").addEventListener("click", previousSlide);

    // Scroll functionality to hide header sub-elements
    const header = document.querySelector('header');
    const headerSubtitle = document.querySelector('.header-subtitle');
    const headerDescription = document.querySelector('.header-description');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Adjust scroll threshold as needed
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide sub-elements based on the 'scrolled' class
        const isScrolled = header.classList.contains('scrolled');
        headerSubtitle.style.opacity = isScrolled ? '0' : '1';
        headerSubtitle.style.visibility = isScrolled ? 'hidden' : 'visible';
        headerDescription.style.opacity = isScrolled ? '0' : '1';
        headerDescription.style.visibility = isScrolled ? 'hidden' : 'visible';
    });
});
