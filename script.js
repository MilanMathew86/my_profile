document.addEventListener('DOMContentLoaded', ()=>{
  // update year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const hash = a.getAttribute('href');
      if(hash.length>1){
        const el = document.querySelector(hash);
        if(el){
          e.preventDefault();
          el.scrollIntoView({behavior:'smooth',block:'start'});
        }
      }
    })
  })

  // simple contact form handler (no backend) — shows a success message
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      if(!name || !email || !message){
        status.textContent = 'Please complete all fields.';
        return;
      }
      status.textContent = 'Thanks — message ready to send.';
      form.reset();
      setTimeout(()=>status.textContent = '',4000);
    })
  }
});
