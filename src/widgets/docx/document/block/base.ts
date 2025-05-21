import {
  AlignmentType,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";
import { Data } from "../types";

export function create(data: Data) {
  return [
    new Paragraph({
      children: [
        new TextRun({
          text: "СВЕДЕНИЯ ДЛЯ ЗАПОЛНЕНИЯ КОНТРАКТА",
          bold: true,
          size: 32,
          font: "Times New Roman",
        }),
      ],
      spacing: { after: 800 },
      alignment: AlignmentType.CENTER,
    }),
    // Информация о заказчике
    new Paragraph({
      children: [
        new TextRun({
          bold: true,
          text: `Полное наименование заказчика:`,
          size: 24,
          font: "Times New Roman",
        }),
      ],
      spacing: { after: 100 },
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: data.customerName,
          size: 24,
          font: "Times New Roman",
        }),
      ],
      spacing: { after: 400 },
    }),
    // Информация о поставщике
    new Paragraph({
      children: [
        new TextRun({
          bold: true,
          text: `Полное наименование поставщика:`,
          size: 24,
          font: "Times New Roman",
        }),
      ],
      spacing: { after: 100 },
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: data.supplierOrganizationName,
          size: 24,
          font: "Times New Roman",
        }),
      ],
      spacing: { after: 400 },
    }),
    new Paragraph({
      children: [
        new TextRun({
          bold: true,
          text: `Сведения о лице поставщика, имеющем право действовать без доверенности:`,
          size: 24,
          font: "Times New Roman",
        }),
      ],
      spacing: { after: 100 },
    }),
    new Paragraph({
      children: [
        new TextRun({
          bold: true,
          text: `ФИО: `,
          size: 24,
          font: "Times New Roman",
        }),
        new TextRun({
          text: data.supplierMemberName,
          size: 24,
          font: "Times New Roman",
        }),
      ],
      spacing: { after: 100 },
    }),
    new Paragraph({
      children: [
        new TextRun({
          bold: true,
          text: `Должность: `,
          size: 24,
          font: "Times New Roman",
        }),
        new TextRun({
          text: data.supplierPosition,
          size: 24,
          font: "Times New Roman",
        }),
      ],
      spacing: { after: 800 },
    }),
  ];
}
