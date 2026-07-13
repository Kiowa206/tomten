# TomTen - iPhone Installation Guide

This game is now optimized as a Progressive Web App (PWA) for offline play on iPhone!

## Installation Steps

### Option 1: Add to Home Screen (Recommended)

1. **Open in Safari**
   - Open Safari on your iPhone
   - Go to your game URL (e.g., `https://yourdomain.com/tomten`)

2. **Add to Home Screen**
   - Tap the Share button (square with arrow)
   - Scroll down and tap "Add to Home Screen"
   - Give it a name (e.g., "TomTen")
   - Tap "Add"

3. **Launch the App**
   - The game will now appear on your home screen
   - Tap the icon to launch it in full-screen mode
   - The first time it loads, it will cache all necessary files for offline play

### Option 2: Open Directly in Safari

Simply bookmark the URL and open it in Safari. The PWA will still work offline after the first visit.

---

## Offline Play

After the initial download:
- ✅ Play completely offline with no internet connection
- ✅ Your score is preserved during your session
- ✅ The game runs as a standalone app (no browser UI)
- ✅ Touch-optimized controls for iPhone

## Technical Details

The app includes:
- **Service Worker**: Caches all assets for offline access
- **Web Manifest**: Defines app appearance and behavior
- **iOS Optimizations**:
  - Prevents zoom on pinch
  - Disables context menu on long press
  - Full viewport support with notch/Dynamic Island
  - Safe area padding for iPhone models
  - Touch-optimized interface with no tap highlights

## System Requirements

- iPhone running iOS 11.3 or later
- Safari browser (recommended) or other WebKit-based browsers
- First visit requires internet connection to download (~50KB)

## Troubleshooting

**Game doesn't load offline:**
1. Make sure you've visited the site at least once while online
2. Check if service worker is installed: Open Developer Tools (Safari → Settings → Advanced → Web Inspector) and look for "Service Workers"

**Game is zooming in/out:**
- This is normal for iPhone. The game has been optimized to prevent accidental zooms, but pinch gestures are blocked.

**Want to clear cache:**
- Delete the app from home screen
- Go to Safari → Settings → Clear History and Website Data
- Reinstall the app

---

## Deployment Notes

To deploy this game:

1. **Upload all files to your web server**:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.svg`
   - `icon-512.svg`

2. **Server Configuration**:
   - Ensure HTTPS is enabled (required for service workers and PWAs)
   - Set correct MIME types:
     - `.svg` → `image/svg+xml`
     - `.js` → `application/javascript`
     - `.json` → `application/json`
   - Add proper cache headers (optional but recommended):
     ```
     # Cache for 1 year (versioning is done in manifest filenames)
     *.svg: max-age=31536000
     *.js: max-age=31536000
     
     # Don't cache HTML (let service worker handle it)
     *.html: max-age=0, no-cache
     manifest.json: max-age=0, no-cache
     ```

3. **Test Installation**:
   - Visit the page on an iPhone
   - Add to home screen
   - Close Safari completely
   - Tap the app icon
   - Play without internet connection

---

## Features

✨ **Number Matching Puzzle Game**
- Match numbers that are equal or sum to 10
- Connect through empty spaces
- Clear rows to solve the puzzle
- Beautiful dark theme optimized for mobile

🎮 **Responsive Design**
- Works on all iPhone sizes including notched models
- Safe area padding for iPhone 12/13/14/15/16
- Optimized touch controls

📱 **Full Offline Support**
- All game logic runs locally
- No server communication required
- Works in airplane mode

🔄 **Auto-Updates**
- When you update the game code, users will get the new version on next visit
- Service worker cache version (v3) increments when files change

---

## Browser Support

| Browser | Support | Version |
|---------|---------|---------|
| Safari (iOS) | ✅ Full | iOS 11.3+ |
| Chrome (iOS) | ✅ Full | Latest |
| Firefox (iOS) | ✅ Full | Latest |
| Edge (iOS) | ✅ Full | Latest |

All mobile browsers on iOS use WebKit, so support is consistent across the platform.
