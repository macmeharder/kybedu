import { Route } from "atomic-router-react";

import { routes } from "~/shared/routes";
import { HeadNavigation } from "~/shared/ui/head-navigation";

import { LoginPage } from "~/pages/login";
import {
  RegisterPageOne,
  RegisterPageThree,
  RegisterPageTwo,
} from "~/pages/register";

export function Pages() {
  return (
    <div className="flex h-full flex-col">
      <HeadNavigation />
      <div className="flex h-full flex-col px-4">
        <Route route={routes.login} view={LoginPage} />
        <Route route={routes.register_1} view={RegisterPageOne} />
        <Route route={routes.register_2} view={RegisterPageTwo} />
        <Route route={routes.register_3} view={RegisterPageThree} />
      </div>
    </div>
  );
}

export const routesMap = [
  { path: "/login", route: routes.login },
  { path: "/register-1", route: routes.register_1 },
  { path: "/register-2", route: routes.register_2 },
  { path: "/register-3", route: routes.register_3 },
];
