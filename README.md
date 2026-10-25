# FitFeed — Instagram Reels for Accessible Movement 📱🌿

**Congressional App Challenge 2026 Submission**  
*Created by Naihrit & Co-Developer*  
🌐 **Live Application:** [https://fitfeedatlanta.vercel.app](https://fitfeedatlanta.vercel.app)

FitFeed reimagines daily physical activity by bringing the intuitive, engaging, vertical swipeable format of **Instagram Reels / TikTok** to **seniors, beginners, and individuals with high BMI** who need low-impact, joint-friendly gentle exercises.

---

## 🏛️ The Congressional App Challenge Vision

Traditional fitness apps often fail beginners, older adults, and individuals with joint pain:
- They assume high baseline mobility (burpees, jumping jacks, floor exercises).
- Getting on and off the floor is a dangerous fall risk for seniors and uncomfortable for high BMI individuals.
- Complex dashboards with dozens of intimidating metrics cause overwhelm.

**FitFeed solves this** by packaging 100% chair-friendly, zero-knee-pounding movements into a clean, modern, addictive vertical reel format. Just swipe up or down to find your next gentle move!

---

## 🌟 Key Features

### 1. 📱 Instagram Reels / TikTok Style Vertical Feed
- **Vertical Snap Scrolling (`scroll-snap-type: y mandatory`):** Each exercise fills the screen like an Instagram Reel. Smoothly swipe up/down on touch screens, or use mouse wheel / Up-Down arrow keys on desktop.
- **Top Segmented Story Progress Bar:** Displays your progress through today's reel queue, with live filling progress bars as you complete exercises.
- **Classic Right Action Rail:**
  - **Start / Timer Button:** Displays animated circular countdown ring with live pause/resume.
  - **Heart / Like Button:** Save favorite moves with heart-pop animation and live community-style like counter.
  - **Tap Rep Stepper:** Tap `+1` button with subtle haptic feedback for rep-based exercises.
  - **Info Sheet (ⓘ):** Opens slide-up drawer with anatomical target muscles, senior adaptations, and wheelchair tips.
  - **Voice Coach Audio Toggle:** Hands-free speech cues.

### 2. 🤖 Interactive 3D Human Movement Avatar (Three.js)
- **Real-Time Kinematics:** Each reel features an active 3D mannequin demonstrating the exact exercise posture and joint cadence (smooth arm swings, spine waves, seated marches, wall pushes, breathing diaphragm expansion).
- **Interactive 360° Inspection:** Drag directly across the screen to rotate the 3D model and observe movement form from any angle.

### 3. 🗣️ Accessible Voice Coach (Web Speech API)
- Real-time spoken audio guidance:
  - Movement announcements ("Starting Seated Arm Swings...")
  - Halfway motivation check-ins
  - Celebratory completion cues

### 4. 📊 Health Metrics & Gamification Drawer
- **Gentle Calorie Burn:** Calculated using clinically recognized MET (Metabolic Equivalent of Task) values for gentle seated and wall-supported physical activity.
- **FitPoints:** Consistency rewards (+50 pts per completed move).
- **Daily Streak:** Tracks consecutive active days.
- **3D Confetti Burst:** Full-screen tumbling 3D particle explosion when an exercise is completed.

---

## 📁 Project Architecture

```
FitFeed/
├── index.html       # Reels feed markup, story bar, bottom sheets, Tailwind & Three.js CDN
├── styles.css       # Reels snap-scroll physics, action rail glassmorphism, timer SVG & sheets
├── script.js        # Reels observer, Three.js 3D avatar, timer, tap stepper, voice coach & state
└── README.md        # Project overview and Congressional App Challenge documentation
```

---

## 🚀 How to Run & Test Locally

1. Clone or download this repository.
2. Open the folder in VS Code.
3. Open `index.html` directly in any web browser, or use VS Code's **Live Server** extension.
4. **Keyboard Shortcuts to Try:**
   - `↓` / `↑` : Scroll to next / previous exercise reel
   - `Space` : Start / pause timer or count repetition
   - `M` : Toggle voice coach audio
   - `I` : Open / close anatomy & modifications drawer
   - `Esc` : Close bottom sheets

---

## 🌐 Deploying to Vercel

FitFeed is 100% static and zero-configuration:

1. Push to GitHub: `git push origin main`
2. Open [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your **`sdatta25/FitFeed`** repository.
4. Keep default settings (Framework Preset: **Other**, Root Directory: `./`).
5. Click **Deploy** — your live HTTPS URL will be ready in under 30 seconds!
