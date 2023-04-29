import { Link } from "atomic-router-react";

import { routes } from "~/shared/routes";
import { Button } from "~/shared/ui/button";
import { HeadNavigation } from "~/shared/ui/head-navigation";
import { Logotype } from "~/shared/ui/logotype";
import { useForm } from "react-hook-form";
import { VerificationCode } from "~/shared/ui/verification-code";

export function RegisterPageThree() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  return (
    <div className="flex flex-col items-center justify-between px-4 h-screen-safe">
      <HeadNavigation />
      <div className="flex w-full flex-col items-center gap-14">
        <Logotype />
        <div className="flex flex-col items-center gap-7">
          <div className="flex flex-col gap-4">
            <p className="text-center text-sm">
              Мы отправили код на номер{" "}
              <span className="whitespace-nowrap text-main-purple">
                +7 701 123 1234
              </span>
              <br />
              Введите код для активации аккаунта.
            </p>
          </div>
          <VerificationCode length={4} />
        </div>
      </div>
      <div className="flex w-full max-w-md flex-col items-center gap-6">
        <Button form="register-form" disabled={!isValid}>
          Далее
        </Button>
        <p className="w-full text-center text-sm mb-safe">
          Не получили sms?{" "}
          <Link to={routes.login} className="text-main-purple">
            Отправить код повторно
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
