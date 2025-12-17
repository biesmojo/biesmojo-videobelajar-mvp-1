document.addEventListener('DOMContentLoaded', () => {
  // Filter kategori
  const catButtons = document.querySelectorAll('.categories .btn');
  const cards = document.querySelectorAll('.card.course');

  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.cat;
      cards.forEach(card => {
        const ok = cat === 'all' || card.dataset.cat === cat;
        card.style.display = ok ? '' : 'none';
      });
    });
  });

  // Newsletter submit
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('newsletterMsg');
      if (!email) return;
      msg.textContent = 'Terima kasih! Kami akan mengirimkan newsletter ke ' + email + '.';
      msg.style.display = 'block';
      newsletterForm.reset();
    });
  }

  // Login/Register dummy
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Masuk berhasil (simulasi).');
    });
  }

  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const pass = document.getElementById('regPassword').value;
      const confirm = document.getElementById('regConfirm').value;
      if (pass !== confirm) {
        alert('Konfirmasi kata sandi tidak sama.');
        return;
      }
      alert('Pendaftaran berhasil (simulasi).');
    });
  }
});
