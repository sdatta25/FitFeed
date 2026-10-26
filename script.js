/**
 * ============================================================================
 * FitFeed — Accessible Low-Impact Fitness & Movement Reels
 * Congressional App Challenge 2026
 * Developed by: Naihrit & Co-Developer
 *
 * Core Architecture:
 * 1. 24 Comprehensive Low-Impact Exercises (Senior, High BMI & Rehabilitation)
 * 2. Biomechanical Motion Demonstration Engine (3D Three.js + Form Cues + 0.5x Slow-Mo)
 * 3. Reels Engine (Snap-Scroll, Live Timer Ring, Tap Rep Stepper, Likes)
 * 4. Full Activity Dashboard (7-Day Interactive Graph, MET Calories, Streaks)
 * 5. Searchable Movement Library with Category Filters
 * 6. Accessible Voice Coach (Web Speech API)
 * 7. 3D Confetti Particle Explosion
 * ============================================================================
 */

"use strict";

/* ==========================================================================
   1. 24 COMPREHENSIVE LOW-IMPACT EXERCISES
   ========================================================================== */

const EXERCISES_DATA = [
  {
    id: "seated-arm-swings",
    title: "Seated Arm Swings",
    category: "Seated Mobility",
    filterTag: "seated",
    impactTag: "Zero Joint Impact",
    suitableFor: "Wheelchair, Seniors, High BMI",
    mode: "timer",
    duration: 30,
    met: 2.3,
    points: 50,
    audioTrack: "FitFeed Coach • Gentle 30s Rhythm",
    caption: "Keep shoulders relaxed. Let momentum swing your arms softly forward and back without forcing height.",
    muscles: "Deltoids, Upper Trapezius & Rotator Cuff",
    modifications: [
      "Wheelchair: Keep footrests locked, swing below chest level to reduce lever strain.",
      "High BMI: Maintain a wide stance for comfortable shoulder clearance.",
      "Limited Mobility: Alternate one arm at a time if dual motion is fatiguing."
    ],
    safety: "Never force past shoulder impingement. Stop immediately if sharp pinching occurs.",
    animType: "arm_swing",
    likes: 142
  },
  {
    id: "chair-marches",
    title: "Seated Chair Marches",
    category: "Seated Mobility",
    filterTag: "seated",
    impactTag: "Zero Knee Pounding",
    suitableFor: "Knee Osteoarthritis, Seniors, High BMI",
    mode: "reps",
    targetReps: 16,
    met: 2.8,
    points: 60,
    audioTrack: "FitFeed Coach • Steady Cadence",
    caption: "Activates lower leg circulation and hip flexors without putting any bodyweight load on your knees.",
    muscles: "Iliopsoas, Quadriceps & Lower Core",
    modifications: [
      "Low Energy: Lift only your heels while keeping toes grounded on the floor.",
      "Heavy Legs: Lift knees just 1 to 2 inches off the chair to protect hip joints."
    ],
    safety: "Avoid stomping your feet down. Lower each foot gently to protect joints.",
    animType: "march",
    likes: 218
  },
  {
    id: "seated-cat-cow",
    title: "Seated Cat-Cow Waves",
    category: "Spine & Posture",
    filterTag: "spine",
    impactTag: "Zero Joint Impact",
    suitableFor: "Desk Workers, Lower Back Stiffness",
    mode: "timer",
    duration: 35,
    met: 2.2,
    points: 55,
    audioTrack: "FitFeed Coach • Deep Breath Flow",
    caption: "Decompresses the lumbar vertebrae. Inhale softly on forward arch, exhale on gentle rounding.",
    muscles: "Erector Spinae, Latissimus & Diaphragm",
    modifications: [
      "High BMI: Position knees slightly wider apart for comfortable abdominal room.",
      "Osteoporosis: Keep movement small and fluid; avoid aggressive flexion."
    ],
    safety: "Do not hyperextend the cervical neck. Keep eye gaze natural.",
    animType: "cat_cow",
    likes: 184
  },
  {
    id: "wall-push-ups",
    title: "Supported Wall Push-ups",
    category: "Supported Strength",
    filterTag: "strength",
    impactTag: "Joint Friendly",
    suitableFor: "Difficulty Getting Off Floor, Beginners",
    mode: "reps",
    targetReps: 10,
    met: 3.2,
    points: 65,
    audioTrack: "FitFeed Coach • Gentle Power",
    caption: "Builds upper-body pushing power without knee strain or floor struggle.",
    muscles: "Pectoralis Major, Anterior Deltoids & Triceps",
    modifications: [
      "Beginners: Stand closer to the wall for lighter resistance.",
      "Wrist Discomfort: Place palms on a soft towel or make light closed fists."
    ],
    safety: "Ensure non-slip shoes and dry floor before leaning into the wall.",
    animType: "wall_push",
    likes: 305
  },
  {
    id: "ankle-circles",
    title: "Ankle Alphabet Swivels",
    category: "Seated Mobility",
    filterTag: "seated",
    impactTag: "Zero Joint Impact",
    suitableFor: "Edema Relief, Neuropathy, Seniors",
    mode: "timer",
    duration: 30,
    met: 2.0,
    points: 45,
    audioTrack: "FitFeed Coach • Joint Lubrication",
    caption: "Slow deliberate circles with your toes help activate calf muscle venous pumps to reduce swelling.",
    muscles: "Gastrocnemius, Soleus & Peroneals",
    modifications: [
      "Supported: Rest your heel on the floor and swivel toes left and right.",
      "Seated: Can be done reclined with legs elevated on an ottoman."
    ],
    safety: "If a calf cramp occurs, gently pull your toes toward your shin.",
    animType: "ankle_circle",
    likes: 96
  },
  {
    id: "seated-torso-twist",
    title: "Gentle Torso Twist",
    category: "Spine & Posture",
    filterTag: "spine",
    impactTag: "Zero Joint Impact",
    suitableFor: "Mid-Back Tension, Digestive Ease",
    mode: "timer",
    duration: 30,
    met: 2.2,
    points: 50,
    audioTrack: "FitFeed Coach • Rotational Release",
    caption: "Gently rotate through your mid-spine while keeping both sit-bones firmly anchored to the seat.",
    muscles: "Internal & External Obliques, Thoracic Spine",
    modifications: [
      "Limited Range: Rotate only 15 to 20 degrees; focus on tall posture.",
      "Chair Arms: Hold the chair armrest to support the stretch softly."
    ],
    safety: "Never torque or twist using ballistic momentum.",
    animType: "torso_twist",
    likes: 167
  },
  {
    id: "seated-side-reach",
    title: "Seated Side Reach",
    category: "Spine & Posture",
    filterTag: "spine",
    impactTag: "Zero Joint Impact",
    suitableFor: "Shallow Breathing, Ribcage Stiffness",
    mode: "reps",
    targetReps: 8,
    met: 2.3,
    points: 50,
    audioTrack: "FitFeed Coach • Side Body Opening",
    caption: "Expands lateral ribcage space for deeper lung volume and releases tight side back muscles.",
    muscles: "Quadratus Lumborum, Intercostals & Latissimus",
    modifications: [
      "Shoulder Discomfort: Keep hand on your shoulder rather than reaching overhead.",
      "Balance Support: Hold onto the chair frame with your non-reaching hand."
    ],
    safety: "Keep both hips firmly grounded on the seat to prevent tipping.",
    animType: "side_reach",
    likes: 129
  },
  {
    id: "box-breathing",
    title: "4-4-4-4 Box Breathing",
    category: "Mindful Breath",
    filterTag: "breath",
    impactTag: "Restorative",
    suitableFor: "Anxiety Relief, Blood Pressure Care",
    mode: "timer",
    duration: 48,
    met: 1.5,
    points: 40,
    audioTrack: "FitFeed Coach • Vagus Nerve Calm",
    caption: "Inhale 4s, hold 4s, exhale 4s, hold empty 4s. Activates parasympathetic recovery.",
    muscles: "Diaphragm & Autonomic Nervous System",
    modifications: [
      "Shortness of Breath: Adjust cadence to 3-3-3-3 if 4 seconds feels too long.",
      "High Blood Pressure: Skip breath holds and practice gentle continuous breathing."
    ],
    safety: "Breathe naturally. If dizziness occurs, return to normal breathing.",
    animType: "breath",
    likes: 412
  },
  {
    id: "seated-knee-extensions",
    title: "Seated Knee Extensions",
    category: "Seated Mobility",
    filterTag: "seated",
    impactTag: "Zero Joint Impact",
    suitableFor: "Knee Cartilage Support, Seniors",
    mode: "reps",
    targetReps: 12,
    met: 2.4,
    points: 55,
    audioTrack: "FitFeed Coach • Quad Strengthening",
    caption: "Slowly straighten one leg forward from your chair. Builds quadriceps strength without compressive load.",
    muscles: "Quadriceps & Patellar Tendon",
    modifications: [
      "Knee Discomfort: Extend only halfway without locking the knee joint.",
      "Comfort: Place a rolled towel under thighs for joint relief."
    ],
    safety: "Do not hyperextend or kick abruptly. Extend with smooth control.",
    animType: "knee_ext",
    likes: 178
  },
  {
    id: "wall-angel-slides",
    title: "Wall Angel Arm Slides",
    category: "Supported Strength",
    filterTag: "strength",
    impactTag: "Postural Restoration",
    suitableFor: "Forward Head Posture, Rounded Shoulders",
    mode: "reps",
    targetReps: 10,
    met: 2.6,
    points: 55,
    audioTrack: "FitFeed Coach • Scapular Glide",
    caption: "Stand with back against a wall. Slide elbows and wrists upward like making a snow angel.",
    muscles: "Rhomboids, Middle Trapezius & Rotator Cuff",
    modifications: [
      "Tight Shoulders: Keep elbows slightly off the wall if touching causes strain.",
      "Seated Option: Can be performed seated against a high-back chair."
    ],
    safety: "Do not arch your lower back away from the wall.",
    animType: "wall_angel",
    likes: 195
  },
  {
    id: "seated-shoulder-rolls",
    title: "Seated Shoulder Rolls",
    category: "Seated Mobility",
    filterTag: "seated",
    impactTag: "Zero Joint Impact",
    suitableFor: "Neck Strain, Computer Fatigue, Arthritis",
    mode: "timer",
    duration: 30,
    met: 2.0,
    points: 45,
    audioTrack: "FitFeed Coach • Cervical Ease",
    caption: "Draw smooth, wide circular motions with your shoulders backward to release trapezius stiffness.",
    muscles: "Trapezius, Levator Scapulae & Deltoids",
    modifications: [
      "Neck Tenderness: Keep circles small and gentle.",
      "Wheelchair: Keep hands relaxed in lap throughout."
    ],
    safety: "Keep chin level; avoid tilting head backward.",
    animType: "arm_swing",
    likes: 210
  },
  {
    id: "wrist-finger-glides",
    title: "Wrist & Finger Glides",
    category: "Seated Mobility",
    filterTag: "seated",
    impactTag: "Zero Joint Impact",
    suitableFor: "Arthritis Relief, Carpal Tunnel, Typing Fatigue",
    mode: "reps",
    targetReps: 12,
    met: 1.8,
    points: 40,
    audioTrack: "FitFeed Coach • Tendon Lubrication",
    caption: "Gently open hands wide like open stars, then curl softly into relaxed fists.",
    muscles: "Finger Flexors, Extensors & Carpal Synovium",
    modifications: [
      "Arthritis Flare: Move within gentle pain-free perimeter without tight squeezing.",
      "Support: Rest forearms on a table or chair armrests."
    ],
    safety: "Never snap fingers open forcefully.",
    animType: "wrist_glide",
    likes: 133
  },
  {
    id: "seated-heel-toe-taps",
    title: "Seated Heel-Toe Rockers",
    category: "Seated Mobility",
    filterTag: "seated",
    impactTag: "Zero Joint Impact",
    suitableFor: "Lower Leg Swelling, Seniors, Walking Balance",
    mode: "reps",
    targetReps: 20,
    met: 2.2,
    points: 50,
    audioTrack: "FitFeed Coach • Ankle Pump Rhythm",
    caption: "Alternate tapping heels and toes on the floor to stimulate lower leg circulation.",
    muscles: "Tibialis Anterior & Soleus",
    modifications: [
      "Limited Ankle Motion: Small taps without forcing full range.",
      "Footwear: Can be done in comfortable socks or shoes."
    ],
    safety: "Keep movements rhythmic and pain-free.",
    animType: "ankle_circle",
    likes: 164
  },
  {
    id: "seated-row-pulls",
    title: "Seated Scapular Row Pulls",
    category: "Spine & Posture",
    filterTag: "spine",
    impactTag: "Zero Joint Impact",
    suitableFor: "Slumped Posture, Desk Fatigue",
    mode: "reps",
    targetReps: 12,
    met: 2.5,
    points: 55,
    audioTrack: "FitFeed Coach • Upper Back Activation",
    caption: "Reach forward gently, then pull elbows backward while squeezing shoulder blades softly together.",
    muscles: "Rhomboids, Latissimus Dorsi & Posterior Deltoids",
    modifications: [
      "Shoulder Pain: Keep elbows lower by your ribs.",
      "Chair Support: Sit against backrest for spinal support."
    ],
    safety: "Avoid shrugging shoulders up toward your ears.",
    animType: "row_pull",
    likes: 189
  },
  {
    id: "chair-supported-squats",
    title: "Chair Sit-to-Stand Tap",
    category: "Supported Strength",
    filterTag: "strength",
    impactTag: "Functional Strength",
    suitableFor: "Independence, Sit-to-Stand Mobility, Seniors",
    mode: "reps",
    targetReps: 8,
    met: 3.5,
    points: 70,
    audioTrack: "FitFeed Coach • Functional Power",
    caption: "Rise partially or fully from your chair with feet planted, then lower down softly under control.",
    muscles: "Gluteus Maximus, Quadriceps & Core",
    modifications: [
      "Beginners: Push off chair armrests with both hands.",
      "High BMI: Position feet wider than hip-width for balance and joint comfort."
    ],
    safety: "Ensure chair is sturdy against a wall or non-slip mat so it cannot slide.",
    animType: "squat_tap",
    likes: 340
  },
  {
    id: "neck-side-tilts",
    title: "Gentle Neck Side Tilts",
    category: "Spine & Posture",
    filterTag: "spine",
    impactTag: "Zero Joint Impact",
    suitableFor: "Tension Headaches, Upper Back Stiffness",
    mode: "timer",
    duration: 30,
    met: 1.8,
    points: 40,
    audioTrack: "FitFeed Coach • Cervical Release",
    caption: "Slowly tilt right ear toward right shoulder. Pause for 2 breaths, then softly switch to left.",
    muscles: "Upper Trapezius, Scalenes & Sternocleidomastoid",
    modifications: [
      "Gentle: Move only a few inches; never force ear all the way to shoulder.",
      "Supported: Rest hands comfortably in lap."
    ],
    safety: "Never pull or press your head with your hand. Gravity alone is sufficient.",
    animType: "neck_tilt",
    likes: 152
  },
  {
    id: "seated-hamstring-hinge",
    title: "Seated Hamstring Hinge",
    category: "Seated Mobility",
    filterTag: "seated",
    impactTag: "Zero Joint Impact",
    suitableFor: "Tight Leg Backs, Lower Back Decompression",
    mode: "timer",
    duration: 30,
    met: 2.1,
    points: 45,
    audioTrack: "FitFeed Coach • Posterior Lengthener",
    caption: "Extend one leg forward with heel on floor. Hinge gently at hips with flat back until mild stretch is felt.",
    muscles: "Biceps Femoris, Semitendinosus & Calves",
    modifications: [
      "Knee Relief: Keep knee slightly soft rather than rigidly locked.",
      "Chair Position: Perch on front third of chair."
    ],
    safety: "Do not round your lower spine; hinge cleanly from the hip crease.",
    animType: "hamstring_hinge",
    likes: 175
  },
  {
    id: "countertop-calf-raises",
    title: "Supported Calf Raises",
    category: "Supported Strength",
    filterTag: "strength",
    impactTag: "Balance & Stability",
    suitableFor: "Fall Prevention, Ankle Strength, Seniors",
    mode: "reps",
    targetReps: 12,
    met: 2.8,
    points: 55,
    audioTrack: "FitFeed Coach • Ankle Power",
    caption: "Lightly hold a countertop or chair back. Rise onto balls of both feet, hold 1s, lower slowly.",
    muscles: "Gastrocnemius, Soleus & Plantar Fascia",
    modifications: [
      "Balance Support: Keep both hands resting on surface.",
      "Seated: Can be performed seated by lifting heels high."
    ],
    safety: "Keep weight distributed evenly across the balls of both feet.",
    animType: "calf_raise",
    likes: 228
  },
  {
    id: "seated-hip-openers",
    title: "Seated Butterfly Hip Openers",
    category: "Seated Mobility",
    filterTag: "seated",
    impactTag: "Zero Joint Impact",
    suitableFor: "Pelvic Mobility, Hip Stiffness, Wheelchair",
    mode: "reps",
    targetReps: 10,
    met: 2.2,
    points: 50,
    audioTrack: "FitFeed Coach • Pelvic Freedom",
    caption: "With feet grounded, softly open knees outward, then bring knees back to hip-width.",
    muscles: "Gluteus Medius, Tensor Fasciae Latae & Adductors",
    modifications: [
      "Hip Replacements: Keep range small; do not exceed 45 degrees.",
      "Support: Place hands on outer thighs to assist movement."
    ],
    safety: "Stop if you feel sharp groin discomfort.",
    animType: "hip_opener",
    likes: 161
  },
  {
    id: "chin-tuck-retractions",
    title: "Postural Chin Tucks",
    category: "Spine & Posture",
    filterTag: "spine",
    impactTag: "Zero Joint Impact",
    suitableFor: "Tech Neck, Forward Head Posture",
    mode: "reps",
    targetReps: 10,
    met: 1.8,
    points: 45,
    audioTrack: "FitFeed Coach • Alignment Reset",
    caption: "Draw your chin straight backward as if making a gentle double chin. Hold 2s, release.",
    muscles: "Longus Colli, Deep Cervical Flexors",
    modifications: [
      "Feedback: Touch two fingers lightly to chin to guide head straight back.",
      "Seated: Keep back firmly against backrest."
    ],
    safety: "Do not tilt head downward; glide horizontally backward.",
    animType: "chin_tuck",
    likes: 198
  },
  {
    id: "wall-chest-stretch",
    title: "Wall Supported Chest Opener",
    category: "Supported Strength",
    filterTag: "strength",
    impactTag: "Zero Joint Impact",
    suitableFor: "Hunched Shoulders, Breathing Capacity",
    mode: "timer",
    duration: 30,
    met: 2.0,
    points: 45,
    audioTrack: "FitFeed Coach • Heart Opening",
    caption: "Place forearm flat against a doorway or wall. Step forward gently until a soft stretch opens your chest.",
    muscles: "Pectoralis Major & Biceps Brachii",
    modifications: [
      "Low Impact: Keep elbow lower than shoulder height.",
      "Seated: Can be done by clasping hands behind chair backrest."
    ],
    safety: "Never twist aggressively away from the wall.",
    animType: "chest_stretch",
    likes: 187
  },
  {
    id: "seated-flutter-kicks",
    title: "Seated Gentle Flutter Kicks",
    category: "Seated Mobility",
    filterTag: "seated",
    impactTag: "Zero Joint Impact",
    suitableFor: "Gentle Core Activation, Seniors",
    mode: "timer",
    duration: 25,
    met: 2.6,
    points: 50,
    audioTrack: "FitFeed Coach • Core Circulation",
    caption: "Hold chair sides. Lift feet slightly and make small, gentle alternating flutter kicks in the air.",
    muscles: "Transverse Abdominis & Rectus Femoris",
    modifications: [
      "Resting Foot: Keep one foot grounded while fluttering the other.",
      "Low Energy: Point and flex feet on the floor instead."
    ],
    safety: "Keep lower back supported against chair; avoid slouching.",
    animType: "flutter_kick",
    likes: 145
  },
  {
    id: "diaphragmatic-belly-breath",
    title: "Diaphragmatic Belly Expansion",
    category: "Mindful Breath",
    filterTag: "breath",
    impactTag: "Restorative",
    suitableFor: "Oxygenation, Digestion, Relaxation",
    mode: "timer",
    duration: 40,
    met: 1.5,
    points: 40,
    audioTrack: "FitFeed Coach • Diaphragm Awakening",
    caption: "Place one hand on your belly. Inhale softly through nose, feeling belly balloon outward. Exhale gently.",
    muscles: "Diaphragm & Intercostals",
    modifications: [
      "Position: Can be done seated, reclined, or supported in wheelchair.",
      "Pacing: Breathe at your natural unhurried cadence."
    ],
    safety: "Keep shoulders and chest still; let only the belly move.",
    animType: "breath",
    likes: 276
  },
  {
    id: "4-7-8-relax-breath",
    title: "4-7-8 Deep Sleep Reset",
    category: "Mindful Breath",
    filterTag: "breath",
    impactTag: "Restorative",
    suitableFor: "Insomnia, High Stress, Evening Wind-Down",
    mode: "timer",
    duration: 45,
    met: 1.4,
    points: 40,
    audioTrack: "FitFeed Coach • Parasympathetic Ease",
    caption: "Inhale quietly through nose for 4s, hold breath for 7s, exhale completely through mouth with a whoosh for 8s.",
    muscles: "Vagus Nerve & Autonomic Recovery",
    modifications: [
      "Breath Hold Discomfort: Shorten to 2-3-4 cadence.",
      "High Blood Pressure: Skip the 7-second hold; simply inhale 4, exhale 8."
    ],
    safety: "Never strain to hold breath. Stop if any lightheadedness occurs.",
    animType: "breath",
    likes: 389
  }
];

