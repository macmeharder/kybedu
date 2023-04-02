import { ChangeEvent } from "react";

export const phoneField = {
  // required: "Phone is required.",
  code: "+7 7",
  onChange: function (event: ChangeEvent<HTMLInputElement>) {
    const mask = "## ### ## ##";

    if (event.currentTarget.value === this.code.slice(0, -1)) {
      event.currentTarget.value = this.code;
      return;
    }

    let i = 0,
      val = event.currentTarget.value.replace(this.code, "").replace(/\D/g, "");

    event.currentTarget.value =
      this.code +
      mask.replace(/./g, function (substring) {
        return /[#\d]/.test(substring) && i < val.length
          ? val.charAt(i++)
          : i >= val.length
          ? ""
          : substring;
      });
  },
};
