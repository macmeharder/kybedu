import { createStore } from "effector";
import { controls } from "~/shared/routes/routes";

export const $headNavigation = createStore({
  show: true,
  left: (
    <button
      onClick={function () {
        controls.back();
      }}
    >
      Назад
    </button>
  ),
  center: <p>Мой аккаунт</p>,
  right: (
    <button
      onClick={function () {
        controls.forward();
      }}
    >
      Вперёд
    </button>
  ),
});
