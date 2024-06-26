import { QwikCityMockProvider } from "@builder.io/qwik-city";
import type { Meta, StoryObj } from "storybook-framework-qwik";
import Component from ".";

const meta: Meta<typeof Component> = {
	component: Component,
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Primary: Story = {
	args: {
		href: "/",
		children: "Hello World",
	},
	render: () => (
		<QwikCityMockProvider>
			<Component href="foobar">Hello</Component>
		</QwikCityMockProvider>
	),
};
