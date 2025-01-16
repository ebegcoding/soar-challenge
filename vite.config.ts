import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr({ svgrOptions: { icon: true } }),
    react(),
    tsconfigPaths(),
    splitVendorChunkPlugin(),
  ],
  server: {
    port: 3000,
  },
  esbuild: {
    //https://github.com/vitejs/vite/issues/8644
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
});
