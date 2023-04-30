import { sample } from "effector";

import { routes } from "~/shared/routes";
import { BackButton } from "~/shared/ui/back-button";
import { changeHeadNavigationEv } from "~/shared/ui/head-navigation/model";

sample({
  clock: routes.section_test.opened,
  fn: function () {
    return {
      left: <BackButton className="flex-1 text-white" />,
      center: <p className="flex flex-[2] justify-center">Тест</p>,
      right: <div className="flex-1"></div>,
    };
  },
  target: changeHeadNavigationEv,
});
