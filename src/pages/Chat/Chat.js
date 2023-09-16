import { Message, InputField, SharedLayout } from "components";
import s from "./Chat.module.scss";

export const Chat = () => {
  return (
    <>
      <SharedLayout />
      <div className={s.container}>
        <Message />

        <InputField />
      </div>
    </>
  );
};
