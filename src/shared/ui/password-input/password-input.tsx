import clsx from "clsx";
import { InputHTMLAttributes } from "react";
import { useUnit } from "effector-react";
import {
  $passwordType,
  changePasswordTypeEv,
} from "~/shared/ui/password-input/model";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function PasswordInput({ label, className, type, ...props }: Props) {
  const [passwordType, changePasswordType] = useUnit([
    $passwordType,
    changePasswordTypeEv,
  ]);

  return (
    <label className="flex w-full flex-col gap-1">
      <span className="text-sm font-medium text-main-purple">{label}</span>
      <div className="relative">
        <input
          className={clsx(
            "peer w-full border-none",
            "bg-background-gray",
            "rounded-lg py-2.5 pl-3 pr-10",
            className
          )}
          type={passwordType}
          {...props}
        />
        <label className="absolute top-1/2 right-3 -translate-y-1/2">
          <input
            type="checkbox"
            className="peer sr-only"
            onChange={changePasswordType}
          />
          <img
            src="/icons/eye.svg"
            className="peer-checked:hidden"
            alt="show password"
          />
          <img
            src="/icons/eye-off.svg"
            className="hidden peer-checked:block"
            alt="hide password"
          />
        </label>
      </div>
    </label>
  );
}
