import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PageFormatContext, format } from "context/PageFormatContext";
import { ReactComponent as LogoHeaderTablet } from "images/icons/LogoHeaderTablet.svg";
import { ReactComponent as LogoHeaderDesktop } from "images/icons/LogoHeaderDesktop.svg";
import { setLogout } from "redux/auth/slice";
import { Context } from "index";
import s from "./Header.module.scss";

export const Header = ({ style }) => {
  const { response, mobile, tablet, desktop } = format;
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat === response || pageFormat === mobile;
  const isTablet = pageFormat === tablet;
  const isDesktop = pageFormat === desktop;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useContext(Context);

  const LogOut = () => {
    auth.signOut();
    dispatch(setLogout(false));
    isMobile ? navigate("/auth") : navigate("/registration");
    localStorage.removeItem("token");
  };

  return (
    <header className={s.header}>
      {isTablet && <LogoHeaderTablet className={s.logo} />}
      {isDesktop && <LogoHeaderDesktop className={s.logo} />}
      <button onClick={LogOut}>Вийти</button>
    </header>
  );
};
