/**
 * FitFeed — Accessible Low-Impact Fitness & Movement Reels (100 Movement Engine)
 * Congressional App Challenge 2026
 * Authors: Naihrit & Co-Developer
 *
 * Architecture:
 * 1. 100 Low-Impact Medically Valid Exercises across 5 Categories (Real Likes Counter)
 * 2. High-Performance Single-Context 3D Human Engine (Three.js 60FPS Zero-Lag)
 * 3. Seamless Mobile (100dvh) & Tablet Responsive Reels Layout
 * 4. Accurate Local-First Activity Dashboard (Real MET Burn, Streaks, 7-Day History)
 * 5. Instant Voice Coach (Web Speech API with User Gesture Unlock)
 */

"use strict";

const EXERCISES_DATA = [
  {
    "id": "seated-arm-swings",
    "title": "Seated Arm Swings",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Wheelchair, Seniors, High BMI",
    "mode": "timer",
    "duration": 30,
    "met": 2.3,
    "points": 50,
    "audioTrack": "FitFeed Coach • Gentle 30s Rhythm",
    "caption": "Keep shoulders relaxed. Let momentum swing arms softly forward and back without forcing height.",
    "muscles": "Deltoids, Upper Trapezius & Rotator Cuff",
    "modifications": [
      "Keep swings below chest level to reduce lever strain.",
      "Maintain a wider leg stance for comfortable shoulder clearance."
    ],
    "safety": "Never force past shoulder impingement. Stop if sharp pinching occurs.",
    "animType": "arm_swing"
  },
  {
    "id": "chair-marches",
    "title": "Seated Chair Marches",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Knee Pounding",
    "suitableFor": "Knee Osteoarthritis, Seniors, High BMI",
    "mode": "reps",
    "targetReps": 16,
    "met": 2.8,
    "points": 60,
    "audioTrack": "FitFeed Coach • Steady Cadence",
    "caption": "Activates lower leg circulation and hip flexors without putting any bodyweight load on knees.",
    "muscles": "Iliopsoas, Quadriceps & Lower Core",
    "modifications": [
      "Lift only heels while keeping toes grounded on floor.",
      "Lift knees just 1 to 2 inches off chair to protect hips."
    ],
    "safety": "Lower each foot gently without stomping.",
    "animType": "march"
  },
  {
    "id": "seated-knee-extensions",
    "title": "Seated Knee Extensions",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Knee Cartilage Support, Seniors",
    "mode": "reps",
    "targetReps": 12,
    "met": 2.4,
    "points": 55,
    "audioTrack": "FitFeed Coach • Quad Strengthening",
    "caption": "Slowly straighten one leg forward from your chair. Strengthens thighs without joint impact.",
    "muscles": "Quadriceps & Patellar Tendon",
    "modifications": [
      "Extend only halfway without locking the knee.",
      "Place rolled towel under thighs for joint relief."
    ],
    "safety": "Do not hyperextend or kick abruptly. Extend smoothly.",
    "animType": "knee_ext"
  },
  {
    "id": "seated-ankle-circles",
    "title": "Ankle Alphabet Circles",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Edema Relief, Neuropathy, Seniors",
    "mode": "timer",
    "duration": 30,
    "met": 2,
    "points": 45,
    "audioTrack": "FitFeed Coach • Joint Lubrication",
    "caption": "Draw smooth, deliberate circles with your toes to stimulate venous return and calf circulation.",
    "muscles": "Gastrocnemius, Soleus & Peroneals",
    "modifications": [
      "Rest heel on floor and swivel toes side to side.",
      "Can be done with legs resting on a footrest."
    ],
    "safety": "If calf cramping occurs, gently draw toes toward shin.",
    "animType": "ankle_circle"
  },
  {
    "id": "seated-shoulder-rolls",
    "title": "Seated Shoulder Rolls",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Desk Workers, Neck Strain, Seniors",
    "mode": "timer",
    "duration": 30,
    "met": 2,
    "points": 45,
    "audioTrack": "FitFeed Coach • Cervical Ease",
    "caption": "Glide shoulders up, back, and down in slow circular arcs to melt upper trapezius tension.",
    "muscles": "Trapezius, Levator Scapulae & Rhomboids",
    "modifications": [
      "Keep circles small if collarbone clicks.",
      "Rest hands on thighs throughout."
    ],
    "safety": "Keep chin level; avoid tilting neck backward.",
    "animType": "shoulder_roll"
  },
  {
    "id": "wrist-finger-glides",
    "title": "Wrist & Finger Glides",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Arthritis, Typing Fatigue, Neuropathy",
    "mode": "reps",
    "targetReps": 12,
    "met": 1.8,
    "points": 40,
    "audioTrack": "FitFeed Coach • Tendon Glide",
    "caption": "Open fingers wide like gentle stars, then curl softly into relaxed fists.",
    "muscles": "Finger Flexors & Extensors, Forearms",
    "modifications": [
      "Move within pain-free range without tight squeezing.",
      "Rest forearms on chair armrests."
    ],
    "safety": "Never snap fingers open forcefully.",
    "animType": "wrist_glide"
  },
  {
    "id": "seated-heel-toe-taps",
    "title": "Seated Heel-Toe Rockers",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Circulation, Swollen Feet, Seniors",
    "mode": "reps",
    "targetReps": 20,
    "met": 2.2,
    "points": 50,
    "audioTrack": "FitFeed Coach • Ankle Pump",
    "caption": "Alternate lifting toes then heels while keeping feet grounded. Pumps blood upward.",
    "muscles": "Tibialis Anterior & Soleus",
    "modifications": [
      "Small taps without forcing full range.",
      "Can be done with shoes or barefoot."
    ],
    "safety": "Keep movements rhythmic and smooth.",
    "animType": "heel_tap"
  },
  {
    "id": "seated-hip-openers",
    "title": "Seated Butterfly Openers",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Pelvic Mobility, Hip Stiffness",
    "mode": "reps",
    "targetReps": 12,
    "met": 2.2,
    "points": 50,
    "audioTrack": "FitFeed Coach • Pelvic Freedom",
    "caption": "With feet grounded, softly open knees outward, then bring knees back to hip-width.",
    "muscles": "Gluteus Medius & Hip Adductors",
    "modifications": [
      "Keep range small if hip replacement present.",
      "Place hands on outer thighs to assist."
    ],
    "safety": "Stop if sharp groin pinching occurs.",
    "animType": "hip_opener"
  },
  {
    "id": "seated-flutter-kicks",
    "title": "Seated Gentle Flutter Kicks",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Gentle Core Activation, Seniors",
    "mode": "timer",
    "duration": 25,
    "met": 2.6,
    "points": 50,
    "audioTrack": "FitFeed Coach • Core Circulation",
    "caption": "Hold chair sides. Lift feet slightly and make small, soft alternating flutter kicks.",
    "muscles": "Transverse Abdominis & Rectus Femoris",
    "modifications": [
      "Keep one foot grounded while fluttering the other.",
      "Point and flex feet on floor instead."
    ],
    "safety": "Keep lower back supported against chair.",
    "animType": "flutter_kick"
  },
  {
    "id": "seated-hamstring-hinge",
    "title": "Seated Hamstring Hinge",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Tight Leg Backs, Lower Back Ease",
    "mode": "timer",
    "duration": 30,
    "met": 2.1,
    "points": 45,
    "audioTrack": "FitFeed Coach • Posterior Lengthener",
    "caption": "Extend one leg forward with heel down. Hinge gently from hips with flat back.",
    "muscles": "Biceps Femoris & Calves",
    "modifications": [
      "Keep knee slightly soft rather than rigidly locked.",
      "Perch on front third of chair."
    ],
    "safety": "Do not round lower back; hinge cleanly at hip crease.",
    "animType": "hamstring_hinge"
  },
  {
    "id": "seated-arm-circles",
    "title": "Gentle Seated Arm Circles",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Shoulder Warm-up, High BMI",
    "mode": "timer",
    "duration": 30,
    "met": 2.3,
    "points": 50,
    "audioTrack": "FitFeed Coach • Shoulder Warmth",
    "caption": "Extend arms outward and paint small, smooth circles in the air.",
    "muscles": "Deltoids & Rotator Cuff",
    "modifications": [
      "Keep arms below shoulder height to relieve strain.",
      "Make circles with elbows bent."
    ],
    "safety": "Never push through neck or shoulder pinch.",
    "animType": "arm_circle"
  },
  {
    "id": "seated-overhead-reach",
    "title": "Seated Alternating Sky Reach",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Torso Extension, Seniors",
    "mode": "reps",
    "targetReps": 12,
    "met": 2.4,
    "points": 50,
    "audioTrack": "FitFeed Coach • Spine Length",
    "caption": "Reach one arm overhead toward ceiling as if climbing an imaginary rope.",
    "muscles": "Latissimus Dorsi & Intercostals",
    "modifications": [
      "Reach forward at 45 degrees if overhead is tight.",
      "Support non-reaching hand on chair."
    ],
    "safety": "Avoid arching neck backward.",
    "animType": "overhead_reach"
  },
  {
    "id": "seated-cross-reach",
    "title": "Cross-Body Diagonal Reach",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Shoulder Blade Release, Beginners",
    "mode": "reps",
    "targetReps": 14,
    "met": 2.3,
    "points": 50,
    "audioTrack": "FitFeed Coach • Scapular Glide",
    "caption": "Reach right hand across body toward left knee, then left across to right.",
    "muscles": "Rhomboids & Posterior Deltoid",
    "modifications": [
      "Stay upright without leaning deep.",
      "Keep reaching arm low."
    ],
    "safety": "Rotate only through upper torso, keep hips stable.",
    "animType": "cross_reach"
  },
  {
    "id": "seated-chest-opener",
    "title": "Seated Goalpost Chest Opener",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Hunched Desk Posture, Seniors",
    "mode": "reps",
    "targetReps": 10,
    "met": 2.2,
    "points": 50,
    "audioTrack": "FitFeed Coach • Pectoral Expansion",
    "caption": "Bring elbows up to goalpost shape, draw elbows back softly, then bring forearms together.",
    "muscles": "Pectoralis Major & Scapular Retractors",
    "modifications": [
      "Keep elbows lower than shoulder height.",
      "Perform one arm at a time."
    ],
    "safety": "Breathe smoothly without straining ribs.",
    "animType": "goalpost"
  },
  {
    "id": "seated-side-taps",
    "title": "Seated Side Toe Taps",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Hip Abduction, Knee Health",
    "mode": "reps",
    "targetReps": 16,
    "met": 2.5,
    "points": 55,
    "audioTrack": "FitFeed Coach • Lateral Rhythm",
    "caption": "Tap right foot out to the side, return to center, then tap left foot out.",
    "muscles": "Gluteus Medius & Outer Thighs",
    "modifications": [
      "Tap only 4 to 6 inches wide.",
      "Hold chair frame for stability."
    ],
    "safety": "Keep sitting tall without leaning heavily.",
    "animType": "side_tap"
  },
  {
    "id": "seated-bicep-curls",
    "title": "Seated Air Bicep Curls",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Elbow Mobility, Arm Endurance",
    "mode": "reps",
    "targetReps": 16,
    "met": 2.2,
    "points": 50,
    "audioTrack": "FitFeed Coach • Bicep Flow",
    "caption": "Curl hands toward shoulders with light muscle tension, then lower with control.",
    "muscles": "Biceps Brachii & Brachialis",
    "modifications": [
      "Open hands flat instead of closed fists.",
      "Rest elbows lightly against ribs."
    ],
    "safety": "Keep wrists straight and neutral.",
    "animType": "bicep_curl"
  },
  {
    "id": "seated-tricep-pressbacks",
    "title": "Seated Tricep Press-Backs",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Arm Strength, Posture",
    "mode": "reps",
    "targetReps": 14,
    "met": 2.3,
    "points": 50,
    "audioTrack": "FitFeed Coach • Arm Extension",
    "caption": "Press straight arms straight back past hips, engaging back of arms.",
    "muscles": "Triceps Brachii & Posterior Deltoid",
    "modifications": [
      "Hinge torso slightly forward with straight back.",
      "Move within comfortable shoulder range."
    ],
    "safety": "Avoid swinging torso back and forth.",
    "animType": "tricep_press"
  },
  {
    "id": "seated-wrist-circles",
    "title": "Seated Wrist Revolutions",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Carpal Relief, Wrist Health",
    "mode": "timer",
    "duration": 30,
    "met": 1.8,
    "points": 40,
    "audioTrack": "FitFeed Coach • Wrist Circulation",
    "caption": "Roll wrists in slow, circular loops clockwise and counterclockwise.",
    "muscles": "Forearm Flexors & Extensors",
    "modifications": [
      "Support forearms on lap.",
      "Keep fingers soft and loose."
    ],
    "safety": "Never force through sharp wrist pain.",
    "animType": "wrist_circle"
  },
  {
    "id": "seated-finger-spreads",
    "title": "Starfish Finger Extensions",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Hand Stiffness, Arthritis",
    "mode": "reps",
    "targetReps": 12,
    "met": 1.6,
    "points": 40,
    "audioTrack": "FitFeed Coach • Hand Vitality",
    "caption": "Spread fingers wide like a starfish, hold 2s, then gently release.",
    "muscles": "Dorsal Interossei & Lumbricals",
    "modifications": [
      "Perform on tabletop for support.",
      "Gentle spread without maximum force."
    ],
    "safety": "Keep joints relaxed, do not hyperextend knuckles.",
    "animType": "finger_spread"
  },
  {
    "id": "seated-pelvic-tilts",
    "title": "Seated Pelvic Rockers",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Lower Back Decompression, Seniors",
    "mode": "timer",
    "duration": 30,
    "met": 2,
    "points": 45,
    "audioTrack": "FitFeed Coach • Lumbar Ease",
    "caption": "Rock pelvis forward to sit tall on sit-bones, then tuck pelvis slightly backward.",
    "muscles": "Pelvic Floor, Core & Lumbar Spine",
    "modifications": [
      "Keep movements small and subtle.",
      "Place pillow behind lumbar spine if sensitive."
    ],
    "safety": "Avoid jarring spinal jolts.",
    "animType": "pelvic_tilt"
  },
  {
    "id": "seated-punch-track",
    "title": "Seated Gentle Front Punches",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Cardio Boost, High BMI, Seniors",
    "mode": "reps",
    "targetReps": 20,
    "met": 2.7,
    "points": 60,
    "audioTrack": "FitFeed Coach • Shadow Boxing Flow",
    "caption": "Punch straight forward smoothly, alternating arms without locking elbows.",
    "muscles": "Deltoids, Triceps & Upper Torso",
    "modifications": [
      "Punch below eye level.",
      "Keep pace comfortable and unhurried."
    ],
    "safety": "Never snap elbows into full hyperextension.",
    "animType": "front_punch"
  },
  {
    "id": "seated-steering-wheel",
    "title": "Steering Wheel Torso Driver",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Shoulder Balance, Functional Grip",
    "mode": "timer",
    "duration": 30,
    "met": 2.3,
    "points": 50,
    "audioTrack": "FitFeed Coach • Rotational Control",
    "caption": "Hold an imaginary steering wheel and rotate arms 180 degrees side to side.",
    "muscles": "Deltoids, Forearms & Obliques",
    "modifications": [
      "Hold elbows closer to ribs.",
      "Keep steering radius small."
    ],
    "safety": "Keep core engaged to avoid arching back.",
    "animType": "steering_wheel"
  },
  {
    "id": "seated-knee-hugs",
    "title": "Seated Single Knee Hug",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Hip Joint Relief, Seniors",
    "mode": "reps",
    "targetReps": 8,
    "met": 2.1,
    "points": 45,
    "audioTrack": "FitFeed Coach • Hip Comfort",
    "caption": "Gently grasp behind one thigh and draw knee toward chest without rounding spine.",
    "muscles": "Gluteus Maximus & Hamstrings",
    "modifications": [
      "Hold behind thigh rather than over shin to spare knee.",
      "Lift only a few inches off seat."
    ],
    "safety": "Stop if hip replacement restriction applies.",
    "animType": "knee_hug"
  },
  {
    "id": "seated-torso-circles",
    "title": "Seated Torso Barrels",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Core Warmth, Spine Flexibility",
    "mode": "timer",
    "duration": 30,
    "met": 2.2,
    "points": 50,
    "audioTrack": "FitFeed Coach • Spiral Spine",
    "caption": "Gently swirl your upper torso in smooth circular motions over your sit-bones.",
    "muscles": "Obliques, Multifidus & Diaphragm",
    "modifications": [
      "Keep circles compact.",
      "Hold onto chair sides for balance."
    ],
    "safety": "Keep both buttocks firmly planted on the chair.",
    "animType": "torso_circle"
  },
  {
    "id": "seated-windshield-wipers",
    "title": "Seated Windshield Arms",
    "category": "Seated Mobility",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Rotator Cuff Health, Beginners",
    "mode": "timer",
    "duration": 30,
    "met": 2.2,
    "points": 50,
    "audioTrack": "FitFeed Coach • Rotator Glide",
    "caption": "Bend elbows 90 degrees by your ribs; swing forearms inward then outward like wipers.",
    "muscles": "Infraspinatus, Teres Minor & Subscapularis",
    "modifications": [
      "Keep forearms within 45 degrees of center.",
      "Hold a rolled towel between elbow and rib."
    ],
    "safety": "Keep shoulders relaxed down away from ears.",
    "animType": "windshield_arm"
  },
  {
    "id": "seated-calf-raises",
    "title": "Seated High Heel Calf Lifts",
    "category": "Seated Lower Body",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Lower Leg Blood Flow, Swelling Relief",
    "mode": "reps",
    "targetReps": 16,
    "met": 2.2,
    "points": 50,
    "audioTrack": "FitFeed Coach • Calf Squeeze",
    "caption": "Press balls of feet into floor and lift heels as high as comfortable. Hold 1s, lower slowly.",
    "muscles": "Gastrocnemius & Soleus",
    "modifications": [
      "Rest hands on knees for light resistance.",
      "Lift one heel at a time if tired."
    ],
    "safety": "Keep feet pointed straight forward.",
    "animType": "calf_raise"
  },
  {
    "id": "seated-toe-lifts",
    "title": "Seated Dorsiflexion Toe Lifts",
    "category": "Seated Lower Body",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Foot Drop Prevention, Walking Stability",
    "mode": "reps",
    "targetReps": 16,
    "met": 2.1,
    "points": 50,
    "audioTrack": "FitFeed Coach • Shin Activation",
    "caption": "Keep heels firmly planted on the floor and lift toes upward toward shins.",
    "muscles": "Tibialis Anterior & Extensor Digitorum",
    "modifications": [
      "Tap toes rhythmically to music cadence.",
      "Slide feet forward slightly if shins fatigue quickly."
    ],
    "safety": "Keep movement controlled without slamming feet.",
    "animType": "heel_tap"
  },
  {
    "id": "seated-inner-thigh-squeeze",
    "title": "Seated Inner Thigh Squeeze",
    "category": "Seated Lower Body",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Pelvic Stability, Knee Alignment",
    "mode": "timer",
    "duration": 30,
    "met": 2.3,
    "points": 50,
    "audioTrack": "FitFeed Coach • Adductor Power",
    "caption": "Squeeze knees toward each other gently as if pressing a soft pillow. Hold 3s, release.",
    "muscles": "Gracilis, Adductor Longus & Magnus",
    "modifications": [
      "Place a rolled towel or soft pillow between knees.",
      "Use 50% effort to avoid inner thigh cramps."
    ],
    "safety": "Breathe continuously; avoid holding breath during isometric hold.",
    "animType": "inner_thigh"
  },
  {
    "id": "seated-hip-circles",
    "title": "Seated Single Knee Stirrers",
    "category": "Seated Lower Body",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Hip Lubrication, Seniors",
    "mode": "reps",
    "targetReps": 10,
    "met": 2.3,
    "points": 50,
    "audioTrack": "FitFeed Coach • Acetabular Glide",
    "caption": "Hold under one thigh and stir your knee in smooth, circular motions in the air.",
    "muscles": "Hip Capsule, Gluteals & Iliopsoas",
    "modifications": [
      "Rest toe lightly on floor while drawing circles.",
      "Keep circular range small."
    ],
    "safety": "Stop if sharp clicking or pinching occurs.",
    "animType": "hip_opener"
  },
  {
    "id": "seated-quad-holds",
    "title": "Seated Isometric Quad Lock",
    "category": "Seated Lower Body",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Knee Cartilage Care, High BMI",
    "mode": "reps",
    "targetReps": 8,
    "met": 2.2,
    "points": 50,
    "audioTrack": "FitFeed Coach • Quad Tone",
    "caption": "Straighten leg forward, flex quad muscle tight for 4 seconds, then softly lower.",
    "muscles": "Vastus Medialis & Rectus Femoris",
    "modifications": [
      "Hold for 2 seconds instead of 4.",
      "Rest foot on low stool if lifting is heavy."
    ],
    "safety": "Keep knee slightly soft, do not forcefully hyperextend.",
    "animType": "knee_ext"
  },
  {
    "id": "seated-seated-kicks",
    "title": "Alternating Seated Front Kicks",
    "category": "Seated Lower Body",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Leg Circulation, Beginners",
    "mode": "reps",
    "targetReps": 14,
    "met": 2.5,
    "points": 55,
    "audioTrack": "FitFeed Coach • Fluid Kicks",
    "caption": "Kick one foot forward softly, lower down, and immediately kick the opposite foot.",
    "muscles": "Quadriceps & Hip Flexors",
    "modifications": [
      "Keep kicks low toward floor.",
      "Hold onto chair arms for core stability."
    ],
    "safety": "Never snap knees rigidly at top of motion.",
    "animType": "knee_ext"
  },
  {
    "id": "seated-glute-squeezes",
    "title": "Seated Glute Clenches",
    "category": "Seated Lower Body",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Desk Slump, Pelvic Floor Tone",
    "mode": "reps",
    "targetReps": 15,
    "met": 2,
    "points": 45,
    "audioTrack": "FitFeed Coach • Glute Awakening",
    "caption": "Squeeze both buttock muscles together to lift yourself slightly in your seat. Hold 2s, relax.",
    "muscles": "Gluteus Maximus & Pelvic Diaphragm",
    "modifications": [
      "Squeeze one side at a time (glute walk).",
      "Keep spine tall and relaxed."
    ],
    "safety": "Avoid holding your breath while clenching.",
    "animType": "pelvic_tilt"
  },
  {
    "id": "seated-ankle-inversion",
    "title": "Ankle Inversion & Eversion Rockers",
    "category": "Seated Lower Body",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Ankle Sprain Prevention, Balance",
    "mode": "reps",
    "targetReps": 16,
    "met": 1.9,
    "points": 45,
    "audioTrack": "FitFeed Coach • Subtalar Stability",
    "caption": "Rock feet onto their outer edges, then roll softly onto their inner arches.",
    "muscles": "Peroneus Longus & Brevis, Tibialis Posterior",
    "modifications": [
      "Rock within small gentle perimeter.",
      "Perform with socks on smooth flooring."
    ],
    "safety": "Never force past comfortable lateral ankle tension.",
    "animType": "ankle_circle"
  },
  {
    "id": "seated-figure-4-stretch",
    "title": "Seated Figure-4 Hip Cradle",
    "category": "Seated Lower Body",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Piriformis Relief, Sciatica Prevention",
    "mode": "timer",
    "duration": 35,
    "met": 2,
    "points": 50,
    "audioTrack": "FitFeed Coach • Sciatic Ease",
    "caption": "Cross right ankle over left shin or knee. Sit tall and lean gently forward.",
    "muscles": "Piriformis, Gemelli & Gluteus Medius",
    "modifications": [
      "Cross ankle at ankle level instead of knee if hip is tight.",
      "Stay upright without forward lean."
    ],
    "safety": "Prohibited for individuals with posterior hip replacement precautions without doctor clearance.",
    "animType": "hamstring_hinge"
  },
  {
    "id": "seated-seated-leg-lift",
    "title": "Seated Straight Leg Raise",
    "category": "Seated Lower Body",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Quad Power, Seniors",
    "mode": "reps",
    "targetReps": 10,
    "met": 2.6,
    "points": 55,
    "audioTrack": "FitFeed Coach • Leg Strength",
    "caption": "Straighten leg, lift entire leg 2 to 3 inches off seat, hold 1s, then lower gently.",
    "muscles": "Rectus Femoris & Iliopsoas",
    "modifications": [
      "Slide foot out on floor without lifting high.",
      "Keep back braced firmly against backrest."
    ],
    "safety": "Do not let lower back arch away from chair.",
    "animType": "knee_ext"
  },
  {
    "id": "seated-side-leg-lift",
    "title": "Seated Hip Abduction Lifts",
    "category": "Seated Lower Body",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Lateral Hip Strength, Fall Prevention",
    "mode": "reps",
    "targetReps": 12,
    "met": 2.3,
    "points": 50,
    "audioTrack": "FitFeed Coach • Outer Hip Tone",
    "caption": "Lift right knee slightly and move leg outward to the side, then return to center.",
    "muscles": "Gluteus Medius & Tensor Fasciae Latae",
    "modifications": [
      "Slide foot across floor instead of lifting.",
      "Hold seat base for stability."
    ],
    "safety": "Keep torso facing squarely forward.",
    "animType": "side_tap"
  },
  {
    "id": "seated-calf-stretch",
    "title": "Seated Achilles & Calf Lengthener",
    "category": "Seated Lower Body",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Plantar Fasciitis, Morning Stiffness",
    "mode": "timer",
    "duration": 30,
    "met": 1.8,
    "points": 45,
    "audioTrack": "FitFeed Coach • Soleus Release",
    "caption": "Straighten leg forward with heel down. Pull toes back toward knee until calf feels a pleasant stretch.",
    "muscles": "Gastrocnemius & Achilles Tendon",
    "modifications": [
      "Loop a small towel around ball of foot to assist pull.",
      "Keep knee softly bent if hamstring feels tight."
    ],
    "safety": "Do not yank or bounce; maintain gentle static hold.",
    "animType": "hamstring_hinge"
  },
  {
    "id": "seated-toe-curls",
    "title": "Seated Towel Scrunches",
    "category": "Seated Lower Body",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Arch Strength, Balance, Neuropathy",
    "mode": "reps",
    "targetReps": 15,
    "met": 1.7,
    "points": 40,
    "audioTrack": "FitFeed Coach • Foot Arch Tone",
    "caption": "Curl toes downward as if scrunching an imaginary towel underneath your foot.",
    "muscles": "Flexor Digitorum Brevis & Plantar Muscles",
    "modifications": [
      "Perform on carpeted floor.",
      "Can be done with actual washcloth for tactile feedback."
    ],
    "safety": "If arch cramps, instantly splay toes upward.",
    "animType": "heel_tap"
  },
  {
    "id": "seated-quad-pulse",
    "title": "Seated Quad Micro-Pulses",
    "category": "Seated Lower Body",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Muscle Endurance, High BMI",
    "mode": "timer",
    "duration": 25,
    "met": 2.4,
    "points": 50,
    "audioTrack": "FitFeed Coach • Pulse Burn",
    "caption": "Extend leg forward halfway. Pulse leg up and down 1 inch in small rhythmic pulses.",
    "muscles": "Quadriceps & Vastus Lateralis",
    "modifications": [
      "Pulse for 10s, rest, then repeat.",
      "Keep heel lightly touching ground during rest."
    ],
    "safety": "Keep movements small and controlled.",
    "animType": "knee_ext"
  },
  {
    "id": "seated-cross-ankle-swivel",
    "title": "Crossed Ankle Swivel",
    "category": "Seated Lower Body",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Ankle Mobility, Desk Comfort",
    "mode": "timer",
    "duration": 30,
    "met": 1.8,
    "points": 40,
    "audioTrack": "FitFeed Coach • Ankle Release",
    "caption": "Cross one ankle over the other near the floor. Swivel the top foot side to side smoothly.",
    "muscles": "Ankle Capsule & Tibialis Anterior",
    "modifications": [
      "Keep heels on floor throughout.",
      "Switch crossed ankles halfway."
    ],
    "safety": "Keep movements gentle and unforced.",
    "animType": "ankle_circle"
  },
  {
    "id": "seated-shin-taps",
    "title": "Seated Shin & Heel Tap Waves",
    "category": "Seated Lower Body",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Neuromuscular Coordination, Seniors",
    "mode": "reps",
    "targetReps": 18,
    "met": 2.2,
    "points": 50,
    "audioTrack": "FitFeed Coach • Cadence Flow",
    "caption": "Tap right heel, then right toe, then left heel, then left toe in a soothing 4-count rhythm.",
    "muscles": "Tibialis Anterior & Soleus",
    "modifications": [
      "Perform with one foot at a time.",
      "Count aloud to engage cognitive coordination."
    ],
    "safety": "Relax shoulders and maintain steady breathing.",
    "animType": "heel_tap"
  },
  {
    "id": "seated-marching-twist",
    "title": "Seated March with Opposite Knee Tap",
    "category": "Seated Lower Body",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Cross-Body Brain Integration, Balance",
    "mode": "reps",
    "targetReps": 16,
    "met": 2.9,
    "points": 60,
    "audioTrack": "FitFeed Coach • Bilateral Cross",
    "caption": "Lift right knee and touch gently with left hand. Lower, then lift left knee to right hand.",
    "muscles": "Core Obliques & Hip Flexors",
    "modifications": [
      "Touch thigh instead of knee if lifting is tiring.",
      "Keep movements slow and deliberate."
    ],
    "safety": "Keep chest proud, do not stoop forward excessively.",
    "animType": "march"
  },
  {
    "id": "seated-butterfly-flutters",
    "title": "Seated Gentle Butterfly Flutters",
    "category": "Seated Lower Body",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Inner Thigh Flexibility, Relaxation",
    "mode": "timer",
    "duration": 30,
    "met": 2,
    "points": 45,
    "audioTrack": "FitFeed Coach • Gentle Flutters",
    "caption": "Open knees outward with soles closer together, gently fluttering knees like butterfly wings.",
    "muscles": "Hip Adductors & Groin",
    "modifications": [
      "Keep feet flat on floor instead of touching soles.",
      "Keep flutter range very small."
    ],
    "safety": "Never press down on knees with hands.",
    "animType": "hip_opener"
  },
  {
    "id": "seated-leg-cradle",
    "title": "Seated Lower Leg Cradle",
    "category": "Seated Lower Body",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Hip External Rotation, Seniors",
    "mode": "timer",
    "duration": 30,
    "met": 2.1,
    "points": 45,
    "audioTrack": "FitFeed Coach • Hip Freedom",
    "caption": "Gently hold shin with both hands and rock side to side softly like rocking a baby.",
    "muscles": "Gluteus Medius & Deep Hip Rotators",
    "modifications": [
      "Rest foot on opposite ankle instead of holding in air.",
      "Perform rocking while foot rests on a yoga block."
    ],
    "safety": "Keep knee at a comfortable angle without twisting.",
    "animType": "hip_opener"
  },
  {
    "id": "seated-heel-slides",
    "title": "Seated Smooth Heel Slides",
    "category": "Seated Lower Body",
    "filterTag": "seated",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Post-Surgical Knee Rehab, Seniors",
    "mode": "reps",
    "targetReps": 12,
    "met": 2.2,
    "points": 50,
    "audioTrack": "FitFeed Coach • Synovial Glide",
    "caption": "Slide right heel forward along the floor until leg is straight, then slide softly back.",
    "muscles": "Hamstrings & Quadriceps",
    "modifications": [
      "Place a towel or paper plate under foot on smooth flooring.",
      "Slide only as far as comfortable."
    ],
    "safety": "Maintain even pressure; avoid sudden jerks.",
    "animType": "knee_ext"
  },
  {
    "id": "wall-push-ups",
    "title": "Supported Wall Push-ups",
    "category": "Supported Strength",
    "filterTag": "strength",
    "impactTag": "Joint Friendly",
    "suitableFor": "Upper Body Strength, High BMI, Seniors",
    "mode": "reps",
    "targetReps": 10,
    "met": 3.2,
    "points": 65,
    "audioTrack": "FitFeed Coach • Gentle Power",
    "caption": "Place hands shoulder-width on wall. Bend elbows to bring chest toward wall, then press back.",
    "muscles": "Pectoralis Major, Anterior Deltoids & Triceps",
    "modifications": [
      "Stand closer to wall for lighter resistance.",
      "Place palms flat or use light fists if wrists ache."
    ],
    "safety": "Ensure non-slip shoes and dry floor before starting.",
    "animType": "wall_push"
  },
  {
    "id": "wall-angel-slides",
    "title": "Wall Angel Arm Slides",
    "category": "Supported Strength",
    "filterTag": "strength",
    "impactTag": "Postural Restoration",
    "suitableFor": "Hunched Upper Back, Shoulder Mobility",
    "mode": "reps",
    "targetReps": 10,
    "met": 2.6,
    "points": 55,
    "audioTrack": "FitFeed Coach • Scapular Glide",
    "caption": "Stand with back against wall. Slide elbows and wrists upward like making a snow angel.",
    "muscles": "Rhomboids, Middle Trapezius & Rotator Cuff",
    "modifications": [
      "Keep elbows slightly off wall if touching causes pinch.",
      "Can be done seated against a high-backed chair."
    ],
    "safety": "Do not arch lower back away from the wall.",
    "animType": "wall_angel"
  },
  {
    "id": "chair-supported-squats",
    "title": "Chair Sit-to-Stand Tap",
    "category": "Supported Strength",
    "filterTag": "strength",
    "impactTag": "Functional Strength",
    "suitableFor": "Leg Independence, Daily Mobility, Seniors",
    "mode": "reps",
    "targetReps": 8,
    "met": 3.5,
    "points": 70,
    "audioTrack": "FitFeed Coach • Functional Power",
    "caption": "Rise partially or fully from chair with feet planted, then lower down softly under control.",
    "muscles": "Gluteus Maximus, Quadriceps & Core",
    "modifications": [
      "Push off chair armrests with both hands.",
      "Place feet slightly wider than hip-width for balance."
    ],
    "safety": "Ensure chair is sturdy against a wall so it cannot slide.",
    "animType": "squat_tap"
  },
  {
    "id": "countertop-calf-raises",
    "title": "Supported Countertop Calf Raises",
    "category": "Supported Strength",
    "filterTag": "strength",
    "impactTag": "Balance & Stability",
    "suitableFor": "Fall Prevention, Ankle Strength, Seniors",
    "mode": "reps",
    "targetReps": 12,
    "met": 2.8,
    "points": 55,
    "audioTrack": "FitFeed Coach • Ankle Power",
    "caption": "Lightly hold a countertop or chair back. Rise onto balls of both feet, hold 1s, lower slowly.",
    "muscles": "Gastrocnemius, Soleus & Plantar Fascia",
    "modifications": [
      "Keep both hands resting securely on surface.",
      "Can be performed seated by lifting heels high."
    ],
    "safety": "Distribute weight evenly across the balls of both feet.",
    "animType": "calf_raise"
  },
  {
    "id": "wall-chest-stretch",
    "title": "Wall Supported Chest Opener",
    "category": "Supported Strength",
    "filterTag": "strength",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Rounded Shoulders, Breathing Volume",
    "mode": "timer",
    "duration": 30,
    "met": 2,
    "points": 45,
    "audioTrack": "FitFeed Coach • Heart Opening",
    "caption": "Place forearm flat against wall. Step forward gently until a soft stretch opens chest.",
    "muscles": "Pectoralis Major & Biceps",
    "modifications": [
      "Keep elbow lower than shoulder height.",
      "Can be done by clasping hands behind chair."
    ],
    "safety": "Never twist aggressively away from the wall.",
    "animType": "chest_stretch"
  },
  {
    "id": "countertop-side-leg-raise",
    "title": "Supported Side Leg Lifts",
    "category": "Supported Strength",
    "filterTag": "strength",
    "impactTag": "Balance & Stability",
    "suitableFor": "Hip Stability, Fall Prevention",
    "mode": "reps",
    "targetReps": 10,
    "met": 2.7,
    "points": 55,
    "audioTrack": "FitFeed Coach • Hip Abduction",
    "caption": "Hold chair back. Lift one leg out to side with toes pointing forward, then lower under control.",
    "muscles": "Gluteus Medius & Core Stabilizers",
    "modifications": [
      "Lift only 3 to 4 inches off floor.",
      "Keep standing knee slightly soft."
    ],
    "safety": "Do not tilt upper body deeply to side to cheat height.",
    "animType": "side_step"
  },
  {
    "id": "countertop-standing-march",
    "title": "Supported Standing High Knees",
    "category": "Supported Strength",
    "filterTag": "strength",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Cardio Conditioning, Seniors, High BMI",
    "mode": "reps",
    "targetReps": 16,
    "met": 3.1,
    "points": 60,
    "audioTrack": "FitFeed Coach • Rhythmic March",
    "caption": "Hold sturdy counter. March in place, lifting knees to comfortable height.",
    "muscles": "Hip Flexors, Quadriceps & Calves",
    "modifications": [
      "Lift knees only a few inches off floor.",
      "Hold with both hands for maximum balance."
    ],
    "safety": "Land gently on mid-foot without slamming.",
    "animType": "standing_march"
  },
  {
    "id": "wall-plank-hold",
    "title": "Supported Wall Plank Hold",
    "category": "Supported Strength",
    "filterTag": "strength",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Core Strength, No Floor Mat Needed",
    "mode": "timer",
    "duration": 25,
    "met": 2.8,
    "points": 55,
    "audioTrack": "FitFeed Coach • Core Pillar",
    "caption": "Place forearms against wall at shoulder height. Step back into a straight diagonal line. Hold.",
    "muscles": "Transverse Abdominis & Serratus Anterior",
    "modifications": [
      "Stand closer to wall to make hold gentler.",
      "Take small rests every 8 seconds."
    ],
    "safety": "Keep hips in line with shoulders; do not sag lower back.",
    "animType": "wall_push"
  },
  {
    "id": "supported-tandem-balance",
    "title": "Supported Heel-to-Toe Tandem Balance",
    "category": "Supported Strength",
    "filterTag": "strength",
    "impactTag": "Balance & Stability",
    "suitableFor": "Fall Prevention, Vestibular Training",
    "mode": "timer",
    "duration": 30,
    "met": 2.1,
    "points": 50,
    "audioTrack": "FitFeed Coach • Equilibrium Reset",
    "caption": "Place one foot directly in front of the other like on a tightrope while holding counter. Stand tall.",
    "muscles": "Ankle Stabilizers & Proprioceptors",
    "modifications": [
      "Stagger feet slightly wider if tandem is too narrow.",
      "Keep both hands hovering right above counter."
    ],
    "safety": "Always maintain counter within immediate hand grasp.",
    "animType": "balance_hold"
  },
  {
    "id": "wall-supported-squat",
    "title": "Wall Supported Micro-Slide",
    "category": "Supported Strength",
    "filterTag": "strength",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Thigh Endurance, High BMI",
    "mode": "reps",
    "targetReps": 8,
    "met": 3,
    "points": 60,
    "audioTrack": "FitFeed Coach • Wall Power",
    "caption": "Lean back against wall. Slide down 3 to 4 inches into a gentle micro-squat, hold 2s, slide up.",
    "muscles": "Quadriceps & Gluteals",
    "modifications": [
      "Slide down only 2 inches.",
      "Place an exercise ball behind back for smoother roll."
    ],
    "safety": "Do not allow knees to travel past toes.",
    "animType": "squat_tap"
  },
  {
    "id": "countertop-hamstring-curls",
    "title": "Supported Standing Hamstring Curls",
    "category": "Supported Strength",
    "filterTag": "strength",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Hamstring Tone, Knee Stability",
    "mode": "reps",
    "targetReps": 12,
    "met": 2.6,
    "points": 55,
    "audioTrack": "FitFeed Coach • Hamstring Pull",
    "caption": "Hold counter. Bend one knee to bring heel toward buttock, then lower smoothly.",
    "muscles": "Biceps Femoris & Semitendinosus",
    "modifications": [
      "Lift heel only halfway up.",
      "Hold counter with both hands."
    ],
    "safety": "Keep thighs parallel; do not swing thigh forward.",
    "animType": "standing_march"
  },
  {
    "id": "supported-single-leg-stance",
    "title": "Supported Flamingo Balance",
    "category": "Supported Strength",
    "filterTag": "strength",
    "impactTag": "Balance & Stability",
    "suitableFor": "Senior Independence, Fall Risk Reduction",
    "mode": "timer",
    "duration": 25,
    "met": 2.2,
    "points": 50,
    "audioTrack": "FitFeed Coach • Single Leg Anchor",
    "caption": "Hold counter lightly. Lift one foot 2 inches off floor and balance on supporting leg.",
    "muscles": "Gluteus Medius & Ankle Stabilizers",
    "modifications": [
      "Keep toe of lifted foot touching floor for balance.",
      "Hold counter firmly with both hands."
    ],
    "safety": "Maintain counter contact if feeling unsteady.",
    "animType": "balance_hold"
  },
  {
    "id": "countertop-glute-kickbacks",
    "title": "Supported Standing Glute Kickback",
    "category": "Supported Strength",
    "filterTag": "strength",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Hip Extension, Posture, Seniors",
    "mode": "reps",
    "targetReps": 12,
    "met": 2.7,
    "points": 55,
    "audioTrack": "FitFeed Coach • Glute Reach",
    "caption": "Hold counter. Press one leg straight back behind you, squeezing buttock. Lower softly.",
    "muscles": "Gluteus Maximus & Hamstrings",
    "modifications": [
      "Keep movement small (4 to 6 inches).",
      "Do not arch lower back."
    ],
    "safety": "Keep core firm to protect lumbar spine.",
    "animType": "side_step"
  },
  {
    "id": "wall-tricep-press",
    "title": "Supported Wall Tricep Press",
    "category": "Supported Strength",
    "filterTag": "strength",
    "impactTag": "Joint Friendly",
    "suitableFor": "Arm Strength, Seniors",
    "mode": "reps",
    "targetReps": 10,
    "met": 2.8,
    "points": 55,
    "audioTrack": "FitFeed Coach • Tricep Push",
    "caption": "Place forearms flat against wall. Push through palms to straighten arms, engaging triceps.",
    "muscles": "Triceps Brachii & Anconeus",
    "modifications": [
      "Stand closer to wall to minimize resistance.",
      "Move within small 3-inch range."
    ],
    "safety": "Keep elbows pointed straight down.",
    "animType": "wall_push"
  },
  {
    "id": "countertop-side-step",
    "title": "Supported Lateral Step-Touch",
    "category": "Supported Strength",
    "filterTag": "strength",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Agility, Cardio, High BMI",
    "mode": "reps",
    "targetReps": 16,
    "met": 2.9,
    "points": 60,
    "audioTrack": "FitFeed Coach • Lateral Dance",
    "caption": "Step right foot sideways, tap left foot next to it, then step left and tap right.",
    "muscles": "Adductors, Abductors & Calves",
    "modifications": [
      "Keep hands sliding along counter for balance.",
      "Take small comfortable steps."
    ],
    "safety": "Keep knees slightly springy; never lock knees.",
    "animType": "side_step"
  },
  {
    "id": "wall-downward-dog",
    "title": "Supported Wall Downward Dog",
    "category": "Supported Strength",
    "filterTag": "strength",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Spine Decompression, Hamstring Length",
    "mode": "timer",
    "duration": 30,
    "met": 2.1,
    "points": 50,
    "audioTrack": "FitFeed Coach • Spine Length",
    "caption": "Place hands on wall at chest height. Walk feet back and hinge at hips until torso is parallel to floor.",
    "muscles": "Latissimus Dorsi, Spine & Hamstrings",
    "modifications": [
      "Keep knees softly bent.",
      "Keep hands higher on wall for gentler stretch."
    ],
    "safety": "Do not let head drop lower than arms.",
    "animType": "hamstring_hinge"
  },
  {
    "id": "countertop-hip-hinge",
    "title": "Supported Good-Morning Hinge",
    "category": "Supported Strength",
    "filterTag": "strength",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Lifting Safety, Hamstrings",
    "mode": "reps",
    "targetReps": 10,
    "met": 2.5,
    "points": 50,
    "audioTrack": "FitFeed Coach • Hip Hinge Form",
    "caption": "Hold counter. Push hips backward with soft knees and flat back, then return upright.",
    "muscles": "Hamstrings, Gluteals & Erector Spinae",
    "modifications": [
      "Hinge only 30 degrees forward.",
      "Keep knees comfortably bent."
    ],
    "safety": "Never round lower back during the hinge.",
    "animType": "hamstring_hinge"
  },
  {
    "id": "doorframe-lat-stretch",
    "title": "Supported Doorframe Lat Hang",
    "category": "Supported Strength",
    "filterTag": "strength",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Shoulder Range, Rib Cage Decompression",
    "mode": "timer",
    "duration": 30,
    "met": 1.9,
    "points": 45,
    "audioTrack": "FitFeed Coach • Lat Lengthener",
    "caption": "Hold doorframe with both hands at chest level. Lean hips back softly to stretch back muscles.",
    "muscles": "Latissimus Dorsi & Teres Major",
    "modifications": [
      "Keep feet close to doorframe for minimal lean.",
      "Can be done holding countertop edge."
    ],
    "safety": "Hold with full grip, ensure dry non-slip hands.",
    "animType": "hamstring_hinge"
  },
  {
    "id": "supported-heel-rockers",
    "title": "Supported Standing Heel-Toe Rockers",
    "category": "Supported Strength",
    "filterTag": "strength",
    "impactTag": "Balance & Stability",
    "suitableFor": "Walking Mechanics, Seniors",
    "mode": "reps",
    "targetReps": 16,
    "met": 2.4,
    "points": 50,
    "audioTrack": "FitFeed Coach • Ankle Balance",
    "caption": "Hold counter. Rock onto heels lifting toes, then rock onto toes lifting heels.",
    "muscles": "Tibialis Anterior & Gastrocnemius",
    "modifications": [
      "Keep movements small (1 inch).",
      "Keep both hands firmly on counter."
    ],
    "safety": "Avoid leaning torso backward during heel lift.",
    "animType": "calf_raise"
  },
  {
    "id": "countertop-torso-twist",
    "title": "Supported Standing Torso Twist",
    "category": "Supported Strength",
    "filterTag": "strength",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Spinal Rotation, Desk Relief",
    "mode": "timer",
    "duration": 30,
    "met": 2.2,
    "points": 50,
    "audioTrack": "FitFeed Coach • Rotational Release",
    "caption": "Stand with feet planted, holding counter with one hand. Rotate upper torso softly away and back.",
    "muscles": "Obliques & Thoracic Spine",
    "modifications": [
      "Keep rotation within 30 degrees.",
      "Switch hands halfway through."
    ],
    "safety": "Keep hips facing forward; rotate only through mid-back.",
    "animType": "torso_twist"
  },
  {
    "id": "seated-cat-cow",
    "title": "Seated Cat-Cow Waves",
    "category": "Spine & Posture",
    "filterTag": "spine",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Desk Slump, Lower Back Stiffness",
    "mode": "timer",
    "duration": 35,
    "met": 2.2,
    "points": 55,
    "audioTrack": "FitFeed Coach • Deep Breath Flow",
    "caption": "Decompresses the lumbar vertebrae. Inhale softly on forward arch, exhale on gentle rounding.",
    "muscles": "Erector Spinae, Latissimus & Diaphragm",
    "modifications": [
      "Position knees wider apart for comfortable abdominal room.",
      "Keep movement small and fluid; avoid aggressive flexion."
    ],
    "safety": "Do not hyperextend cervical neck. Keep eye gaze natural.",
    "animType": "cat_cow"
  },
  {
    "id": "seated-torso-twist",
    "title": "Gentle Seated Torso Twist",
    "category": "Spine & Posture",
    "filterTag": "spine",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Mid-Back Tension, Digestive Ease",
    "mode": "timer",
    "duration": 30,
    "met": 2.2,
    "points": 50,
    "audioTrack": "FitFeed Coach • Rotational Release",
    "caption": "Gently rotate through your mid-spine while keeping both sit-bones firmly anchored to seat.",
    "muscles": "Internal & External Obliques, Thoracic Spine",
    "modifications": [
      "Rotate only 15 to 20 degrees; focus on tall posture.",
      "Hold chair armrest to support the stretch softly."
    ],
    "safety": "Never torque or twist using ballistic momentum.",
    "animType": "torso_twist"
  },
  {
    "id": "seated-side-reach",
    "title": "Seated Side Reach",
    "category": "Spine & Posture",
    "filterTag": "spine",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Shallow Breathing, Ribcage Stiffness",
    "mode": "reps",
    "targetReps": 8,
    "met": 2.3,
    "points": 50,
    "audioTrack": "FitFeed Coach • Side Body Opening",
    "caption": "Expands lateral ribcage space for deeper lung volume and releases tight side back muscles.",
    "muscles": "Quadratus Lumborum, Intercostals & Latissimus",
    "modifications": [
      "Keep hand on shoulder rather than reaching overhead.",
      "Hold onto chair frame with non-reaching hand."
    ],
    "safety": "Keep both hips firmly grounded on seat to prevent tipping.",
    "animType": "side_reach"
  },
  {
    "id": "seated-row-pulls",
    "title": "Seated Scapular Row Pulls",
    "category": "Spine & Posture",
    "filterTag": "spine",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Slumped Posture, Desk Fatigue",
    "mode": "reps",
    "targetReps": 12,
    "met": 2.5,
    "points": 55,
    "audioTrack": "FitFeed Coach • Upper Back Activation",
    "caption": "Reach forward gently, then pull elbows backward while squeezing shoulder blades softly together.",
    "muscles": "Rhomboids, Latissimus Dorsi & Posterior Deltoids",
    "modifications": [
      "Keep elbows lower by your ribs.",
      "Sit against backrest for spinal support."
    ],
    "safety": "Avoid shrugging shoulders up toward ears.",
    "animType": "row_pull"
  },
  {
    "id": "neck-side-tilts",
    "title": "Gentle Neck Side Tilts",
    "category": "Spine & Posture",
    "filterTag": "spine",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Tension Headaches, Upper Back Stiffness",
    "mode": "timer",
    "duration": 30,
    "met": 1.8,
    "points": 40,
    "audioTrack": "FitFeed Coach • Cervical Release",
    "caption": "Slowly tilt right ear toward right shoulder. Pause for 2 breaths, then softly switch to left.",
    "muscles": "Upper Trapezius, Scalenes & Sternocleidomastoid",
    "modifications": [
      "Move only a few inches; never force ear to shoulder.",
      "Rest hands comfortably in lap."
    ],
    "safety": "Never pull or press your head with your hand. Gravity alone is sufficient.",
    "animType": "neck_tilt"
  },
  {
    "id": "chin-tuck-retractions",
    "title": "Postural Chin Tucks",
    "category": "Spine & Posture",
    "filterTag": "spine",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Tech Neck, Forward Head Posture",
    "mode": "reps",
    "targetReps": 10,
    "met": 1.8,
    "points": 45,
    "audioTrack": "FitFeed Coach • Alignment Reset",
    "caption": "Draw your chin straight backward as if making a gentle double chin. Hold 2s, release.",
    "muscles": "Longus Colli, Deep Cervical Flexors",
    "modifications": [
      "Touch two fingers lightly to chin to guide head straight back.",
      "Keep back firmly against backrest."
    ],
    "safety": "Do not tilt head downward; glide horizontally backward.",
    "animType": "chin_tuck"
  },
  {
    "id": "seated-thoracic-extension",
    "title": "Seated Thoracic Arch over Backrest",
    "category": "Spine & Posture",
    "filterTag": "spine",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Hunchback Reversal, Rib Expansion",
    "mode": "reps",
    "targetReps": 8,
    "met": 2.1,
    "points": 50,
    "audioTrack": "FitFeed Coach • Thoracic Freedom",
    "caption": "Cup hands behind head. Gently arch upper back over chair backrest, opening chest to ceiling.",
    "muscles": "Thoracic Spine & Anterior Longitudinal Ligament",
    "modifications": [
      "Cross arms over chest instead of behind head.",
      "Place a folded towel behind upper back for cushion."
    ],
    "safety": "Do not hyperextend lower back; move only from mid-back.",
    "animType": "thoracic_ext"
  },
  {
    "id": "seated-shoulder-blade-pinch",
    "title": "Scapular Diamond Squeeze",
    "category": "Spine & Posture",
    "filterTag": "spine",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Upper Back Weakness, Posture",
    "mode": "reps",
    "targetReps": 12,
    "met": 2,
    "points": 45,
    "audioTrack": "FitFeed Coach • Scapular Power",
    "caption": "Bend elbows at sides. Pull elbows backward and pinch shoulder blades together like holding a pencil.",
    "muscles": "Middle Trapezius & Rhomboid Major",
    "modifications": [
      "Hold squeeze for 2 seconds instead of 4.",
      "Perform with hands resting on thighs."
    ],
    "safety": "Keep neck elongated and shoulders down away from ears.",
    "animType": "row_pull"
  },
  {
    "id": "neck-rotations",
    "title": "Slow Cervical Rotations",
    "category": "Spine & Posture",
    "filterTag": "spine",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Neck Stiffness, Safe Driving Checks",
    "mode": "timer",
    "duration": 30,
    "met": 1.7,
    "points": 40,
    "audioTrack": "FitFeed Coach • Neck Mobility",
    "caption": "Turn head slowly to gaze over right shoulder. Pause, then softly turn to gaze over left shoulder.",
    "muscles": "Sternocleidomastoid & Splenius Capitis",
    "modifications": [
      "Turn only 45 degrees if turning causes dizziness.",
      "Keep eyes level on horizon."
    ],
    "safety": "Never roll head backward in full circular neck rolls.",
    "animType": "neck_tilt"
  },
  {
    "id": "seated-spinal-waves",
    "title": "Seated Spinal Wave Undulations",
    "category": "Spine & Posture",
    "filterTag": "spine",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Vertebral Lubrication, Fluid Movement",
    "mode": "timer",
    "duration": 30,
    "met": 2.2,
    "points": 50,
    "audioTrack": "FitFeed Coach • Spinal Fluidity",
    "caption": "Initiate a gentle wave from tailbone up through crown of head, flexing and extending smoothly.",
    "muscles": "Multifidus, Erector Spinae & Rectus Abdominis",
    "modifications": [
      "Make waves very subtle.",
      "Support hands on thighs throughout."
    ],
    "safety": "Keep breathing rhythmic and unhurried.",
    "animType": "cat_cow"
  },
  {
    "id": "seated-shoulder-shrugs",
    "title": "Elevation & Depression Shrugs",
    "category": "Spine & Posture",
    "filterTag": "spine",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Stress Relief, Shoulder Release",
    "mode": "reps",
    "targetReps": 14,
    "met": 1.9,
    "points": 40,
    "audioTrack": "FitFeed Coach • Tension Drop",
    "caption": "Draw shoulders up toward ears, hold 1s, then exhale and drop them down completely.",
    "muscles": "Upper & Lower Trapezius",
    "modifications": [
      "Let arms hang heavy at sides.",
      "Shrug one shoulder at a time."
    ],
    "safety": "Do not hold tension at the top; release fully on exhale.",
    "animType": "shoulder_roll"
  },
  {
    "id": "seated-chest-expansion",
    "title": "Seated Hands-Behind-Back Opener",
    "category": "Spine & Posture",
    "filterTag": "spine",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Collapsed Chest, Deep Breathing",
    "mode": "timer",
    "duration": 30,
    "met": 2.1,
    "points": 45,
    "audioTrack": "FitFeed Coach • Clavicle Width",
    "caption": "Clasp hands behind lower back or hold chair backrest. Roll shoulders open and lift collarbones.",
    "muscles": "Pectoralis Minor & Anterior Deltoid",
    "modifications": [
      "Hold a strap or towel between hands if reaching is tight.",
      "Rest hands flat on back of hips."
    ],
    "safety": "Avoid pushing head forward as shoulders open.",
    "animType": "goalpost"
  },
  {
    "id": "seated-side-bend-glide",
    "title": "Seated Lateral Teapot Tilt",
    "category": "Spine & Posture",
    "filterTag": "spine",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Waistline Flexibility, Breathing Room",
    "mode": "reps",
    "targetReps": 12,
    "met": 2.2,
    "points": 50,
    "audioTrack": "FitFeed Coach • Lateral Flex",
    "caption": "Let right hand slide down chair leg toward floor while tilting torso. Return to center, slide left.",
    "muscles": "Quadratus Lumborum & External Obliques",
    "modifications": [
      "Slide down only 3 to 4 inches.",
      "Keep other hand on hip for stability."
    ],
    "safety": "Keep both buttocks pressed evenly into chair seat.",
    "animType": "side_reach"
  },
  {
    "id": "seated-overhead-y-hold",
    "title": "Seated Victory-Y Posture Hold",
    "category": "Spine & Posture",
    "filterTag": "spine",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Low Energy, Depressed Mood, Slump",
    "mode": "timer",
    "duration": 30,
    "met": 2.3,
    "points": 50,
    "audioTrack": "FitFeed Coach • Victory Lift",
    "caption": "Extend both arms upward in a wide 'Y' shape. Draw shoulder blades down while lifting crown.",
    "muscles": "Lower Trapezius & Serratus Anterior",
    "modifications": [
      "Lower arms to goalpost shape if shoulders tire.",
      "Perform one arm at a time."
    ],
    "safety": "Keep ribs knitted down; avoid arching lower spine.",
    "animType": "overhead_reach"
  },
  {
    "id": "seated-head-press",
    "title": "Isometric Cervical Head Press",
    "category": "Spine & Posture",
    "filterTag": "spine",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Neck Strengthening, Whiplash Recovery",
    "mode": "reps",
    "targetReps": 8,
    "met": 1.7,
    "points": 40,
    "audioTrack": "FitFeed Coach • Cervical Anchor",
    "caption": "Place palm on forehead. Press head gently into hand while resisting all motion. Hold 3s.",
    "muscles": "Deep Cervical Flexors & Extensors",
    "modifications": [
      "Use only 20% gentle effort.",
      "Repeat with hand behind head."
    ],
    "safety": "Keep motion strictly isometric; no head movement occurs.",
    "animType": "chin_tuck"
  },
  {
    "id": "seated-bow-and-arrow",
    "title": "Seated Archer Torso Draw",
    "category": "Spine & Posture",
    "filterTag": "spine",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Thoracic Rotation & Scapular Pull",
    "mode": "reps",
    "targetReps": 10,
    "met": 2.4,
    "points": 50,
    "audioTrack": "FitFeed Coach • Archer Flow",
    "caption": "Reach both arms forward. Pull right elbow back like drawing a bowstring, turning torso gently.",
    "muscles": "Rhomboids, Posterior Deltoid & Obliques",
    "modifications": [
      "Keep gaze following elbow.",
      "Keep pulling elbow at chest height."
    ],
    "safety": "Rotate from ribcage, not lower spine.",
    "animType": "row_pull"
  },
  {
    "id": "seated-cross-shoulder-stretch",
    "title": "Seated Posterior Capsule Stretch",
    "category": "Spine & Posture",
    "filterTag": "spine",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Shoulder Impingement, Tight Deltoids",
    "mode": "timer",
    "duration": 30,
    "met": 1.9,
    "points": 45,
    "audioTrack": "FitFeed Coach • Deltoid Ease",
    "caption": "Draw right arm across chest. Use left hand to support forearm gently closer to body.",
    "muscles": "Posterior Deltoid & Infraspinatus",
    "modifications": [
      "Support arm under elbow rather than joint.",
      "Keep arm below shoulder level."
    ],
    "safety": "Do not twist your spine to force the stretch.",
    "animType": "cross_reach"
  },
  {
    "id": "seated-lumbar-decompression",
    "title": "Chair Armrest Decompression Push",
    "category": "Spine & Posture",
    "filterTag": "spine",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Lower Back Compression, Herniation Care",
    "mode": "reps",
    "targetReps": 6,
    "met": 2,
    "points": 45,
    "audioTrack": "FitFeed Coach • Spine Traction",
    "caption": "Place palms on chair armrests. Press downward gently to unload weight from lower spine. Hold 3s.",
    "muscles": "Latissimus Dorsi, Triceps & Spine Decompressors",
    "modifications": [
      "Keep buttocks touching seat; do not fully lift off.",
      "Use tabletop if chair lacks armrests."
    ],
    "safety": "Stop if shoulder discomfort occurs.",
    "animType": "wall_push"
  },
  {
    "id": "seated-rib-expansions",
    "title": "Ribcage Lateral Expansion Holds",
    "category": "Spine & Posture",
    "filterTag": "spine",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Intercostal Mobility, Lung Health",
    "mode": "timer",
    "duration": 35,
    "met": 1.8,
    "points": 45,
    "audioTrack": "FitFeed Coach • Intercostal Breath",
    "caption": "Place hands on outer ribcage. Inhale deeply, feeling ribs widen like an accordion. Exhale softly.",
    "muscles": "External & Internal Intercostals",
    "modifications": [
      "Perform with hands resting in lap if reaching ribs is tiring.",
      "Focus breath into lower ribs."
    ],
    "safety": "Breathe naturally without straining.",
    "animType": "breath"
  },
  {
    "id": "seated-prayer-extension",
    "title": "Seated Prayer Press & Lift",
    "category": "Spine & Posture",
    "filterTag": "spine",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Pectoral Activation & Spine Lift",
    "mode": "reps",
    "targetReps": 10,
    "met": 2.1,
    "points": 45,
    "audioTrack": "FitFeed Coach • Prayer Tone",
    "caption": "Press palms together in front of heart. Slowly raise hands toward forehead while maintaining light palm pressure.",
    "muscles": "Pectoralis Major & Deltoids",
    "modifications": [
      "Keep hands at heart level if overhead causes pinch.",
      "Press softly with 30% effort."
    ],
    "safety": "Keep forearms level and shoulders relaxed down.",
    "animType": "overhead_reach"
  },
  {
    "id": "box-breathing",
    "title": "4-4-4-4 Box Breathing",
    "category": "Mindful Breath",
    "filterTag": "breath",
    "impactTag": "Restorative",
    "suitableFor": "Anxiety Relief, Blood Pressure Care, Seniors",
    "mode": "timer",
    "duration": 48,
    "met": 1.5,
    "points": 40,
    "audioTrack": "FitFeed Coach • Vagus Nerve Calm",
    "caption": "Inhale 4s, hold 4s, exhale 4s, hold empty 4s. Activates parasympathetic recovery.",
    "muscles": "Diaphragm & Autonomic Nervous System",
    "modifications": [
      "Shorten cadence to 3-3-3-3 if 4 seconds feels too long.",
      "Skip holds and breathe continuously if blood pressure is high."
    ],
    "safety": "Breathe naturally. If dizziness occurs, return to normal breathing.",
    "animType": "breath"
  },
  {
    "id": "diaphragmatic-belly-breath",
    "title": "Diaphragmatic Belly Expansion",
    "category": "Mindful Breath",
    "filterTag": "breath",
    "impactTag": "Restorative",
    "suitableFor": "Oxygenation, Digestion, Relaxation",
    "mode": "timer",
    "duration": 40,
    "met": 1.5,
    "points": 40,
    "audioTrack": "FitFeed Coach • Diaphragm Awakening",
    "caption": "Place hand on belly. Inhale softly through nose, feeling belly balloon outward. Exhale gently.",
    "muscles": "Diaphragm & Transverse Abdominis",
    "modifications": [
      "Can be done seated or reclined in wheelchair.",
      "Breathe at your natural unhurried cadence."
    ],
    "safety": "Keep shoulders still; let only the belly expand.",
    "animType": "breath"
  },
  {
    "id": "4-7-8-relax-breath",
    "title": "4-7-8 Deep Sleep Reset",
    "category": "Mindful Breath",
    "filterTag": "breath",
    "impactTag": "Restorative",
    "suitableFor": "Insomnia, Evening Wind-Down, Seniors",
    "mode": "timer",
    "duration": 45,
    "met": 1.4,
    "points": 40,
    "audioTrack": "FitFeed Coach • Parasympathetic Ease",
    "caption": "Inhale quietly for 4s, hold for 7s, exhale completely through mouth with whoosh for 8s.",
    "muscles": "Vagus Nerve & Autonomic Recovery",
    "modifications": [
      "Shorten to 2-3-4 cadence if hold is tight.",
      "Skip hold entirely if hypertensive."
    ],
    "safety": "Never strain to hold breath. Stop if lightheaded.",
    "animType": "breath"
  },
  {
    "id": "pursed-lip-breathing",
    "title": "COPD Pursed-Lip Flow",
    "category": "Mindful Breath",
    "filterTag": "breath",
    "impactTag": "Restorative",
    "suitableFor": "Shortness of Breath, Asthma, Seniors",
    "mode": "timer",
    "duration": 40,
    "met": 1.5,
    "points": 40,
    "audioTrack": "FitFeed Coach • Airway Expansion",
    "caption": "Inhale through nose for 2s. Purse lips like whistling and blow out softly for 4s.",
    "muscles": "Bronchial Airways & Diaphragm",
    "modifications": [
      "Keep exhale twice as long as inhale.",
      "Rest hands flat on thighs."
    ],
    "safety": "Do not force air out; let exhale flow smoothly.",
    "animType": "breath"
  },
  {
    "id": "resonant-coherent-breath",
    "title": "Resonant 5-5 Coherent Breathing",
    "category": "Mindful Breath",
    "filterTag": "breath",
    "impactTag": "Restorative",
    "suitableFor": "Heart Rate Variability (HRV), Calm",
    "mode": "timer",
    "duration": 50,
    "met": 1.5,
    "points": 40,
    "audioTrack": "FitFeed Coach • Heart-Brain Harmony",
    "caption": "Inhale smoothly for 5 seconds, exhale smoothly for 5 seconds. Creates 6 breaths per minute balance.",
    "muscles": "Cardiovascular System & Vagus Nerve",
    "modifications": [
      "Adjust to 4-in 4-out if 5s feels prolonged.",
      "Breathe through nose only."
    ],
    "safety": "Maintain relaxed face and jaw throughout.",
    "animType": "breath"
  },
  {
    "id": "ocean-breath-ujjayi",
    "title": "Calming Ocean Sound Breath",
    "category": "Mindful Breath",
    "filterTag": "breath",
    "impactTag": "Restorative",
    "suitableFor": "Focus, Temperature Regulation, Seniors",
    "mode": "timer",
    "duration": 40,
    "met": 1.5,
    "points": 40,
    "audioTrack": "FitFeed Coach • Ocean Murmur",
    "caption": "Gently constrict back of throat on inhale and exhale, creating soft whisper like ocean waves.",
    "muscles": "Glottis & Vocal Cords",
    "modifications": [
      "Keep sound very quiet and gentle.",
      "Breathe naturally if throat feels dry."
    ],
    "safety": "Do not choke or over-constrict airway.",
    "animType": "breath"
  },
  {
    "id": "physiological-sigh",
    "title": "Double Inhale Physiological Sigh",
    "category": "Mindful Breath",
    "filterTag": "breath",
    "impactTag": "Restorative",
    "suitableFor": "Rapid Stress Reduction, Panic Relief",
    "mode": "timer",
    "duration": 35,
    "met": 1.4,
    "points": 40,
    "audioTrack": "FitFeed Coach • Instant De-Stress",
    "caption": "Take two quick inhales through nose, then one long, complete sigh out through mouth.",
    "muscles": "Alveoli Re-inflation & Diaphragm",
    "modifications": [
      "Perform 3 to 4 rounds, then rest.",
      "Sigh softly without vocal shouting."
    ],
    "safety": "Excellent for quick resets between workouts.",
    "animType": "breath"
  },
  {
    "id": "breath-with-arm-sweeps",
    "title": "Synchronized Breathing Arm Sweeps",
    "category": "Mindful Breath",
    "filterTag": "breath",
    "impactTag": "Zero Joint Impact",
    "suitableFor": "Mind-Body Connection, Seniors",
    "mode": "reps",
    "targetReps": 8,
    "met": 2,
    "points": 45,
    "audioTrack": "FitFeed Coach • Breath & Movement",
    "caption": "Inhale as arms float slowly outward and up; exhale as arms float gently down.",
    "muscles": "Deltoids, Diaphragm & Intercostals",
    "modifications": [
      "Raise arms only to shoulder height.",
      "Rest hands on knees between sweeps."
    ],
    "safety": "Move arms at the exact speed of your breath.",
    "animType": "overhead_reach"
  },
  {
    "id": "alternate-nostril-breath",
    "title": "Gentle Alternate Airway Flow",
    "category": "Mindful Breath",
    "filterTag": "breath",
    "impactTag": "Restorative",
    "suitableFor": "Hemispheric Balance, Mental Clarity",
    "mode": "timer",
    "duration": 45,
    "met": 1.4,
    "points": 40,
    "audioTrack": "FitFeed Coach • Dual Channel Balance",
    "caption": "Gently close right nostril, inhale left. Close left, exhale right. Inhale right, exhale left.",
    "muscles": "Nasal Passages & Autonomic Tone",
    "modifications": [
      "Can imagine breath moving without touching nose if congested.",
      "Keep elbow supported on armrest."
    ],
    "safety": "Never force if nostrils are blocked from colds.",
    "animType": "breath"
  },
  {
    "id": "humming-bee-breath",
    "title": "Bhramari Humming Vagus Reset",
    "category": "Mindful Breath",
    "filterTag": "breath",
    "impactTag": "Restorative",
    "suitableFor": "Nitric Oxide Production, High Blood Pressure",
    "mode": "timer",
    "duration": 40,
    "met": 1.4,
    "points": 40,
    "audioTrack": "FitFeed Coach • Nitric Oxide Hum",
    "caption": "Inhale softly through nose. Exhale while making a gentle, continuous humming sound 'Mmm'.",
    "muscles": "Vocal Cords, Sinuses & Nitric Oxide Release",
    "modifications": [
      "Hum at your natural pitch.",
      "Rest fingertips gently over ears to heighten resonance."
    ],
    "safety": "Soothing for headaches and blood pressure.",
    "animType": "breath"
  },
  {
    "id": "guided-body-scan-release",
    "title": "Seated Progressive Body Scan",
    "category": "Mindful Breath",
    "filterTag": "breath",
    "impactTag": "Restorative",
    "suitableFor": "Full Body Relaxation, Seniors, High BMI",
    "mode": "timer",
    "duration": 50,
    "met": 1.3,
    "points": 40,
    "audioTrack": "FitFeed Coach • Somatic Scan",
    "caption": "Close eyes softly. Scan from toes up to scalp, releasing tension in each muscle group with every exhale.",
    "muscles": "Neuromuscular System & Fascial Release",
    "modifications": [
      "Focus on relaxing jaw, shoulders, and belly.",
      "Can be done with head resting back."
    ],
    "safety": "Notice sensations without judgment.",
    "animType": "breath"
  },
  {
    "id": "3-part-dirga-breath",
    "title": "Three-Part Complete Yogic Breath",
    "category": "Mindful Breath",
    "filterTag": "breath",
    "impactTag": "Restorative",
    "suitableFor": "Full Lung Capacity, Seniors",
    "mode": "timer",
    "duration": 45,
    "met": 1.5,
    "points": 40,
    "audioTrack": "FitFeed Coach • 3-Tier Volume",
    "caption": "Inhale into lower belly, then ribs, then upper chest. Exhale from chest, then ribs, then belly.",
    "muscles": "Diaphragm, Intercostals & Scalenes",
    "modifications": [
      "Place one hand on belly and one on chest.",
      "Keep volume comfortable; do not overfill lungs."
    ],
    "safety": "Keep throat relaxed without gasping.",
    "animType": "breath"
  },
  {
    "id": "jaw-temple-release",
    "title": "Mindful Jaw & Temple Release",
    "category": "Mindful Breath",
    "filterTag": "breath",
    "impactTag": "Restorative",
    "suitableFor": "TMJ Tension, Headache Relief",
    "mode": "timer",
    "duration": 30,
    "met": 1.4,
    "points": 40,
    "audioTrack": "FitFeed Coach • TMJ Ease",
    "caption": "Drop lower jaw open softly. Let tongue rest on floor of mouth. Exhale with an audible sigh.",
    "muscles": "Masseter, Temporalis & Pterygoids",
    "modifications": [
      "Place warm palms over cheeks.",
      "Make gentle side-to-side jaw sways."
    ],
    "safety": "Never click or pop jaw aggressively.",
    "animType": "breath"
  },
  {
    "id": "heart-hands-gratitude",
    "title": "Hands-on-Heart Loving Breath",
    "category": "Mindful Breath",
    "filterTag": "breath",
    "impactTag": "Restorative",
    "suitableFor": "Emotional Calm, Caregiver Fatigue",
    "mode": "timer",
    "duration": 40,
    "met": 1.4,
    "points": 40,
    "audioTrack": "FitFeed Coach • Heart Resonance",
    "caption": "Place both warm hands over heart center. Feel chest rise and fall. Breathe with kindness to yourself.",
    "muscles": "Vagus Nerve & Oxytocin Release",
    "modifications": [
      "Can place one hand on heart and one on belly.",
      "Allow shoulders to drop completely."
    ],
    "safety": "Body-positive and restorative.",
    "animType": "breath"
  },
  {
    "id": "grounding-foot-breath",
    "title": "Earthing Foot Grounding Breath",
    "category": "Mindful Breath",
    "filterTag": "breath",
    "impactTag": "Restorative",
    "suitableFor": "Anxiety Grounding, Balance Confidence",
    "mode": "timer",
    "duration": 35,
    "met": 1.4,
    "points": 40,
    "audioTrack": "FitFeed Coach • Terra Ground",
    "caption": "Feel soles of both feet firmly planted on earth. Inhale stability from the ground, exhale fatigue.",
    "muscles": "Proprioceptors & Nervous System",
    "modifications": [
      "Best done barefoot or in comfortable socks.",
      "Press toes gently into floor on exhale."
    ],
    "safety": "Brings mind immediately back to the present moment.",
    "animType": "breath"
  }
];

