import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [tailwindcss(), qwikCity(), qwikVite(), tsconfigPaths()],
});