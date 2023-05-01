import { routes } from "~/shared/routes";
import { Button } from "~/shared/ui/button";

export function DeleteAccountPage() {
  return (
    <div className="mt-3 flex flex-col gap-4 pt-safe">
      <h2 className="text-lg text-ce-purple">
        Вы уверены, что хотите удалить аккаунт?
      </h2>
      <p>
        Нам жаль, что вы уходите, но мы уважаем ваш выбор. Если вы решите
        удалить свою учетную запись, вся ваша личная информация будет удалена
        сразу.
      </p>
      <Button color="danger" to={routes.deleted}>
        Удалить
      </Button>
    </div>
  );
}
