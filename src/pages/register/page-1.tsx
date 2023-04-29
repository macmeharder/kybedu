import { Link } from "atomic-router-react";
import { useUnit } from "effector-react";
import { useForm } from "react-hook-form";

import { routes } from "~/shared/routes";
import { registerSchema } from "~/shared/schemas/shemas";
import { Button } from "~/shared/ui/button";
import { Input } from "~/shared/ui/input";
import { Logotype } from "~/shared/ui/logotype";

import { successFirstRegistrationEv } from "~/pages/register/model";

export function RegisterPageOne() {
  return (
    <div className="flex h-full flex-col items-center gap-6">
      <Logotype className="mb-8 mt-20" />
      <Form />
    </div>
  );
}

function Form() {
  const [successFirstRegistration] = useUnit([successFirstRegistrationEv]);

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  return (
    <form
      id="register-form"
      className="flex w-full max-w-md flex-1 flex-col items-center gap-4"
      onSubmit={handleSubmit(successFirstRegistration)}
    >
      <div className="flex w-full flex-col gap-4">
        <Input
          label="Имя"
          type="text"
          placeholder="Введите ваше имя"
          register={register("firstname", registerSchema.firstname)}
        />
        <Input
          label="Фамилия"
          type="text"
          placeholder="Введите вашу фамилию"
          register={register("lastname", registerSchema.lastname)}
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
