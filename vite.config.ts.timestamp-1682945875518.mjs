// vite.config.ts
import * as path from "path";
import react from "file:///Users/macmeharder/Desktop/kybedu/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///Users/macmeharder/Desktop/kybedu/node_modules/vite/dist/node/index.js";
import { VitePWA } from "file:///Users/macmeharder/Desktop/kybedu/node_modules/vite-plugin-pwa/dist/index.mjs";
import viteSvgr from "file:///Users/macmeharder/Desktop/kybedu/node_modules/vite-plugin-svgr/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/macmeharder/Desktop/kybedu";
var vite_config_default = defineConfig({
  resolve: {
    alias: [{ find: "~", replacement: path.resolve(__vite_injected_original_dirname, "src") }]
  },
  plugins: [
    react(),
    viteSvgr(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"]
      },
      manifest: {
        name: "Cyber Education",
        short_name: "CybEdu",
        theme_color: "#F9FAFB",
        background_color: "#000000",
        display: "standalone",
        scope: "/",
        orientation: "portrait-primary",
        start_url: "/",
        related_applications: [
          {
            platform: "webapp",
            url: "https://physical-rat.surge.sh/manifest.webmanifest"
          }
        ],
        prefer_related_applications: true,
        icons: [
          {
            src: "/images/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable any"
          }
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWFjbWVoYXJkZXIvRGVza3RvcC9reWJlZHVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9tYWNtZWhhcmRlci9EZXNrdG9wL2t5YmVkdS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbWFjbWVoYXJkZXIvRGVza3RvcC9reWJlZHUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xuaW1wb3J0IHZpdGVTdmdyIGZyb20gXCJ2aXRlLXBsdWdpbi1zdmdyXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IFt7IGZpbmQ6IFwiflwiLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIikgfV0sXG4gIH0sXG5cbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgdml0ZVN2Z3IoKSxcbiAgICBWaXRlUFdBKHtcbiAgICAgIHJlZ2lzdGVyVHlwZTogXCJhdXRvVXBkYXRlXCIsXG4gICAgICB3b3JrYm94OiB7XG4gICAgICAgIGdsb2JQYXR0ZXJuczogW1wiKiovKi57anMsY3NzLGh0bWwsaWNvLHBuZyxzdmd9XCJdLFxuICAgICAgfSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6IFwiQ3liZXIgRWR1Y2F0aW9uXCIsXG4gICAgICAgIHNob3J0X25hbWU6IFwiQ3liRWR1XCIsXG4gICAgICAgIHRoZW1lX2NvbG9yOiBcIiNGOUZBRkJcIixcbiAgICAgICAgYmFja2dyb3VuZF9jb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgIGRpc3BsYXk6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICBzY29wZTogXCIvXCIsXG4gICAgICAgIG9yaWVudGF0aW9uOiBcInBvcnRyYWl0LXByaW1hcnlcIixcbiAgICAgICAgc3RhcnRfdXJsOiBcIi9cIixcbiAgICAgICAgcmVsYXRlZF9hcHBsaWNhdGlvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwbGF0Zm9ybTogXCJ3ZWJhcHBcIixcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL3BoeXNpY2FsLXJhdC5zdXJnZS5zaC9tYW5pZmVzdC53ZWJtYW5pZmVzdFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHByZWZlcl9yZWxhdGVkX2FwcGxpY2F0aW9uczogdHJ1ZSxcbiAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2ltYWdlcy9pY29uLTUxMng1MTIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZSBhbnlcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxUixZQUFZLFVBQVU7QUFFM1MsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsZUFBZTtBQUN4QixPQUFPLGNBQWM7QUFMckIsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTyxDQUFDLEVBQUUsTUFBTSxLQUFLLGFBQWtCLGFBQVEsa0NBQVcsS0FBSyxFQUFFLENBQUM7QUFBQSxFQUNwRTtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsUUFBUTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsU0FBUztBQUFBLFFBQ1AsY0FBYyxDQUFDLGdDQUFnQztBQUFBLE1BQ2pEO0FBQUEsTUFDQSxVQUFVO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixhQUFhO0FBQUEsUUFDYixrQkFBa0I7QUFBQSxRQUNsQixTQUFTO0FBQUEsUUFDVCxPQUFPO0FBQUEsUUFDUCxhQUFhO0FBQUEsUUFDYixXQUFXO0FBQUEsUUFDWCxzQkFBc0I7QUFBQSxVQUNwQjtBQUFBLFlBQ0UsVUFBVTtBQUFBLFlBQ1YsS0FBSztBQUFBLFVBQ1A7QUFBQSxRQUNGO0FBQUEsUUFDQSw2QkFBNkI7QUFBQSxRQUM3QixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
