import { useContext } from "react";
import { Header, SideBar, Message, Channels } from "components";
import { PageFormatContext, format } from "context/PageFormatContext";
import avatar from "images/user1.jpg";
import s from "./Chat.module.scss";

export const Chat = () => {
  const { response, mobile, tablet, desktop } = format;
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat === response || pageFormat === mobile;
  const isTablet = pageFormat === tablet;
  const isDesktop = pageFormat === desktop;

  return (
    <>
      <div className={s.container}>
        <Message
          avatar={avatar}
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to"
          date="Sun Aug 13 2023 20:14:03"
        />

        <Message
          text="Duis aute irure dolor in reprehenderit in voluptate velit  "
          date="Sun Aug 13 2023 20:14:03"
          isMe={true}
        />

        <Message
          avatar={avatar}
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to"
          date="Sun Aug 13 2023 20:14:03"
          unReaded={true}
        />

        <Message avatar={avatar} isTyping />
      </div>
    </>
  );
};
