import { sample } from "effector";
import { createGate } from "effector-react";

import {
  $headNavigation,
  changeHeadNavigationEv,
  HEAD_NAVIGATION_COLOR,
} from "~/shared/ui/head-navigation/model";

export const ViewerLayoutGate = createGate();

sample({
  source: $headNavigation,
  clock: ViewerLayoutGate.open,
  fn: function (source) {
    return { ...source, color: HEAD_NAVIGATION_COLOR.PURPLE };
  },
  target: changeHeadNavigationEv,
});

export const GuestLayoutGate = createGate();

sample({
  source: $headNavigation,
  clock: GuestLayoutGate.open,
  fn: function (source) {
    return { ...source, color: HEAD_NAVIGATION_COLOR.WHITE };
  },
  target: changeHeadNavigationEv,
});

export const ProfileLayoutGate = createGate();

sample({
  source: $headNavigation,
  clock: ProfileLayoutGate.open,
  fn: function (source) {
    return { ...source, color: HEAD_NAVIGATION_COLOR.WHITE };
  },
  target: changeHeadNavigationEv,
});
