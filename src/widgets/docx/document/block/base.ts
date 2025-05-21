import {
  AlignmentType,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType
} from "docx";

export function create(data) {
  return [
    new Paragraph({
      children: [
        new TextRun({
          text: "СВЕДЕНИЯ ДЛЯ ЗАПОЛНЕНИЯ КОНТРАКТА",
          bold: true,
          size: 24,
          font: "Times New Roman",
        }),
      ],
      spacing: {after: 200},
      alignment: AlignmentType.CENTER,
    }),
    // Информация о заказчике
    new Paragraph({
      children: [
        new TextRun({
          text: `Полное наименование заказчика: ${data.customerName}`,
          size: 24,
          font: "Times New Roman",
        }),
      ],
      spacing: {after: 100},
    }),
    // Информация о поставщике
    new Paragraph({
      children: [
        new TextRun({
          text: `Полное наименование поставщика: ${data.supplierOrganizationName}`,
          size: 24,
          font: "Times New Roman",
        }),
      ],
      spacing: {after: 100},
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `Сведения о лице поставщика, имеющем право действовать без доверенности:`,
          size: 24,
          font: "Times New Roman",
        }),
      ],
      spacing: {after: 100},
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `ФИО: ${data.supplierMemberName}`,
          size: 24,
          font: "Times New Roman",
        }),
      ],
      spacing: {after: 100},
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `Должность: ${data.supplierPosition}`,
          size: 24,
          font: "Times New Roman",
        }),
      ],
      spacing: {after: 200},
    }),
  ];
}

