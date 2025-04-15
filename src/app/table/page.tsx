import { columns } from "@/widgets/table/columns";
import { DataTable } from "@/widgets/table/data-table";
import { getUsers } from "@/widgets/table/services";

export default async function Home() {
  const data = await getUsers();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
