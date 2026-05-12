import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blog = await getCollection('blog', ({ data }) => !data.draft);
  const stories = await getCollection('stories', ({ data }) => !data.draft);

  const blogItems = blog.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    pubDate: post.data.pubDate,
    link: `/author-website/blog/${post.id}`,
  }));

  const storyItems = stories.map((story) => ({
    title: story.data.title,
    description: story.data.description,
    pubDate: story.data.pubDate,
    link: `/author-website/stories/${story.id}`,
  }));

  const items = [...blogItems, ...storyItems]
    .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: 'Brooks Marshall',
    description: 'Blog posts and short fiction from the Steadfast Universe.',
    site: context.site!.toString(),
    items,
  });
}
