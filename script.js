/**
 * ============================================================================
 * FitFeed — Accessible Low-Impact Fitness Web Application
 * Congressional App Challenge Project
 * Developed by: Naihrit & Team
 *
 * Architecture:
 * 1. Exercises Database (Specialized for Beginners, Seniors, High BMI)
 * 2. Three.js 3D Human Movement Avatar & Canvas Fallback
 * 3. 3D Card Physics, Tilt & Swipe Gesture Engine
 * 4. Interactive Countdown Timer & Tap Rep Counter
 * 5. Web Speech API Voice Coach
 * 6. Calorie & FitPoints Gamification System
 * 7. 3D Confetti Celebration Particle Engine
 * 8. Accessibility Engine (High Contrast, Jumbo Text, Screen-Reader Live Regions)
 * ============================================================================
 */

"use strict";

/* ==========================================================================
   1. EXERCISES DATABASE (Tailored for Seniors, High BMI & Limited Mobility)
   ========================================================================== */

const EXERCISES_DATA = [
  {
    id: "seated-arm-swings",
    title: "Seated Arm Swings",
    tagline: "Relieves shoulder stiffness and stimulates upper-body circulation.",
    category: "Seated Only",
    badgeClass: "badge-seated",
    mode: "timer",
    duration: 30,
    met: 2.3, // Metabolic Equivalent of Task for gentle seated activity
    points: 50,
    targetMuscles: "Deltoids, Upper Trapezius & Pectorals",
    impactLevel: "Zero Joint Impact",
    suitableFor: "Wheelchair accessible, seniors, high BMI, arthritis relief",
    instructions: [
      "Sit tall in a sturdy chair with your feet flat on the floor.",
      "Let both arms hang relaxed at your sides.",
      "Gently swing both arms forward to shoulder height, then allow them to softly swing back.",
      "Maintain a smooth, rhythmic cadence without forcing the range."
    ],
    modifications: [
      "Wheelchair Users: Perform from any seated wheelchair with footrests engaged.",
      "High BMI / Joint Pain: Keep arm swings low (below chest level) to minimize shoulder load.",
      "Limited Range: Move one arm at a time if dual-arm movement feels fatiguing."
    ],
    safetyNote: "Never strain through shoulder pain; stop if you feel pinching or numbness.",
    animType: "arm_swing"
  },
  {
    id: "seated-cat-cow",
    title: "Seated Cat-Cow Waves",
    tagline: "Decompresses the lumbar spine and eases prolonged sitting stiffness.",
    category: "Spine & Posture",
    badgeClass: "badge-seated",
    mode: "timer",
    duration: 35,
    met: 2.2,
    points: 55,
    targetMuscles: "Erector Spinae, Latissimus & Abdominal Wall",
    impactLevel: "Zero Joint Impact",
    suitableFor: "Lower back tension, desk workers, postural restoration",
    instructions: [
      "Rest both hands gently on your thighs, feet planted hip-width apart.",
      "Inhale slowly, roll your shoulders back, and lift your chest forward (Cow pose).",
      "Exhale softly, round your upper back, and tilt your chin gently toward your chest (Cat pose).",
      "Flow between the two postures smoothly in sync with your breath."
    ],
    modifications: [
      "High BMI: Position your knees wider apart for comfortable abdominal clearance.",
      "Spinal Fusion / Osteoporosis: Keep movements small without forcing deep flexion."
    ],
    safetyNote: "Move only through a pain-free range. Avoid sudden jerky snaps in the neck.",
    animType: "cat_cow"
  },
  {
    id: "chair-marches",
    title: "Seated Chair Marches",
    tagline: "Builds hip flexor strength and venous blood return with zero knee pounding.",
    category: "Seated Only",
    badgeClass: "badge-seated",
    mode: "reps",
    target: 16,
    met: 2.8,
    points: 60,
    targetMuscles: "Iliopsoas, Quadriceps & Lower Abdominals",
    impactLevel: "Zero Knee/Ankle Pounding",
    suitableFor: "Cardio for high BMI, knee osteoarthritis, rehabilitation",
    instructions: [
      "Sit toward the front edge of your chair with a straight, supported spine.",
      "Hold the chair frame lightly with your hands for stability.",
      "Lift your right knee comfortably upward, then lower it softly to the floor.",
      "Repeat with your left knee, alternating in a steady, gentle walking rhythm."
    ],
    modifications: [
      "Low Energy: Lift your heels only while keeping toes grounded on the floor.",
      "Heavy Legs: Lift only 1 to 2 inches off the floor to protect hip joints."
    ],
    safetyNote: "Avoid stomping your feet down. Lower each foot gently to protect joints.",
    animType: "march"
  },
  {
    id: "wall-push-ups",
    title: "Supported Wall Push-ups",
    tagline: "Builds upper-body pushing power without floor strain or wrist compression.",
    category: "Supported Standing",
    badgeClass: "badge-standing",
    mode: "reps",
    target: 10,
    met: 3.2,
    points: 65,
    targetMuscles: "Pectorals, Anterior Deltoids & Triceps",
    impactLevel: "Low Impact - Wall Supported",
    suitableFor: "Difficulty getting on/off floor, gentle strength building",
    instructions: [
      "Stand facing an empty wall, roughly arm's length away.",
      "Place palms flat on the wall at shoulder height and shoulder-width apart.",
      "Keeping your body aligned from heels to head, bend your elbows and lean in.",
      "Press through your palms to gently return to the starting position."
    ],
    modifications: [
      "Beginners: Stand closer to the wall to minimize resistance.",
      "Wrist Discomfort: Use soft closed fists or place palms on a rolled towel."
    ],
    safetyNote: "Wear non-slip footwear and ensure the floor is dry before starting.",
    animType: "wall_push"
  },
  {
    id: "ankle-circles",
    title: "Seated Ankle Circles & Alphabet",
    tagline: "Stimulates calf muscle pumps to prevent swelling and improve balance.",
    category: "Seated Only",
    badgeClass: "badge-seated",
    mode: "timer",
    duration: 30,
    met: 2.0,
    points: 45,
    targetMuscles: "Gastrocnemius, Soleus & Tibialis Anterior",
    impactLevel: "Zero Joint Impact",
    suitableFor: "Edema prevention, neuropathy care, seniors, airplane travel",
    instructions: [
      "Sit comfortably and extend your right leg slightly forward.",
      "Draw slow, wide circles in the air with your big toe clockwise for 15s.",
      "Switch direction counter-clockwise for 15s.",
      "Repeat the sequence with your left foot."
    ],
    modifications: [
      "Resting Foot: Keep your heel on the floor and swivel toes left and right.",
      "Alphabet Fun: Trace capital letters (A, B, C) in the air with your toes."
    ],
    safetyNote: "If you experience sharp cramping, pause and gently flex your toes toward you.",
    animType: "ankle_circle"
  },
  {
    id: "seated-torso-twist",
    title: "Seated Gentle Torso Twist",
    tagline: "Restores ribcage mobility and digestive comfort with gentle rotation.",
    category: "Spine & Posture",
    badgeClass: "badge-seated",
    mode: "timer",
    duration: 30,
    met: 2.2,
    points: 50,
    targetMuscles: "Internal & External Obliques, Mid-Thoracic Spine",
    impactLevel: "Zero Joint Impact",
    suitableFor: "Stiff mid-back, digestive stimulation, seniors",
    instructions: [
      "Sit tall with your feet flat and firmly grounded on the floor.",
      "Cross your right hand across your body to rest on your left outer thigh.",
      "Gently rotate your torso to the left, gazing softly over your left shoulder.",
      "Hold for 3 calm breaths, return to center, and repeat on the right side."
    ],
    modifications: [
      "Limited Spinal Flexibility: Keep rotation under 20 degrees; focus on tall posture.",
      "Chair Arms: Hold onto the chair armrest to gently support the stretch."
    ],
    safetyNote: "Never torque or twist with momentum. Move only with slow, deliberate breathing.",
    animType: "torso_twist"
  },
  {
    id: "seated-knee-extensions",
    title: "Seated Gentle Knee Extensions",
    tagline: "Strengthens thigh quadriceps to stabilize knees and assist standing.",
    category: "Seated Only",
    badgeClass: "badge-seated",
    mode: "reps",
    target: 12,
    met: 2.4,
    points: 55,
    targetMuscles: "Quadriceps & Patellar Tendon Support",
    impactLevel: "Zero Impact",
    suitableFor: "Knee osteoarthritis, sit-to-stand strength, seniors",
    instructions: [
      "Sit back firmly in your chair with thighs fully supported.",
      "Slowly straighten your right leg forward until comfortable.",
      "Hold for 1 count at the top, feeling your thigh muscle engage.",
      "Lower under control and alternate with your left leg."
    ],
    modifications: [
      "Knee Pain: Extend the leg only halfway without locking the knee joint.",
      "Beginners: Place a cushion under your knees for added comfort."
    ],
    safetyNote: "Do not lock or hyperextend the knee joint at full extension.",
    animType: "knee_ext"
  },
  {
    id: "seated-side-reach",
    title: "Seated Side Reach & Lengthen",
    tagline: "Opens up intercostal rib muscles for deeper breaths and lateral mobility.",
    category: "Spine & Posture",
    badgeClass: "badge-seated",
    mode: "reps",
    target: 8,
    met: 2.3,
    points: 50,
    targetMuscles: "Latissimus, Quadratus Lumborum & Intercostals",
    impactLevel: "Zero Joint Impact",
    suitableFor: "Shallow breathing, side torso tightness, wheelchair users",
    instructions: [
      "Anchor both hips firmly and evenly into the chair seat.",
      "Raise your right arm overhead (or to shoulder height if comfortable).",
      "Gently curve your torso toward the left, opening the right side ribs.",
      "Return to center and switch to the left arm."
    ],
    modifications: [
      "Shoulder Pain: Keep your hand on your shoulder rather than reaching overhead.",
      "Balance Support: Keep your non-reaching hand firmly gripping the chair seat."
    ],
    safetyNote: "Keep both sit bones anchored to the chair; avoid leaning so far that you tip.",
    animType: "side_reach"
  },
  {
    id: "box-breathing",
    title: "4-4-4-4 Box Breathing Reset",
    tagline: "Clinically proven nervous system downregulator that lowers heart rate.",
    category: "Breath & Rest",
    badgeClass: "badge-breath",
    mode: "timer",
    duration: 48,
    met: 1.5,
    points: 40,
    targetMuscles: "Diaphragm & Vagus Nerve Stimulation",
    impactLevel: "Restorative",
    suitableFor: "Anxiety reduction, blood pressure management, cool-down",
    instructions: [
      "Inhale slowly through your nose for a count of 4 seconds.",
      "Hold your breath gently for a count of 4 seconds.",
      "Exhale softly through your mouth for a count of 4 seconds.",
      "Hold empty for 4 seconds before beginning the next cycle."
    ],
    modifications: [
      "Shortness of Breath: Shorten counts to 3-3-3-3 if 4 seconds feels too long.",
      "Hypertension / COPD: Skip the breath hold and simply inhale 4, exhale 6."
    ],
    safetyNote: "Breathe naturally without straining. If you feel lightheaded, resume normal breathing.",
    animType: "breath"
  },
  {
    id: "shoulder-blade-pinch",
    title: "Seated Posture Blade Squeeze",
    tagline: "Corrects forward-slumped desk posture by activating upper-back retractors.",
    category: "Spine & Posture",
    badgeClass: "badge-seated",
    mode: "reps",
    target: 10,
    met: 2.1,
    points: 50,
    targetMuscles: "Rhomboids, Mid-Trapezius & Infraspinatus",
    impactLevel: "Zero Joint Impact",
    suitableFor: "Rounded shoulders, neck tension, desk fatigue",
    instructions: [
      "Sit tall with elbows bent at 90 degrees by your sides like a goalpost.",
      "Gently pull your elbows and shoulder blades backward as if pinching a pencil.",
      "Hold the gentle squeeze for 2 seconds while breathing out.",
      "Release smoothly back to starting position."
    ],
    modifications: [
      "Tight Shoulders: Keep elbows lower by your ribcage instead of up at shoulder height.",
      "Seated: Can be performed supported against a chair backrest."
    ],
    safetyNote: "Keep your neck relaxed; do not shrug your shoulders up into your ears.",
    animType: "posture_squeeze"
  }
];

