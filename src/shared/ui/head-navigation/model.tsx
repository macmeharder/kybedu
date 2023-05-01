import { createEvent, createStore, sample } from "effector";
import { ReactNode } from "react";

export enum HEAD_NAVIGATION_COLOR {
  PURPLE = "purple",
  WHITE = "white",
}

interface HeadNavigation {
  color?: HEAD_NAVIGATION_COLOR;
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
}
export const initialHeadNavigation: HeadNavigation = {
  color: HEAD_NAVIGATION_COLOR.WHITE,
  left: <></>,
  center: <></>,
  right: <></>,
};

export const $headNavigation = createStore(initialHeadNavigation);

export const changeHeadNavigationEv = createEvent<HeadNavigation>();

sample({
  source: $headNavigation,
  clock: changeHeadNavigationEv,
  fn: function ({ color }, payload) {
    return { color, ...payload };
  },
  target: $headNavigation,
});
