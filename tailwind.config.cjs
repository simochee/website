import { family as IBMPlexMono } from '@fontsource/ibm-plex-mono/metadata.json'
import { family as IBMPlexSansJP } from '@fontsource/ibm-plex-sans-jp/metadata.json'

/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {},
		fontFamily: {
			sans: [IBMPlexSansJP, "sans-serif"],
			mono: [IBMPlexMono, "monospace"]
		}
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@digital-go-jp/tailwind-theme-plugin"),
	],
};

module.exports = config;
