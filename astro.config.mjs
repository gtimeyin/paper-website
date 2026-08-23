import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://timeyin-gordon-portfolio-gtimeyins-projects.vercel.app",
  output: "static",
  build: {
    inlineStylesheets: "always",
  },
});
