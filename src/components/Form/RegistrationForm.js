import { useFormik } from "formik";
import {
  validationRegistrationSchema,
  validate,
} from "../../helpers/Validation/ValidationRegistration";
import s from "./RegistrationForm.module.scss";

export const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
    },
    validationSchema: validationRegistrationSchema,
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    /* onSubmit: (values, obj) => {
      const { name, email, password } = values;
      const credentials = { name, email, password };
     dispatch(authOperations.signUp(credentials));
      obj.setSubmitting(false);
      localStorage.setItem("info", true);
      sessionStorage.setItem("auth-form", null);
      obj.resetForm();
      },*/
  });

  return (
    <form className={s.form} onSubmit={formik.handleSubmit}>
      <div className={s.inputField}>
        <span className={`${s.icon} ${s.username}`}></span>
        <input
          className={s.input}
          id="name"
          name="name"
          type="text"
          maxLength={100}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="Username"
          style={{ color: formik.touched.name && formik.errors.name && "red" }}
        />
        {/*formik.touched.name && formik.errors.name ? (
        <span>{formik.errors.name}</span>
      ) : null*/}
      </div>

      <div className={s.inputField}>
        <span className={`${s.icon} ${s.email}`}></span>
        <input
          className={s.input}
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email.trim()}
          placeholder="Email"
          style={{
            color: formik.touched.email && formik.errors.email && "red",
          }}
        />
        {/*formik.touched.email && formik.errors.email ? (
        <span>{formik.errors.email}</span>
      ) : null*/}
      </div>

      <div className={s.inputField}>
        <span className={`${s.icon} ${s.password}`}></span>
        <input
          className={s.input}
          id="password"
          name="password"
          type="password"
          minLength={5}
          maxLength={30}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password.trim()}
          placeholder="Password"
          style={{
            color: formik.touched.password && formik.errors.password && "red",
          }}
        />
        {/*formik.touched.password && formik.errors.password ? (
        <span>{formik.errors.password}</span>
      ) : null*/}
      </div>

      <div className={s.inputField}>
        <span className={`${s.icon} ${s.password}`}></span>
        <input
          className={s.input}
          id="repassword"
          name="repassword"
          type="password"
          minLength={5}
          maxLength={30}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.repassword.trim()}
          placeholder="Confirm"
          style={{
            color:
              formik.touched.repassword && formik.errors.repassword && "red",
          }}
        />
        {/*formik.touched.repassword && formik.errors.repassword ? (
        <span>{formik.errors.repassword}</span>
      ) : null*/}
      </div>
      <div className={s.checkbox}>
        <input type="checkbox" id="agreement" />
        <label htmlFor="agreement" className={s.checkLabel}>
          I agree to the terms of service
        </label>
      </div>
    </form>
  );
};
