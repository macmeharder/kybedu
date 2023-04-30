import { sample } from "effector";
import { createGate } from "effector-react";

import {
  $headNavigation,
  changeHeadNavigationEv,
} from "~/shared/ui/head-navigation/model";

export const ViewerLayoutGate = createGate();

sample({
  source: $headNavigation,
  clock: ViewerLayoutGate.open,
  fn: function (source) {
    return { ...source, layout: "viewer" };
  },
  target: changeHeadNavigationEv,
});

export const GuestLayoutGate = createGate();

sample({
  source: $headNavigation,
  clock: GuestLayoutGate.open,
  fn: function (source) {
    return { ...source, layout: "guest" };
  },
  target: changeHeadNavigationEv,
});
