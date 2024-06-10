import { Slot, component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Header from "~components/Header";

export const head: DocumentHead = ({ head, url }) => {
	return {
		title: head.title ? `${head.title} | よなよなコード` : "よなよなコード",
		meta: [
			{
				name: "description",
				content: "しもちぃが夜な夜なコードを書いたポートフォリオサイトです。",
			},
			{
				property: "og:title",
				content: head.title || "よなよなコード",
			},
			{
				property: "og:description",
				content: "しもちぃが夜な夜なコードを書いたポートフォリオサイトです。",
			},
			{
				property: "og:url",
				content: new URL(url.pathname, "https://simochee.net").href,
			},
			{
				property: "og:type",
				content: "website",
			},
		],
	};
};

export default component$(() => {
	return (
		<>
			<Header />
			<main class="mx-auto max-w-6xl px-4">
				<Slot />
			</main>
		</>
	);
});
