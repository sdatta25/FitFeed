/**
 * FitFeed — Accessible Movement & Mindful Breaks Application
 * Production Architecture & Logic Engine
 */

"use strict";

/* ==========================================================================
   EXERCISE CATALOG & ROUTINES DATA
   ========================================================================== */

const EXERCISES_DATABASE = [
  {
    id: "seated-arm-swings",
    title: "Seated Arm Swings",
    category: "Desk & Seated",
    level: "Gentle",
    mode: "timer",
    duration: 30,
    targetMuscles: "Shoulders, Upper Back & Chest",
    equipment: "Sturdy Chair",
    isSeated: true,
    description: "A gentle rhythmic swing to release upper body stiffness and encourage circulation.",
    instructions: [
      "Sit tall with your feet flat on the floor and back supported.",
      "Relax your neck and allow both arms to hang naturally at your sides.",
      "Gently swing your arms forward and backward in a smooth, easy cadence.",
      "Keep the motion fluid and comfortable without forcing any height."
    ],
    coachingTip: "Focus on soft, continuous breathing and keep your shoulders relaxed away from your ears.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/><polyline points="12 6 12 12 16 14"/></svg>`
  },
  {
    id: "seated-cat-cow",
    title: "Seated Cat-Cow Stretch",
    category: "Posture & Spine",
    level: "Gentle",
    mode: "timer",
    duration: 35,
    targetMuscles: "Spine, Thoracic Mobility & Abdominals",
    equipment: "Sturdy Chair",
    isSeated: true,
    description: "Mobilizes the entire vertebral column to relieve desk stiffness and improve spinal fluid movement.",
    instructions: [
      "Place your hands gently on your knees with feet grounded.",
      "Inhale, roll your shoulders back, and gently arch your spine forward (Cow).",
      "Exhale, round your spine softly, tucking your chin slightly toward your chest (Cat).",
      "Flow between the two postures smoothly with your natural breathing."
    ],
    coachingTip: "Move only within a comfortable, pain-free range. Avoid over-arching your lower back.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
  },
  {
    id: "neck-releases",
    title: "Gentle Neck Tilts & Rolls",
    category: "Desk & Seated",
    level: "Very Gentle",
    mode: "timer",
    duration: 30,
    targetMuscles: "Cervical Spine & Upper Trapezius",
    equipment: "None",
    isSeated: true,
    description: "Eases tension in the neck and upper shoulders from sustained computer screen focus.",
    instructions: [
      "Sit upright and let your shoulders drop down naturally.",
      "Slowly tilt your right ear toward your right shoulder until a gentle stretch is felt.",
      "Hold for two breaths, return to center, and repeat smoothly on the left side.",
      "Optionally make gentle half-circles chin to chest."
    ],
    coachingTip: "Never yank or pull on your head. Use only gravity and gentle intent.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>`
  },
  {
    id: "wrist-forearm",
    title: "Wrist & Forearm Release",
    category: "Desk & Seated",
    level: "Gentle",
    mode: "timer",
    duration: 30,
    targetMuscles: "Wrist Flexors, Extensors & Carpal Area",
    equipment: "None",
    isSeated: true,
    description: "Relieves keyboard and smartphone fatigue while increasing synovial fluid in the wrists.",
    instructions: [
      "Extend one arm in front of you at shoulder height, palm facing away with fingers pointing down.",
      "Gently apply light pressure to your fingers with your opposite hand.",
      "Hold for 10-15 seconds, shake out gently, and repeat with palm facing toward you.",
      "Switch to the opposite wrist."
    ],
    coachingTip: "Keep your elbow soft and avoid locking joints.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>`
  },
  {
    id: "seated-marches",
    title: "Seated Low-Impact Marches",
    category: "Mobility",
    level: "Gentle",
    mode: "reps",
    target: 16,
    targetMuscles: "Hip Flexors, Quadriceps & Lower Abdominals",
    equipment: "Sturdy Chair",
    isSeated: true,
    description: "Promotes venous blood return from the lower legs and activates the hip flexors safely.",
    instructions: [
      "Sit toward the front edge of your chair with a tall spine.",
      "Engage your abdominal wall lightly for core stability.",
      "Lift one knee upward in a controlled march, then lower it with care.",
      "Alternate legs in a steady, rhythmic pattern."
    ],
    coachingTip: "Focus on controlled lowering rather than stomping your feet.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`
  },
  {
    id: "seated-torso-twist",
    title: "Gentle Seated Torso Twist",
    category: "Posture & Spine",
    level: "Gentle",
    mode: "timer",
    duration: 30,
    targetMuscles: "Obliques, Thoracic Spine & Ribcage",
    equipment: "Sturdy Chair",
    isSeated: true,
    description: "Restores rotational flexibility and helps release mid-back tension.",
    instructions: [
      "Sit upright with both feet firmly planted on the floor.",
      "Place your right hand on the outside of your left thigh or chair armrest.",
      "Gently rotate your torso to the left, initiating the turn from your mid-back.",
      "Hold for 3 comfortable breaths, return slowly, and rotate to the right side."
    ],
    coachingTip: "Keep your pelvis anchored square to the chair; twist only through the upper body.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>`
  },
  {
    id: "wall-push-ups",
    title: "Wall-Supported Push-ups",
    category: "Supported Strength",
    level: "Moderate",
    mode: "reps",
    target: 10,
    targetMuscles: "Pectorals, Anterior Deltoids & Triceps",
    equipment: "Clear Wall Space",
    isSeated: false,
    description: "A joint-friendly upper-body strength movement that reduces wrist and shoulder strain.",
    instructions: [
      "Stand facing an empty wall, roughly arm's length away.",
      "Place your palms flat on the wall at shoulder height and shoulder-width apart.",
      "Keeping your body in a straight plank line, bend your elbows and lower your chest toward the wall.",
      "Press through your palms to return to the starting position."
    ],
    coachingTip: "Keep your core gently braced and do not let your lower back sag.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`
  },
  {
    id: "ankle-circles",
    title: "Ankle & Foot Mobilizer",
    category: "Mobility",
    level: "Very Gentle",
    mode: "timer",
    duration: 30,
    targetMuscles: "Ankles, Calves & Tibialis Anterior",
    equipment: "Sturdy Chair",
    isSeated: true,
    description: "Prevents ankle stiffness and stimulates healthy lymph flow in the lower extremities.",
    instructions: [
      "Extend your right leg slightly off the floor while comfortably seated.",
      "Slowly trace wide, deliberate circles with your toes clockwise for 15 seconds.",
      "Reverse direction counter-clockwise for 15 seconds.",
      "Switch to your left leg and repeat."
    ],
    coachingTip: "Move slowly to explore the full perimeter of your ankle's range of motion.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`
  },
  {
    id: "seated-side-reach",
    title: "Side Body Reach & Lengthen",
    category: "Mobility",
    level: "Gentle",
    mode: "reps",
    target: 8,
    targetMuscles: "Latissimus Dorsi, Intercostals & Quadratus Lumborum",
    equipment: "Sturdy Chair",
    isSeated: true,
    description: "Expands lateral ribcage capacity for deeper breathing and releases side torso tightness.",
    instructions: [
      "Ground both sit bones firmly into the seat.",
      "Sweep your left arm up overhead and gently lean your torso toward the right.",
      "Feel an open stretch along your left side ribs.",
      "Return to center and repeat on the opposite side."
    ],
    coachingTip: "Avoid collapsing into the supporting side; think of lifting up and over.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M18 9l-6-6-6 6"/></svg>`
  },
  {
    id: "shoulder-retractions",
    title: "Shoulder Blade Squeeze",
    category: "Posture & Spine",
    level: "Gentle",
    mode: "reps",
    target: 10,
    targetMuscles: "Rhomboids, Middle Trapezius & Postural Stabilizers",
    equipment: "None",
    isSeated: true,
    description: "Counteracts forward-slumped posture by activating the mid-back postural retractors.",
    instructions: [
      "Sit tall with your elbows bent 90 degrees at your sides like a goalpost.",
      "Draw your shoulder blades toward each other gently as if holding a pencil between them.",
      "Pause for 2 seconds at the peak of the squeeze.",
      "Release smoothly back to neutral."
    ],
    coachingTip: "Keep your neck long and avoid shrugging your shoulders upward.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`
  },
  {
    id: "box-breathing",
    title: "4-4-4-4 Box Breathing",
    category: "Breathwork",
    level: "Very Gentle",
    mode: "timer",
    duration: 48,
    targetMuscles: "Autonomic Nervous System & Diaphragm",
    equipment: "None",
    isSeated: true,
    description: "A clinically proven breathing cadence that stimulates the vagus nerve and downregulates stress.",
    instructions: [
      "Inhale slowly through your nose for a count of 4 seconds.",
      "Hold your breath gently for a count of 4 seconds.",
      "Exhale smoothly through your mouth for a count of 4 seconds.",
      "Hold empty for 4 seconds before the next breath cycle."
    ],
    coachingTip: "Keep your chest still and let your belly naturally expand on every inhale.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>`
  },
  {
    id: "standing-calf-raises",
    title: "Chair-Assisted Calf Raises",
    category: "Supported Strength",
    level: "Moderate",
    mode: "reps",
    target: 12,
    targetMuscles: "Gastrocnemius, Soleus & Balance",
    equipment: "Chair or Countertop",
    isSeated: false,
    description: "Strengthens lower leg muscles and promotes circulation back to the heart.",
    instructions: [
      "Stand behind a stable chair, lightly resting your fingertips on the backrest.",
      "Keep your feet hip-width apart and knees soft.",
      "Rise smoothly up onto the balls of both feet, lifting your heels.",
      "Pause for a second at the top, then lower under control."
    ],
    coachingTip: "Maintain light support on the chair for balance rather than leaning heavily.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>`
  },
  {
    id: "hand-finger-glides",
    title: "Hand & Finger Openers",
    category: "Desk & Seated",
    level: "Very Gentle",
    mode: "reps",
    target: 8,
    targetMuscles: "Intrinsic Hand Muscles & Finger Tendons",
    equipment: "None",
    isSeated: true,
    description: "Restores mobility to fingers cramped by typing, writing, or mouse usage.",
    instructions: [
      "Bring both hands in front of your chest and form a gentle, relaxed fist.",
      "Slowly extend all fingers outward wide like an open star.",
      "Hold the open hand position for 2 seconds.",
      "Slowly return to a soft fist without squeezing tightly."
    ],
    coachingTip: "Avoid snapping fingers open; prioritize smooth, gradual articulation.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>`
  },
  {
    id: "diaphragmatic-breathing",
    title: "Mindful Belly Breathing",
    category: "Breathwork",
    level: "Very Gentle",
    mode: "timer",
    duration: 40,
    targetMuscles: "Diaphragm & Parasympathetic System",
    equipment: "Comfortable Seat",
    isSeated: true,
    description: "Calms mental chatter and lowers cortisol through deep diaphragmatic expansion.",
    instructions: [
      "Place one hand on your chest and one hand on your abdomen.",
      "Breathe in slowly through your nose, feeling only the belly hand rise.",
      "Exhale softly through parted lips, feeling the belly settle inward.",
      "Keep your chest and shoulders steady and relaxed throughout."
    ],
    coachingTip: "Let your breath find an easy, unforced rhythm like gentle ocean waves.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`
  },
  {
    id: "seated-hamstring-stretch",
    title: "Seated Hamstring Lengthener",
    category: "Mobility",
    level: "Gentle",
    mode: "timer",
    duration: 30,
    targetMuscles: "Hamstrings, Calves & Lower Back",
    equipment: "Sturdy Chair",
    isSeated: true,
    description: "Releases posterior chain stiffness caused by prolonged sedentary periods.",
    instructions: [
      "Perch on the front third of your chair.",
      "Extend your right leg forward with the heel grounded and toes pointed upward.",
      "Hinge forward slightly at your hips with a flat back until a comfortable stretch appears.",
      "Hold for 15 seconds, then switch smoothly to your left leg."
    ],
    coachingTip: "Never round your lower back; hinge cleanly from the hip crease.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/></svg>`
  }
];

