
// spotlight follow mouse
window.addEventListener('mousemove', e => {
  document.documentElement.style.setProperty('--mx', e.clientX+'px');
  document.documentElement.style.setProperty('--my', e.clientY+'px');
});

// hero tilt (subtle) using mouse position
const hero = document.querySelector('.hero');
if(hero){
  const strength = 12;
  hero.addEventListener('mousemove', e=>{
    const r = hero.getBoundingClientRect();
    const x = (e.clientX - r.left)/r.width - .5;
    const y = (e.clientY - r.top)/r.height - .5;
    hero.style.transform = `perspective(800px) rotateY(${x*strength}deg) rotateX(${ -y*strength}deg)`;
  });
  hero.addEventListener('mouseleave', ()=> hero.style.transform = 'none');
}
