import { type AnchorHTMLAttributes, Slot, component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "class">;

export default component$<Props>((props) => {
	const { url } = useLocation();

	return (
		<a
			{...props}
			class={[
				"rounded-full px-4 py-2 text-sm hover:font-bold",
				{ "bg-wood-50 font-bold": url.pathname === props.href },
			]}
		>
			<Slot />
		</a>
	);
});