const GUIDED_ROUTINES = [
  {
    id: "desk-worker-reset",
    title: "5-Min Desk Worker Reset",
    duration: "4-5 mins",
    description: "Targeted desk mobility to unfreeze neck stiffness, open wrists, and mobilize the mid-spine.",
    exercises: ["neck-releases", "wrist-forearm", "seated-cat-cow", "shoulder-retractions"]
  },
  {
    id: "morning-mobility",
    title: "Morning Gentle Wake-Up",
    duration: "5 mins",
    description: "Awaken your neuromuscular system with energizing breath, upper body swings, and torso rotation.",
    exercises: ["box-breathing", "seated-arm-swings", "seated-torso-twist", "ankle-circles"]
  },
  {
    id: "spine-posture-booster",
    title: "Spine & Posture Tune-Up",
    duration: "5-6 mins",
    description: "An active restorative sequence to open chest muscles and activate the upper back postural chain.",
    exercises: ["seated-cat-cow", "wall-push-ups", "shoulder-retractions", "seated-side-reach"]
  },
  {
    id: "evening-wind-down",
    title: "Bedtime Calm & Cool-Down",
    duration: "4 mins",
    description: "Gentle stretches and diaphragmatic breathing to prepare your body and nervous system for restful sleep.",
    exercises: ["seated-hamstring-stretch", "hand-finger-glides", "diaphragmatic-breathing"]
  }
];

