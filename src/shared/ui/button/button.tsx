import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary";
  size?: "default";
}

export function Button({ children, className, ...props }: Props) {
  const classList = clsx(
    "w-full ",
    "bg-main-purple text-white",
    "disabled:bg-background-gray disabled:text-blue-gray",
    "text-lg rounded-lg py-3.5 px-6"
  );
  return (
    <button {...props} className={clsx(classList, className)}>
      {children}
    </button>
  );
}
