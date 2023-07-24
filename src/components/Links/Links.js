import { NavLink } from "react-router-dom";
import s from "./Links.module.scss";

export const Links = ({ style }) => {
  return (
    <div className={s.links} style={style}>
      <NavLink to="/registration" className={s.linkItem}>
        Sign Up
      </NavLink>
      <NavLink to="/login" className={s.linkItem}>
        Sign In
      </NavLink>
    </div>
  );
};
