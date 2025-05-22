import { Document, Packer, PageOrientation } from "docx";
import { saveAs } from "file-saver";

import { create as createItemBlock } from "./block/items/items";
import { create as createBaseBlock } from "./block/base";
import { create as createRequisitesBlock } from "./block/requisites";
import { create as createFinalBlock } from "./block/final";
import { create as createPurchaseBlock } from "./block/purchase";

import { getData } from "./dataProvider";

function generateDocument(itemsType: "product" | "serviceOrWork" | "medicine") {
  const data = getData();
  return new Document({
    sections: [
      {
        properties: {
          page: {
            size: {
              orientation: PageOrientation.LANDSCAPE,
            },
          },
        },
        children: [
          ...createBaseBlock(data),
          ...createPurchaseBlock(data),
          ...createRequisitesBlock(data),
          ...createItemBlock({ ...data, itemsType }),
          ...createFinalBlock(data),
        ],
      },
    ],
  });
}

export const generateDocx = async (
  itemsType: "product" | "serviceOrWork" | "medicine"
) => {
  let document = generateDocument(itemsType);
  Packer.toBlob(document).then((buffer) => {
    saveAs(buffer, "output.docx");
  });
};