/* ==========================================================================
   2. APP STATE STORE (LOCAL-FIRST & ACCURATE)
   ========================================================================== */
class AppStore {
  constructor() {
    this.KEY = "fitfeed_v7_real_data";
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
      publicLikes: {}, // Real community likes (starts at 0, no fake numbers!)
      voiceEnabled: false,
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

  getLikes(id) {
    return this.data.publicLikes[id] || 0;
  }

  toggleLike(id) {
    if (!this.data.publicLikes) this.data.publicLikes = {};
    const isLiked = this.data.likedIds.includes(id);

    if (isLiked) {
      const idx = this.data.likedIds.indexOf(id);
      if (idx > -1) this.data.likedIds.splice(idx, 1);
      this.data.publicLikes[id] = Math.max(0, (this.data.publicLikes[id] || 1) - 1);
    } else {
      this.data.likedIds.push(id);
      this.data.publicLikes[id] = (this.data.publicLikes[id] || 0) + 1;
    }

    this.save();
    return { isLiked: !isLiked, count: this.data.publicLikes[id] };
  }

  recordExercise(ex, durationSecs) {
    const today = new Date().toISOString().slice(0, 10);
    const durationMins = durationSecs / 60;
    // Accurate MET formula: kcal = (MET * 3.5 * 75kg / 200) * minutes
    const calories = Math.round((ex.met * 3.5 * 75 / 200) * durationMins * 10) / 10;

    this.data.completedCount++;
    this.data.totalCalories = Math.round((this.data.totalCalories + calories) * 10) / 10;
    this.data.totalPoints += ex.points;

    // Accurate streak calculation
    if (this.data.lastDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().slice(0, 10);

      if (this.data.lastDate === yesterdayStr) {
        this.data.streak++;
      } else {
        this.data.streak = 1;
      }
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

    if (this.data.history.length > 100) this.data.history = this.data.history.slice(0, 100);
    this.save();
    return { calories, points: ex.points };
  }

  getTodayCompletedCount() {
    const today = new Date().toISOString().slice(0, 10);
    return this.data.history.filter(h => h.timestamp && h.timestamp.startsWith(today)).length;
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
      const count = this.data.history.filter(h => h.timestamp && h.timestamp.startsWith(dateStr)).length;
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
   3. VOICE COACH (ACCESSIBLE WEB SPEECH API)
   ========================================================================== */
class VoiceCoach {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.enabled = false;
    this.isUnlocked = false;

    // Unlock Web Speech API on first user interaction
    const unlock = () => {
      if (this.isUnlocked || !this.synth) return;
      try {
        const dummy = new SpeechSynthesisUtterance("");
        dummy.volume = 0;
        this.synth.speak(dummy);
        this.isUnlocked = true;
      } catch (e) {}
      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
    };

    window.addEventListener("click", unlock, { once: true });
    window.addEventListener("touchstart", unlock, { once: true });
  }

  speak(text) {
    if (!this.synth || !this.enabled) return;
    try {
      this.synth.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.rate = 1.0;
      utt.pitch = 1.05;
      const voices = this.synth.getVoices();
      const natural = voices.find(v => v.lang.startsWith("en") && (v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("Samantha") || v.name.includes("Daniel")));
      if (natural) utt.voice = natural;
      this.synth.speak(utt);
    } catch (e) {
      console.warn("Speech warning:", e);
    }
  }

  announceStart(title) {
    this.speak("Starting " + title + ". Move softly and breathe easily.");
  }

  announceHalfway() {
    this.speak("Halfway there! Keep shoulders relaxed.");
  }

  announceDone(points) {
    this.speak("Great job! Movement complete. You earned " + points + " FitPoints.");
  }
}

/* ==========================================================================
   4. ULTRA-FAST 60FPS SHARED 3D HUMAN ENGINE (Three.js)
   ========================================================================== */
class SharedMovementAvatar3D {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.human = null;
    this.chair = null;
    this.animType = "arm_swing";
    this.speedMultiplier = 1.0;
    this.clock = null;
    this.isReady = false;
    this.isPaused = false;
    this.isDragging = false;
    this.previousMouseX = 0;

    if (typeof THREE !== "undefined") {
      this.init();
    }
  }

  init() {
    try {
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 380;
      const height = rect.height || 720;

      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(46, width / height, 0.1, 100);
      this.camera.position.set(0, 1.25, 3.2);

      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
      });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

      // 3-Point Lighting
      const ambientLight = new THREE.AmbientLight(0xfff7ed, 0.88);
      this.scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
      keyLight.position.set(2.5, 4.5, 3.5);
      this.scene.add(keyLight);

      const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.9);
      rimLight.position.set(-3.0, 2.5, -2.5);
      this.scene.add(rimLight);

      const bounceLight = new THREE.DirectionalLight(0x10b981, 0.35);
      bounceLight.position.set(0, -1, 2);
      this.scene.add(bounceLight);

      this.buildHuman();
      this.bindOrbit();

      this.clock = new THREE.Clock();
      this.isReady = true;
      this.animate();

      window.addEventListener("resize", () => this.resize());
    } catch (err) {
      console.warn("Three.js setup warning:", err);
    }
  }

  buildHuman() {
    this.human = new THREE.Group();

    // Natural Skin Tone & Materials
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xd29d78, roughness: 0.65, metalness: 0.05 });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x271e1b, roughness: 0.85 });
    const shirtMat = new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.45, metalness: 0.1 }); // Teal tank
    const shortsMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.6 }); // Slate shorts
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x09090b, roughness: 0.5 });
    const soleMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 });
    const chairWood = new THREE.MeshStandardMaterial({ color: 0x3f2d21, roughness: 0.65 });
    const chairMetal = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.3, metalness: 0.6 });

    // 1. Head & Facial Landmarks
    this.headGroup = new THREE.Group();
    this.headGroup.position.set(0, 1.48, 0);

    const headGeo = new THREE.SphereGeometry(0.125, 20, 20);
    headGeo.scale(1.0, 1.18, 1.08);
    const headMesh = new THREE.Mesh(headGeo, skinMat);
    this.headGroup.add(headMesh);

    const hairGeo = new THREE.SphereGeometry(0.13, 16, 16);
    hairGeo.scale(1.02, 1.15, 1.06);
    const hairMesh = new THREE.Mesh(hairGeo, hairMat);
    hairMesh.position.set(0, 0.04, -0.015);
    this.headGroup.add(hairMesh);

    const noseGeo = new THREE.CylinderGeometry(0.012, 0.022, 0.045, 8);
    const noseMesh = new THREE.Mesh(noseGeo, skinMat);
    noseMesh.rotation.x = Math.PI / 2;
    noseMesh.position.set(0, -0.01, 0.135);
    this.headGroup.add(noseMesh);

    const earGeo = new THREE.SphereGeometry(0.025, 8, 8);
    earGeo.scale(0.5, 1.2, 0.8);
    const leftEar = new THREE.Mesh(earGeo, skinMat);
    leftEar.position.set(-0.125, 0, 0);
    this.headGroup.add(leftEar);
    const rightEar = leftEar.clone();
    rightEar.position.set(0.125, 0, 0);
    this.headGroup.add(rightEar);

    this.human.add(this.headGroup);

    // 2. Neck
    const neckMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.11, 14), skinMat);
    neckMesh.position.set(0, 1.34, 0);
    this.human.add(neckMesh);

    // 3. Torso (Upper Chest + Abdomen)
    this.torso = new THREE.Group();
    this.torso.position.set(0, 1.02, 0);

    const chestMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.18, 0.32, 18), shirtMat);
    chestMesh.position.set(0, 0.16, 0);
    this.torso.add(chestMesh);

    const abMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.178, 0.175, 0.22, 16), shirtMat);
    abMesh.position.set(0, -0.08, 0);
    this.torso.add(abMesh);

    this.human.add(this.torso);

    // 4. Pelvis (Shorts)
    this.pelvis = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.17, 0.18, 16), shortsMat);
    this.pelvis.position.set(0, 0.82, 0);
    this.human.add(this.pelvis);

    // 5. Left Arm Hierarchy
    this.leftArm = new THREE.Group();
    this.leftArm.position.set(-0.25, 1.25, 0);
    const leftUpperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.046, 0.26, 12), skinMat);
    leftUpperArm.position.set(0, -0.13, 0);
    this.leftArm.add(leftUpperArm);

    this.leftForearm = new THREE.Group();
    this.leftForearm.position.set(0, -0.26, 0);
    const leftForearmMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.044, 0.036, 0.24, 12), skinMat);
    leftForearmMesh.position.set(0, -0.12, 0);
    this.leftForearm.add(leftForearmMesh);
    const leftHand = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.08, 0.025), skinMat);
    leftHand.position.set(0, -0.26, 0);
    this.leftForearm.add(leftHand);

    this.leftArm.add(this.leftForearm);
    this.human.add(this.leftArm);

    // 6. Right Arm Hierarchy
    this.rightArm = new THREE.Group();
    this.rightArm.position.set(0.25, 1.25, 0);
    const rightUpperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.046, 0.26, 12), skinMat);
    rightUpperArm.position.set(0, -0.13, 0);
    this.rightArm.add(rightUpperArm);

    this.rightForearm = new THREE.Group();
    this.rightForearm.position.set(0, -0.26, 0);
    const rightForearmMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.044, 0.036, 0.24, 12), skinMat);
    rightForearmMesh.position.set(0, -0.12, 0);
    this.rightForearm.add(rightForearmMesh);
    const rightHand = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.08, 0.025), skinMat);
    rightHand.position.set(0, -0.26, 0);
    this.rightForearm.add(rightHand);

    this.rightArm.add(this.rightForearm);
    this.human.add(this.rightArm);

    // 7. Left Leg Hierarchy
    this.leftLeg = new THREE.Group();
    this.leftLeg.position.set(-0.11, 0.76, 0.05);
    const leftThigh = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.068, 0.36, 12), shortsMat);
    leftThigh.position.set(0, -0.18, 0);
    this.leftLeg.add(leftThigh);

    this.leftShin = new THREE.Group();
    this.leftShin.position.set(0, -0.36, 0);
    const leftShinMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.052, 0.36, 12), skinMat);
    leftShinMesh.position.set(0, -0.18, 0);
    this.leftShin.add(leftShinMesh);
    const leftShoe = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.065, 0.18), shoeMat);
    leftShoe.position.set(0, -0.38, 0.04);
    this.leftShin.add(leftShoe);
    const leftSole = new THREE.Mesh(new THREE.BoxGeometry(0.094, 0.018, 0.186), soleMat);
    leftSole.position.set(0, -0.415, 0.04);
    this.leftShin.add(leftSole);

    this.leftLeg.add(this.leftShin);
    this.human.add(this.leftLeg);

    // 8. Right Leg Hierarchy
    this.rightLeg = new THREE.Group();
    this.rightLeg.position.set(0.11, 0.76, 0.05);
    const rightThigh = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.068, 0.36, 12), shortsMat);
    rightThigh.position.set(0, -0.18, 0);
    this.rightLeg.add(rightThigh);

    this.rightShin = new THREE.Group();
    this.rightShin.position.set(0, -0.36, 0);
    const rightShinMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.052, 0.36, 12), skinMat);
    rightShinMesh.position.set(0, -0.18, 0);
    this.rightShin.add(rightShinMesh);
    const rightShoe = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.065, 0.18), shoeMat);
    rightShoe.position.set(0, -0.38, 0.04);
    this.rightShin.add(rightShoe);
    const rightSole = new THREE.Mesh(new THREE.BoxGeometry(0.094, 0.018, 0.186), soleMat);
    rightSole.position.set(0, -0.415, 0.04);
    this.rightShin.add(rightSole);

    this.rightLeg.add(this.rightShin);
    this.human.add(this.rightLeg);

    // 9. Ergonomic Chair
    this.chair = new THREE.Group();
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.05, 0.52), chairWood);
    seat.position.set(0, 0.68, -0.02);
    this.chair.add(seat);

    const back = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.52, 0.04), chairWood);
    back.position.set(0, 1.02, -0.27);
    this.chair.add(back);

    [[-0.24, 0.20], [0.24, 0.20], [-0.24, -0.22], [0.24, -0.22]].forEach(([x, z]) => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.68, 8), chairMetal);
      leg.position.set(x, 0.34, z);
      this.chair.add(leg);
    });
    this.human.add(this.chair);

    // 10. Studio Ground Mat
    const matMesh = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.015, 24), new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.8 }));
    matMesh.position.set(0, 0, 0);
    this.human.add(matMesh);

    this.scene.add(this.human);
  }

  bindOrbit() {
    const onStart = (x) => {
      this.isDragging = true;
      this.previousMouseX = x;
    };
    const onMove = (x) => {
      if (!this.isDragging || !this.human) return;
      const delta = x - this.previousMouseX;
      this.human.rotation.y += delta * 0.012;
      this.previousMouseX = x;
    };
    const onEnd = () => {
      this.isDragging = false;
    };

    this.canvas.addEventListener("mousedown", (e) => onStart(e.clientX));
    window.addEventListener("mousemove", (e) => onMove(e.clientX));
    window.addEventListener("mouseup", onEnd);

    this.canvas.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) onStart(e.touches[0].clientX);
    }, { passive: true });
    window.addEventListener("touchmove", (e) => {
      if (e.touches.length === 1) onMove(e.touches[0].clientX);
    }, { passive: true });
    window.addEventListener("touchend", onEnd);
  }

  setAnimation(animType) {
    this.animType = animType;
    const standingTypes = ["wall_push", "wall_angel", "chest_stretch", "calf_raise", "standing_march", "side_step", "balance_hold"];
    if (this.chair) {
      this.chair.visible = !standingTypes.includes(animType);
    }
  }

  animate() {
    if (!this.isReady) return;
    requestAnimationFrame(() => this.animate());
    if (this.isPaused) return;

    const t = this.clock.getElapsedTime() * this.speedMultiplier;

    // Reset base limb positions
    this.leftArm.rotation.set(0, 0, 0);
    this.rightArm.rotation.set(0, 0, 0);
    this.leftForearm.rotation.set(0, 0, 0);
    this.rightForearm.rotation.set(0, 0, 0);
    this.leftLeg.rotation.set(0, 0, 0);
    this.rightLeg.rotation.set(0, 0, 0);
    this.leftShin.rotation.set(0, 0, 0);
    this.rightShin.rotation.set(0, 0, 0);
    this.torso.rotation.set(0, 0, 0);
    this.torso.scale.set(1, 1, 1);
    this.headGroup.rotation.set(0, 0, 0);
    this.headGroup.position.set(0, 1.48, 0);
    this.human.position.set(0, 0, 0);

    const standingTypes = ["wall_push", "wall_angel", "chest_stretch", "calf_raise", "standing_march", "side_step", "balance_hold"];
    if (!standingTypes.includes(this.animType)) {
      this.leftLeg.rotation.x = -Math.PI / 2.3;
      this.rightLeg.rotation.x = -Math.PI / 2.3;
      this.leftShin.rotation.x = Math.PI / 2.3;
      this.rightShin.rotation.x = Math.PI / 2.3;
    }

    if (this.animType === "arm_swing") {
      const swing = Math.sin(t * 3.2) * 0.75;
      this.leftArm.rotation.x = swing;
      this.rightArm.rotation.x = -swing;
      this.torso.rotation.y = Math.sin(t * 3.2) * 0.08;
    } else if (this.animType === "march") {
      const march = Math.sin(t * 3.8);
      this.leftLeg.rotation.x = -Math.PI / 2.3 - Math.max(0, march) * 0.45;
      this.rightLeg.rotation.x = -Math.PI / 2.3 - Math.max(0, -march) * 0.45;
      this.leftArm.rotation.x = march * 0.35;
      this.rightArm.rotation.x = -march * 0.35;
    } else if (this.animType === "cat_cow") {
      const wave = Math.sin(t * 2.0) * 0.28;
      this.torso.rotation.x = wave;
      this.headGroup.rotation.x = wave * 1.4;
    } else if (this.animType === "knee_ext") {
      const ext = (Math.sin(t * 2.8) + 1) * 0.5;
      this.rightShin.rotation.x = Math.PI / 2.3 - ext * 0.9;
    } else if (this.animType === "ankle_circle") {
      const circle = t * 4;
      this.rightShin.rotation.y = Math.sin(circle) * 0.25;
      this.rightShin.rotation.z = Math.cos(circle) * 0.2;
    } else if (this.animType === "shoulder_roll") {
      const roll = t * 3.5;
      this.leftArm.rotation.x = Math.sin(roll) * 0.25;
      this.rightArm.rotation.x = Math.sin(roll) * 0.25;
      this.torso.position.y = Math.sin(roll) * 0.03;
    } else if (this.animType === "wrist_glide" || this.animType === "finger_spread") {
      this.leftForearm.rotation.x = -Math.PI / 2.5;
      this.rightForearm.rotation.x = -Math.PI / 2.5;
      const flex = Math.sin(t * 3.5) * 0.3;
      this.leftForearm.rotation.z = flex;
      this.rightForearm.rotation.z = -flex;
    } else if (this.animType === "heel_tap") {
      const tap = Math.sin(t * 4);
      this.leftShin.rotation.x = Math.PI / 2.3 + Math.max(0, tap) * 0.2;
      this.rightShin.rotation.x = Math.PI / 2.3 + Math.max(0, -tap) * 0.2;
    } else if (this.animType === "hip_opener") {
      const open = Math.sin(t * 2.5) * 0.38;
      this.leftLeg.rotation.z = -open;
      this.rightLeg.rotation.z = open;
    } else if (this.animType === "flutter_kick") {
      const flutter = Math.sin(t * 6) * 0.25;
      this.leftShin.rotation.x = Math.PI / 2.3 - 0.4 + flutter;
      this.rightShin.rotation.x = Math.PI / 2.3 - 0.4 - flutter;
    } else if (this.animType === "hamstring_hinge") {
      const hinge = (Math.sin(t * 2.2) + 1) * 0.5 * 0.35;
      this.torso.rotation.x = hinge;
      this.rightShin.rotation.x = Math.PI / 2.3 - 0.6;
    } else if (this.animType === "overhead_reach") {
      const reach = Math.sin(t * 3);
      this.leftArm.rotation.x = -Math.PI + Math.max(0, reach) * 0.4;
      this.rightArm.rotation.x = -Math.PI + Math.max(0, -reach) * 0.4;
    } else if (this.animType === "wall_push") {
      const push = (Math.sin(t * 2.4) + 1) * 0.5;
      this.human.position.z = -push * 0.35;
      this.leftArm.rotation.x = -Math.PI / 2 + push * 0.4;
      this.rightArm.rotation.x = -Math.PI / 2 + push * 0.4;
    } else if (this.animType === "wall_angel") {
      const slide = Math.sin(t * 2.5) * 0.45;
      this.leftArm.rotation.z = Math.PI / 2 + slide;
      this.rightArm.rotation.z = -Math.PI / 2 - slide;
    } else if (this.animType === "squat_tap") {
      const squat = (Math.sin(t * 2.2) + 1) * 0.5;
      this.human.position.y = squat * 0.38;
      this.leftLeg.rotation.x = -Math.PI / 2.3 + squat * 0.45;
      this.rightLeg.rotation.x = -Math.PI / 2.3 + squat * 0.45;
    } else if (this.animType === "calf_raise") {
      const rise = (Math.sin(t * 3) + 1) * 0.5;
      this.human.position.y = rise * 0.14;
    } else if (this.animType === "breath") {
      const expand = 1 + Math.sin(t * 1.8) * 0.08;
      this.torso.scale.set(expand, 1, expand);
      this.headGroup.position.y = 1.48 + Math.sin(t * 1.8) * 0.025;
    } else if (this.animType === "torso_twist") {
      const twist = Math.sin(t * 2.2) * 0.55;
      this.torso.rotation.y = twist;
      this.headGroup.rotation.y = twist * 0.7;
    } else if (this.animType === "side_reach") {
      const lean = Math.sin(t * 2.2) * 0.32;
      this.torso.rotation.z = lean;
      this.rightArm.rotation.z = Math.PI / 1.3 + lean;
    } else if (this.animType === "row_pull") {
      const row = Math.sin(t * 3) * 0.45;
      this.leftArm.rotation.x = -Math.PI / 4 + row;
      this.rightArm.rotation.x = -Math.PI / 4 + row;
    } else if (this.animType === "neck_tilt") {
      const tilt = Math.sin(t * 2) * 0.3;
      this.headGroup.rotation.z = tilt;
    } else if (this.animType === "chin_tuck") {
      const tuck = (Math.sin(t * 2.5) + 1) * 0.5;
      this.headGroup.position.z = -tuck * 0.05;
    } else if (this.animType === "standing_march") {
      const smarch = Math.sin(t * 3.5);
      this.leftLeg.rotation.x = Math.max(0, smarch) * 0.6;
      this.rightLeg.rotation.x = Math.max(0, -smarch) * 0.6;
      this.leftArm.rotation.x = smarch * 0.4;
      this.rightArm.rotation.x = -smarch * 0.4;
    } else if (this.animType === "side_step") {
      const step = Math.sin(t * 3) * 0.25;
      this.human.position.x = step;
      this.leftLeg.rotation.z = step * 0.5;
      this.rightLeg.rotation.z = step * 0.5;
    } else if (this.animType === "balance_hold") {
      this.rightLeg.rotation.x = 0.5;
      this.rightShin.rotation.x = 0.6;
      this.leftArm.rotation.z = Math.PI / 3;
      this.rightArm.rotation.z = -Math.PI / 3;
      this.human.position.y = Math.sin(t * 2) * 0.015;
    } else if (this.animType === "arm_circle") {
      const c = t * 3;
      this.leftArm.rotation.z = Math.PI / 2.8 + Math.sin(c) * 0.15;
      this.rightArm.rotation.z = -Math.PI / 2.8 - Math.sin(c) * 0.15;
      this.leftArm.rotation.x = Math.cos(c) * 0.28;
      this.rightArm.rotation.x = Math.cos(c) * 0.28;
    } else if (this.animType === "cross_reach") {
      const cr = Math.sin(t * 2.8);
      this.leftArm.rotation.x = -Math.PI / 3 + cr * 0.35;
      this.rightArm.rotation.x = -Math.PI / 3 - cr * 0.35;
      this.torso.rotation.y = cr * 0.3;
    } else if (this.animType === "goalpost") {
      const gp = (Math.sin(t * 2.6) + 1) * 0.5 * 0.4;
      this.leftArm.rotation.z = Math.PI / 2.2;
      this.rightArm.rotation.z = -Math.PI / 2.2;
      this.leftForearm.rotation.x = -Math.PI / 2.2 + gp;
      this.rightForearm.rotation.x = -Math.PI / 2.2 + gp;
    } else if (this.animType === "side_tap") {
      const st = Math.sin(t * 3.2);
      this.leftLeg.rotation.z = Math.max(0, -st) * 0.35;
      this.rightLeg.rotation.z = Math.max(0, st) * 0.35;
    } else if (this.animType === "bicep_curl") {
      const bc = (Math.sin(t * 3.2) + 1) * 0.5;
      this.leftForearm.rotation.x = -bc * 1.6;
      this.rightForearm.rotation.x = -bc * 1.6;
    } else if (this.animType === "tricep_press") {
      const tp = (Math.sin(t * 3.2) + 1) * 0.5 * 0.45;
      this.leftArm.rotation.x = tp;
      this.rightArm.rotation.x = tp;
    } else if (this.animType === "wrist_circle") {
      const wc = t * 4;
      this.leftForearm.rotation.x = -Math.PI / 2.5;
      this.rightForearm.rotation.x = -Math.PI / 2.5;
      this.leftForearm.rotation.z = Math.sin(wc) * 0.3;
      this.rightForearm.rotation.z = Math.cos(wc) * 0.3;
    } else if (this.animType === "pelvic_tilt") {
      const pt = Math.sin(t * 2.5) * 0.15;
      this.pelvis.rotation.x = pt;
      this.torso.rotation.x = -pt * 0.8;
    } else if (this.animType === "front_punch") {
      const fp = Math.sin(t * 4);
      this.leftArm.rotation.x = -Math.PI / 2.5 + Math.max(0, fp) * 0.6;
      this.rightArm.rotation.x = -Math.PI / 2.5 + Math.max(0, -fp) * 0.6;
      this.torso.rotation.y = fp * 0.12;
    } else if (this.animType === "steering_wheel") {
      const sw = Math.sin(t * 2.8) * 0.45;
      this.leftArm.rotation.x = -Math.PI / 3;
      this.rightArm.rotation.x = -Math.PI / 3;
      this.leftForearm.rotation.z = sw;
      this.rightForearm.rotation.z = sw;
      this.torso.rotation.y = sw * 0.25;
    } else if (this.animType === "knee_hug") {
      const kh = (Math.sin(t * 2.4) + 1) * 0.5;
      this.rightLeg.rotation.x = -Math.PI / 2.3 - kh * 0.4;
      this.torso.rotation.x = kh * 0.15;
    } else if (this.animType === "torso_circle") {
      const tc = t * 2.5;
      this.torso.rotation.x = Math.sin(tc) * 0.18;
      this.torso.rotation.z = Math.cos(tc) * 0.18;
    } else if (this.animType === "windshield_arm") {
      const wa = Math.sin(t * 3) * 0.45;
      this.leftForearm.rotation.y = wa;
      this.rightForearm.rotation.y = -wa;
    } else if (this.animType === "inner_thigh") {
      const it = (Math.sin(t * 3) + 1) * 0.5;
      this.leftLeg.rotation.z = it * 0.15;
      this.rightLeg.rotation.z = -it * 0.15;
    } else if (this.animType === "thoracic_ext") {
      const te = (Math.sin(t * 2.2) + 1) * 0.5 * 0.3;
      this.torso.rotation.x = -te;
      this.headGroup.rotation.x = -te * 1.2;
    } else {
      // Natural Fallback Animation so NO movement ever stands still!
      const fallbackSwing = Math.sin(t * 3.0) * 0.55;
      this.leftArm.rotation.x = fallbackSwing;
      this.rightArm.rotation.x = -fallbackSwing;
      this.torso.rotation.y = fallbackSwing * 0.08;
    }

    this.renderer.render(this.scene, this.camera);
  }
  resize() {
    if (!this.renderer || !this.camera) return;
    const rect = this.canvas.parentElement.getBoundingClientRect();
    const width = rect.width || 380;
    const height = rect.height || 720;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
}

