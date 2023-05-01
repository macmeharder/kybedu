import { useUnit } from "effector-react";

import { routes } from "~/shared/routes";
import { Button } from "~/shared/ui/button";

export function SectionPage() {
  const { id } = useUnit(routes.section.$params);
  return (
    <div className="mt-4 flex items-center gap-5">
      <Button to={routes.section_lesson} params={{ id }}>
        Лекция
      </Button>
      <Button
        color="white"
        to={routes.section_test}
        params={{ id }}
        query={{ testId: 1, questionId: 1 }}
      >
        Тест
      </Button>
    </div>
  );
}
