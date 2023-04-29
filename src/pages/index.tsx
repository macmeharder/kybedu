import { createRoutesView } from "atomic-router-react";
import { useGate } from "effector-react";
import { ReactNode } from "react";
import { Helmet } from "react-helmet";

import { routes } from "~/shared/routes";
import { HeadNavigation } from "~/shared/ui/head-navigation";
import { Navigation } from "~/shared/ui/navigation";

import { HomePage } from "~/pages/home";
import { LoginPage } from "~/pages/login";
import { ViewerLayoutGate } from "~/pages/model";
import {
  RegisterPageOne,
  RegisterPageThree,
  RegisterPageTwo,
} from "~/pages/register";

export function Pages() {
  return (
    <div className="flex h-full flex-col">
      <RoutesView />
    </div>
  );
}

const RoutesView = createRoutesView({
  routes: [
    { route: routes.home, view: HomePage, layout: ViewerLayout },

    { route: routes.login, view: LoginPage, layout: GuestLayout },
    { route: routes.register_1, view: RegisterPageOne, layout: GuestLayout },
    { route: routes.register_2, view: RegisterPageTwo, layout: GuestLayout },
    { route: routes.register_3, view: RegisterPageThree, layout: GuestLayout },
  ],
});

function GuestLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <HeadNavigation />
      <div className="flex h-full flex-col px-4">{children}</div>
    </>
  );
}
function ViewerLayout({ children }: { children: ReactNode }) {
  useGate(ViewerLayoutGate);
  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#7879f1" />
      </Helmet>
      <HeadNavigation />
      <div className="flex h-full flex-col px-4">{children}</div>
      <Navigation />
    </>
  );
}

export const routesMap = [
  { path: "/login", route: routes.login },
  { path: "/register-1", route: routes.register_1 },
  { path: "/register-2", route: routes.register_2 },
  { path: "/register-3", route: routes.register_3 },

  { path: "/home", route: routes.home },
];
