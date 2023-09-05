import s from "./TypingAnimation.module.scss";

export const TypingAnimation = () => {
  return (
    <>
      <div className={`${s.half} ${s.light}`}>
        <div className={s.typing}>
          <span className={`${s.circle} ${s.scaling}`}></span>
          <span className={`${s.circle} ${s.scaling}`}></span>
          <span className={`${s.circle} ${s.scaling}`}></span>
        </div>
      </div>
    </>
  );
};
