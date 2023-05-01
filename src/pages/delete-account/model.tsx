import { sample } from "effector";

import { routes } from "~/shared/routes";
import { BackButton } from "~/shared/ui/back-button";
import { changeHeadNavigationEv } from "~/shared/ui/head-navigation/model";

sample({
  clock: routes.delete_account.opened,
  fn: function () {
    return {
      left: <BackButton className="flex-1 text-ce-purple" />,
      center: (
        <h2 className="flex flex-[2] justify-center text-ce-gray-3">
          Удаление аккаунта
        </h2>
      ),
      right: <div className="flex-1"></div>,
    };
  },
  target: changeHeadNavigationEv,
});
