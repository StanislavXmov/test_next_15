"use client";

import React, { useState } from "react";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import { saveAs } from "file-saver";

interface ContractData {
  name: string;
  props: {
    tel: string;
    email: string;
    inn: string;
  };
}

export const Docx: React.FC = () => {
  const [formData, setFormData] = useState<ContractData>({
    name: "",
    props: {
      tel: "",
      email: "",
      inn: "",
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateDocx = async () => {
    // Загрузка шаблона
    const response = await fetch("./template.docx");
    const arrayBuffer = await response.arrayBuffer();

    // Обработка шаблона
    const zip = new PizZip(arrayBuffer);
    // const doc = new Docxtemplater().loadZip(zip);
    const doc = new Docxtemplater(zip, {
      linebreaks: true,
      paragraphLoop: true,
    });

    // doc.setData(formData);
    // doc.render();
    doc.render(formData);

    // Генерация файла
    const blob = doc
      .getZip()
      .generate({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
    saveAs(blob, "output.docx");
  };

  return (
    <div className="flex flex-col gap-4">
      <h1>Заполнение контракта</h1>
      <input name="name" placeholder="Name" onChange={handleInputChange} />
      <input name="tel" placeholder="Tel" onChange={handleInputChange} />
      <input name="email" placeholder="Email" onChange={handleInputChange} />
      <input name="inn" placeholder="Inn" onChange={handleInputChange} />

      <button onClick={generateDocx}>Generate DOCX</button>
    </div>
  );
};
