import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Modal } from "@qwik-ui/headless";
import logo from "~assets/logo.svg";
import HeaderMenuLink from "~components/HeaderMenuLink";
import { WEBSITE_NAME } from "~constants";

const NAV_ITEMS = [
	{ href: "/", label: "プロフィール" },
	{ href: "/blog/", label: "ブログ" },
	{ href: "/tools/", label: "ツール" },
];

export default component$(() => {
	const { url } = useLocation();

	return (
		<header class="sticky top-0 left-0 w-full bg-white bg-opacity-70 backdrop-blur-sm">
			<div class="mx-auto flex h-16 max-w-6xl items-center justify-between pr-2 pl-4 md:h-20 md:pr-6">
				<span class="grid grid-flow-col place-items-center gap-2 text-lg">
					<img src={logo} alt={WEBSITE_NAME} width={152} height={24} />
				</span>
				<nav class="hidden grid-flow-col gap-3 md:grid">
					{NAV_ITEMS.map(({ href, label }) => (
						<HeaderMenuLink href={href}>{label}</HeaderMenuLink>
					))}
				</nav>
				<Modal.Root class="md:hidden">
					<Modal.Trigger class="grid size-12 place-items-center">
						<span class="icon-[carbon--menu] block size-6" />
					</Modal.Trigger>
					<Modal.Panel class="mt-0 w-full">
						<div class="flex h-16 items-center justify-between pr-2 pl-4">
							<Modal.Title>
								<img src={logo} alt={WEBSITE_NAME} width={152} height={24} />
							</Modal.Title>
							<Modal.Close class="grid size-12 place-items-center">
								<span class="icon-[carbon--close] block size-6" />
							</Modal.Close>
						</div>
						<nav class="grid gap-2 p-4">
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
					</Modal.Panel>
				</Modal.Root>
			</div>
		</header>
	);
});
