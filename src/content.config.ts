// src/content.config.ts

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({image})=>z.object({
		author: z.string(),
		categories: z.array(z.string()),
		date: z.string(),
		featured: z.boolean(),
		image: image(),
		title: z.string(),
		slug: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
