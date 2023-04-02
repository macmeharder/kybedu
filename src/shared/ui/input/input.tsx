import clsx from "clsx";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: any;
}

export function Input({ label, className, register, ...props }: Props) {
  return (
    <label className="flex w-full flex-col gap-1">
      <span className="text-sm font-medium text-main-purple">{label}</span>
      <input
        className={clsx(
          "w-full border-none",
          "bg-background-gray",
          "rounded-lg px-3 py-2.5",
          className
        )}
        {...props}
        {...register}
      />
    </label>
  );
}
