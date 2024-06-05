const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {},
		fontFamily: {
			sans: ["sans-serif"],
			mono: ["monospace"],
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@digital-go-jp/tailwind-theme-plugin"),
		addDynamicIconSelectors(),
	],
};

module.exports = config;
