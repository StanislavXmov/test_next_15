import { PDFGenerator } from "@/widgets/pdf-generator/pdf-generator";

export default async function ApiPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <PDFGenerator />
    </div>
  );
}
