"use client";

import { Dispatch, SetStateAction } from "react";

// ui
export function Pagination({
  startIndex,
  endIndex,
  currentPage,
  setCurrentPage,
  totalPages,
}: {
  startIndex: number;
  totalPages: number;
  endIndex: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="text-gray-400">
        Showing {startIndex + 1} to {Math.min(endIndex, totalPages)} of{" "}
        {totalPages} entries
      </div>
      <div className="flex gap-1">
        <button
          className="py-1 px-2 border border-gray-400 rounded-lg bg-none cursor-pointer hover:bg-gray-200"
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            className={`py-1 px-2 border border-gray-400 rounded-lg bg-none cursor-pointer hover:bg-gray-200 ${
              currentPage === number ? "bg-gray-200 font-bold" : ""
            }`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
        <button
          className="py-1 px-2 border border-gray-400 rounded-lg bg-none cursor-pointer hover:bg-gray-200"
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
