import { defineConfig } from "astro/config";

const { ASTRO_SITE, ASTRO_BASE } = process.env;

export default defineConfig({
	site: ASTRO_SITE,
	base: ASTRO_BASE,
});
