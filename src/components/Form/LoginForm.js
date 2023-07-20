import { useContext } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { authOperations } from "../../redux/auth";
import {
  validationLoginSchema,
  // validateLogin,
} from "../../helpers/Validation/ValidationLogin";
import { PageFormatContext, format } from "../../context/PageFormatContext";
import s from "./LoginForm.module.scss";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { desktop } = format;
  const pageFormat = useContext(PageFormatContext);
  const isDesktop = pageFormat === desktop;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationLoginSchema,
    // validateLogin,
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
    <form className={s.form}>
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
            style={{ backgroundColor: "white" }}
            className={s.input}
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            minLength={5}
            maxLength={30}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password.trim()}
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
        <span className={s.mistake}>{formik.errors.password}</span>
      ) : null}
      </div>
      
      <NavLink to="/sendRequest">
        <a href="/sendRequest" className={s.forgot}>Forgot Password?</a>
      </NavLink>

      <button
        className={s.btn}
        type="submit"
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
          <NavLink to="/registration">
            <a href="/registration" className={s.sign}>
              Sign Up
            </a>
          </NavLink>
          <br/>
          <NavLink to="/errorPage">
            <a href="/errorPage" className={s.sign}>
              Go to ErrorPage
            </a>
          </NavLink>
        </div>
    </form>
  )
}