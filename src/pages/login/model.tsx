import { createEvent, sample } from "effector";

import { loginMutation } from "~/api/auth/login";

import { setTokenEv } from "~/shared/request/model";
import { routes } from "~/shared/routes";
import {
  changeHeadNavigationEv,
  initialHeadNavigation,
} from "~/shared/ui/head-navigation/model";

export const handleSubmitLoginEv = createEvent<any>();

sample({
  clock: handleSubmitLoginEv,
  target: loginMutation.start,
});

sample({
  clock: loginMutation.finished.success,
  fn: function ({ result }: { result: { token: string } }) {
    return result.token;
  },
  target: [routes.home.open, setTokenEv],
});

sample({
  clock: routes.login.opened,
  fn: function () {
    return initialHeadNavigation;
  },
  target: changeHeadNavigationEv,
});
