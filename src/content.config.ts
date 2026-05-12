import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    setting: z.string().optional(),
    series: z.string().optional(),
    characters: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    releaseDate: z.coerce.date().optional(),
    status: z.enum(['draft', 'forthcoming', 'published']).default('draft'),
    buyLinks: z.array(z.object({
      label: z.string(),
      url: z.string().url(),
    })).default([]),
    coverImage: z.string().optional(),
  }),
});

const characters = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/characters' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    series: z.string().optional(),
    private: z.boolean().default(true),
  }),
});

export const collections = { blog, stories, books, characters };
