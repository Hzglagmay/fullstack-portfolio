
// Mouse splash: update CSS vars
(function(){
  const root=document.documentElement;
  function set(e){
    const x = (e.clientX || innerWidth/2) / innerWidth * 100;
    const y = (e.clientY || innerHeight/2) / innerHeight * 100;
    root.style.setProperty('--mx', x+'%');
    root.style.setProperty('--my', y+'%');
  }
  window.addEventListener('mousemove', set, {passive:true});
  window.addEventListener('touchmove', (e)=>{
    const t=e.touches[0]; if(!t) return;
    set({clientX:t.clientX, clientY:t.clientY});
  }, {passive:true});
  set({clientX:innerWidth/2, clientY:innerHeight/2});
})();
