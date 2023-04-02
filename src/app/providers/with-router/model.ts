import { createHistoryRouter } from "atomic-router";
import { sample } from "effector";
import { createBrowserHistory } from "history";

import { routes } from "~/shared/routes";

import { routesMap } from "~/pages";

export const router = createHistoryRouter({
  routes: routesMap,
});

const history = createBrowserHistory();

sample({
  clock: router.routeNotFound,
  fn: function () {
    console.log("asd");
  },
  target: routes.login.open.prepend(() => {}),
});

router.initialized.watch(function (payload) {
  console.log(payload);
});

router.setHistory(history);
