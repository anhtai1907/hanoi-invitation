/* ==========================================================================
   GỬI EM YÊU 🌸 - INTERACTIVE SCRIPTS
   Runaway Button Physics, Care Package Energy, Audio Synth & Confetti
   ========================================================================== */

// --- CONFIGURATION & CUSTOMIZATION ---
const CONFIG = {
  girlfriendNameVI: "Cô bé đáng yêu nhất vũ trụ 🌸",
  girlfriendNameEN: "The Prettiest Girl in the World 🌸",
  yourNameVI: "Anh người yêu đẹp trai 🤵‍♂️",
  yourNameEN: "Your Handsome Boyfriend 🤵‍♂️",
};

// --- TRANSLATIONS (VI / EN) ---
const TRANSLATIONS = {
  vi: {
    brand: "Gửi riêng cho em 💌",
    step1Title: "Nghe nói hôm nay em không được khỏe...",
    step1Subtitle: "Đừng buồn nha, anh đã chuẩn bị sẵn một gói chăm sóc đặc biệt để nạp năng lượng cho em nè!",
    energyStatus: "Thanh hồi máu cho em:",
    careTeaTitle: "Trà gừng mật ong",
    careTeaDesc: "Bấm vào để uống một ngụm trà ấm bụng, xua tan mệt mỏi nha.",
    clickedTea: "Ấm áp quá nè +25% 💕",
    careHugTitle: "Cái ôm 3000%",
    careHugDesc: "Bấm vào để nhận một cái ôm thật chặt và ấm áp từ anh.",
    clickedHug: "Ôm chặt em nè +25% 💖",
    carePillTitle: "Vitamin Nụ Cười",
    carePillDesc: "Bấm vào để bốc một liều khen thưởng siêu ngọt ngào!",
    clickedPill: "Bé ngoan chóng khỏe +25% ✨",
    carePatTitle: "Xoa đầu & Đắp chăn",
    carePatDesc: "Ngoan nào, mọi mệt mỏi để anh gánh bớt cho em nha.",
    clickedPat: "Thương em nhất trần đời +25% 🌸",
    btnToStep2: "Anh còn một bất ngờ này nữa cho em nè... ✨",
    tripBadge: "🇻🇳 CHUYẾN ĐI HẸN HÒ ĐẶC BIỆT 🇻🇳",
    inviteTitle: "Em có muốn cùng anh đi vi vu một chuyến Hà Nội thật tuyệt vời không?",
    inviteSub: "Ăn phở nóng hổi lúc trời se lạnh, nhâm nhi cà phê trứng béo ngậy, dạo Hồ Gươm và để anh chở em ngắm hoàng hôn Hồ Tây... 🌇☕",
    questionPrompt: "Em chọn đi nàooo, không được từ chối đâu ó 🥺👇",
    yesBtnText: "CÓ LIỀN LUÔN!",
    noBtnText: "Hông thèm",
    celebTitle: "YAYYY! CHỐT KÈO ĐI HÀ NỘI NHA!",
    celebSub: "Anh biết là em sẽ chọn CÓ mà! Mau hết ốm để chúng mình cùng đi quẩy nha em yêu 💖",
    confirmed: "ĐÃ XÁC NHẬN ✅",
    passengerLabel: "Hành khách:",
    passengerName: CONFIG.girlfriendNameVI,
    driverLabel: "Tài xế kiêm hướng dẫn viên:",
    driverName: CONFIG.yourNameVI,
    seatLabel: "Chỗ ngồi:",
    seatVal: "Ôm sau xe anh 🛵",
    dateLabel: "Thời gian:",
    dateVal: "Chờ em khỏe lại 📅",
    benefitLabel: "Đặc quyền:",
    benefitVal: "Ăn uống thả ga, chụp ảnh đẹp 📸",
    bucketTitle: "📋 Danh sách việc nhất định phải làm cùng nhau:",
    check1: "Uống cà phê trứng ngắm phố cổ ☕",
    check2: "Lượn xe quanh Hồ Tây đón gió mát 🛵💨",
    check3: "Ăn phở đêm xì xụp ấm bụng 🥢",
    check4: "Ăn kem Tràng Tiền dạo Hồ Gươm 🍦",
    check5: "Chụp 10,000 bức ảnh sống ảo thật xinh 📸",
    replayBtn: "Chơi lại từ đầu 🔄",
    confettiBtn: "Thêm pháo hoa & tim 🎊💖",
    loveFooter: "Ngoan, uống thuốc rồi ngủ sớm cho mau khỏe nha công chúa của anh! Yêu em nhiều lắmmm 💕",
    dodgeMessages: [
      "Hông bấm được đâu lêu lêu 😜",
      "Nút này bị hỏng rùi hehe 🛠️",
      "Trượt rồi nè nhanh tay lên 💨",
      "Chỉ được chọn Có thuii 💕",
      "Nút CÓ bự đùng kìa bấm đi mà 👉",
      "Em không thoát khỏi tay anh đâu 🏃‍♂️",
      "Năn nỉ bấm CÓ đi mà 🥺"
    ],
    compliments: [
      "🌸 Em là cô gái xinh đẹp và đáng yêu nhất trần đời!",
      "✨ Dù mệt mỏi thế nào thì nụ cười của em vẫn luôn tỏa nắng nhất!",
      "💖 Có anh ở đây rồi, mọi chuyện cứ để anh lo nha!",
      "🧸 Bé ngoan uống nhiều nước ấm và giữ ấm nhé!",
      "🍯 Em là điều ngọt ngào nhất trong cuộc sống của anh!",
      "🌟 Mong nụ cười sớm trở lại trên môi em bé xinh đẹp!",
      "💌 Yêu em nhiều hơn ngày hôm qua và ít hơn ngày mai!"
    ]
  },
  en: {
    brand: "Made with love for you 💌",
    step1Title: "I heard you're not feeling well today...",
    step1Subtitle: "Don't worry my love, I've prepared a special virtual care package to boost your energy!",
    energyStatus: "Your recovery energy bar:",
    careTeaTitle: "Warm Ginger Honey Tea",
    careTeaDesc: "Click to take a sip of warm soothing tea to wash away the tiredness.",
    clickedTea: "So warm & cozy +25% 💕",
    careHugTitle: "Giant Warm Hug",
    careHugDesc: "Click to receive a super tight, warm embrace from me.",
    clickedHug: "Hugging you tight +25% 💖",
    carePillTitle: "Smile Vitamin Pills",
    carePillDesc: "Click to get an instant dose of sweet affection and love!",
    clickedPill: "Get well soon cutie +25% ✨",
    carePatTitle: "Head Pat & Cozy Blanket",
    carePatDesc: "Rest well, let me take care of all your worries.",
    clickedPat: "Love you the most +25% 🌸",
    btnToStep2: "I have a special surprise waiting for you... ✨",
    tripBadge: "🇻🇳 SPECIAL ROMANTIC GETAWAY 🇻🇳",
    inviteTitle: "Will you go on an unforgettable Hanoi trip adventure with me?",
    inviteSub: "Cozy hot bowls of Pho, creamy authentic Egg Coffee, walking around Old Quarter, and chasing the West Lake sunset together on a scooter... 🌇☕",
    questionPrompt: "Choose wisely, 'No' is not an option 🥺👇",
    yesBtnText: "YES OF COURSE!",
    noBtnText: "No thanks",
    celebTitle: "YAYYY! HANOI TRIP IS OFFICIAL!",
    celebSub: "I knew you would say YES! Get well soon so we can explore together my love 💖",
    confirmed: "CONFIRMED ✅",
    passengerLabel: "Passenger:",
    passengerName: CONFIG.girlfriendNameEN,
    driverLabel: "Driver & Personal Tour Guide:",
    driverName: CONFIG.yourNameEN,
    seatLabel: "Seat:",
    seatVal: "Behind my scooter 🛵",
    dateLabel: "Date:",
    dateVal: "As soon as you feel well 📅",
    benefitLabel: "Perks:",
    benefitVal: "Endless food dates & 10k photos 📸",
    bucketTitle: "📋 Our Hanoi Bucket List:",
    check1: "Egg coffee in Hanoi Old Quarter ☕",
    check2: "Scooter cruise along West Lake sunset 🛵💨",
    check3: "Late night hot Phở dates 🥢",
    check4: "Tràng Tiền Ice Cream walk by the lake 🍦",
    check5: "Take 10,000 aesthetic photos of you 📸",
    replayBtn: "Play again 🔄",
    confettiBtn: "More fireworks & hearts 🎊💖",
    loveFooter: "Take your medicine and sleep early to recover soon my princess! Love you so much 💕",
    dodgeMessages: [
      "Too slow! Nice try 😜",
      "This button is broken hehe 🛠️",
      "You can't escape my love 💕",
      "Only YES is allowed!",
      "The YES button is right there 👉",
      "Error 404: No not found 💨",
      "Please say YES 🥺"
    ],
    compliments: [
      "🌸 You are the prettiest and sweetest girl in the universe!",
      "✨ Your smile always brightens up my whole world!",
      "💖 I'm always right here with you, don't worry about anything!",
      "🧸 Drink plenty of warm water and stay cozy!",
      "🍯 You are the sweetest blessing in my life!",
      "🌟 Can't wait to see your radiant smile again soon!",
      "💌 I love you more and more every single day!"
    ]
  }
};

