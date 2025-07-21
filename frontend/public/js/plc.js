document.addEventListener('DOMContentLoaded', function () {
            
            // Function for accordion
            const accordionHeaders = document.querySelectorAll('.accordion-header');
            accordionHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    const activeHeader = document.querySelector('.accordion-header.active');
                    if(activeHeader && activeHeader !== header) {
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


            // Intersection Observer for fade-in animations
            const sections = document.querySelectorAll('.fade-in-section');
            
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Optional: stop observing once it's visible
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });
        });