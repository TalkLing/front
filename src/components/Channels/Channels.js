import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "index";
import { DialogItem, Dialogs, Header, Menu, Navbar } from "components";
import { PageFormatContext, format } from "context/PageFormatContext";
import { ReactComponent as ArrowGoBack } from "images/icons/ArrowBackBlack.svg";
import s from "./Channels.module.scss";

export const Channels = () => {
  const { response, mobile, tablet, desktop } = format;
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat === response || pageFormat === mobile;
  const isDesktop = pageFormat === desktop;
  const isTablet = pageFormat === tablet;
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <div className={s.container}>
        {isMobile && (
          <div className={s.subheader}>
            <ArrowGoBack />
            <Navbar />
          </div>
        )}

        <div className={s.channelsList}>
          <button>Channels</button>
          <ul>
            <li onClick={() => navigate("/chat")}>B1 channel</li>
          </ul>
        </div>

        <DialogItem />
        {/*<Dialogs
        items={[
          {
            user: {
              username: "Jane Cooper",
              avatar: null,
            },
            message: {
              text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to",
              unReaded: true,
              created_at: new Date(),
            },
          },
        ]}
      />*/}
      </div>
    </>
  );
};
