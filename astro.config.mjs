import { defineConfig } from "astro/config";

// Static by default. This project is local-only until a later phase is approved.
export default defineConfig({
  site: "https://www.grovik.co",
  output: "static",
});
