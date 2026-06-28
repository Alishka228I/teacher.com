/* ====================================
   TEACHER GIFT WEBSITE - JAVASCRIPT LOGIC
   ==================================== */

// ===== STATE MANAGEMENT =====
const appState = {
    currentSection: 'intro',
    userData: {
        fullName: '',
        age: '',
        animal: '',
        cake: '',
        chocolate: ''
    },
    isAzamat: false
};

// ===== DOM ELEMENTS =====
const sections = {
    intro: document.getElementById('introSection'),
    form: document.getElementById('formSection'),
    transition: document.getElementById('transitionSection'),
    cards: document.getElementById('cardsSection'),
    special: document.getElementById('specialSection'),
    thankYou: document.getElementById('thankYouSection'),
    final: document.getElementById('finalSection')
};

const buttons = {
    start: document.getElementById('startBtn'),
    continueFromForm: document.querySelector('#userForm button[type="submit"]'),
    continueFromCard: document.getElementById('continueFromCard')
};

const forms = {
    userForm: document.getElementById('userForm')
};

const elements = {
    cards: document.querySelectorAll('.card'),
    textLines: document.querySelectorAll('.text-line'),
    particles: document.querySelectorAll('.particle-final')
};

// ===== UTILITY FUNCTIONS =====

/**
 * Hide all sections
 */
function hideAllSections() {
    Object.values(sections).forEach(section => {
        if (section) section.classList.add('hidden');
    });
}

/**
 * Show specific section
 */
function showSection(sectionKey) {
    hideAllSections();
    if (sections[sectionKey]) {
        sections[sectionKey].classList.remove('hidden');
        appState.currentSection = sectionKey;
        // Trigger reflow to enable animations
        sections[sectionKey].offsetHeight;
    }
}

/**
 * Delay execution
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Smooth scroll to top
 */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== FORM HANDLING =====

/**
 * Validate and submit form
 */
forms.userForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    appState.userData.fullName = document.getElementById('fullName').value.trim();
    appState.userData.age = document.getElementById('age').value;
    appState.userData.animal = document.getElementById('animal').value.trim();
    appState.userData.cake = document.getElementById('cake').value.trim();
    appState.userData.chocolate = document.getElementById('chocolate').value.trim();

    // Check consent
    const consentCheckbox = document.getElementById('consent');
    if (!consentCheckbox.checked) {
        alert('Пожалуйста, согласитесь с использованием ваших данных');
        return;
    }

    // Check for special name
    appState.isAzamat = appState.userData.fullName.toLowerCase().includes('азамат');

    // Fade out form and proceed
    const formContainer = document.querySelector('.form-container');
    formContainer.style.opacity = '0';
    formContainer.style.transform = 'translateY(-20px)';
    
    await delay(400);
    showSection('transition');
    await delay(3500);
    
    // Check if special or regular flow
    if (appState.isAzamat) {
        showSection('special');
        await delay(2000);
    }
    
    showSection('cards');
    startCardSequence();
});

// ===== CARD SEQUENCE =====

/**
 * Start the card animation sequence
 */
function startCardSequence() {
    scrollToTop();
    
    const allCards = document.querySelectorAll('.card');
    let currentCardIndex = 0;

    // Function to show next card
    function showNextCard() {
        if (currentCardIndex >= allCards.length) {
            // All cards shown, show continue button
            const continueBtn = document.getElementById('continueFromCard');
            continueBtn.classList.remove('hidden');
            return;
        }

        // Hide all cards
        allCards.forEach(card => card.classList.remove('card-visible'));

        // Show current card
        const currentCard = allCards[currentCardIndex];
        currentCard.classList.add('card-visible');

        // Auto advance after delay (except last card which needs manual interaction)
        if (currentCardIndex < allCards.length - 1) {
            setTimeout(() => {
                currentCardIndex++;
                showNextCard();
            }, 2800); // Show for 2.8 seconds before advancing
        } else {
            // Last card (photo) - pause longer
            setTimeout(() => {
                currentCardIndex++;
                showNextCard();
            }, 3500);
        }
    }

    // Start the sequence
    showNextCard();
}

// ===== BUTTON EVENTS =====

/**
 * Start button - Begin the journey
 */
buttons.start.addEventListener('click', async () => {
    // Fade out intro
    const introContent = document.querySelector('.intro-content');
    introContent.style.opacity = '0';
    introContent.style.transform = 'translateY(-30px)';
    
    await delay(400);
    showSection('form');
    scrollToTop();
});

/**
 * Continue from card button - Proceed to final section
 */
buttons.continueFromCard.addEventListener('click', async () => {
    const continueBtn = document.getElementById('continueFromCard');
    continueBtn.classList.add('hidden');
    
    // Fade out cards section
    sections.cards.style.opacity = '0';
    
    await delay(400);
    showSection('final');
    scrollToTop();
    
    // Start final animations
    await delay(800);
    animateTextLines();
    animateParticles();
});

