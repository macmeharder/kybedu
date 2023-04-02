import clsx from "clsx";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, className, ...props }: Props) {
  return (
    <label className="relative flex w-full flex-col gap-1">
      <span className="text-sm font-medium text-main-purple">{label}</span>
      <input
        className={clsx(
          "w-full border-none",
          "bg-background-gray",
          "rounded-lg px-3 py-2.5",
          className
        )}
        type="text"
        {...props}
      />
      <input type="checkbox" className="sr-only" />
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx("text-red-600")}
      >
        <path
          d="M0.833313 9.99999C0.833313 9.99999 4.16665 3.33331 9.99999 3.33331C15.8333 3.33331 19.1667 9.99999 19.1667 9.99999C19.1667 9.99999 15.8333 16.6667 9.99999 16.6667C4.16665 16.6667 0.833313 9.99999 0.833313 9.99999Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </label>
  );
}
