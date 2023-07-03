import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/icons/Logo.svg";
import { ReactComponent as ButtonAdd } from "../../images/icons/ButtonAdd.svg";
import s from "./WelcomeTo.module.scss";

export const WelcomeTo = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Welcome to</h1>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.button}>
        <NavLink to="/connect">
          <ButtonAdd />
        </NavLink>
      </div>
    </div>
  );
};
