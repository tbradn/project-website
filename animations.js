// Add smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animation on scroll
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    section.classList.add('fade-out');
    observer.observe(section);
});

// Header shrink effect on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});
