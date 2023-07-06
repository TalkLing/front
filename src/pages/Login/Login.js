import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/icons/Logo.svg";
import { LoginForm } from "../../components/Form/LoginForm";
import { Button } from "../../components/Button/Button";
import s from "./Login.module.scss";

export const Login = (params) => {
  return (
    <div className={s.container}>
      <NavLink to="/auth">
        <a href="/auth" className={s.back}>
          {" "}
        </a>
      </NavLink>

      <div className={s.logo}>
        <Logo style={{ width: "72px", height: "90px" }} />
      </div>

      <LoginForm />

      <a href="/" className={s.forgot}>
        Forgot Password?
      </a>

      <NavLink to="/login">
        <Button
          style={{
            backgroundColor: "transparent",
            border: "2px solid #F6F244",
          }}
        >
          Log In
        </Button>
      </NavLink>

      <div className={s.dontHave}>
        Don`t have an account? {}
        <NavLink to="/registration">
          <a href="/registration" className={s.sign}>
            Sign Up
          </a>
        </NavLink>
      </div>
    </div>
  );
};
