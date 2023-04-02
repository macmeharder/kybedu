import { Route } from "atomic-router-react";

import { routes } from "~/shared/routes";

import { LoginPage } from "~/pages/login";

export function Pages() {
  return (
    <>
      <Route route={routes.login} view={LoginPage} />
    </>
  );
}

export const routesMap = [{ path: "/login", route: routes.login }];
