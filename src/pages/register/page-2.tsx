import { Link } from "atomic-router-react";
import { useUnit } from "effector-react";
import { useForm } from "react-hook-form";

import { routes } from "~/shared/routes";
import { registerSchema } from "~/shared/schemas/shemas";
import { Button } from "~/shared/ui/button";
import { Input } from "~/shared/ui/input";
import { Logotype } from "~/shared/ui/logotype";
import { PasswordInput } from "~/shared/ui/password-input";

import { successSecondRegistrationEv } from "~/pages/register/model";

export function RegisterPageTwo() {
  return (
    <div className="flex h-full flex-col items-center gap-6">
      <Logotype className="mb-8 mt-20" />
      <Form />
    </div>
  );
}

function Form() {
  const [successSecondRegistration] = useUnit([successSecondRegistrationEv]);

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  return (
    <form
      id="register-form"
      className="flex w-full max-w-md flex-1 flex-col items-center gap-4"
      onSubmit={handleSubmit(successSecondRegistration)}
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
      <Button className="mt-auto" disabled={!isValid}>
        Далее
      </Button>
      <Bottom />
    </form>
  );
}

function Bottom() {
  return (
    <p className="w-full text-center text-sm mb-safe">
      Уже есть аккаунт?{" "}
      <Link to={routes.login} className="text-main-purple">
        Войдите.
      </Link>
    </p>
  );
}
