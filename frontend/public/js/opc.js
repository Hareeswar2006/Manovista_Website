document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Lazy/Scroll Reveal Animation for Sections (using 'fade-in-section')
    const fadeInSections = document.querySelectorAll('.fade-in-section');

    const checkIfVisible = () => {
        fadeInSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // If the section is within the viewport (with a small offset)
            if (sectionTop < windowHeight - 100) { // -100px offset for early reveal
                section.classList.add('is-visible');
            }
        });
    };

    // Initial check on page load
    checkIfVisible();

    // Check on scroll
    window.addEventListener('scroll', checkIfVisible);
});