import * as Yup from "yup";

export const validationLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email! Please type your email")
    .min(7, "The minimum email length is 5 characters")
    .max(63, "The maximum email length is 29 characters")
    .required("Please type your email").typeError(),

  password: Yup.string()
    .min(5, "The minimum password length is 5 characters")
    .max(30, "The maximum password length is 29 characters")
    .required("Required! Please type your password").typeError(),
});

export const validateLogin = (values) => {
  // const reg = new RegExp("[0-9A-Za-zА-Яа-яґҐЁёІіЇїЄє]");
  // const cyrillic = new RegExp("[А-Яа-яґҐЁёІіЇїЄє]");

  const errors = {};

  // if (!values.email) {
  //   errors.email = "please type your email";
  // } else if (values.email.length < 6 || values.email.length > 62) {
  //   errors.email = "please type an email in length from 6 to 62 characters";
  // } else if (values.email.startsWith("-") || values.email.slice(-1) === "-") {
  //   errors.email = "please enter a valid email";
  // } else if (cyrillic.test(values.email)) {
  //   errors.email = "please enter a valid email";
  // }

  // if (!values.password) {
  //   errors.password = "please type a password";
  // } else if (values.password.length < 4 || values.password.length > 29) {
  //   errors.password = "password length must be from 4 to 29 characters";
  // } else if (
  //   values.password.startsWith("-") ||
  //   values.password.startsWith(".") ||
  //   cyrillic.test(values.password)
  // ) {
  //   errors.password = "please enter another password";
  // }

  return errors;
};
