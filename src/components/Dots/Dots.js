import { NavLink } from "react-router-dom";
import { ReactComponent as YellowDot } from "images/icons/YellowDot.svg";
import { ReactComponent as EmptyDot } from "images/icons/EmptyDot.svg";
import s from "./Dots.module.scss";

export const DotsButton = () => {
  return (
    <div className={s.dots}>
      <YellowDot className={s.itemDot} />
      <NavLink to="/connect" className={s.itemDot}>
        <EmptyDot />
      </NavLink>
      <NavLink to="/auth" className={s.itemDot}>
        {" "}
        <EmptyDot />
      </NavLink>
      <NavLink to="/registration" className={s.itemDot}>
        {" "}
        <EmptyDot />
      </NavLink>
    </div>
  );
};
