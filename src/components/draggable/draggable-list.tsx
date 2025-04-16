"use client";

import { useRef } from "react";
import { useSprings, animated, config } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import clamp from "lodash.clamp";
import swap from "lodash-move";

const dy = 25;
const fn =
  (order: number[], active = false, originalIndex = 0, curIndex = 0, y = 0) =>
  (index: number) =>
    active && index === originalIndex
      ? {
          y: curIndex * dy + y,
          scale: 1.1,
          zIndex: 1,
          immediate: (key: string) => key === "zIndex",
          config: (key: string) =>
            key === "y" ? config.stiff : config.default,
        }
      : {
          y: order.indexOf(index) * dy,
          scale: 1,
          zIndex: 0,
          immediate: false,
        };

export function DraggableList({ items }: { items: string[] }) {
  const order = useRef(items.map((_, index) => index));

  const [springs, api] = useSprings(items.length, fn(order.current));
  const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex);
    const curRow = clamp(
      Math.round((curIndex * dy + y) / dy),
      0,
      items.length - 1
    );
    const newOrder = swap(order.current, curIndex, curRow);
    api.start(fn(newOrder, active, originalIndex, curIndex, y));
    if (!active) order.current = newOrder;
  });

  const handleSetOrder = () => {
    const orders = order.current.map((i) => items[i]);
    console.log(orders);
  };

  return (
    <div className="flex justify-center flex-col items-center gap-4">
      <button
        className="border border-gray-500 rounded-sm px-2"
        onClick={handleSetOrder}
      >
        Set Order
      </button>
      <div className="w-[320px]" style={{ height: items.length * dy }}>
        {springs.map(({ zIndex, y, scale }, i) => (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <animated.div
            {...bind(i)}
            key={i}
            style={{
              zIndex,
              y,
              scale,
              position: "absolute",
              width: "320px",
              height: "24px",
              transformOrigin: "50% 50% 0px",
              borderRadius: "5px",
              paddingLeft: "32px",
              touchAction: "none",
              background: "white",
              border: "1px solid #6a7282",
            }}
          >
            {items[i]}
          </animated.div>
        ))}
      </div>
    </div>
  );
}
