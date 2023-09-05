import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { PageFormatContext, format } from "context/PageFormatContext";
import { ReactComponent as Logo } from "images/icons/LogoDesktopForSignUpPage.svg";
import { ReactComponent as Line } from "images/icons/Line.svg";
import { ReactComponent as Google } from "images/icons/Google.svg";
import { Button, RegistrationForm, About, Links } from "components";
import { Context } from "index";
import { ReactComponent as LineTablet } from "images/icons/LineTablet.svg";
import { ReactComponent as LineDesktop } from "images/icons/LineDesktop.svg";
import { authSelectors } from "redux/auth";
import s from "./Registration.module.scss";

export const Registration = () => {
  const { response, mobile, tablet, desktop } = format;
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat === response || pageFormat === mobile;
  const isDesktop = pageFormat === desktop;
  const isTablet = pageFormat === tablet;
  const userAuth = useSelector(authSelectors.getIsLoggedIn);
  const navigate = useNavigate();
  const { auth } = useContext(Context);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    (isDesktop || isTablet) && (userAuth === true || user) && navigate("/chat");
    // console.log("user registered", user);
  });

  useEffect(() => {
    isMobile && (userAuth === true || user) && navigate("/channels");
    // console.log("user registered", user);
  });

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    // console.log("user", user);
  };

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
            <div className={s.auth}>
              <button
                onClick={login}
                className={s.btn}
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid  #F6F244",
                }}
              >
                <Google className={s.google} />
                Continue with Google
              </button>
            </div>
          </div>
        </>
      )}

      {isTablet && (
        <div className={s.tabletContariner}>
          <About />

          <div className={s.form}>
            <Links />
            <RegistrationForm className={s.signup} />
            <div className={s.textLine}>
              <LineTablet />
              <p className={s.text}>or</p>
              <LineTablet />
            </div>

            <button
              onClick={login}
              className={s.btn}
              style={{
                backgroundColor: "transparent",
                border: "2px solid  #F6F244",
              }}
            >
              <Google className={s.google} />
              Continue with Google
            </button>
          </div>
        </div>
      )}

      {isDesktop && (
        <>
          <div className={s.tabletContariner}>
            <About />
            <div className={s.form}>
              <Links />
              <RegistrationForm className={s.signup} />
              <div className={s.textLine}>
                <LineDesktop />
                <p className={s.text}>or</p>
                <LineDesktop />
              </div>

              <button
                onClick={login}
                className={s.btn}
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
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
