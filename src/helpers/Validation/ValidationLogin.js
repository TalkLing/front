import * as Yup from "yup";

export const validationLoginSchema = Yup.object({
  email: Yup.string().email().min(8).max(40).required().typeError(),

  password: Yup.string().min(8).max(30).required().typeError(),
});

export const validate = (values) => {
  const reg = new RegExp("[0-9A-Za-zА-Яа-яґҐЁёІіЇїЄє]");
  const cyrillic = new RegExp("[А-Яа-яґҐЁёІіЇїЄє]");

  const errors = {};

  if (!values.email) {
    errors.email = "please type your email";
  } else if (values.email.length < 8 || values.email.length > 40) {
    errors.email = "enter an email from 8 to 40 characters";
  } else if (values.email.startsWith("-") || values.email.slice(-1) === "-") {
    errors.email = "please enter a valid email";
  } else if (cyrillic.test(values.email)) {
    errors.email = "please enter a valid email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "invalid email address";
  }

  if (!values.password) {
    errors.password = "please type a password";
  } else if (values.password.length < 7 || values.password.length > 30) {
    errors.password = " enter a password from 8 to 29 characters";
  }

  return errors;
};
