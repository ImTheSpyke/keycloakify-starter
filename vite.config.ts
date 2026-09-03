import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        keycloakify({
            themeName: "poggroup",
            themeVersion: "27.0.0",
            groupId: "com.pog-group.keycloak",
            accountThemeImplementation: "none"
        })
    ]
});
