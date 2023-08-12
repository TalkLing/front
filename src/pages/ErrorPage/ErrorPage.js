import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { PageFormatContext, format } from "context/PageFormatContext";
import { ReactComponent as ErrorMobile } from "images/icons/ErrorMobile.svg";
import { ReactComponent as ErrorTablet } from "images/icons/ErrorTablet.svg";
import { ReactComponent as ErrorDesktop } from "images/icons/ErrorDesktop.svg";
import { Header } from "components/Header/Header";
import { SideBar } from "components/SideBar/SideBar";
import s from "./ErrorPage.module.scss";

export const ErrorPage = () => {
  const { response, mobile, tablet, desktop } = format;
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat === response || pageFormat === mobile;
  const isTablet = pageFormat === tablet;
  const isDesktop = pageFormat === desktop;

  return (
    <div className={s.background}>
      <Header />
      <div className={s.content}>
        <SideBar />
        <div className={s.container}>
          {" "}
          {isMobile && <NavLink to="/login" className={s.back}></NavLink>}
          <div className={s.pictureContainer}>
            {isMobile && <ErrorMobile />}
            {isTablet && <ErrorTablet />}
            {isDesktop && <ErrorDesktop />}
          </div>
          <div className={s.textContainer}>
            <div className={s.text}>
              <p>Sorry{"((("}</p>
              <p>Page not found</p>
            </div>
            {isTablet && (
              <div className={s.about}>
                <p>We apologize for the missing page.</p>
                <p> We're working diligently to bring it</p>{" "}
                <p>back. Please bear with us while you</p>
                <p> check out the rest of our chat.</p> Thank you for your
                understanding.
              </div>
            )}

            {isDesktop && (
              <div className={s.about}>
                <p>
                  We apologize for the missing page. We're working diligently
                </p>{" "}
                <p>
                  to bring it back. Please bear with us while you check out the{" "}
                </p>
                rest of our chat.<p> Thank you for your understanding.</p>
              </div>
            )}
            <NavLink to="/login">
              <button
                className={s.btn}
                type="submit"
                /* style={{
                  width: isDesktop && "414px",
                  fontSize: isDesktop && "20px",
                  height: isDesktop && "56px",
                }}*/
              >
                Go back
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
