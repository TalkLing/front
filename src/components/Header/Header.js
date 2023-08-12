import { useContext } from "react";
import { PageFormatContext, format } from "context/PageFormatContext";
import { ReactComponent as LogoHeaderTablet } from "images/icons/LogoHeaderTablet.svg";
import { ReactComponent as LogoHeaderDesktop } from "images/icons/LogoHeaderDesktop.svg";
import s from "./Header.module.scss";

export const Header = ({ style }) => {
  const { response, mobile, tablet, desktop } = format;
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat === response || pageFormat === mobile;
  const isTablet = pageFormat === tablet;
  const isDesktop = pageFormat === desktop;

  return (
    <header className={s.header}>
      {isTablet && <LogoHeaderTablet className={s.logo} />}
      {isDesktop && <LogoHeaderDesktop className={s.logo} />}
    </header>
  );
};
