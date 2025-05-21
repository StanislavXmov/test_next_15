import {Document, Packer, PageOrientation} from "docx";
import {saveAs} from "file-saver";

import {create as createItemBlock} from "./block/items/items";
import {create as createBaseBlock} from "./block/base";
import {create as createRequisitesBlock} from "./block/requisites";
import {create as createFinalBlock} from "./block/final";

import {getData} from "./dataProvider";

function generateDocument() {
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
                    ...createRequisitesBlock(data),
                    ...createItemBlock(data),
                    ...createFinalBlock(data),
                ],
            },
        ],
    });
}

export const generateDocx = async () => {
    let document = generateDocument();
    Packer.toBlob(document).then((buffer) => {
        saveAs(buffer, "output.docx");
    });
};
