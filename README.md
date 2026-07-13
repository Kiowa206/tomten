# TomTen — A Number-Matching Puzzle Game

A fast-paced, minimalist number-matching puzzle game built with HTML5 and JavaScript. Works perfectly on mobile and desktop, with full offline support.

## Game Rules

- **Match pairs** by selecting two numbers that are equal OR sum to 10
- **Create a path** between numbers (horizontal, vertical, diagonal, or wrapping)
- **Clear all cells** to win
- **No valid moves?** Game ends—try again!

## How to Play

### On iPhone (Recommended)

1. Open Safari
2. Visit: **[Your website URL or local deployment]**
3. Tap **Share** (bottom menu)
4. Tap **Add to Home Screen**
5. Name it "TomTen"
6. Tap **Add**

The app will now appear on your home screen and work like a native app—complete offline support included!

### On Android

Same process as iPhone—tap menu, select "Install app" or "Add to Home Screen."

### On Desktop/Web

Simply open `index.html` in your browser.

## Features

✅ **Offline Play** — Service Worker caches everything  
✅ **Responsive Design** — Works on all screen sizes  
✅ **Dark Theme** — Easy on the eyes  
✅ **Score Tracking** — Points, cleared cells, rows remaining  
✅ **Instant Loading** — Cached for fast startup  
✅ **No Ads** — Pure gameplay  

## Files

- `index.html` — Main game & UI
- `sw.js` — Service Worker (offline support)
- `manifest.json` — PWA configuration
- `icon-192.svg` & `icon-512.svg` — App icons

## Deployment Options

### Option 1: Free Hosting (Recommended for iOS)
1. Deploy to **Netlify** (drag & drop or git)
2. Get a public URL
3. Open in Safari on iPhone
4. Add to Home Screen

### Option 2: GitHub Pages
1. Push files to a `gh-pages` branch
2. Enable GitHub Pages in repo settings
3. Access via `https://username.github.io/tomten`

### Option 3: Self-Hosted
1. Upload files to your own web server
2. Ensure HTTPS is enabled (required for PWA)
3. Open URL in Safari on iPhone
4. Add to Home Screen

## Technical Stack

- **HTML5** — Markup
- **CSS3** — Styling (Flexbox, Grid, custom properties)
- **Vanilla JavaScript** — Game logic (no frameworks)
- **Service Worker** — Offline caching
- **Web App Manifest** — PWA metadata

## License

Free to use and modify.

---

**Quick Start:** Deploy these files to a web server, open in Safari on iPhone, and tap "Add to Home Screen." That's it!
