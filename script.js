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
    fromCode: "SÀI GÒN",
    fromCity: "Nơi xuất phát 🛫",
    toCode: "HÀ NỘI",
    toCity: "Mùa thu cùng em 🍂",
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
    secretBtnClose: "Đóng điều bí mật 🌙✖",
    secretHeadline: "WE EAT US 🌙✨",
    secretSub: "Không gian riêng của hai đứa: Netflix, vài lon bia mát lạnh, đồ ăn ngon và chúng mình.",
    secretStepHint: "👇 Chạm mở khóa từng bước dưới đây nha bé iu:",
    beer1Title: "Khui lon bia mát & ăn vặt",
    beer1Desc: "Nhâm nhi chút bia, ăn snack và tâm sự thâu đêm cùng nhau.",
    beer2LockedTitle: "Bước 2: Bí mật đang đợi em 🤫",
    beer2LockedDesc: "Hoàn thành Bước 1 để mở khóa điều tiếp theo nha...",
    beer2Title: "Bật Netflix & lên giường đắp chăn ấm",
    beer2Desc: "Chọn bộ phim yêu thích, cuộn tròn trong chăn xem cùng nhau.",
    beer3LockedTitle: "Bước 3: Điều ngọt ngào nhất 🌙",
    beer3LockedDesc: "Bí mật chỉ mở ra sau khi hoàn thành 2 bước trước nha...",
    beer3Title: "...và rồi \"We eat us\"",
    beer3Desc: "Không gian riêng tư, ngọt ngào chỉ thuộc về hai đứa mình.",
    secretCompleteText: "Trọn vẹn một buổi tối tuyệt vời của hai đứa mình... Thương em 💕",
    stepLockedToast: "Mở khóa bước trước đã nè bé iu 🌸",
    replayBtn: "Chơi lại từ đầu 🔄",
    confettiBtn: "Thêm pháo hoa & tim 🎊💖",
    loveFooter: "Thương em 💕",
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
      beer: "Bước 1 xong: Cụng lon bia mát lạnh nè 🍺 Nhâm nhi và nói chuyện thâu đêm nha",
      netflix: "Bước 2 xong: Bật phim hay và cuộn tròn trong chăn ấm cùng em 🎬🍿",
      we_eat_us: "Bước 3 xong: Và rồi... chỉ có hai đứa mình ngọt ngào bên nhau 🕯️✨"
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
    fromCode: "SAI GON",
    fromCity: "Departure 🛫",
    toCode: "HA NOI",
    toCity: "Autumn with you 🍂",
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
    secretBtnClose: "Close Secret 🌙✖",
    secretHeadline: "WE EAT US 🌙✨",
    secretSub: "Our private space: Netflix, cold beers, good food and just us.",
    secretStepHint: "👇 Tap to unlock each step of our night in order:",
    beer1Title: "1. Cold beers & snacks",
    beer1Desc: "Sipping cold beers, snacking and talking all night.",
    beer2LockedTitle: "Step 2: Mystery waiting 🤫",
    beer2LockedDesc: "Complete Step 1 to unlock the next surprise...",
    beer2Title: "2. Netflix & cozy blankets",
    beer2Desc: "Favorite movie, cuddling in bed under warm blankets.",
    beer3LockedTitle: "Step 3: The sweetest moment 🌙",
    beer3LockedDesc: "Secret only reveals after completing previous steps...",
    beer3Title: "3. ...and then \"We eat us\"",
    beer3Desc: "Intimate, sweet private space belonging just to us.",
    secretCompleteText: "A perfect cozy night of our own... Always with you 💕",
    stepLockedToast: "Please unlock the previous step first 🌸",
    replayBtn: "Play again 🔄",
    confettiBtn: "More fireworks & hearts 🎊💖",
    loveFooter: "Love you 💕",
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
  renderSecretLayer();
}

