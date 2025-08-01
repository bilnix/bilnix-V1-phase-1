// Typewriter Effect for Hero Title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typewriter effect when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const text = "Billing bhi, Analysis bhi Sab Bilnix par";
        typeWriter(typewriterElement, text, 80);
    }
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.industry-card, .feature-card, .step, .download-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Download functionality
document.querySelectorAll('.download-card').forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Redirect to services page for all download options
        window.location.href = 'services.html';
    });
});

// PWA Installation Prompt
function showPWAPrompt() {
    // Check if PWA is installable
    if ('serviceWorker' in navigator && 'BeforeInstallPromptEvent' in window) {
        // Show PWA install prompt
        const pwaModal = document.createElement('div');
        pwaModal.className = 'pwa-modal';
        pwaModal.innerHTML = `
            <div class="pwa-modal-content">
                <h3>Install Bilnix PWA</h3>
                <p>Install Bilnix as a Progressive Web App for a better experience.</p>
                <div class="pwa-modal-buttons">
                    <button class="btn btn-primary" onclick="installPWA()">Install</button>
                    <button class="btn btn-secondary" onclick="closePWAModal()">Not Now</button>
                </div>
            </div>
        `;
        document.body.appendChild(pwaModal);
    } else {
        // Fallback for non-PWA browsers
        showDownloadModal('PWA Version', 'bilnix-pwa.zip');
    }
}

function installPWA() {
    // PWA installation logic would go here
    console.log('Installing PWA...');
    closePWAModal();
}

function closePWAModal() {
    const modal = document.querySelector('.pwa-modal');
    if (modal) {
        modal.remove();
    }
}

// Download Modal
function showDownloadModal(title, filename) {
    const modal = document.createElement('div');
    modal.className = 'download-modal';
    modal.innerHTML = `
        <div class="download-modal-content">
            <h3>Download ${title}</h3>
            <p>Your download will begin shortly...</p>
            <div class="download-progress">
                <div class="progress-bar"></div>
            </div>
            <button class="btn btn-primary" onclick="closeDownloadModal()">Close</button>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Simulate download progress
    const progressBar = modal.querySelector('.progress-bar');
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = progress + '%';
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                closeDownloadModal();
            }, 1000);
        }
    }, 200);
}

function closeDownloadModal() {
    const modal = document.querySelector('.download-modal');
    if (modal) {
        modal.remove();
    }
}

// Industry demo functionality
document.querySelectorAll('.industry-card a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const industry = link.closest('.industry-card').querySelector('h3').textContent;
        showIndustryDemo(industry);
    });
});

function showIndustryDemo(industry) {
    const modal = document.createElement('div');
    modal.className = 'demo-modal';
    modal.innerHTML = `
        <div class="demo-modal-content">
            <div class="demo-header">
                <h3>${industry} Demo</h3>
                <button class="close-btn" onclick="closeDemoModal()">&times;</button>
            </div>
            <div class="demo-content">
                <div class="demo-placeholder">
                    <i class="fas fa-play-circle"></i>
                    <p>Interactive demo for ${industry}</p>
                    <p>Coming soon...</p>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function closeDemoModal() {
    const modal = document.querySelector('.demo-modal');
    if (modal) {
        modal.remove();
    }
}

// Add CSS for modals
const modalStyles = `
<style>
.pwa-modal, .download-modal, .demo-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
}

.pwa-modal-content, .download-modal-content, .demo-modal-content {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    max-width: 400px;
    width: 90%;
    text-align: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.demo-modal-content {
    max-width: 600px;
    width: 90%;
}

.demo-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.close-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #64748b;
}

.close-btn:hover {
    color: #0ea5e9;
}

.pwa-modal-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1.5rem;
}

.download-progress {
    background: #e2e8f0;
    border-radius: 6px;
    height: 8px;
    margin: 1rem 0;
    overflow: hidden;
}

.progress-bar {
    background: #0ea5e9;
    height: 100%;
    width: 0%;
    transition: width 0.2s ease;
}

.demo-placeholder {
    text-align: center;
    padding: 3rem 1rem;
    color: #64748b;
}

.demo-placeholder i {
    font-size: 4rem;
    color: #0ea5e9;
    margin-bottom: 1rem;
}

@media (max-width: 768px) {
    .pwa-modal-content, .download-modal-content, .demo-modal-content {
        margin: 1rem;
        padding: 1.5rem;
    }
    
    .pwa-modal-buttons {
        flex-direction: column;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', modalStyles);

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData = {}) {
    // Google Analytics or other analytics tracking
    console.log('Event tracked:', eventName, eventData);
    
    // Example: Track button clicks
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
}

// Track important user interactions
document.addEventListener('DOMContentLoaded', () => {
    // Track CTA button clicks
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
        btn.addEventListener('click', () => {
            trackEvent('cta_click', {
                button_text: btn.textContent,
                section: btn.closest('section')?.id || 'unknown'
            });
        });
    });

    // Track industry card interactions
    document.querySelectorAll('.industry-card').forEach(card => {
        card.addEventListener('click', () => {
            const industry = card.querySelector('h3').textContent;
            trackEvent('industry_view', { industry });
        });
    });
}); 