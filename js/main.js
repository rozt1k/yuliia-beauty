(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasLibs = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';

  // Якщо анімації вимкнені або бібліотеки не завантажились — просто показуємо контент
  if (reduceMotion || !hasLibs) {
    document.documentElement.classList.remove('js');
  } else {
    gsap.registerPlugin(ScrollTrigger);

    // Hero: фото видно одразу (щоб не гальмувати завантаження), анімуємо лише текст і легкий зум
    gsap.fromTo('.gsap-hero-elem', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' });
    gsap.to('.gsap-photo-img', { scale: 1, duration: 1.2, ease: 'power2.out' });

    // Поява при скролі: спершу ховаємо, потім показуємо пачками
    gsap.set('.gsap-reveal-up, .gsap-card', { opacity: 0 });
    ScrollTrigger.batch('.gsap-reveal-up', {
      start: 'top 88%',
      once: true,
      onEnter: function (els) {
        gsap.fromTo(els, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out', overwrite: true });
      }
    });
    ScrollTrigger.batch('.gsap-card', {
      start: 'top 85%',
      once: true,
      onEnter: function (els) {
        gsap.fromTo(els, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', overwrite: true });
      }
    });
  }

  // Форма запису: відправка через fetch без переходу на Formspree
  var form = document.getElementById('booking-form');
  if (form) {
    var status = document.getElementById('form-status');
    var btn = form.querySelector('button[type="submit"]');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (form.elements._gotcha && form.elements._gotcha.value) return; // бот
      btn.disabled = true;
      status.className = 'text-sm text-charcoal-500';
      status.textContent = 'Надсилаємо…';
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        form.reset();
        status.className = 'text-sm text-green-800';
        status.textContent = 'Дякуємо! Заявку отримано, ми зв’яжемося з вами найближчим часом.';
      }).catch(function () {
        status.className = 'text-sm text-red-800';
        status.textContent = 'Не вдалося надіслати. Зателефонуйте, будь ласка: 063 154 55 50.';
      }).then(function () { btn.disabled = false; });
    });
  }
})();
