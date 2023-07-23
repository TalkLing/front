import * as Yup from "yup";

export const validationLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email or password")
    .min(8, "Invalid email or password")
    .max(40, "Invalid email or password")
    .required("Required! Please type your email")
    .typeError(),

  password: Yup.string()
    .min(8, "Invalid email or password")
    .max(30, "Invalid email or password")
    .required("Required! Please type your password")
    .typeError(),
});

export const validateLogin = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Invalid email or password";
  }

  if (!values.password) {
    errors.password = "Invalid email or password";
  }

  return errors;
};
