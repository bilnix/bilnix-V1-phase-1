# Bilnix - Professional Landing Page

A modern, responsive landing page for Bilnix - a comprehensive billing and business analytics platform designed for various industries including salons, cafés, mobile shops, and more.

## 🚀 Features

### Design & UX
- **Modern & Professional Design** - Clean, trust-building interface with soft colors (sky blue, white, light grey)
- **Fully Responsive** - Mobile-first design that works perfectly on all devices
- **PWA Ready** - Progressive Web App with offline support and installation capabilities
- **Lightweight & Fast** - Optimized for performance with minimal loading times

### Sections
- **Hero Section** - Compelling headline with clear value proposition
- **Industry Showcase** - Top 3 featured industries + additional industry cards
- **How It Works** - Simple 3-step process explanation
- **Why Bilnix** - Key features and benefits
- **Download Options** - PWA, Windows EXE, and Android app downloads
- **Professional Footer** - Complete contact information and links

### Technical Features
- **SEO Optimized** - Meta tags, structured data, and semantic HTML
- **Accessibility** - WCAG compliant with proper focus states and ARIA labels
- **Performance** - Lazy loading, optimized images, and efficient CSS
- **Cross-browser Compatible** - Works on all modern browsers

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)** - Interactive functionality and PWA features
- **Font Awesome** - Professional icons
- **Google Fonts** - Inter font family for modern typography

## 📁 Project Structure

```
bilnix-v1-phase1/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── manifest.json       # PWA manifest
├── sw.js              # Service worker
├── assets/            # Images and icons
│   └── logo.svg       # Bilnix logo
└── README.md          # Project documentation
```

## 🚀 Quick Start

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **That's it!** The site is ready to use

### Local Development Server

For the best experience, especially for PWA features, run a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🎨 Customization

### Colors
The site uses CSS custom properties for easy color customization. Edit the `:root` section in `styles.css`:

```css
:root {
    --primary-color: #0ea5e9;    /* Main brand color */
    --primary-light: #38bdf8;    /* Light variant */
    --primary-dark: #0284c7;     /* Dark variant */
    --secondary-color: #64748b;  /* Secondary text */
    --accent-color: #f1f5f9;     /* Background accent */
    /* ... more colors */
}
```

### Content
- Update industry information in the HTML
- Modify contact details in the footer
- Change download links to point to actual files
- Update meta tags for SEO

### Images
Replace placeholder images in the `assets/` folder:
- `logo.svg` - Company logo
- `hero-dashboard.png` - Hero section image
- PWA icons (various sizes)
- Screenshots for PWA manifest

## 📱 PWA Features

The site includes full PWA support:

- **Installable** - Users can install as a native app
- **Offline Support** - Works without internet connection
- **Push Notifications** - Ready for notification implementation
- **App Shortcuts** - Quick access to key features

### PWA Setup
1. Ensure all PWA icons are in the `assets/` folder
2. Update the manifest.json with correct paths
3. Test installation on supported browsers

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## 📊 Performance

The site is optimized for:
- **Fast Loading** - Minimal file sizes and efficient code
- **Mobile Performance** - Optimized for mobile devices
- **SEO** - Proper meta tags and structured data
- **Accessibility** - WCAG 2.1 AA compliant

## 🚀 Deployment

### Static Hosting
Deploy to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

### Requirements
- HTTPS enabled (required for PWA features)
- Proper MIME types for all files
- Service worker registration

## 📝 License

This project is created for Bilnix. All rights reserved.

## 🤝 Support

For questions or support:
- Email: bilnixdotin@gmail.com
- Phone: +91 9322880059
- Website: https://bilnix.com

---

**Bilnix** - Billing bhi, Analysis bhi — Sab Bilnix par 