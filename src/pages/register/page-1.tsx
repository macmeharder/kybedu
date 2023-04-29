import { Link } from "atomic-router-react";

import { routes } from "~/shared/routes";
import { Button } from "~/shared/ui/button";
import { HeadNavigation } from "~/shared/ui/head-navigation";
import { Input } from "~/shared/ui/input";
import { Logotype } from "~/shared/ui/logotype";
import { useForm } from "react-hook-form";
import { registerSchema } from "~/shared/schemas/shemas";
import { useUnit } from "effector-react";
import { successFirstRegistrationEv } from "~/pages/register/model";

export function RegisterPageOne() {
  const [successFirstRegistration] = useUnit([successFirstRegistrationEv]);
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  function onSubmit() {
    successFirstRegistration();
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
