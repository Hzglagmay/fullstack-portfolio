// Persistent subtle splash that follows the cursor on every page.
(function(){
  const cvs = document.createElement('canvas');
  cvs.id = 'light-overlay';
  const ctx = cvs.getContext('2d');
  document.body.appendChild(cvs);

  const state = {
    x: Number(sessionStorage.getItem('glow:x')) || window.innerWidth * .2,
    y: Number(sessionStorage.getItem('glow:y')) || window.innerHeight * .3,
    r: Math.min(160, Math.max(110, Math.floor(Math.min(window.innerWidth, window.innerHeight) * .18))),
    dirty: true
  };

  function size(){
    cvs.width = window.innerWidth * devicePixelRatio;
    cvs.height = window.innerHeight * devicePixelRatio;
    cvs.style.width = window.innerWidth + 'px';
    cvs.style.height = window.innerHeight + 'px';
    ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
    state.dirty = true;
  }
  size();
  window.addEventListener('resize', size);
  window.addEventListener('mousemove', (e)=>{
    state.x = e.clientX; state.y = e.clientY; state.dirty = true;
    sessionStorage.setItem('glow:x', state.x);
    sessionStorage.setItem('glow:y', state.y);
  });

  function draw(){
    if(state.dirty){
      ctx.clearRect(0,0,cvs.width,cvs.height);
      const g = ctx.createRadialGradient(state.x, state.y, 0, state.x, state.y, state.r);
      g.addColorStop(0, 'rgba(105,161,255,.22)');
      g.addColorStop(.55, 'rgba(105,161,255,.10)');
      g.addColorStop(1, 'rgba(105,161,255,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0,0,cvs.width,cvs.height);
      state.dirty = false;
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();