# 📱 Transfer TomTen Game to iPhone - Complete Guide

## ✅ What You Have

5 files total:
- `index.html` (The game)
- `manifest.json` (App settings)
- `sw.js` (Offline support)
- `icon-192.svg` (Small icon)
- `icon-512.svg` (Large icon)

**Total size:** ~50 KB | **Cache size on phone:** ~1 MB

---

## 🚀 Fastest Way (5 minutes)

### **Step 1: Choose Hosting**

Pick ONE of these:

#### A) GitHub Pages (Recommended - Free & Easy)
1. Go to github.com, create free account
2. Create new public repository called "tomten"
3. Upload all 5 files to the repository
4. Go to Settings → Pages → select main branch
5. Your URL: `https://username.github.io/tomten`

#### B) Simple Web Host
- Upload files to any web server
- Get the URL (e.g., `https://example.com/tomten`)

#### C) Local Network (Testing Only)
1. Download all 5 files to one folder
2. Open Terminal/Command Prompt in that folder
3. Run: `python -m http.server 8000`
4. On same WiFi, get your computer IP (Windows: `ipconfig` | Mac: System Preferences)
5. iPhone URL: `http://192.168.X.X:8000` (replace X.X with your IP)

---

### **Step 2: Install on iPhone**

#### On iPhone:
1. **Open Safari**
2. **Go to the URL** (from Step 1)
3. **Tap Share** (⬆️ button at bottom)
4. **Scroll down → tap "Add to Home Screen"**
5. **Keep the name "TomTen" (or change it)**
6. **Tap "Add"**

✅ **Done!** Icon appears on home screen

#### First time it opens:
- Takes ~2-3 seconds to load
- Service Worker caches everything
- After this, opens instantly offline

---

## 📋 Complete Setup Options

### Option 1: GitHub Pages (Best for Sharing)

**Why:** Free hosting, automatic HTTPS, easy sharing

**Setup (first time only):**
```
1. Visit github.com → Sign up (free)
2. Click "+" → New repository
3. Name it "tomten"
4. Click "Create repository"
5. Upload 5 files (drag & drop interface)
6. Go to Settings → Pages → Branch: main → Save
7. Wait 1-2 minutes
```

**Your URL:**
`https://YOUR_USERNAME.github.io/tomten`

**On iPhone:**
1. Safari → paste URL
2. Share → Add to Home Screen
3. ✅ Done!

**How to update:** Just re-upload files, changes appear in 1-2 minutes

---

### Option 2: Email Transfer

**Send to yourself or others:**

1. Zip all 5 files into one `tomten.zip`
2. Email the zip file
3. On iPhone, open email attachment
4. Tap the zip to unzip
5. Open `index.html` in Safari
6. Share → Add to Home Screen
7. ✅ Works!

**Limitation:** Must be online to initially open (then works offline)

---

### Option 3: Local Network Testing

**Test before uploading online:**

**On Windows:**
```batch
1. Save 5 files in: C:\Users\YourName\tomten\
2. Press Win+R, type: cmd
3. Paste: cd C:\Users\YourName\tomten
4. Paste: python -m http.server 8000
5. Note your IP: open PowerShell, type: ipconfig
```

**On Mac/Linux:**
```bash
1. Save 5 files in ~/tomten/
2. Open Terminal
3. Paste: cd ~/tomten && python3 -m http.server 8000
4. Your IP shows in Terminal output
```

**On iPhone (same WiFi):**
- Open Safari
- Type: `http://192.168.X.X:8000` (replace X.X with your IP)
- Share → Add to Home Screen

---

## 📲 What Happens After Installation

### First Visit (With Internet)
```
Safari loads → Service Worker installs → Files cached → Ready for offline
```

### Next Visits (Offline or Online)
```
App opens instantly from cache → Works with or without internet
```

### Auto-Save Feature
```
Every 5 seconds → Game state saved → Survives app close/restart
```

---

## ✨ Features That Work Offline

After the first visit and cache setup:

✅ Full game playable
✅ Score tracking
✅ Move counter
✅ Game saves automatically
✅ High-quality graphics
✅ All touch controls
✅ Works offline indefinitely

---

## 🔧 Troubleshooting

### Problem: "Add to Home Screen" not showing

**Try these:**
1. Refresh the page (pull down)
2. Close Safari completely (swipe from top)
3. Reopen Safari and try again
4. Make sure iOS version is 11.3 or newer

### Problem: App won't work offline

**Solution:**
1. Close app completely (swipe up from bottom)
2. Reopen it
3. Make sure first visit was with internet connection

### Problem: Blank screen when opening

**Try:**
1. Force refresh: Swipe down on page
2. Or: Close app, reopen
3. Or: Delete app, reinstall from Safari

### Problem: Need to update the game

**If you hosted online:**
1. Update files on your server/GitHub
2. Users force-refresh next time (Cmd+Shift+R on desktop)

**If app is already installed:**
1. Update version in `sw.js` (line 2)
2. Users will auto-get latest on next visit

---

## 📊 Size & Performance

| Aspect | Details |
|--------|---------|
| Files to transfer | 5 files (~50 KB) |
| Cache on phone | ~1 MB |
| First load time | ~2-3 seconds |
| Subsequent loads | <1 second |
| Storage needed | ~5 MB free space |
| Battery usage | Minimal (runs locally) |
| Works offline | Yes, indefinitely |
| Requires internet after install | No |

---

## 🎯 Quick Decision Tree

```
Are you setting up for yourself?
├─ Just testing? → Use Local Network (Option 3)
└─ Want it on your phone? → Use GitHub Pages (Option 1)

Want to share with others?
├─ Family/friends? → Email zip file (Option 2)
└─ Public? → GitHub Pages (Option 1)

On a network without internet?
└─ Use Local Network (Option 3)
```

---

## 📝 Files Checklist

Before uploading anywhere, make sure you have:

- [ ] `index.html` (complete game file)
- [ ] `manifest.json` (app configuration)
- [ ] `sw.js` (enables offline)
- [ ] `icon-192.svg` (app icon)
- [ ] `icon-512.svg` (app icon)
- [ ] All files in same directory/folder
- [ ] No extra files (delete anything else)

---

## 🎮 You're Ready!

**TL;DR:**
1. Get 5 files in one place
2. Put them online (GitHub, web host, or local server)
3. Open URL on iPhone Safari
4. Tap Share → Add to Home Screen
5. ✅ Game installed! Works offline forever

---

## Recommended Setup for Most Users

1. **Create GitHub account** (free, ~2 min)
2. **Upload 5 files** (drag & drop, ~1 min)
3. **Enable GitHub Pages** (click settings, ~1 min)
4. **Share link with friends** (they install same way)

**Total time: 5 minutes**
**Cost: $0**
**Works: Forever offline**

---

## Advanced Hosting Options

**Need a custom domain?**
- Use Netlify.com (free + custom domain)
- Use Vercel.com (free + custom domain)
- Use traditional web host (typically $5-10/month)

**Want an app store submission?**
- iOS: Requires developer account + review process
- Better: Use web app (doesn't require approval, same experience)

**Want statistics?**
- Add Google Analytics (advanced)
- Add score sync to database (advanced)

---

**Questions? Review SETUP.md or OFFLINE_README.md in the game folder for more details.**

🎮 **Happy gaming on your iPhone!** 🎮
