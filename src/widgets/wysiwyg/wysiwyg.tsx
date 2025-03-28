"use client";

import { use, useCallback, useImperativeHandle, useRef } from "react";
// import styles from "./example.module.css";
import { WysiwygContext } from "./context";

type Command = "bold" | "italic" | "underline" | "strikethrough";

export function Wysiwyg({
  initialContent,
  onChange,
}: {
  initialContent: string;
  onChange: (content: string) => void;
}) {
  const methodsRef = use(WysiwygContext);

  const editorRef = useRef<HTMLDivElement>(null);

  const execCommand = (command: Command) => {
    // document.execCommand(command, false);
    console.log(command);

    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  // const isCommandActive = (command: Command): boolean => {
  //   return document.queryCommandState(command);
  // };

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const ref = useCallback((el: HTMLDivElement | null) => {
    if (el) {
      el.innerHTML = initialContent;
    }
    editorRef.current = el;
  }, []);

  useImperativeHandle(
    methodsRef,
    () => ({
      getHTML: () => editorRef.current?.innerHTML || "",
      setHTML: (html: string) => {
        if (editorRef.current) {
          editorRef.current.innerHTML = html;
          onChange(html);
        }
      },
    }),
    []
  );

  return (
    <div className="border border-gray-500 rounded-md overflow-hidden">
      <div className="flex gap-0.5 p-0.5 bg-gray-100 border-b border-b-gray-500">
        <button
          type="button"
          className="inline-flex items-center justify-center p-1 text-gray-600 border border-transparent rounded-xs cursor-pointer transition-all ease-in duration-200 hover:text-gray-200 hover:bg-gray-500"
          onClick={() => execCommand("bold")}
          title="Bold"
        >
          B
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center p-1 text-gray-600 border border-transparent rounded-xs cursor-pointer transition-all ease-in duration-200 hover:text-gray-200 hover:bg-gray-500"
          onClick={() => execCommand("italic")}
          title="Italic"
        >
          I
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center p-1 text-gray-600 border border-transparent rounded-xs cursor-pointer transition-all ease-in duration-200 hover:text-gray-200 hover:bg-gray-500"
          onClick={() => execCommand("underline")}
          title="Underline"
        >
          U
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center p-1 text-gray-600 border border-transparent rounded-xs cursor-pointer transition-all ease-in duration-200 hover:text-gray-200 hover:bg-gray-500"
          onClick={() => execCommand("strikethrough")}
          title="Strikethrough"
        >
          S
        </button>
      </div>
      <div
        ref={ref}
        className="p-1 min-h-52 text-gray-600"
        contentEditable
        onInput={handleInput}
        suppressContentEditableWarning
      />
    </div>
  );
}
