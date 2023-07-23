import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PageFormatContext, format } from "../../context/PageFormatContext";
import { ReactComponent as Logo } from "../../images/icons/LogoDesktopForSignUpPage.svg";
import { ReactComponent as ButtonAdd } from "../../images/icons/ButtonAdd.svg";
import { ReactComponent as Line } from "../../images/icons/Line.svg";
import { ReactComponent as Google } from "../../images/icons/Google.svg";
import { Button } from "../../components/Button/Button";
import { RegistrationForm } from "../../components/Form/RegistrationForm";
import { ReactComponent as LogoTablet } from "../../images/icons/LogoTablet.svg";
import { ReactComponent as LineTablet } from "../../images/icons/LineTablet.svg";
import { ReactComponent as LogoDesktop } from "../../images/icons/LogoDesktopForRegistration.svg";
import { ReactComponent as LineDesktop } from "../../images/icons/LineDesktop.svg";
import { authSelectors } from "../../redux/auth";
import s from "./Registration.module.scss";

export const Registration = () => {
  const { response, mobile, tablet, desktop } = format;
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat === response || pageFormat === mobile;
  const isDesktop = pageFormat === desktop;
  const isTablet = pageFormat === tablet;
  const user = useSelector(authSelectors.getIsLoggedIn);
  const navigate = useNavigate();

  console.log("user", user);

  user && navigate("/chat");

  return (
    <div className={s.container}>
      {isMobile && (
        <>
          <NavLink to="/auth" className={s.back}></NavLink>

          <div className={s.logo}>
            <Logo style={{ width: "72px", height: "90px" }} />
          </div>
          <RegistrationForm />
          <div className={s.auth}>
            <div className={s.textLine}>
              <Line />
              <p className={s.text}>or</p>
              <Line />
            </div>

            <Button
              className={s.auth}
              style={{
                backgroundColor: "transparent",
                border: "2px solid  #F6F244",
              }}
            >
              <Google className={s.google} />
              Continue with Google
            </Button>
          </div>
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
            <RegistrationForm className={s.signup} />
            <div className={s.textLine}>
              <LineTablet />
              <p className={s.text}>or</p>
              <LineTablet />
            </div>

            <Button
              className={s.auth}
              style={{
                backgroundColor: "transparent",
                border: "2px solid  #F6F244",
              }}
            >
              <Google className={s.google} />
              Continue with Google
            </Button>
          </div>
        </div>
      )}

      {isDesktop && (
        <>
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
              <RegistrationForm className={s.signup} />
              <div className={s.textLine}>
                <LineDesktop />
                <p className={s.text}>or</p>
                <LineDesktop />
              </div>

              <Button
                className={s.auth}
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid  #F6F244",
                  width: "414px",
                  height: "56px",
                  fontSize: "20px",
                }}
              >
                <Google className={s.google} />
                Continue with Google
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
