import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked, Renderer } from 'marked';

const renderer = new Renderer();
renderer.link = ({ href, title, tokens }) => {
  const text = tokens.map(t => t.raw).join('');
  const titleAttr = title ? ` title="${title}"` : '';
  return `<a href="${href}"${titleAttr} target="_blank" rel="noopener noreferrer">${text}</a>`;
};
marked.use({ renderer });

const POSTS_DIR = path.resolve(process.env.POSTS_DIR ?? 'src/posts');

/** Parse a single .md file into serializable data (no functions, no components). */
function parsePost(filename) {
  const raw  = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf-8');
  const { data, content } = matter(raw);
  return {
    slug:    filename.replace('.md', ''),
    title:   data.title   ?? 'UNTITLED',
    date:    data.date ? String(data.date) : '',
    tags:    data.tags    ?? [],
    excerpt: data.excerpt ?? '',
    html:    marked(content),   // rendered HTML string — fully serializable
  };
}

/** All posts sorted newest first. */
export function getAllPosts() {
  return fs
    .readdirSync(POSTS_DIR)
    .filter(f => f.endsWith('.md'))
    .map(parsePost)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

/** Single post by slug. Returns null if not found. */
export function getPost(slug) {
  const file = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  return parsePost(`${slug}.md`);
}
