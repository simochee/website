import type { Meta, StoryObj } from "storybook-framework-qwik";
import Component, { type Props } from ".";

type Args = Props & { children: string };
type Story = StoryObj<Args>;

const meta = {
	component: Component,
	args: {
		href: "/",
		children: "プロフィール",
	},
} satisfies Meta<Args>;

export default meta;

export const Primary: Story = {
	args: {
		href: "/blog",
		children: "ブログ",
	},

	render({ children, ...props }) {
		return <Component {...props}>{children}</Component>;
	},
};

export const Active: Story = {
	args: {
		href: "/",
		children: "プロフィール",
	},

	render({ children, ...props }) {
		return <Component {...props}>{children}</Component>;
	},
};
