// reserved for s1 page
// public/s1.js
(() => {
  const light = document.createElement('div');
  light.style.cssText = `
    position:fixed; pointer-events:none; inset:0; z-index:0;
    background: radial-gradient(140px 140px at -9999px -9999px, rgba(255,216,74,.12), transparent 60%);
    transition: background-position .02s linear;
  `;
  document.body.appendChild(light);

  const move = e => {
    const x = e.clientX, y = e.clientY;
    light.style.background = `radial-gradient(140px 140px at ${x}px ${y}px, rgba(255,216,74,.12), transparent 60%)`;
  };
  window.addEventListener('pointermove', move, {passive:true});
})();
