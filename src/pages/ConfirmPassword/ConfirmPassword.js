import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { PageFormatContext, format } from "context/PageFormatContext";
import { ReactComponent as Logo } from "images/icons/Logo.svg";
import { Button } from "components/Button/Button";
import { About } from "components/About/About";
import { Links } from "components/Links/Links";
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
        {isMobile && (
          <>
            {" "}
            <NavLink to="/sendRequest" className={s.back}></NavLink>
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
              <button className={s.next} type="submit">
                Confirm Password
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
                <div className={s.inputsContainer}>
                  <div className={s.inputField}>
                    <span className={`${s.icon} ${s.password}`}></span>
                    <input
                      className={s.input}
                      id="email"
                      name="email"
                      type="password"
                      placeholder="Password"
                    />
                  </div>

                  <div className={s.inputField}>
                    <span className={`${s.icon} ${s.password}`}></span>
                    <input
                      className={s.input}
                      id="confirm"
                      name="confirm"
                      type="password"
                      placeholder="Confirm"
                    />
                  </div>
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
                  <span>Confirm Password</span>
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
                <div className={s.inputsContainer}>
                  <div className={s.inputField}>
                    <span className={`${s.icon} ${s.password}`}></span>
                    <input
                      className={s.input}
                      id="email"
                      name="email"
                      type="password"
                      placeholder="Password"
                    />
                  </div>

                  <div className={s.inputField}>
                    <span className={`${s.icon} ${s.password}`}></span>
                    <input
                      className={s.input}
                      id="confirm"
                      name="confirm"
                      type="password"
                      placeholder="Confirm"
                    />
                  </div>
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
                  <span className={s.btnText}>Confirm Password</span>
                </Button>
              </form>
            </div>
          </div>
        )}
      </>
    </div>
  );
};