// Current State
let currentLang = 'vi';
let energy = 25;
let dodgeCount = 0;
let soundEnabled = true;

// Web Audio API Synthesizer (Zero External Dependencies)
class SoundSynth {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop() {
    if (!soundEnabled) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sine';
    const now = this.ctx.currentTime;
    osc.frequency.setValueAtTime(450, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  }

  playChime() {
    if (!soundEnabled) return;
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime + idx * 0.07;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.4);
    });
  }

  playFanfare() {
    if (!soundEnabled) return;
    this.init();
    const melody = [
      { freq: 523.25, duration: 0.12 }, // C5
      { freq: 659.25, duration: 0.12 }, // E5
      { freq: 783.99, duration: 0.12 }, // G5
      { freq: 1046.50, duration: 0.35 } // C6
    ];

    let time = this.ctx.currentTime;
    melody.forEach(item => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(item.freq, time);

      gain.gain.setValueAtTime(0.25, time);
      gain.gain.exponentialRampToValueAtTime(0.01, time + item.duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(time);
      osc.stop(time + item.duration);

      time += item.duration;
    });
  }

  playWhoosh() {
    if (!soundEnabled) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(150, now + 0.1);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.1);
  }
}

const sounds = new SoundSynth();

// ==========================================================================
// DOM ELEMENTS & EVENT BINDINGS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initFloatingBackground();
  initLanguageToggle();
  initSoundToggle();
  initStep1CarePackage();
  initStep2RunawayNo();
  initStep3Celebration();
});

