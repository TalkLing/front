import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import {
  validationRegistrationSchema,
  validate,
} from "../../helpers/Validation/ValidationRegistration";
import { Button } from "../../components/Button/Button";
import s from "./RegistrationForm.module.scss";

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationRegistrationSchema,
    validate,
    onSubmit: (values, obj) => {
      alert(JSON.stringify(values, null, 2));
      const { name, email, password, confirmPassword } = values;
      const credentials = { name, email, password, confirmPassword };
      dispatch(authOperations.signUp(credentials));
      obj.setSubmitting(false);
      localStorage.setItem("info", true);
      sessionStorage.setItem("auth-form", null);
      obj.resetForm();
    },
  });

  return (
    <form className={s.form} onSubmit={formik.handleSubmit}>
      <div className={s.inputContainer}>
        <div
          className={s.inputField}
          style={{
            border:
              formik.touched.name && formik.errors.name && "1px solid #f85757",
            outline:
              formik.touched.name && !formik.errors.name && "1px solid #8B8E8F",
          }}
        >
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
          />
        </div>
        {formik.touched.name && formik.errors.name ? (
          <p className={s.mistake}>{formik.errors.name}</p>
        ) : null}
      </div>
      <div className={s.inputContainer}>
        <div
          className={s.inputField}
          style={{
            border:
              formik.touched.email &&
              formik.errors.email &&
              "1px solid #f85757",
            outline:
              formik.touched.email &&
              !formik.errors.email &&
              "1px solid #8B8E8F",
          }}
        >
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
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <span className={s.mistake}>{formik.errors.email}</span>
        ) : null}
      </div>
      <div className={s.inputContainer}>
        <div
          className={s.inputField}
          style={{
            border:
              formik.touched.password &&
              formik.errors.password &&
              "1px solid #f85757",
            outline:
              formik.touched.password &&
              !formik.errors.password &&
              "1px solid #8B8E8F",
          }}
        >
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
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <span className={s.mistake}>{formik.errors.password}</span>
        ) : null}
      </div>
      <div className={s.inputContainer}>
        <div
          className={s.inputField}
          style={{
            border:
              formik.touched.password &&
              formik.errors.password &&
              "1px solid #f85757",
            outline:
              formik.touched.password &&
              !formik.errors.password &&
              "1px solid #8B8E8F",
          }}
        >
          <span className={`${s.icon} ${s.password}`}></span>
          <input
            className={s.input}
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            minLength={5}
            maxLength={30}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword.trim()}
            placeholder="Confirm"
          />
        </div>{" "}
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <span className={s.mistake}>{formik.errors.confirmPassword}</span>
        ) : null}
      </div>

      <div className={s.checkbox}>
        <input
          type="checkbox"
          id="agreement"
          className={s.customChecbox}
          name="agreement"
          value="yes"
        />
        <label htmlFor="agreement" className={s.checkLabel}>
          I agree to the terms of service
        </label>
      </div>
      {/*<button type="submit">Create Account</button>*/}

      {
        <Button
          type="submit"
          // disabled={!formik.isValid}
          style={{ backgroundColor: "#F6F244" }}
        >
          Create Account
        </Button>
      }
    </form>
  );
};
