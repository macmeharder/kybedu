import clsx from "clsx";
import { useUnit } from "effector-react";

import { $headNavigation } from "~/shared/ui/head-navigation/model";

export function HeadNavigation() {
  const { left, center, right, className } = useUnit($headNavigation);
  return (
    <nav
      className={clsx(
        "flex h-[72px] w-full items-center justify-between p-4 mt-safe",
        className
      )}
    >
      {left}
      {center}
      {right}
    </nav>
  );
}
