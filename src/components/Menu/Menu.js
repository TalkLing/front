import s from "./Menu.module.scss";

export const Menu = ({ items, active, setActive }) => {
  return (
    <div
      className={active ? s.activeMenu : s.menu}
      onClick={() => setActive(false)}
    >
      <div className={s.blur} />
      <div className={s.content} onClick={(e) => e.stopPropagation()}>
        <ul className={s.list}>
          {items.map((item) => (
            <li className={s.item}>
              <a href={item.href}>{item.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
