import { createGate } from "effector-react";
import { sample } from "effector";
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
