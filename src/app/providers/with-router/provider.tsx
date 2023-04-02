import { RouterProvider } from "atomic-router-react";
import { ReactNode, Suspense } from "react";

import { router } from "./model";

export function withRouter(component: () => ReactNode) {
  return (
    <RouterProvider router={router}>
      <Suspense fallback={null}>{component()}</Suspense>
    </RouterProvider>
  );
}
