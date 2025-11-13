// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn?.addEventListener('click', () => {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!expanded));
  mobileMenu.hidden = expanded;
});

// Hero sound toggle
const heroVideo = document.getElementById('heroVideo');
const soundToggle = document.getElementById('soundToggle');
soundToggle?.addEventListener('click', async () => {
  try {
    if (!heroVideo) return;
    heroVideo.muted = !heroVideo.muted;
    if (heroVideo.paused) await heroVideo.play();
    const pressed = soundToggle.getAttribute('aria-pressed') === 'true';
    soundToggle.setAttribute('aria-pressed', String(!pressed));
    soundToggle.textContent = heroVideo.muted ? '▶︎ Play Sound' : '⏸︎ Mute Sound';
  } catch (e) {
    console.warn('Autoplay policy prevented audio playback until user gesture.', e);
  }
});
