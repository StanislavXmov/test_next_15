import { DataView } from "@/components/data-view/data-view";
import { getData } from "@/services/get-data";

export default async function GetData() {
  const data = await getData();

  return (
    <div>
      <h2>GetData</h2>
      <DataView data={data} />
    </div>
  );
}
