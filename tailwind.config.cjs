const {
	family: IBMPlexSansJP,
} = require("@fontsource/ibm-plex-sans-jp/metadata.json");
const {
	family: IBMPlexMono,
} = require("@fontsource/ibm-plex-mono/metadata.json");
const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {},
		fontFamily: {
			sans: [IBMPlexSansJP, "sans-serif"],
			mono: [IBMPlexMono, "monospace"],
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@digital-go-jp/tailwind-theme-plugin"),
		addDynamicIconSelectors(),
	],
};

module.exports = config;
