"use client";

import { GetData } from "@/services/get-data";
import { useState } from "react";

export function DataView({ data: data2 }: { data: GetData[] }) {
  console.log(data2);

  const [data, setData] = useState<GetData[]>([]);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <button
        data-testid={"get-data"}
        onClick={async () => {
          try {
            setIsClicked(true);
            const response = await fetch("http://localhost:3002/posts");
            const data = (await response.json()) as GetData[];
            setData(data);
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        GET DATA
      </button>
      {data.map((d, i) => (
        <div data-testid={`client-get-data-${i}`} key={i}>
          {d.title}
        </div>
      ))}
      {isClicked && <div>Clicked</div>}
      {data2.map((d, i) => (
        <div data-testid={`server-get-data-${i}`} className="underline" key={i}>
          {d.title}
        </div>
      ))}
    </div>
  );
}
