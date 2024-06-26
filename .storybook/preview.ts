import type { Preview } from "storybook-framework-qwik";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		zeplinLink: "https://app.zeplin.io/project/667b8b8fc5865a31c9ab576b",
	},
};

export default preview;
