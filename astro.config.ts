import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: process.env.ASTRO_SITE_URL,
  integrations: [tailwind()],
});