/* ==========================================================================
   STORAGE & STATE ENGINE
   ========================================================================== */

const STORAGE_KEYS = {
  progress: "fitfeed_progress_v3",
  favorites: "fitfeed_favorites_v3",
  settings: "fitfeed_settings_v3"
};

const DEFAULT_SETTINGS = {
  theme: "system",
  textSize: "normal",
  reducedMotion: false,
  seatedOnly: false,
  soundProfile: "zen", // zen, bell, ding, mute
  dailyGoal: 3,
  longerTimer: false
};

class StateManager {
  constructor() {
    this.progress = this.loadProgress();
    this.favorites = new Set(this.loadFavorites());
    this.settings = this.loadSettings();
    this.activeRoutine = null;
    this.routineStepIndex = 0;
  }

  loadProgress() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.progress);
      if (data) {
        const parsed = JSON.parse(data);
        return {
          totalCompleted: parsed.totalCompleted || 0,
          totalMinutes: parsed.totalMinutes || 0,
          dates: Array.isArray(parsed.dates) ? parsed.dates : [],
          history: Array.isArray(parsed.history) ? parsed.history : []
        };
      }
    } catch (e) {
      console.warn("Could not read progress from localStorage", e);
    }
    return { totalCompleted: 0, totalMinutes: 0, dates: [], history: [] };
  }

  saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(this.progress));
    } catch (e) {
      console.warn("Could not save progress to localStorage", e);
    }
  }

  loadFavorites() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.favorites);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  saveFavorites() {
    try {
      localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify([...this.favorites]));
    } catch (e) {
      console.warn("Could not save favorites", e);
    }
  }

  loadSettings() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.settings);
      return data ? { ...DEFAULT_SETTINGS, ...JSON.parse(data) } : { ...DEFAULT_SETTINGS };
    } catch (e) {
      return { ...DEFAULT_SETTINGS };
    }
  }

  saveSettings() {
    try {
      localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(this.settings));
    } catch (e) {
      console.warn("Could not save settings", e);
    }
  }

  addCompletion(exerciseId, durationSeconds) {
    const today = this.getTodayDateString();
    this.progress.totalCompleted++;
    const minutesAdded = Math.max(1, Math.round(durationSeconds / 60));
    this.progress.totalMinutes += minutesAdded;

    if (!this.progress.dates.includes(today)) {
      this.progress.dates.push(today);
    }

    const ex = EXERCISES_DATABASE.find(item => item.id === exerciseId);
    this.progress.history.unshift({
      id: Date.now().toString(),
      exerciseId,
      exerciseTitle: ex ? ex.title : "Movement Session",
      durationSeconds,
      timestamp: new Date().toISOString()
    });

    // Keep history manageable
    if (this.progress.history.length > 200) {
      this.progress.history = this.progress.history.slice(0, 200);
    }

    this.saveProgress();
  }

  getTodayDateString(d = new Date()) {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  calculateStreak() {
    const dates = new Set(this.progress.dates);
    const today = this.getTodayDateString();
    
    // Check if user moved today or yesterday
    const checkDate = (offsetDays) => {
      const date = new Date();
      date.setDate(date.getDate() - offsetDays);
      return this.getTodayDateString(date);
    };

    let streak = 0;
    let dayCursor = 0;

    // If no activity today, check if yesterday was completed
    if (!dates.has(today)) {
      dayCursor = 1;
      if (!dates.has(checkDate(dayCursor))) {
        return 0;
      }
    }

    while (dates.has(checkDate(dayCursor))) {
      streak++;
      dayCursor++;
    }

    return streak;
  }

  getTodayCompletedCount() {
    const today = this.getTodayDateString();
    return this.progress.history.filter(item => {
      return item.timestamp.startsWith(today);
    }).length;
  }

  get7DayData() {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const now = new Date();
    // Normalize to current week's Monday
    const currentDayOfWeek = (now.getDay() + 6) % 7; // Mon=0, Sun=6
    const weekData = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(now);
      date.setDate(now.getDate() - currentDayOfWeek + i);
      const dateStr = this.getTodayDateString(date);
      const count = this.progress.history.filter(item => item.timestamp.startsWith(dateStr)).length;
      weekData.push({
        dayName: days[i],
        dateStr,
        count,
        isToday: i === currentDayOfWeek
      });
    }

    return weekData;
  }
}

/* ==========================================================================
   WEB AUDIO SOUND SYNTHESIZER
   ========================================================================== */

class SoundSynthesizer {
  constructor() {
    this.audioCtx = null;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  playChime(profile = "zen") {
    if (profile === "mute") return;
    this.init();
    if (!this.audioCtx) return;

    try {
      const now = this.audioCtx.currentTime;

      if (profile === "zen") {
        // Singing bowl warm harmonics (G4, D5, G5)
        const freqs = [392.00, 587.33, 783.99];
        freqs.forEach((freq, i) => {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now);

          gain.gain.setValueAtTime(0.0001, now);
          gain.gain.exponentialRampToValueAtTime(0.08 / (i + 1), now + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8 + i * 0.4);

          osc.connect(gain);
          gain.connect(this.audioCtx.destination);
          osc.start(now);
          osc.stop(now + 2.4);
        });
      } else if (profile === "bell") {
        // Soft chime chord (A5, C#6, E6)
        const notes = [880.00, 1108.73, 1318.51];
        notes.forEach((freq, idx) => {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);

          gain.gain.setValueAtTime(0.0001, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.1, now + idx * 0.08 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 1.2);

          osc.connect(gain);
          gain.connect(this.audioCtx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 1.3);
        });
      } else {
        // Crisp Modern Ding
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.15); // C6

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.12, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.65);
      }
    } catch (err) {
      console.warn("Audio playback failed", err);
    }
  }
}

