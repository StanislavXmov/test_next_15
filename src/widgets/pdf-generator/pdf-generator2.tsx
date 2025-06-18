"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "./document";

export function PDFGenerator2() {
  return (
    <div className="container">
      <h1>generate PDF on client</h1>
      {/* <button onClick={handleGeneratePDF}>Generate PDF2</button> */}
      <PDFDownloadLink document={<PdfDocument />}>
        Generate PDF2
      </PDFDownloadLink>
    </div>
  );
}
