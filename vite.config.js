import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@js": path.resolve(__dirname, "src/dignisi/js"),
      "@img": path.resolve(__dirname, "src/dignisi/images"),
      "@styles": path.resolve(__dirname, "src/dignisi/styles"),
    },
  },

  build: {
    minify: "esbuild",
    target: "esnext",
    sourcemap: false,

    rollupOptions: {
      output: {
        manualChunks: {
          chart: ["chart.js", "chartjs-plugin-datalabels"],
        },
      },
    },
  },
});
	

