/**
 * ============================================================================
 * FitFeed — Instagram Reels Style Accessible Fitness App
 * Congressional App Challenge Project
 * Developed by: Naihrit & Team
 *
 * Core Architecture:
 * 1. Exercises Dataset (Low-Impact, Senior & High BMI Friendly)
 * 2. Reels Snap-Scroll & Viewport Active State Controller
 * 3. 3D Movement Avatar Engine (Three.js Kinematics)
 * 4. Interactive Action Rail (Timer Ring, Tap Reps, Hearts, Voice Coach)
 * 5. Bottom Sheet Drawers (Anatomy Modifications & Stats Dashboard)
 * 6. Floating Hearts & 3D Confetti Particle Engines
 * ============================================================================
 */

"use strict";

/* ==========================================================================
   1. EXERCISES DATABASE (Optimized for Gentle Reels Feed)
   ========================================================================== */

const REELS_EXERCISES = [
  {
    id: "seated-arm-swings",
    title: "Seated Arm Swings",
    category: "Seated Mobility",
    impactTag: "Zero Joint Impact",
    suitableFor: "Wheelchair, Seniors, High BMI",
    mode: "timer",
    duration: 30,
    met: 2.3,
    points: 50,
    audioTrack: "FitFeed Coach • Gentle 30s Rhythm",
    caption: "Keep shoulders relaxed down. Let gravity swing your arms smoothly without forcing height.",
    muscles: "Deltoids, Upper Trapezius & Rotator Cuff",
    modifications: [
      "Wheelchair: Lock wheels, keep elbows slightly bent to reduce lever strain.",
      "High BMI: Keep swings below chest level for comfortable shoulder clearance.",
      "Limited Mobility: Swing one arm at a time if dual motion is fatiguing."
    ],
    safety: "Never force past shoulder impingement. Stop immediately if pinching occurs.",
    animType: "arm_swing",
    likes: 142
  },
  {
    id: "chair-marches",
    title: "Seated Chair Marches",
    category: "Gentle Cardio",
    impactTag: "Zero Knee Pounding",
    suitableFor: "Knee Osteoarthritis, Seniors, High BMI",
    mode: "reps",
    targetReps: 16,
    met: 2.8,
    points: 60,
    audioTrack: "FitFeed Coach • Steady Cadence",
    caption: "Strengthens hip flexors and calf muscle pumps to promote blood circulation safely.",
    muscles: "Hip Flexors (Psoas), Quadriceps & Lower Core",
    modifications: [
      "Low Energy: Lift only heels off the floor while keeping ball of foot grounded.",
      "Heavy Legs: Lift knees just 1 to 2 inches off the chair to protect hip joints."
    ],
    safety: "Avoid stomping your feet downward. Control each landing softly.",
    animType: "march",
    likes: 218
  },
  {
    id: "seated-cat-cow",
    title: "Seated Cat-Cow Waves",
    category: "Spine & Posture",
    impactTag: "Zero Joint Impact",
    suitableFor: "Desk Workers, Lower Back Stiffness",
    mode: "timer",
    duration: 35,
    met: 2.2,
    points: 55,
    audioTrack: "FitFeed Coach • Deep Breath Flow",
    caption: "Decompresses the lumbar vertebrae. Inhale softly on forward arch, exhale on gentle curl.",
    muscles: "Erector Spinae, Latissimus & Diaphragm",
    modifications: [
      "High BMI: Position knees slightly wider for comfortable abdominal room.",
      "Osteoporosis: Keep movement small and fluid; avoid aggressive forward bending."
    ],
    safety: "Do not hyperextend the cervical neck. Keep eye gaze natural.",
    animType: "cat_cow",
    likes: 184
  },
  {
    id: "wall-push-ups",
    title: "Supported Wall Push-ups",
    category: "Supported Strength",
    impactTag: "Joint Friendly",
    suitableFor: "Difficulty Getting Off Floor, Beginners",
    mode: "reps",
    targetReps: 10,
    met: 3.2,
    points: 65,
    audioTrack: "FitFeed Coach • Gentle Power",
    caption: "Builds upper-body pushing strength without putting any pressure on your knees or floor strain.",
    muscles: "Pectoralis Major, Anterior Deltoids & Triceps",
    modifications: [
      "Beginners: Stand closer to the wall for lighter resistance.",
      "Wrist Tenderness: Place palms on a soft towel or make light closed fists."
    ],
    safety: "Ensure non-slip shoes and dry floor before leaning into the wall.",
    animType: "wall_push",
    likes: 305
  },
  {
    id: "ankle-circles",
    title: "Ankle Alphabet Swivels",
    category: "Mobility & Circulation",
    impactTag: "Zero Joint Impact",
    suitableFor: "Edema Relief, Neuropathy, Seniors",
    mode: "timer",
    duration: 30,
    met: 2.0,
    points: 45,
    audioTrack: "FitFeed Coach • Joint Lubrication",
    caption: "Slow deliberate circles with your toes help activate calf muscle venous pumps.",
    muscles: "Gastrocnemius, Soleus & Peroneals",
    modifications: [
      "Supported: Rest your heel on the floor and swivel toes left and right.",
      "Seated: Can be done reclined with legs elevated."
    ],
    safety: "If a calf cramp occurs, gently pull your toes toward your shin.",
    animType: "ankle_circle",
    likes: 96
  },
  {
    id: "seated-torso-twist",
    title: "Gentle Torso Twist",
    category: "Spine & Posture",
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
    category: "Mobility",
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
    category: "Mindful Reset",
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
  }
];

