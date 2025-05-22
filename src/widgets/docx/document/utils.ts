import { AlignmentType, Paragraph, TableCell, TableRow, TextRun } from "docx";

export const itemCellStyle = {
  font: "Times New Roman",
  size: 20,
};

export const headingStyle = {
  bold: true,
  font: { name: "Times New Roman" },
  size: 20,
  alignment: AlignmentType.CENTER,
};

export function createHeadingRow(
  headings: {
    text: string;
  }[]
) {
  const headRows = [];
  for (const heading of headings) {
    const horizontalMargin = 100;
    const verticalMargin = 100;

    headRows.push(
      new TableCell({
        children: [
          new Paragraph({
            children: [new TextRun({ ...headingStyle, text: heading.text })],
            alignment: AlignmentType.CENTER, // Для выравнивания всего абзаца
          }),
        ],
        // shading: {
        //   fill: "D3D3D3",
        //   type: ShadingType.SOLID,
        // },
        margins: {
          top: verticalMargin,
          bottom: verticalMargin,
          left: horizontalMargin,
          right: horizontalMargin,
        },
      })
    );
  }

  return new TableRow({
    children: headRows,
  });
}

export const getContractPurchaseObjectsInfo = (restrictions: {
  isProhibitionForeignPurchaseObjects: string;
  isRestrictForeignPurchaseObjects: string;
  isPreferenceRFPurchaseObjects: string;
  isImpossibilityProhibition: string;
  reasonImpossibilityProhibition: string;
}) => {
  const isProhibitionForeignPurchaseObjects =
    "Установлен запрет на закупку иностранных товаров";
  const isRestrictForeignPurchaseObjects =
    "Установлено ограничение на закупку иностранных товаров";
  const isPreferenceRFPurchaseObjects =
    "Установлено преимущество на закупку иностранных товаров";
  const isImpossibilityProhibition =
    "Присутствуют обстоятельства, допускающие  неприменение запрета/ограничения";
  const objectsInfo: string[] = [];

  if (Boolean(restrictions.isProhibitionForeignPurchaseObjects)) {
    objectsInfo.push(isProhibitionForeignPurchaseObjects);
  }
  if (Boolean(restrictions.isRestrictForeignPurchaseObjects)) {
    objectsInfo.push(isRestrictForeignPurchaseObjects);
  }
  if (Boolean(restrictions.isPreferenceRFPurchaseObjects)) {
    objectsInfo.push(isPreferenceRFPurchaseObjects);
  }
  if (Boolean(restrictions.isImpossibilityProhibition)) {
    objectsInfo.push(isImpossibilityProhibition);
  }
  if (restrictions.reasonImpossibilityProhibition) {
    objectsInfo.push(restrictions.reasonImpossibilityProhibition);
  }
  return objectsInfo.join(", ");
};
