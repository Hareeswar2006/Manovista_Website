document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the 'fade-in-section' class
    const fadeIns = document.querySelectorAll('.fade-in-section');

    // Define options for the Intersection Observer
    const observerOptions = {
        root: null, // The viewport is the root
        rootMargin: '0px', // No margin around the root
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // Create a new Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting (i.e., visible in the viewport)
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the fade-in CSS
                entry.target.classList.add('is-visible');
                // Stop observing the element once it has faded in
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Loop through all fade-in sections and observe them
    fadeIns.forEach(fadein => {
        observer.observe(fadein);
    });
});