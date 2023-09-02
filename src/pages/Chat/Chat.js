// import s from "./Chat.module.scss";
import { Message } from "components";
import { InputField } from "components/Chat/InputField/InputField";

export const Chat = () => {
  return (
    <div>
      <Message />

      <InputField />
    </div>
  );
};
