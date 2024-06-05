import { Slot, component$ } from "@builder.io/qwik";
import Header from "~components/Header";

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