/* ==========================================================================
   2. APP STATE & LOCAL-FIRST STORAGE
   ========================================================================== */

class ReelsState {
  constructor() {
    this.KEY = "fitfeed_reels_cac_v2";
    this.data = this.load();
  }

  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.warn("Storage warning:", e);
    }
    return {
      completedCount: 0,
      totalCalories: 0,
      totalPoints: 0,
      streak: 1,
      lastDate: new Date().toISOString().slice(0, 10),
      likedIds: [],
      voiceCoach: true,
      soundMuted: false,
      history: []
    };
  }

  save() {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(this.data));
    } catch (e) {
      console.warn("Storage save error:", e);
    }
  }

  recordSession(exercise, durationSecs) {
    const today = new Date().toISOString().slice(0, 10);
    const durationMins = durationSecs / 60;
    const calories = Math.round((exercise.met * 3.5 * 80 / 200) * durationMins * 10) / 10;

    this.data.completedCount++;
    this.data.totalCalories = Math.round((this.data.totalCalories + calories) * 10) / 10;
    this.data.totalPoints += exercise.points;

    if (this.data.lastDate !== today) {
      this.data.streak++;
      this.data.lastDate = today;
    }

    this.data.history.unshift({
      title: exercise.title,
      category: exercise.category,
      calories,
      points: exercise.points,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    });

    if (this.data.history.length > 50) this.data.history = this.data.history.slice(0, 50);
    this.save();
    return { calories, points: exercise.points };
  }

  toggleLike(id) {
    const idx = this.data.likedIds.indexOf(id);
    if (idx > -1) {
      this.data.likedIds.splice(idx, 1);
    } else {
      this.data.likedIds.push(id);
    }
    this.save();
    return idx === -1; // true if liked now
  }
}

/* ==========================================================================
   3. VOICE COACH AUDIO SYNTHESIZER
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
      const english = voices.find(v => v.lang.startsWith("en") && (v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("Samantha")));
      if (english) utt.voice = english;
      this.synth.speak(utt);
    } catch (e) {
      console.warn("Speech synthesis error:", e);
    }
  }

  start(title) {
    this.speak(`Ready? Starting ${title}. Breathe easily and move at your own comfort.`);
  }

  halfway() {
    this.speak("Halfway through! You are doing wonderful.");
  }

  done(points) {
    this.speak(`Awesome job! You earned ${points} FitPoints.`);
  }
}

/* ==========================================================================
   4. THREE.JS 3D MOVEMENT AVATAR ENGINE
   ========================================================================== */

class ThreeReelAvatar {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.avatar = null;
    this.chair = null;
    this.animType = "arm_swing";
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

      // Modern Studio Lights
      const ambient = new THREE.AmbientLight(0xffffff, 0.8);
      this.scene.add(ambient);

      const keyLight = new THREE.DirectionalLight(0x10b981, 1.4);
      keyLight.position.set(2, 5, 3);
      this.scene.add(keyLight);

