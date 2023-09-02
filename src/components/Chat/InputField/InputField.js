import { useState } from "react";
import s from "./InputField.module.scss";

export const IconsList = ({ message }) => (
  <ul className={`${s.iconsList} ${s.visible} ${message && s.fadeInOut}`}>
    <li></li>
    <li></li>
    <li></li>
  </ul>
);

export const InputField = () => {
  const [message, setMessage] = useState("");

  return (
    <div className={s.formcontainer}>
      <div className={s.inputWrapper}>
        <input
          className={s.input}
          type="text"
          placeholder="Type a massage"
          onChange={(e) => setMessage(e.target.value)}
        />

        <IconsList message={message} />
      </div>

      <button className={s.sendButon} type="submit">
        <span className={s.sendButonText}>Send</span>{" "}
        <span className={s.sendIcon}></span>
      </button>

      <IconsList />
    </div>
  );
};
