document.addEventListener('DOMContentLoaded', function () {
    // --- Smooth Scrolling for Anchor Links ---
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

    // --- Intersection Observer for Fade-in Animations ---
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    fadeInSections.forEach(section => {
        observer.observe(section);
    });

    // --- Testimonials Carousel Logic ---
    const testimonials = [
        { text: "Their training coordination transformed our onboarding process — employees felt valued from day one.", author: "Ramesh P., HR Head" },
        { text: "We finally have a structured approach to learning, and productivity has increased significantly.", author: "Sneha V., Operations Director" },
        { text: "Professional, reliable, and innovative — the best training coordination partner we’ve worked with.", author: "David L., CEO" }
    ];
    let currentTestimonial = 0;
    const testimonialContainer = document.querySelector('.testimonial-content');

    function renderTestimonial() {
        const testimonial = testimonials[currentTestimonial];
        testimonialContainer.innerHTML = `
            <p>"${testimonial.text}"</p>
            <span>- ${testimonial.author}</span>
        `;
    }
    
    // Event listeners for navigation buttons
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (nextBtn && prevBtn && testimonialContainer) {
        nextBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            renderTestimonial();
        });
        
        prevBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            renderTestimonial();
        });
        
        // Initial render
        renderTestimonial();
    }

    // --- FAQ Accordion Logic ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const activeHeader = document.querySelector('.accordion-header.active');
            if (activeHeader && activeHeader !== header) {
                activeHeader.classList.remove('active');
                activeHeader.nextElementSibling.style.maxHeight = 0;
            }
            header.classList.toggle('active');
            const content = header.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});
