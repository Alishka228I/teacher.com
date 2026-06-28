# ⚙️ Configuration Guide

This file explains how to customize every aspect of the Teacher Gift Website.

## 📋 Configuration Overview

### 1. Special Name (Triggers Special Animation)

**File**: `script.js` (around line 115)

**Current Setting**:
```javascript
appState.isAzamat = appState.userData.fullName.toLowerCase().includes('азамат');
```

**How to Change**:
Replace `'азамат'` with your desired name:

```javascript
// Example 1: Change to "Иван"
appState.isAzamat = appState.userData.fullName.toLowerCase().includes('иван');

// Example 2: Match multiple names
appState.isAzamat = appState.userData.fullName.toLowerCase().includes('азамат') ||
                    appState.userData.fullName.toLowerCase().includes('иван');

// Example 3: Match exact name (case-insensitive)
appState.isAzamat = appState.userData.fullName.toLowerCase() === 'азамат ишимов';
```

### 2. Color Theme

**File**: `style.css` (lines 10-21)

**Current Palette**:
```css
:root {
    --color-black: #0a0a0a;
    --color-dark-gray: #1a1a1a;
    --color-medium-gray: #2a2a2a;
    --color-light-gray: #3a3a3a;
    --color-gold: #d4a574;         /* Main accent color */
    --color-gold-light: #e8c4a0;   /* Light accent */
    --color-white: #ffffff;
}
```

**Popular Color Schemes**:

**Silver/Platinum** (Professional):
```css
--color-gold: #c0c0c0;
--color-gold-light: #e8e8e8;
```

**Rose Gold** (Elegant):
```css
--color-gold: #b76e79;
--color-gold-light: #d4a5ae;
```

**Copper** (Warm):
```css
--color-gold: #b87333;
--color-gold-light: #d4a574;
```

**Deep Emerald** (Modern):
```css
--color-gold: #2d6a4f;
--color-gold-light: #52b788;
```

**Sapphire** (Professional):
```css
--color-gold: #0f3460;
--color-gold-light: #16a3ff;
```

### 3. Text Content

**File**: `index.html`

#### Intro Section (Lines 15-20)
```html
<h1 class="intro-title">Спасибо, Учитель.</h1>
<p class="intro-subtitle">Небольшой подарок,<br>подготовленный специально для Вас.</p>
<button class="btn btn-gold" id="startBtn">Начать</button>
```

**Customize**:
- Change heading text
- Change subtitle (keep `<br>` for line breaks)
- Change button text

#### Form Section (Lines 32-60)
- **Title**: Change "Немного о Вас"
- **Labels**: Edit "Имя и фамилия", "Возраст", etc.
- **Consent Text**: Change the checkbox message

#### Cards Section (Lines 89-138)
Each card has:
```html
<div class="card glass-card">
    <div class="card-emoji">🏆</div>
    <div class="card-title">Настоящий профессионал</div>
</div>
```

Or:
```html
<div class="card glass-card">
    <div class="card-emoji">🧠</div>
    <div class="card-content">Your custom text here</div>
</div>
```

**Add More Cards**:
1. Copy an existing card
2. Paste before the closing `</div>` of cards-container
3. Update emoji and text
4. Animations will automatically apply

#### Final Section (Lines 155-166)
```html
<p class="text-line">Your custom text here</p>
```

### 4. Animation Timing

**File**: `script.js` and `style.css`

#### Card Display Duration
**File**: `script.js` (around line 198)
```javascript
setTimeout(() => {
    currentCardIndex++;
    showNextCard();
}, 2800); // milliseconds (2.8 seconds)
```

**Common Durations**:
- 1500 = 1.5 seconds (quick)
- 2500 = 2.5 seconds (standard)
- 3500 = 3.5 seconds (slow)
- 5000 = 5 seconds (very slow)

#### Transition Screen Duration
**File**: `script.js` (around line 95)
```javascript
await delay(3500); // milliseconds
```

#### Text Line Stagger
**File**: `script.js` (around lines 315-331)
```css
.text-line:nth-child(1) {
    animation-delay: 0.2s;
}

.text-line:nth-child(2) {
    animation-delay: 0.6s;
}
```
Increase values to slow down the reveal sequence.

### 5. Form Fields

**File**: `index.html` (Lines 39-57)

**Add New Field**:
```html
<div class="form-group">
    <label for="fieldName">Label Text</label>
    <input type="text" id="fieldName" name="fieldName" required>
</div>
```

**Change Field Type**:
- `type="text"` → Text input
- `type="number"` → Number input
- `type="email"` → Email input
- `type="date"` → Date picker
- `type="textarea"` → Multi-line text

### 6. Image Configuration

**File**: `index.html` (Lines 129 & 179)

**Teacher Photo**:
```html
<img id="teacherPhoto" src="images/teacher.jpg" alt="Учитель">
```

