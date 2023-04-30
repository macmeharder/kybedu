import { ReactComponent as SectionBorder } from "/public/images/section-border.svg";

import clsx from "clsx";
import { Link } from "atomic-router-react";

import { routes } from "~/shared/routes";

export function SectionItem({
  lesson,
  test,
  id,
}: {
  lesson: boolean;
  test: boolean;
  id: string;
}) {
  return (
    <Link
      to={routes.section}
      params={{ id }}
      className="relative flex h-28 w-28 select-none flex-col"
    >
      <SectionBorder
        className={clsx(lesson ? "text-ce-yellow" : "text-ce-gray-2")}
      />
      <div className="absolute top-1/2 left-1/2 -z-10 flex h-16 w-16 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full border-b-8 border-main-purple-dark bg-main-purple">
        <img src={`/images/sections/${id}.png`} className="mt-1" />
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
