import { useContext } from "react";
import { PageFormatContext, format } from "context/PageFormatContext";
import s from "./SideBar.module.scss";

export const SideBar = () => {
  const { tablet, desktop } = format;
  const pageFormat = useContext(PageFormatContext);

  const isTablet = pageFormat === tablet;
  const isDesktop = pageFormat === desktop;

  return (
    <div>{(isTablet || isDesktop) && <div className={s.sideBar}></div>}</div>
  );
};
