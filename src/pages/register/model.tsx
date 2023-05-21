import { createEvent, createStore, sample } from "effector";

import { registerMutation } from "~/api/auth/register";

import { setTokenEv } from "~/shared/request/model";
import { routes } from "~/shared/routes";
import { BackButton } from "~/shared/ui/back-button";
import {
  changeHeadNavigationEv,
  initialHeadNavigation,
} from "~/shared/ui/head-navigation/model";

export const $registerForm = createStore<{
  email: string;
  password: string;
  confirmPassword?: string;
  first_name: string;
  last_name: string;
} | null>(null);

//======================================================================================================================
sample({
  clock: routes.register_1.opened,
  fn: function () {
    return initialHeadNavigation;
  },
  target: changeHeadNavigationEv,
});

export const handleSubmitFirstRegistrationEv = createEvent<any>();

sample({
  source: $registerForm,
  clock: handleSubmitFirstRegistrationEv,
  fn: function (source, payload) {
    return { ...source, ...payload };
  },
  target: [routes.register_2.open, $registerForm],
});

//======================================================================================================================
sample({
  source: $registerForm,
  clock: routes.register_2.opened,
  filter: function (source) {
    return source !== null;
  },
  fn: function () {
    return {
      left: <BackButton className="text-ce-purple" />,
      center: <></>,
      right: <></>,
    };
  },
  target: changeHeadNavigationEv,
});

sample({
  source: $registerForm,
  clock: routes.register_2.opened,
  filter: function (source) {
    return source === null;
  },
  target: routes.register_1.open,
});

export const handleSubmitSecondRegistrationEv = createEvent<any>();

sample({
  source: $registerForm,
  clock: handleSubmitSecondRegistrationEv,
  fn: function (source, payload) {
    return { ...source, ...payload };
  },
  target: [routes.register_3.open, $registerForm],
});

//======================================================================================================================
export const requestCodeEv = createEvent();

sample({
  source: $registerForm,
  clock: requestCodeEv,
  fn: function (source) {
    delete source?.confirmPassword;
    return { ...source, gender: "Male" };
  },
  target: registerMutation.start,
});

sample({
  clock: registerMutation.finished.success,
  fn: function ({ result }) {
    return result.token;
  },
  target: setTokenEv,
});

sample({
  source: $registerForm,
  clock: routes.register_3.opened,
  filter: function (source) {
    return source !== null;
  },
  fn: function () {
    return {
      left: <BackButton className="text-ce-purple" />,
      center: <></>,
      right: <></>,
    };
  },
  target: [changeHeadNavigationEv, requestCodeEv],
});

sample({
  source: $registerForm,
  clock: routes.register_3.opened,
  filter: function (source) {
    return source === null;
  },
  target: routes.register_1.open,
});

export const handleSubmitThirdRegistrationEv = createEvent<any>();

sample({
  source: $registerForm,
  clock: handleSubmitThirdRegistrationEv,
  fn: function (source, payload) {
    return { ...source, ...payload };
  },
  target: [routes.home.open],
});

$registerForm.watch(function (state) {
  console.log(state);
});
