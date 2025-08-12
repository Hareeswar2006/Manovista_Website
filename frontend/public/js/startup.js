document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Startup Anchor Links
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

    // Scroll Reveal Animation for Startup Sections
    const startupSections = document.querySelectorAll('.startup-section');

    const revealStartupSections = () => {
        startupSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Reveal when section is near viewport
            if (sectionTop < windowHeight - 100) {
                section.classList.add('visible');
            }
        });
    };

    // Initial check
    revealStartupSections();

    // Check on scroll
    window.addEventListener('scroll', revealStartupSections);
});
