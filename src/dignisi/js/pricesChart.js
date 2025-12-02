document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("pricesChart");
  const ctx = canvas.getContext("2d");

  const years = [
    2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
  ];

  const make = (arr) => [null, ...arr, null];

  // Полные данные (как у тебя было)
  const fullData = [
    make([
      428000, 428100, 445800, 529000, 607400, 644800, 633000, 737800, 837700,
      905600,
    ]),
    make([
      356600, 357200, 345800, 370500, 415100, 462000, 459200, 522100, 587850,
      637300,
    ]),
    make([
      282700, 283100, 270800, 286700, 318900, 335200, 325600, 382700, 428300,
      473700,
    ]),
    make([
      253300, 253300, 245000, 252000, 279000, 308000, 318900, 345600, 382700,
      407100,
    ]),
    make([
      282700, 283000, 270700, 286700, 318900, 335200, 325600, 382700, 426000,
      436900,
    ]),
  ];

 
  const datasets = [
    {
      label: "Line 1",
      data: fullData[0],
      borderColor: "#f2d16b",
      borderWidth: 3,
      pointRadius: 4,
      pointBackgroundColor: "#f2d16b",
      tension: 0.35,
      spanGaps: true,
    },
    {
      label: "Line 2",
      data: fullData[1],
      borderColor: "#d7b26a",
      borderWidth: 3,
      pointRadius: 4,
      pointBackgroundColor: "#d7b26a",
      tension: 0.35,
      spanGaps: true,
    },
    {
      label: "Line 3",
      data: fullData[2],
      borderColor: "#e7c660",
      borderWidth: 3,
      pointRadius: 4,
      pointBackgroundColor: "#e7c660",
      tension: 0.35,
      spanGaps: true,
    },
    {
      label: "Line 4",
      data: fullData[3],
      borderColor: "#b59dd7",
      borderWidth: 3,
      pointRadius: 4,
      pointBackgroundColor: "#b59dd7",
      tension: 0.35,
      spanGaps: true,
    },
    {
      label: "Line 5",
      data: fullData[4],
      borderColor: "#53504dff",
      borderWidth: 3,
      pointRadius: 4,
      pointBackgroundColor: "#d1a97a",
      tension: 0.35,
      spanGaps: true,
    },
  ];

  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: years,
      datasets: datasets,
    },

    plugins: [ChartDataLabels],

    options: {
      responsive: true,
      maintainAspectRatio: false,

      animation: false,

      interaction: {
        mode: "nearest",
        intersect: true,
      },

      plugins: {
        legend: { display: false },

        datalabels: {
          color: "#fff",
          font: { size: 12 },

          formatter: (value, ctx) => {
            if (value == null) return "";

            const line = ctx.datasetIndex;
            const index = ctx.dataIndex;

            if (line === 3) {
              if (index === 1) return value.toLocaleString();
              if (index === 10) return value.toLocaleString();
              return value.toLocaleString();
            }

            return value.toLocaleString();
          },

          anchor: (ctx) => {
            const index = ctx.dataIndex;
            const line = ctx.datasetIndex;

            if (line === 3) {
              if (index === 1) return "end";
              if (index === 10) return "start";
              return "center";
            }

            if (index === 1) return "end";
            if (index === 10) return "start";
            return "center";
          },

          align: (ctx) => {
            const index = ctx.dataIndex;
            const line = ctx.datasetIndex;

            if (line === 3) {
              if (index === 1) return "left";
              if (index === 10) return "right";
              return "bottom";
            }

            if (index === 1) return "left";
            if (index === 10) return "right";
            return "top";
          },

          offset: (ctx) => {
            const index = ctx.dataIndex;
            const line = ctx.datasetIndex;

            if (line === 3) {
              if (index === 1) return 12;
              if (index === 10) return 25;
              return 10;
            }

            if (index === 1) return 12;
            if (index === 10) return 25;

            return 8;
          },
        },

        tooltip: {
          callbacks: {
            title(ctx) {
              return ctx[0].label;
            },
            label(ctx) {
              return ctx.raw.toLocaleString() + " AMD";
            },
          },
        },
      },

      scales: {
        x: {
          ticks: { color: "#aaa" },
          grid: { color: "#333" },
        },
        y: {
          min: 0,
          ticks: {
            color: "#aaa",
            callback: (v) => (v >= 1000 ? v / 1000 + "K" : v),
          },
          grid: { color: "#333" },
        },
      },
    },
  });
});
