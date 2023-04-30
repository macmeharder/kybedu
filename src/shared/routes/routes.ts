import { createRoute, createRouterControls } from "atomic-router";
import { createEvent, sample } from "effector";

export const routes = {
  login: createRoute(),
  register_1: createRoute(),
  register_2: createRoute(),
  register_3: createRoute(),

  home: createRoute(),
  section: createRoute<{ id: string }>(),
  section_lesson: createRoute(),
  section_test: createRoute(),
};

export const controls = createRouterControls();

export const goBackEv = createEvent();

sample({
  clock: goBackEv,
  target: controls.back,
});
