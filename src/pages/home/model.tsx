import { sample } from "effector";

import { routes } from "~/shared/routes";
import { changeHeadNavigationEv } from "~/shared/ui/head-navigation/model";
import { ProgressBar } from "~/shared/ui/progress-bar";

sample({
  clock: routes.home.opened,
  fn: function () {
    const max = 100;
    const value = 50;

    return {
      show: true,
      className: "bg-main-purple text-white",
      left: (
        <div className="w-full">
          <h4>Прогресс</h4>
          <div className="flex items-center gap-4">
            <ProgressBar value={value} max={max} />
            <span>
              {value}/{max}
            </span>
          </div>
        </div>
      ),
      center: <></>,
      right: <></>,
    };
  },
  target: changeHeadNavigationEv,
});
