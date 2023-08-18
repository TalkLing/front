import { useState, useContext } from "react";
import { Menu } from "components";
import { Context } from "index";
import { PageFormatContext, format } from "context/PageFormatContext";
import s from "./Navigation.module.scss";

export const Navbar = () => {
  const { response, mobile, tablet, desktop } = format;
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat === response || pageFormat === mobile;
  const isTablet = pageFormat === tablet;
  const isDesktop = pageFormat === desktop;
  const [menuActive, setMenuActive] = useState(false);

  const items = [
    { value: "About", href: "/chat/about" },
    { value: "Members", href: "/chat/members" },
    { value: "Settings", href: "/chat/settings" },
  ];
  return (
    <>
      <nav>
        {isMobile && (
          <>
            <div
              className={s.burgerBtn}
              onClick={() => {
                setMenuActive(!menuActive);
              }}
            >
              <span />
            </div>
            <Menu active={menuActive} setActive={setMenuActive} items={items} />
          </>
        )}
      </nav>
    </>
  );
};
