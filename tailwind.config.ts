import { addDynamicIconSelectors } from "@iconify/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
		fontFamily: {
			sans: ["IBM Plex Sans JP", "Noto Sans JP", "sans-serif"],
			mono: [
				"IBM Plex Mono",
				"Noto Sans Mono",
				"IBM Plex Sans JP",
				"Noto Sans JP",
				"monospace",
			],
		},
	},
	plugins: [
		addDynamicIconSelectors({
			iconSets: {
				self: "./src/assets/icon-sets/self.json",
			},
		}),
	],
};

export default config;
