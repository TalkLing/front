import { ReactComponent as Logo } from "../../images/Logo.svg";
import s from "./WelcomeTo.module.scss";
import { Component } from "react";

export const WelcomeTo = (params) => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Welcome to</h1>
      <Logo />
    </div>
  );
};
