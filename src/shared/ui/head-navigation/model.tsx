import { createEvent, createStore, sample } from "effector";
import { ReactNode } from "react";

interface HeadNavigation {
  layout?: string;
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
}
export const initialHeadNavigation: HeadNavigation = {
  left: <></>,
  center: <></>,
  right: <></>,
};

export const $headNavigation = createStore(initialHeadNavigation);

export const changeHeadNavigationEv = createEvent<{
  layout?: string;
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
}>();

sample({
  clock: changeHeadNavigationEv,
  target: $headNavigation,
});
