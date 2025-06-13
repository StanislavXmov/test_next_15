"use client";

import { jsPDF } from "jspdf";
// https://raw.githack.com/MrRio/jsPDF/master/index.html

function addWrappedText({
  text,
  textWidth,
  doc,
  fontSize = 10,
  // fontType = "normal",
  lineSpacing = 7,
  xPosition = 10,
  initialYPosition = 10,
  pageWrapInitialYPosition = 10,
}: {
  text: string;
  textWidth: number;
  doc: jsPDF;
  fontSize?: number;
  // fontType:
  lineSpacing?: number;
  xPosition?: number;
  initialYPosition?: number;
  pageWrapInitialYPosition?: number;
}) {
  const textLines: string[] = doc.splitTextToSize(text, textWidth);
  const pageHeight = doc.internal.pageSize.height;
  // doc.setFont(fontType);
  doc.setFontSize(fontSize);
  let cursorY = initialYPosition;

  textLines.forEach((lineText) => {
    if (cursorY > pageHeight) {
      // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
    }
    doc.text(lineText, xPosition, cursorY);
    cursorY += lineSpacing;
  });

  return cursorY;
}

export function PDFGenerator() {
  const handleGeneratePDF = () => {
    const doc = new jsPDF();
    // console.log(doc.internal.pageSize);
    const width = 210;
    // const height = 297;

    doc.text("Test World 2025!", 5, 10);
    doc.text("2344 [34342] [23444]", 5, 18);

    doc.setFontSize(10);
    doc.text("Test test 23", width / 2 + 10, 8);
    doc.text("Lorem, ipsum dolor", width / 2 + 10, 12);
    doc.text("Corrupti sunt quia blanditiis", width / 2 + 10, 16);

    let cursorY = 58;

    doc.setLineWidth(14);
    doc.line(0, cursorY, width / 2, cursorY);

    doc.setFontSize(16);
    doc.setTextColor(255, 255, 255);
    doc.text("Test World 2025!", 5, cursorY + 2);

    doc.setTextColor(0, 0, 0);
    cursorY = addWrappedText({
      doc,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt quia blanditiis reprehenderit vero quasi doloribus mollitia rem ex voluptatem nemo eveniet, eaque assumenda quisquam natus aliquid, vitae, velit optio quaerat. Doloribus obcaecati quas id illo voluptatum aliquam molestiae? Perferendis, ipsam rerum. Dicta nemo cum delectus. Repudiandae, similique at quia magni sequi, laboriosam perspiciatis quaerat illum autem, sint a quod cum quasi officiis nisi soluta velit minus culpa temporibus dolorem sunt modi suscipit quas est.",
      textWidth: 160,
      xPosition: 60,
      initialYPosition: cursorY + 14,
    });

    doc.setLineWidth(14);
    doc.line(0, cursorY + 8, width / 2, cursorY + 8);

    doc.setFontSize(16);
    doc.setTextColor(255, 255, 255);
    doc.text("Test World 2026!", 5, cursorY + 2 + 8);

    doc.setTextColor(0, 0, 0);
    addWrappedText({
      doc,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt quia blanditiis reprehenderit vero quasi doloribus mollitia rem ex voluptatem nemo eveniet, eaque assumenda quisquam natus aliquid, vitae, velit optio quaerat. Doloribus obcaecati quas id illo voluptatum aliquam molestiae? Perferendis, ipsam rerum. Dicta nemo cum delectus. Repudiandae, similique at quia magni sequi, laboriosam perspiciatis quaerat illum autem, sint a quod cum quasi officiis nisi soluta velit minus culpa temporibus dolorem sunt modi suscipit quas est.",
      textWidth: 160,
      xPosition: 60,
      initialYPosition: cursorY + 14 + 8,
    });

    // doc.setFontSize(22);
    // doc.text("This is new PDF", 10, 20);
    // doc.setFontSize(16);
    // doc.text(
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt quia blanditiis reprehenderit vero quasi doloribus mollitia rem ex voluptatem nemo eveniet, eaque assumenda quisquam natus aliquid, vitae, velit optio quaerat. Doloribus obcaecati quas id illo voluptatum aliquam molestiae? Perferendis, ipsam rerum. Dicta nemo cum delectus. Repudiandae, similique at quia magni sequi, laboriosam perspiciatis quaerat illum autem, sint a quod cum quasi officiis nisi soluta velit minus culpa temporibus dolorem sunt modi suscipit quas est. Animi neque itaque vitae doloribus fugiat necessitatibus consequuntur consectetur sapiente magnam?",
    //   10,
    //   30,
    //   { maxWidth: 180 }
    // );

    doc.save("example.pdf");
  };

  return (
    <div className="container">
      <h1>generate PDF on client</h1>
      <button onClick={handleGeneratePDF}>Generate PDF</button>
    </div>
  );
}
