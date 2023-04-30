import clsx from "clsx";
import { useUnit } from "effector-react";

import { $headNavigation } from "~/shared/ui/head-navigation/model";

export function HeadNavigation() {
  const { left, center, right, layout } = useUnit($headNavigation);
  return (
    <nav
      className={clsx(
        "flex h-[72px] w-full items-center justify-between px-4 pt-safe",
        { "bg-main-purple text-white": layout === "viewer" },
        { "text-gray-3 bg-white": layout !== "viewer" }
      )}
    >
      {left}
      {center}
      {right}
    </nav>
  );
}