/* ==========================================================================
   2. APP STATE STORE (LOCAL-FIRST)
   ========================================================================== */

class AppStore {
  constructor() {
    this.KEY = "fitfeed_app_v5_complete";
    this.data = this.load();
  }

  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.warn("Could not read localStorage:", e);
    }
    return {
      completedCount: 0,
      totalCalories: 0,
      totalPoints: 0,
      streak: 1,
      lastDate: new Date().toISOString().slice(0, 10),
      likedIds: [],
      voiceEnabled: true,
      slowMotion: false,
      dailyGoal: 3,
      history: []
    };
  }

  save() {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(this.data));
    } catch (e) {
      console.warn("Could not save to localStorage:", e);
    }
  }

  recordExercise(ex, durationSecs) {
    const today = new Date().toISOString().slice(0, 10);
    const durationMins = durationSecs / 60;
    const calories = Math.round((ex.met * 3.5 * 85 / 200) * durationMins * 10) / 10;

    this.data.completedCount++;
    this.data.totalCalories = Math.round((this.data.totalCalories + calories) * 10) / 10;
    this.data.totalPoints += ex.points;

    if (this.data.lastDate !== today) {
      this.data.streak++;
      this.data.lastDate = today;
    }

    this.data.history.unshift({
      id: Date.now().toString(),
      title: ex.title,
      category: ex.category,
      calories,
      points: ex.points,
      timestamp: new Date().toISOString()
    });

    if (this.data.history.length > 80) this.data.history = this.data.history.slice(0, 80);
    this.save();
    return { calories, points: ex.points };
  }

  getTodayCompletedCount() {
    const today = new Date().toISOString().slice(0, 10);
    return this.data.history.filter(h => h.timestamp.startsWith(today)).length;
  }

  getWeeklyData() {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const now = new Date();
    const currentDayIdx = (now.getDay() + 6) % 7; // Monday = 0
    const week = [];

    for (let i = 0; i < 7; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() - currentDayIdx + i);
      const dateStr = d.toISOString().slice(0, 10);
      const count = this.data.history.filter(h => h.timestamp.startsWith(dateStr)).length;
      week.push({
        name: days[i],
        dateStr,
        count,
        isToday: i === currentDayIdx
      });
    }
    return week;
  }
}

