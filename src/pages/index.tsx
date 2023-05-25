import { createRoutesView } from "atomic-router-react";
import { useGate, useUnit } from "effector-react";
import { ReactNode } from "react";
import { Helmet } from "react-helmet";

import {
  $token,
  redirectToHomeEv,
  redirectToLoginEv,
} from "~/shared/request/model";
import { routes } from "~/shared/routes";
import { HeadNavigation } from "~/shared/ui/head-navigation";
import { Navigation } from "~/shared/ui/navigation";

import { ChangePasswordPage } from "~/pages/change-password";
import { DeleteAccountPage } from "~/pages/delete-account";
import { DeletedPage } from "~/pages/deleted";
import { ForgotPasswordPage } from "~/pages/forgot-password";
import { HomePage } from "~/pages/home";
import { LoginPage } from "~/pages/login";
import {
  GuestLayoutGate,
  ProfileLayoutGate,
  ViewerLayoutGate,
} from "~/pages/model";
import { ProfilePage } from "~/pages/profile";
import { ProfileSettingsPage } from "~/pages/profile-settings";
import {
  RegisterPageOne,
  RegisterPageThree,
  RegisterPageTwo,
} from "~/pages/register";
import { SectionPage } from "~/pages/section";
import { SectionLessonPage } from "~/pages/section-lesson";
import { SectionTestPage } from "~/pages/section-test";

export function Pages() {
  return (
    <div className="flex h-full flex-col">
      <ProtectedView>
        <ViewerRoutes />
      </ProtectedView>
      <ExposeView>
        <GuestRoutes />
      </ExposeView>
    </div>
  );
}

const GuestRoutes = createRoutesView({
  routes: [
    { route: routes.login, view: LoginPage, layout: GuestLayout },
    { route: routes.register_1, view: RegisterPageOne, layout: GuestLayout },
    { route: routes.register_2, view: RegisterPageTwo, layout: GuestLayout },
    { route: routes.register_3, view: RegisterPageThree, layout: GuestLayout },
    {
      route: routes.forgot_password,
      view: ForgotPasswordPage,
      layout: GuestLayout,
    },
  ],
});

const ViewerRoutes = createRoutesView({
  routes: [
    { route: routes.home, view: HomePage, layout: ViewerLayout },
    { route: routes.section, view: SectionPage, layout: ViewerLayout },
    {
      route: routes.section_lesson,
      view: SectionLessonPage,
      layout: ViewerLayout,
    },
    {
      route: routes.section_test,
      view: SectionTestPage,
      layout: ViewerLayout,
    },

    {
      route: routes.profile,
      view: ProfilePage,
      layout: ProfileWithoutHeadNavigationLayout,
    },
    {
      route: routes.profile_settings,
      view: ProfileSettingsPage,
      layout: ProfileLayout,
    },
    {
      route: routes.change_password,
      view: ChangePasswordPage,
      layout: ProfileLayout,
    },
    {
      route: routes.delete_account,
      view: DeleteAccountPage,
      layout: ProfileLayout,
    },
    {
      route: routes.deleted,
      view: DeletedPage,
    },
  ],
});

function ProtectedView({ children }: { children: JSX.Element }) {
  const token = useUnit($token);

  if (!token) redirectToLoginEv();

  return children;
}

function ExposeView({ children }: { children: JSX.Element }) {
  const token = useUnit($token);

  if (token) redirectToHomeEv();

  return children;
}

function GuestLayout({ children }: { children: ReactNode }) {
  useGate(GuestLayoutGate);

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

function ProfileLayout({ children }: { children: ReactNode }) {
  useGate(ProfileLayoutGate);

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <HeadNavigation />
      <div className="flex h-full flex-col px-4">{children}</div>
      <Navigation />
    </>
  );
}
function ProfileWithoutHeadNavigationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
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
  { path: "/forgot-password", route: routes.forgot_password },

  { path: "/", route: routes.home },
  { path: "/section/:id", route: routes.section },
  { path: "/section/:id/lesson", route: routes.section_lesson },
  { path: "/section/:id/answer", route: routes.section_test },

  { path: "/profile", route: routes.profile },
  { path: "/profile/settings", route: routes.profile_settings },
  { path: "/profile/change-password", route: routes.change_password },
  { path: "/profile/delete", route: routes.delete_account },
  { path: "/profile/deleted", route: routes.deleted },
];
