import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio.v1.1/',
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