// 1. Ambient Floating Hearts / Sparkles Background
function initFloatingBackground() {
  const container = document.getElementById('floatingBg');
  const symbols = ['💖', '✨', '🌸', '🍵', '☕', '🛵', '🧸', '💕', '⭐'];

  for (let i = 0; i < 18; i++) {
    const el = document.createElement('div');
    el.className = 'floating-item';
    el.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = `${Math.random() * 96}vw`;
    el.style.animationDuration = `${10 + Math.random() * 12}s`;
    el.style.animationDelay = `${Math.random() * 8}s`;
    el.style.fontSize = `${1 + Math.random() * 1.2}rem`;
    container.appendChild(el);
  }
}

// 2. Language Switcher
function initLanguageToggle() {
  const langBtn = document.getElementById('langToggle');
  const langText = document.getElementById('langText');

  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'vi' ? 'en' : 'vi';
    langText.innerText = currentLang === 'vi' ? '🇻🇳 VI' : '🇬🇧 EN';
    applyTranslations();
    sounds.playPop();
  });
}

function applyTranslations() {
  const dict = TRANSLATIONS[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerText = dict[key];
    }
  });
}

// 3. Sound Toggle
function initSoundToggle() {
  const soundBtn = document.getElementById('soundToggle');
  const soundIcon = document.getElementById('soundIcon');

  soundBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundIcon.innerText = soundEnabled ? '🎵' : '🔇';
    if (soundEnabled) {
      sounds.init();
      sounds.playPop();
    }
  });
}