/* ==========================================================================
   3. VOICE COACH (WEB SPEECH API)
   ========================================================================== */

class VoiceCoach {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.enabled = true;
  }

  speak(text) {
    if (!this.synth || !this.enabled) return;
    try {
      this.synth.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.rate = 1.0;
      utt.pitch = 1.05;
      const voices = this.synth.getVoices();
      const natural = voices.find(v => v.lang.startsWith("en") && (v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("Samantha")));
      if (natural) utt.voice = natural;
      this.synth.speak(utt);
    } catch (e) {
      console.warn("Speech synthesis error:", e);
    }
  }

  announceStart(title) {
    this.speak(`Starting ${title}. Breathe easily and move within your comfort.`);
  }

  announceHalfway() {
    this.speak("Halfway there! Keep your shoulders soft and relaxed.");
  }

  announceDone(points) {
    this.speak(`Movement complete! You earned ${points} FitPoints.`);
  }
}

/* ==========================================================================
   4. THREE.JS 3D MOVEMENT DEMONSTRATION ENGINE
   ========================================================================== */

class MovementAvatar3D {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.avatar = null;
    this.chair = null;
    this.animType = "arm_swing";
    this.speedMultiplier = 1.0;
    this.clock = null;
    this.isReady = false;

    if (typeof THREE !== "undefined") {
      this.init();
    }
  }

  init() {
    try {
      const width = this.canvas.clientWidth || 380;
      const height = this.canvas.clientHeight || 750;

      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 100);
      this.camera.position.set(0, 1.3, 3.4);

      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        alpha: true,
        antialias: true
      });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Studio Lighting
      const ambient = new THREE.AmbientLight(0xffffff, 0.85);
      this.scene.add(ambient);

      const keyLight = new THREE.DirectionalLight(0x10b981, 1.4);
      keyLight.position.set(2, 5, 3);
      this.scene.add(keyLight);

      const rimLight = new THREE.DirectionalLight(0x06b6d4, 0.8);
      rimLight.position.set(-3, 2, -2);
      this.scene.add(rimLight);

      this.buildModel();
      this.clock = new THREE.Clock();
      this.isReady = true;
      this.animate();

      window.addEventListener("resize", () => this.resize());
    } catch (e) {
      console.warn("Three.js WebGL error:", e);
    }
  }

  buildModel() {
    this.avatar = new THREE.Group();

    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.35, metalness: 0.1 });
    const jointMat = new THREE.MeshStandardMaterial({ color: 0x06b6d4, roughness: 0.4 });
    const chairMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6 });

    // Torso
    const torsoGeo = new THREE.CylinderGeometry(0.22, 0.18, 0.52, 16);
    this.torso = new THREE.Mesh(torsoGeo, bodyMat);
    this.torso.position.y = 0.95;
    this.avatar.add(this.torso);

    // Head
    const headGeo = new THREE.SphereGeometry(0.15, 20, 20);
    this.head = new THREE.Mesh(headGeo, bodyMat);
    this.head.position.y = 1.38;
    this.avatar.add(this.head);

    // Left Arm
    this.leftArm = new THREE.Group();
    this.leftArm.position.set(-0.3, 1.15, 0);
    const armGeo = new THREE.CylinderGeometry(0.055, 0.05, 0.42, 12);
    const leftArmMesh = new THREE.Mesh(armGeo, bodyMat);
    leftArmMesh.position.y = -0.21;
    this.leftArm.add(leftArmMesh);
    this.avatar.add(this.leftArm);

    // Right Arm
    this.rightArm = new THREE.Group();
    this.rightArm.position.set(0.3, 1.15, 0);
    const rightArmMesh = new THREE.Mesh(armGeo, bodyMat);
    rightArmMesh.position.y = -0.21;
    this.rightArm.add(rightArmMesh);
    this.avatar.add(this.rightArm);

    // Left Leg
    this.leftLeg = new THREE.Group();
    this.leftLeg.position.set(-0.14, 0.68, 0.08);
    const legGeo = new THREE.CylinderGeometry(0.075, 0.065, 0.42, 12);
    const leftLegMesh = new THREE.Mesh(legGeo, jointMat);
    leftLegMesh.position.y = -0.21;
    this.leftLeg.add(leftLegMesh);
    this.avatar.add(this.leftLeg);

    // Right Leg
    this.rightLeg = new THREE.Group();
    this.rightLeg.position.set(0.14, 0.68, 0.08);
    const rightLegMesh = new THREE.Mesh(legGeo, jointMat);
    rightLegMesh.position.y = -0.21;
    this.rightLeg.add(rightLegMesh);
    this.avatar.add(this.rightLeg);

    // Chair
    this.chair = new THREE.Group();
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.05, 0.55), chairMat);
    seat.position.set(0, 0.65, 0);
    this.chair.add(seat);

    const back = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.55, 0.05), chairMat);
    back.position.set(0, 0.95, -0.25);
    this.chair.add(back);

    const legOffsets = [[-0.25, 0.22], [0.25, 0.22], [-0.25, -0.22], [0.25, -0.22]];
    legOffsets.forEach(([x, z]) => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.65, 8), chairMat);
      leg.position.set(x, 0.325, z);
      this.chair.add(leg);
    });
    this.avatar.add(this.chair);

    this.scene.add(this.avatar);
  }

  setAnimation(animType) {
    this.animType = animType;
    if (this.chair) {
      this.chair.visible = !["wall_push", "wall_angel", "chest_stretch", "calf_raise"].includes(animType);
    }
  }

  animate() {
    if (!this.isReady) return;
    requestAnimationFrame(() => this.animate());

    const t = this.clock.getElapsedTime() * this.speedMultiplier;

    if (this.animType === "arm_swing") {
      const swing = Math.sin(t * 3.5) * 0.75;
      this.leftArm.rotation.x = swing;
      this.rightArm.rotation.x = -swing;
      this.torso.rotation.y = Math.sin(t * 3.5) * 0.08;
    } else if (this.animType === "march") {
      const marchAngle = Math.sin(t * 4) * 0.6;
      this.leftLeg.rotation.x = Math.max(0, marchAngle);
      this.rightLeg.rotation.x = Math.max(0, -marchAngle);
    } else if (this.animType === "cat_cow") {
      const wave = Math.sin(t * 2) * 0.25;
      this.torso.rotation.x = wave;
      this.head.rotation.x = wave * 1.5;
    } else if (this.animType === "wall_push") {
      const push = (Math.sin(t * 2.5) + 1) * 0.5;
      this.avatar.position.z = -push * 0.35;
      this.leftArm.rotation.x = -Math.PI / 2 + push * 0.35;
      this.rightArm.rotation.x = -Math.PI / 2 + push * 0.35;
    } else if (this.animType === "breath") {
      const breathe = 1 + Math.sin(t * 1.8) * 0.07;
      this.torso.scale.set(breathe, 1, breathe);
      this.head.position.y = 1.38 + Math.sin(t * 1.8) * 0.02;
    } else if (this.animType === "torso_twist") {
      const twist = Math.sin(t * 2) * 0.55;
      this.torso.rotation.y = twist;
      this.leftArm.rotation.y = twist;
      this.rightArm.rotation.y = twist;
    } else if (this.animType === "side_reach") {
      const lean = Math.sin(t * 2) * 0.3;
      this.torso.rotation.z = lean;
      this.rightArm.rotation.z = Math.PI / 1.3 + lean;
    } else if (this.animType === "knee_ext") {
      const ext = Math.sin(t * 3) * 0.55;
      this.rightLeg.rotation.x = Math.max(0, ext);
    } else if (this.animType === "wall_angel") {
      const slide = Math.sin(t * 2.5) * 0.45;
      this.leftArm.rotation.z = Math.PI / 2 + slide;
      this.rightArm.rotation.z = -Math.PI / 2 - slide;
    } else if (this.animType === "row_pull") {
      const row = Math.sin(t * 3) * 0.4;
      this.leftArm.rotation.x = -Math.PI / 4 + row;
      this.rightArm.rotation.x = -Math.PI / 4 + row;
    } else if (this.animType === "squat_tap") {
      const squat = (Math.sin(t * 2) + 1) * 0.5;
      this.avatar.position.y = squat * 0.35;
      this.leftLeg.rotation.x = -squat * 0.4;
      this.rightLeg.rotation.x = -squat * 0.4;
    } else if (this.animType === "hip_opener") {
      const open = Math.sin(t * 2.5) * 0.35;
      this.leftLeg.rotation.z = open;
      this.rightLeg.rotation.z = -open;
    }

    this.renderer.render(this.scene, this.camera);
  }

  resize() {
    if (!this.renderer || !this.camera) return;
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
}

