# 🎓 Teacher Gift Website — Premium Interactive Presentation

A sophisticated, cinematic gift website for a programming teacher built with pure HTML, CSS, and JavaScript. Features smooth animations, glassmorphism design, and a personalized experience with special animations for specific names.

## 📋 Features

✨ **Premium Design**
- Glassmorphism effect with frosted glass cards
- Gold color scheme with elegant swatches (#d4a574)
- Cinematic light effects and glow shadows
- Smooth, fluid animations throughout

🎬 **Interactive Experience**
- Multi-step narrative flow
- Smooth section transitions
- Auto-playing card carousel
- Text animations with staggered reveals
- Floating particle effects
- Responsive design for mobile and desktop

🎯 **Smart Features**
- Form validation and consent checkbox
- Special animation sequence for specific names (e.g., "Азамат")
- Auto-advancing card carousel (can be paused)
- Lazy-loaded images with fallbacks
- Keyboard navigation support
- Reduced motion support for accessibility

## 🗂️ Project Structure

```
TeacherGift/
├── index.html          # Main HTML structure
├── style.css           # All styles and animations
├── script.js           # Interactive logic and state management
├── images/
│   ├── teacher.jpg     # Teacher's photo (required)
│   └── thanks.jpg      # Thank you message image (required)
└── README.md           # This file
```

## 🚀 Setup Instructions

### Step 1: Extract Files
Place all three files (`index.html`, `style.css`, `script.js`) in the same directory.

### Step 2: Add Images
Create an `images/` folder in the same directory as your HTML file and add:

1. **teacher.jpg** — A portrait photo of the teacher
   - Recommended size: 400x500px or similar portrait aspect ratio
   - Format: JPG, PNG, or WebP
   - Will be displayed with a gold frame

2. **thanks.jpg** — A thank you image/background
   - Recommended size: 1920x1080px or larger
   - Format: JPG, PNG, or WebP
   - Displayed as a semi-transparent background on the final screen

### Step 3: Run Locally

**Option A: Using Python (Simple)**
```bash
# Python 3.x
python -m http.server 8000

# Then open: http://localhost:8000
```

**Option B: Using Node.js**
```bash
# If you have Node.js installed
npx http-server
```

**Option C: Using Live Server (VS Code)**
- Install "Live Server" extension in VS Code
- Right-click on `index.html` → "Open with Live Server"

## 🎨 Customization

### Colors
Edit the CSS variables in `style.css`:

```css
:root {
    --color-black: #0a0a0a;
    --color-dark-gray: #1a1a1a;
    --color-gold: #d4a574;
    --color-gold-light: #e8c4a0;
    --color-white: #ffffff;
}
```

### Text Content
Edit the HTML in `index.html`:

- **Intro Screen**: Change the heading and subtitle in the intro-section
- **Form Labels**: Modify form field labels as needed
- **Cards**: Update the emoji, titles, and content for each card
- **Final Text**: Edit the paragraph content in the final-section

### Animations Duration
Modify timing in `style.css` (look for animation properties like):
- `animation-duration: 2s` — Change the duration
- `animation-delay: 0.5s` — Adjust when animations start

### Special Name
To change the special name that triggers unique animations, edit in `script.js`:

```javascript
appState.isAzamat = appState.userData.fullName.toLowerCase().includes('азамат');
```

Replace `'азамат'` with your desired name.

## 🎮 User Journey

1. **Intro** — Black screen with smooth title reveal
2. **Form** — User enters personal information with consent
3. **Transition** — Dark effect with philosophical text
4. **Cards** — 7 compliment cards auto-play with gold lighting
5. **Photo** — Teacher's portrait appears with gold frame
6. **Final** — Thank you message with animated text and particles

**Special Path**: If name matches special name → Unique congratulations screen

## 🔧 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ IE11 (not supported)

## ♿ Accessibility Features

- Keyboard navigation (Tab, Enter)
- Focus visible styles for keyboard users
- Reduced motion support (`prefers-reduced-motion`)
- Semantic HTML structure
- ARIA-friendly form validation
- High contrast ratios for text

## 📱 Responsive Design

The website is fully responsive:
- **Desktop** (1920px+) — Full layout with optimized spacing
- **Tablet** (768px-1024px) — Adjusted font sizes and padding
- **Mobile** (320px-767px) — Compact layout, optimized touch targets

## ⚡ Performance

- Pure HTML/CSS/JavaScript (no external dependencies)
- Optimized animations using CSS transforms
- Lazy image loading
- Minimal JavaScript execution
- Page load time: ~1-2 seconds on 4G

## 🎬 Animation Reference

### Key Animations
- **Intro Title** — Fade in from top, gradient gold color
- **Form Appearance** — Slide in from bottom with scale effect
- **Cards** — Light reveal effect with brightness animation
- **Photo** — Zoom in with opacity
- **Final Text** — Staggered line-by-line reveal from left
- **Particles** — Float upward with fade-out effect

### Timing
- Form submission → Transition: 0.4s
- Transition screen: 3.5s total
- Each card display: 2.8s (last card: 3.5s)
- Text line reveals: Staggered at 0.4s intervals
- Particle animations: 3s each with staggered starts

## 🐛 Troubleshooting

### Images not loading
- Check that image files are in the `images/` folder
- Verify filenames match exactly: `teacher.jpg`, `thanks.jpg`
- Use absolute paths if serving from a subfolder

### Animations stuttering
- Check browser hardware acceleration is enabled
- Close other browser tabs to free up resources
- Try in a different browser

### Form not submitting
- Ensure all form fields are filled
- Check that consent checkbox is checked
- Open browser console (F12) for error messages

### Special animation not triggering
- Verify the exact spelling of the special name
- Check that the name field is filled completely
- The name matching is case-insensitive

## 📞 Support & Customization

If you need to customize this website further:

1. **Change Timing** — Edit `animation-delay` and `animation-duration` in CSS
2. **Add More Cards** — Duplicate a card div and update content
3. **Change Theme** — Modify the CSS color variables
4. **Add Sound** — Use JavaScript to play audio files on transitions

## 📄 License

This template is provided as-is for personal and educational use.

## 🎓 Credits

Created as a premium gift website for a programming teacher. Built with attention to detail, cinematic animations, and premium design principles.

---

**Version**: 1.0  
**Last Updated**: 2024  
**Built with**: HTML5, CSS3, JavaScript ES6+

Enjoy the presentation! 🎉
