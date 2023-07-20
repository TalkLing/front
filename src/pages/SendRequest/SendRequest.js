import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { PageFormatContext, format } from "../../context/PageFormatContext";
import { ReactComponent as Logo } from "../../images/icons/Logo.svg";
import { ReactComponent as LogoTablet } from "../../images/icons/LogoTablet.svg";
import { ReactComponent as LogoDesktop } from "../../images/icons/LogoDesktopForRegistration.svg";
import s from "./SendRequest.module.scss";

export const SendRequest = () => {
  const { response, mobile, tablet, desktop } = format;
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat === response || pageFormat === mobile;
  const isTablet = pageFormat === tablet;
  const isDesktop = pageFormat === desktop;

  return (
    <div className={s.container}>
      <>
        <NavLink to="/login">
          <a href="/login" className={s.back}>
            {" "}
          </a>
        </NavLink>

        <div className={s.logo}>
          <Logo style={{ width: "72px", height: "90px" }} />
        </div>

        <div className={s.hint}>
          Pleace enter your email. You will resive a link
          <br/>
          to create a new password via email
        </div>

        <div className={s.inputField}>
          <span className={`${s.icon} ${s.email}`}></span>
          <input
            className={s.input}
            id="email"
            name="email"
            type="text"
            placeholder="Email"
          />
        </div>

        <NavLink to="/confirmPassword">
          <button
            className={s.next}
            type="submit"
            style={{
              width: isDesktop && "414px",
              fontSize: isDesktop && "20px",
              height: isDesktop && "56px",
            }}
          >
            Send Request
          </button>
        </NavLink>
      </>
    </div>
  );
}