/* ==========================================================================
   2. APP STATE & PERSISTENCE ENGINE
   ========================================================================== */

class AppState {
  constructor() {
    this.STORAGE_KEY = "fitfeed_cac_state_v1";
    this.data = this.load();
  }

  getDefaults() {
    return {
      totalCompleted: 0,
      totalCalories: 0,
      totalPoints: 0,
      streak: 0,
      lastActiveDate: null,
      history: [],
      favorites: [],
      settings: {
        theme: "light",
        highContrast: false,
        jumboText: false,
        reducedMotion: false,
        seatedOnly: false,
        voiceCoach: true,
        speechSpeed: 1.0,
        userWeightKg: 85 // Average baseline for calorie calculation
      }
    };
  }

  load() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) {
        return { ...this.getDefaults(), ...JSON.parse(raw) };
      }
    } catch (e) {
      console.warn("Storage load warning:", e);
    }
    return this.getDefaults();
  }

  save() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.warn("Storage save warning:", e);
    }
  }

  recordCompletion(exercise, durationSecs) {
    const today = this.getTodayStr();
    
    // Calorie calculation: Calories = MET * 3.5 * weightKg / 200 * durationMins
    const durationMins = durationSecs / 60;
    const caloriesBurned = Math.round((exercise.met * 3.5 * this.data.settings.userWeightKg / 200) * durationMins * 10) / 10;
    
    this.data.totalCompleted++;
    this.data.totalCalories = Math.round((this.data.totalCalories + caloriesBurned) * 10) / 10;
    this.data.totalPoints += exercise.points;

    // Streak Calculation
    if (this.data.lastActiveDate !== today) {
      const yesterday = this.getYesterdayStr();
      if (this.data.lastActiveDate === yesterday) {
        this.data.streak++;
      } else if (!this.data.lastActiveDate) {
        this.data.streak = 1;
      } else {
        this.data.streak = 1;
      }
      this.data.lastActiveDate = today;
    }

    // Append to History Log
    this.data.history.unshift({
      id: Date.now().toString(),
      exerciseId: exercise.id,
      title: exercise.title,
      category: exercise.category,
      durationSecs,
      calories: caloriesBurned,
      points: exercise.points,
      timestamp: new Date().toISOString()
    });

    if (this.data.history.length > 100) {
      this.data.history = this.data.history.slice(0, 100);
    }

    this.save();
    return { caloriesBurned, points: exercise.points };
  }

  getTodayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  getYesterdayStr() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  getTodayCount() {
    const today = this.getTodayStr();
    return this.data.history.filter(item => item.timestamp.startsWith(today)).length;
  }
}

