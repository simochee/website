import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		pubDate: z.date().optional(),
		modDate: z.date().optional(),
		tags: z.array(z.string()).optional().default([]),
		draft: z.boolean().optional().default(true),
	}),
});

export const collections = { blog };
