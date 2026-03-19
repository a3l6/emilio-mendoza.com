import { getAllPosts } from '$lib/posts.server.js';

export function load() {
  // Returns only plain objects — title, date, slug, tags, excerpt strings
  return { posts: getAllPosts().map(({ html: _, ...rest }) => rest) };
}
