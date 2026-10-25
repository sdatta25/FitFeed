# FitFeed — Accessible Movement & Mindful Breaks

**FitFeed** is a lightweight, responsive, accessible web application designed to encourage gentle physical movement, desk mobility, and mindful breathing throughout the day. Built with clean semantic HTML5, modern CSS custom properties, and modular vanilla JavaScript, it runs entirely client-side without heavy frameworks, package managers, or server dependencies.

---

## 🌟 Key Features

### 1. Interactive Movement Player
- **Precision Countdown Timer & Rep Counter:** High-precision SVG circular countdown timer with pause, resume, reset, and quick 15-second adjustments. For rep-based activities, an intuitive increment stepper is provided.
- **Evidence-Based Exercise Catalog:** 16 movements across Seated & Desk Mobility, Posture & Spine Alignment, Supported Strength, and Breathwork.
- **Form & Ergonomics Checkpoints:** Every exercise includes step-by-step movement cues, target muscle groups, required equipment, and a safety/coaching note.

### 2. Guided Workday Routines
- **Curated Multi-Step Sequences:** Pre-structured routines including *5-Min Desk Worker Reset*, *Morning Gentle Wake-Up*, *Spine & Posture Booster*, and *Bedtime Calm & Cool-Down*.
- **Seamless Routine Runner:** Automatically tracks step progress (e.g., "Step 2 of 4") and guides the user through each sequence.

### 3. Exercise Library & Real-Time Search
- **Instant Search & Category Filters:** Quickly filter by focus (All, Seated Only, Mobility & Spine, Supported Strength, Breathwork) or search by muscle group and keywords.

### 4. Privacy-First Analytics & Tracking
- **Local-First Architecture:** All session history, streaks, and preferences are stored exclusively on your device using `localStorage`. No tracking, accounts, or telemetry.
- **Interactive 7-Day Activity Chart:** Visual weekly breakdown showing completed movements per day.
- **Data Portability:** Export your entire activity history as JSON or restore from a backup anytime.

### 5. Accessibility & Ergonomics
- **Visual Themes:** Full Dark and Light mode support with automatic system preference detection.
- **Typographic Scaling:** Standard, Large, and Extra Large font size options.
- **Motion Sensitivity:** Native support for `prefers-reduced-motion` plus a dedicated toggle in settings.
- **Audio Synthesizer (Web Audio API):** Harmonically pleasant completion chimes (Zen Singing Bowl, Soft Bell, Modern Ding) without external audio file assets.
- **Full Keyboard Navigation:** Complete keyboard shortcut support (`Space` to start/pause, `←`/`→` to navigate, `R` to reset, `F` to favorite, `?` for shortcuts).

---

## 🚀 Getting Started

No build tools, compilation, or npm installs are required:

1. Clone or download this repository.
2. Open `index.html` directly in any modern web browser, or serve it using any local HTTP server:

```bash
# Using Python
python -m http.server 8000

# Using Node (npx)
npx serve .
```

3. Visit `http://localhost:8000` in your browser.

---

## 📁 Project Structure

```
FitFeed/
├── index.html       # Semantic HTML5 layout, accessible dialogs & ARIA landmarks
├── styles.css       # Design system, CSS variables (light/dark), layout & responsive queries
├── script.js        # Core application engine, exercises database, state & audio synthesizer
└── README.md        # Documentation and usage guide
```

---

## 🛡️ License

MIT License — Feel free to use, modify, and build upon this project.
