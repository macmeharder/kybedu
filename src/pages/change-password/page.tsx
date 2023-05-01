import { useForm } from "react-hook-form";

import { Input } from "~/shared/ui/input";

export function ChangePasswordPage() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="flex h-full flex-col gap-10 pt-safe">
      <form
        className="flex flex-col gap-4"
        id="change-password"
        onSubmit={handleSubmit(function (data, event) {
          console.log(data);
        })}
      >
        <Input
          label="Текущий пароль"
          type="password"
          register={register("current-password")}
        />
        <Input
          label="Новый пароль"
          type="password"
          register={register("new-password")}
        />
        <Input
          label="Подтвердите новый пароль"
          type="password"
          register={register("new-password-repeat")}
        />
      </form>
    </div>
  );
}
