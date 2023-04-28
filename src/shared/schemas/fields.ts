import { ChangeEvent } from "react";
import { emailRegExp, passwordRegExp } from "~/shared/schemas/reg-exp";

export const phoneField = {
  required: "Phone is required.",
  code: "+7 7",
  minLength: {
    value: 16,
    message: "Enter full number.",
  },
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
export const passwordField = {
  required: "Password is required.",
  minLength: {
    value: 8,
    message: "Min length is 8.",
  },
  pattern: {
    value: passwordRegExp,
    message: "Wrong password format.",
  },
};

export const firstnameField = {
  required: "Firstname is required.",
};
export const lastnameField = {
  required: "Lastname is required.",
};
export const emailField = {
  required: "Email is required.",
  pattern: {
    value: emailRegExp,
    message: "Wrong email format.",
  },
};
