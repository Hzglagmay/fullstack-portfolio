
// subtle glow that follows the cursor across all pages
const root = document.documentElement;
window.addEventListener('mousemove',(e)=>{
  const x = e.clientX / window.innerWidth * 100;
  const y = e.clientY / window.innerHeight * 100;
  root.style.setProperty('--mx', x + '%');
  root.style.setProperty('--my', y + '%');
});

// reveal-on-scroll
const reveal = new IntersectionObserver((entries)=>{
  for (const it of entries){
    if(it.isIntersecting){
      it.target.style.transform='translateY(0)';
      it.target.style.opacity='1';
      reveal.unobserve(it.target);
    }
  }
},{threshold: .12});
document.querySelectorAll('.card, .proj').forEach(el=>{
  el.style.opacity='.001'; el.style.transform='translateY(8px)';
  el.style.transition='opacity .5s ease, transform .5s ease';
  reveal.observe(el);
});
