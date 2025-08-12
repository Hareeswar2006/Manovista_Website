document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for BPO site navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Reveal animations for BPO service sections
    const revealSections = document.querySelectorAll('.fade-in-section');

    const revealOnScroll = () => {
        revealSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Trigger reveal slightly before fully in view
            if (sectionTop < windowHeight - 100) {
                section.classList.add('is-visible');
            }
        });
    };

    // Run on load
    revealOnScroll();

    // Run on scroll
    window.addEventListener('scroll', revealOnScroll);
});
