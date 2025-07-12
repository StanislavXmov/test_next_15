import { http, HttpResponse } from "msw";

import posts from "./data/posts.json";

export const handlers = [
  http.get("http://localhost:3002/posts", () => HttpResponse.json(posts)),
];
