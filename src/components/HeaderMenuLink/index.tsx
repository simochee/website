import { Slot, component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export type Props = {
	href: string;
};

export default component$<Props>(({ href }) => {
	const { url } = useLocation();

	return (
		<a
			href={href}
			class={[
				"rounded-full px-4 py-2 text-sm hover:font-bold",
				{ "bg-wood-50 font-bold": url.pathname === href },
			]}
		>
			<Slot />
		</a>
	);
});
