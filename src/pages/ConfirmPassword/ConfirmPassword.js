import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { PageFormatContext, format } from "context/PageFormatContext";
import { ReactComponent as Logo } from "images/icons/Logo.svg";
import { Button, About, Links } from "components";
import { authOperations, authSelectors } from "redux/auth";
import s from "./ConfirmPassword.module.scss";

export const ConfirmPassword = () => {
  const { response, mobile, tablet, desktop } = format;
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat === response || pageFormat === mobile;
  const isTablet = pageFormat === tablet;
  const isDesktop = pageFormat === desktop;
  const dispatch = useDispatch();
  const userAuth = useSelector(authSelectors.getIsLoggedIn);
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  useEffect(() => {
    (isDesktop || isTablet) && userAuth === true && navigate("/chat");
    // console.log("user registered", user);
  });

  useEffect(() => {
    isMobile && userAuth === true && navigate("/channels");
    // console.log("user registered", user);
  });

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      email: email?.toString(),
    },
    /* validationSchema: validationLoginSchema,
    validateLogin,*/
    onSubmit: (values, obj) => {
      const { newPassword } = values;
      const credentials = { email, newPassword };
      dispatch(authOperations.updatePassword(credentials));
      obj.setSubmitting(false);
      obj.resetForm();
    },
  });

  return (
    <div className={s.container}>
      <>
        {isMobile && (
          <>
            {" "}
            <NavLink to="/sendRequest" className={s.back}></NavLink>
            <div className={s.logo}>
              <Logo style={{ width: "72px", height: "90px" }} />
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className={s.inputContainer}>
                <div className={s.inputField}>
                  <span className={`${s.icon} ${s.password}`}></span>
                  <input
                    className={s.input}
                    id="password"
                    name="password"
                    type="password"
                    minLength={8}
                    maxLength={40}
                    onChange={formik.handleChange}
                    value={formik.values.password?.trim()}
                    placeholder="Password"
                  />
                </div>

                <div className={s.inputField}>
                  <span className={`${s.icon} ${s.password}`}></span>
                  <input
                    className={s.input}
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    minLength={8}
                    maxLength={30}
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword?.trim()}
                    placeholder="Confirm"
                  />
                </div>
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <span className={s.mistake}>
                    {formik.errors.confirmPassword}
                  </span>
                ) : null}
              </div>

              <button className={s.next} type="submit">
                Confirm Password
              </button>
            </form>
          </>
        )}

        {isTablet && (
          <div className={s.aboutContainer}>
            <About />
            <div className={s.formContainer}>
              <form className={s.form} onSubmit={formik.handleSubmit}>
                <Links className={s.links} style={{ marginBottom: "40px" }} />
                <div className={s.inputsContainer}>
                  <div className={s.inputField}>
                    <span className={`${s.icon} ${s.password}`}></span>
                    <input
                      className={s.input}
                      id="password"
                      name="password"
                      type="password"
                      minLength={8}
                      maxLength={40}
                      onChange={formik.handleChange}
                      value={formik.values.password?.trim()}
                      placeholder="Password"
                    />
                  </div>

                  <div className={s.inputField}>
                    <span className={`${s.icon} ${s.password}`}></span>
                    <input
                      className={s.input}
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      minLength={8}
                      maxLength={30}
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword?.trim()}
                      placeholder="Confirm"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className={s.btn}
                  style={{
                    backgroundColor: "#F6F244",
                    width: "310px",
                    height: "44px",
                    margin: "0 auto",
                  }}
                >
                  <span>Confirm Password</span>
                </Button>
              </form>
            </div>
          </div>
        )}

        {isDesktop && (
          <div className={s.aboutContainer}>
            <About />
            <div className={s.formContainer}>
              <form className={s.form} onSubmit={formik.handleSubmit}>
                <Links className={s.links} style={{ marginBottom: "60px" }} />
                <div className={s.inputsContainer}>
                  <div className={s.inputField}>
                    <span className={`${s.icon} ${s.password}`}></span>
                    <input
                      className={s.input}
                      id="password"
                      name="password"
                      type="password"
                      minLength={8}
                      maxLength={40}
                      onChange={formik.handleChange}
                      value={formik.values.password?.trim()}
                      placeholder="Password"
                    />
                  </div>

                  <div className={s.inputField}>
                    <span className={`${s.icon} ${s.password}`}></span>
                    <input
                      className={s.input}
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      minLength={8}
                      maxLength={30}
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword?.trim()}
                      placeholder="Confirm"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className={s.btn}
                  style={{
                    backgroundColor: "#F6F244",
                    width: "410px",
                    height: "56px",
                    margin: "0 auto",
                  }}
                >
                  <span className={s.btnText}>Confirm Password</span>
                </Button>
              </form>
            </div>
          </div>
        )}
      </>
    </div>
  );
};