// Accessibility Helper: Click & Keyboard (Enter/Space) Support
function bindInteractiveAction(el, callback) {
  if (!el) return;
  el.addEventListener('click', callback);
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback(e);
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

    bindInteractiveAction(el, () => {
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
    energy = 0;
    dodgeCount = 0;
    updateEnergyBar();

    const careCards = document.querySelectorAll('.care-card');
    careCards.forEach(c => c.classList.remove('claimed'));

    const toStep2Btn = document.getElementById('toStep2Btn');
    if (toStep2Btn) toStep2Btn.classList.remove('pulse-btn');

    const complimentToast = document.getElementById('complimentToast');
    if (complimentToast) complimentToast.style.display = 'none';

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

    // Reset secret state cleanly
    secretState.isOpen = false;
    secretState.unlockedStep = 1;
    secretState.completedSteps.clear();
    renderSecretLayer();

    const cheersToast = document.getElementById('cheersToast');
    if (cheersToast) cheersToast.style.display = 'none';

    switchStep('step3', 'step1');
  });

  confettiMoreBtn.addEventListener('click', () => {
    sounds.playFanfare();
    triggerGrandCelebration();
  });
}

// 7. SECRET LAYER: STATE-DRIVEN PROGRESSIVE MYSTERY STORY RITUAL
const secretState = {
  isOpen: false,
  unlockedStep: 1, // 1: only step 1 unlocked, 2: steps 1 & 2 unlocked, 3: all steps unlocked
  completedSteps: new Set()
};

function renderSecretLayer() {
  const secretLayer = document.getElementById('secretLayer');
  const unlockBtn = document.getElementById('secretUnlockBtn');
  const secretBtnTextSpan = document.getElementById('secretBtnTextSpan');
  const secretCompleteCard = document.getElementById('secretCompleteCard');

  if (secretLayer) {
    secretLayer.classList.toggle('show', secretState.isOpen);
    secretLayer.setAttribute('aria-hidden', String(!secretState.isOpen));
  }

  if (unlockBtn) {
    unlockBtn.setAttribute('aria-expanded', String(secretState.isOpen));
  }

  if (secretBtnTextSpan) {
    secretBtnTextSpan.innerText = secretState.isOpen 
      ? TRANSLATIONS[currentLang].secretBtnClose 
      : TRANSLATIONS[currentLang].secretBtnText;
  }

  // Step 1
  const step1 = document.getElementById('secretStep1');
  if (step1) {
    const isCompleted = secretState.completedSteps.has(1);
    step1.className = `beer-card ${isCompleted ? 'completed' : (secretState.unlockedStep === 1 ? 'active-step' : '')}`;
    const icon1 = document.getElementById('beerIcon1');
    const title1 = document.getElementById('beerTitle1');
    const desc1 = document.getElementById('beerDesc1');
    if (icon1) icon1.innerText = '🍺';
    if (title1) title1.innerText = TRANSLATIONS[currentLang].beer1Title;
    if (desc1) desc1.innerText = TRANSLATIONS[currentLang].beer1Desc;
  }

  // Step 2
  const step2 = document.getElementById('secretStep2');
  if (step2) {
    const isUnlocked = secretState.unlockedStep >= 2;
    const isCompleted = secretState.completedSteps.has(2);
    const icon2 = document.getElementById('beerIcon2');
    const title2 = document.getElementById('beerTitle2');
    const desc2 = document.getElementById('beerDesc2');

    if (isUnlocked) {
      step2.className = `beer-card ${isCompleted ? 'completed' : (secretState.unlockedStep === 2 && !isCompleted ? 'active-step' : '')}`;
      if (icon2) icon2.innerText = '🎬';
      if (title2) title2.innerText = TRANSLATIONS[currentLang].beer2Title;
      if (desc2) desc2.innerText = TRANSLATIONS[currentLang].beer2Desc;
    } else {
      step2.className = 'beer-card locked-step';
      if (icon2) icon2.innerText = '🔒';
      if (title2) title2.innerText = TRANSLATIONS[currentLang].beer2LockedTitle;
      if (desc2) desc2.innerText = TRANSLATIONS[currentLang].beer2LockedDesc;
    }
  }

  // Step 3
  const step3 = document.getElementById('secretStep3');
  if (step3) {
    const isUnlocked = secretState.unlockedStep >= 3;
    const isCompleted = secretState.completedSteps.has(3);
    const icon3 = document.getElementById('beerIcon3');
    const title3 = document.getElementById('beerTitle3');
    const desc3 = document.getElementById('beerDesc3');

    if (isUnlocked) {
      step3.className = `beer-card ${isCompleted ? 'completed' : (secretState.unlockedStep === 3 && !isCompleted ? 'active-step' : '')}`;
      if (icon3) icon3.innerText = '🕯️';
      if (title3) title3.innerText = TRANSLATIONS[currentLang].beer3Title;
      if (desc3) desc3.innerText = TRANSLATIONS[currentLang].beer3Desc;
    } else {
      step3.className = 'beer-card locked-step';
      if (icon3) icon3.innerText = '🔒';
      if (title3) title3.innerText = TRANSLATIONS[currentLang].beer3LockedTitle;
      if (desc3) desc3.innerText = TRANSLATIONS[currentLang].beer3LockedDesc;
    }
  }

  // Secret Complete Card
  if (secretCompleteCard) {
    if (secretState.completedSteps.size >= 3) {
      secretCompleteCard.classList.add('show');
      const completeText = secretCompleteCard.querySelector('.complete-text');
      if (completeText) completeText.innerText = TRANSLATIONS[currentLang].secretCompleteText;
    } else {
      secretCompleteCard.classList.remove('show');
    }
  }
}

