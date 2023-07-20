import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { PageFormatContext, format } from "../../context/PageFormatContext";
import { ReactComponent as Logo } from "../../images/icons/Logo.svg";
import { ReactComponent as LogoTablet } from "../../images/icons/LogoTablet.svg";
import { ReactComponent as LogoDesktop } from "../../images/icons/LogoDesktopForRegistration.svg";
import s from "./ConfirmPassword.module.scss";

export const ConfirmPassword = () => {
  const { response, mobile, tablet, desktop } = format;
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat === response || pageFormat === mobile;
  const isTablet = pageFormat === tablet;
  const isDesktop = pageFormat === desktop;

  return (
    <div className={s.container}>
      <>
        <NavLink to="/sendRequest">
          <a href="/sendRequest" className={s.back}>
            {" "}
          </a>
        </NavLink>

        <div className={s.logo}>
          <Logo style={{ width: "72px", height: "90px" }} />
        </div>

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
              placeholder="Confirm"
            />
          </div>
        </div>

        <NavLink to="/">
          <button
            className={s.next}
            type="submit"
            style={{
              width: isDesktop && "414px",
              fontSize: isDesktop && "20px",
              height: isDesktop && "56px",
            }}
          >
            Confirm Password
          </button>
        </NavLink>
      </>
    </div>
  );
}
