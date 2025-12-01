document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("salesChart");
  const ctx = canvas.getContext("2d");

  let chartInstance = null; // защита от двойного запуска

  // ---------------------------
  // 1. Данные по кварталам
  // ---------------------------
  const values = [
    12049, 7930, 15301, 10879,   // 2020
    11049, 13912, 14967, 16116,  // 2021
    12099, 15093, 12715, 13021,  // 2022
    10933, 12795, 12823, 14008,  // 2023
    13131, 13824, 14404, 16427,  // 2024
    12484, 14346, 15164, 0       // 2025 (Q4 = 0, ты его убрал раньше)
  ];

  // ---------------------------
  // 2. Динамические оттенки
  // ---------------------------
  const min = Math.min(...values.filter(v => v > 0));
  const max = Math.max(...values);

  function getColor(value) {
    if (value === 0) return "rgba(190,160,110,0.2)";

    // нормализация 0 → 1
    const t = (value - min) / (max - min);

    // базовый тёмно-золотой #BEA06E
    const base = { r: 190, g: 160, b: 110 };

    const r = base.r + (255 - base.r) * (1 - t);
    const g = base.g + (255 - base.g) * (1 - t);
    const b = base.b + (255 - base.b) * (1 - t);

    return `rgb(${r}, ${g}, ${b})`;
  }

  const colors = values.map(v => getColor(v));

  // ---------------------------
  // 3. Вертикальные разделители по годам
  // ---------------------------
  const yearSeparators = [4, 8, 12, 16, 20];

  const verticalLinesPlugin = {
    id: "verticalLines",
    afterDraw: (chart) => {
      const { ctx, chartArea } = chart;
      ctx.save();
      ctx.strokeStyle = "#ffffff"; // твой цвет
      ctx.lineWidth = 1;

      const bars = chart.getDatasetMeta(0).data;

      yearSeparators.forEach((index) => {
        if (!bars[index] || !bars[index - 1]) return;

        const prevBarX = bars[index - 1].x;
        const nextBarX = bars[index].x;

        const halfGap = (nextBarX - prevBarX) / 2;
        const x = prevBarX + halfGap;

        ctx.beginPath();
        ctx.moveTo(x, chartArea.top);
        ctx.lineTo(x, chartArea.bottom);
        ctx.stroke();
      });

      ctx.restore();
    }
  };

  // ---------------------------
  // 4. Функция создания графика
  // ---------------------------
  function createChart() {
    if (chartInstance) return; // чтобы не создать второй раз

    chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Q1", "Q2", "Q3", "Q4", // 2020
          "Q1", "Q2", "Q3", "Q4", // 2021
          "Q1", "Q2", "Q3", "Q4", // 2022
          "Q1", "Q2", "Q3", "Q4", // 2023
          "Q1", "Q2", "Q3", "Q4", // 2024
          "Q1", "Q2", "Q3", "Q4"  // 2025
        ],
        datasets: [
          {
            label: "Transactions",
            // ВАЖНО: здесь сразу ставим финальные значения.
            // Chart.js сам анимирует от 0 до этих значений.
            data: values,
            backgroundColor: colors,
            borderRadius: 3,
            maxBarThickness: 20
          }
        ]
      },
      plugins: [ChartDataLabels, verticalLinesPlugin],
      options: {
        responsive: true,
        maintainAspectRatio: false,

        animation: {
          duration: 2400,
          easing: "easeOutCubic"
        },

        plugins: {
          legend: { display: false },

          datalabels: {
            color: "#fff",
            anchor: "end",
            align: "end",
            font: { size: 12 },
            offset: -4,
            // просто показываем реальное значение, без всяких progress
            formatter: (value) => value || ""
          }
        },

        scales: {
          x: {
            ticks: {
              color: "#aaa",
              font: { size: 12 }
            },
            grid: { display: false }
          },

          y: {
            ticks: {
              color: "#777",
              callback: (v) => v >= 1000 ? v / 1000 + "k" : v
            },
            grid: {
              color: "#333",
              lineWidth: 1
            },
            border: { display: false }
          }
        }
      }
    });
  }

  // ---------------------------
  // 5. Проверка: элемент в viewport?
  // ---------------------------
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight * 0.8 &&  // верх не слишком высоко
      rect.bottom > window.innerHeight * 0.2  // низ не слишком низко
    );
  }

  function initChartOnce() {
    if (!chartInstance) {
      createChart();
    }
  }

  // Если уже в зоне — запускаем сразу
  if (isInViewport(canvas)) {
    initChartOnce();
  } else {
    // Иначе ждём, пока попадёт в viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          initChartOnce();
          observer.disconnect(); // больше не нужен
        }
      });
    }, {
      threshold: 0.2
    });

    observer.observe(canvas);
  }
});
