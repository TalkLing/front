import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/Header/Header";
import { SideBar } from "../../components/SideBar/SideBar";
import { setLogout } from "../../redux/auth/slice";
import { authSelectors } from "../../redux/auth";
import s from "./Chat.module.scss";

export const Chat = (params) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LogOut = () => {
    dispatch(setLogout(false));
    navigate("/registration");
    localStorage.removeItem("token");
  };

  return (
    <div>
      <Header />
      <SideBar />
      <div className={s.container}>
        {" "}
        Chat
        <div>
          <button onClick={LogOut}>Вийти</button>
        </div>
      </div>
    </div>
  );
};
