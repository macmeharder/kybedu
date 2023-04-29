import { ReactComponent as SectionBorder } from "/public/images/section-border.svg";

import clsx from "clsx";
import { Link } from "atomic-router-react";

export function SectionItem({
  lesson,
  test,
  imgSrc,
  to,
}: {
  lesson: boolean;
  test: boolean;
  imgSrc: string;
  to: any;
}) {
  return (
    <Link to={to} className="relative flex h-28 w-28 select-none flex-col">
      <SectionBorder
        className={clsx(lesson ? "text-ce-yellow" : "text-ce-gray-2")}
      />
      <div className="absolute top-1/2 left-1/2 -z-10 flex h-16 w-16 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full border-b-8 border-main-purple-dark bg-main-purple">
        <img src={imgSrc} className="mt-1" />
      </div>
      <SectionBorder
        className={clsx(
          "rotate-180 transform",
          test ? "text-ce-yellow" : "text-ce-gray-2"
        )}
      />
    </Link>
  );
}
