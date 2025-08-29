(function(){
  const r = document.documentElement;
  const set = e => {
    r.style.setProperty('--mouse-x', e.clientX + 'px');
    r.style.setProperty('--mouse-y', e.clientY + 'px');
  };
  window.addEventListener('pointermove', set, {passive:true});
})();
