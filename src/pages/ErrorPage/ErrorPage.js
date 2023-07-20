import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { PageFormatContext, format } from "../../context/PageFormatContext";
import s from "./ErrorPage.module.scss";

export const ErrorPage = () => {
  const { response, mobile, tablet, desktop } = format;
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat === response || pageFormat === mobile;
  const isTablet = pageFormat === tablet;
  const isDesktop = pageFormat === desktop;

  return (
    <div className={s.background}>
      {isMobile && (
        <>
          <div className={s.top}></div>

          <div className={s.content}>
            <NavLink to="/login">
              <a href="/login" className={s.back}>
                {" "}
              </a>
            </NavLink>

            <div className={s.pictureContainer}></div>

            <div className={s.text}>
              Sorry{'((('}
              <br/>
              Page not found
            </div>

            <NavLink to="/login">
              <button
                className={s.next}
                type="submit"
                style={{
                  width: isDesktop && "414px",
                  fontSize: isDesktop && "20px",
                  height: isDesktop && "56px",
                }}
              >
                Go Back
              </button>
            </NavLink>
          </div>
        </>
      )}
    </div>
  )
}