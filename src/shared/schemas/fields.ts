import { emailRegExp, passwordRegExp } from "~/shared/schemas/reg-exp";

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
