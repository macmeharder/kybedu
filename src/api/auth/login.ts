import { createMutation } from "@farfetched/core";

import { request } from "~/shared/request";

export const loginMutation = createMutation<any, any>({
  handler: async function ({ ...body }) {
    return request({
      method: "POST",
      endpoint: "/auth/login",
      body,
    });
  },
});
