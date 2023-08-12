import { useState } from "react";
import { useContext, useEffect, useRef } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";
import {
  validationRegistrationSchema,
  validate,
} from "../../helpers/Validation/ValidationRegistration";
import { PageFormatContext, format } from "../../context/PageFormatContext";
import s from "./RegistrationForm.module.scss";

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { desktop, tablet } = format;
  const pageFormat = useContext(PageFormatContext);
  const isDesktop = pageFormat === desktop;
  const isTablet = pageFormat === tablet;

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsOfService: false,
    },
    validationSchema: validationRegistrationSchema,
    validate,
    onSubmit: (values, obj) => {
      alert(JSON.stringify(values, null, 2));
      const { username, email, password, confirmPassword } = values;
      const credentials = { username, email, password, confirmPassword };
      dispatch(authOperations.signUp(credentials));
      obj.setSubmitting(false);
      //sessionStorage.setItem("auth-form", null);
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
              formik.touched.username &&
              formik.errors.username &&
              "1px solid #f85757",
            outline:
              formik.touched.username &&
              !formik.errors.username &&
              "1px solid #8B8E8F",
          }}
        >
          <span className={`${s.icon} ${s.username}`}></span>

          <input
            style={{ backgroundColor: "white" }}
            className={s.input}
            id="username"
            name="username"
            type="text"
            minLength={2}
            maxLength={50}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            placeholder="Username"
          />
        </div>
        {formik.touched.username && formik.errors.username ? (
          <p className={s.mistake}>{formik.errors.username}</p>
        ) : null}
      </div>
      <div className={s.inputContainer}>
        <div
          className={s.inputField}
          style={{
            border:
              formik.touched.email &&
              formik.errors.email &&
              "1.5px solid #f85757",
            outline:
              formik.touched.email &&
              !formik.errors.email &&
              "1.5px solid #8B8E8F",
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
              "1.5px solid #f85757",
            outline:
              formik.touched.password &&
              !formik.errors.password &&
              "1.5px solid #8B8E8F",
          }}
        >
          <span className={`${s.icon} ${s.password}`}></span>
          <input
            className={s.input}
            id="password"
            name="password"
            type="password"
            minLength={8}
            maxLength={40}
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
              formik.touched.confirmPassword &&
              formik.errors.confirmPassword &&
              "1.5px solid #f85757",
            outline:
              formik.touched.confirmPassword &&
              !formik.errors.confirmPassword &&
              "1.5px solid #8B8E8F",
          }}
        >
          <span className={`${s.icon} ${s.password}`}></span>
          <input
            className={s.input}
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            minLength={8}
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
          id="termsOfService"
          className={s.customChecbox}
          name="termsOfService"
          onChange={formik.handleChange}
          value={formik.values.termsOfService}
        />
        <label htmlFor="termsOfService" className={s.checkLabel}>
          I agree to the terms of service
        </label>
        {formik.touched.termsOfService && formik.errors.termsOfService ? (
          <span className={s.mistake}>{formik.errors.termsOfService}</span>
        ) : (
          " "
        )}
      </div>

      <button
        className={s.btn}
        type="submit"
        disabled={!formik.isValid}
        style={{
          width: isDesktop && "414px",
          fontSize: isDesktop && "20px",
          height: isDesktop && "56px",
        }}
      >
        Create Account
      </button>
    </form>
  );
};
