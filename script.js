
// WhatsApp contact functionality
function openWhatsApp() {
    const whatsappNumber = "5521982957672";
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappLink, '_blank');
}

// Smooth scroll to services section
function scrollToServices() {
    document.getElementById('servicos').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Mobile menu toggle (if needed in the future)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('nav-mobile-open');
}

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px -1px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.team-card, .services-card, .digitalization-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
