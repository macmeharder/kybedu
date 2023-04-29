import { redirect } from "atomic-router";
import { createEvent, sample } from "effector";

import { routes } from "~/shared/routes";
import {
  changeHeadNavigationEv,
  initialHeadNavigation,
} from "~/shared/ui/head-navigation/model";

export const successLoginEv = createEvent();

redirect({
  clock: successLoginEv,
  route: routes.home,
});

sample({
  clock: routes.login.opened,
  fn: function () {
    return initialHeadNavigation;
  },
  target: changeHeadNavigationEv,
});