// 4. STEP 1: CARE PACKAGE INTERACTIONS
function initStep1CarePackage() {
  const careCards = [
    { id: 'careTea', emoji: '🍵' },
    { id: 'careHug', emoji: '🫂' },
    { id: 'carePill', emoji: '💊' },
    { id: 'carePat', emoji: '🧸' }
  ];

  const mascotAvatar = document.getElementById('mascotAvatar');
  const complimentToast = document.getElementById('complimentToast');
  const complimentText = document.getElementById('complimentText');
  const toStep2Btn = document.getElementById('toStep2Btn');

  careCards.forEach(item => {
    const el = document.getElementById(item.id);
    if (!el) return;

    el.addEventListener('click', () => {
      sounds.playChime();
      
      // Visual feedback popup
      const feedback = el.querySelector('.click-feedback');
      if (feedback) {
        feedback.classList.add('show');
        setTimeout(() => feedback.classList.remove('show'), 1500);
      }

      // Mark claimed
      el.classList.add('claimed');

      // Increase energy
      if (energy < 100) {
        energy = Math.min(100, energy + 25);
        updateEnergyBar();
      }

      // Dynamic Mascot Reactions
      if (item.id === 'careTea') {
        mascotAvatar.innerText = '☕🥰';
      } else if (item.id === 'careHug') {
        mascotAvatar.innerText = '🤗💖';
      } else if (item.id === 'carePill') {
        mascotAvatar.innerText = '🤩✨';
        // Random compliment
        const pool = TRANSLATIONS[currentLang].compliments;
        const randomCompliment = pool[Math.floor(Math.random() * pool.length)];
        complimentText.innerText = randomCompliment;
        complimentToast.style.display = 'flex';
      } else if (item.id === 'carePat') {
        mascotAvatar.innerText = '😴🌸';
      }

      if (energy === 100) {
        toStep2Btn.classList.add('pulse-btn');
        triggerMiniConfetti();
      }
    });
  });

  toStep2Btn.addEventListener('click', () => {
    sounds.playPop();
    switchStep('step1', 'step2');
  });
}

function updateEnergyBar() {
  const progressBar = document.getElementById('progressBar');
  const energyPercent = document.getElementById('energyPercent');
  progressBar.style.width = `${energy}%`;
  energyPercent.innerText = `${energy}%`;
}

