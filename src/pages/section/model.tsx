import { chainRoute } from "atomic-router";
import { createEvent, sample } from "effector";

import { getSubjectQuery } from "~/entity/subject/api";
import { $subject } from "~/entity/subject/model";

import { routes } from "~/shared/routes";
import { BackButton } from "~/shared/ui/back-button";
import { changeHeadNavigationEv } from "~/shared/ui/head-navigation/model";

const sectionRoute = routes.section;
const beforeOpenSection = createEvent();
const beforeSubjectRoute = createEvent();

sample({
  clock: beforeOpenSection,
  source: routes.section.$params,
  target: getSubjectQuery.start,
});

const subjectLoadedRoute = chainRoute({
  route: sectionRoute,
  // @ts-ignore
  beforeOpen: beforeOpenSection,
  openOn: getSubjectQuery.finished.success,
});

sample({
  clock: beforeOpenSection,
  source: $subject,
  fn: function (source, payload) {
    return {
      left: <BackButton className="flex-1 text-white" />,
      center: <h3 className="flex flex-[2] justify-center">{source.name}</h3>,
      right: (
        <div className="flex flex-1 justify-end">
          <img src={`/images/sections/${source.id}.png`} />
        </div>
      ),
    };
  },
  target: changeHeadNavigationEv,
});
