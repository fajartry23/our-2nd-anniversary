// DATA FOTO BERSAMA UNGKAPAN HATI (SESUAI REVISI TERBARU)
const photoData = [
  {
    src: "images/photo1.jpg",
    title: "Foto 1: Momen Pertama Jalan 🌷",
    desc: "Inget engga pas pertama kali kita jalan berdua, jujur aku deg deg an dan seneng hehe ada di samping kamu , dan di hari itu aku tau kamu orang spesial di hidup aku."
  },
  {
    src: "images/photo2.jpg",
    title: "Foto 2: First Time Pegangan Tangan.. 🤝",
    desc: "Aku juga masi inget disini akuu ngerasa seneng banget pas pulang dari situ , rasanya kaya dunia aku bisa sebahagia ini yaa pas sama seseorang dan itu kamu.."
  },
  {
    src: "images/photo3.jpg",
    title: "Foto 3: First Time Photobooth Berdua Hihi 📸",
    desc: "Disini aku udah tau dan sadar aku bakal usaha sekeras apapun buat bahagiain kamu aku seneng banget disinii akuu nyobaa hal yang belum pernah akuu coba dan aku seneng ituuu sama kamuu sayangg.."
  },
  {
    src: "images/photo4.jpg",
    title: "Foto 4: Senyuman Cantik Kamu ✨",
    desc: "Banyak foto kamu yang cantik cantik banget karna kamu juga tau kamu sangat\" indah babyyy 🫂 , akuu suka liat kamu senyum rasanya dunia aku setenang ituu sayang.. terus senyum sama aku yaaa..."
  },
  {
    src: "images/photo5.jpg",
    title: "Foto 5: Momen Aku Harus LDR Sama Kamu 🥺",
    desc: "Aku bener bener sedih pas kita harus selalu nabung rindu sayang , rasanya aku mau peluk kamu setiap waktu dan saat kalo bisa... akuu sayang kamu bangett mboii kuat kuat yaa kitaa ldr."
  },
  {
    src: "images/photo6.jpg",
    title: "Foto 6: Pertama Kali Aku Ngasih Bunga Ke Seseorang.. 💐",
    desc: "Rasanya akuu deg deg ann bangett sayangg , akuu gapapa dimarahin dibilang telat yang penting engga ketawannn ,disituu akuu seneng bangett liatt kamuu senyumm bahagia , akuu mauu tiap pertemuan kitaa itu jadi pertemuan yang baikk dan berkesann akuu sayangg kamuu bangett babyyy akuu mau kitaa selamanyaaa 😓🙂"
  }
];

// REVISI DAFTAR ALASAN AKU SAYANG KAMU
const loveReasons = [
  "Setiap momen bareng kamu itu terasa bahagia dan damai",
  "Cara kamu ketawa dan ngomong itu gemes bnget mboi",
  "Kamu selalu perhatian sama hal hal kecil",
  "Kamu selalu bisa bikin aku senyum bahkan saat hari aku lagi cape...",
  "Kamu cantik , kamu imut , kamu lucu , kamu segalanya buat aku",
  "Kamu selalu bisa buat aku nyaman",
  "Kamu adalah rasa syukurku yang terbesar sekarang"
];

let currentPhotoIndex = 0;
let heartCount = 0;
let isMainMusicPlaying = false;
let isGiftMusicPlaying = false;
let mainAudioTime = 0;

