// import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../images/icons/Logo.svg";
import s from "./Login.module.scss";

export const Login = () => {
  return (
    <div className={s.container}>
      <a href="/" className={s.back}> </a>

      <div className={s.logo}>
        <Logo style={{ width: "72px", height: "90px" }}/>
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

      <a href="/" className={s.forgot}>Forgot Password?</a>

      <button className={s.button}>Log In</button>

      <div className={s.dontHave}>
        Don`t have an account? { }
        <a href="/" className={s.sign}>Sign Up</a>
      </div>
    </div>
  );
};
