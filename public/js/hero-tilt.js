// Subtle parallax/tilt only on the hero card to keep the rest clean.
(function(){
  const hero = document.querySelector('.hero');
  if(!hero) return;
  function onMove(e){
    const r = hero.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width/2))/r.width;
    const dy = (e.clientY - (r.top + r.height/2))/r.height;
    hero.style.transform = `perspective(900px) rotateX(${-dy*8}deg) rotateY(${dx*10}deg)`;
  }
  function reset(){ hero.style.transform = 'perspective(900px)'; }
  hero.addEventListener('mousemove', onMove);
  hero.addEventListener('mouseleave', reset);
})();