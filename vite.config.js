import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/english-entertainment/", // Set base to the repository name
  plugins: [react()],
});
