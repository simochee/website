import type { APIRoute } from "astro";
import { SITE } from "~config";

const ROBOTS_TXT = `
User-agent: *
Disallow: /

Sitemap: ${new URL(SITE.SITEMAP_PATHNAME, import.meta.env.SITE)}
`.trim();

export const GET: APIRoute = () => {
	return new Response(ROBOTS_TXT, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
