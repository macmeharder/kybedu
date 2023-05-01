import { useUnit } from "effector-react";
import { useForm } from "react-hook-form";

import { Button } from "~/shared/ui/button";
import { Input } from "~/shared/ui/input";

import {
  $forgotPasswordSubmitted,
  handleSubmitForgotPasswordEv,
} from "~/pages/forgot-password/model";

export function ForgotPasswordPage() {
  const [submitted, handleSubmitForgotPassword] = useUnit([
    $forgotPasswordSubmitted,
    handleSubmitForgotPasswordEv,
  ]);
  const { register, handleSubmit } = useForm();
  return (
    <div className="flex h-full flex-col gap-10 pt-safe">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handleSubmitForgotPassword)}
      >
        <Input label="E-mail" type="email" register={register("email")} />
        <Button>Восстановить пароль</Button>
      </form>
      {submitted && (
        <p className="rounded-2xl bg-green-200 p-4 text-sm text-green-500">
          На почту <span className="text-ce-purple">name@mail.com</span> была
          выслана инструкция по изменению пароля. Пожалуйста, проверьте свою
          почту
        </p>
      )}
    </div>
  );
}
