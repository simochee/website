import type { Preview } from "storybook-framework-qwik";
import { qwikCityDecorator } from "storybook-framework-qwik/qwik-city-decorator";

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
	decorators: [qwikCityDecorator],
};

export default preview;
