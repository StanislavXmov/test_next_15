"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { z } from "zod";

const querySchema = z
  .object({
    sort: z.enum(["asc", "desc"]).catch("asc"),
    q: z.string().catch(""),
    filter: z.enum(["all", "open", "closed"]).catch("all"),
    page: z.string().default("1").pipe(z.coerce.number().min(1)).catch(1),
    per_page: z
      .string()
      .default("10")
      .pipe(z.coerce.number().min(1).max(100))
      .catch(10),
    range_start: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .pipe(z.coerce.date())
      .optional()
      .catch(undefined),
    range_end: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .pipe(z.coerce.date())
      .optional()
      .catch(undefined),
  })
  .transform(({ range_start, per_page, range_end, page, ...val }) => {
    return {
      ...val,
      page: page,
      perPage: per_page,
      range: {
        start: range_start,
        end: range_end,
      },
    };
  });

export function Links() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const searchParamsTest = new URLSearchParams();

  searchParamsTest.set("sort", "test");
  searchParamsTest.set("q", "test");
  searchParamsTest.set("filter", "bar");
  searchParamsTest.set("range_start", "2024-02-26");
  searchParamsTest.set("range_end", "2025");
  searchParamsTest.set("page", "20");

  const paramsObject = Object.fromEntries(searchParams.entries());

  const params = querySchema.parse(paramsObject);

  console.log({ paramsObject, params });

  return (
    <div className="flex flex-col gap-4 justify-center mt-10 mb-10 px-10">
      Search: {searchParams.toString()}
      <Link href={`${pathname}?${searchParamsTest.toString()}`}>Link</Link>
    </div>
  );
}
