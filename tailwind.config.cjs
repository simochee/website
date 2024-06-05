/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@digital-go-jp/tailwind-theme-plugin"),
	],
};

module.exports = config;
