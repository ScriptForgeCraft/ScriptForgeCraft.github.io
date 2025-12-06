document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".partners-map__logos");

  containers.forEach((container) => {
    if (!container) return;

    const originalItems = Array.from(container.children);

    let clonesAdded = false;

    function applyInfiniteScroll() {
      const isMobile = window.innerWidth <= 1400;

      if (isMobile && !clonesAdded) {
        const REPEAT = 5;
        for (let i = 0; i < REPEAT - 1; i++) {
          originalItems.forEach((item) => {
            container.appendChild(item.cloneNode(true));
          });
        }

        requestAnimationFrame(() => {
          const maxScroll = container.scrollWidth - container.clientWidth;
          if (maxScroll > 0) {
            container.scrollLeft = maxScroll / 2;
          }
        });

        clonesAdded = true;
      }

      if (!isMobile && clonesAdded) {
        container.innerHTML = "";
        originalItems.forEach((item) => container.appendChild(item));

        clonesAdded = false;
      }
    }

    applyInfiniteScroll();

    window.addEventListener("resize", applyInfiniteScroll);
  });
});
