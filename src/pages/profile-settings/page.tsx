import { useForm } from "react-hook-form";

import { Input } from "~/shared/ui/input";

export function ProfileSettingsPage() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="flex h-full flex-col gap-10 pt-safe">
      <form
        className="flex flex-col gap-4"
        id="profile-settings"
        onSubmit={handleSubmit(function (data, event) {
          console.log(data);
        })}
      >
        <Input
          label="Имя"
          register={register("firstname", { value: "Adil" })}
        />
        <Input
          label="Фамилия"
          register={register("lastname", { value: "Issabekov" })}
        />
        <Input
          type="email"
          label="E-mail"
          defaultValue="name@mail.com"
          disabled
        />
      </form>
    </div>
  );
}
