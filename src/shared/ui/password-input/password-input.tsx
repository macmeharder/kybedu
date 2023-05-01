import clsx from "clsx";
import { useUnit } from "effector-react";
import { InputHTMLAttributes } from "react";

import {
  $passwordType,
  changePasswordTypeEv,
} from "~/shared/ui/password-input/model";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: any;
}

export function PasswordInput({
  label,
  className,
  type,
  register,
  ...props
}: Props) {
  const [passwordType, changePasswordType] = useUnit([
    $passwordType,
    changePasswordTypeEv,
  ]);

  return (
    <label className="flex w-full flex-col gap-1">
      <span className="text-sm font-medium text-ce-purple">{label}</span>
      <div className="relative">
        <input
          className={clsx(
            "peer w-full border-none",
            "bg-ce-gray",
            "rounded-lg py-2.5 pl-3 pr-10",
            className
          )}
          type={passwordType}
          {...props}
          {...register}
        />
        <label className="absolute top-1/2 right-3 -translate-y-1/2">
          <input
            type="checkbox"
            className="peer sr-only"
            onChange={changePasswordType}
          />
          <img
            src="/images/eye.svg"
            className="peer-checked:hidden"
            alt="show password"
          />
          <img
            src="/images/eye-off.svg"
            className="hidden peer-checked:block"
            alt="hide password"
          />
        </label>
      </div>
    </label>
  );
}
