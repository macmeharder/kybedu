import { createEvent, createStore, sample } from "effector";
import { persist } from "effector-storage/local";

import { routes } from "~/shared/routes";

export const $token = createStore<string | null>(null);
persist({ store: $token, key: "token" });
export const setTokenEv = createEvent<string>();

sample({
  clock: setTokenEv,
  fn: function (payload) {
    return payload;
  },
  target: $token,
});

export const redirectToLoginEv = createEvent();

sample({
  clock: redirectToLoginEv,
  target: routes.login.open,
});

export const redirectToHomeEv = createEvent();

sample({
  clock: redirectToHomeEv,
  target: routes.home.open,
});

export const logoutEv = createEvent();

sample({
  clock: logoutEv,
  fn: function () {
    return null;
  },
  target: $token,
});
