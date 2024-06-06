import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import logo from "~assets/logo.svg";

const NAV_ITEMS = [
	{ href: "/", label: "プロフィール" },
	{ href: "/blog/", label: "ブログ" },
	{ href: "/tools/", label: "ツール" },
];

export default component$(() => {
	const { url } = useLocation();

	return (
		<header class="sticky top-0 left-0 w-full bg-white bg-opacity-70 backdrop-blur-sm">
			<div class="mx-auto flex max-w-6xl items-center justify-between p-6">
				<span class="grid grid-flow-col place-items-center gap-2 text-lg">
					<img src={logo} alt="よなよなコード" width={152} height={24} />
				</span>
				<nav class="grid grid-flow-col gap-3">
					{NAV_ITEMS.map(({ href, label }) => (
						<a
							key={label}
							href={href}
							class={[
								"rounded-full px-4 py-2 text-sm hover:font-bold",
								{ "bg-wood-50 font-bold": url.pathname === href },
							]}
						>
							{label}
						</a>
					))}
				</nav>
			</div>
		</header>
	);
});
