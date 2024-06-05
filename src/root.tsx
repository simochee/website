import { component$, useStyles$ } from "@builder.io/qwik";
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import RouterHead from "~components/RouterHead";
import "@fontsource/ibm-plex-sans-jp";
import "@fontsource/ibm-plex-mono";
import "~global.css";

export default component$(() => {
	return (
		<QwikCityProvider>
			<head>
				<meta charSet="utf-8" />
				<RouterHead />
			</head>
			<body class="bg-white font-sans">
				<RouterOutlet />
				<ServiceWorkerRegister />
			</body>
		</QwikCityProvider>
	);
});