// ===== FINAL SECTION ANIMATIONS =====

/**
 * Animate text lines appearance
 */
function animateTextLines() {
    // Text lines are already animated via CSS
    // This function can be extended for additional logic
    console.log('Text lines animating...');
}

/**
 * Animate final particles
 */
function animateParticles() {
    elements.particles.forEach(particle => {
        // Particles are already animated via CSS
        // This ensures they start at the right time
        particle.style.animationPlayState = 'running';
    });
}

// ===== KEYBOARD NAVIGATION =====

/**
 * Handle Enter key for form submission
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (appState.currentSection === 'form') {
            // Auto-submit form on Enter if all fields are valid
            const form = document.getElementById('userForm');
            if (form.checkValidity()) {
                form.dispatchEvent(new Event('submit'));
            }
        }
    }
});

// ===== PREVENT DEFAULT FORM SUBMISSION =====

/**
 * Smooth section transitions
 */
function setSectionTransitions() {
    Object.values(sections).forEach(section => {
        if (section) {
            section.style.transition = 'opacity 0.4s ease-out';
        }
    });
}

// ===== RESPONSIVE HANDLING =====

/**
 * Handle window resize for responsive adjustments
 */
window.addEventListener('resize', () => {
    // Could add responsive logic here if needed
});

// ===== INITIALIZATION =====

/**
 * Initialize the application
 */
function init() {
    console.log('🎓 Teacher Gift Website Initialized');
    
    // Set up transitions
    setSectionTransitions();
    
    // Show intro section
    showSection('intro');
    scrollToTop();
    
    // Log initial state
    console.log('State:', appState);
}

// ===== START APPLICATION =====
document.addEventListener('DOMContentLoaded', init);

// ===== EXTRA POLISH =====

/**
 * Add smooth scrolling and prevent body scroll on transitions
 */
function lockScroll() {
    document.body.style.overflow = 'hidden';
}

function unlockScroll() {
    document.body.style.overflow = 'auto';
}

// ===== ADVANCED ANIMATIONS =====

/**
 * Create typing effect for future enhancements
 */
function createTypingEffect(element, text, speed = 50) {
    return new Promise(resolve => {
        let index = 0;
        element.textContent = '';

        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }

        type();
    });
}

/**
 * Create fade effect
 */
function fadeElement(element, duration = 400, fadeOut = true) {
    return new Promise(resolve => {
        const startOpacity = fadeOut ? 1 : 0;
        const endOpacity = fadeOut ? 0 : 1;
        const startTime = Date.now();

        function animate() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            element.style.opacity = startOpacity + (endOpacity - startOpacity) * progress;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.style.opacity = endOpacity;
                resolve();
            }
        }

        requestAnimationFrame(animate);
    });
}

/**
 * Add parallax effect to elements
 */
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('mousemove', (e) => {
        const xPercent = (e.clientX / window.innerWidth) * 100;
        const yPercent = (e.clientY / window.innerHeight) * 100;

        parallaxElements.forEach(element => {
            const speed = element.dataset.parallax || 5;
            element.style.transform = `translate(${(xPercent - 50) * speed * 0.1}px, ${(yPercent - 50) * speed * 0.1}px)`;
        });
    });
}

/**
 * Performance optimization - Lazy load images
 */
function lazyLoadImages() {
    const images = document.querySelectorAll('img[src*="images/"]');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // Image is already in src, so just ensure it loads
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => observer.observe(img));
    }
}

/**
 * Add visual feedback to all buttons
 */
function enhanceButtons() {
    const allButtons = document.querySelectorAll('button');
    
    allButtons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });

        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// ===== CALL ENHANCEMENT FUNCTIONS ON INIT =====
document.addEventListener('DOMContentLoaded', () => {
    lazyLoadImages();
    enhanceButtons();
});

/**
 * Handle form input focus states for better UX
 */
function enhanceFormInputs() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="number"]');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.borderColor = 'var(--color-gold)';
        });

        input.addEventListener('blur', function() {
            this.parentElement.style.borderColor = 'rgba(212, 165, 116, 0.2)';
        });
    });
}

document.addEventListener('DOMContentLoaded', enhanceFormInputs);

// ===== ACCESSIBILITY IMPROVEMENTS =====

/**
 * Add focus visible styles
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

/**
 * Log performance metrics
 */
window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
});

// ===== ERROR HANDLING =====

/**
 * Handle image loading errors
 */
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.warn('⚠️ Image failed to load:', e.target.src);
        e.target.style.backgroundColor = 'rgba(212, 165, 116, 0.1)';
    }
}, true);

/**
 * Console message for developers
 */
console.log('%c🎓 Teacher Gift Website v1.0', 'color: #d4a574; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px rgba(212, 165, 116, 0.3);');
console.log('%cPowered by HTML, CSS & JavaScript', 'color: #d4a574; font-style: italic;');
