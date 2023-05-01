import clsx from "clsx";
import { useUnit } from "effector-react";

import {
  $headNavigation,
  HEAD_NAVIGATION_COLOR,
} from "~/shared/ui/head-navigation/model";

export function HeadNavigation() {
  const { left, center, right, color } = useUnit($headNavigation);

  return (
    <nav
      className={clsx(
        "flex h-[72px] w-full items-center justify-between px-4 pt-safe",
        { "bg-ce-purple text-white": color === HEAD_NAVIGATION_COLOR.PURPLE },
        { "text-gray-3 bg-white": color === HEAD_NAVIGATION_COLOR.WHITE }
      )}
    >
      {left}
      {center}
      {right}
    </nav>
  );
}
