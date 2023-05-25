import { createStore, sample } from "effector";

import { getSubjectQuery } from "./api";

export interface ISubject {
  id: number;
  name: string;
  short_description: string;
}
export const $subject = createStore<ISubject>({
  id: 0,
  name: "",
  short_description: "",
});

sample({
  clock: getSubjectQuery.finished.success,
  fn: function ({ result }) {
    return result;
  },
  target: $subject,
});
