import { createHistoryRouter } from "atomic-router";
import { sample } from "effector";
import { createBrowserHistory } from "history";

import { routes } from "~/shared/routes";
import { controls } from "~/shared/routes/routes";

import { routesMap } from "~/pages";

export const router = createHistoryRouter({
  routes: routesMap,
  controls,
});

const history = createBrowserHistory();

sample({
  clock: router.routeNotFound,
  target: routes.home.open,
});

router.setHistory(history);
