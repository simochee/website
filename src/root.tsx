import { component$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import "./global.css";
import { RouterHead } from "~/components/router-head/router-head";

export default component$(() => {
	return (
		<QwikCityProvider>
			<head>
				<meta charset="utf-8" />
				<RouterHead />
			</head>
			<body>
				<RouterOutlet />
			</body>
		</QwikCityProvider>
	);
});
