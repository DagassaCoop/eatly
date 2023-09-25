import { defineConfig } from "vite"
import { fileURLToPath, URL } from "url"
import vue from "@vitejs/plugin-vue"
import eslint from "vite-plugin-eslint"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint({
      cache: false,
      include: ["./src/**/*.js", "./src/**/*.vue"],
      exclude: []
    })
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url))
      }
    ]
  }
})
