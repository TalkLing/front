import { useContext } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import PropTypes from "prop-types";
import { PageFormatContext, format } from "context/PageFormatContext";
import { TypingAnimation } from "components";
import s from "./Message.module.scss";

export const Message = ({
  avatar,
  user,
  text,
  date,
  isMe,
  isTyping,
  unReaded,
}) => {
  const { response, mobile, tablet, desktop } = format;
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat === response || pageFormat === mobile;
  const isTablet = pageFormat === tablet;
  const isDesktop = pageFormat === desktop;

  return (
    <div className={s.message}>
      {" "}
      {!isMe ? (
        <>
          {unReaded && (
            <div className={s.divinderBlock}>
              <p className={s.divinder}>Unread</p>
            </div>
          )}
          <div className={s.NotMyAvatar}>
            <div className={s.about}>
              <img alt={avatar} src={avatar} className={s.image} />
              <div className={s.data}>
                <p className={s.name}>Devon Lane</p>
                <p className={s.date}>
                  {formatDistanceToNow(new Date(2023, 6, 2), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            </div>{" "}
          </div>
          <div className={isTyping ? s.typingMessage : s.notMyContent}>
            {isTyping ? (
              <div className={s.typingBlock}>
                <TypingAnimation />
                <p className={s.typingText}>Devon Lane is typing</p>
              </div>
            ) : (
              <p className={s.text}>{text}</p>
            )}
          </div>
        </>
      ) : (
        <>
          <div className={s.myAvatar}>
            <div className={s.about}>
              <div className={s.data}>
                <p className={s.name}>You</p>
                <p className={s.date}>
                  {formatDistanceToNow(new Date(2023, 7, 2), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            </div>
          </div>
          <div className={s.myContent}>
            <p className={s.text}>{text}</p>
          </div>
        </>
      )}
    </div>
  );
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  unReaded: PropTypes.bool,
  isTyping: PropTypes.bool,
};
