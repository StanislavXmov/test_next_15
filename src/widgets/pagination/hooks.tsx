"use client";

import { useState } from "react";
import { Pagination } from "./pagination";

export function usePagination<T>(data: T[], pageSize = 10) {
  const { currentPage, endIndex, setCurrentPage, startIndex, totalPages } =
    usePaginationState(data, pageSize);
  return {
    pagination: (
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    ),
    paginatedData: data.slice(startIndex, endIndex),
  };
}
// logic
export function usePaginationState<T>(data: T[], pageSize = 10) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return {
    currentPage,
    setCurrentPage,
    totalPages,
    startIndex,
    endIndex,
  };
}
