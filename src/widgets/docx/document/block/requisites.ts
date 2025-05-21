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

// Function to create a paragraph with a numbered item
function createNumberedParagraph(number, label, value) {
    return new Paragraph({
        children: [
            new TextRun({
                text: `${label}: ${value}`,
                font: "Times New Roman",
                size: 24, // 12pt font
                margins: {top: 100, bottom: 100, left: 100, right: 100},
            })
        ]
    });
}

// Function to create the content for a section (customer or supplier)
function createSectionContent(data, title) {
    return [
        new Paragraph({
            children: [
                new TextRun({
                    text: title,
                    bold: true,
                    font: "Times New Roman",
                    size: 28, // 14pt font
                    margins: {top: 100, bottom: 100, left: 100, right: 100},
                })
            ],
            spacing: {after: 200}
        }),
        createNumberedParagraph("", "Полное наименование", data.commonInfo.fullName),
        createNumberedParagraph("", "Адрес места нахождения", data.commonInfo.factualAddress),
        createNumberedParagraph("", "Почтовый адрес", data.commonInfo.postalAddress),
        createNumberedParagraph("", "Телефон", data.commonInfo.phone),
        createNumberedParagraph("", "Факс", data.commonInfo.fax),
        createNumberedParagraph("", "Email", data.commonInfo.email),
        createNumberedParagraph("", "ИНН/аналог ИНН", data.commonInfo.inn),
        createNumberedParagraph("", "ОГРН", data.commonInfo.ogrn),
        createNumberedParagraph("", "КПП", data.commonInfo.kpp),
        createNumberedParagraph("", "Банковские реквизиты", ""),
        createNumberedParagraph("", "Расчетный счет", data.bankRequisites.correspondentAccount),
        createNumberedParagraph("", "Наименование банка", data.bankRequisites.bankName),
        createNumberedParagraph("", "Лицевой счет", data.bankRequisites.paymentAccount),
        createNumberedParagraph("", "Адрес банка", data.bankRequisites.bik),
        createNumberedParagraph("", "Корреспондентский счет", data.bankRequisites.personalAccount),
        createNumberedParagraph("", "БИК", data.bankRequisites.bik)
    ];
}

export function create(data) {
    return [
        new Table({
            width: {size: 100, type: WidthType.PERCENTAGE},
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            width: {size: 50, type: WidthType.PERCENTAGE},
                            children: createSectionContent(data.customer, "РЕКВИЗИТЫ ЗАКАЗЧИКА"),
                            verticalAlign: "top"
                        }),
                        new TableCell({
                            width: {size: 50, type: WidthType.PERCENTAGE},
                            children: createSectionContent(data.supplier, "РЕКВИЗИТЫ ПОСТАВЩИКА"),
                            verticalAlign: "top"
                        })
                    ],
                })
            ],
        }),
        new Paragraph({
            children: [],
            spacing: {after: 200},
        }),
    ]
}