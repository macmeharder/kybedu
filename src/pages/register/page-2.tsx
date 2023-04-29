import { Link } from "atomic-router-react";

import { routes } from "~/shared/routes";
import { Button } from "~/shared/ui/button";
import { HeadNavigation } from "~/shared/ui/head-navigation";
import { Input } from "~/shared/ui/input";
import { Logotype } from "~/shared/ui/logotype";
import { useForm } from "react-hook-form";
import { registerSchema } from "~/shared/schemas/shemas";
import { PasswordInput } from "~/shared/ui/password-input";
import { useUnit } from "effector-react";
import { successSecondRegistrationEv } from "~/pages/register/model";

export function RegisterPageTwo() {
  const [successSecondRegistration] = useUnit([successSecondRegistrationEv]);

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  function onSubmit() {
    successSecondRegistration();
  }

  return (
    <div className="flex flex-col items-center justify-between px-4 h-screen-safe">
      <HeadNavigation />
      <div className="flex w-full flex-col items-center gap-14">
        <Logotype />
        <form
          id="register-form"
          className="flex w-full max-w-md flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex w-full flex-col gap-4">
            <Input
              label="E-mail"
              type="email"
              placeholder="Введите вашу почту"
              register={register("email", registerSchema.email)}
            />
            <PasswordInput
              label="Пароль"
              register={register("password", registerSchema.password)}
            />
          </div>
        </form>
      </div>
      <div className="flex w-full max-w-md flex-col items-center gap-6">
        <Button form="register-form" disabled={!isValid}>
          Далее
        </Button>
        <p className="w-full text-center text-sm mb-safe">
          Уже есть аккаунт?{" "}
          <Link to={routes.login} className="text-main-purple">
            Войдите.
          </Link>
        </p>
      </div>
    </div>
  );
}
