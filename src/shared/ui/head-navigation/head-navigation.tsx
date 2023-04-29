import { useUnit } from "effector-react";

import { $headNavigation } from "~/shared/ui/head-navigation/model";

export function HeadNavigation() {
  const { show, left, center, right } = useUnit($headNavigation);
  if (!show) return null;
  return (
    <nav className="flex w-full items-center p-4 mt-safe">
      <div className="flex flex-1 justify-start">{left}</div>
      <div className="flex flex-[2] justify-center">{center}</div>
      <div className="flex flex-1 justify-end">{right}</div>
    </nav>
  );
}