/* ==========================================================================
   MAIN APPLICATION CONTROLLER
   ========================================================================== */

class FitFeedApp {
  constructor() {
    this.state = new StateManager();
    this.synth = new SoundSynthesizer();

    // Runtime Player State
    this.currentExerciseIndex = 0;
    this.timerRunning = false;
    this.timerSecondsRemaining = 30;
    this.timerTotalSeconds = 30;
    this.timerInterval = null;
    this.currentReps = 0;
    this.sessionDone = false;

    // Elements
    this.cacheElements();
    this.init();
  }

  cacheElements() {
    this.el = {
      // Navigation
      navTabs: document.querySelectorAll(".nav-tab-btn"),
      tabViews: document.querySelectorAll(".tab-view"),
      mobileToggle: document.getElementById("mobile-menu-toggle"),
      sidebar: document.getElementById("app-sidebar"),
      todayPill: document.getElementById("topbar-today-pill"),
      
      // Top actions
      themeToggle: document.getElementById("theme-toggle-btn"),
      soundToggle: document.getElementById("sound-toggle-btn"),
      settingsOpen: document.getElementById("settings-modal-btn"),
      shortcutsOpen: document.getElementById("shortcuts-modal-btn"),

      // Workout View
      exerciseBanner: document.getElementById("exercise-banner"),
      exerciseIcon: document.getElementById("exercise-icon-slot"),
      badgeCategory: document.getElementById("exercise-category-badge"),
      badgeLevel: document.getElementById("exercise-level-badge"),
      badgeEquipment: document.getElementById("exercise-equip-badge"),
      muscleTarget: document.getElementById("exercise-muscle-target"),
      favoriteBtn: document.getElementById("exercise-favorite-btn"),
      exerciseTitle: document.getElementById("exercise-title"),
      exerciseDesc: document.getElementById("exercise-desc"),
      instructionsList: document.getElementById("exercise-instructions-list"),
      coachingText: document.getElementById("exercise-coaching-text"),
      
      // Timer / Rep Controls
      timerWrapper: document.getElementById("timer-interactive-wrapper"),
      timerRingActive: document.getElementById("timer-ring-active"),
      timerDisplay: document.getElementById("timer-time-display"),
      repsWrapper: document.getElementById("reps-interactive-wrapper"),
      repsCountDisplay: document.getElementById("reps-count-display"),
      repsTargetText: document.getElementById("reps-target-text"),
      repDecrementBtn: document.getElementById("rep-decrement-btn"),
      repIncrementBtn: document.getElementById("rep-increment-btn"),
      timerNudgeRow: document.getElementById("timer-nudge-row"),
      nudgeMinusBtn: document.getElementById("nudge-minus-btn"),
      nudgePlusBtn: document.getElementById("nudge-plus-btn"),
      primaryActionBtn: document.getElementById("player-primary-btn"),
      resetActionBtn: document.getElementById("player-reset-btn"),
      
      // Feed Nav
      prevExerciseBtn: document.getElementById("feed-prev-btn"),
      nextExerciseBtn: document.getElementById("feed-next-btn"),
      feedDotsTrack: document.getElementById("feed-dots-track"),
      
      // Routine Banner
      activeRoutineBanner: document.getElementById("active-routine-banner"),
      routineBannerTitle: document.getElementById("routine-banner-title"),
      routineBannerStep: document.getElementById("routine-banner-step"),
      routineEndBtn: document.getElementById("routine-end-btn"),

      // Daily Goal Widget
      goalPercentText: document.getElementById("goal-percent-text"),
      goalBarFill: document.getElementById("goal-bar-fill"),
      goalCaptionText: document.getElementById("goal-caption-text"),

      // Library View
      librarySearch: document.getElementById("library-search-input"),
      filterChips: document.querySelectorAll(".filter-chip"),
      libraryGrid: document.getElementById("library-cards-grid"),

      // Routines View
      routinesGrid: document.getElementById("routines-cards-grid"),

      // Analytics View
      metricStreak: document.getElementById("metric-streak-count"),
      metricTotalSessions: document.getElementById("metric-total-sessions"),
      metricTotalMinutes: document.getElementById("metric-total-minutes"),
      metricThisWeek: document.getElementById("metric-this-week"),
      chartBarsWrap: document.getElementById("chart-bars-wrap"),
      historyList: document.getElementById("history-list-items"),
      exportDataBtn: document.getElementById("export-data-btn"),
      importDataInput: document.getElementById("import-data-file"),
      importDataTrigger: document.getElementById("import-data-trigger"),
      resetDataBtn: document.getElementById("reset-data-btn"),

      // Modals
      settingsModal: document.getElementById("settings-modal"),
      shortcutsModal: document.getElementById("shortcuts-modal"),
      toastNotice: document.getElementById("toast-notice")
    };
  }

  init() {
    this.applyTheme(this.state.settings.theme);
    this.applyTextSize(this.state.settings.textSize);
    this.applyReducedMotion(this.state.settings.reducedMotion);
    this.updateSoundIcon();

    this.bindEvents();
    this.renderTodayPill();
    this.renderExercise();
    this.renderDailyGoal();
    this.renderLibrary();
    this.renderRoutines();
    this.renderAnalytics();
  }

