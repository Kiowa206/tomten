# 📤 How to Transfer TomTen to Your iPhone - Complete Instructions

## 🎯 Three Simple Methods (Pick One)

---

## Method 1: GitHub Pages (RECOMMENDED - Free & Easy)

### Why Choose This?
- ✅ Completely free
- ✅ No technical knowledge needed  
- ✅ Works forever
- ✅ Easy to update
- ✅ Can share with anyone

### Step-by-Step

**On Your Computer:**

1. **Go to github.com**
   - Click "Sign up" if you don't have account (takes 2 minutes)
   - Create username and password

2. **Create a new repository**
   - Click "+" icon → "New repository"
   - Name it: `tomten`
   - Choose "Public"
   - Click "Create repository"

3. **Upload the 5 game files**
   - You'll see an upload area
   - Drag and drop these 5 files:
     - `index.html`
     - `manifest.json`
     - `sw.js`
     - `icon-192.svg`
     - `icon-512.svg`

4. **Enable GitHub Pages**
   - Go to "Settings" tab
   - Scroll to "GitHub Pages" section
   - Choose branch: "main"
   - Click "Save"
   - Wait 1-2 minutes for deployment

5. **Get your URL**
   - Your game will be at: `https://USERNAME.github.io/tomten`
   - (Replace USERNAME with your GitHub username)

**On iPhone:**

1. Open **Safari**
2. Go to your URL (e.g., `https://username.github.io/tomten`)
3. Tap **Share** button (⬆️ at bottom)
4. Scroll down and tap **"Add to Home Screen"**
5. Keep name as "TomTen" or change if you want
6. Tap **"Add"**

✅ **Done!** Icon appears on home screen. Tap to play. Works offline!

---

## Method 2: Simple Web Host

### Why Choose This?
- ✅ Use your existing hosting
- ✅ Keeps files organized
- ✅ Full control
- ✅ Can use custom domain

### Step-by-Step

**On Your Computer:**

1. **Upload files to your web host**
   - Use FTP or web host's file manager
   - Upload these 5 files to a "tomten" folder:
     - `index.html`
     - `manifest.json`
     - `sw.js`
     - `icon-192.svg`
     - `icon-512.svg`

2. **Get your URL**
   - If using custom domain: `https://yourdomain.com/tomten/`
   - If using hosting provider: `https://yoursite.hostingprovider.com/tomten/`

**On iPhone:**

1. Open **Safari**
2. Go to your URL
3. Follow same steps as Method 1 above
4. Tap **Share** → **"Add to Home Screen"** → **"Add"**

✅ **Done!**

---

## Method 3: Local Network (For Testing)

### Why Choose This?
- ✅ Test before uploading
- ✅ Share on home WiFi
- ✅ No internet needed (local only)
- ⚠️ Only works on your network

### Step-by-Step

**On Your Computer:**

1. **Save all 5 files to one folder**
   - Create folder: `tomten`
   - Put all 5 files inside

2. **Open Terminal/Command Prompt**
   - Windows: Press `Win+R`, type `cmd`
   - Mac: Open "Terminal" app

3. **Navigate to your folder**
   - Windows: `cd C:\Users\YourName\tomten`
   - Mac: `cd ~/tomten`

4. **Start a local server**
   - Windows/Mac/Linux: `python -m http.server 8000`
   - Output: "Serving HTTP on 0.0.0.0 port 8000"

5. **Find your computer's IP**
   - Windows: Open new Command Prompt, type `ipconfig`
   - Look for "IPv4 Address:" (e.g., `192.168.1.100`)
   - Mac: System Preferences → Network → check IP

**On iPhone (same WiFi):**

1. Open **Safari**
2. Type in address bar: `http://192.168.1.100:8000`
   - (Replace `192.168.1.100` with your actual IP)
3. Wait for page to load
4. Tap **Share** → **"Add to Home Screen"** → **"Add"**

✅ **Done!** App works on this WiFi. Works offline after first visit.

---

## 📱 After Installation

### First Time Opening

When you tap the icon for the first time:
- **Loading screen** (2-3 seconds)
- **Service Worker installs** (background, automatic)
- **Files cache** (all 5 files saved locally)
- **Game loads** fully

### Important Note
- **First visit MUST have internet** (to download and cache)
- **After that?** Completely offline forever ✅

### Next Time You Open

- Opens instantly (<1 second)
- Works with or without internet
- Game state auto-saves every 5 seconds

---

## ✅ Verification Checklist

### Before Opening on iPhone

- [ ] All 5 files uploaded to server
- [ ] URL is working (test on computer first)
- [ ] Files have exact names:
  - ✓ `index.html` (not Index.html)
  - ✓ `manifest.json` (exact case)
  - ✓ `sw.js` (lowercase sw.js)
  - ✓ `icon-192.svg` (with numbers)
  - ✓ `icon-512.svg` (with numbers)

