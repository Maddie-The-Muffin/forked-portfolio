const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('back-to-top--visible', window.scrollY > 300);
}, { passive: true });
