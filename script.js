// Show only the selected section
function showSection(id) {
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
    });

    const target = document.querySelector(id);
    if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Navigation link handling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        showSection(targetId);
    });
});

// On initial load
document.addEventListener('DOMContentLoaded', function () {
    showSection('#home');

    // Update footer year
    const yearSpan = document.querySelector('footer p');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = `© ${currentYear} Mahendra's Portfolio. All rights reserved.`;
    }

    // Handle contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.elements[0].value;
            const email = this.elements[1].value;
            const message = this.elements[2].value;
            console.log('Form submitted:', { name, email, message });
            alert('Thank you for your message!');
            this.reset();
        });
    }
});
