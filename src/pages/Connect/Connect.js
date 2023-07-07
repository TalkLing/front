import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/icons/Logo.svg";
import { ReactComponent as ButtonAdd } from "../../images/icons/ButtonAdd.svg";
import { ReactComponent as YellowDot } from "../../images/icons/YellowDot.svg";
import { ReactComponent as EmptyDot } from "../../images/icons/EmptyDot.svg";
import s from "./Connect.module.scss";

export const Connect = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <Logo style={{ width: "112px", height: "140px" }} />
      </div>
      <h2 className={s.title}>
        <p>CONNECT,</p> <p>COMMUNICATE,</p> CONQUER LANGUAGES
      </h2>
      <div className={s.button}>
        <div className={s.dots}>
          <NavLink to="/" className={s.itemDot}>
            <EmptyDot />
          </NavLink>
          <YellowDot className={s.itemDot} />

          <NavLink to="/auth" className={s.itemDot}>
            {" "}
            <EmptyDot />
          </NavLink>
          <NavLink to="/registration" className={s.itemDot}>
            {" "}
            <EmptyDot />
          </NavLink>
        </div>
        <div>
          <NavLink to="/auth">
            <ButtonAdd />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