/* ==========================================================================
   5. CONFETTI BURST
   ========================================================================== */
class ConfettiExplosion {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas ? canvas.getContext("2d") : null;
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
    if (!this.ctx) return;
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
   6. MAIN FITFEED CONTROLLER (FAST & RESPONSIVE)
   ========================================================================== */
class FitFeedApp {
  constructor() {
    this.store = new AppStore();
    this.voice = new VoiceCoach();
    this.avatar = null;
    this.confetti = null;

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

    const confCanvas = document.getElementById("celebration-canvas");
    if (confCanvas) this.confetti = new ConfettiExplosion(confCanvas);

    // Initialize the single shared high-performance 3D canvas
    const sharedCanvas = document.getElementById("shared-avatar-canvas");
    if (sharedCanvas) {
      this.avatar = new SharedMovementAvatar3D(sharedCanvas);
      this.avatar.setAnimation(EXERCISES_DATA[0].animType);
    }

    // Direct and Delegated event handler: 100% reliable clicks on play, like, rep, voice, info
    if (this.el.reelsDeck) {
      this.el.reelsDeck.addEventListener("click", (e) => {
        const playBtn = e.target.closest("[id^='btn-play-']");
        if (playBtn) {
          e.stopPropagation();
          const idx = parseInt(playBtn.id.replace("btn-play-", ""), 10);
          this.handlePlayClick(idx);
          return;
        }
        const likeBtn = e.target.closest("[id^='btn-like-']");
        if (likeBtn) {
          e.stopPropagation();
          const idx = parseInt(likeBtn.id.replace("btn-like-", ""), 10);
          this.handleLikeClick(EXERCISES_DATA[idx], idx);
          return;
        }
        const repBtn = e.target.closest("[id^='btn-rep-']");
        if (repBtn) {
          e.stopPropagation();
          const idx = parseInt(repBtn.id.replace("btn-rep-", ""), 10);
          this.countRep(EXERCISES_DATA[idx], idx);
          return;
        }
        const voiceBtn = e.target.closest("[id^='btn-voice-reel-']");
        if (voiceBtn) {
          e.stopPropagation();
          this.toggleVoiceCoach();
          return;
        }
        const infoBtn = e.target.closest("[id^='btn-info-']");
        if (infoBtn) {
          e.stopPropagation();
          const idx = parseInt(infoBtn.id.replace("btn-info-", ""), 10);
          this.openDrawer(EXERCISES_DATA[idx]);
          return;
        }
        // Instagram-style: tap on reel background toggles caption visibility
        const slide = e.target.closest(".reel-item");
        if (slide && !e.target.closest("button") && !e.target.closest("a")) {
          slide.classList.toggle("caption-hidden");
        }
      });
    }

    this.updateTopBarStats();
  }

