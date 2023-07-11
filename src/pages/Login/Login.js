import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { PageFormatContext, format } from "../../context/PageFormatContext";
import { ReactComponent as Logo } from "../../images/icons/Logo.svg";
import { LoginForm } from "../../components/Form/LoginForm";
import s from "./Login.module.scss";

export const Login = () => {
  const { response, mobile, tablet, desktop } = format;
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat === response || pageFormat === mobile;
  const isDesktop = pageFormat === desktop;
  const isTablet = pageFormat === tablet;

  return (
    <div className={s.container}>
      {isMobile && (
        <>
          <NavLink to="/auth">
            <a href="/auth" className={s.back}>
              {" "}
            </a>
          </NavLink>

          <div className={s.logo}>
            <Logo style={{ width: "72px", height: "90px" }} />
          </div>

          <LoginForm />

          <div className={s.dontHave}>
            Don`t have an account? {}
            <NavLink to="/registration">
              <a href="/registration" className={s.sign}>
                Sign Up
              </a>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};
