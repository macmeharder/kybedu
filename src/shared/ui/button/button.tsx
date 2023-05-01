import { Link } from "atomic-router-react";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "white";
  size?: "default";
  to?: any;
  params?: any;
  query?: any;
}

export function Button({
  children,
  color = "primary",
  className,
  to,
  ...props
}: Props) {
  const classList = clsx(
    "w-full border-2 border-main-purple text-center",
    "disabled:bg-background-gray disabled:text-blue-gray disabled:border-background-gray",
    "text-lg rounded-lg py-3.5 px-6",
    {
      "bg-main-purple text-white": color === "primary",
      "bg-white text-main-purple": color === "white",
    },
    className
  );
  if (to) {
    return (
      <Link
        to={to}
        params={props.params}
        query={props.query}
        className={clsx(classList, className)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={clsx(classList, className)}>
      {children}
    </button>
  );
}
