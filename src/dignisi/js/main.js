import "@js/navigation/headerScroll.js";
import "@js/navigation/mobileMenu.js";
import "@js/partners-scroll.js";

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
