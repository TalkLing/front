import { useContext } from "react";
import { PageFormatContext, format } from "context/PageFormatContext";
import { SideBar, Channels, Header } from "components";
import { Chat } from "pages";
import s from "./Layot.module.scss";

export const Layot = () => {
  const { response, mobile, tablet, desktop } = format;
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat === response || pageFormat === mobile;
  const isTablet = pageFormat === tablet;
  const isDesktop = pageFormat === desktop;

  return (
    <>
      <Header />
      <div className={s.container}>
        {(isTablet || isDesktop) && <SideBar />}
        {(isTablet || isDesktop) && <Channels />}
        <Chat />
      </div>
    </>
  );
};
