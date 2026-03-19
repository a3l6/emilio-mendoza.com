import { getPost } from '$lib/posts.server.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  const post = getPost(params.slug);
  if (!post) throw error(404, 'Post not found');

  // Everything here is a plain string/array — fully serializable, zero functions
  return post;
}
