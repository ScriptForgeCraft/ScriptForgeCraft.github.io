(() => {
  const SCROLL_RESTORE_DELAY = 0;

  let lastScrollY = window.scrollY;
  let lastInnerHeight = window.innerHeight;
  let ticking = false;

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  window.addEventListener(
    'scroll',
    () => {
      lastScrollY = window.scrollY;
    },
    { passive: true }
  );

  window.addEventListener('resize', () => {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const newInnerHeight = window.innerHeight;
      const diff = lastInnerHeight - newInnerHeight;

      window.scrollTo({
        top: lastScrollY + diff,
        left: 0,
        behavior: 'auto',
      });

      lastInnerHeight = newInnerHeight;
      ticking = false;
    });
  });

  window.addEventListener('pageshow', () => {
    setTimeout(() => {
      window.scrollTo(0, lastScrollY);
    }, SCROLL_RESTORE_DELAY);
  });
})();

