import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { PageFormatContext, format } from "../../context/PageFormatContext";
import { ReactComponent as Logo } from "../../images/icons/Logo.svg";
import { About } from "../../components/About/About";
import { Links } from "../../components/Links/Links";
import { Button } from "../../components/Button/Button";
import s from "./SendRequest.module.scss";

export const SendRequest = () => {
  const { response, mobile, tablet, desktop } = format;
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat === response || pageFormat === mobile;
  const isTablet = pageFormat === tablet;
  const isDesktop = pageFormat === desktop;

  return (
    <div className={s.container}>
      {isMobile && (
        <>
          <NavLink to="/login" className={s.back}></NavLink>

          <div className={s.logo}>
            <Logo style={{ width: "72px", height: "90px" }} />
          </div>

          <div className={s.hint}>
            Pleace enter your email. You will resive a link
            <br />
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
            <button className={s.next} type="submit">
              Send Request
            </button>
          </NavLink>
        </>
      )}

      {isTablet && (
        <div className={s.aboutContainer}>
          <About />
          <div className={s.formContainer}>
            <form className={s.form}>
              <Links className={s.links} style={{ marginBottom: "40px" }} />
              <div className={s.text}>
                <p> Pleace enter your email. You will resive a link</p> to
                create a new password via email
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
              <Button
                className={s.btn}
                style={{
                  backgroundColor: "#F6F244",
                  width: "310px",
                  height: "44px",
                  margin: "0 auto",
                }}
              >
                <span>Send Request</span>
              </Button>
            </form>
          </div>
        </div>
      )}

      {isDesktop && (
        <div className={s.aboutContainer}>
          <About />
          <div className={s.formContainer}>
            <form className={s.form}>
              <Links className={s.links} style={{ marginBottom: "60px" }} />
              <div className={s.text}>
                <p> Pleace enter your email. You will resive a link</p> to
                create a new password via email
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

              <Button
                className={s.btn}
                style={{
                  backgroundColor: "#F6F244",
                  width: "410px",
                  height: "56px",
                  margin: "0 auto",
                }}
              >
                <span className={s.btnText}>Send Request</span>
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
