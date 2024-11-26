import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";


// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())}  

  return defineConfig({
    plugins: [vue()],
    server: {
      proxy: {
        "^/api": {
          target: process.env.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    define: {
      'process.env': process.env
    }
  });
});

