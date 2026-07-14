# TomTen - Complete Setup & Deployment Guide

## 📋 Table of Contents
1. [Quick Start](#quick-start)
2. [File Verification](#file-verification)
3. [Local Testing](#local-testing)
4. [iPhone Installation](#iphone-installation)
5. [Web Deployment](#web-deployment)
6. [Troubleshooting](#troubleshooting)

---

## Quick Start

The fastest way to get playing:

### **For iPhone (No Computer Needed)**
1. Open Safari on iPhone
2. Navigate to where these files are hosted
3. Tap Share → Add to Home Screen
4. ✅ Done! Tap the icon to play

### **For Testing on Computer**
1. Download all 5 files to one folder
2. Open terminal/command prompt in that folder
3. Run: `python -m http.server 8000`
4. Open: `http://localhost:8000` in browser
5. ✅ Done! The game loads

---

## File Verification

Before deploying, verify you have all 5 files:

```
Required Files:
✅ index.html          (Main game - ~45 KB)
✅ manifest.json       (App config - ~500 B)
✅ sw.js               (Service Worker - ~2 KB)
✅ icon-192.svg        (Small icon - ~1 KB)
✅ icon-512.svg        (Large icon - ~1 KB)
```

**Total Size:** ~50 KB (expands to ~1 MB in browser cache)

### Check File Integrity

Open in text editor to verify content:

**manifest.json should contain:**
```json
{
  "name": "TomTen",
  "start_url": "./",
  "display": "standalone"
}
```

**sw.js should contain:**
```javascript
const CACHE_NAME = "tomten-offline-v1";
self.addEventListener("install", event => { ...
```

**index.html should contain:**
```html
<!DOCTYPE html>
<html lang="en">
...
<link rel="manifest" href="manifest.json" />
...
```

---

## Local Testing

### Windows

```batch
cd path\to\game\folder
python -m http.server 8000
```

Open browser: `http://localhost:8000`

### Mac/Linux

```bash
cd /path/to/game/folder
python3 -m http.server 8000
```

Open browser: `http://localhost:8000`

### Using Node.js

```bash
npm install -g http-server
cd /path/to/game/folder
http-server
```

Open browser: `http://localhost:8080`

---

## iPhone Installation

### Method A: Direct Safari (Easiest)

If the game is already hosted online:

1. On iPhone, open Safari
2. Navigate to the URL (ask device owner for the link)
3. Tap Share button (⬆️ in toolbar)
4. Scroll down → tap "Add to Home Screen"
5. Name it "TomTen" (or whatever you want)
6. Tap "Add"
7. ✅ Icon appears on home screen

### Method B: From Local Network

If the game is running on your computer:

1. Start local server (see above)
2. Find your computer's IP:
   - **Windows:** `ipconfig` command → look for "IPv4 Address"
   - **Mac:** System Preferences → Network → note IP
3. On iPhone (same WiFi):
   - Open Safari
   - Type: `http://192.168.1.XX:8000` (replace XX with your IP)
4. Follow Method A steps above

### Method C: Via Email

1. Email the 5 files as attachments
2. On iPhone, open email app
3. Save attachments to Files app
4. Open index.html in Safari from Files
5. Follow Method A steps

---

## Web Deployment

### Option 1: GitHub Pages (Free!)

**Setup (one-time):**
1. Create GitHub account (free)
2. Create new public repository named `tomten`
3. Upload all 5 files to repository
4. Go to Settings → Pages → Source: main branch → Save
5. Wait 1-2 minutes for deployment

**Access:**
- From computer: `https://username.github.io/tomten/`
- From iPhone Safari: Same URL → Add to Home Screen

**Users anywhere can install it!**

### Option 2: Traditional Web Host

1. Log into your hosting panel (GoDaddy, Bluehost, etc.)
2. Upload all 5 files to public_html folder
3. Access via your domain: `https://yourdomain.com/tomten/`

### Option 3: Cloud Storage (Quick & Easy)

**Dropbox/OneDrive/Google Drive:**
1. Upload files to cloud storage
2. Get shareable link
3. Share link with others
4. They can add to home screen from that link

---

## Troubleshooting

### "App doesn't load"
- [ ] Check all 5 files are present
- [ ] Verify file names are exact (case-sensitive on Linux/Mac)
- [ ] Refresh browser (Cmd/Ctrl + R)
- [ ] Hard refresh (Cmd/Ctrl + Shift + R)

### "Add to Home Screen not showing"
- [ ] Refresh page first
- [ ] Check iOS version (need iOS 11.3+)
- [ ] Try different browser (Chrome, Firefox)
- [ ] Close and reopen Safari

### "Offline mode not working"
- [ ] First visit MUST be online (to cache files)
- [ ] Close app completely, reopen
- [ ] Ensure at least 5 MB free storage
- [ ] Check Safari hasn't blocked site data

### "Icon not showing"
- [ ] Verify icon SVG files exist
- [ ] Check manifest.json has correct icon paths
- [ ] Try force-quitting Safari
- [ ] Delete and reinstall from home screen

### "Slow to load"
- [ ] First load is slower (downloads 1 MB)
- [ ] Check WiFi signal
- [ ] Restart device
- [ ] Clear Safari cache: Settings → Safari → Clear History

---

## Advanced Options

### Monitor Service Worker Installation

Open browser DevTools (F12 on desktop):

1. Go to Application → Service Workers
2. Look for "sw.js" status
3. Should show "activated and running"

### Update Game Version

To force all users to re-cache:

Edit `sw.js` line 2:
```javascript
// Change from:
const CACHE_NAME = "tomten-offline-v1";

// To:
const CACHE_NAME = "tomten-offline-v2";
```

Users will automatically get the new version.

### Customize Colors

Edit `index.html` styles section:
- `#0D0D14` = dark background
- `#E8E8F0` = light text
- `#4A9EFF` = blue accent (selected cells)
- `#4AFF6A` = green accent (matched cells)

### Add Custom Text/Logo

Edit index.html, find:
```html
<div id="title">TomTen</div>
```

Change "TomTen" to anything you want.

---

## Performance Checklist

✅ **Before publishing:**
- [ ] Test on actual iPhone (if possible)
- [ ] Load time under 2 seconds
- [ ] Works offline after first load
- [ ] Icons appear on home screen
- [ ] Touch controls responsive
- [ ] Game state saves on exit/return
- [ ] No console errors (DevTools)

✅ **For each update:**
- [ ] Test all 5 files present
- [ ] Increment version in sw.js
- [ ] Document changes
- [ ] Test on different devices

---

## One-Liner Setup Commands

### Quick local test
```bash
python -m http.server 8000 && open http://localhost:8000
```

### Deploy to GitHub (if git installed)
```bash
git init && git add . && git commit -m "TomTen game" && git remote add origin https://github.com/USER/tomten && git push -u origin main
```

---

## File Checklist for Deployment

Before uploading anywhere, verify:

```
□ index.html       - Contains <!DOCTYPE html> and full game
□ manifest.json    - Valid JSON, contains "display": "standalone"
□ sw.js            - Contains "const CACHE_NAME"
□ icon-192.svg     - Valid SVG file
□ icon-512.svg     - Valid SVG file
□ No other files   - Clean directory (no .DS_Store, etc.)
```

---

## Need Help?

**Most common issues & fixes:**

| Problem | Fix |
|---------|-----|
| Not caching offline | First visit MUST be online, then restart app |
| Icons not showing | Check manifest.json icon paths match filenames |
| Slow first load | Normal! First visit downloads files, subsequent loads instant |
| App not installing | Try different browser or device (iOS 11.3+) |
| Blank screen | Hard refresh (Cmd/Ctrl + Shift + R) or restart app |

---

## You're Ready! 🎮

1. **Test locally** - run local server, test in browser
2. **Deploy** - upload 5 files to web host
3. **Install** - send link to others, they add to home screen
4. **Share** - game works offline for everyone!

---

Last updated: 2024
Version: 1.0
