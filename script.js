/* ==========================================================================
   GỬI EM YÊU 🌸 - INTERACTIVE SCRIPTS
   Runaway Physics, Natural Care Package, "We Eat Us" Secret Layer & Audio Synth
   ========================================================================== */

// --- CONFIGURATION & CUSTOMIZATION ---
const CONFIG = {
  girlfriendNameVI: "Cô bé đáng yêu nhất 🌸",
  girlfriendNameEN: "The Prettiest Girl 🌸",
  yourNameVI: "Anh người yêu đẹp trai 🤵‍♂️",
  yourNameEN: "Your Handsome Boyfriend 🤵‍♂️",
};

// --- TRANSLATIONS (VI / EN) ---
const TRANSLATIONS = {
  vi: {
    brand: "Gửi riêng cho em 💌",
    step1Title: "Nghe nói hôm nay tâm trạng em không được tốt...",
    step1Subtitle: "Đừng buồn nha, anh đã chuẩn bị sẵn một gói nạp năng lượng đặc biệt để xua tan mệt mỏi cho em nè!",
    energyStatus: "Thanh nạp năng lượng:",
    careTeaTitle: "Trà gừng mật ong",
    careTeaDesc: "Bấm vào để uống một ngụm trà ấm bụng, xua tan mệt mỏi nha.",
    clickedTea: "Ấm áp quá nè +25% 💕",
    careHugTitle: "Cái ôm 3000%",
    careHugDesc: "Bấm vào để nhận một cái ôm thật chặt và ấm áp từ anh.",
    clickedHug: "Ôm chặt em nè +25% 💖",
    carePillTitle: "Vitamin Nụ Cười",
    carePillDesc: "Bấm vào để bốc một liều khen thưởng siêu ngọt ngào nha.",
    clickedPill: "Vui vẻ trở lại nha bé iu +25% ✨",
    carePatTitle: "Xoa đầu & Đắp chăn",
    carePatDesc: "Ngoan nào, mọi chuyện không vui để anh gánh bớt cho em nha.",
    clickedPat: "Thương em nhiều lắm +25% 🌸",
    btnToStep2: "Anh còn một bất ngờ này nữa cho em nè... ✨",
    tripBadge: "🇻🇳 HÀ NỘI MÙA THU CÙNG EM 🍂 🇻🇳",
    inviteTitle: "Em có muốn cùng anh đi vi vu Hà Nội mùa thu này không?",
    inviteSub: "Ăn phở nóng hổi lúc trời se lạnh, nhâm nhi cà phê trứng béo ngậy, dạo phố đi bộ Hồ Gươm và cùng nhau đi bộ ngắm hoàng hôn Hồ Tây... 🌇☕",
    questionPrompt: "Em chọn đi nàooo, không được chọn Không đâu ó 😜👇",
    yesBtnText: "CÓ LIỀN LUÔN",
    noBtnText: "Hông thèm",
    celebTitle: "YAYYY! CHỐT KÈO ĐI HÀ NỘI NHA 🥳",
    celebSub: "Anh biết là em sẽ chọn CÓ mà, mau lấy lại tinh thần để chuẩn bị đi chơi nhé bé iu 💖",
    confirmed: "ĐÃ XÁC NHẬN ✅",
    passengerLabel: "Hành khách:",
    passengerName: CONFIG.girlfriendNameVI,
    driverLabel: "Bạn đồng hành:",
    driverName: "Anh người yêu 🤵‍♂️",
    seatLabel: "Đồng hành:",
    seatVal: "Bên cạnh anh 💕",
    dateLabel: "Thời gian:",
    dateVal: "25 - 28/09 📅",
    benefitLabel: "Đặc quyền:",
    benefitVal: "Ăn uống thả ga, chill & chụp ảnh đẹp 📸",
    bucketTitle: "📋 Danh sách việc nhất định phải làm cùng nhau:",
    check1: "Uống cà phê trứng ngắm phố cổ ☕",
    check2: "Cùng nhau đi bộ dạo quanh Hồ Tây đón gió mát 🌇",
    check3: "Ăn phở đêm xì xụp ấm bụng 🥢",
    check4: "Ăn kem Tràng Tiền dạo phố đi bộ Hồ Gươm 🍦",
    check5: "Chụp 10,000 bức ảnh thật xinh cho em 📸",
    secretBtnText: "Mở khóa điều bí mật: \"WE EAT US\" 🌙🔓",
    secretHeadline: "WE EAT US 🌙✨",
    secretSub: "Không gian riêng của hai đứa: Netflix, vài lon bia mát lạnh, đồ ăn ngon và chúng mình.",
    beer1Title: "Netflix & Cozy Bed",
    beer1Desc: "Bật bộ phim yêu thích, cuộn tròn trong chăn ấm cùng nhau.",
    beer2Title: "Vài lon bia mát lạnh",
    beer2Desc: "Nhâm nhi lon bia, ăn snack và tâm sự thâu đêm.",
    beer3Title: "...và rồi \"We eat us\"",
    beer3Desc: "Không gian riêng tư, ngọt ngào chỉ thuộc về hai đứa mình.",
    replayBtn: "Chơi lại từ đầu 🔄",
    confettiBtn: "Thêm pháo hoa & tim 🎊💖",
    loveFooter: "Hôm nay vất vả rồi, nghỉ ngơi cho thoải mái nha em iu. Lúc nào anh cũng ở đây với em nè ✨",
    dodgeMessages: [
      "Hông bấm được đâu nè 😜",
      "Nút này bị hỏng rùi hehe 🛠️",
      "Trượt rồi nè nhanh tay lên bé iu 💨",
      "Chỉ được chọn Có thuii 💕",
      "Nút CÓ bự đùng kìa bấm đi mà 👉",
      "Em không thoát khỏi tay anh đâu nha 🏃‍♂️",
      "Năn nỉ bấm CÓ đi mà 🥺"
    ],
    compliments: [
      "🌸 Em luôn là cô gái đáng yêu và tuyệt vời nhất trong mắt anh nè",
      "✨ Hôm nay vất vả rồi, nghỉ ngơi cho thoải mái nha em iu",
      "💖 Có chuyện gì không vui cứ tâm sự với anh nha",
      "🧸 Thở một hơi thật sâu và thả lỏng người ra nào bé iu",
      "🍯 Mong em sớm lấy lại nụ cười rạng rỡ nha",
      "🌟 Lúc nào anh cũng ở đây ủng hộ và đồng hành cùng em nè"
    ],
    beerToasts: {
      netflix: "Cuộn tròn xem phim cùng em là bình yên nhất nè 🎬🍿",
      beer: "Cụng lon bia mát lạnh nè 🍺 Nhâm nhi và nói chuyện thâu đêm cùng em nha",
      we_eat_us: "Và rồi... chỉ có hai đứa mình ngọt ngào bên nhau thôi bé iu 🕯️✨"
    }
  },
  en: {
    brand: "Made with love for you 💌",
    step1Title: "I heard your mood isn't great today...",
    step1Subtitle: "Don't be sad, I've prepared a little energy recharge pack to help you unwind!",
    energyStatus: "Recharging your energy bar:",
    careTeaTitle: "Warm Ginger Honey Tea",
    careTeaDesc: "Click to take a sip of warm soothing tea to wash away the stress.",
    clickedTea: "So warm & cozy +25% 💕",
    careHugTitle: "Giant Warm Hug",
    careHugDesc: "Click to receive a super tight, warm embrace from me.",
    clickedHug: "Hugging you tight +25% 💖",
    carePillTitle: "Smile Vitamin Pills",
    carePillDesc: "Click to get an instant dose of sweet encouragement!",
    clickedPill: "Bright smile back +25% ✨",
    carePatTitle: "Head Pat & Cozy Blanket",
    carePatDesc: "Rest well, let me take care of your worries.",
    clickedPat: "Always here for you +25% 🌸",
    btnToStep2: "I have a special surprise waiting for you... ✨",
    tripBadge: "🇻🇳 AUTUMN HANOI WITH YOU 🍂 🇻🇳",
    inviteTitle: "Will you go on an autumn Hanoi trip with me?",
    inviteSub: "Cozy hot bowls of Pho, creamy authentic Egg Coffee, walking along Old Quarter, and strolling around West Lake together at sunset... 🌇☕",
    questionPrompt: "Choose wisely, 'No' is not an option 😜👇",
    yesBtnText: "YES OF COURSE!",
    noBtnText: "No thanks",
    celebTitle: "YAYYY! HANOI TRIP IS OFFICIAL!",
    celebSub: "I knew you would say YES! Recharge your energy and get ready to explore 💖",
    confirmed: "CONFIRMED ✅",
    passengerLabel: "Passenger:",
    passengerName: CONFIG.girlfriendNameEN,
    driverLabel: "Travel partner:",
    driverName: "Your boyfriend 🤵‍♂️",
    seatLabel: "Companion:",
    seatVal: "Right beside me 💕",
    dateLabel: "Date:",
    dateVal: "25 - 28/09 📅",
    benefitLabel: "Perks:",
    benefitVal: "Endless food dates, chill vibes & photos 📸",
    bucketTitle: "📋 Our Hanoi Bucket List:",
    check1: "Egg coffee in Hanoi Old Quarter ☕",
    check2: "Walking together around West Lake breeze 🌇",
    check3: "Late night hot Phở dates 🥢",
    check4: "Tràng Tiền Ice Cream walk by the lake 🍦",
    check5: "Take 10,000 aesthetic photos of you 📸",
    secretBtnText: "Unlock Secret: \"WE EAT US\" 🌙🔓",
    secretHeadline: "WE EAT US 🌙✨",
    secretSub: "Our private space: Netflix, cold beers, good food and just us.",
    beer1Title: "Netflix & Cozy Bed",
    beer1Desc: "Favorite movie, cuddling under warm blankets together.",
    beer2Title: "Cold beers & talks",
    beer2Desc: "Sipping cold beers, snacking and talking all night.",
    beer3Title: "...and then \"We eat us\"",
    beer3Desc: "Intimate, sweet private space belonging just to us.",
    replayBtn: "Play again 🔄",
    confettiBtn: "More fireworks & hearts 🎊💖",
    loveFooter: "You've worked hard today, rest up and relax. I'm always right here with you! ✨",
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
      "🌸 You are always the prettiest and most wonderful person in my heart!",
      "✨ Let all the stress and worries fly away with the wind today!",
      "💖 I'm always right here by your side, loving you endlessly!",
      "🧸 Take a rest, breathe deep, and relax sweetie!",
      "🍯 Seeing you smile is the happiest thing in my world!",
      "🌟 Your smile is my biggest source of positive energy!",
      "💌 Love you so much, always and forever!"
    ],
    beerToasts: {
      netflix: "Cuddling and watching movies together is pure peace! 🎬🍿",
      beer: "Clinking cold beers! 🍺 Cozy snacks and late-night heart-to-heart talks!",
      we_eat_us: "And then... just the two of us, sweet and close! 🕯️💖"
    }
  }
};

