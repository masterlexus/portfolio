import type { BlogPostMeta } from '../../types';

import helloWorldRaw from './building_portfolio.md?raw';

const rawPosts: Record<string, string> = {
  'hello-world': helloWorldRaw,
};

export function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const yamlBlock = match[1];
  const content = match[2];
  const data: Record<string, unknown> = {};

  for (const line of yamlBlock.split('\n')) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (!m) continue;
    const [, key, val] = m;
    const trimmed = val.trim();
    // Array value like ['a', 'b']
    if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
      data[key] = trimmed
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^['"]|['"]$/g, ''));
    } else {
      // Strip surrounding quotes
      data[key] = trimmed.replace(/^['"]|['"]$/g, '');
    }
  }

  return { data, content };
}

function parseMeta(slug: string, raw: string): BlogPostMeta {
  const { data, content } = parseFrontmatter(raw);
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    tags: (data.tags as string[]) ?? [],
    readingTime: `${minutes} min read`,
  };
}

export const blogPosts: BlogPostMeta[] = Object.entries(rawPosts)
  .map(([slug, raw]) => parseMeta(slug, raw))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getRawPost(slug: string): string | undefined {
  return rawPosts[slug];
}
