import {
  confirmPasswordField,
  emailField,
  firstnameField,
  lastnameField,
  passwordField,
} from "~/shared/schemas/fields";

export const loginSchema = {
  email: emailField,
  password: passwordField,
};

export const registerSchema = {
  firstname: firstnameField,
  lastname: lastnameField,
  email: emailField,
  password: passwordField,
  confirmPassword: confirmPasswordField,
};
