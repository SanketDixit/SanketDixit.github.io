document.addEventListener("DOMContentLoaded", function() {
    const yearElement = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    // Using IntersectionObserver for better scroll performance
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Add 'active' when section comes into view
            } else {
                entry.target.classList.remove('active'); // Remove 'active' when section goes out of view
            }
        });
    }, {
        threshold: 0.3 // Trigger when 30% of the section is visible
    });

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});
