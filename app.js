document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    if (targetId.startsWith('#')) {
      document.querySelector(targetId)?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