/* ==========================================================================
   3. THREE.JS 3D MOVEMENT AVATAR ENGINE
   ========================================================================== */

class Avatar3DEngine {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.avatar = null;
    this.chair = null;
    this.animType = "arm_swing";
    this.clock = null;
    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    this.autoRotate = true;
    this.isThreeAvailable = typeof THREE !== "undefined";

    if (this.isThreeAvailable) {
      this.initThree();
    } else {
      this.initCanvasFallback();
    }
  }

  initThree() {
    try {
      const width = this.canvas.clientWidth || 360;
      const height = this.canvas.clientHeight || 280;

      // Scene & Camera
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      this.camera.position.set(0, 1.4, 3.8);

      // Renderer
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        alpha: true,
        antialias: true
      });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
      this.scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(0x059669, 1.2);
      dirLight.position.set(3, 6, 4);
      this.scene.add(dirLight);

      const fillLight = new THREE.DirectionalLight(0x0284c7, 0.6);
      fillLight.position.set(-3, 2, -2);
      this.scene.add(fillLight);

      // Ground Shadow Plane
      const shadowGeo = new THREE.CircleGeometry(1.2, 32);
      const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.1 });
      const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
      shadowMesh.rotation.x = -Math.PI / 2;
      shadowMesh.position.y = -0.05;
      this.scene.add(shadowMesh);

      // Build 3D Humanoid Model
      this.buildHumanoidModel();

      // Clock & Render Loop
      this.clock = new THREE.Clock();
      this.bindMouseControls();
      this.animate();

      window.addEventListener("resize", () => this.onResize());
    } catch (e) {
      console.warn("WebGL initialization failed, falling back to 2D Canvas:", e);
      this.isThreeAvailable = false;
      this.initCanvasFallback();
    }
  }

  buildHumanoidModel() {
    this.avatar = new THREE.Group();

    // Material Styling (Friendly, Modern Matte Emerald & Clean Porcelain)
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      roughness: 0.35,
      metalness: 0.1
    });

    const jointMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.4
    });

    const chairMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.6
    });

    // 1. Torso
    const torsoGeo = new THREE.CylinderGeometry(0.24, 0.2, 0.55, 16);
    this.torso = new THREE.Mesh(torsoGeo, bodyMat);
    this.torso.position.y = 0.95;
    this.avatar.add(this.torso);

    // 2. Head
    const headGeo = new THREE.SphereGeometry(0.16, 20, 20);
    this.head = new THREE.Mesh(headGeo, bodyMat);
    this.head.position.y = 1.42;
    this.avatar.add(this.head);

    // 3. Left Arm Group (Pivoting at Shoulder)
    this.leftArmGroup = new THREE.Group();
    this.leftArmGroup.position.set(-0.32, 1.15, 0);
    const leftArmGeo = new THREE.CylinderGeometry(0.06, 0.05, 0.45, 12);
    const leftArmMesh = new THREE.Mesh(leftArmGeo, bodyMat);
    leftArmMesh.position.y = -0.22;
    this.leftArmGroup.add(leftArmMesh);
    this.avatar.add(this.leftArmGroup);

    // 4. Right Arm Group
    this.rightArmGroup = new THREE.Group();
    this.rightArmGroup.position.set(0.32, 1.15, 0);
    const rightArmGeo = new THREE.CylinderGeometry(0.06, 0.05, 0.45, 12);
    const rightArmMesh = new THREE.Mesh(rightArmGeo, bodyMat);
    rightArmMesh.position.y = -0.22;
    this.rightArmGroup.add(rightArmMesh);
    this.avatar.add(this.rightArmGroup);

    // 5. Left Thigh & Leg Group
    this.leftLegGroup = new THREE.Group();
    this.leftLegGroup.position.set(-0.16, 0.65, 0.1);
    const thighGeo = new THREE.CylinderGeometry(0.08, 0.07, 0.45, 12);
    const leftThigh = new THREE.Mesh(thighGeo, jointMat);
    leftThigh.position.y = -0.22;
    this.leftLegGroup.add(leftThigh);
    this.avatar.add(this.leftLegGroup);

    // 6. Right Thigh & Leg Group
    this.rightLegGroup = new THREE.Group();
    this.rightLegGroup.position.set(0.16, 0.65, 0.1);
    const rightThigh = new THREE.Mesh(thighGeo, jointMat);
    rightThigh.position.y = -0.22;
    this.rightLegGroup.add(rightThigh);
    this.avatar.add(this.rightLegGroup);

    // 7. Chair (for Seated movements)
    this.chair = new THREE.Group();
    const seatGeo = new THREE.BoxGeometry(0.65, 0.06, 0.6);
    const seatMesh = new THREE.Mesh(seatGeo, chairMat);
    seatMesh.position.set(0, 0.62, 0);
    this.chair.add(seatMesh);

    const backGeo = new THREE.BoxGeometry(0.65, 0.6, 0.05);
    const backMesh = new THREE.Mesh(backGeo, chairMat);
    backMesh.position.set(0, 0.95, -0.28);
    this.chair.add(backMesh);

    // 4 Chair Legs
    const legGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.62, 8);
    const offsets = [[-0.28, 0.25], [0.28, 0.25], [-0.28, -0.25], [0.28, -0.25]];
    offsets.forEach(([x, z]) => {
      const leg = new THREE.Mesh(legGeo, chairMat);
      leg.position.set(x, 0.31, z);
      this.chair.add(leg);
    });
    this.avatar.add(this.chair);

    this.scene.add(this.avatar);
  }

  setMovementAnimation(animType) {
    this.animType = animType;
    if (this.chair) {
      // Hide chair for wall push-ups
      this.chair.visible = animType !== "wall_push";
    }
  }

  animate() {
    if (!this.isThreeAvailable || !this.renderer) return;

    requestAnimationFrame(() => this.animate());

    const t = this.clock ? this.clock.getElapsedTime() : 0;

    // Apply Real-time 3D Kinematics based on current movement
    if (this.animType === "arm_swing") {
      const angle = Math.sin(t * 3.5) * 0.7;
      this.leftArmGroup.rotation.x = angle;
      this.rightArmGroup.rotation.x = -angle;
      this.torso.rotation.y = Math.sin(t * 3.5) * 0.08;
    } else if (this.animType === "cat_cow") {
      const arch = Math.sin(t * 2) * 0.25;
      this.torso.rotation.x = arch;
      this.head.rotation.x = arch * 1.5;
    } else if (this.animType === "march") {
      const legAngle = Math.sin(t * 4) * 0.6;
      this.leftLegGroup.rotation.x = Math.max(0, legAngle);
      this.rightLegGroup.rotation.x = Math.max(0, -legAngle);
    } else if (this.animType === "wall_push") {
      const push = (Math.sin(t * 2.5) + 1) * 0.5;
      this.avatar.position.z = -push * 0.4;
      this.leftArmGroup.rotation.x = -Math.PI / 2 + push * 0.35;
      this.rightArmGroup.rotation.x = -Math.PI / 2 + push * 0.35;
    } else if (this.animType === "breath") {
      const breathe = 1 + Math.sin(t * 1.8) * 0.08;
      this.torso.scale.set(breathe, 1, breathe);
      this.head.position.y = 1.42 + Math.sin(t * 1.8) * 0.03;
    } else if (this.animType === "torso_twist") {
      const twist = Math.sin(t * 2) * 0.55;
      this.torso.rotation.y = twist;
      this.leftArmGroup.rotation.y = twist;
      this.rightArmGroup.rotation.y = twist;
    } else if (this.animType === "side_reach") {
      const lean = Math.sin(t * 2) * 0.35;
      this.torso.rotation.z = lean;
      this.rightArmGroup.rotation.z = Math.PI / 1.2 + lean;
    } else if (this.animType === "knee_ext") {
      const ext = Math.sin(t * 3) * 0.5;
      this.rightLegGroup.rotation.x = Math.max(0, ext);
    } else if (this.animType === "posture_squeeze") {
      const squeeze = Math.sin(t * 2.5) * 0.4;
      this.leftArmGroup.rotation.y = -squeeze;
      this.rightArmGroup.rotation.y = squeeze;
    }

    // Gentle Auto-Rotation if user is not actively dragging
    if (this.autoRotate && !this.isDragging) {
      this.avatar.rotation.y += 0.004;
    }

    this.renderer.render(this.scene, this.camera);
  }

  bindMouseControls() {
    const handleStart = (clientX, clientY) => {
      this.isDragging = true;
      this.autoRotate = false;
      this.previousMousePosition = { x: clientX, y: clientY };
    };

    const handleMove = (clientX, clientY) => {
      if (!this.isDragging || !this.avatar) return;
      const deltaX = clientX - this.previousMousePosition.x;
      const deltaY = clientY - this.previousMousePosition.y;

      this.avatar.rotation.y += deltaX * 0.01;
      this.previousMousePosition = { x: clientX, y: clientY };
    };

    const handleEnd = () => {
      this.isDragging = false;
      // Resume gentle auto rotate after 4 seconds of inactivity
      clearTimeout(this.resumeRotateTimer);
      this.resumeRotateTimer = setTimeout(() => {
        this.autoRotate = true;
      }, 4000);
    };

    // Mouse Listeners
    this.canvas.addEventListener("mousedown", (e) => handleStart(e.clientX, e.clientY));
    window.addEventListener("mousemove", (e) => handleMove(e.clientX, e.clientY));
    window.addEventListener("mouseup", handleEnd);

    // Touch Listeners for mobile/tablets
    this.canvas.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) handleStart(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    window.addEventListener("touchmove", (e) => {
      if (e.touches.length === 1) handleMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    window.addEventListener("touchend", handleEnd);
  }

  setCameraAngle(angle) {
    if (!this.avatar) return;
    this.autoRotate = false;
    if (angle === "front") {
      this.avatar.rotation.set(0, 0, 0);
    } else if (angle === "side") {
      this.avatar.rotation.set(0, Math.PI / 2, 0);
    } else if (angle === "diagonal") {
      this.avatar.rotation.set(0, Math.PI / 4, 0);
    }
  }

  onResize() {
    if (!this.canvas || !this.renderer || !this.camera) return;
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  initCanvasFallback() {
    // 2D Canvas Fallback if WebGL/Three.js CDN is unavailable
    const ctx = this.canvas.getContext("2d");
    let angle = 0;
    const loop = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.save();
      ctx.translate(this.canvas.width / 2, this.canvas.height / 2);

      // Draw stylized animated avatar skeleton
      ctx.strokeStyle = "#059669";
      ctx.lineWidth = 6;
      ctx.lineCap = "round";

      // Head
      ctx.beginPath();
      ctx.arc(0, -60, 24, 0, Math.PI * 2);
      ctx.stroke();

      // Torso
      ctx.beginPath();
      ctx.moveTo(0, -36);
      ctx.lineTo(0, 40);
      ctx.stroke();

      // Arms
      const armSwing = Math.sin(angle) * 35;
      ctx.beginPath();
      ctx.moveTo(-40, -10 + armSwing);
      ctx.lineTo(0, -20);
      ctx.lineTo(40, -10 - armSwing);
      ctx.stroke();

      // Chair Base
      ctx.strokeStyle = "#94a3b8";
      ctx.lineWidth = 4;
      ctx.strokeRect(-45, 38, 90, 8);

      ctx.restore();
      angle += 0.05;
      requestAnimationFrame(loop);
    };
    loop();
  }
}

/* ==========================================================================
   4. VOICE COACH (Web Speech API)
   ========================================================================== */

class VoiceCoach {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.enabled = true;
    this.rate = 1.0;
  }

  speak(text) {
    if (!this.synth || !this.enabled) return;
    try {
      this.synth.cancel(); // Stop any pending utterance
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = this.rate;
      utterance.pitch = 1.05;

      // Select natural English voice if available
      const voices = this.synth.getVoices();
      const naturalVoice = voices.find(v => v.lang.startsWith("en") && (v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("Samantha")));
      if (naturalVoice) utterance.voice = naturalVoice;

      this.synth.speak(utterance);
    } catch (e) {
      console.warn("Speech synthesis error:", e);
    }
  }

  announceStart(title) {
    this.speak(`Starting ${title}. Take your time, breathe gently, and move within your comfort.`);
  }

  announceHalfway() {
    this.speak("Halfway through! Great job showing up for your health.");
  }

  announceTenSeconds() {
    this.speak("Ten seconds remaining. Keep moving at your own pace.");
  }

  announceComplete(points) {
    this.speak(`Exercise complete! Awesome effort. You earned ${points} FitPoints.`);
  }
}

