const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
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
		require("@tailwindcss/typography"),
		require("@digital-go-jp/tailwind-theme-plugin"),
		addDynamicIconSelectors(),
	],
};

module.exports = config;
