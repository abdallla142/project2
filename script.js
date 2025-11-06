// Mobile Navigation Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenuDesktop = document.querySelector('.nav-menu-desktop');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenuDesktop.classList.toggle('mobile-menu-open');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', () => {
            navMenuDesktop.classList.remove('mobile-menu-open');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Video category filtering
const categoryButtons = document.querySelectorAll('.category-btn');
const videoCards = document.querySelectorAll('.video-card');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const category = button.getAttribute('data-category');
        
        videoCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease-in';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.video-card, .tutorial-card, .challenge-card, .tip-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Challenge button interactions
const challengeButtons = document.querySelectorAll('.btn-challenge');

challengeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const challengeCard = this.closest('.challenge-card');
        const challengeTitle = challengeCard.querySelector('h3').textContent;
        
        // Visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // In a real implementation, you would save the challenge acceptance
        console.log(`Challenge accepted: ${challengeTitle}`);
        
        // Show a simple alert (you can replace this with a modal)
        alert(`Great! You've accepted the "${challengeTitle}" challenge. Good luck!`);
    });
});

// Start Challenge function for challenge links
function startChallenge(challengeName) {
    alert(`Starting "${challengeName}"! Get ready to practice and improve your skills.`);
    // In a real implementation, this would navigate to challenge details or start tracking
}

// Video card click interactions
videoCards.forEach(card => {
    card.addEventListener('click', function() {
        const videoTitle = this.querySelector('h3').textContent;
        const videoCategory = this.getAttribute('data-category');
        
        // Visual feedback
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
        
        // In a real implementation, this would open a video player or modal
        console.log(`Opening video: ${videoTitle} (${videoCategory})`);
        
        // You can replace this with actual video playback functionality
        alert(`Video: "${videoTitle}"\n\nIn a full implementation, this would open the video player.`);
    });
});

// Progress bar animation on scroll
const progressBars = document.querySelectorAll('.progress-fill');

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.style.width;
            progressBar.style.width = '0%';
            setTimeout(() => {
                progressBar.style.width = width;
            }, 100);
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('.section, #home');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Form submission handler for tutorial form
const tutorialForm = document.getElementById('tutorialForm');
if (tutorialForm) {
    tutorialForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const email = document.getElementById('email').value.trim();
        const firstName = document.getElementById('firstName').value.trim();
        const feedback = document.getElementById('feedback').value.trim();
        
        // Validation
        if (!email || !firstName || !feedback) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Success message
        alert('Thank you for your interest! We\'ll notify you when the dribbling tutorial is available.');
        tutorialForm.reset();
    });
}

