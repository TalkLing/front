import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { PageFormatContext, format } from "../../context/PageFormatContext";
import { ReactComponent as Logo } from "../../images/icons/Logo.svg";
import { LoginForm } from "../../components/Form/LoginForm";
import { ReactComponent as LogoTablet } from "../../images/icons/LogoTablet.svg";
import { ReactComponent as LogoDesktop } from "../../images/icons/LogoDesktopForRegistration.svg";
import s from "./Login.module.scss";

export const Login = () => {
  const { response, mobile, tablet, desktop } = format;
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat === response || pageFormat === mobile;
  const isTablet = pageFormat === tablet;
  const isDesktop = pageFormat === desktop;

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
        </>
      )}

      {isTablet && (
        <div className={s.tabletContariner}>
          <div className={s.about}>
            <div className={s.logo}>
              <LogoTablet className={s.logoItem} />
            </div>
            <h1 className={s.titleTablet}>
              <p>CONNECT, </p>
              <p>COMMUNICATE,</p> CONQUER LANGUAGES
            </h1>
            <div className={s.aboutUs}>
              <p>To ensure effective communication and </p>
              <p>targeted discussions, we've created different </p>
              <p>groups based on your language proficiency</p>
              <p> and professional goals. This way, you can</p>{" "}
              <p>engage with like-minded individuals, practice</p> your English
              skills, and grow together.
            </div>
          </div>

          <div className={s.form}>
            <div className={s.links}>
              <NavLink to="/registration" className={s.linkItem}>
                Sign Up
              </NavLink>
              <NavLink to="/login" className={s.linkItem}>
                Sign In
              </NavLink>
            </div>

            <LoginForm className={s.signup} />
          </div>
        </div>
      )}

      {isDesktop && (
        <div className={s.tabletContariner}>
          <div className={s.about}>
            <div className={s.logo}>
              <LogoDesktop className={s.logoItem} />
            </div>
            <h1 className={s.titleTablet}>
              <p>CONNECT, </p>
              <p>COMMUNICATE,</p> CONQUER LANGUAGES
            </h1>
            <div className={s.aboutUs}>
                <p>
                  To ensure effective communication and targeted discussions,
                </p>
                <p> we've created different groups based on your language</p>
                <p>
                  proficiency and professional goals. This way, you can engage
                </p>
                <p>
                  with like-minded individuals, practice your English skills,
                  and
                </p>
                <p>grow together.</p>
            </div>
          </div>

          <div className={s.form}>
            <div className={s.links}>
              <NavLink to="/registration" className={s.linkItem}>
                Sign Up
              </NavLink>
              <NavLink to="/login" className={s.linkItem}>
                Sign In
              </NavLink>
            </div>

            <LoginForm className={s.signup} />
          </div>
        </div>
      )}
    </div>
  );
};
