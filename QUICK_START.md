# ⚡ Quick Start Guide

## 30 Second Setup

### 1️⃣ Organize Files
```
Your Folder/
├── index.html
├── style.css
├── script.js
└── images/
    ├── teacher.jpg    ← Add teacher's photo here
    └── thanks.jpg     ← Add thank you image here
```

### 2️⃣ Add Images
- Place teacher's photo as `images/teacher.jpg`
- Place thank you image as `images/thanks.jpg`

### 3️⃣ Open in Browser
- **Easy way**: Double-click `index.html`
- **Better way**: Use Live Server or `python -m http.server 8000`

## 🎨 Customizing Text

### Change the Intro Message
In `index.html`, find:
```html
<h1 class="intro-title">Спасибо, Учитель.</h1>
<p class="intro-subtitle">Небольшой подарок,<br>подготовленный специально для Вас.</p>
```

### Change Card Messages
Find the cards section and edit:
```html
<div class="card glass-card">
    <div class="card-emoji">🏆</div>
    <div class="card-title">Настоящий профессионал</div>
</div>
```

### Change Final Text
In the `final-section`, modify the paragraph content:
```html
<p class="text-line">Your custom text here</p>
```

## 🎯 Special Name Configuration

To make the special animation trigger for a different name, edit in `script.js`:

Find this line (around line 115):
```javascript
appState.isAzamat = appState.userData.fullName.toLowerCase().includes('азамат');
```

Change `'азамат'` to your desired name (case-insensitive).

## 🎬 Animation Timing

### Change how long cards display
In `style.css`, find:
```css
setTimeout(() => {
    currentCardIndex++;
    showNextCard();
}, 2800); // This is 2.8 seconds
```
Change `2800` to your desired milliseconds (1000 = 1 second)

### Change transition screen duration
In `script.js`, find:
```javascript
await delay(3500); // This is 3.5 seconds
```
Change `3500` to desired milliseconds

## 🌈 Color Customization

Edit CSS variables in `style.css` (around line 9):

```css
:root {
    --color-gold: #d4a574;          /* Main gold color */
    --color-gold-light: #e8c4a0;    /* Lighter gold */
    --color-black: #0a0a0a;         /* Background black */
    --color-dark-gray: #1a1a1a;     /* Dark sections */
}
```

## 📸 Image Tips

### For teacher.jpg
- **Size**: 400x500px (portrait) works best
- **Format**: JPG or PNG
- **Quality**: High quality for premium look
- **Aspect Ratio**: 3:4 (portrait)

### For thanks.jpg
- **Size**: 1920x1080px or larger
- **Format**: JPG or PNG
- **Usage**: Background image (40% opacity)
- **Content**: Anything from photos to illustrations

## 🚀 Deployment

### Deploy on GitHub Pages
1. Create a GitHub repository
2. Upload `index.html`, `style.css`, `script.js`, and `images/` folder
3. Enable GitHub Pages in repository settings
4. Your site will be live at: `https://username.github.io/repo-name`

### Deploy on Netlify
1. Drag and drop your folder on netlify.com
2. Site goes live immediately
3. Get a shareable link

### Deploy on Vercel
1. Connect your GitHub repository to Vercel
2. Deploy with one click
3. Auto-updates on new commits

## 📱 Mobile Testing

### On Your Phone
1. Find your computer's IP address
2. On mobile, go to: `http://your-ip:8000`
3. Test the experience

### Chrome DevTools
1. Open DevTools (F12)
2. Click device icon (top left)
3. Select mobile device to test responsive design

## ✅ Checklist Before Sharing

- [ ] Images are in the `images/` folder
- [ ] teacher.jpg is a portrait photo
- [ ] thanks.jpg is a background image
- [ ] Form validation is working
- [ ] Special name animation triggers correctly
- [ ] All animations are smooth
- [ ] Text content is proofread
- [ ] Mobile view looks good

## 🎓 Customization Examples

### Change Gold Color to Silver
```css
:root {
    --color-gold: #c0c0c0;
    --color-gold-light: #e8e8e8;
}
```

### Change Gold Color to Rose Gold
```css
:root {
    --color-gold: #b76e79;
    --color-gold-light: #d4a5ae;
}
```

### Make Animations Slower
```css
:root {
    --transition-smooth: all 1.2s cubic-bezier(...); /* was 0.6s */
    --transition-slow: all 2s cubic-bezier(...);     /* was 1.2s */
}
```

## 🔧 Common Issues

**Issue**: Black squares instead of images  
**Solution**: Check image file paths, ensure `images/` folder exists

**Issue**: Animations are choppy  
**Solution**: Close other tabs, try a different browser, disable extensions

**Issue**: Form won't submit  
**Solution**: Fill all fields, check consent box, clear cache and reload

**Issue**: Text appears in wrong language  
**Solution**: Check HTML encoding is UTF-8 in browser

## 📞 Tips & Tricks

1. **Full Screen Mode**: Press F11 for immersive experience
2. **Presentation Mode**: Use browser's presentation tools (F5 in some browsers)
3. **Sound**: Add background music by embedding an audio element
4. **Video**: Replace images with video backgrounds for modern effect
5. **Multiple Versions**: Create copies with different names and special animations

## 🎬 Pro Tips

- Test animations on target device before sharing
- Use high-quality images (300+ DPI equivalent)
- Customize the text to be personal and touching
- Have someone else proofread all text
- Test on mobile devices before showing
- Consider showing in fullscreen mode for best effect

---

**Ready to go?** Just add your images and open `index.html` in a browser!

Questions? Check the full README.md for more details.