### When Opening on iPhone

- [ ] Safari opens the URL without errors
- [ ] Page loads with game visible
- [ ] Share button (⬆️) has "Add to Home Screen" option
- [ ] After adding, icon appears on home screen
- [ ] Tapping icon opens full-screen app

---

## 🔧 Troubleshooting

### "Add to Home Screen" option not visible

**Solution:**
1. Refresh the page (pull down)
2. Close Safari completely (swipe up from top)
3. Reopen Safari
4. Try again
5. If still not working: Try Chrome or Firefox instead

### App shows blank screen

**Solution:**
1. Close app (swipe up from bottom)
2. Reopen the app
3. If still blank: Force refresh
   - On webpage: Swipe down on page
   - On home screen app: Pull down page

### "Network Error" or won't load

**Solution:**
1. Check you have internet connection
2. Verify URL is correct (no typos)
3. Try from computer browser first (to verify URL works)
4. Wait 30 seconds and try again

### Works online but not offline

**Solution:**
1. First visit MUST have internet
2. After adding to home screen, wait for full load
3. Close app completely and reopen
4. Ensure 5+ MB free storage on phone

### Takes too long to load

**Solution - First visit:** Normal! Takes ~3 seconds to cache
**Solution - After first visit:** Should be instant. If not:
1. Close app completely
2. Reopen
3. If still slow: Clear Safari data
   - Settings → Safari → Clear History and Website Data

---

## 🚀 Sharing With Others

### Send the URL

Once your game is hosted (Method 1 or 2):

1. **Copy your URL:** `https://username.github.io/tomten`
2. **Share via:**
   - Email
   - Text message
   - Social media
   - WhatsApp
   - Slack
   - Anywhere that supports URLs

3. **Others do same steps:**
   - Open Safari
   - Paste URL
   - Share → Add to Home Screen
   - ✅ Done!

### Each person's copy is independent
- Each phone has its own game state
- Scores don't sync (unless you add that later)
- Everyone can play offline

---

## 📊 What You Should See

### First Visit
```
1. Type URL in Safari
2. Page loads with game visible
3. Score: 0, Moves: 0
4. 9 cells with numbers (or ?)
5. Buttons: New Game, Show All
```

### After First Visit
```
1. Icon on home screen shows "TomTen"
2. Tap icon opens full-screen
3. App looks like native iOS game
4. No browser address bar or buttons
5. Works without internet
```

### Offline Mode
```
✅ Game plays normally
✅ Score tracks correctly
✅ Game state saves
✅ No internet needed
✅ Instant load time
```

---

## 🎮 You're Ready!

### The Complete Flow

```
1. Choose hosting method (Method 1, 2, or 3)
   ↓
2. Upload 5 game files
   ↓
3. Get the URL
   ↓
4. Open Safari on iPhone
   ↓
5. Go to URL
   ↓
6. Share → Add to Home Screen
   ↓
7. Tap "Add"
   ↓
8. 🎮 Play TomTen offline!
```

---

## Need Help?

### Common Issues & Solutions

| Problem | Solution |
|---------|----------|
| "Add to Home Screen" missing | Refresh page, try different browser |
| Blank screen | Close app, reopen, hard refresh |
| Won't work offline | First visit needs internet, then restart |
| Slow loading | First visit caches (3 sec), then instant |
| URL not working | Check all 5 files uploaded, try on computer first |

### Resources

- **GitHub Help:** github.com/docs/pages
- **Safari PWA:** developer.apple.com/safari
- **Service Workers:** developer.mozilla.org/service-worker

---

## Advanced Tips

### Customize the Game

Edit `index.html` before uploading:

**Change app name:**
- Find: `<div id="title">TomTen</div>`
- Change "TomTen" to anything

**Change colors:**
- Find: `#0D0D14` (dark background)
- Find: `#E8E8F0` (light text)
- Replace with hex color codes

**Add features:**
- Edit the `game` object in script section
- All code inline, no build step

### Update the Game

1. Update files on server (replace old files)
2. Change version in `sw.js` line 1:
   ```javascript
   const CACHE = "tomten-v2";  // was "tomten-v1"
   ```
3. Users get latest on next visit

---

## Final Checklist

Before considering it done:

- [ ] Files hosted (GitHub Pages or Web Host)
- [ ] URL works in computer browser
- [ ] Can add to home screen from Safari on iPhone
- [ ] App icon appears on home screen
- [ ] App opens full-screen (no browser UI)
- [ ] Game plays correctly
- [ ] Works offline (after first visit)
- [ ] Others can access via shared URL

---

**You did it! 🎉 TomTen is now on your iPhone and works offline!**

---

*For more details, see: INSTALL_IPHONE.md, SETUP.md, or START_HERE.md*
