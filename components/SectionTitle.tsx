import { SolidIcon } from "./Icon";
import type { SolidIconName } from "./icon-data";

export function SectionTitle({ id, icon, children, compact = false }: { id: string; icon: SolidIconName; children: React.ReactNode; compact?: boolean }) {
  return (
    <h2 className={compact ? "sec-title sm" : "sec-title"} id={id}>
      <span className="badge"><SolidIcon name={icon} /></span>
      <span>{children}</span>
    </h2>
  );
}
