"use client";

import {generateDocx} from "./document/service";

export const DocxNext = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1>Заполнение контракта</h1>
            <button onClick={generateDocx}>Generate DOCX</button>
        </div>
    );
};
