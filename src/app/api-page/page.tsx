import { ApiComponent } from "@/widgets/api/api-component";

export default async function ApiPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <ApiComponent />
    </div>
  );
}
