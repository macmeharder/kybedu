import { sample } from "effector";

import { routes } from "~/shared/routes";
import { BackButton } from "~/shared/ui/back-button";
import { changeHeadNavigationEv } from "~/shared/ui/head-navigation/model";

sample({
  clock: routes.profile_settings.opened,
  fn: function () {
    return {
      left: <BackButton className="flex-1 text-ce-purple" />,
      center: (
        <h2 className="flex flex-[2] justify-center text-ce-gray-3">
          Мой аккаунт
        </h2>
      ),
      right: (
        <button
          type="submit"
          form="profile-settings"
          className="flex flex-1 justify-end text-ce-purple"
        >
          Сохранить
        </button>
      ),
    };
  },
  target: changeHeadNavigationEv,
});
