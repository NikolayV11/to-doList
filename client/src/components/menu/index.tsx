import styles from "./Menu.module.scss";
import { BtnTheme, LinkBtn } from "../index";
import { useEffect, useRef, useState } from "react";

import { listLink } from "./listLink";

export const Menu = () => {
  const [open, setOpen] = useState(false);

  const refMenu = useRef<HTMLElement>(null);
  function onClickMenu() {
    setOpen(!open);
  }

  useEffect(() => {
    const clickOutsideTheBlock = (
      event: MouseEvent & {
        composedPath: (tar?: HTMLElement) => EventTarget[];
      },
    ) => {
      // сверяет
      if (!refMenu) return;
      if (!event.composedPath().includes(refMenu.current)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", clickOutsideTheBlock);
    return () => {
      window.removeEventListener("click", clickOutsideTheBlock);
    };
  }, []);
  if (!refMenu) return;
  return (
    <nav ref={refMenu} className={styles.nav}>
      <button onClick={onClickMenu} className={styles.nav__btn}>
        menu
      </button>
      {open && (
        <div className={styles.nav__menu_list}>
          {listLink.map((item, index) => {
            return (
              <LinkBtn key={index} onClick={onClickMenu} title={item.title} link={item.link} />
            );
          })}
          <BtnTheme />
        </div>
      )}
    </nav>
  );
};
