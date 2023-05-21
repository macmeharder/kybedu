import { Link } from "atomic-router-react";
import { useUnit } from "effector-react";
import { useForm } from "react-hook-form";

import { routes } from "~/shared/routes";
import { registerSchema } from "~/shared/schemas";
import { Button } from "~/shared/ui/button";
import { Input } from "~/shared/ui/input";
import { Logotype } from "~/shared/ui/logotype";

import {
  $registerForm,
  handleSubmitFirstRegistrationEv,
} from "~/pages/register/model";

export function RegisterPageOne() {
  return (
    <div className="flex h-full flex-col items-center gap-6">
      <Logotype className="mb-8 mt-20" />
      <Form />
    </div>
  );
}

function Form() {
  const [handleSubmitFirstRegistration, registerForm] = useUnit([
    handleSubmitFirstRegistrationEv,
    $registerForm,
  ]);

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  return (
    <form
      id="register-form"
      className="flex w-full max-w-md flex-1 flex-col items-center gap-4"
      onSubmit={handleSubmit(handleSubmitFirstRegistration)}
    >
      <div className="flex w-full flex-col gap-4">
        <Input
          label="Имя"
          type="text"
          placeholder="Введите ваше имя"
          defaultValue={registerForm?.first_name}
          register={register("first_name", registerSchema.firstname)}
        />
        <Input
          label="Фамилия"
          type="text"
          placeholder="Введите вашу фамилию"
          defaultValue={registerForm?.last_name}
          register={register("last_name", registerSchema.lastname)}
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
      <Link to={routes.login} className="text-ce-purple">
        Войдите.
      </Link>
    </p>
  );
}
