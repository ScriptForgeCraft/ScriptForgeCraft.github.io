document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".main-header");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentY = window.scrollY;

    if (currentY > lastScrollY && currentY > 80) {
      header.classList.add("main-header--hidden");
    } else {
      header.classList.remove("main-header--hidden");
    }

    lastScrollY = currentY;
  });
});
