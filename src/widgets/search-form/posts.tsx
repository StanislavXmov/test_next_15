"use client";
import { use } from "react";

export type Post = { id: number; title: string };
type Props = {
  posts: Promise<Post[]>;
};

export function Posts({ posts }: Props) {
  const postsList = use(posts);
  return (
    <ul>
      {postsList.map((post: { id: number; title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
