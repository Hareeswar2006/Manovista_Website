// Testimonials data
const testimonials = [
  {
    name: "Shyam Sundar",
    title: "CEO, Tech Solutions Ltd.",
    text: "Working with Manovista has taken a huge weight off our shoulders. They handle our bookkeeping, taxes, and compliance so smoothly — it just gives us peace of mind. The financial statements are always on point, and we no longer worry about missing deadlines."
  },
  {
    name: "Ganesh Venkadyala",
    title: "Founder, Creative Ventures",
    text: "We brought Manovista on board during a tricky time when we were restructuring our finances and planning to scale. Their virtual CFO service was exactly what we needed — insightful, hands-on, and always available. Their advice helped us avoid some serious pitfalls."
  },
  {
    name: "Suresh.P",
    title: "HR Director, Innovate Corp",
    text: "Manovista has been our go-to HR partner. From helping us find the right talent to handling payroll and compliance — they’ve made our HR function so much more efficient. Plus, the employee training coordination they handle has boosted morale and productivity."
  },
  {
    name: "Ravi Mehra",
    title: "Owner, Mehra Industries",
    text: "Before we started working with Manovista, our books were always a mess by month-end. Now, everything is up to date, clean, and compliant. Their team takes care of our tax filings and bookkeeping like clockwork. It’s a relief knowing we’re in safe hands."
  },
  {
    name: "Divya K.",
    title: "Startup Lead, NextGen AI",
    text: "We were at a crossroads financially when we brought in Manovista as our Virtual CFO. They didn’t just manage numbers—they gave us a clear plan, restructured our financials, and helped us make smarter decisions. I honestly don’t know where we’d be without them."
  },
  {
    name: "Naveen Joshi",
    title: "Operations Manager, Global Logistics",
    text: "We were struggling to manage recruitment and payroll efficiently until Manovista came into the picture. Now, hiring is smoother, salaries go out on time, and compliance headaches are gone."
  }
];

let currentTestimonial = 0;

function renderTestimonial(index) {
  const testimonial = testimonials[index];
  const content = `
    <span class="client-name">${testimonial.name}</span><br>
    <span class="client-title">${testimonial.title}</span>
    <p class="testimonial-text">${testimonial.text}</p>
  `;
  document.querySelector('.testimonial-content').innerHTML = content;
}

function renderDots() {
  const dotsContainer = document.getElementById('testimonial-dots');
  dotsContainer.innerHTML = '';
  testimonials.forEach((_, idx) => {
    const dot = document.createElement('span');
    dot.className = 'testimonial-dot' + (idx === currentTestimonial ? ' active' : '');
    dot.addEventListener('click', () => {
      currentTestimonial = idx;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  });
}

function updateCarousel() {
  renderTestimonial(currentTestimonial);
  renderDots();
}

let autoSlideInterval = null;

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateCarousel();
  }, 6000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('testimonial-prev').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateCarousel();
  });
  document.getElementById('testimonial-next').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateCarousel();
  });
  updateCarousel();
  startAutoSlide();

  // Pause on hover
  const carousel = document.querySelector('.testimonial-carousel');
  carousel.addEventListener('mouseenter', stopAutoSlide);
  carousel.addEventListener('mouseleave', startAutoSlide);
});

document.addEventListener('DOMContentLoaded', function() {
    // Animation for mission cards
    const missionCards = document.querySelectorAll('.mission-card');
    
    missionCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});