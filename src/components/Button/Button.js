import s from "./Button.module.scss";

export const Button = ({ style, children, onClickPage, currentPage }) => {
  return (
    <button
      //  onClick={() => onClickPage(Number(currentPage) + 1)}
      type="button"
      className={s.button}
      style={style}
    >
      {children}
    </button>
  );
};
