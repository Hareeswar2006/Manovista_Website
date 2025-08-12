document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Virtual Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Reveal Animation for Virtual Sections
    const virtualSections = document.querySelectorAll('.virtual-reveal');

    const revealOnScroll = () => {
        virtualSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Show section when it enters the viewport with a little pre-load margin
            if (sectionTop < windowHeight - 120) {
                section.classList.add('show-virtual');
            }
        });
    };

    // Run once on load and on every scroll
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
});
