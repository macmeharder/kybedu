import { createEvent, createStore, sample } from "effector";

import { routes } from "~/shared/routes";
import { BackButton } from "~/shared/ui/back-button";
import { changeHeadNavigationEv } from "~/shared/ui/head-navigation/model";

sample({
  clock: routes.section_test.opened,
  fn: function (payload) {
    return {
      left: <BackButton className="flex-1 text-white" />,
      center: <p className="flex flex-[2] justify-center">Тест</p>,
      right: (
        <div className="flex flex-1 justify-end">
          <img src={`/images/sections/${payload.params.id}.png`} />
        </div>
      ),
    };
  },
  target: changeHeadNavigationEv,
});

export const $test = createStore({
  id: 1,
  text: "",
});

export const $question = createStore({
  question:
    "Что такое «целостность» с точки зрения информационной безопасности?",
  id: 1,
  answers: [
    {
      text: "Перечень правил для снижения рисков, связанных с использованием интернета",
      id: 1,
    },
    {
      text: "Отсутствие неправомочных искажений, добавлений или уничтожения информации *",
      id: 2,
    },
    {
      text: "Обеспечение своевременного и надежного доступа к информации и информационным сервисам",
      id: 3,
    },
    {
      text: "Состояние доступности информации только авторизованным устройствам",
      id: 4,
    },
  ],
});

export const $isQuestionSubmitted = createStore(false);

export const handleSubmitTestQuestionEv = createEvent<Record<string, string>>();

sample({
  clock: handleSubmitTestQuestionEv,
  fn: function () {
    return true;
  },
  target: $isQuestionSubmitted,
});
