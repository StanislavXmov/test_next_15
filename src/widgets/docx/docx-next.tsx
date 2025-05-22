"use client";

import { generateDocx } from "./document/service";

export const DocxNext = () => {
  return (
    <div className="flex flex-col gap-4 items-start">
      <h1>Заполнение контракта</h1>
      <button onClick={() => generateDocx("product")}>
        Generate product DOCX
      </button>
      <button onClick={() => generateDocx("serviceOrWork")}>
        Generate serviceOrWork DOCX
      </button>
    </div>
  );
};
