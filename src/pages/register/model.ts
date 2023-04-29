import { createEvent } from "effector";
import { redirect } from "atomic-router";
import { routes } from "~/shared/routes";

export const successFirstRegistrationEv = createEvent();

redirect({
  clock: successFirstRegistrationEv,
  route: routes.register_2,
});

export const successSecondRegistrationEv = createEvent();

redirect({
  clock: successSecondRegistrationEv,
  route: routes.register_3,
});
