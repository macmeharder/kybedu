import { createEvent, createStore, sample } from "effector";

export const initialHeadNavigation = {
  className: "",
  left: <></>,
  center: <></>,
  right: <></>,
};

export const $headNavigation = createStore(initialHeadNavigation);

export const changeHeadNavigationEv =
  createEvent<typeof initialHeadNavigation>();

sample({
  clock: changeHeadNavigationEv,
  target: $headNavigation,
});
