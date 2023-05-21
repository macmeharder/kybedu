import { Link } from "atomic-router-react";
import { useUnit } from "effector-react";
import { useForm } from "react-hook-form";

import { routes } from "~/shared/routes";
import { loginSchema } from "~/shared/schemas";
import { Button } from "~/shared/ui/button";
import { Input } from "~/shared/ui/input";
import { Logotype } from "~/shared/ui/logotype";
import { PasswordInput } from "~/shared/ui/password-input";

import { handleSubmitLoginEv } from "~/pages/login/model";

export function LoginPage() {
  return (
    <div className="flex h-full flex-col items-center gap-6">
      <Logotype className="mb-8 mt-20" />
      <Form />
    </div>
  );
}

function Form() {
  const [handleSubmitLogin] = useUnit([handleSubmitLoginEv]);
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  return (
    <form
      className="flex w-full max-w-md flex-1 flex-col items-center gap-10"
      onSubmit={handleSubmit(handleSubmitLogin)}
    >
      <div className="flex w-full flex-col gap-4">
        <Input
          label="E-mail"
          type="email"
          placeholder="Введите вашу почту"
          register={register("email", loginSchema.email)}
        />
        <PasswordInput
          label="Пароль"
          type="password"
          placeholder="Введите пароль"
          register={register("password", loginSchema.password)}
        />
        <Link to={routes.forgot_password} className="self-end text-ce-purple">
          Забыли пароль?
        </Link>
      </div>
      <Button disabled={!isValid}>Войти</Button>
      <Bottom />
    </form>
  );
}

function Bottom() {
  return (
    <p className="mt-auto w-full text-center text-sm mb-safe">
      Все еще нет аккаунта?{" "}
      <Link to={routes.register_1} className="text-ce-purple">
        Зарегистрируйтесь.
      </Link>
    </p>
  );
}