// Current State
let currentLang = 'vi';
let energy = 25;
let dodgeCount = 0;
let soundEnabled = true;

// Web Audio API Synthesizer
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

  playCheers() {
    if (!soundEnabled) return;
    this.init();
    const now = this.ctx.currentTime;
    // Two high resonant crystal tones to mimic clinking glasses
    [2093.0, 2793.8].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.02);

      gain.gain.setValueAtTime(0.25, now + i * 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + i * 0.02);
      osc.stop(now + 0.5);
    });
  }
}

const sounds = new SoundSynth();

// ==========================================================================
// DOM INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initFloatingBackground();
  initLanguageToggle();
  initSoundToggle();
  initStep1CarePackage();
  initStep2RunawayNo();
  initStep3Celebration();
  initSecretLayer();
});

// 1. Ambient Floating Background
function initFloatingBackground() {
  const container = document.getElementById('floatingBg');
  const symbols = ['💖', '✨', '🌸', '🍵', '☕', '🛵', '🧸', '💕', '⭐', '🍻'];

  for (let i = 0; i < 20; i++) {
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

// 4. STEP 1: CARE PACKAGE
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
      
      const feedback = el.querySelector('.click-feedback');
      if (feedback) {
        feedback.classList.add('show');
        setTimeout(() => feedback.classList.remove('show'), 1500);
      }

      el.classList.add('claimed');

      if (energy < 100) {
        energy = Math.min(100, energy + 25);
        updateEnergyBar();
      }

      if (item.id === 'careTea') {
        mascotAvatar.innerText = '🥰';
      } else if (item.id === 'careHug') {
        mascotAvatar.innerText = '🤗';
      } else if (item.id === 'carePill') {
        mascotAvatar.innerText = '✨';
        const pool = TRANSLATIONS[currentLang].compliments;
        const randomCompliment = pool[Math.floor(Math.random() * pool.length)];
        complimentText.innerText = randomCompliment;
        complimentToast.style.display = 'flex';
      } else if (item.id === 'carePat') {
        mascotAvatar.innerText = '🌸';
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

// 5. STEP 2: RUNAWAY "NO" BUTTON
function initStep2RunawayNo() {
  const noBtn = document.getElementById('noBtn');
  const noBtnText = document.getElementById('noBtnText');
  const yesBtn = document.getElementById('yesBtn');
  const dodgeMsg = document.getElementById('dodgeMsg');
  const playground = document.getElementById('buttonsPlayground');

  function escapeButton(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    sounds.playWhoosh();
    dodgeCount++;

    const rect = playground.getBoundingClientRect();
    const btnWidth = noBtn.offsetWidth || 100;
    const btnHeight = noBtn.offsetHeight || 44;

    const maxX = Math.max(20, rect.width - btnWidth - 20);
    const maxY = Math.max(20, rect.height - btnHeight - 10);

    let randX = Math.floor(Math.random() * maxX) - (rect.width / 2 - btnWidth / 2);
    let randY = Math.floor(Math.random() * maxY) - (rect.height / 2 - btnHeight / 2);

    randX = Math.max(-130, Math.min(130, randX));
    randY = Math.max(-60, Math.min(60, randY));

    if (Math.abs(randX) < 40) randX = randX < 0 ? -70 : 70;
    if (Math.abs(randY) < 30) randY = randY < 0 ? -50 : 50;

    noBtn.style.position = 'relative';
    noBtn.style.transform = `translate(${randX}px, ${randY}px)`;

    const newScale = Math.min(1 + dodgeCount * 0.14, 1.8);
    yesBtn.style.transform = `scale(${newScale})`;

    const msgs = TRANSLATIONS[currentLang].dodgeMessages;
    const randMsg = msgs[dodgeCount % msgs.length];
    dodgeMsg.innerText = randMsg;
    dodgeMsg.style.opacity = '1';

    if (dodgeCount > 1) {
      const funnyNoTexts = currentLang === 'vi' 
        ? ["Hỏng rùi 😜", "Trượt òi 💨", "Không được!", "Bấm CÓ đi 💖", "Lêu lêu 🏃‍♂️"]
        : ["Nope 😜", "Too slow 💨", "Click YES 💖", "Can't touch!"];
      noBtnText.innerText = funnyNoTexts[dodgeCount % funnyNoTexts.length];
    }
  }

  noBtn.addEventListener('mouseenter', escapeButton);
  noBtn.addEventListener('mouseover', escapeButton);

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

  noBtn.addEventListener('touchstart', (e) => {
    escapeButton(e);
  }, { passive: false });

  noBtn.addEventListener('pointerdown', (e) => {
    escapeButton(e);
  });

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

    const mascotAvatar = document.getElementById('mascotAvatar');
    if (mascotAvatar) mascotAvatar.innerText = '🥺';

    // Hide secret layer if opened
    const secretLayer = document.getElementById('secretLayer');
    if (secretLayer) secretLayer.classList.remove('show');

    switchStep('step3', 'step1');
  });

  confettiMoreBtn.addEventListener('click', () => {
    sounds.playFanfare();
    triggerGrandCelebration();
  });
}

// 7. SECRET LAYER: "WE EAT US" & BEER SELECTION
function initSecretLayer() {
  const unlockBtn = document.getElementById('secretUnlockBtn');
  const secretLayer = document.getElementById('secretLayer');
  const beerCards = document.querySelectorAll('.beer-card');
  const cheersToast = document.getElementById('cheersToast');
  const cheersMessage = document.getElementById('cheersMessage');

  unlockBtn.addEventListener('click', () => {
    sounds.playCheers();
    secretLayer.classList.toggle('show');
    
    if (secretLayer.classList.contains('show')) {
      triggerGoldConfetti();
      secretLayer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  beerCards.forEach(card => {
    card.addEventListener('click', () => {
      sounds.playCheers();
      
      beerCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      const beerType = card.getAttribute('data-beer');
      const toastText = TRANSLATIONS[currentLang].beerToasts[beerType] || "Chạm ly cái nè! 🍻";

      cheersMessage.innerText = toastText;
      cheersToast.style.display = 'flex';

      triggerMiniConfetti();
    });
  });
}

// Step Switching
function switchStep(fromId, toId) {
  const fromEl = document.getElementById(fromId);
  const toEl = document.getElementById(toId);

  if (fromEl) {
    fromEl.classList.remove('active');
    fromEl.style.display = 'none';
  }

  if (toEl) {
    toEl.style.display = 'block';
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

function triggerGoldConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffd32a', '#ffa502', '#ff6348', '#ff4757']
    });
  }
}

function triggerGrandCelebration() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ff4757', '#ff758c', '#ffa502', '#2ed573', '#7452ff']
    });

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
