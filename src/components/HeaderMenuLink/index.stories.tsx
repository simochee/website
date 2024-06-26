import type { Meta, StoryObj } from "storybook-framework-qwik";
import Component, { type Props } from ".";

type Args = Props & { children: string };
type Story = StoryObj<Args>;

const meta = {
	component: Component,
	argTypes: {
		href: {
			control: { type: "select" },
			options: ["/", "/portfolio"],
		},
	},
	args: {
		children: "ポートフォリオ",
	},
	render({ children, ...props }) {
		return (
			<Component {...props} preventdefault:click>
				{children}
			</Component>
		);
	},
} satisfies Meta<Args>;

export default meta;

export const Primary: Story = {
	args: {
		href: "/portfolio",
	},
};
