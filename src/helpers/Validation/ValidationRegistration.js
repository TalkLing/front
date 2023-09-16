import * as Yup from "yup";

export const validationRegistrationSchema = Yup.object({
  username: Yup.string().min(2).max(50).required().typeError(),

  email: Yup.string().email().min(8).max(40).required().typeError(),

  password: Yup.string().min(8).max(30).required().typeError(),

  confirmPassword: Yup.string().min(8).max(30).required().typeError(),

  termsOfService: Yup.boolean().required(
    "You must accept the Terms of Service to proceed"
  ),
});

export const validate = (values) => {
  const reg = new RegExp("[0-9A-Za-zА-Яа-яґҐЁёІіЇїЄє]");
  const cyrillic = new RegExp("[А-Яа-яґҐЁёІіЇїЄє]");

  const errors = {};
  if (!values.username) {
    errors.username = "please type your name";
  } else if (values.username.length < 1 || values.username.length > 49) {
    errors.username = "enter a name from 2 to 50 characters";
  } /*else if (!reg.test(values.name[0])) {
      errors.name =
        language.resolvedLanguage === 'uk' ? lngs.start.ua : lngs.start.en;
    }*/

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
  } else if (
    values.password.startsWith("-") ||
    values.password.startsWith(".") ||
    cyrillic.test(values.password)
  ) {
    errors.password = "please enter another password";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "please confirm your password";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "password mismatch";
  }

  if (!values.termsOfService) {
    errors.termsOfService = "please accept to proceed";
  }

  return errors;
};
