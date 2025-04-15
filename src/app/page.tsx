import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex gap-[32px] items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        +
        <Image
          className="dark:invert"
          src="/icon.svg"
          alt="Next.js logo"
          width={38}
          height={38}
          priority
        />
      </main>
      <div className="flex gap-1 sm:flex-row flex-col sm:gap-4">
        <Link href={"./wysiwyg"}>Wysiwyg</Link>
        <Link href={"./pagination"}>Pagination</Link>
        <Link href={"./streaming"}>Streaming</Link>
        <Link href={"./server-components"}>ServerComponents</Link>
        <Link href={"./tests"}>Tests</Link>
        <Link href={"./table"}>Table</Link>
      </div>
    </div>
  );
}
