import { createRoute, createRouterControls } from "atomic-router";

export const routes = {
  login: createRoute(),
  register_1: createRoute(),
  register_2: createRoute(),
  register_3: createRoute(),
};

export const controls = createRouterControls();
