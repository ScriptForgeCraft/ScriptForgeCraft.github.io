import "@js/navigation/headerScroll.js";
import "@js/navigation/mobileMenu.js";
import "@js/partners-scroll.js";
import "../css/globals.css";
import "../styles/style.css";
import "../styles/responsive/responsive.css";

document.addEventListener("DOMContentLoaded", async () => {
  const initCharts = () => {
    import("@js/pricesChart.js");
    import("@js/salesChart.js");
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          initCharts();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.2 }
  );

  const chartsBlock = document.querySelector(".analytics");
  if (chartsBlock) observer.observe(chartsBlock);
});

document.addEventListener("click", function (e) {
  const el = e.target.closest(".copy-item");
  if (!el) return;

  const text = el.dataset.copy;

  navigator.clipboard.writeText(text).then(() => {
    el.classList.add("copied");

    setTimeout(() => {
      el.classList.remove("copied");
    }, 800);
  });
});

document.addEventListener("click", function (e) {
  const el = e.target.closest(".copy-item");
  if (!el) return;
  const original = el.getAttribute("data-copy");

  navigator.clipboard.writeText(original).then(() => {
    el.setAttribute("data-copy-text", "Copied!");

    el.classList.add("copied");

    setTimeout(() => {
      el.removeAttribute("data-copy-text");
      el.classList.remove("copied");
    }, 1000);
  });
});
