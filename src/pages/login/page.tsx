import { Link } from "atomic-router-react";

import { routes } from "~/shared/routes";
import { Button } from "~/shared/ui/button";
import { HeadNavigation } from "~/shared/ui/head-navigation";
import { Input } from "~/shared/ui/input";
import { Logotype } from "~/shared/ui/logotype";
import { PasswordInput } from "~/shared/ui/password-input";
import { useForm } from "react-hook-form";
import { loginSchema } from "~/shared/schemas";

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm();

  return (
    <div className="flex flex-col justify-between px-4 h-screen-safe">
      <HeadNavigation />
      <div className="flex flex-col items-center gap-14">
        <Logotype />
        <form
          action=""
          className="flex w-full max-w-md flex-col items-center gap-10"
          onSubmit={handleSubmit(function () {})}
          onChange={function () {
            console.log(isValid, errors);
          }}
        >
          <div className="flex w-full flex-col gap-4">
            <Input
              label="E-mail"
              type="email"
              placeholder="Введите вашу почту"
              register={register("email", loginSchema.email)}
            />
            <PasswordInput
              label="Password"
              type="password"
              register={register("password", loginSchema.password)}
            />
            <Link to={routes.login} className="self-end text-main-purple">
              Забыли пароль?
            </Link>
          </div>
          <Button disabled={!isValid}>Войти</Button>
        </form>
      </div>
      <p className="w-full text-center text-sm mb-safe">
        Все еще нет аккаунта?{" "}
        <Link to={routes.register_1} className="text-main-purple">
          Зарегистрируйтесь.
        </Link>
      </p>
    </div>
  );
}
