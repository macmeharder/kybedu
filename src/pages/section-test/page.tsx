import clsx from "clsx";
import { useUnit } from "effector-react";
import { useForm } from "react-hook-form";

import { routes } from "~/shared/routes";
import { Button } from "~/shared/ui/button";

import {
  $isQuestionSubmitted,
  $question,
  $test,
  handleSubmitTestQuestionEv,
} from "~/pages/section-test/model";

export function SectionTestPage() {
  const [
    { id: questionId, question, answers },
    handleSubmitTestQuestion,
    isSubmitted,
    { id: testId },
    { id: sectionId },
  ] = useUnit([
    $question,
    handleSubmitTestQuestionEv,
    $isQuestionSubmitted,
    $test,
    routes.section_test.$params,
  ]);

  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm();

  return (
    <div className="flex h-full flex-col gap-10 py-4">
      <h2>{question}</h2>
      <form
        className="flex h-full flex-col gap-6"
        onSubmit={handleSubmit(handleSubmitTestQuestion)}
      >
        <div className="grid grid-cols-2 gap-4">
          {answers.map(function ({ id: answerId, text }) {
            return (
              <div className="flex" key={answerId}>
                <input
                  type="radio"
                  className="peer sr-only"
                  id={`${questionId}-${answerId}`}
                  value={answerId}
                  {...register(`test-${questionId}`, { required: true })}
                />
                <label
                  htmlFor={`${questionId}-${answerId}`}
                  className={clsx(
                    "flex rounded-2xl border-2 border-ce-blue-gray p-2.5 text-center",
                    "peer-checked:border-ce-purple"
                  )}
                >
                  {text}
                </label>
              </div>
            );
          })}
        </div>
        {isSubmitted ? (
          <Button
            className="mt-auto"
            to={routes.section_test}
            params={{ id: sectionId }}
            query={{ testId: testId, questionId: questionId + 1 }}
          >
            Далее
          </Button>
        ) : (
          <Button className="mt-auto" disabled={!isValid}>
            Ответить
          </Button>
        )}
      </form>
    </div>
  );
}
