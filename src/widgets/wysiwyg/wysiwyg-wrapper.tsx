"use client";

import { useState } from "react";
import { useWysiwyg } from "./context";
import { Wysiwyg } from "./wysiwyg";

export function WysiwygWrapper() {
  const [content, setContent] = useState(
    `<div>Some text</div><div><strong>Some bold text</strong></div>`
  );
  const wysiwyg = useWysiwyg();
  return (
    <div style={{ maxWidth: "640px", margin: "2rem auto" }}>
      <Wysiwyg initialContent={content} onChange={setContent} />
      <button onClick={() => wysiwyg.setHTML("")}>Rest</button>
      <button onClick={() => wysiwyg.setHTML("hello")}>Set hello</button>
      <div style={{ marginTop: "1rem" }}>
        <h3>HTML Output:</h3>
        <pre
          style={{
            padding: "1rem",
            backgroundColor: "#f3f4f6",
            borderRadius: "0.375rem",
            fontSize: "0.875rem",
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
          }}
        >
          {content}
        </pre>
      </div>
    </div>
  );
}
