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

    // Scroll Reveal Animation for 'fade-in-section'
    const fadeInSections = document.querySelectorAll('.fade-in-section');

    const revealSections = () => {
        fadeInSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Trigger visibility slightly before full view
            if (sectionTop < windowHeight - 100) {
                section.classList.add('is-visible');
            }
        });
    };

    // Run check on page load
    revealSections();

    // Run check on scroll
    window.addEventListener('scroll', revealSections);
});
