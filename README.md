# FitFeed — Accessible Movement Reels & Health Dashboard 📱🌿

**Congressional App Challenge 2026 Submission**  
*Built by Naihrit & Co-Developer*  
🌐 **Live Application:** [https://fitfeedatlanta.vercel.app](https://fitfeedatlanta.vercel.app)  
📦 **GitHub Repository:** [https://github.com/sdatta25/FitFeed](https://github.com/sdatta25/FitFeed)

---

## 🏛️ Project Overview & Purpose

Physical inactivity and sedentary habits disproportionately impact beginners, elderly adults, and individuals with high BMI. Mainstream fitness apps often intimidate these demographics with floor-based burpees, high-impact plyometrics, and aggressive pacing.

**FitFeed reimagines accessible physical activity** through two seamless pillars:
1. **Vertical Movement Reels:** An engaging, non-intimidating Instagram Reels-style video feed featuring an **actual 3D human being** demonstrating 100 low-impact exercises in real-time, accompanied by tap rep counters, animated circular timers, and hands-free voice coaching.
2. **Local-First Health Analytics:** A comprehensive, zero-telemetry dashboard that tracks scientifically validated MET energy expenditure, daily streaks, a 7-day consistency chart, and chronological session logs.

---

## ✨ Key Features & Architecture

### 1. 🧍 Realistic 3D Human Biomechanical Engine (Three.js)
- **Natural Human Form:** Rendered with warm, lifelike human skin tones, natural proportions (head contour, neck, shoulders, elbows, forearms, hands, torso, knees, and sneakers with soles), and athletic sportswear (tank top and gym shorts).
- **Smooth Joint Kinematics:** Hierarchical parent-child skeletal groupings for fluid, medically safe movement execution (arm swings, seated marches, knee extensions, wall push-ups, cat-cow waves, and box breathing).
- **360-Degree Interactive Orbit View:** Users can click or touch-drag left/right on the canvas to rotate the human avatar in 360 degrees to inspect exercise posture from any angle.
- **Slow-Motion Form Guide (0.5x):** One-tap toggle to slow down 3D motion for individuals mastering gentle joint alignment.
- **Ergonomic Studio Staging:** Features a sturdy hardwood chair for seated routines and a low-profile studio mat with 3-point studio lighting (warm key light, cool cyan rim light, and gentle emerald ground bounce).

### 2. 📱 Flawless Phone & Tablet Responsiveness
- **Mobile Phones (360px – 430px):** Full-screen 100dvh experience with native vertical snap scrolling (`scroll-snap-type: y mandatory`), iOS safe-area padding (`env(safe-area-inset-bottom)`), and a thumb-friendly bottom navigation bar.
- **Tablets & iPads (768px – 1024px):** Centered phone frame with elevated glassmorphism, responsive typography, and segmented top navigation.
- **Desktop (1024px+):** Floating arrow navigation buttons (`↑` / `↓`), full keyboard shortcuts (`Space` to start/count reps, `M` to mute voice coach, `Esc` to close drawers).

### 3. 📚 100 Clinically Designed Low-Impact Exercises
Cataloged across five distinct accessibility categories with zero floor work and zero knee impact:
1. **Seated Mobility & Upper Body (25 Moves):** Arm swings, chair marches, knee extensions, ankle alphabet swivels, shoulder rolls, wrist glides, goalpost openers, and more.
2. **Seated Lower Body & Hip Circulation (20 Moves):** High-heel calf lifts, inner thigh squeezes, figure-4 hip cradles, hamstring lengtheners, towel scrunches, and heel slides.
3. **Supported Standing & Wall Stability (20 Moves):** Wall push-ups, wall angel slides, countertop calf raises, sit-to-stand chair taps, supported flamingo balances, and doorframe lat hangs.
4. **Spine, Posture & Core Health (20 Moves):** Seated cat-cow waves, thoracic backrest arches, scapular row pulls, chin tucks, cervical tilts, and lumbar decompressions.
5. **Mindful Breathing, Recovery & Vagus Nerve (15 Moves):** 4-4-4-4 box breathing, diaphragmatic expansion, 4-7-8 sleep resets, pursed-lip airway flows, physiological sighs, and body scans.

### 4. 📊 Activity Dashboard & Health Analytics
- **4 Real-Time Metrics:** Daily Active Streak, MET-Calculated Calorie Expenditure, FitPoints effort points (+50 pts per move), and Total Completed Moves.
- **7-Day Activity Chart:** Dynamic weekly bar chart highlighting daily exercise consistency.
- **Daily Target Progress Ring:** Daily micro-goal tracker (3 moves/day target).
- **Session History Log:** Private chronological log with timestamps, categories, and calorie burn.

### 5. 🔊 Inclusive Accessibility & Voice Coaching
- **Voice Coach (Web Speech API):** Hands-free auditory countdowns and motivational form cues.
- **High-Contrast Design:** Clean dark aesthetic with `#06070a` canvas, `#10b981` emerald accents, and crisp typography (`Space Grotesk` & `Inter`).
- **3D Confetti Particles:** Instant celebratory visual reward upon completing any movement.

---

## 🛠️ Technology Stack

- **Markup & Styling:** Vanilla HTML5, Tailwind CSS (via CDN), custom CSS design system.
- **3D Rendering:** Three.js r128 (via CDN) with WebGL2 support.
- **Audio & Speech:** HTML5 Web Speech Synthesis API.
- **Storage:** Client-side `localStorage` (100% private, zero user tracking or data collection).
- **Deployment:** Vercel edge deployment with automated GitHub synchronization.

---

## 🚀 Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/sdatta25/FitFeed.git
   cd FitFeed
   ```
2. Open `index.html` in any modern web browser, or launch using VS Code **Live Server**.
3. **Keyboard Shortcuts:**
   - `↓` / `↑` or `PageDown` / `PageUp` : Next / Previous exercise reel
   - `Space` : Start / pause timer or count repetition
   - `M` : Toggle voice coach audio on/off
   - `Esc` : Close info drawers

---

## 🌐 Live URL
Live on Vercel at **[https://fitfeedatlanta.vercel.app](https://fitfeedatlanta.vercel.app)**.
