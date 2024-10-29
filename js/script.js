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
        if (prevButton.disabled) {
            prevButton.classList.add('arrow-disabled');
        } else {
            prevButton.classList.remove('arrow-disabled');
        }

        if (nextButton.disabled) {
            nextButton.classList.add('arrow-disabled');
        } else {
            nextButton.classList.remove('arrow-disabled');
        }
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
});
