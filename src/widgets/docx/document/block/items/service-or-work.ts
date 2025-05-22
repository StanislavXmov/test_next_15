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
import {
  createHeadingRow,
  getForeignPurchaseObjects,
  getRegistryNumber,
  itemCellStyle,
} from "../../utils";

const headings = [
  { text: "Информация о нац. режиме" },
  { text: "Наименование ТРУ" },
  { text: "Характеристики объекта закупки" },
  { text: "Страна происхождения" },
  { text: "Реестровые номера" },
  { text: "НДС" },
  { text: "Количество, ед. измерения" },
  { text: "Цена за ед. изм. руб." },
  { text: "Стоимость" },
  { text: "Стоимость с НДС" },
];

function createItemFirstRow(item: Data["items"][number]) {
  let characteristic = item.characteristics.shift(); // Удаляет первый элемент и возвращает его
  const rowSpan = item.characteristics.length + 1;
  return new TableRow({
    children: [
      new TableCell({
        children: [
          new Paragraph({
            ...itemCellStyle,
            text: getForeignPurchaseObjects(item.restrictions),
          }),
        ],
        margins: { top: 100, bottom: 100, left: 100, right: 100 },
        rowSpan: rowSpan,
      }),
      new TableCell({
        children: [new Paragraph({ ...itemCellStyle, text: item.name })],
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
        children: [new Paragraph({ ...itemCellStyle, text: item.country })],
        rowSpan: rowSpan,
      }),
      new TableCell({
        children: [...item.registryNumbers.map((n) => getRegistryNumber(n))],
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
        children: [new Paragraph({ ...itemCellStyle, text: "item.unitPrice" })],
        rowSpan: rowSpan,
      }),
      new TableCell({
        children: [
          new Paragraph({ ...itemCellStyle, text: "item.totalPrice" }),
        ],
        rowSpan: rowSpan,
      }),
      new TableCell({
        children: [
          new Paragraph({ ...itemCellStyle, text: "item.totalPriceWithVat" }),
        ],
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
      columnWidths: [
        1363 * 1.5,
        1363,
        1363 * 1.5,
        1363,
        1363,
        1363 / 2,
        1363 / 2,
        1363,
        1363,
        1363,
      ],
      rows: [createHeadingRow(headings), ...createItemRowSet(data.items)],
    }),
  ];
}
