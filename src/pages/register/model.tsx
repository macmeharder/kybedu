import { redirect } from "atomic-router";
import { createEvent, sample } from "effector";

import { routes } from "~/shared/routes";
import { goBackEv } from "~/shared/routes/routes";
import {
  changeHeadNavigationEv,
  initialHeadNavigation,
} from "~/shared/ui/head-navigation/model";

//======================================================================================================================
sample({
  clock: routes.register_1.opened,
  fn: function () {
    return initialHeadNavigation;
  },
  target: changeHeadNavigationEv,
});

export const successFirstRegistrationEv = createEvent();

redirect({
  clock: successFirstRegistrationEv,
  route: routes.register_2,
});

//======================================================================================================================
sample({
  clock: routes.register_2.opened,
  fn: function () {
    return {
      left: (
        <button className="text-main-purple" onClick={goBackEv as any}>
          Назад
        </button>
      ),
      center: <></>,
      right: <></>,
    };
  },
  target: changeHeadNavigationEv,
});

export const successSecondRegistrationEv = createEvent();

redirect({
  clock: successSecondRegistrationEv,
  route: routes.register_3,
});

//======================================================================================================================
sample({
  clock: routes.register_3.opened,
  fn: function () {
    return {
      left: (
        <button className="text-main-purple" onClick={goBackEv as any}>
          Назад
        </button>
      ),
      center: <></>,
      right: <></>,
      className: "bg-none",
    };
  },
  target: changeHeadNavigationEv,
});

export const successThirdRegistrationEv = createEvent();

redirect({
  clock: successThirdRegistrationEv,
  route: routes.home,
});
