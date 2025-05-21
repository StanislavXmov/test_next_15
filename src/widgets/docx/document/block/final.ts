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
            children: [],
            spacing: {after: 200},
        }),
    ]
}