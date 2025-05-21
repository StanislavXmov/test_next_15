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
const createRows = (data: Data) => {
  const margins = { left: 100, top: 100, bottom: 100, right: 100 };
  const rows: TableRow[] = [];

  const createRow = (label: string, value?: string) => {
    if (!value) {
      return;
    }
    const row = new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  bold: true,
                  text: label,
                  size: 24,
                  font: "Times New Roman",
                }),
              ],
            }),
          ],
          margins,
        }),
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: value,
                  size: 24,
                  font: "Times New Roman",
                }),
              ],
            }),
          ],
          margins,
        }),
      ],
    });

    rows.push(row);
  };

  createRow("Номер извещения", data.proceduresInfo.registrationNumber);
  createRow("ИКЗ", data.proceduresInfo.ikzCode);
  createRow(
    "Дата размещения извещения в ЕИС",
    new Date(data.proceduresInfo.cteatedDt).toLocaleDateString()
  );
  createRow("Наименование закупки", data.proceduresInfo.proceduresName);
  createRow(
    "Преимущество по национальному режиму",
    data.proceduresInfo.isPreference
  );
  createRow("Закупка СМП/СОНО", undefined);
  createRow(
    "Размер обеспечения контракта",
    data.proceduresInfo.contractProvisionValue
  );
  createRow(
    "НМЦК",
    !Boolean(data.proceduresInfo.impossibleDetermine)
      ? data.proceduresInfo.maxSum
      : undefined
  );
  createRow(
    "Максимальная сумма цен единиц товара, работы, услуги",
    Boolean(data.proceduresInfo.impossibleDetermine)
      ? data.proceduresInfo.maxSum
      : undefined
  );
  createRow("Цена победителя", data.proceduresInfo.supplierOffer);
  createRow("Информация о преимуществах по ст. 28, 29", undefined);
  createRow("Цена контракта", data.proceduresInfo.contractPrice);
  createRow("Экономия, %", data.proceduresInfo.percentageSavings);
  createRow("Экономия, руб.", data.proceduresInfo.savingMoney);

  return rows;
};

export function create(data: Data) {
  return [
    new Paragraph({
      children: [
        new TextRun({
          text: "СВЕДЕНИЯ О ЗАКУПКЕ",
          bold: true,
          size: 24,
          font: "Times New Roman",
        }),
      ],
      spacing: { after: 400 },
      alignment: AlignmentType.CENTER,
    }),
    new Table({
      columnWidths: [6815, 6815],
      rows: [...createRows(data)],
    }),
    new Paragraph({
      children: [],
      spacing: { after: 200 },
    }),
  ];
}
