import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<header class="sticky top-0 left-0 w-full bg-white bg-opacity-70 backdrop-blur-sm">
			<div class="mx-auto flex max-w-6xl items-center justify-between p-6">
				<span class="grid grid-flow-col place-items-center gap-2 text-lg">
					<span class="icon-[carbon--moon] size-6" />
					よなよなコード
				</span>
			</div>
		</header>
	);
});
