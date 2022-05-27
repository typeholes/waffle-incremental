import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/waffle-incremental/",
  plugins: [vue()],
  build: {
    assetsDir: "waffle-incremental",
  },
});
