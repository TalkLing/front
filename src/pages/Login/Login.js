import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/icons/Logo.svg";
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

      <div className={s.inputs}>
        <div className={s.inputField}>
          <span className={`${s.icon} ${s.username}`}></span>
          <input
            className={s.input}
            name="username"
            placeholder="Username"
            type="text"
          />
        </div>

        <div className={s.inputField}>
          <span className={`${s.icon} ${s.email}`}></span>
          <input
            className={s.input}
            name="email"
            placeholder="Email"
            type="email"
          />
        </div>
      </div>

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
