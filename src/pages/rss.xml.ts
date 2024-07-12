import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { SITE } from "~config";

export const GET: APIRoute = async ({ site }) => {
	if (!site) {
		return new Response("Not found", { status: 404 });
	}

	const blogPosts = await getCollection("blog");

	return rss({
		title: SITE.TITLE,
		description: SITE.DESCRIPTION,
		site,
		items: [
			...blogPosts
				.filter(({ data }) => data.draft === false)
				.map(({ data, slug }) => ({
					link: `/blog/${slug}`,
					title: data.title,
					pubDate: data.pubDate,
				})),
		],
	});
};
