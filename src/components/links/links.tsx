"use client";

import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { z } from "zod";
import queryString from "query-string";

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

const sectionsSchema = z.object({
  sections_id: z.array(z.string().transform((val) => Number(val))).catch([]),
});

export function Links() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

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

  const createQuery = () => {
    const sections_id = [1, 20, 13, 32];
    const q = queryString.stringify(
      { sections_id },
      {
        arrayFormat: "bracket",
      }
    );
    console.log(q);
    replace(`${pathname}?${q}`);
  };

  const parseQuery = () => {
    const sections_id = queryString.parse(searchParams.toString(), {
      arrayFormat: "bracket",
    });
    console.log(sections_id);
    const result = sectionsSchema.parse(sections_id);
    console.log(result);
    result.sections_id.forEach((id) => console.log("sections_id", id));
  };

  return (
    <div className="flex flex-col gap-4 justify-center mt-10 mb-10 px-10">
      Search: {searchParams.toString()}
      <Link href={`${pathname}?${searchParamsTest.toString()}`}>Link</Link>
      <button onClick={createQuery}>Create section query</button>
      <button onClick={parseQuery}>Parse section query</button>
    </div>
  );
}
