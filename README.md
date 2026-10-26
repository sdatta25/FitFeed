# FitFeed — Accessible Movement Reels & Health Dashboard 📱🌿

**Congressional App Challenge 2026 Submission**  
*Built by Naihrit & Co-Developer*  
🌐 **Live Application:** [https://fitfeedatlanta.vercel.app](https://fitfeedatlanta.vercel.app)  
📦 **GitHub Repository:** [https://github.com/sdatta25/FitFeed](https://github.com/sdatta25/FitFeed)

---

## 🏛️ Project Overview & Community Purpose

Traditional fitness platforms routinely exclude beginners, elderly adults, and individuals with high BMI by relying on floor exercises, heavy weights, and high-impact jumping.

**FitFeed reimagines accessible physical activity** by uniting two powerful paradigms:
1. **The Engaging Instagram Reels Format:** Fast, visual, vertical swipeable exercise reels with live 3D motion kinematics, tap rep counters, and circular countdown timers.
2. **A Comprehensive Health Dashboard:** Local-first, private health analytics tracking MET-calculated energy burn, daily streaks, 7-day consistency graphs, and session history.

---

## ✨ Application Architecture & Sections

### 1. ⚡ Movement Reels (Instagram Reels Style Feed)
- **Vertical Snap-Scrolling:** Built with CSS `scroll-snap-type: y mandatory` for smooth card-by-card browsing on both mobile touchscreens and desktop arrow keys.
- **Interactive 3D Movement Avatar (Three.js):** Real-time 3D humanoid mannequin demonstrating the exact form and cadence for each exercise (arm swings, seated marches, cat-cow waves, wall push-ups, breathing pulse).
- **Segmented Story Progress Bar:** Real-time top progress segments that fill as you complete exercises.
- **Instagram Action Rail:**
  - **Start / Pause Button:** Features an animated circular SVG countdown ring.
  - **Heart / Like Button:** Community-style bookmarking with a heart-pop animation and like count.
  - **Tap Rep Stepper (`+1`):** Large interactive button with haptic feedback for rep-based moves.
  - **Info Sheet (ⓘ):** Slides up biomechanical details, targeted muscles, wheelchair adaptations, and safety rules.
  - **Voice Coach Audio Toggle:** Hands-free spoken movement cues via the Web Speech API.

### 2. 📊 Activity Dashboard & Health Analytics
- **4 Key Health Metrics:**
  - **Consistency Streak:** Consecutive active days tracker.
  - **MET Calorie Burn:** Scientifically calculated energy expenditure using metabolic equivalents (METs) for low-impact physical activity.
  - **FitPoints:** Effort reward system (+50 pts per completed move).
  - **Completed Exercises Count:** Total movement blocks finished.
- **7-Day Visual Activity Graph:** Dynamic weekly bar chart (Mon–Sun) showing completed exercises per day with today's highlight.
- **Daily Target Ring:** Visual daily check-in (customizable target: 3 moves per day).
- **Session History Log:** Chronological record of completed sessions with timestamps and energy burn.

### 3. 📚 Movement Library (Searchable Directory)
- **Instant Search:** Search exercises by title, focus area, or target muscle group.
- **Category Filter Pills:** Quickly filter by *All*, *Seated Only*, *Spine & Posture*, *Supported Strength*, or *Breathwork*.
- **"Play in Reels" Integration:** Clicking any card jumps directly to that exercise in the vertical Reels player.

---

## 🛠️ Technical Stack

- **Markup & Layout:** Semantic HTML5, accessible ARIA landmarks, dialog drawers.
- **Styling:** Custom CSS design system + Tailwind CSS (via CDN) with clean dark-mode zinc/slate aesthetic.
- **3D Graphics:** Three.js (via CDN) for real-time humanoid kinematics & Canvas 2D fallback.
- **Audio & Accessibility:** Web Speech API for voice coaching, Web Audio API, and high-contrast color ratios.
- **Data Persistence:** Local-first browser storage (`localStorage`) ensuring 100% user privacy with zero tracking.

---

## 🚀 Running Locally

1. Clone or extract this repository.
2. Open `index.html` in any web browser, or launch using VS Code's **Live Server**.
3. **Keyboard Shortcuts:**
   - `↓` / `↑` : Scroll to next / previous exercise reel
   - `Space` : Start / pause timer or count repetition
   - `M` : Toggle voice coach audio
   - `Esc` : Close drawers

---

## 🌐 Deployment

Deployed live on Vercel at **[https://fitfeedatlanta.vercel.app](https://fitfeedatlanta.vercel.app)**.
