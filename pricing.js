// Pricing Page JavaScript

// Pricing data
const pricingData = {
    monthly: {
        starter: 499,
        professional: 699,
        enterprise: 3495
    },
    annual: {
        starter: 399, // 20% discount
        professional: 559, // 20% discount
        enterprise: 2796 // 20% discount
    }
};

// DOM elements
let billingToggle, starterPrice, proPrice, enterprisePrice;

// Initialize pricing
let isAnnual = false;

// Update prices based on billing cycle
function updatePrices() {
    console.log('Updating prices, isAnnual:', isAnnual);
    const prices = isAnnual ? pricingData.annual : pricingData.monthly;
    
    if (starterPrice) {
        starterPrice.textContent = prices.starter.toLocaleString();
        console.log('Updated starter price to:', prices.starter);
    }
    if (proPrice) {
        proPrice.textContent = prices.professional.toLocaleString();
        console.log('Updated pro price to:', prices.professional);
    }
    if (enterprisePrice) {
        enterprisePrice.textContent = prices.enterprise.toLocaleString();
        console.log('Updated enterprise price to:', prices.enterprise);
    }
    
    console.log('Updated prices:', prices);
}

// Test function to manually toggle pricing
function testToggle() {
    console.log('Testing toggle...');
    isAnnual = !isAnnual;
    billingToggle.checked = isAnnual;
    updatePrices();
}

// Make testToggle available globally for debugging
window.testToggle = testToggle;

// Handle billing toggle
function handleBillingToggle() {
    console.log('Toggle clicked, checked:', billingToggle.checked);
    isAnnual = billingToggle.checked;
    updatePrices();
    
    // Add animation effect
    const priceElements = [starterPrice, proPrice, enterprisePrice];
    priceElements.forEach(element => {
        if (element) {
            element.style.transform = 'scale(1.1)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        }
    });
    
    // Update period text
    const periodElements = document.querySelectorAll('.period');
    periodElements.forEach(element => {
        element.textContent = isAnnual ? '/month (billed annually)' : '/month';
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing pricing...');
    
    // Get DOM elements
    billingToggle = document.getElementById('billingToggle');
    starterPrice = document.getElementById('starterPrice');
    proPrice = document.getElementById('proPrice');
    enterprisePrice = document.getElementById('enterprisePrice');
    
    console.log('DOM elements found:', {
        billingToggle: !!billingToggle,
        starterPrice: !!starterPrice,
        proPrice: !!proPrice,
        enterprisePrice: !!enterprisePrice
    });
    
    // Initialize prices
    updatePrices();
    
    // Add toggle event listener
    if (billingToggle) {
        billingToggle.addEventListener('change', handleBillingToggle);
        billingToggle.addEventListener('click', handleBillingToggle);
        console.log('Toggle event listeners added');
    } else {
        console.error('Billing toggle element not found!');
    }
    
    // Add smooth scrolling for anchor links
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
    
    // Add intersection observer for animations
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
    const animatedElements = document.querySelectorAll('.plan-card, .faq-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add hover effects for plan cards
    const planCards = document.querySelectorAll('.plan-card');
    planCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = card.classList.contains('featured') 
                ? 'scale(1.05) translateY(-5px)' 
                : 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = card.classList.contains('featured') 
                ? 'scale(1.05)' 
                : 'translateY(0)';
        });
    });
    
    // Add click tracking for analytics
    const ctaButtons = document.querySelectorAll('.btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Track button click
            const buttonText = button.textContent;
            const planType = button.closest('.plan-card')?.querySelector('.plan-name')?.textContent || 'CTA';
            
            console.log('Button clicked:', {
                text: buttonText,
                plan: planType,
                billing: isAnnual ? 'annual' : 'monthly'
            });
            
            // You can add Google Analytics tracking here
            if (typeof gtag !== 'undefined') {
                gtag('event', 'pricing_cta_click', {
                    button_text: buttonText,
                    plan_type: planType,
                    billing_cycle: isAnnual ? 'annual' : 'monthly'
                });
            }
        });
    });
});

// Mobile navigation toggle (reuse from main script)
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
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

// Add CSS for price animation
const style = document.createElement('style');
style.textContent = `
    .amount {
        transition: transform 0.2s ease;
    }
    
    .plan-card {
        transition: all 0.3s ease;
    }
    
    .plan-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }
    
    .plan-card.featured:hover {
        transform: scale(1.05) translateY(-5px);
    }
    
    @media (max-width: 768px) {
        .plan-card.featured {
            transform: none;
        }
        
        .plan-card.featured:hover {
            transform: translateY(-5px);
        }
    }
`;
document.head.appendChild(style); 