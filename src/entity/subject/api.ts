import { createQuery } from "@farfetched/core";

import { request } from "~/shared/request";

import { ISubject } from "./model";

interface GetSubjectQueryParams {
  id: string;
}

export const getSubjectQuery = createQuery<GetSubjectQueryParams, ISubject>({
  handler: async function ({ id }) {
    return await request({
      endpoint: `/subjects/${id}`,
      method: "GET",
    });
  },
});
