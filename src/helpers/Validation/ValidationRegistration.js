import * as Yup from "yup";

export const validationRegistrationSchema = Yup.object({
  name: Yup.string().min(3).max(100).required().typeError(),

  email: Yup.string().email().min(7).max(63).email().required().typeError(),

  password: Yup.string().min(5).max(30).required().typeError(),

  repassword: Yup.string().min(5).max(30).required().typeError(),
});

export const validate = (values) => {
  const reg = new RegExp("[0-9A-Za-zА-Яа-яґҐЁёІіЇїЄє]");
  const cyrillic = new RegExp("[А-Яа-яґҐЁёІіЇїЄє]");

  const errors = {};
  if (!values.name) {
    errors.name = "please type your name";
  } else if (values.name.length < 2 || values.name.length > 99) {
    errors.name = "please type a name from 2 to 99 characters";
  } /*else if (!reg.test(values.name[0])) {
      errors.name =
        language.resolvedLanguage === 'uk' ? lngs.start.ua : lngs.start.en;
    }*/

  if (!values.email) {
    errors.email = "please type your email";
  } else if (values.email.length < 6 || values.email.length > 62) {
    errors.email = "please type an email from 6 to 62 characters";
  } else if (values.email.startsWith("-") || values.email.slice(-1) === "-") {
    errors.email = "please enter a valid email";
  } else if (cyrillic.test(values.email)) {
    errors.email = "please enter a valid email";
  }

  if (!values.password) {
    errors.password = "please type a password";
  } else if (values.password.length < 4 || values.password.length > 29) {
    errors.password = "password length must be from 4 to 29 characters";
  } else if (
    values.password.startsWith("-") ||
    values.password.startsWith(".") ||
    cyrillic.test(values.password)
  ) {
    errors.password = "please enter another password";
  }

  if (!values.repassword) {
    errors.repassword = "please confirm your password";
  } else if (values.repassword !== values.password) {
    errors.repassword = "password mismatch";
  }
  return errors;
};
