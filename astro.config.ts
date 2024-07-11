import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import tsconfigPaths from "vite-tsconfig-paths";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
	site: SITE.ORIGIN,
	integrations: [tailwind(), sitemap()],
	markdown: {},
	vite: {
		plugins: [tsconfigPaths()],
	},
});
