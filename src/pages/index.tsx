import { Route } from "atomic-router-react";

import { routes } from "~/shared/routes";

import { LoginPage } from "~/pages/login";
import {RegisterPage} from "~/pages/register";

export function Pages() {
  return (
    <>
      <Route route={routes.login} view={LoginPage} />
      <Route route={routes.register} view={RegisterPage} />
    </>
  );
}

export const routesMap = [{ path: "/login", route: routes.login },{ path: "/register", route: routes.register }];
