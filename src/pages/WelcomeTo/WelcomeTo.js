import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { ReactComponent as ButtonAdd } from "../../images/icons/ButtonAdd.svg";
import { DotsButton } from "../../components/Dots/Dots";
import { PageFormatContext, format } from "../../context/PageFormatContext";
import { ReactComponent as Logo } from "../../images/icons/Logo.svg";
import { ReactComponent as LogoDesktop } from "../../images/icons/LogoDesktop.svg";
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

      {(isDesktop || isTablet) && (
        <>
          <h1 className={s.titleDesktop}>Welcome to</h1>
          <div className={s.logo}>
            <LogoDesktop />
          </div>
        </>
      )}
    </div>
  );
};
