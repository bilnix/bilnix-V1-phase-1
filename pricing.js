// Pricing Page JavaScript

// Pricing data
const pricingData = {
    monthly: {
        starter: 499,
        professional: 699,
        enterprise: 1799
    },
    annual: {
        starter: 399, // 20% discount
        professional: 559, // 20% discount
        enterprise: 1439 // 20% discount
    }
};

// Global variables
let isAnnual = false;

// Update prices based on billing cycle
function updatePrices() {
    console.log('Updating prices, isAnnual:', isAnnual);
    const prices = isAnnual ? pricingData.annual : pricingData.monthly;
    
    // Update price elements
    const starterPrice = document.getElementById('starterPrice');
    const proPrice = document.getElementById('proPrice');
    const enterprisePrice = document.getElementById('enterprisePrice');
    
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
    
    // Update period text
    const periodElements = document.querySelectorAll('.period');
    periodElements.forEach(element => {
        element.textContent = isAnnual ? '/month (billed annually)' : '/month';
    });
    
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
}

// Handle billing toggle
function handleBillingToggle() {
    const billingToggle = document.getElementById('billingToggle');
    if (billingToggle) {
        isAnnual = billingToggle.checked;
        console.log('Toggle clicked, isAnnual:', isAnnual);
        updatePrices();
    }
}

// Initialize pricing when DOM is loaded
function initializePricing() {
    console.log('Initializing pricing...');
    
    // Get the toggle element
    const billingToggle = document.getElementById('billingToggle');
    
    if (billingToggle) {
        console.log('Billing toggle found, adding event listener');
        billingToggle.addEventListener('change', handleBillingToggle);
        
        // Initialize prices
        updatePrices();
    } else {
        console.error('Billing toggle element not found!');
    }
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePricing);
} else {
    // DOM is already loaded
    initializePricing();
}

// Add test functions for debugging
window.testToggle = function() {
    console.log('Testing toggle manually...');
    const billingToggle = document.getElementById('billingToggle');
    if (billingToggle) {
        billingToggle.checked = !billingToggle.checked;
        handleBillingToggle();
    }
};

window.testPriceUpdate = function() {
    console.log('Testing price update manually...');
    updatePrices();
};

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
        });
    });
    
    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        }
    });
}); 