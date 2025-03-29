"use client";

import { usePagination } from "./hooks";

const mockData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Editor" },
  { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "User" },
  { id: 6, name: "Diana Miller", email: "diana@example.com", role: "Admin" },
  { id: 7, name: "Edward Davis", email: "edward@example.com", role: "User" },
  { id: 8, name: "Fiona Clark", email: "fiona@example.com", role: "Editor" },
  { id: 9, name: "George White", email: "george@example.com", role: "User" },
  { id: 10, name: "Helen Martin", email: "helen@example.com", role: "Admin" },
  { id: 11, name: "Ian Taylor", email: "ian@example.com", role: "Editor" },
  { id: 12, name: "Julia Adams", email: "julia@example.com", role: "User" },
];

export function PaginationWrapper() {
  const { pagination, paginatedData } = usePagination(mockData, 5);

  return (
    <div style={{ maxWidth: "960px", margin: "2rem auto" }}>
      <table className="w-full border-collapse mb-1">
        <thead className="border-b-2 border-b-gray-400">
          <tr>
            <th className="p-3 text-left font-bold">ID</th>
            <th className="p-3 text-left font-bold">Name</th>
            <th className="p-3 text-left font-bold">Email</th>
            <th className="p-3 text-left font-bold">Role</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id} className="bg-gray-100">
              <td className="p-3">{item.id}</td>
              <td className="p-3">{item.name}</td>
              <td className="p-3">{item.email}</td>
              <td className="p-3">
                <span className="py-0.5 px-1.5 text-xs">{item.role}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {pagination}
    </div>
  );
}
