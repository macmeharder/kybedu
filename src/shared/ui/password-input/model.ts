import { createEvent, createStore, sample } from "effector";

export const $passwordType = createStore("password");

export const changePasswordTypeEv = createEvent();

sample({
  source: $passwordType,
  clock: changePasswordTypeEv,
  fn: function (source) {
    if (source === "text") return "password";
    return "text";
  },
  target: $passwordType,
});
