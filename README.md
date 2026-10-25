# FitFeed — Accessible Low-Impact Movement Feed

**Congressional App Challenge Project**  
*Built by Naihrit & Co-Developer*

FitFeed is a responsive, accessible, low-impact interactive fitness application designed specifically for **beginners, elderly individuals, or people with high BMI** who need simple, gentle exercise routines presented in a fun, swipeable card feed.

---

## 🏛️ Congressional App Challenge Focus

- **Community Problem:** Over 40% of American adults and 70% of seniors struggle with traditional fitness applications that feature high-impact jumping, floor exercises (difficult to get up from), or intimidating gym workouts.
- **Our Solution:** FitFeed delivers 100% chair-friendly, zero-joint-pounding, and wall-supported movements. Designed with high contrast, large typography, body-positive messaging, an interactive 3D movement avatar, and a gentle voice coach.

---

## ✨ Key Features

### 1. 🎴 Swipeable 3D Card Feed View
- **One Movement at a Time:** Clean card interface displaying one low-impact exercise at a time with clear visual focus.
- **Interactive 3D Physics:** Smooth mouse-tilt glare, 3D perspective, and touch swipe gestures (swipe left for Next, swipe right for Previous).
- **3D Card Flip (Anatomy & Adaptations):** Flip the card in 3D to reveal muscle group targeting, wheelchair accommodations, and safety pointers.

### 2. 🤖 Interactive 3D Human Movement Avatar (Three.js)
- **Real-Time 3D Kinematics:** A sleek, stylized 3D avatar demonstrates each movement in real-time (arm swings, chair marches, cat-cow waves, wall push-ups, breathing pulse).
- **Interactive 360° Camera:** Click and drag on the 3D viewport to inspect the exercise posture from any angle, or use the quick "Front" and "Side" angle buttons.
- **Graceful Fallback:** If WebGL or Three.js is unavailable, an animated 2D vector skeleton canvas seamlessly takes over.

### 3. ⏱️ Interactive Timer & Tap Rep Stepper
- **Circular Countdown Timer:** High-visibility animated progress ring with start, pause, resume, and quick `+15s` / `−15s` adjustments.
- **Interactive Tap Rep Counter:** Large, satisfying tap-to-count stepper with subtle haptic vibration for rep-based exercises.

### 4. 🗣️ Accessible Voice Coach (Web Speech API)
- Real-time vocal encouragement for seniors or visually impaired users:
  - Movement announcements ("Starting Seated Arm Swings...")
  - Halfway motivation check-ins
  - 10-second countdown cues
  - Celebration feedback upon completion

### 5. 📊 Progress Tracker & Gamification
- **Metrics Dashboard:** Tracks total exercises completed, gentle calorie burn (calculated using scientifically validated MET values), FitPoints earned, and consistency streak.
- **3D Confetti Celebration:** Interactive tumbling 3D particle explosion upon exercise completion.
- **Daily Target Ring:** Visual daily check-in (3 moves per day).
- **Local-First Privacy:** All progress is stored exclusively in the browser (`localStorage`). No accounts, no data collection.

### 6. ♿ Accessible UI/UX
- **WCAG AAA High-Contrast Mode:** High-contrast toggle for low-vision users.
- **Jumbo Font Scaler:** Instant toggle for extra-large readable fonts.
- **Keyboard Shortcuts:** `Space` (Start/Count Rep), `←`/`→` (Previous/Next), `F` (Flip 3D Card).
- **Seated-Only Filter:** Instantly filter out standing exercises for zero knee impact.

---

## 📂 File Architecture

```
FitFeed/
├── index.html       # Layout, semantic landmarks, Tailwind CDN & Three.js CDN
├── styles.css       # 3D perspective, card flips, timer animations & high-contrast themes
├── script.js        # Core logic, 3D avatar engine, voice coach, timer & state tracking
└── README.md        # Documentation and Congressional App Challenge guide
```

---

## 🚀 How to Run & Test Locally

No build tools, package managers, or compilation steps required:

1. Clone or extract this folder into VS Code.
2. Open `index.html` directly in any web browser, or right-click `index.html` and select **"Open with Live Server"**.
3. Alternatively, run using Python:
   ```bash
   python -m http.server 8000
   ```
4. Test keyboard shortcuts, 3D avatar drag-to-rotate, swipe gestures, voice coaching, and timer completions!

---

## 🌐 Deploying to Vercel

FitFeed is 100% static and zero-configuration:

1. Push this repository to GitHub: `git push origin main`
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the `FitFeed` repository.
4. Leave all build settings as default (Framework Preset: **Other**, Root Directory: `./`).
5. Click **Deploy** — your application will be live in seconds with a custom HTTPS URL for the Congressional App Challenge submission!
