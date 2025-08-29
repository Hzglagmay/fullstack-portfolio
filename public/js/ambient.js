
(function(){
  const root = document.documentElement;
  let mx = 0.5, my = 0.12, tmx = mx, tmy = my;
  const lerp = (a,b,t)=>a+(b-a)*t;
  const onMove = e => {
    const r = document.body.getBoundingClientRect();
    tmx = (e.clientX - r.left) / r.width;
    tmy = (e.clientY - r.top) / r.height;
  };
  window.addEventListener('mousemove', onMove, {passive:true});
  function tick(){
    mx = lerp(mx, tmx, 0.08);
    my = lerp(my, tmy, 0.08);
    root.style.setProperty('--mx', (mx*100).toFixed(2)+'%');
    root.style.setProperty('--my', (my*100).toFixed(2)+'%');
    requestAnimationFrame(tick);
  }
  tick();
})();
