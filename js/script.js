// Function to update the footer year
document.addEventListener("DOMContentLoaded", function() {
    const yearElement = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});

// Function to make sections active one by one while scrolling
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + window.innerHeight / 2; // Position in the middle of the viewport

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Add 'active' class if the section is in the viewport
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});