/* ==========================================================================
   5. 3D CONFETTI CELEBRATION ENGINE
   ========================================================================== */

class CelebrationConfetti {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.isRunning = false;
    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  launch() {
    this.resize();
    const colors = ["#059669", "#10b981", "#0284c7", "#38bdf8", "#f59e0b", "#fbbf24", "#ec4899"];
    this.particles = [];

    // Create 90 festive 3D tumbling confetti particles
    for (let i = 0; i < 90; i++) {
      this.particles.push({
        x: this.canvas.width / 2 + (Math.random() - 0.5) * 80,
        y: this.canvas.height * 0.45,
        vx: (Math.random() - 0.5) * 14,
        vy: -Math.random() * 16 - 6,
        size: Math.random() * 9 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 12,
        tilt: Math.random() * 10,
        tiltSpeed: Math.random() * 0.1 + 0.05,
        alpha: 1
      });
    }

    if (!this.isRunning) {
      this.isRunning = true;
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
      p.vy += 0.42; // Gravity
      p.rotation += p.rSpeed;
      p.tilt += p.tiltSpeed;
      p.alpha -= 0.007;

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.scale(Math.cos(p.tilt), 1);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = Math.max(0, p.alpha);
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.4);
      this.ctx.restore();

      if (p.alpha <= 0 || p.y > this.canvas.height + 50) {
        this.particles.splice(i, 1);
      }
    }

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.render());
    } else {
      this.isRunning = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

/* ==========================================================================
   6. MAIN FITFEED CONTROLLER (UI, Timer, Swipe & Accessibility)
   ========================================================================== */

class FitFeedController {
  constructor() {
    this.state = new AppState();
    this.voice = new VoiceCoach();
    this.avatar = null;
    this.confetti = null;

    // Active Exercise Navigation
    this.currentIndex = 0;

    // Timer State
    this.timerRunning = false;
    this.timerSeconds = 30;
    this.timerTotal = 30;
    this.timerInterval = null;
    this.halfwayAnnounced = false;

    // Reps State
    this.currentReps = 0;
    this.repsTarget = 10;

    this.initDOM();
  }

  initDOM() {
    // Canvas References
    const threeCanvas = document.getElementById("threejs-canvas");
    if (threeCanvas) {
      this.avatar = new Avatar3DEngine(threeCanvas);
    }

    const confCanvas = document.getElementById("celebration-canvas");
    if (confCanvas) {
      this.confetti = new CelebrationConfetti(confCanvas);
    }

    this.cacheElements();
    this.bindEvents();
    this.bindSwipeGesture();
    this.applySettings();
    this.renderCurrentExercise();
    this.updateDashboard();
  }

  cacheElements() {
    this.el = {
      cardWrapper: document.getElementById("card-3d-wrapper"),
      cardScene: document.getElementById("card-scene-3d"),
      btnFlipCard: document.getElementById("btn-flip-card"),
      btnFlipBack: document.getElementById("btn-flip-back"),
      
      // Exercise Details Front
      badgeCategory: document.getElementById("ex-badge-category"),
      badgeImpact: document.getElementById("ex-badge-impact"),
      title: document.getElementById("ex-title"),
      tagline: document.getElementById("ex-tagline"),
      instructionsList: document.getElementById("ex-instructions-list"),
      suitableForText: document.getElementById("ex-suitable-for"),
      
      // Exercise Details Back (Flip Side)
      musclesText: document.getElementById("ex-muscles-target"),
      modificationsList: document.getElementById("ex-modifications-list"),
      safetyText: document.getElementById("ex-safety-text"),

      // Timer & Rep HUD
      timerHud: document.getElementById("hud-timer-container"),
      repsHud: document.getElementById("hud-reps-container"),
      timerRing: document.getElementById("timer-circle-animated"),
      timerDisplay: document.getElementById("timer-display-val"),
      btnStartTimer: document.getElementById("btn-start-timer"),
      btnResetTimer: document.getElementById("btn-reset-timer"),
      btnPlus15: document.getElementById("btn-plus-15"),
      btnMinus15: document.getElementById("btn-minus-15"),
      repCountDisplay: document.getElementById("rep-count-val"),
      repTargetDisplay: document.getElementById("rep-target-val"),
      repTapArea: document.getElementById("rep-tap-area"),

      // Feed Navigation
      btnPrev: document.getElementById("btn-prev-card"),
      btnNext: document.getElementById("btn-next-card"),
      feedIndicator: document.getElementById("feed-counter-indicator"),

      // 3D Angle buttons
      btnAngleFront: document.getElementById("btn-angle-front"),
      btnAngleSide: document.getElementById("btn-angle-side"),

      // Progress Tracker Dashboard
      statCompleted: document.getElementById("stat-total-completed"),
      statCalories: document.getElementById("stat-total-calories"),
      statPoints: document.getElementById("stat-total-points"),
      statStreak: document.getElementById("stat-streak-days"),
      goalBarFill: document.getElementById("dashboard-goal-fill"),
      goalText: document.getElementById("dashboard-goal-text"),
      historyContainer: document.getElementById("dashboard-history-list"),

      // Header Actions
      btnThemeToggle: document.getElementById("btn-toggle-theme"),
      btnVoiceToggle: document.getElementById("btn-toggle-voice"),
      btnContrastToggle: document.getElementById("btn-toggle-contrast"),
      btnTextSizeToggle: document.getElementById("btn-toggle-text-size"),
      toast: document.getElementById("accessible-toast")
    };
  }

  bindEvents() {
    // 3D Card Flip
    this.el.btnFlipCard.addEventListener("click", () => this.flipCard(true));
    this.el.btnFlipBack.addEventListener("click", () => this.flipCard(false));

    // Timer Controls
    this.el.btnStartTimer.addEventListener("click", () => this.toggleTimer());
    this.el.btnResetTimer.addEventListener("click", () => this.resetCurrentExercise());
    this.el.btnPlus15.addEventListener("click", () => this.adjustTimer(15));
    this.el.btnMinus15.addEventListener("click", () => this.adjustTimer(-15));

    // Rep Tap Stepper
    this.el.repTapArea.addEventListener("click", () => this.incrementRep());

    // Feed Navigation
    this.el.btnNext.addEventListener("click", () => this.nextCard());
    this.el.btnPrev.addEventListener("click", () => this.prevCard());

    // 3D Angle Buttons
    this.el.btnAngleFront.addEventListener("click", () => this.avatar && this.avatar.setCameraAngle("front"));
    this.el.btnAngleSide.addEventListener("click", () => this.avatar && this.avatar.setCameraAngle("side"));

    // Header Accessibility Toggles
    this.el.btnThemeToggle.addEventListener("click", () => this.toggleTheme());
    this.el.btnVoiceToggle.addEventListener("click", () => this.toggleVoiceCoach());
    this.el.btnContrastToggle.addEventListener("click", () => this.toggleHighContrast());
    this.el.btnTextSizeToggle.addEventListener("click", () => this.toggleJumboText());

    // Keyboard Shortcuts (Space: Timer/Rep, Left/Right: Navigate, F: Flip)
    window.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        const ex = this.getCurrentExercise();
        if (ex.mode === "timer") this.toggleTimer();
        else this.incrementRep();
      } else if (e.code === "ArrowRight") {
        e.preventDefault();
        this.nextCard();
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        this.prevCard();
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        const isFlipped = this.el.cardWrapper.classList.contains("is-flipped");
        this.flipCard(!isFlipped);
      }
    });
  }

  /* ==========================================================================
     SWIPE & 3D TILT ENGINE
     ========================================================================== */
  bindSwipeGesture() {
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let isSwiping = false;

    const onStart = (x, y) => {
      startX = x;
      startY = y;
      currentX = x;
      isSwiping = true;
    };

    const onMove = (x, y) => {
      if (!isSwiping) return;
      const dx = x - startX;
      const dy = y - startY;

      // Ensure horizontal swipe intent
      if (Math.abs(dx) > Math.abs(dy)) {
        this.el.cardWrapper.style.transform = `translateX(${dx * 0.7}px) rotateZ(${dx * 0.04}deg)`;
      }
    };

    const onEnd = (x) => {
      if (!isSwiping) return;
      isSwiping = false;
      const dx = x - startX;

      this.el.cardWrapper.style.transform = "";

      if (dx < -75) {
        // Swiped Left -> Next Card
        this.el.cardWrapper.classList.add("swipe-exit-left");
        setTimeout(() => {
          this.el.cardWrapper.classList.remove("swipe-exit-left");
          this.nextCard();
          this.el.cardWrapper.classList.add("swipe-enter-card");
          setTimeout(() => this.el.cardWrapper.classList.remove("swipe-enter-card"), 350);
        }, 250);
      } else if (dx > 75) {
        // Swiped Right -> Previous Card
        this.el.cardWrapper.classList.add("swipe-exit-right");
        setTimeout(() => {
          this.el.cardWrapper.classList.remove("swipe-exit-right");
          this.prevCard();
          this.el.cardWrapper.classList.add("swipe-enter-card");
          setTimeout(() => this.el.cardWrapper.classList.remove("swipe-enter-card"), 350);
        }, 250);
      }
    };

    // Touch Support
    this.el.cardScene.addEventListener("touchstart", (e) => {
      onStart(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    window.addEventListener("touchmove", (e) => {
      if (e.touches.length === 1) onMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    window.addEventListener("touchend", (e) => {
      if (e.changedTouches.length > 0) onEnd(e.changedTouches[0].clientX);
    });

    // 3D Mouse Hover Tilt
    this.el.cardScene.addEventListener("mousemove", (e) => {
      if (isSwiping || this.el.cardWrapper.classList.contains("is-flipped")) return;
      const rect = this.el.cardScene.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const tiltX = (y / (rect.height / 2)) * -6;
      const tiltY = (x / (rect.width / 2)) * 6;

      this.el.cardWrapper.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    this.el.cardScene.addEventListener("mouseleave", () => {
      if (!this.el.cardWrapper.classList.contains("is-flipped")) {
        this.el.cardWrapper.style.transform = "";
      }
    });
  }

  /* ==========================================================================
     EXERCISE RENDERING & NAVIGATION
     ========================================================================== */
  getExerciseList() {
    if (this.state.data.settings.seatedOnly) {
      return EXERCISES_DATA.filter(e => e.category === "Seated Only");
    }
    return EXERCISES_DATA;
  }

  getCurrentExercise() {
    const list = this.getExerciseList();
    if (this.currentIndex >= list.length) this.currentIndex = 0;
    return list[this.currentIndex];
  }

  renderCurrentExercise() {
    this.flipCard(false);
    this.resetTimer();

    const ex = this.getCurrentExercise();
    const list = this.getExerciseList();

    // Front Details
    this.el.badgeCategory.textContent = ex.category;
    this.el.badgeCategory.className = `badge-gentle ${ex.badgeClass}`;
    this.el.badgeImpact.textContent = ex.impactLevel;
    this.el.title.textContent = ex.title;
    this.el.tagline.textContent = ex.tagline;
    this.el.suitableForText.textContent = ex.suitableFor;

    // Front Instructions
    this.el.instructionsList.innerHTML = "";
    ex.instructions.forEach(step => {
      const li = document.createElement("li");
      li.textContent = step;
      this.el.instructionsList.appendChild(li);
    });

    // Back Details (3D Anatomy & Accessibility Modifications)
    this.el.musclesText.textContent = ex.targetMuscles;
    this.el.safetyText.textContent = ex.safetyNote;
    this.el.modificationsList.innerHTML = "";
    ex.modifications.forEach(mod => {
      const li = document.createElement("li");
      li.textContent = mod;
      this.el.modificationsList.appendChild(li);
    });

    // Feed Counter Indicator
    this.el.feedIndicator.textContent = `Move ${this.currentIndex + 1} of ${list.length}`;
    this.el.btnPrev.disabled = this.currentIndex === 0;

    // Mode Setup: Timer vs Reps
    if (ex.mode === "timer") {
      this.el.timerHud.classList.remove("hidden");
      this.el.repsHud.classList.add("hidden");
      this.timerSeconds = ex.duration;
      this.timerTotal = ex.duration;
      this.el.timerDisplay.textContent = this.timerSeconds;
      this.updateTimerRing();
    } else {
      this.el.timerHud.classList.add("hidden");
      this.el.repsHud.classList.remove("hidden");
      this.currentReps = 0;
      this.repsTarget = ex.target;
      this.el.repCountDisplay.textContent = "0";
      this.el.repTargetDisplay.textContent = `Suggested Target: ${ex.target} reps`;
    }

    // Update 3D Avatar Movement
    if (this.avatar) {
      this.avatar.setMovementAnimation(ex.animType);
    }
  }

  flipCard(showBack) {
    if (showBack) {
      this.el.cardWrapper.classList.add("is-flipped");
    } else {
      this.el.cardWrapper.classList.remove("is-flipped");
      this.el.cardWrapper.style.transform = "";
    }
  }

  nextCard() {
    const list = this.getExerciseList();
    if (this.currentIndex < list.length - 1) {
      this.currentIndex++;
      this.renderCurrentExercise();
    }
  }

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderCurrentExercise();
    }
  }

  /* ==========================================================================
     TIMER ENGINE
     ========================================================================== */
  toggleTimer() {
    if (this.timerRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    if (this.timerRunning) return;
    this.timerRunning = true;
    this.halfwayAnnounced = false;
    this.el.btnStartTimer.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> Pause Timer`;
    this.el.btnStartTimer.classList.remove("bg-emerald-600");
    this.el.btnStartTimer.classList.add("bg-amber-600");

    const ex = this.getCurrentExercise();
    this.voice.announceStart(ex.title);

    this.timerInterval = setInterval(() => {
      this.timerSeconds--;
      this.el.timerDisplay.textContent = Math.max(0, this.timerSeconds);
      this.updateTimerRing();

      // Voice cues at halfway and final countdown
      if (this.timerSeconds === Math.floor(this.timerTotal / 2) && !this.halfwayAnnounced) {
        this.halfwayAnnounced = true;
        this.voice.announceHalfway();
      } else if (this.timerSeconds === 10) {
        this.voice.announceTenSeconds();
      }

      if (this.timerSeconds <= 0) {
        this.finishExercise();
      }
    }, 1000);
  }

  pauseTimer() {
    if (!this.timerRunning) return;
    this.timerRunning = false;
    clearInterval(this.timerInterval);
    this.el.btnStartTimer.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Resume Timer`;
    this.el.btnStartTimer.classList.remove("bg-amber-600");
    this.el.btnStartTimer.classList.add("bg-emerald-600");
  }

  resetTimer() {
    this.timerRunning = false;
    clearInterval(this.timerInterval);
    const ex = this.getCurrentExercise();
    if (ex && ex.mode === "timer") {
      this.timerSeconds = ex.duration;
      this.timerTotal = ex.duration;
      this.el.timerDisplay.textContent = this.timerSeconds;
      this.updateTimerRing();
    }
    this.el.btnStartTimer.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Start Exercise`;
    this.el.btnStartTimer.classList.remove("bg-amber-600");
    this.el.btnStartTimer.classList.add("bg-emerald-600");
  }

  adjustTimer(delta) {
    this.timerSeconds = Math.max(5, this.timerSeconds + delta);
    if (this.timerSeconds > this.timerTotal) {
      this.timerTotal = this.timerSeconds;
    }
    this.el.timerDisplay.textContent = this.timerSeconds;
    this.updateTimerRing();
    this.showToast(`Timer adjusted: ${this.timerSeconds}s`);
  }

  updateTimerRing() {
    const circumference = 2 * Math.PI * 44; // r=44
    const fraction = Math.max(0, Math.min(1, this.timerSeconds / this.timerTotal));
    const offset = circumference * (1 - fraction);
    this.el.timerRing.style.strokeDasharray = `${circumference}`;
    this.el.timerRing.style.strokeDashoffset = `${offset}`;
  }

  /* ==========================================================================
     REPS ENGINE
     ========================================================================== */
  incrementRep() {
    const ex = this.getCurrentExercise();
    if (ex.mode !== "reps") return;

    this.currentReps++;
    this.el.repCountDisplay.textContent = this.currentReps;

    // Small vibration on supported mobile devices
    if (navigator.vibrate) navigator.vibrate(35);

    if (this.currentReps >= this.repsTarget) {
      this.finishExercise();
    }
  }

  /* ==========================================================================
     EXERCISE COMPLETION & PROGRESS
     ========================================================================== */
  finishExercise() {
    this.pauseTimer();
    const ex = this.getCurrentExercise();
    const durationSecs = ex.mode === "timer" ? this.timerTotal : 45;

    const result = this.state.recordCompletion(ex, durationSecs);

    // 3D Confetti Particle Explosion
    if (this.confetti) {
      this.confetti.launch();
    }

    // Voice Celebration
    this.voice.announceComplete(result.points);

    // Show Toast
    this.showToast(`🎉 Completed ${ex.title}! +${result.points} pts & ${result.caloriesBurned} cal`);

    // Update Dashboard Metrics
    this.updateDashboard();

    // Auto Advance Prompt after brief pause
    setTimeout(() => {
      const list = this.getExerciseList();
      if (this.currentIndex < list.length - 1) {
        this.nextCard();
      } else {
        this.showToast("🌟 Incredible! You finished every movement in the feed!");
      }
    }, 1800);
  }

  resetCurrentExercise() {
    this.resetTimer();
    this.currentReps = 0;
    this.el.repCountDisplay.textContent = "0";
    this.showToast("Exercise reset.");
  }

  updateDashboard() {
    this.el.statCompleted.textContent = this.state.data.totalCompleted;
    this.el.statCalories.textContent = `${this.state.data.totalCalories} kcal`;
    this.el.statPoints.textContent = this.state.data.totalPoints;
    this.el.statStreak.textContent = `${this.state.data.streak} days`;

    // Daily Goal Bar (3 exercises default target)
    const todayCount = this.state.getTodayCount();
    const goalTarget = 3;
    const goalPercent = Math.min(100, Math.round((todayCount / goalTarget) * 100));

    this.el.goalBarFill.style.width = `${goalPercent}%`;
    this.el.goalText.textContent = `${todayCount} of ${goalTarget} completed today (${goalPercent}%)`;

    // History Log
    this.el.historyContainer.innerHTML = "";
    if (this.state.data.history.length === 0) {
      this.el.historyContainer.innerHTML = `
        <div class="text-sm text-slate-400 text-center py-6">
          No exercises recorded yet. Start your first movement above!
        </div>
      `;
      return;
    }

    this.state.data.history.slice(0, 8).forEach(item => {
      const row = document.createElement("div");
      row.className = "flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-sm";
      const time = new Date(item.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      row.innerHTML = `
        <div class="flex items-center gap-2.5">
          <span class="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
          <div>
            <div class="font-semibold text-slate-800 dark:text-slate-100">${item.title}</div>
            <div class="text-xs text-slate-400">${time} · ${item.category}</div>
          </div>
        </div>
        <div class="text-right">
          <span class="font-bold text-emerald-600 dark:text-emerald-400">+${item.points} pts</span>
          <div class="text-xs text-slate-400">${item.calories} kcal</div>
        </div>
      `;
      this.el.historyContainer.appendChild(row);
    });
  }

  /* ==========================================================================
     ACCESSIBILITY & DISPLAY SETTINGS
     ========================================================================== */
  applySettings() {
    const s = this.state.data.settings;
    document.documentElement.setAttribute("data-theme", s.theme);
    document.body.classList.toggle("high-contrast", s.highContrast);
    document.body.classList.toggle("jumbo-text", s.jumboText);
    this.voice.enabled = s.voiceCoach;
  }

  toggleTheme() {
    const current = this.state.data.settings.theme;
    const next = current === "dark" ? "light" : "dark";
    this.state.data.settings.theme = next;
    this.state.save();
    this.applySettings();
    this.showToast(`Switched to ${next} theme.`);
  }

  toggleVoiceCoach() {
    this.state.data.settings.voiceCoach = !this.state.data.settings.voiceCoach;
    this.state.save();
    this.applySettings();
    if (this.state.data.settings.voiceCoach) {
      this.voice.speak("Voice coach enabled. I will guide your movements.");
      this.showToast("Voice coach enabled.");
    } else {
      this.showToast("Voice coach muted.");
    }
  }

  toggleHighContrast() {
    this.state.data.settings.highContrast = !this.state.data.settings.highContrast;
    this.state.save();
    this.applySettings();
    this.showToast(this.state.data.settings.highContrast ? "High Contrast Mode ON (WCAG AAA)." : "High Contrast Mode OFF.");
  }

  toggleJumboText() {
    this.state.data.settings.jumboText = !this.state.data.settings.jumboText;
    this.state.save();
    this.applySettings();
    this.showToast(this.state.data.settings.jumboText ? "Large Accessible Font ON." : "Standard Font Size.");
  }

  showToast(message) {
    if (!this.el.toast) return;
    this.el.toast.textContent = message;
    this.el.toast.classList.remove("hidden");
    this.el.toast.classList.add("opacity-100");
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.el.toast.classList.add("hidden");
      this.el.toast.classList.remove("opacity-100");
    }, 3000);
  }
}

// Global App Initialization
document.addEventListener("DOMContentLoaded", () => {
  window.fitFeed = new FitFeedController();
});
