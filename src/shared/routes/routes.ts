import { createRoute, createRouterControls } from "atomic-router";
import { createEvent, sample } from "effector";

export const routes = {
  login: createRoute(),
  register_1: createRoute(),
  register_2: createRoute(),
  register_3: createRoute(),
  forgot_password: createRoute(),

  home: createRoute(),
  section: createRoute<{ id: string }>(),
  section_lesson: createRoute<{ id: string }>(),
  section_test: createRoute<{ id: string }>(),

  profile: createRoute(),
  profile_settings: createRoute(),
  change_password: createRoute(),
  delete_account: createRoute(),
  deleted: createRoute(),
};

export const controls = createRouterControls();

export const goBackEv = createEvent();

sample({
  clock: goBackEv,
  target: controls.back,
});
