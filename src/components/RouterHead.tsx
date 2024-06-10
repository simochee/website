import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

export default component$(() => {
	const head = useDocumentHead();
	const location = useLocation();

	return (
		<>
			<title>{head.title}</title>
			<link rel="canonical" href={location.url.href} />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
			<link rel="manifest" href="/manifest.json" />
			{head.meta.map(({ key, ...attrs }) => (
				<meta key={key} {...attrs} />
			))}
			{head.links.map(({ key, ...attrs }) => (
				<link key={key} {...attrs} />
			))}
			{head.styles.map(({ key, style, ...attrs }) => (
				// biome-ignore lint/security/noDangerouslySetInnerHtml: safe to use
				<style key={key} {...attrs} dangerouslySetInnerHTML={style} />
			))}
			{head.scripts.map(({ key, script, ...attrs }) => (
				// biome-ignore lint/security/noDangerouslySetInnerHtml: safe to use
				<script key={key} {...attrs} dangerouslySetInnerHTML={script} />
			))}
		</>
	);
});
