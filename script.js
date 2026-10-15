
document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.navlinks');
 if(toggle&&nav)toggle.addEventListener('click',()=>{let open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
 document.querySelectorAll('[data-filter]').forEach(input=>input.addEventListener('input',()=>{
  const q=(document.querySelector('[data-filter="q"]')?.value||'').toLowerCase();
  const city=(document.querySelector('[data-filter="city"]')?.value||'').toLowerCase();
  const status=(document.querySelector('[data-filter="status"]')?.value||'').toLowerCase();
  let count=0;document.querySelectorAll('[data-registry-card]').forEach(card=>{
   const text=card.innerText.toLowerCase(),ok=(!q||text.includes(q))&&(!city||text.includes(city))&&(!status||text.includes(status));
   card.classList.toggle('hidden',!ok);if(ok)count++;
  });
  const counter=document.querySelector('#result-count');if(counter)counter.textContent=count+' demonstration profile(s) shown';
 }));
 document.querySelectorAll('form[data-prototype]').forEach(form=>form.addEventListener('submit',e=>{
  e.preventDefault();const msg=form.querySelector('.form-msg');
  if(!form.reportValidity())return;
  msg.textContent='Prototype only: no information has been sent or stored. For this college project, this form demonstrates the intended contribution workflow.';
  msg.setAttribute('role','status');
 }));
 const search=document.querySelector('#site-search');
 if(search)search.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();const q=search.value.trim();if(q)window.location.href='registry.html?q='+encodeURIComponent(q);}});
});
