// app.js - lightweight interactions for Berashit Foundation
document.addEventListener('DOMContentLoaded', () => {
  const name = 'Bognet';
  // set copyright year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // greet button
  const greetBtn = document.getElementById('greet-btn');
  if (greetBtn) {
    greetBtn.addEventListener('click', () => {
      // unobtrusive greeting; keep simple alert for now
      alert(`Good morning, ${name}! Thank you for visiting Berashit Foundation.`);
    });
  }

  // message button
  const messageBtn = document.getElementById('message-btn');
  if (messageBtn) {
    messageBtn.addEventListener('click', () => {
      alert('Thank you for your interest. Visit the Contact section to reach us!');
    });
  }

  // optional: smooth scroll for same-page nav links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });
});
