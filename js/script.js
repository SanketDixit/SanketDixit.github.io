// Function to update the footer year
document.addEventListener("DOMContentLoaded", function() {
    const yearElement = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});

// Function to make sections active gradually as they come into the viewport
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + window.innerHeight; // Calculate the bottom of the viewport

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        // Add 'active' class if the section is partially or fully in view
        if (scrollPos >= sectionTop + sectionHeight / 3 && window.scrollY <= sectionBottom - sectionHeight / 3) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});
