"use client";

import { LineIcon } from "./Icon";

export function DownloadPdfButton({ fileName }: { fileName: string }) {
  function download() {
    const root = document.documentElement;
    const prevTitle = document.title;
    const prevTheme = root.dataset.theme;
    // The browser uses the page title as the default PDF file name; always print in light theme.
    document.title = fileName;
    root.dataset.theme = "light";
    window.addEventListener("afterprint", () => {
      document.title = prevTitle;
      if (prevTheme === undefined) delete root.dataset.theme;
      else root.dataset.theme = prevTheme;
    }, { once: true });
    window.print();
  }

  return (
    <button className="pdf-btn" type="button" onClick={download} aria-label="Download CV as PDF">
      <LineIcon name="download" />
      <span>Download PDF</span>
    </button>
  );
}