// 5. STEP 2: THE RUNAWAY "NO" BUTTON (IMPOSSIBLE TO CLICK)
function initStep2RunawayNo() {
  const noBtn = document.getElementById('noBtn');
  const noBtnText = document.getElementById('noBtnText');
  const yesBtn = document.getElementById('yesBtn');
  const dodgeMsg = document.getElementById('dodgeMsg');
  const playground = document.getElementById('buttonsPlayground');

  // Dodge Logic
  function escapeButton(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    sounds.playWhoosh();
    dodgeCount++;

    // Calculate safe boundary inside playground or window
    const rect = playground.getBoundingClientRect();
    const btnWidth = noBtn.offsetWidth || 100;
    const btnHeight = noBtn.offsetHeight || 44;

    // Range of motion within the playground / card
    const maxX = Math.max(20, rect.width - btnWidth - 20);
    const maxY = Math.max(20, rect.height - btnHeight - 10);

    // Generate random positions
    let randX = Math.floor(Math.random() * maxX) - (rect.width / 2 - btnWidth / 2);
    let randY = Math.floor(Math.random() * maxY) - (rect.height / 2 - btnHeight / 2);

    // Keep within reasonable limits
    randX = Math.max(-130, Math.min(130, randX));
    randY = Math.max(-60, Math.min(60, randY));

    // Ensure it noticeably moves away
    if (Math.abs(randX) < 40) randX = randX < 0 ? -70 : 70;
    if (Math.abs(randY) < 30) randY = randY < 0 ? -50 : 50;

    noBtn.style.position = 'relative';
    noBtn.style.transform = `translate(${randX}px, ${randY}px)`;

    // YES button gets bigger!
    const newScale = Math.min(1 + dodgeCount * 0.14, 1.8);
    yesBtn.style.transform = `scale(${newScale})`;

    // Funny messages
    const msgs = TRANSLATIONS[currentLang].dodgeMessages;
    const randMsg = msgs[dodgeCount % msgs.length];
    dodgeMsg.innerText = randMsg;
    dodgeMsg.style.opacity = '1';

    // No button text changes playfully
    if (dodgeCount > 1) {
      const funnyNoTexts = currentLang === 'vi' 
        ? ["Hỏng rùi 😜", "Trượt òi 💨", "Không được!", "Bấm CÓ đi 💖", "Lêu lêu 🏃‍♂️"]
        : ["Nope 😜", "Too slow 💨", "Click YES 💖", "Can't touch!"];
      noBtnText.innerText = funnyNoTexts[dodgeCount % funnyNoTexts.length];
    }
  }

  // Desktop Hover & Proximity Detection
  noBtn.addEventListener('mouseenter', escapeButton);
  noBtn.addEventListener('mouseover', escapeButton);

  // Proximity trigger on container mousemove
  playground.addEventListener('mousemove', (e) => {
    const noRect = noBtn.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const btnCenterX = noRect.left + noRect.width / 2;
    const btnCenterY = noRect.top + noRect.height / 2;

    const dist = Math.hypot(mouseX - btnCenterX, mouseY - btnCenterY);
    if (dist < 75) {
      escapeButton();
    }
  });

  // Mobile Touch Events (Teleport before click can register)
  noBtn.addEventListener('touchstart', (e) => {
    escapeButton(e);
  }, { passive: false });

  noBtn.addEventListener('pointerdown', (e) => {
    escapeButton(e);
  });

  // Click on YES Button -> Triumph!
  yesBtn.addEventListener('click', () => {
    sounds.playFanfare();
    triggerGrandCelebration();
    switchStep('step2', 'step3');
  });
}

// 6. STEP 3: CELEBRATION & ACTIONS
function initStep3Celebration() {
  const replayBtn = document.getElementById('replayBtn');
  const confettiMoreBtn = document.getElementById('confettiMoreBtn');

  replayBtn.addEventListener('click', () => {
    sounds.playPop();
    // Reset state
    energy = 25;
    dodgeCount = 0;
    updateEnergyBar();
    
    const yesBtn = document.getElementById('yesBtn');
    if (yesBtn) yesBtn.style.transform = 'scale(1)';

    const noBtn = document.getElementById('noBtn');
    if (noBtn) {
      noBtn.style.transform = 'translate(0px, 0px)';
      const noBtnText = document.getElementById('noBtnText');
      if (noBtnText) noBtnText.innerText = TRANSLATIONS[currentLang].noBtnText;
    }

    const dodgeMsg = document.getElementById('dodgeMsg');
    if (dodgeMsg) dodgeMsg.innerText = '';

    switchStep('step3', 'step1');
  });

  confettiMoreBtn.addEventListener('click', () => {
    sounds.playFanfare();
    triggerGrandCelebration();
  });
}

// Switch between screens smoothly
function switchStep(fromId, toId) {
  const fromEl = document.getElementById(fromId);
  const toEl = document.getElementById(toId);

  if (fromEl) {
    fromEl.classList.remove('active');
    fromEl.style.display = 'none';
  }

  if (toEl) {
    toEl.style.display = 'block';
    // Small delay for CSS animation
    setTimeout(() => {
      toEl.classList.add('active');
    }, 20);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Confetti Generators
function triggerMiniConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#ff4757', '#ff6b81', '#ffa502', '#2ed573']
    });
  }
}

function triggerGrandCelebration() {
  if (typeof confetti === 'function') {
    // 1. Center burst
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ff4757', '#ff758c', '#ffa502', '#2ed573', '#7452ff']
    });

    // 2. Left and right cannons
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 250);

    // 3. Heart shower
    setTimeout(() => {
      confetti({
        particleCount: 40,
        spread: 100,
        shapes: ['circle'],
        scalar: 1.2,
        colors: ['#ff4757', '#ff758c', '#ffb8c6']
      });
    }, 500);
  }
}
