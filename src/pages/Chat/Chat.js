import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Header, SideBar, Message } from "components";
import { setLogout } from "redux/auth/slice";
import { authSelectors } from "redux/auth";
import { Context } from "index";
import s from "./Chat.module.scss";

export const Chat = (params) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useContext(Context);

  const LogOut = () => {
    auth.signOut();
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
        <Message />
        <div>
          <button onClick={LogOut}>Вийти</button>
        </div>
      </div>
    </div>
  );
};
