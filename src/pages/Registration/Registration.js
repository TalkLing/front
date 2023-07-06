import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/icons/Logo.svg";
import { ReactComponent as ButtonAdd } from "../../images/icons/ButtonAdd.svg";
import { ReactComponent as Line } from "../../images/icons/Line.svg";
import { ReactComponent as Google } from "../../images/icons/Google.svg";
import { Button } from "../../components/Button/Button";
import { RegistrationForm } from "../../components/Form/RegistrationForm";
import s from "./Registration.module.scss";

export const Registration = () => {
  return (
    <div className={s.container}>
      <NavLink to="/auth" className={s.back}></NavLink>

      <div className={s.logo}>
        <Logo style={{ width: "72px", height: "90px" }} />
      </div>
      <RegistrationForm />
      <div className={s.auth}>
        <div className={s.textLine}>
          <Line />
          <p className={s.text}>or</p>
          <Line />
        </div>

        <Button
          className={s.auth}
          style={{
            backgroundColor: "transparent",
            border: "2px solid  #F6F244",
          }}
        >
          <Google className={s.google} />
          Continue with Google
        </Button>
      </div>
    </div>
  );
};
