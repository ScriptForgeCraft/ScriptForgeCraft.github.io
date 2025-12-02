document.addEventListener("DOMContentLoaded", () => {
  function animatePie(canvasId, valuePercent) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const finalValue = valuePercent;
    const restValue = 100 - finalValue;

    let progress = 0;

    const chart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Main", "Rest"],
        datasets: [
          {
            data: [0, 100],
            backgroundColor: ["#785A32", "#AA8C5A"],
            borderWidth: 0,
            rotation: -90 * (Math.PI / 180),
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          legend: { display: false },

          datalabels: {
            color: "#fff",
            font: { size: 16, weight: "bold" },

            formatter: (value, ctx) => {
              if (value < 2) return "";
              return value.toFixed(1) + "%";
            },

            anchor: "center",
            align: "center",
            offset: 30,
          },
        },
      },

      plugins: [ChartDataLabels],
    });

    function animate() {
      progress += 0.02;
      if (progress > 1) progress = 1;

      const currentMain = finalValue * progress;
      const currentRest = 100 - currentMain;

      chart.data.datasets[0].data = [currentMain, currentRest];
      chart.update();

      if (progress < 1) requestAnimationFrame(animate);
    }

    animate();
  }

  animatePie("pieAbovyan", 9.8);
  animatePie("pieYerevan", 28.4);
});
