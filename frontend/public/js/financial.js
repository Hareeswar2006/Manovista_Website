document.addEventListener('DOMContentLoaded', () => {
    /**
     * Smooth Scrolling for Anchor Links
     * Example: Navigation for financial services (e.g., #investments, #loans, #insurance)
     */
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

    /**
     * Lazy/Scroll Reveal Animation for Financial Sections
     * Example: Revealing investment plans, loan offers, or insurance packages
     * Uses the 'fade-in-financial' CSS class for animation
     */
    const fadeInSections = document.querySelectorAll('.fade-in-financial');

    const checkIfVisible = () => {
        fadeInSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Trigger animation when section comes into view (100px early)
            if (sectionTop < windowHeight - 100) {
                section.classList.add('is-visible');
            }
        });
    };

    // Initial check on page load
    checkIfVisible();

    // Check visibility on scroll
    window.addEventListener('scroll', checkIfVisible);
});
