import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ReactComponent as ButtonAdd } from "../../images/icons/ButtonAdd.svg";
import { DotsButton } from "../../components/Dots/Dots";
import { PageFormatContext, format } from "../../context/PageFormatContext";
import { ReactComponent as Logo } from "../../images/icons/Logo.svg";
import { ReactComponent as LogoTablet } from "../../images/icons/LogoTablet.svg";
import s from "./WelcomeTo.module.scss";
import { RegistrationForm } from "../../components/Form/RegistrationForm";

export const WelcomeTo = () => {
  const { response, mobile, tablet } = format;
  const pageFormat = useContext(PageFormatContext);
  const isTablet = pageFormat === tablet;
  const isMobile = pageFormat === response || pageFormat === mobile;

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
        <div className={s.tabletContariner}>
          <div className={s.about}>
            <div className={s.logo}>
              <LogoTablet className={s.logoItem} />
            </div>
            <h1 className={s.titleTablet}>
              <p>CONNECT, </p>
              <p>COMMUNICATE,</p> CONQUER LANGUAGES
            </h1>
            <p className={s.aboutUs}>
              <p>To ensure effective communication and </p>
              <p>targeted discussions, we've created different </p>
              <p>groups based on your language proficiency</p>
              <p> and professional goals. This way, you can</p>{" "}
              <p>engage with like-minded individuals, practice</p> your English
              skills, and grow together.
            </p>
          </div>

          <div className={s.form}>
            <div className={s.links}>
              <NavLink to="/" className={s.linkItem}>
                Sign Up
              </NavLink>
              <NavLink to="/login" className={s.linkItem}>
                Sign In
              </NavLink>
            </div>
            <RegistrationForm />
          </div>
        </div>
      )}
    </div>
  );
};
