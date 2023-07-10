import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/icons/Logo.svg";
import { ReactComponent as ButtonAdd } from "../../images/icons/ButtonAdd.svg";
import { ReactComponent as Line } from "../../images/icons/Line.svg";
import { Button } from "../../components/Button/Button";
import { ReactComponent as YellowDot } from "../../images/icons/YellowDot.svg";
import { ReactComponent as EmptyDot } from "../../images/icons/EmptyDot.svg";
import s from "./Auth.module.scss";

export const Auth = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <Logo style={{ width: "114px", height: "140px" }} />
      </div>
      <div className={s.auth}>
        <NavLink to="/registration" className={s.link}>
          <Button style={{ backgroundColor: "#F6F244" }}>Create Account</Button>
        </NavLink>
        <div className={s.textLine}>
          <Line />
          <p className={s.text}>or</p>
          <Line />
        </div>
        <NavLink to="/login">
          <Button
            className={s.btn}
            style={{
              backgroundColor: "transparent",
              border: "2px solid  #F6F244",
            }}
          >
            Log In
          </Button>
        </NavLink>
      </div>
      <div className={s.button}>
        <div className={s.dots}>
          <NavLink to="/" className={s.itemDot}>
            <EmptyDot />
          </NavLink>
          <NavLink to="/connect" className={s.itemDot}>
            <EmptyDot />
          </NavLink>
          <YellowDot className={s.itemDot} />
          <NavLink to="/registration" className={s.itemDot}>
            <EmptyDot />
          </NavLink>
        </div>
        <NavLink to="/registration">
          <ButtonAdd />
        </NavLink>
      </div>
    </div>
  );
};
