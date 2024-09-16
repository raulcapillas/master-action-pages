import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

export default defineConfig({
  base: "/master-action-pages/",
  plugins: [checker({ typescript: true }), react()],
});