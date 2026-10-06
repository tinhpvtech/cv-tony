import { createElement } from "react";
import { lineIcons, solidIcons, type LineIconName, type SolidIconName } from "./icon-data";

/** Filled icon (Font Awesome). */
export function SolidIcon({ name }: { name: SolidIconName }) {
  const icon = solidIcons[name];
  return (
    <svg viewBox={icon.viewBox} fill="currentColor" aria-hidden="true" focusable="false">
      {icon.paths.map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}

/** Outline icon (Lucide). */
export function LineIcon({ name }: { name: LineIconName }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {lineIcons[name].map((el, i) => createElement(el.tag, { key: i, ...el.attrs }))}
    </svg>
  );
}