  cacheElements() {
    this.el = {
      tabReels: document.getElementById("tab-reels"),
      tabDashboard: document.getElementById("tab-dashboard"),
      tabLibrary: document.getElementById("tab-library"),
      navBtns: document.querySelectorAll(".nav-pill, .mobile-nav-btn"),

      navStreak: document.getElementById("nav-streak-text"),
      navPoints: document.getElementById("nav-points-text"),
      voiceBtn: document.getElementById("btn-global-voice"),

      reelsDeck: document.getElementById("reels-scroll-deck"),
      storyBar: document.getElementById("reels-story-bar"),
      btnSideUp: document.getElementById("btn-side-up"),
      btnSideDown: document.getElementById("btn-side-down"),

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

      libSearch: document.getElementById("lib-search-input"),
      libFilterPills: document.querySelectorAll(".filter-pill"),
      libGrid: document.getElementById("lib-cards-grid"),

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
        if (confirm("Reset your workout history? This cannot be undone.")) {
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

    if (this.el.drawerBackdrop) {
      this.el.drawerBackdrop.addEventListener("click", () => this.closeDrawer());
    }
    if (this.el.btnCloseDrawer) {
      this.el.btnCloseDrawer.addEventListener("click", () => this.closeDrawer());
    }

    if (this.el.btnSideUp) {
      this.el.btnSideUp.addEventListener("click", () => this.scrollToPrevReel());
    }
    if (this.el.btnSideDown) {
      this.el.btnSideDown.addEventListener("click", () => this.scrollToNextReel());
    }
  }

  switchTab(tabId) {
    this.el.navBtns.forEach(b => {
      const match = b.dataset.tab === tabId;
      b.classList.toggle("active", match);
      b.setAttribute("aria-selected", match ? "true" : "false");
    });

    if (this.el.tabReels) this.el.tabReels.classList.toggle("hidden", tabId !== "reels");
    if (this.el.tabDashboard) this.el.tabDashboard.classList.toggle("hidden", tabId !== "dashboard");
    if (this.el.tabLibrary) this.el.tabLibrary.classList.toggle("hidden", tabId !== "library");

    if (this.avatar) {
      this.avatar.isPaused = (tabId !== "reels");
    }

    if (tabId === "dashboard") {
      this.pauseTimer(index);
      this.renderDashboard();
    } else if (tabId === "library") {
      this.pauseTimer();
      this.renderLibrary();
    } else if (tabId === "reels") {
      if (this.avatar) {
        this.avatar.resize();
        this.avatar.setAnimation(EXERCISES_DATA[this.activeIndex].animType);
      }
    }
  }

  updateTopBarStats() {
    if (this.el.navStreak) this.el.navStreak.textContent = this.store.data.streak + " Day" + (this.store.data.streak === 1 ? "" : "s");
    if (this.el.navPoints) this.el.navPoints.textContent = this.store.data.totalPoints + " pts";
  }

  /* ==========================================================================
     REELS ENGINE (ULTRA LIGHTWEIGHT DOM SLIDES)
     ========================================================================== */
  renderReels() {
    if (this.el.storyBar) {
      this.el.storyBar.innerHTML = "";
      const segCount = Math.min(20, EXERCISES_DATA.length);
      for (let i = 0; i < segCount; i++) {
        const seg = document.createElement("div");
        seg.className = "story-seg" + (i < this.activeIndex ? " done" : "");
        seg.innerHTML = '<div class="story-seg-fill" id="story-bar-' + i + '"></div>';
        this.el.storyBar.appendChild(seg);
      }
    }

    if (!this.el.reelsDeck) return;
    this.el.reelsDeck.innerHTML = "";

    EXERCISES_DATA.forEach((ex, idx) => {
      const isLiked = this.store.data.likedIds.includes(ex.id);
      const likesCount = this.store.getLikes(ex.id); // Real like counter (no fake numbers!)
      const slide = document.createElement("div");
      slide.className = "reel-item";
      slide.id = "reel-" + idx;
      slide.dataset.index = idx;

      slide.innerHTML = `
        <div class="motion-badge">
          <span class="motion-dot"></span>
          <span>Motion Guide</span>
        </div>

        <button class="speed-toggle" id="btn-speed-${idx}" type="button" title="Toggle demonstration speed">
          <span>1.0x</span>
        </button>

        <div class="reel-vignette-top"></div>
        <div class="reel-vignette-bottom"></div>

        <aside class="reel-actions" aria-label="Exercise Tools">
          <div>
            <button class="action-btn play-active" id="btn-play-${idx}" type="button" aria-label="Start or pause exercise">
              <svg class="timer-ring-svg" viewBox="0 0 54 54">
                <circle id="timer-ring-${idx}" cx="27" cy="27" r="24"></circle>
              </svg>
              <svg id="play-icon-${idx}" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </button>
          </div>

          <div>
            <button class="action-btn ${isLiked ? 'liked' : ''}" id="btn-like-${idx}" type="button" aria-label="Bookmark move">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="${isLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </button>
            <div class="action-label" id="like-count-${idx}">${likesCount}</div>
          </div>

          ${ex.mode === 'reps' ? `
          <div>
            <button class="action-btn" id="btn-rep-${idx}" type="button" aria-label="Count a repetition">
              <span class="text-xs font-black text-emerald-400">＋1</span>
            </button>
            <div class="action-label" id="rep-rail-label-${idx}">0/${ex.targetReps}</div>
          </div>` : ''}

          <!-- Quick Voice Coach Toggle directly on Reel -->
          <div>
            <button class="action-btn ${this.store.data.voiceEnabled ? 'active-voice' : ''}" id="btn-voice-reel-${idx}" type="button" aria-label="Toggle voice coach">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
              </svg>
            </button>
            <div class="action-label">Voice</div>
          </div>

          <div>
            <button class="action-btn" id="btn-info-${idx}" type="button" aria-label="Open anatomy and adjustments">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
            </button>
            <div class="action-label">Info</div>
          </div>
        </aside>

        <div class="reel-caption">
          <div>
            <span class="category-chip">${ex.category} · ${ex.impactTag}</span>
          </div>
          <h2 class="reel-title">${ex.title}</h2>
          <p class="reel-desc">${ex.caption}</p>
          <div class="audio-row">
            <div class="audio-disc"></div>
            <span class="truncate">${ex.audioTrack}</span>
          </div>
          <div class="hud-pill" id="hud-pill-${idx}">
            <span id="hud-text-${idx}">${ex.mode === 'timer' ? 'Ready • ' + ex.duration + 's timer' : 'Ready • Tap ＋1 to count'}</span>
          </div>
        </div>
      `;

      this.bindReelSlideEvents(slide, ex, idx);
      this.el.reelsDeck.appendChild(slide);
    });
  }

  bindReelSlideEvents(slide, ex, idx) {
    const playBtn = slide.querySelector("#btn-play-" + idx);
    if (playBtn) playBtn.addEventListener("click", () => this.handlePlayClick(idx));

    const likeBtn = slide.querySelector("#btn-like-" + idx);
    if (likeBtn) likeBtn.addEventListener("click", () => this.handleLikeClick(ex, idx));

    const infoBtn = slide.querySelector("#btn-info-" + idx);
    if (infoBtn) infoBtn.addEventListener("click", () => this.openDrawer(ex));

    const repBtn = slide.querySelector("#btn-rep-" + idx);
    if (repBtn) repBtn.addEventListener("click", () => this.countRep(ex, idx));

    const voiceBtn = slide.querySelector("#btn-voice-reel-" + idx);
    if (voiceBtn) voiceBtn.addEventListener("click", () => this.toggleVoiceCoach());

    const speedBtn = slide.querySelector("#btn-speed-" + idx);
    if (speedBtn) {
      speedBtn.addEventListener("click", () => {
        this.store.data.slowMotion = !this.store.data.slowMotion;
        if (this.avatar) {
          this.avatar.speedMultiplier = this.store.data.slowMotion ? 0.5 : 1.0;
        }
        speedBtn.textContent = this.store.data.slowMotion ? "0.5x Slow" : "1.0x";
        this.showToast(this.store.data.slowMotion ? "Slow-motion form view (0.5x)" : "Normal speed (1.0x)");
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

    this.updateStorySegments();

    // Fast 60FPS animation switch on the single shared avatar
    if (this.avatar) {
      this.avatar.setAnimation(ex.animType);
      this.avatar.speedMultiplier = this.store.data.slowMotion ? 0.5 : 1.0;
    }

    this.currentReps = 0;
  }

  updateStorySegments() {
    if (!this.el.storyBar) return;
    const segCount = this.el.storyBar.children.length;
    for (let i = 0; i < segCount; i++) {
      const seg = this.el.storyBar.children[i];
      if (seg) {
        seg.classList.toggle("done", i < this.activeIndex);
        const bar = seg.querySelector(".story-seg-fill");
        if (bar) bar.style.width = i < this.activeIndex ? "100%" : "0%";
      }
    }
  }

  handlePlayClick(index) {
    const idx = (typeof index === "number") ? index : this.activeIndex;
    if (this.activeIndex !== idx) {
      this.switchReel(idx);
    }

    if (this.timerRunning) {
      // User clicked the two lines -> Pause the reel and switch back to play icon
      this.pauseTimer(idx);
    } else {
      // User clicked play -> Start reel and show the two lines (pause icon)
      this.startExercise(idx);
    }
  }

  startExercise(index) {
    const ex = EXERCISES_DATA[index];
    if (ex.mode === "timer") {
      this.startTimer(index);
    } else {
      this.startRepPacer(index);
    }
  }

  startTimer(index) {
    const ex = EXERCISES_DATA[index];
    this.timerRunning = true;
    if (this.avatar) this.avatar.isPaused = false;

    // Reset timer seconds if it reached 0
    if (!this.timerSeconds || this.timerSeconds <= 0) {
      this.timerTotal = ex.duration;
      this.timerSeconds = ex.duration;
    }

    // Show the TWO LINES (pause icon)
    const playIcon = document.getElementById("play-icon-" + index);
    if (playIcon) {
      playIcon.innerHTML = '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>';
    }

    const hudText = document.getElementById("hud-text-" + index);
    if (hudText) hudText.textContent = "Moving: " + this.timerSeconds + "s remaining";

    this.voice.announceStart(ex.title);

    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timerSeconds--;
      if (hudText) hudText.textContent = "Moving: " + this.timerSeconds + "s remaining";

      const ring = document.getElementById("timer-ring-" + index);
      if (ring) {
        const offset = 150.8 * (1 - this.timerSeconds / this.timerTotal);
        ring.style.strokeDashoffset = offset.toString();
      }

      const storyBar = document.getElementById("story-bar-" + index);
      if (storyBar) {
        storyBar.style.width = (((this.timerTotal - this.timerSeconds) / this.timerTotal) * 100) + "%";
      }

      if (this.timerSeconds === Math.floor(this.timerTotal / 2)) {
        this.voice.announceHalfway();
      }

      if (this.timerSeconds <= 0) {
        this.completeExercise(ex, index);
      }
    }, 1000);
  }

  startRepPacer(index) {
    const ex = EXERCISES_DATA[index];
    this.timerRunning = true;
    if (this.avatar) this.avatar.isPaused = false;

    // Show the TWO LINES (pause icon)
    const playIcon = document.getElementById("play-icon-" + index);
    if (playIcon) {
      playIcon.innerHTML = '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>';
    }

    const hudText = document.getElementById("hud-text-" + index);
    if (hudText) hudText.textContent = "Pacing reps: " + this.currentReps + " of " + ex.targetReps;

    this.voice.announceStart(ex.title);

    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.countRep(ex, index);
      if (this.currentReps >= ex.targetReps) {
        clearInterval(this.timerInterval);
      }
    }, 2200);
  }

  pauseTimer(index) {
    const idx = (typeof index === "number") ? index : this.activeIndex;
    this.timerRunning = false;
    clearInterval(this.timerInterval);

    // Change back to PLAY triangle icon
    const playIcon = document.getElementById("play-icon-" + idx);
    if (playIcon) {
      playIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
    }

    const hudText = document.getElementById("hud-text-" + idx);
    if (hudText) hudText.textContent = "Paused • Tap to resume";

    // Pause the 3D human avatar when reel is paused
    if (this.avatar) {
      this.avatar.isPaused = true;
    }
  }

  countRep(ex, index) {
    this.currentReps++;
    if (navigator.vibrate) navigator.vibrate(25);

    const label = document.getElementById("rep-rail-label-" + index);
    if (label) label.textContent = this.currentReps + "/" + ex.targetReps;

    const hudText = document.getElementById("hud-text-" + index);
    if (hudText) hudText.textContent = "Reps: " + this.currentReps + " of " + ex.targetReps;

    this.showToast("＋1 Rep (" + this.currentReps + "/" + ex.targetReps + ")");

    if (this.currentReps >= ex.targetReps) {
      this.completeExercise(ex, index);
    }
  }

  completeExercise(ex, index) {
    this.pauseTimer();
    const duration = ex.mode === "timer" ? ex.duration : 45;
    const res = this.store.recordExercise(ex, duration);

    if (this.confetti) this.confetti.burst();
    this.voice.announceDone(res.points);
    this.showToast("🎉 Completed " + ex.title + "! +" + res.points + " pts | " + res.calories + " kcal");

    this.updateTopBarStats();
    this.renderDashboard();

    setTimeout(() => {
      this.scrollToNextReel();
    }, 1800);
  }

  scrollToNextReel() {
    if (this.activeIndex < EXERCISES_DATA.length - 1) {
      const nextSlide = document.getElementById("reel-" + (this.activeIndex + 1));
      if (nextSlide) nextSlide.scrollIntoView({ behavior: "smooth" });
    }
  }

  scrollToPrevReel() {
    if (this.activeIndex > 0) {
      const prevSlide = document.getElementById("reel-" + (this.activeIndex - 1));
      if (prevSlide) prevSlide.scrollIntoView({ behavior: "smooth" });
    }
  }

  handleLikeClick(ex, idx) {
    const res = this.store.toggleLike(ex.id);
    const btn = document.getElementById("btn-like-" + idx);
    const count = document.getElementById("like-count-" + idx);
    if (btn) {
      btn.classList.toggle("liked", res.isLiked);
      const svg = btn.querySelector("svg");
      if (svg) svg.setAttribute("fill", res.isLiked ? "currentColor" : "none");
    }
    if (count) count.textContent = res.count;
    this.showToast(res.isLiked ? "Liked ♥" : "Unliked");
  }

  toggleVoiceCoach() {
    this.voice.enabled = !this.voice.enabled;
    this.store.data.voiceEnabled = this.voice.enabled;
    this.store.save();

    if (this.el.voiceBtn) {
      this.el.voiceBtn.classList.toggle("active-voice", this.voice.enabled);
    }

    // Update reel voice buttons
    document.querySelectorAll("[id^='btn-voice-reel-']").forEach(btn => {
      btn.classList.toggle("active-voice", this.voice.enabled);
    });

    if (this.voice.enabled) {
      this.voice.speak("Voice coach enabled.");
      this.showToast("Voice coach audio ON");
    } else {
      if (this.voice.synth) this.voice.synth.cancel();
      this.showToast("Voice coach MUTED");
    }
  }

  /* ==========================================================================
     DASHBOARD ENGINE (ACCURATE REAL DATA)
     ========================================================================== */
  renderDashboard() {
    const d = this.store.data;
    if (this.el.dashStreak) this.el.dashStreak.textContent = d.streak + " Day" + (d.streak === 1 ? "" : "s");
    if (this.el.dashCalories) this.el.dashCalories.textContent = d.totalCalories + " kcal";
    if (this.el.dashPoints) this.el.dashPoints.textContent = d.totalPoints;
    if (this.el.dashCompleted) this.el.dashCompleted.textContent = d.completedCount;

    // Daily Goal
    const doneToday = this.store.getTodayCompletedCount();
    const target = d.dailyGoal || 3;
    const percent = Math.min(100, Math.round((doneToday / target) * 100));
    if (this.el.dashGoalBar) this.el.dashGoalBar.style.width = percent + "%";
    if (this.el.dashGoalLabel) this.el.dashGoalLabel.textContent = doneToday + " of " + target + " completed today (" + percent + "%)";

    // 7-Day Weekly Bar Chart
    const weekData = this.store.getWeeklyData();
    const totalWeek = weekData.reduce((acc, curr) => acc + curr.count, 0);
    if (this.el.dashWeekTotal) this.el.dashWeekTotal.textContent = totalWeek + " total moves";

    if (this.el.dashBars) {
      this.el.dashBars.innerHTML = "";
      const maxVal = Math.max(3, ...weekData.map(w => w.count));

      weekData.forEach(w => {
        const col = document.createElement("div");
        col.className = "graph-col" + (w.isToday ? " today" : "");
        const heightPct = (w.count / maxVal) * 100;
        col.innerHTML = `
          <div class="graph-bar ${w.count === 0 ? 'empty' : ''}" style="height: ${Math.max(6, heightPct)}%;" title="${w.count} moves on ${w.name}"></div>
          <span class="graph-day">${w.name}</span>
        `;
        this.el.dashBars.appendChild(col);
      });
    }

    // Session History Log
    if (this.el.dashHistory) {
      this.el.dashHistory.innerHTML = "";
      if (d.history.length === 0) {
        this.el.dashHistory.innerHTML = '<div class="text-xs text-slate-500 text-center py-6">No completed moves recorded yet. Jump into reels!</div>';
        return;
      }
      d.history.slice(0, 15).forEach(h => {
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
     LIBRARY ENGINE
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
      this.el.libGrid.innerHTML = '<div class="col-span-full text-center py-8 text-xs text-slate-500">No exercises found matching your search.</div>';
      return;
    }

    list.forEach(ex => {
      const card = document.createElement("div");
      card.className = "lib-card";
      card.innerHTML = `
        <div class="lib-card-top">
          <span class="category-chip">${ex.category}</span>
          <span class="text-xs font-semibold text-slate-400">${ex.mode === 'timer' ? ex.duration + 's' : ex.targetReps + ' reps'}</span>
        </div>
        <h3 class="lib-card-title">${ex.title}</h3>
        <p class="lib-card-desc">${ex.caption}</p>
        <div class="lib-card-footer">
          <span class="lib-card-muscles">${ex.muscles}</span>
          <button class="btn-play-reel" type="button" data-id="${ex.id}">
            Play Reel →
          </button>
        </div>
      `;

      card.querySelector(".btn-play-reel").addEventListener("click", () => {
        const fullIdx = EXERCISES_DATA.findIndex(e => e.id === ex.id);
        if (fullIdx > -1) {
          this.switchTab("reels");
          const targetSlide = document.getElementById("reel-" + fullIdx);
          if (targetSlide) targetSlide.scrollIntoView({ behavior: "smooth" });
        }
      });

      this.el.libGrid.appendChild(card);
    });

    this.el.libFilterPills.forEach(pill => {
      pill.onclick = () => {
        this.el.libFilterPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
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
    if (this.el.drawerTitle) this.el.drawerTitle.textContent = ex.title;
    if (this.el.drawerMuscles) this.el.drawerMuscles.textContent = ex.muscles;
    if (this.el.drawerSafety) this.el.drawerSafety.textContent = ex.safety;

    if (this.el.drawerModifications) {
      this.el.drawerModifications.innerHTML = "";
      ex.modifications.forEach(mod => {
        const li = document.createElement("li");
        li.textContent = mod;
        this.el.drawerModifications.appendChild(li);
      });
    }

    if (this.el.drawerBackdrop) this.el.drawerBackdrop.classList.add("open");
    if (this.el.infoDrawer) this.el.infoDrawer.classList.add("open");
  }

  closeDrawer() {
    if (this.el.drawerBackdrop) this.el.drawerBackdrop.classList.remove("open");
    if (this.el.infoDrawer) this.el.infoDrawer.classList.remove("open");
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
        if (this.el.tabReels && !this.el.tabReels.classList.contains("hidden")) {
          e.preventDefault();
          this.scrollToNextReel();
        }
      } else if (e.code === "ArrowUp" || e.code === "PageUp") {
        if (this.el.tabReels && !this.el.tabReels.classList.contains("hidden")) {
          e.preventDefault();
          this.scrollToPrevReel();
        }
      } else if (e.code === "Space") {
        if (this.el.tabReels && !this.el.tabReels.classList.contains("hidden")) {
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

document.addEventListener("DOMContentLoaded", () => {
  window.fitFeed = new FitFeedApp();
});
