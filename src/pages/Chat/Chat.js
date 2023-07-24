import { Header } from "../../components/Header/Header";
import { SideBar } from "../../components/SideBar/SideBar";
import s from "./Chat.module.scss";

export const Chat = (params) => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className={s.container}> Chat</div>
    </div>
  );
};
