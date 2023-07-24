import { useContext } from "react";
import { PageFormatContext, format } from "../../context/PageFormatContext";
import { ReactComponent as LogoTablet } from "../../images/icons/LogoTablet.svg";
import { ReactComponent as LogoDesktop } from "../../images/icons/LogoDesktopForRegistration.svg";
import s from "./About.module.scss";

export const About = () => {
  const { tablet, desktop } = format;
  const pageFormat = useContext(PageFormatContext);
  const isDesktop = pageFormat === desktop;
  const isTablet = pageFormat === tablet;

  return (
    <>
      {isTablet && (
        <div className={s.about}>
          <div className={s.logo}>
            <LogoTablet className={s.logoItem} />
          </div>
          <h1 className={s.titleTablet}>
            <p>CONNECT, </p>
            <p>COMMUNICATE,</p> CONQUER LANGUAGES
          </h1>
          <div className={s.aboutUs}>
            <p>To ensure effective communication and </p>
            <p>targeted discussions, we've created different </p>
            <p>groups based on your language proficiency</p>
            <p> and professional goals. This way, you can</p>{" "}
            <p>engage with like-minded individuals, practice</p> your English
            skills, and grow together.
          </div>
        </div>
      )}

      {isDesktop && (
        <div className={s.about}>
          <div className={s.logo}>
            <LogoDesktop className={s.logoItem} />
          </div>
          <h1 className={s.titleTablet}>
            <p>CONNECT, </p>
            <p>COMMUNICATE,</p> CONQUER LANGUAGES
          </h1>
          <div className={s.aboutUs}>
            <p>To ensure effective communication and targeted discussions,</p>
            <p> we've created different groups based on your language</p>
            <p>proficiency and professional goals. This way, you can engage</p>
            <p>
              with like-minded individuals, practice your English skills, and
            </p>
            <p>grow together.</p>
          </div>
        </div>
      )}
    </>
  );
};