function initSecretLayer() {
  const unlockBtn = document.getElementById('secretUnlockBtn');
  const secretLayer = document.getElementById('secretLayer');
  const cheersToast = document.getElementById('cheersToast');
  const cheersMessage = document.getElementById('cheersMessage');

  const step1 = document.getElementById('secretStep1');
  const step2 = document.getElementById('secretStep2');
  const step3 = document.getElementById('secretStep3');

  if (unlockBtn) {
    unlockBtn.addEventListener('click', () => {
      secretState.isOpen = !secretState.isOpen;
      renderSecretLayer();
      
      if (secretState.isOpen) {
        sounds.playCheers();
        triggerGoldConfetti();
        if (secretLayer) {
          secretLayer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }

  // Step 1
  bindInteractiveAction(step1, () => {
    if (secretState.completedSteps.has(1)) return;

    secretState.completedSteps.add(1);
    secretState.unlockedStep = Math.max(secretState.unlockedStep, 2);
    renderSecretLayer();

    if (step2) step2.classList.add('revealing');
    sounds.playCheers();

    if (cheersMessage && cheersToast) {
      cheersMessage.innerText = TRANSLATIONS[currentLang].beerToasts.beer;
      cheersToast.style.display = 'flex';
    }
    triggerMiniConfetti();
  });

  // Step 2
  bindInteractiveAction(step2, () => {
    if (secretState.unlockedStep < 2) {
      sounds.playPop();
      if (cheersMessage && cheersToast) {
        cheersMessage.innerText = TRANSLATIONS[currentLang].stepLockedToast;
        cheersToast.style.display = 'flex';
      }
      return;
    }
    if (secretState.completedSteps.has(2)) return;

    secretState.completedSteps.add(2);
    secretState.unlockedStep = Math.max(secretState.unlockedStep, 3);
    renderSecretLayer();

    if (step3) step3.classList.add('revealing');
    sounds.playChime();

    if (cheersMessage && cheersToast) {
      cheersMessage.innerText = TRANSLATIONS[currentLang].beerToasts.netflix;
      cheersToast.style.display = 'flex';
    }
    triggerMiniConfetti();
  });

  // Step 3 (Climax)
  bindInteractiveAction(step3, () => {
    if (secretState.unlockedStep < 3) {
      sounds.playPop();
      if (cheersMessage && cheersToast) {
        cheersMessage.innerText = TRANSLATIONS[currentLang].stepLockedToast;
        cheersToast.style.display = 'flex';
      }
      return;
    }
    if (secretState.completedSteps.has(3)) return;

    secretState.completedSteps.add(3);
    renderSecretLayer();

    if (cheersMessage && cheersToast) {
      cheersMessage.innerText = TRANSLATIONS[currentLang].beerToasts.we_eat_us;
      cheersToast.style.display = 'flex';
    }

    setTimeout(() => {
      sounds.playFanfare();
      triggerGrandCelebration();
      renderSecretLayer();
    }, 300);
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
    toEl.classList.add('active');
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
