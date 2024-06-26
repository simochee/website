import type { StorybookConfig } from "storybook-framework-qwik";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
		"storybook-zeplin/register",
	],
	framework: {
		name: "storybook-framework-qwik",
	},
};

export default config;
