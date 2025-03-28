"use client";

import { createContext, RefObject, use, useRef } from "react";

type WysiwygMethods = {
  getHTML: () => string;
  setHTML: (html: string) => void;
};

export const WysiwygContext = createContext<RefObject<WysiwygMethods> | null>(
  null
);

export function WysiwygProvider({ children }: { children: React.ReactNode }) {
  return (
    <WysiwygContext.Provider
      value={useRef<WysiwygMethods>({
        getHTML: () => "",
        setHTML: () => {},
      })}
    >
      {children}
    </WysiwygContext.Provider>
  );
}

export function useWysiwyg() {
  const methodsRef = use(WysiwygContext);
  if (!methodsRef) {
    throw new Error("useWysiwyg must be used within a WysiwygProvider");
  }
  return {
    setHTML: (html: string) => methodsRef.current.setHTML(html),
    getHTML: () => methodsRef.current.getHTML(),
  };
}
