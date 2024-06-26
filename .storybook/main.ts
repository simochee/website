import type { StorybookConfig } from "storybook-framework-qwik";

const config: StorybookConfig = {
	framework: {
		name: "storybook-framework-qwik",
	},
	core: {
		renderer: "storybook-framework-qwik",
	},
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
		"storybook-zeplin/register",
	],
	docs: {
		autodocs: "tag",
	},
};

export default config;
