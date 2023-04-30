import { sample } from "effector";

import { routes } from "~/shared/routes";
import { BackButton } from "~/shared/ui/back-button";
import { changeHeadNavigationEv } from "~/shared/ui/head-navigation/model";

sample({
  clock: routes.section.opened,
  fn: function (payload) {
    return {
      left: <BackButton className="flex-1 text-white" />,
      center: <h3 className="flex flex-[2] justify-center">Введение</h3>,
      right: (
        <div className="flex flex-1 justify-end">
          <img src={`/images/sections/${payload.params.id}.png`} />
        </div>
      ),
    };
  },
  target: changeHeadNavigationEv,
});