      const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.9);
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

    // Matte Porcelain & Emerald Styling
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.3, metalness: 0.1 });
    const jointMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.4 });
    const chairMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.6 });

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
      this.chair.visible = animType !== "wall_push";
    }
  }

  animate() {
    if (!this.isReady) return;
    requestAnimationFrame(() => this.animate());

    const t = this.clock.getElapsedTime();

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
   5. 3D CONFETTI CELEBRATION ENGINE
   ========================================================================== */

class ConfettiEngine {
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
    const colors = ["#10b981", "#38bdf8", "#f59e0b", "#ec4899", "#8b5cf6", "#ffffff"];
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
        tilt: Math.random() * 10,
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
   6. MAIN REELS FEED CONTROLLER
   ========================================================================== */

class FitFeedReelsApp {
  constructor() {
    this.state = new ReelsState();
    this.voice = new VoiceCoach();
    this.confetti = null;
    this.avatar = null;

    // Active Reel Tracking
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
    this.renderStoryProgressBar();
    this.renderReels();
    this.bindGlobalEvents();
    this.initObserver();
    this.updateStatsDisplay();

    // Init Confetti
    const confCanvas = document.getElementById("confetti-canvas");
    if (confCanvas) this.confetti = new ConfettiEngine(confCanvas);

    // Init Three Avatar on First Reel
    const firstCanvas = document.querySelector(".reel-canvas-stage canvas");
    if (firstCanvas) {
      this.avatar = new ThreeReelAvatar(firstCanvas);
    }
  }

  cacheElements() {
    this.el = {
      feed: document.getElementById("reels-feed"),
      storyProgress: document.getElementById("story-progress-bar"),
      infoSheet: document.getElementById("info-sheet"),
      statsSheet: document.getElementById("stats-sheet"),
      sheetBackdrop: document.getElementById("sheet-backdrop"),
      toast: document.getElementById("reel-toast"),
      btnUp: document.getElementById("btn-desktop-up"),
      btnDown: document.getElementById("btn-desktop-down"),
      streakPill: document.getElementById("streak-badge-count")
    };
  }

  renderStoryProgressBar() {
    this.el.storyProgress.innerHTML = "";
    REELS_EXERCISES.forEach((_, idx) => {
      const seg = document.createElement("div");
      seg.className = `story-progress-segment ${idx < this.activeIndex ? 'completed' : ''}`;
      seg.innerHTML = `<div class="story-progress-segment-fill" id="story-fill-${idx}"></div>`;
      this.el.storyProgress.appendChild(seg);
    });
  }

  renderReels() {
    this.el.feed.innerHTML = "";
    REELS_EXERCISES.forEach((ex, idx) => {
      const isLiked = this.state.data.likedIds.includes(ex.id);
      const slide = document.createElement("article");
      slide.className = "reel-slide";
      slide.id = `reel-${idx}`;
      slide.dataset.index = idx;

      slide.innerHTML = `
        <!-- Background 3D Movement Canvas -->
        <div class="reel-canvas-stage">
          <canvas id="canvas-reel-${idx}"></canvas>
        </div>

        <div class="reel-gradient-top"></div>
        <div class="reel-gradient-bottom"></div>

        <!-- Right Side Action Rail -->
        <aside class="reel-action-rail" aria-label="Exercise Actions">
          
          <!-- Play / Timer Countdown Button -->
          <div class="reel-action-btn-wrap">
            <button class="reel-action-btn reel-play-btn" id="btn-play-${idx}" type="button" aria-label="Start or pause exercise">
              <svg class="play-btn-timer-ring" viewBox="0 0 60 60">
                <circle id="timer-ring-${idx}" cx="30" cy="30" r="28"></circle>
              </svg>
              <svg id="play-icon-${idx}" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </button>
            <span class="reel-action-label" id="timer-label-${idx}">${ex.mode === 'timer' ? `${ex.duration}s` : 'Reps'}</span>
          </div>

          <!-- Like / Heart Button -->
          <div class="reel-action-btn-wrap">
            <button class="reel-action-btn ${isLiked ? 'is-liked' : ''}" id="btn-like-${idx}" type="button" aria-label="Save to favorites">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="${isLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </button>
            <span class="reel-action-label" id="like-count-${idx}">${ex.likes + (isLiked ? 1 : 0)}</span>
          </div>

          <!-- Rep Stepper Tap Button (for Rep exercises) -->
          ${ex.mode === 'reps' ? `
          <div class="reel-action-btn-wrap">
            <button class="reel-action-btn" id="btn-rep-${idx}" type="button" aria-label="Count a repetition">
              <span class="text-xs font-extrabold text-emerald-400">＋1</span>
            </button>
            <span class="reel-action-label" id="rep-rail-label-${idx}">0/${ex.targetReps}</span>
          </div>` : ''}

          <!-- Info Sheet (Anatomy & Adaptations) -->
          <div class="reel-action-btn-wrap">
            <button class="reel-action-btn" id="btn-info-${idx}" type="button" aria-label="Open anatomy and accommodations">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
            </button>
            <span class="reel-action-label">Info</span>
          </div>

          <!-- Sound / Voice Coach Toggle -->
          <div class="reel-action-btn-wrap">
            <button class="reel-action-btn" id="btn-sound-${idx}" type="button" aria-label="Toggle voice guidance">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
              </svg>
            </button>
            <span class="reel-action-label">Voice</span>
          </div>
        </aside>

        <!-- Bottom Overlay: Title, Caption & HUD -->
        <div class="reel-bottom-overlay">
          <div class="reel-badge-pill">
            <span>●</span> ${ex.category} · ${ex.impactTag}
          </div>

          <h2 class="reel-title-h1">
            <span>${ex.title}</span>
            <span class="reel-verified-badge" title="Medically safe exercise for seniors and high BMI">
              <svg class="w-4 h-4 fill-sky-400" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </span>
          </h2>

          <p class="reel-caption-text">${ex.caption}</p>

          <!-- Audio Waveform / Ticker -->
          <div class="reel-audio-ticker">
            <div class="reel-audio-disc"></div>
            <span>${ex.audioTrack}</span>
          </div>

          <!-- Live Timer / Rep Pill -->
          <div class="reel-hud-pill" id="hud-pill-${idx}">
            <span id="hud-icon-${idx}">⏱</span>
            <span id="hud-text-${idx}">${ex.mode === 'timer' ? `Ready • ${ex.duration}s timer` : `Ready • Tap ＋1 to count`}</span>
          </div>
        </div>
      `;

      // Bind Individual Slide Actions
      this.bindSlideEvents(slide, ex, idx);
      this.el.feed.appendChild(slide);
    });
  }

  bindSlideEvents(slide, ex, idx) {
    const btnPlay = slide.querySelector(`#btn-play-${idx}`);
    btnPlay.addEventListener("click", () => this.handlePlayClick(idx));

    const btnLike = slide.querySelector(`#btn-like-${idx}`);
    btnLike.addEventListener("click", () => this.handleLikeClick(ex, idx));

    const btnInfo = slide.querySelector(`#btn-info-${idx}`);
    btnInfo.addEventListener("click", () => this.openInfoSheet(ex));

    const btnSound = slide.querySelector(`#btn-sound-${idx}`);
    btnSound.addEventListener("click", () => this.toggleVoiceCoach());

    const btnRep = slide.querySelector(`#btn-rep-${idx}`);
    if (btnRep) {
      btnRep.addEventListener("click", () => this.countRep(ex, idx));
    }
  }

  /* ==========================================================================
     INTERSECTION OBSERVER (REEL DETECTOR)
     ========================================================================== */
  initObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newIndex = parseInt(entry.target.dataset.index, 10);
          if (newIndex !== this.activeIndex) {
            this.switchActiveReel(newIndex);
          }
        }
      });
    }, {
      root: this.el.feed,
      threshold: 0.65
    });

    document.querySelectorAll(".reel-slide").forEach((slide) => {
      observer.observe(slide);
    });
  }

  switchActiveReel(index) {
    this.pauseTimer();
    this.activeIndex = index;
    const ex = REELS_EXERCISES[index];

    // Update Story Segment Bars
    this.updateStorySegments();

    // Update 3D Avatar Animation
    if (this.avatar) {
      const activeCanvas = document.querySelector(`#canvas-reel-${index}`);
      if (activeCanvas && this.avatar.canvas !== activeCanvas) {
        this.avatar = new ThreeReelAvatar(activeCanvas);
      }
      this.avatar.setAnimation(ex.animType);
    }

    // Reset local rep counter
    this.currentReps = 0;
    this.showToast(`Swiped to: ${ex.title}`);
  }

  updateStorySegments() {
    REELS_EXERCISES.forEach((_, i) => {
      const seg = this.el.storyProgress.children[i];
      if (seg) {
        seg.classList.toggle("completed", i < this.activeIndex);
        const fill = seg.querySelector(".story-progress-segment-fill");
        if (fill) fill.style.width = i < this.activeIndex ? "100%" : (i === this.activeIndex ? "0%" : "0%");
      }
    });
  }

  /* ==========================================================================
     TIMER ENGINE
     ========================================================================== */
  handlePlayClick(index) {
    if (this.timerRunning) {
      this.pauseTimer();
    } else {
      this.startTimer(index);
    }
  }

  startTimer(index) {
    const ex = REELS_EXERCISES[index];
    if (ex.mode !== "timer") return;

    this.timerRunning = true;
    this.timerTotal = ex.duration;
    this.timerSeconds = ex.duration;

    const playIcon = document.getElementById(`play-icon-${index}`);
    if (playIcon) playIcon.innerHTML = `<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>`;

    const hudText = document.getElementById(`hud-text-${index}`);
    if (hudText) hudText.textContent = `In Progress: ${this.timerSeconds}s remaining`;

    this.voice.start(ex.title);

    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timerSeconds--;
      if (hudText) hudText.textContent = `Moving: ${this.timerSeconds}s remaining`;

      // Update Play Button Circular Ring
      const ring = document.getElementById(`timer-ring-${index}`);
      if (ring) {
        const circumference = 2 * Math.PI * 28;
        const offset = circumference * (1 - this.timerSeconds / this.timerTotal);
        ring.style.strokeDashoffset = `${offset}`;
      }

      // Update Story Segment Bar Fill
      const storyFill = document.getElementById(`story-fill-${index}`);
      if (storyFill) {
        storyFill.style.width = `${((this.timerTotal - this.timerSeconds) / this.timerTotal) * 100}%`;
      }

      if (this.timerSeconds === Math.floor(this.timerTotal / 2)) {
        this.voice.halfway();
      }

      if (this.timerSeconds <= 0) {
        this.finishReel(ex, index);
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
    if (hudText) hudText.textContent = `Reps: ${this.currentReps} of ${ex.targetReps} completed`;

    // Floating +1 pop indicator
    this.showToast(`＋1 Rep (${this.currentReps}/${ex.targetReps})`);

    if (this.currentReps >= ex.targetReps) {
      this.finishReel(ex, index);
    }
  }

  finishReel(ex, index) {
    this.pauseTimer();
    const duration = ex.mode === "timer" ? ex.duration : 45;
    const res = this.state.recordSession(ex, duration);

    // 3D Confetti Explosion
    if (this.confetti) this.confetti.burst();

    // Voice Celebration
    this.voice.done(res.points);

    // UI Toast
    this.showToast(`🎉 Reel Completed! +${res.points} pts | ${res.calories} kcal`);
    this.updateStatsDisplay();

    // Mark Story Segment Completed
    const seg = this.el.storyProgress.children[index];
    if (seg) seg.classList.add("completed");

    // Auto Advance to Next Reel after brief celebration
    setTimeout(() => {
      this.scrollToNext();
    }, 1800);
  }

  /* ==========================================================================
     DRAWER SHEETS & ACTIONS
     ========================================================================== */
  openInfoSheet(ex) {
    document.getElementById("sheet-ex-title").textContent = ex.title;
    document.getElementById("sheet-muscles").textContent = ex.muscles;
    document.getElementById("sheet-safety").textContent = ex.safety;

    const list = document.getElementById("sheet-modifications");
    list.innerHTML = "";
    ex.modifications.forEach(mod => {
      const li = document.createElement("li");
      li.textContent = mod;
      list.appendChild(li);
    });

    this.el.sheetBackdrop.classList.add("open");
    this.el.infoSheet.classList.add("open");
  }

  openStatsSheet() {
    this.updateStatsDisplay();
    this.el.sheetBackdrop.classList.add("open");
    this.el.statsSheet.classList.add("open");
  }

  closeAllSheets() {
    this.el.sheetBackdrop.classList.remove("open");
    this.el.infoSheet.classList.remove("open");
    this.el.statsSheet.classList.remove("open");
  }

  updateStatsDisplay() {
    document.getElementById("stats-total-reels").textContent = this.state.data.completedCount;
    document.getElementById("stats-total-calories").textContent = `${this.state.data.totalCalories} kcal`;
    document.getElementById("stats-total-points").textContent = this.state.data.totalPoints;
    document.getElementById("stats-streak").textContent = `${this.state.data.streak} Days`;
    if (this.el.streakPill) this.el.streakPill.textContent = `${this.state.data.streak} Day Streak`;

    const historyBox = document.getElementById("stats-history-list");
    if (!historyBox) return;
    historyBox.innerHTML = "";
    if (this.state.data.history.length === 0) {
      historyBox.innerHTML = `<div class="text-sm text-slate-400 text-center py-4">No exercises finished yet today. Start your first reel!</div>`;
      return;
    }
    this.state.data.history.slice(0, 6).forEach(h => {
      const div = document.createElement("div");
      div.className = "flex items-center justify-between p-2 rounded-xl bg-slate-800 text-xs";
      div.innerHTML = `
        <div>
          <div class="font-bold text-white">${h.title}</div>
          <div class="text-slate-400">${h.time} · ${h.category}</div>
        </div>
        <div class="text-right">
          <div class="font-bold text-emerald-400">+${h.points} pts</div>
          <div class="text-slate-400">${h.calories} kcal</div>
        </div>
      `;
      historyBox.appendChild(div);
    });
  }

  handleLikeClick(ex, idx) {
    const isNowLiked = this.state.toggleLike(ex.id);
    const btn = document.getElementById(`btn-like-${idx}`);
    const count = document.getElementById(`like-count-${idx}`);
    btn.classList.toggle("is-liked", isNowLiked);
    count.textContent = ex.likes + (isNowLiked ? 1 : 0);
    this.showToast(isNowLiked ? "Added to saved favorites ♥" : "Removed from favorites");
  }

  toggleVoiceCoach() {
    this.state.data.voiceCoach = !this.state.data.voiceCoach;
    this.state.save();
    this.voice.enabled = this.state.data.voiceCoach;
    this.showToast(this.voice.enabled ? "Voice coach audio ON" : "Voice coach MUTED");
  }

  scrollToNext() {
    if (this.activeIndex < REELS_EXERCISES.length - 1) {
      const nextSlide = document.getElementById(`reel-${this.activeIndex + 1}`);
      if (nextSlide) nextSlide.scrollIntoView({ behavior: "smooth" });
    }
  }

  scrollToPrev() {
    if (this.activeIndex > 0) {
      const prevSlide = document.getElementById(`reel-${this.activeIndex - 1}`);
      if (prevSlide) prevSlide.scrollIntoView({ behavior: "smooth" });
    }
  }

  bindGlobalEvents() {
    // Backdrop Sheet Close
    this.el.sheetBackdrop.addEventListener("click", () => this.closeAllSheets());

    // Desktop Floater Buttons
    if (this.el.btnUp) this.el.btnUp.addEventListener("click", () => this.scrollToPrev());
    if (this.el.btnDown) this.el.btnDown.addEventListener("click", () => this.scrollToNext());

    // Stats Button in Header
    document.getElementById("btn-open-stats").addEventListener("click", () => this.openStatsSheet());

    // Keyboard Shortcuts (ArrowDown / ArrowUp for Reels Navigation)
    window.addEventListener("keydown", (e) => {
      if (e.code === "ArrowDown" || e.code === "PageDown") {
        e.preventDefault();
        this.scrollToNext();
      } else if (e.code === "ArrowUp" || e.code === "PageUp") {
        e.preventDefault();
        this.scrollToPrev();
      } else if (e.code === "Space") {
        e.preventDefault();
        const ex = REELS_EXERCISES[this.activeIndex];
        if (ex.mode === "timer") this.handlePlayClick(this.activeIndex);
        else this.countRep(ex, this.activeIndex);
      } else if (e.key === "m" || e.key === "M") {
        this.toggleVoiceCoach();
      } else if (e.key === "i" || e.key === "I") {
        const ex = REELS_EXERCISES[this.activeIndex];
        this.openInfoSheet(ex);
      } else if (e.key === "Escape") {
        this.closeAllSheets();
      }
    });
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
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  window.fitFeed = new FitFeedReelsApp();
});
