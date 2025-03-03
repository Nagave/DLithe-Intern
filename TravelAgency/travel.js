// JavaScript for Travel Agency Website

// Toggle Menu for Mobile View
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hero Section - Background Image Slideshow
const images = [
    'https://source.unsplash.com/1600x900/?beach,travel',
    'https://source.unsplash.com/1600x900/?mountains,travel',
    'https://source.unsplash.com/1600x900/?city,travel'
];
let currentIndex = 0;
const heroSection = document.querySelector('.hero');

function changeHeroBackground() {
    heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}
setInterval(changeHeroBackground, 5000); // Change every 5 seconds

// Destination Cards Hover Effect
document.querySelectorAll('.destination-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.1)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Auto-Sliding Testimonials
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
function showNextTestimonial() {
    testimonials.forEach((t, i) => {
        t.style.display = i === testimonialIndex ? 'block' : 'none';
    });
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}
setInterval(showNextTestimonial, 4000);

// Newsletter Subscription Alert
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    this.reset();
});
