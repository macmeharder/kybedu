import clsx from "clsx";

import { goBackEv } from "~/shared/routes/routes";

import { ReactComponent as ArrowLeft } from "/public/images/arrow-left.svg";

export function BackButton({ className }: { className: string }) {
  return (
    <button
      className={clsx("flex items-center justify-start", className)}
      onClick={goBackEv as any}
    >
      <ArrowLeft />
      Назад
    </button>
  );
}
