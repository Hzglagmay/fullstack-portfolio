// Global mouse glow (persists across pages)
(function(){
  const root = document.documentElement;
  window.addEventListener('pointermove', (e)=>{
    root.style.setProperty('--mx', e.clientX + 'px');
    root.style.setProperty('--my', e.clientY + 'px');
  }, {passive:true});
})();

// Hero rotating movie-ish taglines
(function(){
  const el = document.querySelector('[data-rotating-tagline]');
  if(!el) return;
  const lines = [
    "May the source be with you.",
    "I feel the need — the need to deploy.",
    "To infinity and beyond (after tests pass).",
    "I'll be back(ups).",
    "Why so serious? Ship it."
  ];
  let i = 0;
  function tick(){
    el.classList.remove('show');
    setTimeout(()=>{
      el.textContent = lines[i % lines.length];
      i++;
      el.classList.add('show');
    }, 180);
  }
  el.classList.add('show');
  setInterval(tick, 2500);
})();
