import { Posts, Post } from "@/widgets/search-form/posts";
import SearchButton from "@/widgets/search-form/search-button";
import Form from "next/form";
import { Suspense } from "react";

const baseUrl = "http://localhost:3002/posts";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getPosts(url: string) {
  await sleep(2000);
  const response = await fetch(url);
  return (await response.json()) as Promise<Post[]>;
}

function getUrl(query: string | string[]) {
  return `${baseUrl}${query ? `?title_like=${query}` : ""}`;
}

export default async function SearchFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const query = (await searchParams).query || "";
  const url = getUrl(query);

  return (
    <div className="flex min-h-screen flex-col items-start p-24">
      <Form action="/search-form" className="flex gap-4">
        <input className="border border-gray-400 rounded-sm" name="query" />
        <SearchButton />
      </Form>
      <Suspense key={url} fallback={<div>Loading</div>}>
        <Posts posts={getPosts(url)} />
      </Suspense>
    </div>
  );
}
