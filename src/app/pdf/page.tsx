import { PDFGenerator } from "@/widgets/pdf-generator/pdf-generator";
import { PDFGenerator2 } from "@/widgets/pdf-generator/pdf-generator2";

export default async function ApiPage() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24 gap-4">
      <PDFGenerator />
      <PDFGenerator2 />
    </div>
  );
}
