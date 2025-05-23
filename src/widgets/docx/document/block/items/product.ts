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
import { Data } from "../../types";
import { createHeadingRow, itemCellStyle } from "../../utils";

const headings = [
  { text: "Наименование ТРУ" },
  { text: "Характеристики объекта закупки" },
  { text: "Товарный знак" },
  { text: "Страна происхождения" },
  { text: "НДС" },
  { text: "Ед. измерения" },
  { text: "Количество" },
];

function createItemFirstRow(item: Data["items"][number]) {
  let characteristic = item.characteristics.shift(); // Удаляет первый элемент и возвращает его
  const rowSpan = item.characteristics.length + 1;
  return new TableRow({
    children: [
      new TableCell({
        children: [new Paragraph({ ...itemCellStyle, text: item.name })],
        margins: { top: 100, bottom: 100, left: 100, right: 100 },
        rowSpan: rowSpan,
      }),
      new TableCell({
        children: [
          new Paragraph({
            text: characteristic,
          }),
        ],
      }),
      new TableCell({
        children: [new Paragraph({ ...itemCellStyle, text: item.trademark })],
        rowSpan: rowSpan,
      }),
      new TableCell({
        children: [new Paragraph({ ...itemCellStyle, text: item.country })],
        rowSpan: rowSpan,
      }),
      new TableCell({
        children: [new Paragraph({ ...itemCellStyle, text: item.vat })],
        rowSpan: rowSpan,
      }),
      new TableCell({
        children: [new Paragraph({ ...itemCellStyle, text: item.measure })],
        rowSpan: rowSpan,
      }),
      new TableCell({
        children: [new Paragraph({ ...itemCellStyle, text: item.count })],
        rowSpan: rowSpan,
      }),
    ],
  });
}

function createItemSecondCharacteristicRow(characteristic: string) {
  return new TableRow({
    children: [
      new TableCell({
        children: [
          new Paragraph({
            text: characteristic,
          }),
        ],
        margins: { top: 100, bottom: 100, left: 100, right: 100 },
      }),
    ],
    // height: { value: 500 + 1 * 200, rule: "atLeast" },
  });
}

function createItemRowSet(items: Data["items"]) {
  const itemRows = [];
  for (const item of items) {
    itemRows.push(createItemFirstRow(item));
    for (const char of item.characteristics) {
      itemRows.push(createItemSecondCharacteristicRow(char));
    }
  }
  return itemRows;
}

export function create(data: Data) {
  return [
    new Paragraph({
      children: [
        new TextRun({
          text: "СПЕЦИФИКАЦИЯ ОБЪЕКТА ЗАКУПКИ",
          bold: true,
          size: 24,
          font: "Times New Roman",
        }),
      ],
      spacing: { after: 200 },
      alignment: AlignmentType.CENTER,
    }),
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      columnWidths: [3000, 3000, 1500, 1500, 1000, 1000],
      rows: [createHeadingRow(headings), ...createItemRowSet(data.items)],
    }),
  ];
}