  /* ==========================================================================
     EVENT LISTENERS & KEYBOARD SHORTCUTS
     ========================================================================== */
  bindEvents() {
    // Navigation Tabs
    this.el.navTabs.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetView = btn.dataset.view;
        this.switchView(targetView);
      });
    });

    // Mobile Sidebar Drawer
    if (this.el.mobileToggle) {
      this.el.mobileToggle.addEventListener("click", () => {
        this.el.sidebar.classList.toggle("mobile-open");
      });
    }

    // Top action buttons
    this.el.themeToggle.addEventListener("click", () => this.toggleTheme());
    this.el.soundToggle.addEventListener("click", () => this.cycleSoundProfile());
    this.el.settingsOpen.addEventListener("click", () => this.openSettingsModal());
    this.el.shortcutsOpen.addEventListener("click", () => this.el.shortcutsModal.showModal());

    // Exercise Player Controls
    this.el.primaryActionBtn.addEventListener("click", () => this.handlePrimaryAction());
    this.el.resetActionBtn.addEventListener("click", () => this.resetExerciseState());
    this.el.repIncrementBtn.addEventListener("click", () => this.adjustReps(1));
    this.el.repDecrementBtn.addEventListener("click", () => this.adjustReps(-1));
    this.el.nudgePlusBtn.addEventListener("click", () => this.nudgeTimer(15));
    this.el.nudgeMinusBtn.addEventListener("click", () => this.nudgeTimer(-15));
    this.el.favoriteBtn.addEventListener("click", () => this.toggleCurrentFavorite());

    // Feed Navigation
    this.el.prevExerciseBtn.addEventListener("click", () => this.previousExercise());
    this.el.nextExerciseBtn.addEventListener("click", () => this.nextExercise());

    // Routine Cancel
    this.el.routineEndBtn.addEventListener("click", () => this.endActiveRoutine());

    // Library Search & Filters
    this.el.librarySearch.addEventListener("input", () => this.renderLibrary());
    this.el.filterChips.forEach(chip => {
      chip.addEventListener("click", () => {
        this.el.filterChips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        this.renderLibrary();
      });
    });

    // Data Portability
    this.el.exportDataBtn.addEventListener("click", () => this.exportUserData());
    this.el.importDataTrigger.addEventListener("click", () => this.el.importDataInput.click());
    this.el.importDataInput.addEventListener("change", (e) => this.importUserData(e));
    this.el.resetDataBtn.addEventListener("click", () => this.promptResetData());

    // Settings Modal Form Save
    document.getElementById("settings-form").addEventListener("submit", (e) => {
      e.preventDefault();
      this.saveSettingsFromModal();
    });

    // Keyboard Shortcuts
    window.addEventListener("keydown", (e) => {
      // Ignore if user is inside an input or textarea
      if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) return;

      if (e.code === "Space") {
        e.preventDefault();
        this.handlePrimaryAction();
      } else if (e.code === "ArrowRight") {
        e.preventDefault();
        this.nextExercise();
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        this.previousExercise();
      } else if (e.key === "r" || e.key === "R") {
        e.preventDefault();
        this.resetExerciseState();
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        this.toggleCurrentFavorite();
      } else if (e.key === "?") {
        e.preventDefault();
        this.el.shortcutsModal.showModal();
      }
    });
  }

  switchView(viewId) {
    this.el.navTabs.forEach(t => t.classList.toggle("active", t.dataset.view === viewId));
    this.el.tabViews.forEach(v => v.classList.toggle("active", v.id === `view-${viewId}`));
    if (this.el.sidebar.classList.contains("mobile-open")) {
      this.el.sidebar.classList.remove("mobile-open");
    }

    if (viewId === "analytics") {
      this.renderAnalytics();
    }
  }

  /* ==========================================================================
     ACTIVE EXERCISE & PLAYER ENGINE
     ========================================================================== */
  getVisibleExercises() {
    let list = EXERCISES_DATABASE;
    if (this.state.settings.seatedOnly) {
      list = list.filter(item => item.isSeated);
    }
    return list;
  }

  getCurrentExercise() {
    if (this.state.activeRoutine) {
      const routine = GUIDED_ROUTINES.find(r => r.id === this.state.activeRoutine);
      if (routine) {
        const exId = routine.exercises[this.state.routineStepIndex];
        const match = EXERCISES_DATABASE.find(e => e.id === exId);
        if (match) return match;
      }
    }
    const list = this.getVisibleExercises();
    if (this.currentExerciseIndex >= list.length) {
      this.currentExerciseIndex = 0;
    }
    return list[this.currentExerciseIndex];
  }

  renderExercise() {
    this.resetExerciseState(false);
    const ex = this.getCurrentExercise();
    if (!ex) return;

    // Render Banner Details
    this.el.exerciseIcon.innerHTML = ex.iconSvg;
    this.el.badgeCategory.textContent = ex.category;
    this.el.badgeLevel.textContent = ex.level;
    this.el.badgeEquipment.textContent = ex.equipment;
    this.el.muscleTarget.textContent = ex.targetMuscles;
    this.el.exerciseTitle.textContent = ex.title;
    this.el.exerciseDesc.textContent = ex.description;

    // Coaching Tip
    this.el.coachingText.textContent = ex.coachingTip;

    // Instructions
    this.el.instructionsList.innerHTML = "";
    ex.instructions.forEach(step => {
      const li = document.createElement("li");
      li.textContent = step;
      this.el.instructionsList.appendChild(li);
    });

    // Favorite Status
    const isFav = this.state.favorites.has(ex.id);
    this.el.favoriteBtn.classList.toggle("favorited", isFav);
    this.el.favoriteBtn.setAttribute("aria-label", isFav ? "Remove from favorites" : "Save to favorites");
    this.el.favoriteBtn.innerHTML = isFav 
      ? `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`;

    // Mode: Timer vs Reps
    if (ex.mode === "timer") {
      this.el.timerWrapper.classList.remove("hidden");
      this.el.timerNudgeRow.classList.remove("hidden");
      this.el.repsWrapper.classList.add("hidden");

      let duration = ex.duration;
      if (this.state.settings.longerTimer) duration += 15;
      this.timerTotalSeconds = duration;
      this.timerSecondsRemaining = duration;
      this.updateTimerRing();
      this.el.timerDisplay.textContent = this.timerSecondsRemaining;
    } else {
      this.el.timerWrapper.classList.add("hidden");
      this.el.timerNudgeRow.classList.add("hidden");
      this.el.repsWrapper.classList.remove("hidden");

      this.currentReps = 0;
      this.el.repsCountDisplay.textContent = "0";
      this.el.repsTargetText.textContent = `Target: ${ex.target} gentle reps`;
    }

    // Feed Navigation Dots
    this.renderFeedNavigation();
    this.renderRoutineBanner();
  }

  renderFeedNavigation() {
    const list = this.getVisibleExercises();
    this.el.prevExerciseBtn.disabled = this.currentExerciseIndex === 0;
    this.el.nextExerciseBtn.disabled = this.currentExerciseIndex === list.length - 1;

    this.el.feedDotsTrack.innerHTML = "";
    list.forEach((_, idx) => {
      const pill = document.createElement("button");
      pill.type = "button";
      pill.className = `feed-dot-pill ${idx === this.currentExerciseIndex ? "active" : ""}`;
      pill.setAttribute("aria-label", `Go to exercise ${idx + 1}`);
      pill.addEventListener("click", () => {
        this.currentExerciseIndex = idx;
        this.renderExercise();
      });
      this.el.feedDotsTrack.appendChild(pill);
    });
  }

  renderRoutineBanner() {
    if (this.state.activeRoutine) {
      const routine = GUIDED_ROUTINES.find(r => r.id === this.state.activeRoutine);
      if (routine) {
        this.el.activeRoutineBanner.classList.remove("hidden");
        this.el.routineBannerTitle.textContent = routine.title;
        this.el.routineBannerStep.textContent = `Exercise ${this.state.routineStepIndex + 1} of ${routine.exercises.length}`;
        return;
      }
    }
    this.el.activeRoutineBanner.classList.add("hidden");
  }

  /* ==========================================================================
     TIMER ENGINE
     ========================================================================== */
  handlePrimaryAction() {
    if (this.sessionDone) {
      this.nextExercise();
      return;
    }

    const ex = this.getCurrentExercise();
    if (ex.mode === "timer") {
      if (this.timerRunning) {
        this.pauseTimer();
      } else {
        this.startTimer();
      }
    } else {
      // Rep mode primary action adds rep
      this.adjustReps(1);
    }
  }

  startTimer() {
    if (this.timerRunning) return;
    this.timerRunning = true;
    this.el.primaryActionBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
      Pause Timer
    `;

    this.timerInterval = setInterval(() => {
      this.timerSecondsRemaining--;
      this.updateTimerRing();
      this.el.timerDisplay.textContent = Math.max(0, this.timerSecondsRemaining);

      if (this.timerSecondsRemaining <= 0) {
        this.completeExercise();
      }
    }, 1000);
  }

  pauseTimer() {
    if (!this.timerRunning) return;
    this.timerRunning = false;
    clearInterval(this.timerInterval);
    this.el.primaryActionBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      Resume Timer
    `;
  }

  nudgeTimer(delta) {
    if (this.sessionDone) return;
    this.timerSecondsRemaining = Math.max(5, this.timerSecondsRemaining + delta);
    if (this.timerSecondsRemaining > this.timerTotalSeconds) {
      this.timerTotalSeconds = this.timerSecondsRemaining;
    }
    this.el.timerDisplay.textContent = this.timerSecondsRemaining;
    this.updateTimerRing();
  }

  updateTimerRing() {
    const circumference = 2 * Math.PI * 52; // r = 52
    const progress = Math.max(0, Math.min(1, this.timerSecondsRemaining / this.timerTotalSeconds));
    const offset = circumference * (1 - progress);
    this.el.timerRingActive.style.strokeDasharray = `${circumference}`;
    this.el.timerRingActive.style.strokeDashoffset = `${offset}`;
  }

  /* ==========================================================================
     REPS ENGINE
     ========================================================================== */
  adjustReps(delta) {
    if (this.sessionDone) return;
    this.currentReps = Math.max(0, this.currentReps + delta);
    this.el.repsCountDisplay.textContent = this.currentReps;

    const ex = this.getCurrentExercise();
    if (this.currentReps >= ex.target) {
      this.completeExercise();
    }
  }

  /* ==========================================================================
     COMPLETION & PROGRESS RECORDING
     ========================================================================== */
  completeExercise() {
    if (this.sessionDone) return;
    this.sessionDone = true;
    this.pauseTimer();

    const ex = this.getCurrentExercise();
    const duration = ex.mode === "timer" ? this.timerTotalSeconds : 45;

    // Record session in state
    this.state.addCompletion(ex.id, duration);

    // Audio cue
    this.synth.playChime(this.state.settings.soundProfile);

    // UI Updates
    this.el.primaryActionBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      Completed! Next Movement →
    `;
    this.el.primaryActionBtn.classList.add("btn-completed");

    this.showToast(`Completed ${ex.title}! Recorded in your daily progress.`);
    this.renderDailyGoal();

    // Check if in active routine
    if (this.state.activeRoutine) {
      const routine = GUIDED_ROUTINES.find(r => r.id === this.state.activeRoutine);
      if (routine) {
        if (this.state.routineStepIndex < routine.exercises.length - 1) {
          setTimeout(() => {
            this.state.routineStepIndex++;
            this.renderExercise();
          }, 1200);
        } else {
          setTimeout(() => {
            this.showToast(`🎉 You finished the entire "${routine.title}" routine!`);
            this.endActiveRoutine();
          }, 1000);
        }
      }
    }
  }

  resetExerciseState(render = true) {
    this.timerRunning = false;
    clearInterval(this.timerInterval);
    this.sessionDone = false;
    this.el.primaryActionBtn.classList.remove("btn-completed");

    const ex = this.getCurrentExercise();
    if (!ex) return;

    if (ex.mode === "timer") {
      let duration = ex.duration;
      if (this.state.settings.longerTimer) duration += 15;
      this.timerTotalSeconds = duration;
      this.timerSecondsRemaining = duration;
      this.el.timerDisplay.textContent = this.timerSecondsRemaining;
      this.updateTimerRing();
      this.el.primaryActionBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        Start Timer
      `;
    } else {
      this.currentReps = 0;
      this.el.repsCountDisplay.textContent = "0";
      this.el.primaryActionBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Count Repetition
      `;
    }

    if (render) {
      this.showToast("Exercise session reset.");
    }
  }

  nextExercise() {
    const list = this.getVisibleExercises();
    if (this.currentExerciseIndex < list.length - 1) {
      this.currentExerciseIndex++;
      this.renderExercise();
    }
  }

  previousExercise() {
    if (this.currentExerciseIndex > 0) {
      this.currentExerciseIndex--;
      this.renderExercise();
    }
  }

  toggleCurrentFavorite() {
    const ex = this.getCurrentExercise();
    if (!ex) return;
    if (this.state.favorites.has(ex.id)) {
      this.state.favorites.delete(ex.id);
      this.showToast(`Removed ${ex.title} from favorites.`);
    } else {
      this.state.favorites.add(ex.id);
      this.showToast(`Added ${ex.title} to saved favorites.`);
    }
    this.state.saveFavorites();
    this.renderExercise();
  }

  /* ==========================================================================
     ROUTINE ENGINE
     ========================================================================== */
  startRoutine(routineId) {
    const routine = GUIDED_ROUTINES.find(r => r.id === routineId);
    if (!routine) return;

    this.state.activeRoutine = routineId;
    this.state.routineStepIndex = 0;
    this.switchView("workout");
    this.renderExercise();
    this.showToast(`Starting guided routine: ${routine.title}`);
  }

  endActiveRoutine() {
    this.state.activeRoutine = null;
    this.state.routineStepIndex = 0;
    this.renderExercise();
    this.showToast("Exited guided routine.");
  }

  /* ==========================================================================
     VIEWS RENDERING
     ========================================================================== */
  renderTodayPill() {
    const now = new Date();
    const options = { weekday: "short", month: "short", day: "numeric" };
    this.el.todayPill.textContent = now.toLocaleDateString(undefined, options);
  }

  renderDailyGoal() {
    const doneToday = this.state.getTodayCompletedCount();
    const target = this.state.settings.dailyGoal;
    const percent = Math.min(100, Math.round((doneToday / target) * 100));

    this.el.goalPercentText.textContent = `${percent}%`;
    this.el.goalBarFill.style.width = `${percent}%`;
    this.el.goalCaptionText.textContent = `${doneToday} of ${target} completed today`;
  }

  renderLibrary() {
    const query = this.el.librarySearch.value.trim().toLowerCase();
    const activeChip = document.querySelector(".filter-chip.active");
    const filter = activeChip ? activeChip.dataset.filter : "all";

    let items = EXERCISES_DATABASE;

    // Apply Filter
    if (filter === "seated") {
      items = items.filter(e => e.isSeated);
    } else if (filter === "mobility") {
      items = items.filter(e => e.category.toLowerCase().includes("mobility") || e.category.toLowerCase().includes("posture"));
    } else if (filter === "strength") {
      items = items.filter(e => e.category.toLowerCase().includes("strength"));
    } else if (filter === "breathwork") {
      items = items.filter(e => e.category.toLowerCase().includes("breath"));
    }

    // Apply Search
    if (query) {
      items = items.filter(e => 
        e.title.toLowerCase().includes(query) ||
        e.description.toLowerCase().includes(query) ||
        e.targetMuscles.toLowerCase().includes(query)
      );
    }

    this.el.libraryGrid.innerHTML = "";
    if (items.length === 0) {
      this.el.libraryGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
          No movement exercises found matching your search criteria.
        </div>
      `;
      return;
    }

    items.forEach(ex => {
      const card = document.createElement("div");
      card.className = "library-exercise-card";
      card.innerHTML = `
        <div class="card-top-row">
          <div class="card-icon-title">
            <div class="card-mini-icon">${ex.iconSvg}</div>
            <div>
              <h3 class="card-heading">${ex.title}</h3>
              <span class="badge ${ex.isSeated ? 'badge-emerald' : 'badge-warm'}" style="margin-top: 4px;">
                ${ex.category}
              </span>
            </div>
          </div>
        </div>
        <p class="card-desc-snippet">${ex.description}</p>
        <div class="card-footer-meta">
          <div class="card-tags">
            <span class="badge badge-outline">${ex.mode === 'timer' ? `${ex.duration}s` : `${ex.target} reps`}</span>
            <span class="badge badge-outline">${ex.level}</span>
          </div>
          <button class="start-exercise-btn" type="button">Start Exercise →</button>
        </div>
      `;

      card.querySelector(".start-exercise-btn").addEventListener("click", () => {
        const fullIndex = this.getVisibleExercises().findIndex(e => e.id === ex.id);
        if (fullIndex !== -1) {
          this.currentExerciseIndex = fullIndex;
          this.state.activeRoutine = null;
          this.switchView("workout");
          this.renderExercise();
        } else {
          this.showToast("This exercise is currently filtered out by your seated-only preference.");
        }
      });

      this.el.libraryGrid.appendChild(card);
    });
  }

  renderRoutines() {
    this.el.routinesGrid.innerHTML = "";
    GUIDED_ROUTINES.forEach(routine => {
      const card = document.createElement("div");
      card.className = "routine-card";
      
      const stepItems = routine.exercises.map((exId, i) => {
        const ex = EXERCISES_DATABASE.find(e => e.id === exId);
        return `
          <li class="routine-step-item">
            <span class="routine-step-num">${i + 1}</span>
            <span>${ex ? ex.title : exId}</span>
          </li>
        `;
      }).join("");

      card.innerHTML = `
        <div class="routine-header-row">
          <span class="routine-duration-badge">⏱ ${routine.duration}</span>
        </div>
        <h3 class="routine-title">${routine.title}</h3>
        <p class="routine-description">${routine.description}</p>
        <div class="routine-steps-preview">
          <div class="routine-steps-heading">Sequence (${routine.exercises.length} moves)</div>
          <ul class="routine-steps-list">
            ${stepItems}
          </ul>
        </div>
        <button class="btn-primary start-routine-btn" type="button">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          Start Guided Routine
        </button>
      `;

      card.querySelector(".start-routine-btn").addEventListener("click", () => {
        this.startRoutine(routine.id);
      });

      this.el.routinesGrid.appendChild(card);
    });
  }

  renderAnalytics() {
    // Top Metrics
    this.el.metricStreak.textContent = this.state.calculateStreak();
    this.el.metricTotalSessions.textContent = this.state.progress.totalCompleted;
    this.el.metricTotalMinutes.textContent = this.state.progress.totalMinutes;

    const now = new Date();
    const currentDayOfWeek = (now.getDay() + 6) % 7;
    const weekData = this.state.get7DayData();
    const weekTotal = weekData.reduce((acc, curr) => acc + curr.count, 0);
    this.el.metricThisWeek.textContent = weekTotal;

    // 7-Day Bar Chart
    this.el.chartBarsWrap.innerHTML = "";
    const maxVal = Math.max(3, ...weekData.map(d => d.count));

    weekData.forEach(d => {
      const col = document.createElement("div");
      col.className = `chart-day-col ${d.isToday ? 'today-col' : ''}`;
      const heightPercent = (d.count / maxVal) * 100;
      col.innerHTML = `
        <div class="chart-bar-fill ${d.count === 0 ? 'empty-day' : ''}" 
             style="height: ${Math.max(6, heightPercent)}%;" 
             title="${d.count} activities completed on ${d.dayName}">
        </div>
        <span class="chart-day-name">${d.dayName}</span>
      `;
      this.el.chartBarsWrap.appendChild(col);
    });

    // History Log
    this.el.historyList.innerHTML = "";
    if (this.state.progress.history.length === 0) {
      this.el.historyList.innerHTML = `
        <li class="history-empty-message">No activities completed yet. Start your first session in the workout feed!</li>
      `;
      return;
    }

    this.state.progress.history.slice(0, 15).forEach(item => {
      const li = document.createElement("li");
      li.className = "history-item";
      const dateObj = new Date(item.timestamp);
      const timeStr = dateObj.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      const dateStr = dateObj.toLocaleDateString([], { month: "short", day: "numeric" });

      li.innerHTML = `
        <div class="history-item-left">
          <div class="history-check-circle">✓</div>
          <div>
            <h4 class="history-item-name">${item.exerciseTitle}</h4>
            <span class="history-item-time">${dateStr} at ${timeStr}</span>
          </div>
        </div>
        <span class="badge badge-outline">${Math.round(item.durationSeconds / 60) || 1}m</span>
      `;
      this.el.historyList.appendChild(li);
    });
  }

  /* ==========================================================================
     SETTINGS & ACCESSIBILITY
     ========================================================================== */
  applyTheme(theme) {
    let effectiveTheme = theme;
    if (theme === "system") {
      effectiveTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    document.documentElement.setAttribute("data-theme", effectiveTheme);
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    this.state.settings.theme = nextTheme;
    this.state.saveSettings();
    this.applyTheme(nextTheme);
    this.showToast(`Switched to ${nextTheme} mode.`);
  }

  applyTextSize(size) {
    document.body.classList.remove("font-large", "font-xlarge");
    if (size === "large") document.body.classList.add("font-large");
    if (size === "xlarge") document.body.classList.add("font-xlarge");
  }

  applyReducedMotion(enabled) {
    document.body.classList.toggle("reduced-motion", Boolean(enabled));
  }

  cycleSoundProfile() {
    const profiles = ["zen", "bell", "ding", "mute"];
    const currentIdx = profiles.indexOf(this.state.settings.soundProfile);
    const nextProfile = profiles[(currentIdx + 1) % profiles.length];
    this.state.settings.soundProfile = nextProfile;
    this.state.saveSettings();
    this.updateSoundIcon();

    if (nextProfile !== "mute") {
      this.synth.playChime(nextProfile);
      this.showToast(`Sound profile set to: ${nextProfile.toUpperCase()}`);
    } else {
      this.showToast("Completion sounds muted.");
    }
  }

  updateSoundIcon() {
    const isMuted = this.state.settings.soundProfile === "mute";
    this.el.soundToggle.classList.toggle("active", !isMuted);
    this.el.soundToggle.innerHTML = isMuted 
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`;
  }

  openSettingsModal() {
    document.getElementById("setting-theme-select").value = this.state.settings.theme;
    document.getElementById("setting-text-size-select").value = this.state.settings.textSize;
    document.getElementById("setting-sound-select").value = this.state.settings.soundProfile;
    document.getElementById("setting-daily-goal-select").value = this.state.settings.dailyGoal;
    document.getElementById("setting-reduced-motion-toggle").checked = this.state.settings.reducedMotion;
    document.getElementById("setting-seated-only-toggle").checked = this.state.settings.seatedOnly;
    document.getElementById("setting-longer-timer-toggle").checked = this.state.settings.longerTimer;

    this.el.settingsModal.showModal();
  }

  saveSettingsFromModal() {
    this.state.settings.theme = document.getElementById("setting-theme-select").value;
    this.state.settings.textSize = document.getElementById("setting-text-size-select").value;
    this.state.settings.soundProfile = document.getElementById("setting-sound-select").value;
    this.state.settings.dailyGoal = parseInt(document.getElementById("setting-daily-goal-select").value, 10);
    this.state.settings.reducedMotion = document.getElementById("setting-reduced-motion-toggle").checked;
    this.state.settings.seatedOnly = document.getElementById("setting-seated-only-toggle").checked;
    this.state.settings.longerTimer = document.getElementById("setting-longer-timer-toggle").checked;

    this.state.saveSettings();
    this.applyTheme(this.state.settings.theme);
    this.applyTextSize(this.state.settings.textSize);
    this.applyReducedMotion(this.state.settings.reducedMotion);
    this.updateSoundIcon();

    this.renderExercise();
    this.renderDailyGoal();
    this.renderLibrary();

    this.el.settingsModal.close();
    this.showToast("Preferences saved.");
  }

  /* ==========================================================================
     DATA PORTABILITY & BACKUP
     ========================================================================== */
  exportUserData() {
    const exportData = {
      app: "FitFeed",
      version: 3,
      exportedAt: new Date().toISOString(),
      progress: this.state.progress,
      favorites: [...this.state.favorites],
      settings: this.state.settings
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `fitfeed-backup-${this.state.getTodayDateString()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.showToast("Progress exported successfully.");
  }

  importUserData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.progress) this.state.progress = data.progress;
        if (Array.isArray(data.favorites)) this.state.favorites = new Set(data.favorites);
        if (data.settings) this.state.settings = { ...DEFAULT_SETTINGS, ...data.settings };

        this.state.saveProgress();
        this.state.saveFavorites();
        this.state.saveSettings();

        this.init();
        this.showToast("Backup imported successfully!");
      } catch (err) {
        alert("Invalid FitFeed backup file format.");
      }
    };
    reader.readAsText(file);
  }

  promptResetData() {
    if (confirm("Reset all activity history and progress? This cannot be undone.")) {
      this.state.progress = { totalCompleted: 0, totalMinutes: 0, dates: [], history: [] };
      this.state.saveProgress();
      this.renderDailyGoal();
      this.renderAnalytics();
      this.showToast("All progress history has been cleared.");
    }
  }

  /* ==========================================================================
     TOAST NOTIFICATIONS
     ========================================================================== */
  showToast(message) {
    this.el.toastNotice.textContent = message;
    this.el.toastNotice.classList.add("show");
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.el.toastNotice.classList.remove("show");
    }, 2800);
  }
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  window.app = new FitFeedApp();
});
