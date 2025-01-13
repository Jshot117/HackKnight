import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all IP addresses, including your local network IP
    port: 5174, // You can use any available port, 5173 is the default
  },
});