/* ==========================================================================
   5. 3D CONFETTI CELEBRATION
   ========================================================================== */

class ConfettiExplosion {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.particles = [];
    this.active = false;
    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst() {
    this.resize();
    const colors = ["#10b981", "#06b6d4", "#f59e0b", "#ec4899", "#8b5cf6", "#ffffff"];
    this.particles = [];
    for (let i = 0; i < 90; i++) {
      this.particles.push({
        x: this.canvas.width / 2 + (Math.random() - 0.5) * 80,
        y: this.canvas.height * 0.45,
        vx: (Math.random() - 0.5) * 16,
        vy: -Math.random() * 18 - 6,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 10,
        alpha: 1
      });
    }
    if (!this.active) {
      this.active = true;
      this.render();
    }
  }

  render() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.45;
      p.rotation += p.rSpeed;
      p.alpha -= 0.008;

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = Math.max(0, p.alpha);
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.3);
      this.ctx.restore();

      if (p.alpha <= 0 || p.y > this.canvas.height + 40) {
        this.particles.splice(i, 1);
      }
    }

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.render());
    } else {
      this.active = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

/* ==========================================================================
   6. MAIN FITFEED CONTROLLER (REELS + DASHBOARD + LIBRARY)
   ========================================================================== */

class FitFeedApp {
  constructor() {
    this.store = new AppStore();
    this.voice = new VoiceCoach();
    this.avatar = null;
    this.confetti = null;

    // Active Reel State
    this.activeIndex = 0;
    this.timerRunning = false;
    this.timerSeconds = 30;
    this.timerTotal = 30;
    this.timerInterval = null;
    this.currentReps = 0;

    this.init();
  }

  init() {
    this.cacheElements();
    this.bindNavigation();
    this.renderReels();
    this.initObserver();
    this.renderDashboard();
    this.renderLibrary();
    this.bindGlobalShortcuts();

    // Init Confetti
    const confCanvas = document.getElementById("celebration-canvas");
    if (confCanvas) this.confetti = new ConfettiExplosion(confCanvas);

    // Init 3D Avatar
    const firstCanvas = document.querySelector("#canvas-reel-0");
    if (firstCanvas) {
      this.avatar = new MovementAvatar3D(firstCanvas);
    }

    this.updateTopBarStats();
  }

  cacheElements() {
    this.el = {
      // Views
      tabReels: document.getElementById("tab-reels"),
      tabDashboard: document.getElementById("tab-dashboard"),
      tabLibrary: document.getElementById("tab-library"),
      navBtns: document.querySelectorAll(".segmented-nav-pill"),

      // Top Bar Stats
      navStreak: document.getElementById("nav-streak-text"),
      navPoints: document.getElementById("nav-points-text"),
      voiceBtn: document.getElementById("btn-global-voice"),

      // Reels Feed
      reelsDeck: document.getElementById("reels-scroll-deck"),
      storyBar: document.getElementById("reels-story-bar"),
      btnSideUp: document.getElementById("btn-side-up"),
      btnSideDown: document.getElementById("btn-side-down"),

      // Dashboard
      dashStreak: document.getElementById("dash-streak-val"),
      dashCalories: document.getElementById("dash-calories-val"),
      dashPoints: document.getElementById("dash-points-val"),
      dashCompleted: document.getElementById("dash-completed-val"),
      dashBars: document.getElementById("dash-weekly-bars"),
      dashWeekTotal: document.getElementById("dash-week-total-text"),
      dashGoalBar: document.getElementById("dash-goal-bar"),
      dashGoalLabel: document.getElementById("dash-goal-label"),
      dashHistory: document.getElementById("dash-history-container"),
      btnClearHistory: document.getElementById("btn-clear-history"),
      btnJumpReels: document.getElementById("btn-quick-play-reels"),

      // Library
      libSearch: document.getElementById("lib-search-input"),
      libFilterPills: document.querySelectorAll(".filter-pill"),
      libGrid: document.getElementById("lib-cards-grid"),

      // Drawers
      drawerBackdrop: document.getElementById("drawer-backdrop"),
      infoDrawer: document.getElementById("info-drawer"),
      btnCloseDrawer: document.getElementById("btn-close-drawer"),
      drawerTitle: document.getElementById("drawer-title"),
      drawerMuscles: document.getElementById("drawer-muscles"),
      drawerModifications: document.getElementById("drawer-modifications"),
      drawerSafety: document.getElementById("drawer-safety"),

      toast: document.getElementById("toast-bubble")
    };
  }

  /* ==========================================================================
     NAVIGATION CONTROLLER
     ========================================================================== */
  bindNavigation() {
    this.el.navBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.tab;
        this.switchTab(target);
      });
    });

    if (this.el.btnJumpReels) {
      this.el.btnJumpReels.addEventListener("click", () => this.switchTab("reels"));
    }

    if (this.el.voiceBtn) {
      this.el.voiceBtn.addEventListener("click", () => this.toggleVoiceCoach());
    }

    if (this.el.btnClearHistory) {
      this.el.btnClearHistory.addEventListener("click", () => {
        if (confirm("Reset all activity history? This cannot be undone.")) {
          this.store.data.completedCount = 0;
          this.store.data.totalCalories = 0;
          this.store.data.totalPoints = 0;
          this.store.data.history = [];
          this.store.save();
          this.renderDashboard();
          this.updateTopBarStats();
          this.showToast("Activity history cleared.");
        }
      });
    }

    // Drawer Close Listeners
    this.el.drawerBackdrop.addEventListener("click", () => this.closeDrawer());
    this.el.btnCloseDrawer.addEventListener("click", () => this.closeDrawer());

    // Desktop Reel Nav
    if (this.el.btnSideUp) this.el.btnSideUp.addEventListener("click", () => this.scrollToPrevReel());
    if (this.el.btnSideDown) this.el.btnSideDown.addEventListener("click", () => this.scrollToNextReel());
  }

  switchTab(tabId) {
    this.el.navBtns.forEach(b => {
      b.classList.toggle("active", b.dataset.tab === tabId);
      b.setAttribute("aria-selected", b.dataset.tab === tabId);
    });

    this.el.tabReels.classList.toggle("hidden", tabId !== "reels");
    this.el.tabDashboard.classList.toggle("hidden", tabId !== "dashboard");
    this.el.tabLibrary.classList.toggle("hidden", tabId !== "library");

    if (tabId === "dashboard") {
      this.pauseTimer();
      this.renderDashboard();
    } else if (tabId === "library") {
      this.pauseTimer();
      this.renderLibrary();
    }
  }

  updateTopBarStats() {
    if (this.el.navStreak) this.el.navStreak.textContent = `${this.store.data.streak} Day Streak`;
    if (this.el.navPoints) this.el.navPoints.textContent = `${this.store.data.totalPoints} Pts`;
  }

  /* ==========================================================================
     REELS ENGINE
     ========================================================================== */
  renderReels() {
    // 1. Render Top Story Segments
    this.el.storyBar.innerHTML = "";
    EXERCISES_DATA.forEach((_, idx) => {
      const seg = document.createElement("div");
      seg.className = `story-segment ${idx < this.activeIndex ? 'done' : ''}`;
      seg.innerHTML = `<div class="story-segment-bar" id="story-bar-${idx}"></div>`;
      this.el.storyBar.appendChild(seg);
    });

    // 2. Render Reels Slides
    this.el.reelsDeck.innerHTML = "";
    EXERCISES_DATA.forEach((ex, idx) => {
      const isLiked = this.store.data.likedIds.includes(ex.id);
      const slide = document.createElement("div");
      slide.className = "reel-item";
      slide.id = `reel-${idx}`;
      slide.dataset.index = idx;

      slide.innerHTML = `
        <div class="reel-canvas-layer">
          <canvas id="canvas-reel-${idx}"></canvas>
        </div>

        <!-- Live Visual Demonstration Badge & Speed Toggle -->
        <div class="motion-demo-badge">
          <span class="motion-rec-dot"></span>
          <span>Motion Guide</span>
        </div>

        <button class="speed-toggle-pill" id="btn-speed-${idx}" type="button" title="Toggle Demonstration Speed">
          <span>1.0x</span>
        </button>

        <div class="reel-vignette-top"></div>
        <div class="reel-vignette-bottom"></div>

        <!-- Right Side Tool Rail -->
        <aside class="reel-actions-column" aria-label="Exercise Tools">
          <!-- Play / Timer Button -->
          <div>
            <button class="reel-tool-btn play-glow" id="btn-play-${idx}" type="button" aria-label="Start or pause timer">
              <svg class="play-ring-svg" viewBox="0 0 54 54">
                <circle id="timer-ring-${idx}" cx="27" cy="27" r="24"></circle>
              </svg>
              <svg id="play-icon-${idx}" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </button>
            <div class="reel-tool-label" id="timer-text-${idx}">${ex.mode === 'timer' ? `${ex.duration}s` : 'Reps'}</div>
          </div>

          <!-- Like Button -->
          <div>
            <button class="reel-tool-btn ${isLiked ? 'liked' : ''}" id="btn-like-${idx}" type="button" aria-label="Bookmark move">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="${isLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </button>
            <div class="reel-tool-label" id="like-count-${idx}">${ex.likes + (isLiked ? 1 : 0)}</div>
          </div>

          <!-- Rep Stepper Button -->
          ${ex.mode === 'reps' ? `
          <div>
            <button class="reel-tool-btn" id="btn-rep-${idx}" type="button" aria-label="Count a repetition">
              <span class="text-xs font-black text-emerald-400">＋1</span>
            </button>
            <div class="reel-tool-label" id="rep-rail-label-${idx}">0/${ex.targetReps}</div>
          </div>` : ''}

          <!-- Info Sheet Button -->
          <div>
            <button class="reel-tool-btn" id="btn-info-${idx}" type="button" aria-label="Open anatomy and adjustments">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
            </button>
            <div class="reel-tool-label">Info</div>
          </div>
        </aside>

        <!-- Bottom Caption Overlay -->
        <div class="reel-caption-overlay">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              ${ex.category} · ${ex.impactTag}
            </span>
          </div>

          <h2 class="text-xl font-heading font-extrabold text-white flex items-center gap-1.5 leading-tight">
            <span>${ex.title}</span>
            <span class="text-sky-400" title="Medically safe for seniors and beginners">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </span>
          </h2>

          <p class="text-xs text-slate-300 leading-relaxed line-clamp-2">${ex.caption}</p>

          <div class="audio-track-ticker">
            <div class="audio-disc-icon"></div>
            <span class="truncate">${ex.audioTrack}</span>
          </div>

          <!-- Live Status HUD Pill -->
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-xs font-bold text-white w-fit" id="hud-pill-${idx}">
            <span id="hud-text-${idx}">${ex.mode === 'timer' ? `Ready • ${ex.duration}s timer` : `Ready • Tap ＋1 to count`}</span>
          </div>
        </div>
      `;

      this.bindReelSlideEvents(slide, ex, idx);
      this.el.reelsDeck.appendChild(slide);
    });
  }

  bindReelSlideEvents(slide, ex, idx) {
    const playBtn = slide.querySelector(`#btn-play-${idx}`);
    playBtn.addEventListener("click", () => this.handlePlayClick(idx));

    const likeBtn = slide.querySelector(`#btn-like-${idx}`);
    likeBtn.addEventListener("click", () => this.toggleLike(ex, idx));

    const infoBtn = slide.querySelector(`#btn-info-${idx}`);
    infoBtn.addEventListener("click", () => this.openDrawer(ex));

    const repBtn = slide.querySelector(`#btn-rep-${idx}`);
    if (repBtn) {
      repBtn.addEventListener("click", () => this.countRep(ex, idx));
    }

    const speedBtn = slide.querySelector(`#btn-speed-${idx}`);
    if (speedBtn) {
      speedBtn.addEventListener("click", () => {
        if (!this.avatar) return;
        this.store.data.slowMotion = !this.store.data.slowMotion;
        this.avatar.speedMultiplier = this.store.data.slowMotion ? 0.5 : 1.0;
        speedBtn.textContent = this.store.data.slowMotion ? "0.5x Slow" : "1.0x";
        this.showToast(this.store.data.slowMotion ? "Slow-motion form guide (0.5x)" : "Normal speed (1.0x)");
      });
    }
  }

  initObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const newIdx = parseInt(entry.target.dataset.index, 10);
          if (newIdx !== this.activeIndex) {
            this.switchReel(newIdx);
          }
        }
      });
    }, {
      root: this.el.reelsDeck,
      threshold: 0.65
    });

    document.querySelectorAll(".reel-item").forEach(slide => observer.observe(slide));
  }

  switchReel(index) {
    this.pauseTimer();
    this.activeIndex = index;
    const ex = EXERCISES_DATA[index];

    // Update Story Segment Bars
    this.updateStorySegments();

    // Update 3D Avatar Canvas
    if (this.avatar) {
      const activeCanvas = document.querySelector(`#canvas-reel-${index}`);
      if (activeCanvas && this.avatar.canvas !== activeCanvas) {
        this.avatar = new MovementAvatar3D(activeCanvas);
      }
      this.avatar.setAnimation(ex.animType);
      this.avatar.speedMultiplier = this.store.data.slowMotion ? 0.5 : 1.0;
    }

    this.currentReps = 0;
  }

  updateStorySegments() {
    EXERCISES_DATA.forEach((_, i) => {
      const seg = this.el.storyBar.children[i];
      if (seg) {
        seg.classList.toggle("done", i < this.activeIndex);
        const bar = seg.querySelector(".story-segment-bar");
        if (bar) bar.style.width = i < this.activeIndex ? "100%" : "0%";
      }
    });
  }

  handlePlayClick(index) {
    if (this.timerRunning) {
      this.pauseTimer();
    } else {
      this.startTimer(index);
    }
  }

  startTimer(index) {
    const ex = EXERCISES_DATA[index];
    if (ex.mode !== "timer") return;

    this.timerRunning = true;
    this.timerTotal = ex.duration;
    this.timerSeconds = ex.duration;

    const playIcon = document.getElementById(`play-icon-${index}`);
    if (playIcon) playIcon.innerHTML = `<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>`;

    const hudText = document.getElementById(`hud-text-${index}`);
    if (hudText) hudText.textContent = `In Progress: ${this.timerSeconds}s remaining`;

    this.voice.announceStart(ex.title);

    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timerSeconds--;
      if (hudText) hudText.textContent = `Moving: ${this.timerSeconds}s remaining`;

      // Circular Ring update
      const ring = document.getElementById(`timer-ring-${index}`);
      if (ring) {
        const circumference = 2 * Math.PI * 24; // r=24 -> 150.8
        const offset = 150.8 * (1 - this.timerSeconds / this.timerTotal);
        ring.style.strokeDashoffset = `${offset}`;
      }

      // Top Story Bar Fill
      const storyBar = document.getElementById(`story-bar-${index}`);
      if (storyBar) {
        storyBar.style.width = `${((this.timerTotal - this.timerSeconds) / this.timerTotal) * 100}%`;
      }

      if (this.timerSeconds === Math.floor(this.timerTotal / 2)) {
        this.voice.announceHalfway();
      }

      if (this.timerSeconds <= 0) {
        this.completeExercise(ex, index);
      }
    }, 1000);
  }

  pauseTimer() {
    if (!this.timerRunning) return;
    this.timerRunning = false;
    clearInterval(this.timerInterval);

    const playIcon = document.getElementById(`play-icon-${this.activeIndex}`);
    if (playIcon) playIcon.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"/>`;

    const hudText = document.getElementById(`hud-text-${this.activeIndex}`);
    if (hudText) hudText.textContent = `Paused • Tap play to resume`;
  }

  countRep(ex, index) {
    this.currentReps++;
    if (navigator.vibrate) navigator.vibrate(25);

    const label = document.getElementById(`rep-rail-label-${index}`);
    if (label) label.textContent = `${this.currentReps}/${ex.targetReps}`;

    const hudText = document.getElementById(`hud-text-${index}`);
    if (hudText) hudText.textContent = `Reps: ${this.currentReps} of ${ex.targetReps}`;

    this.showToast(`＋1 Rep (${this.currentReps}/${ex.targetReps})`);

    if (this.currentReps >= ex.targetReps) {
      this.completeExercise(ex, index);
    }
  }

  completeExercise(ex, index) {
    this.pauseTimer();
    const duration = ex.mode === "timer" ? ex.duration : 45;
    const res = this.store.recordExercise(ex, duration);

    // 3D Confetti Burst
    if (this.confetti) this.confetti.burst();

    // Voice announcement
    this.voice.announceDone(res.points);

    // Show Toast
    this.showToast(`🎉 Completed ${ex.title}! +${res.points} pts | ${res.calories} kcal`);

    this.updateTopBarStats();
    this.renderDashboard();

    // Auto Advance to Next Reel after celebration
    setTimeout(() => {
      this.scrollToNextReel();
    }, 1800);
  }

  scrollToNextReel() {
    if (this.activeIndex < EXERCISES_DATA.length - 1) {
      const nextSlide = document.getElementById(`reel-${this.activeIndex + 1}`);
      if (nextSlide) nextSlide.scrollIntoView({ behavior: "smooth" });
    }
  }

  scrollToPrevReel() {
    if (this.activeIndex > 0) {
      const prevSlide = document.getElementById(`reel-${this.activeIndex - 1}`);
      if (prevSlide) prevSlide.scrollIntoView({ behavior: "smooth" });
    }
  }

  toggleLike(ex, idx) {
    const isNowLiked = !this.store.data.likedIds.includes(ex.id);
    if (isNowLiked) {
      this.store.data.likedIds.push(ex.id);
    } else {
      const i = this.store.data.likedIds.indexOf(ex.id);
      if (i > -1) this.store.data.likedIds.splice(i, 1);
    }
    this.store.save();

    const btn = document.getElementById(`btn-like-${idx}`);
    const count = document.getElementById(`like-count-${idx}`);
    if (btn) btn.classList.toggle("liked", isNowLiked);
    if (count) count.textContent = ex.likes + (isNowLiked ? 1 : 0);

    this.showToast(isNowLiked ? "Saved to your favorites ♥" : "Removed from favorites");
  }

  toggleVoiceCoach() {
    this.voice.enabled = !this.voice.enabled;
    this.store.data.voiceEnabled = this.voice.enabled;
    this.store.save();
    this.showToast(this.voice.enabled ? "Voice coach audio ON" : "Voice coach MUTED");
  }

  /* ==========================================================================
     DASHBOARD ENGINE
     ========================================================================== */
  renderDashboard() {
    const d = this.store.data;
    if (this.el.dashStreak) this.el.dashStreak.textContent = `${d.streak} Day${d.streak === 1 ? '' : 's'}`;
    if (this.el.dashCalories) this.el.dashCalories.textContent = `${d.totalCalories} kcal`;
    if (this.el.dashPoints) this.el.dashPoints.textContent = d.totalPoints;
    if (this.el.dashCompleted) this.el.dashCompleted.textContent = d.completedCount;

    // Daily Goal Ring
    const doneToday = this.store.getTodayCompletedCount();
    const target = d.dailyGoal || 3;
    const percent = Math.min(100, Math.round((doneToday / target) * 100));
    if (this.el.dashGoalBar) this.el.dashGoalBar.style.width = `${percent}%`;
    if (this.el.dashGoalLabel) this.el.dashGoalLabel.textContent = `${doneToday} of ${target} completed today (${percent}%)`;

    // 7-Day Weekly Chart
    const weekData = this.store.getWeeklyData();
    const totalWeek = weekData.reduce((acc, curr) => acc + curr.count, 0);
    if (this.el.dashWeekTotal) this.el.dashWeekTotal.textContent = `${totalWeek} total moves`;

    if (this.el.dashBars) {
      this.el.dashBars.innerHTML = "";
      const maxVal = Math.max(3, ...weekData.map(w => w.count));

      weekData.forEach(w => {
        const col = document.createElement("div");
        col.className = `graph-col ${w.isToday ? 'today' : ''}`;
        const heightPct = (w.count / maxVal) * 100;
        col.innerHTML = `
          <div class="graph-bar ${w.count === 0 ? 'empty' : ''}" style="height: ${Math.max(6, heightPct)}%;" title="${w.count} moves on ${w.name}"></div>
          <span class="graph-day-label">${w.name}</span>
        `;
        this.el.dashBars.appendChild(col);
      });
    }

    // History Log
    if (this.el.dashHistory) {
      this.el.dashHistory.innerHTML = "";
      if (d.history.length === 0) {
        this.el.dashHistory.innerHTML = `<div class="text-xs text-slate-500 text-center py-6">No completed moves recorded yet. Jump into reels!</div>`;
        return;
      }
      d.history.slice(0, 10).forEach(h => {
        const row = document.createElement("div");
        row.className = "flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5 text-xs";
        const dateObj = new Date(h.timestamp);
        const timeStr = dateObj.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        row.innerHTML = `
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-[10px]">✓</span>
            <div>
              <div class="font-bold text-white">${h.title}</div>
              <div class="text-slate-400 text-[10px]">${h.category} · ${timeStr}</div>
            </div>
          </div>
          <div class="text-right">
            <div class="font-bold text-emerald-400">+${h.points} pts</div>
            <div class="text-slate-500 text-[10px]">${h.calories} kcal</div>
          </div>
        `;
        this.el.dashHistory.appendChild(row);
      });
    }
  }

  /* ==========================================================================
     LIBRARY ENGINE (EXPLORER & SEARCH)
     ========================================================================== */
  renderLibrary() {
    const query = this.el.libSearch ? this.el.libSearch.value.trim().toLowerCase() : "";
    const activePill = document.querySelector(".filter-pill.active");
    const filter = activePill ? activePill.dataset.filter : "all";

    let list = EXERCISES_DATA;
    if (filter !== "all") {
      list = list.filter(e => e.filterTag === filter);
    }
    if (query) {
      list = list.filter(e => e.title.toLowerCase().includes(query) || e.muscles.toLowerCase().includes(query) || e.caption.toLowerCase().includes(query));
    }

    if (!this.el.libGrid) return;
    this.el.libGrid.innerHTML = "";

    if (list.length === 0) {
      this.el.libGrid.innerHTML = `<div class="col-span-full text-center py-8 text-xs text-slate-500">No exercises found matching your search.</div>`;
      return;
    }

    list.forEach(ex => {
      const card = document.createElement("div");
      card.className = "library-exercise-card";
      card.innerHTML = `
        <div class="flex items-center justify-between mb-3">
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            ${ex.category}
          </span>
          <span class="text-xs font-semibold text-slate-400">${ex.mode === 'timer' ? `${ex.duration}s` : `${ex.targetReps} reps`}</span>
        </div>
        <h3 class="font-heading font-extrabold text-base text-white mb-1">${ex.title}</h3>
        <p class="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">${ex.caption}</p>
        <div class="mt-auto pt-3 border-t border-white/10 flex items-center justify-between">
          <span class="text-[11px] font-semibold text-slate-500 truncate max-w-[130px]">${ex.muscles}</span>
          <button class="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-emerald-500 hover:text-slate-950 text-white font-bold text-xs transition-colors btn-play-in-reels" type="button" data-id="${ex.id}">
            Play Reel →
          </button>
        </div>
      `;

      card.querySelector(".btn-play-in-reels").addEventListener("click", () => {
        const fullIdx = EXERCISES_DATA.findIndex(e => e.id === ex.id);
        if (fullIdx > -1) {
          this.switchTab("reels");
          const targetSlide = document.getElementById(`reel-${fullIdx}`);
          if (targetSlide) targetSlide.scrollIntoView({ behavior: "smooth" });
        }
      });

      this.el.libGrid.appendChild(card);
    });

    // Bind Filter Pills once
    this.el.libFilterPills.forEach(pill => {
      pill.onclick = () => {
        this.el.libFilterPills.forEach(p => p.classList.remove("active", "bg-emerald-500", "text-slate-950"));
        pill.classList.add("active", "bg-emerald-500", "text-slate-950");
        this.renderLibrary();
      };
    });

    if (this.el.libSearch) {
      this.el.libSearch.oninput = () => this.renderLibrary();
    }
  }

  /* ==========================================================================
     DRAWER & TOAST HANDLERS
     ========================================================================== */
  openDrawer(ex) {
    this.el.drawerTitle.textContent = ex.title;
    this.el.drawerMuscles.textContent = ex.muscles;
    this.el.drawerSafety.textContent = ex.safety;

    this.el.drawerModifications.innerHTML = "";
    ex.modifications.forEach(mod => {
      const li = document.createElement("li");
      li.textContent = mod;
      this.el.drawerModifications.appendChild(li);
    });

    this.el.drawerBackdrop.classList.add("open");
    this.el.infoDrawer.classList.add("open");
  }

  closeDrawer() {
    this.el.drawerBackdrop.classList.remove("open");
    this.el.infoDrawer.classList.remove("open");
  }

  showToast(text) {
    if (!this.el.toast) return;
    this.el.toast.textContent = text;
    this.el.toast.classList.add("show");
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.el.toast.classList.remove("show");
    }, 2400);
  }

  bindGlobalShortcuts() {
    window.addEventListener("keydown", (e) => {
      if (e.code === "ArrowDown" || e.code === "PageDown") {
        if (!this.el.tabReels.classList.contains("hidden")) {
          e.preventDefault();
          this.scrollToNextReel();
        }
      } else if (e.code === "ArrowUp" || e.code === "PageUp") {
        if (!this.el.tabReels.classList.contains("hidden")) {
          e.preventDefault();
          this.scrollToPrevReel();
        }
      } else if (e.code === "Space") {
        if (!this.el.tabReels.classList.contains("hidden")) {
          e.preventDefault();
          const ex = EXERCISES_DATA[this.activeIndex];
          if (ex.mode === "timer") this.handlePlayClick(this.activeIndex);
          else this.countRep(ex, this.activeIndex);
        }
      } else if (e.key === "m" || e.key === "M") {
        this.toggleVoiceCoach();
      } else if (e.key === "Escape") {
        this.closeDrawer();
      }
    });
  }
}

// Global App Initialization
document.addEventListener("DOMContentLoaded", () => {
  window.fitFeed = new FitFeedApp();
});
