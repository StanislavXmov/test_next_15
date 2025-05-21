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
      children: [],
      spacing: { after: 200 },
    }),
  ];
}
