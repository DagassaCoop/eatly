import { defineConfig } from "vite"
import { fileURLToPath, URL } from "url"
import vue from "@vitejs/plugin-vue"
import eslint from "vite-plugin-eslint"

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
  },
  css: {
    preprocessorOptions: {
      // use next imports for every .scss file or part of code as in .vue files
      scss: {
        additionalData: `
          // @import "@/assets/styles/fonts.scss";
          @import "@/assets/styles/index.scss";
        `
      }
    }
  }
})