**Thanks Image**:
```html
<img id="thanksImage" src="images/thanks.jpg" alt="Спасибо">
```

**Change Image Paths**:
```html
<!-- Use relative paths -->
<img src="images/teacher.jpg">

<!-- Or absolute paths if on server -->
<img src="/assets/photos/teacher.jpg">
```

### 7. Shadow and Glow Effects

**File**: `style.css` (Lines 22-24)

**Current Settings**:
```css
--shadow-soft: 0 8px 32px rgba(212, 165, 116, 0.1);
--shadow-medium: 0 8px 32px rgba(212, 165, 116, 0.2);
--shadow-glow: 0 0 40px rgba(212, 165, 116, 0.3);
```

**Make Shadows Stronger**:
```css
--shadow-medium: 0 8px 32px rgba(212, 165, 116, 0.5); /* Increase last number */
--shadow-glow: 0 0 40px rgba(212, 165, 116, 0.6);
```

**Make Shadows Weaker**:
```css
--shadow-medium: 0 8px 32px rgba(212, 165, 116, 0.1);
--shadow-glow: 0 0 40px rgba(212, 165, 116, 0.15);
```

### 8. Animation Smoothness

**File**: `style.css` (Lines 25-27)

**Current Settings**:
```css
--transition-smooth: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
--transition-fast: all 0.3s ease-out;
--transition-slow: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

**Make Faster**:
```css
--transition-smooth: all 0.3s ease-out;
--transition-fast: all 0.15s ease-out;
--transition-slow: all 0.6s ease-out;
```

**Make Slower** (More cinematic):
```css
--transition-smooth: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
--transition-fast: all 0.5s ease-out;
--transition-slow: all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

### 9. Font and Typography

**File**: `style.css` (Line 52)

**Current Font**:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

**Change Font** (Google Fonts example):
1. Add to `<head>` in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
```

2. Update CSS:
```css
body {
    font-family: 'Playfair Display', serif;
}
```

**Popular Font Combinations**:
```css
/* Elegant */
font-family: 'Playfair Display', serif;

/* Modern */
font-family: 'Inter', sans-serif;

/* Geometric */
font-family: 'Montserrat', sans-serif;

/* Professional */
font-family: 'Source Sans Pro', sans-serif;
```

### 10. Special Section (For Special Name)

**File**: `index.html` (Lines 168-176)

**Current Content**:
```html
<div class="special-card glass-card">
    <div class="special-title">✨ Азамат ✨</div>
    <div class="special-message">
        <p>Спасибо за то, что ты наш лучший!<br>🎓🚀💻❤️</p>
    </div>
</div>
```

**Customize**:
- Change emoji and title
- Change message text
- Add multiple paragraphs if needed

## 🎨 Complete Theme Examples

### Example 1: Dark Luxury (Current)
```css
--color-gold: #d4a574;
--color-black: #0a0a0a;
--color-dark-gray: #1a1a1a;
```

### Example 2: Modern Minimal
```css
--color-gold: #2d2d2d;
--color-black: #ffffff;
--color-dark-gray: #f5f5f5;
```

### Example 3: Tech Startup
```css
--color-gold: #00ff88;
--color-black: #0a0e27;
--color-dark-gray: #1a2847;
```

### Example 4: Luxury Blue
```css
--color-gold: #1e3a8a;
--color-gold-light: #3b82f6;
--color-black: #0f172a;
--color-dark-gray: #1e293b;
```

## 📊 Spacing Configuration

**File**: `style.css` (Lines 29-35)

**Current Spacing Scale**:
```css
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 2rem;
--spacing-lg: 4rem;
--spacing-xl: 6rem;
```

**Make Tighter** (Less space):
```css
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 2rem;
--spacing-xl: 3rem;
```

**Make Looser** (More space):
```css
--spacing-xs: 1rem;
--spacing-sm: 1.5rem;
--spacing-md: 3rem;
--spacing-lg: 6rem;
--spacing-xl: 9rem;
```

## ✅ Configuration Checklist

- [ ] Changed special name to match person
- [ ] Verified all text is correct
- [ ] Added teacher photo to images folder
- [ ] Added thank you image to images folder
- [ ] Tested form submission
- [ ] Verified animations are smooth
- [ ] Checked mobile responsiveness
- [ ] Tested on target device
- [ ] Proofread all content
- [ ] Customized colors (if desired)
- [ ] Adjusted animation timings (if desired)

## 🚀 Next Steps

1. **Make customizations** using this guide
2. **Test thoroughly** on desktop and mobile
3. **View in fullscreen** for best effect
4. **Share with the teacher** via:
   - Deployed link (GitHub Pages, Netlify)
   - Direct file (send HTML folder)
   - QR code (use QR generator)

---

**Need help?** Check `QUICK_START.md` or `README.md` for more information.
