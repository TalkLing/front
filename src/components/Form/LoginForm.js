import { useEffect, useContext } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { authOperations } from "../../redux/auth";
import {
  validationLoginSchema,
  validateLogin,
} from "../../helpers/Validation/ValidationLogin";
import { PageFormatContext, format } from "../../context/PageFormatContext";
import s from "./LoginForm.module.scss";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { desktop } = format;
  const pageFormat = useContext(PageFormatContext);
  const isDesktop = pageFormat === desktop;
  /*  const error = useSelector(authSelectors.getError);

  useEffect(() => {
    if (!error) return;
  }, [error]);*/

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationLoginSchema,
    validateLogin,
    onSubmit: (values, obj) => {
      const { email: e, password } = values;
      const email = e.toLowerCase();
      dispatch(authOperations.signIn({ email, password }));
      obj.setSubmitting(false);
      // sessionStorage.setItem("auth-form", null);
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
            min={8}
            max={40}
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
            style={{ backgroundColor: "white" }}
            className={s.input}
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            minLength={8}
            maxLength={30}
            onChange={formik.handleChange}
            value={formik.values.password.trim()}
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <span className={s.mistake}>{formik.errors.password}</span>
        ) : null}
      </div>

      <NavLink to="/sendRequest" className={s.forgot}>
        Forgot Password?
      </NavLink>

      <button
        className={s.btn}
        type="submit"
        // disabled={!formik.isValid}
        style={{
          width: isDesktop && "414px",
          fontSize: isDesktop && "20px",
          height: isDesktop && "56px",
        }}
      >
        Log In
      </button>

      <div className={s.dontHave}>
        Don`t have an account? {}
        <NavLink to="/registration" className={s.sign}>
          Sign Up
        </NavLink>
        <br />
      </div>
    </form>
  );
};