document.addEventListener("DOMContentLoaded", () => {
  const btnYes = document.getElementById("btn-yes");
  const btnNo = document.getElementById("btn-no");
  const pageAsk = document.getElementById("page-ask");
  const pageGifts = document.getElementById("page-gifts");

  // TOMBOL "LANJUT BUKA KADO" DIKLIK (AUTOPLAY LAGU UTAMA)
  if (btnYes) {
    btnYes.addEventListener("click", () => {
      const mainAudio = document.getElementById("main-bgm");
      if (mainAudio) {
        mainAudio.play().then(() => {
          isMainMusicPlaying = true;
          const musicText = document.getElementById("music-text");
          const musicIcon = document.getElementById("music-icon");
          if (musicText) musicText.innerText = "Pause Musik";
          if (musicIcon) musicIcon.innerText = "🎶";
        }).catch(err => console.log("Autoplay ditahan browser:", err));
      }

      if (typeof confetti === 'function') confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      
      setTimeout(() => { 
        if (pageAsk) pageAsk.classList.add("hidden"); 
        if (pageGifts) pageGifts.classList.remove("hidden"); 
      }, 400);
    });
  }

  // LOGIKA TOMBOL "BIASA AJA" MENGHINDAR / LARI
  if (btnNo) {
    const moveNoButton = () => {
      const x = Math.random() * (window.innerWidth - btnNo.offsetWidth - 40);
      const y = Math.random() * (window.innerHeight - btnNo.offsetHeight - 40);

      btnNo.style.position = "fixed";
      btnNo.style.left = `${Math.max(20, x)}px`;
      btnNo.style.top = `${Math.max(20, y)}px`;
    };

    btnNo.addEventListener("mouseover", moveNoButton);
    btnNo.addEventListener("touchstart", (e) => {
      e.preventDefault();
      moveNoButton();
    });
  }

  // LOGIKA PENGONTROL TOMBOL MUSIK MANUAL DI POJOK ATAS
  window.toggleMainMusic = () => {
    const audio = document.getElementById("main-bgm");
    const musicText = document.getElementById("music-text");
    const musicIcon = document.getElementById("music-icon");

    if (!audio) return;

    if (isMainMusicPlaying) {
      audio.pause();
      if (musicText) musicText.innerText = "Putar Musik";
      if (musicIcon) musicIcon.innerText = "🎵";
    } else {
      audio.play();
      if (musicText) musicText.innerText = "Pause Musik";
      if (musicIcon) musicIcon.innerText = "🎶";
    }
    isMainMusicPlaying = !isMainMusicPlaying;
  };

  // BUKA KADO GENERAL
  window.openGift = (giftId) => {
    const mainAudio = document.getElementById("main-bgm");
    const customAudio = document.getElementById("custom-audio");
    const btnPlaySong = document.getElementById("btn-play-song");
    const vinylDisc = document.getElementById("vinyl-disc");

    // Jika yang dibuka adalah Gift 4 (Music & Video Player)
    if (giftId === 'gift-music') {
      // 1. Pause lagu utama dan simpan posisi detiknya
      if (mainAudio && !mainAudio.paused) {
        mainAudioTime = mainAudio.currentTime;
        mainAudio.pause();
        const musicText = document.getElementById("music-text");
        const musicIcon = document.getElementById("music-icon");
        if (musicText) musicText.innerText = "Putar Musik";
        if (musicIcon) musicIcon.innerText = "🎵";
        isMainMusicPlaying = false;
      }

      // 2. Otomatis putar lagu Gift 4 (Piringan Hitam)
      if (customAudio) {
        customAudio.play().then(() => {
          isGiftMusicPlaying = true;
          if (btnPlaySong) btnPlaySong.innerText = "⏸ Pause Lagu";
          if (vinylDisc) vinylDisc.style.animationPlayState = "running";
        }).catch(err => console.log("Autoplay Gift 4 ditahan browser:", err));
      }
    }

    if (pageGifts) pageGifts.classList.add("hidden");
    const targetGift = document.getElementById(giftId);
    if (targetGift) targetGift.classList.remove("hidden");
  };

  // TUTUP KADO GENERAL
  window.closeGift = (giftId) => {
    const mainAudio = document.getElementById("main-bgm");
    const customAudio = document.getElementById("custom-audio");
    const btnPlaySong = document.getElementById("btn-play-song");
    const vinylDisc = document.getElementById("vinyl-disc");

    if (giftId === 'gift-music') {
      // 1. Matikan lagu Gift 4 jika sedang berputar
      if (customAudio) {
        customAudio.pause();
        isGiftMusicPlaying = false;
        if (btnPlaySong) btnPlaySong.innerText = "▶ Putar Lagu";
        if (vinylDisc) vinylDisc.style.animationPlayState = "paused";
      }

      // 2. Lanjutkan lagu utama dari detik terakhir
      if (mainAudio) {
        mainAudio.currentTime = mainAudioTime;
        mainAudio.play().then(() => {
          isMainMusicPlaying = true;
          const musicText = document.getElementById("music-text");
          const musicIcon = document.getElementById("music-icon");
          if (musicText) musicText.innerText = "Pause Musik";
          if (musicIcon) musicIcon.innerText = "🎶";
        }).catch(err => console.log("Autoplay ditahan browser:", err));
      }
    }

    const targetGift = document.getElementById(giftId);
    if (targetGift) targetGift.classList.add("hidden");
    if (pageGifts) pageGifts.classList.remove("hidden");
  };

  window.getRandomReason = () => {
    const randomIndex = Math.floor(Math.random() * loveReasons.length);
    const reasonText = document.getElementById("reason-text");
    if (reasonText) reasonText.innerText = `"${loveReasons[randomIndex]}"`;
  };

  window.openEnvelope = () => {
    const envCard = document.getElementById('envelope-card');
    const letContent = document.getElementById('letter-content');
    if (envCard) envCard.classList.add('hidden');
    if (letContent) letContent.classList.remove('hidden');
    heartPulse();
  };

  window.openGiftWithFlowerExplosion = (giftId) => {
    if (typeof confetti === 'function') {
      confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 }, colors: ['#ff4d6d', '#ff85a1', '#70e000', '#ffb703'] });
    }
    setTimeout(() => { 
      if (pageGifts) pageGifts.classList.add("hidden"); 
      const targetGift = document.getElementById(giftId);
      if (targetGift) targetGift.classList.remove("hidden"); 
    }, 400);
  };

  // MODAL FOTO
  window.openPhotoModal = (index) => {
    currentPhotoIndex = index;
    updateModalContent();
    const modal = document.getElementById("photo-modal");
    if (modal) modal.classList.remove("hidden");
  };

  window.closePhotoModal = () => {
    const modal = document.getElementById("photo-modal");
    if (modal) modal.classList.add("hidden");
  };

  window.changePhotoModal = (direction) => {
    currentPhotoIndex += direction;
    if (currentPhotoIndex < 0) currentPhotoIndex = photoData.length - 1;
    if (currentPhotoIndex >= photoData.length) currentPhotoIndex = 0;
    updateModalContent();
  };

  function updateModalContent() {
    const item = photoData[currentPhotoIndex];
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    if (modalImg) modalImg.src = item.src;
    if (modalTitle) modalTitle.innerText = item.title;
    if (modalDesc) modalDesc.innerText = item.desc;
  }

  window.giveHeart = () => {
    heartCount++;
    const countSpan = document.getElementById("heart-count");
    if (countSpan) countSpan.innerText = heartCount;
    if (typeof confetti === 'function') confetti({ particleCount: 30, spread: 40, origin: { y: 0.7 } });
  };

  // PEMUTAR LAGU GIFT 4 (PIRINGAN HITAM MANUAL TOGGLE)
  const btnPlaySong = document.getElementById("btn-play-song");
  const customAudio = document.getElementById("custom-audio");
  const vinylDisc = document.getElementById("vinyl-disc");

  if (btnPlaySong && customAudio) {
    btnPlaySong.addEventListener("click", () => {
      if (isGiftMusicPlaying) {
        customAudio.pause();
        btnPlaySong.innerText = "▶ Putar Lagu";
        if (vinylDisc) vinylDisc.style.animationPlayState = "paused";
      } else {
        customAudio.play();
        btnPlaySong.innerText = "⏸ Pause Lagu";
        if (vinylDisc) vinylDisc.style.animationPlayState = "running";
      }
      isGiftMusicPlaying = !isGiftMusicPlaying;
    });
  }

  window.sendReplyWA = () => {
    const replyElem = document.getElementById("mboi-reply");
    const text = replyElem ? replyElem.value : "";
    const url = `https://wa.me/6289507575086?text=${encodeURIComponent("Pesan balasan Mboi: " + text)}`;
    window.open(url, '_blank');
  };

  window.heartPulse = () => {
    if (typeof confetti === 'function') confetti({ particleCount: 40, spread: 50, origin: { y: 0.6 } });
  };

  // PARTIKEL TULIP MELAYANG
  function spawnFallingTulip() {
    const container = document.getElementById("tulip-particles-container");
    if (!container) return;
    const tulip = document.createElement("div");
    tulip.classList.add("falling-tulip");
    tulip.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="#ff4d6d"><path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 8.5 9 10.2 11 10.8V18C11 18.6 10.6 19 10 19C9.4 19 9 18.6 9 18V16C9 14.3 7.7 13 6 13C4.3 13 3 14.3 3 16C3 18.8 5.2 21 8 21H16C18.8 21 21 18.8 21 16C21 14.3 19.7 13 18 13C16.3 13 15 14.3 15 16V18C15 18.6 14.6 19 14 19C13.4 19 13 18.6 13 18V10.8C15 10.2 16.5 8.5 16.5 6.5C16.5 4 14.5 2 12 2Z"/></svg>`;
    tulip.style.left = Math.random() * 100 + "vw";
    tulip.style.animationDuration = (Math.random() * 5 + 6) + "s";
    container.appendChild(tulip);
    setTimeout(() => { tulip.remove(); }, 11000);
  }
  setInterval(spawnFallingTulip, 800);
});