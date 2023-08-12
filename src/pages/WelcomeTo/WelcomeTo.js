import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { ReactComponent as ButtonAdd } from "images/icons/ButtonAdd.svg";
import { DotsButton } from "components";
import { PageFormatContext, format } from "context/PageFormatContext";
import { ReactComponent as Logo } from "images/icons/Logo.svg";
//import { ReactComponent as LogoDesktop } from "../../images/icons/LogoDesktopWithoutDots.svg";
import { ReactComponent as Title } from "images/icons/Title.svg";
import { ReactComponent as LogoDesktop } from "images/icons/LogoDesktopWithoutDotsAndTitle.svg";
import { ReactComponent as LogoTablet } from "images/icons/LogoTabletWithoutDots.svg";
import s from "./WelcomeTo.module.scss";

export const WelcomeTo = () => {
  const { response, mobile, tablet, desktop } = format;
  const pageFormat = useContext(PageFormatContext);
  const isTablet = pageFormat === tablet;
  const isMobile = pageFormat === response || pageFormat === mobile;
  const isDesktop = pageFormat === desktop;
  const navigate = useNavigate();
  const firstLoading = useRef(true);

  useEffect(() => {
    if (firstLoading.current) {
      firstLoading.current = false;
      return;
    }
  }, []);

  useEffect(() => {
    (isDesktop || isTablet) &&
      setTimeout(() => {
        navigate("/registration");
      }, 3000);
  }, [isDesktop, isTablet, navigate]);

  return (
    <div className={s.container}>
      {isMobile && (
        <>
          <h1 className={s.title}>Welcome to</h1>
          <div className={s.logo}>
            <Logo />
          </div>
          <div className={s.button}>
            <DotsButton />
            <div>
              <NavLink to="/connect">
                <ButtonAdd />
              </NavLink>
            </div>
          </div>
        </>
      )}

      {isTablet && (
        <>
          <h1 className={s.titleTablet}>Welcome to</h1>
          <div className={s.logo}>
            <span className={s.arrow}></span>
            <LogoTablet />
          </div>
          <div className={s.animation}>
            <p className={`${s.ballBlue1} ${s.ball}`} />
            <p className={`${s.ballBlue2} ${s.ball}`} />
            <p className={`${s.ballYellow} ${s.ball}`} />
          </div>
        </>
      )}

      {isDesktop && (
        <>
          <h1 className={s.titleDesktop}>Welcome to</h1>
          <div className={s.logo}>
            <span className={s.arrow}></span>
            <div className={s.titleContainer}>
              <LogoDesktop className={s.logoItem} />
              <Title style={{ marginTop: "15px" }} />
            </div>
          </div>
          <div className={s.animation}>
            <p className={s.ballBlue1} />
            <p className={s.ballBlue2} />
            <p className={s.ballYellow} />
          </div>
        </>
      )}
    </div>
  );
};
