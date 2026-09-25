const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealItems.forEach(item => observer.observe(item));

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const modal = document.getElementById('certModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
document.querySelectorAll('.cert-preview, .evidence-card').forEach(button => {
  button.addEventListener('click', () => {
    modalImage.src = button.dataset.image;
    modalImage.alt = button.dataset.alt || button.dataset.title;
    modalTitle.textContent = button.dataset.title;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});
function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

const slides = [
  {src:'assets/thesis/slide-01.jpg', label:'01 · Thesis title', desc:'Research title, institutions, and project team.'},
  {src:'assets/thesis/slide-02.jpg', label:'02 · Product overview', desc:'GARDiaScope — Detect | Assess | Protect.'},
  {src:'assets/thesis/slide-03.jpg', label:'03 · User interface', desc:'Core mobile workflow from capture to analysis.'},
  {src:'assets/thesis/slide-04.jpg', label:'04 · Application flow', desc:'How the mobile interface organizes the analysis experience.'},
  {src:'assets/thesis/slide-05.jpg', label:'05 · Laboratory validation', desc:'Microscopy and laboratory validation activities.'},
  {src:'assets/thesis/slide-06.jpg', label:'06 · Sample detection', desc:'Example GARDiaScope detection outputs from microscopic samples.'},
  {src:'assets/thesis/slide-07.png', label:'07 · Validation result', desc:'Confusion matrix comparing GARDiaScope with the expert.'},
  {src:'assets/thesis/slide-08.png', label:'08 · Reliability result', desc:'Inter-rater reliability result with Cohen’s Kappa of 0.61.'},
  {src:'assets/thesis/slide-09.jpg', label:'09 · Closing', desc:'GARDiaScope — Birding Technology and Public Health for a Safer, Healthier Tomorrow.'}
];
const slideImg = document.getElementById('thesisSlideImage');
const slideCurrent = document.getElementById('slideCurrent');
const slideLabel = document.getElementById('slideLabel');
const slideDescription = document.getElementById('slideDescription');
const reelProgress = document.getElementById('reelProgress');
const chapterButtons = [...document.querySelectorAll('.chapter-item')];
const reelViewer = document.querySelector('.reel-viewer');
const prev = document.getElementById('slidePrev');
const next = document.getElementById('slideNext');
const play = document.getElementById('slidePlay');
let current = 0;
let playing = true;
let timer;
let changeTimer;

if (slideImg && chapterButtons.length) {
  function goToSlide(index) {
    current = (index + slides.length) % slides.length;
    slideImg.classList.remove('is-entering');
    clearTimeout(changeTimer);
    changeTimer = setTimeout(() => {
      const s = slides[current];
      slideImg.src = s.src;
      slideImg.alt = `GARDiaScope thesis slide ${current + 1}`;
      slideCurrent.textContent = String(current + 1).padStart(2,'0');
      slideLabel.textContent = s.label;
      slideDescription.textContent = s.desc;
      reelProgress.style.width = `${((current + 1) / slides.length) * 100}%`;
      chapterButtons.forEach((button, i) => {
        const active = i === current;
        button.classList.toggle('active', active);
        button.setAttribute('aria-selected', String(active));
      });
      slideImg.classList.add('is-entering');
      if (window.matchMedia('(max-width: 800px)').matches) {
        chapterButtons[current]?.scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
      }
    }, 80);
  }
  chapterButtons.forEach(button => button.addEventListener('click', () => { goToSlide(Number(button.dataset.slide)); restartTimer(); }));
  prev?.addEventListener('click', () => { goToSlide(current - 1); restartTimer(); });
  next?.addEventListener('click', () => { goToSlide(current + 1); restartTimer(); });
  function startTimer() { clearInterval(timer); timer = setInterval(() => goToSlide(current + 1), 6000); }
  function restartTimer() { clearInterval(timer); if (playing) startTimer(); }
  play?.addEventListener('click', () => {
    playing = !playing;
    play.textContent = playing ? 'Pause' : 'Play';
    play.setAttribute('aria-label', playing ? 'Pause slideshow' : 'Play slideshow');
    if (playing) startTimer(); else clearInterval(timer);
  });
  reelViewer?.addEventListener('mouseenter', () => { if (playing) clearInterval(timer); });
  reelViewer?.addEventListener('mouseleave', () => { if (playing) startTimer(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') { goToSlide(current - 1); restartTimer(); }
    if (e.key === 'ArrowRight') { goToSlide(current + 1); restartTimer(); }
  });
  goToSlide(0);
  startTimer();
  window.__thesisSlider = {
    next: () => { goToSlide(current + 1); restartTimer(); },
    prev: () => { goToSlide(current - 1); restartTimer(); },
    getCurrent: () => current
  };
}

const cursor = document.querySelector('.cursor-dot');
if (cursor && window.matchMedia('(pointer:fine)').matches) {
  window.addEventListener('mousemove', e => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
}

// v5 responsive navigation, modal accessibility, touch gestures, and visibility-aware slideshow
(() => {
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (menuToggle && mobileNav) {
    const setMenu = (open) => {
      mobileNav.classList.toggle('is-open', open);
      mobileNav.setAttribute('aria-hidden', String(!open));
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      menuToggle.textContent = open ? 'Close' : 'Menu';
    };
    menuToggle.addEventListener('click', () => setMenu(!mobileNav.classList.contains('is-open')));
    mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setMenu(false);
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 800) setMenu(false);
    });
  }

  const modal = document.getElementById('certModal');
  if (modal) {
    let lastFocused = null;
    const originalClose = window.closeModal;
    // Enhance the existing close handler without changing its public behavior.
    document.querySelectorAll('.cert-preview, .evidence-card').forEach(button => {
      button.addEventListener('click', () => {
        lastFocused = button;
        requestAnimationFrame(() => modal.querySelector('.modal-close')?.focus());
      });
    });
    modal.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.classList.contains('is-open')) {
        setTimeout(() => lastFocused?.focus(), 0);
        return;
      }
      if (event.key !== 'Tab' || !modal.classList.contains('is-open')) return;
      const focusable = [...modal.querySelectorAll('button, a, input, [tabindex]:not([tabindex="-1"])')].filter(el => !el.hasAttribute('disabled'));
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
    document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', () => {
      setTimeout(() => lastFocused?.focus(), 0);
    }));
  }

  const stage = document.querySelector('.reel-viewer');
  const sliderImg = document.getElementById('thesisSlideImage');
  if (stage && sliderImg && window.__thesisSlider) {
    let touchStartX = 0, touchStartY = 0;
    stage.addEventListener('touchstart', (event) => {
      const touch = event.changedTouches[0];
      touchStartX = touch.clientX; touchStartY = touch.clientY;
    }, {passive:true});
    stage.addEventListener('touchend', (event) => {
      const touch = event.changedTouches[0];
      const dx = touch.clientX - touchStartX;
      const dy = touch.clientY - touchStartY;
      if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;
      if (dx < 0) window.__thesisSlider.next();
      else window.__thesisSlider.prev();
    }, {passive:true});
  }
})();
