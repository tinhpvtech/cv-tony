"use client";

import { useEffect, useRef, useState } from "react";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [message, setMessage] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  function show(text: string) {
    setMessage(text);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMessage(""), 1800);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      show("Email copied");
    } catch {
      show("Copy failed — select the address instead");
    }
  }

  return (
    <>
      <button className="copy" type="button" onClick={copy} aria-label={label}>Copy</button>
      <div className={message ? "toast show" : "toast"} role="status" aria-live="polite">{message}</div>
    </>
  );
}
