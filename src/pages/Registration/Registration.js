import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/icons/Logo.svg";
import { ReactComponent as ButtonAdd } from "../../images/icons/ButtonAdd.svg";
import { ReactComponent as Line } from "../../images/icons/Line.svg";
import { Button } from "../../components/Button/Button";
import { RegistrationForm } from "../../components/Form/RegistrationForm";
import s from "./Registration.module.scss";

export const Registration = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <Logo style={{ width: "72px", height: "90px" }} />
      </div>
      <RegistrationForm />
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
            style={{
              backgroundColor: "transparent",
              border: "2px solid  #F6F244",
            }}
          >
            Continue with Google
          </Button>
        </NavLink>
      </div>
      <div className={s.button}>
        <NavLink to="/registration">
          <ButtonAdd />
        </NavLink>
      </div>
    </div>
  );
};
