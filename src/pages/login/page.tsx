import { Link } from "atomic-router-react";

import { routes } from "~/shared/routes";
import { Button } from "~/shared/ui/button";
import { HeadNavigation } from "~/shared/ui/head-navigation";
import { Input } from "~/shared/ui/input";
import { Logotype } from "~/shared/ui/logotype";

export function LoginPage() {
  return (
    <div className="mi flex flex-col justify-between px-4 h-screen-safe">
      <HeadNavigation />
      <div className="flex flex-col items-center gap-14">
        <Logotype />
        <form action="" className="flex w-full flex-col">
          <div className="flex flex-col gap-4">
            <Input label="Phone number" type="tel" />
            <Input label="Password" type="password" />
          </div>
          <Link to={routes.login} className="mt-3 self-end text-main-purple">
            Забыли пароль?
          </Link>
          <Button className="mt-10">Войти</Button>
        </form>
      </div>
      <p className="w-full text-center mb-safe">
        Все еще нет аккаунта?{" "}
        <Link to={routes.login} className="text-main-purple">
          Зарегистрируйтесь.
        </Link>
      </p>
    </div>
  );
}
