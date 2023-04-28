import {
  emailField,
  firstnameField,
  lastnameField,
  passwordField,
  phoneField,
} from "~/shared/schemas/fields";

export const loginSchema = {
  phone: phoneField,
  password: passwordField,
};

export const registerSchema = {
  firstname: firstnameField,
  lastname: lastnameField,
  email: emailField,
};
