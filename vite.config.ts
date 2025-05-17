import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        {
            name: "custom-message",
            configureServer(server) {
                console.log("\x1b[36m%s\x1b[0m", "🚀 Vite server is starting..."); // Message personnalisé en cyan
                console.log("\x1b[32m%s\x1b[0m", "🌟 IoT Platform Frontend is ready to go!");
            },
            buildStart() {
                console.log("\x1b[33m%s\x1b[0m", "📦 Building IoT Platform Frontend...");
            },
        },
    ],
});
